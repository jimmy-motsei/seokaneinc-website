import { NextRequest, NextResponse } from "next/server";

const BREVO_API_KEY = process.env.BREVO_API_KEY!;
const CONTACT_LIST_ID = 2; // ← Replace with your Brevo "Contact Requests" list ID
const NOTIFY_EMAIL = "city@seokaneinc.co.za";

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, matterType, message } = await req.json();

    if (!name || !email || !matterType || !message) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    // 1. Save contact to Brevo list
    const contactRes = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "api-key": BREVO_API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        attributes: {
          FIRSTNAME: name.split(" ")[0],
          LASTNAME: name.split(" ").slice(1).join(" ") || "",
          SMS: phone || "",
          MATTER_TYPE: matterType,
        },
        listIds: [CONTACT_LIST_ID],
        updateEnabled: true,
      }),
    });

    if (!contactRes.ok && contactRes.status !== 204) {
      const err = await contactRes.json();
      console.error("Brevo contact error:", err);
      // Don't block email send — log and continue
    }

    // 2. Send notification email to City
    const emailRes = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "api-key": BREVO_API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sender: { name: "Seokane Inc. Website", email: NOTIFY_EMAIL },
        to: [{ email: NOTIFY_EMAIL, name: "City Seokane" }],
        replyTo: { email, name },
        subject: `New Enquiry: ${matterType} — ${name}`,
        htmlContent: `
          <div style="font-family: Georgia, serif; max-width: 600px; color: #1a1a1a;">
            <h2 style="border-bottom: 2px solid #b8960c; padding-bottom: 8px;">New Website Enquiry</h2>
            <table style="width:100%; border-collapse: collapse; margin-top: 16px;">
              <tr><td style="padding: 8px 0; font-weight: bold; width: 140px;">Name</td><td>${name}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Email</td><td><a href="mailto:${email}">${email}</a></td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Phone</td><td>${phone || "Not provided"}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Matter Type</td><td>${matterType}</td></tr>
            </table>
            <h3 style="margin-top: 24px;">Brief Description</h3>
            <p style="background: #f5f5f5; padding: 16px; border-left: 4px solid #b8960c;">${message}</p>
            <p style="margin-top: 24px; font-size: 13px; color: #666;">
              Submitted via seokaneinc.co.za · Reply directly to this email to respond to ${name}.
            </p>
          </div>
        `,
      }),
    });

    if (!emailRes.ok) {
      const err = await emailRes.json();
      console.error("Brevo email error:", err);
      return NextResponse.json(
        { error: "Enquiry saved but notification email failed." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Contact route error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
