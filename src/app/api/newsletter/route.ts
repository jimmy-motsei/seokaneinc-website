import { NextRequest, NextResponse } from "next/server";

const BREVO_API_KEY = process.env.BREVO_API_KEY!;
const NEWSLETTER_LIST_ID = 3; // ← Replace with your Brevo "Newsletter Subscribers" list ID

export async function POST(req: NextRequest) {
  try {
    const { email, firstName } = await req.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "A valid email address is required." },
        { status: 400 }
      );
    }

    const res = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "api-key": BREVO_API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        attributes: {
          ...(firstName ? { FIRSTNAME: firstName.trim() } : {}),
        },
        listIds: [NEWSLETTER_LIST_ID],
        updateEnabled: true,
      }),
    });

    // 204 = contact already existed and was updated (not an error)
    if (!res.ok && res.status !== 204) {
      const err = await res.json();

      // Brevo returns this code when contact already exists in list
      if (err.code === "duplicate_parameter") {
        return NextResponse.json(
          { message: "You're already subscribed." },
          { status: 200 }
        );
      }

      console.error("Brevo newsletter error:", err);
      return NextResponse.json(
        { error: "Subscription failed. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "You've been subscribed successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Newsletter route error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
