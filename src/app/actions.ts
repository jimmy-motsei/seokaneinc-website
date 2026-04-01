"use server";

import { Resend } from "resend";

/* ─────────────────────────────────────────────────────────────
   Contact form submission → email to city@seokaneinc.co.za
   ─────────────────────────────────────────────────────────────
   Requires in .env.local:
     RESEND_API_KEY        re_xxxx...  (resend.com → API Keys)
     RESEND_FROM_ADDRESS   noreply@seokaneinc.co.za
                           (use onboarding@resend.dev for dev)
     CONTACT_EMAIL_TO      city@seokaneinc.co.za

   To swap to Brevo for newsletter: replace the fetch block with:
     POST https://api.brevo.com/v3/contacts
     { "email": email, "listIds": [Number(process.env.BREVO_LIST_ID)] }
     headers: { "api-key": process.env.BREVO_API_KEY }
───────────────────────────────────────────────────────────── */

export type ContactResult =
  | { status: "success" }
  | { status: "validation_error"; errors: Record<string, string> }
  | { status: "error"; message: string };

const PRACTICE_LABELS: Record<string, string> = {
  "corporate-law": "Corporate Law",
  "commercial-law": "Commercial Law",
  "company-secretarial": "Company Secretarial",
  "intellectual-property": "Intellectual Property",
  "commercial-litigation": "Commercial Litigation",
  "administration-of-estates": "Administration of Estates",
  "wills-and-trusts": "Wills and Trusts",
  "sme-services": "SME Services",
  other: "Other / General",
};

export async function submitContactForm(
  formData: FormData
): Promise<ContactResult> {
  // ── Extract fields
  const name    = (formData.get("name")    as string | null)?.trim() ?? "";
  const email   = (formData.get("email")   as string | null)?.trim().toLowerCase() ?? "";
  const phone   = (formData.get("phone")   as string | null)?.trim() ?? "";
  const subject = (formData.get("subject") as string | null)?.trim() ?? "";
  const message = (formData.get("message") as string | null)?.trim() ?? "";
  const honeypot = (formData.get("company_website") as string | null)?.trim() ?? "";

  if (honeypot) return { status: "success" };

  const errors: Record<string, string> = {};
  if (!name)    errors.name    = "Full name is required.";
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
                errors.email   = "A valid email address is required.";
  if (!subject) errors.subject = "Please select a matter type.";
  if (!message) errors.message = "A brief description is required.";

  if (Object.keys(errors).length > 0) return { status: "validation_error", errors };

  const practiceLabel = PRACTICE_LABELS[subject] ?? subject;
  const timestamp = new Date().toLocaleString("en-ZA", { timeZone: "Africa/Johannesburg", dateStyle: "full", timeStyle: "short" });

  const apiKey  = process.env.RESEND_API_KEY;
  const from    = process.env.RESEND_FROM_ADDRESS ?? "onboarding@resend.dev";
  const to      = process.env.CONTACT_EMAIL_TO    ?? "city@seokaneinc.co.za";

  if (!apiKey) {
    console.log("[Contact Form] No RESEND_API_KEY — logging:", { name, email, phone, subject, message });
    await new Promise((r) => setTimeout(r, 700));
    return { status: "success" };
  }

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: `Seokane Inc. Website <${from}>`,
      to: [to],
      replyTo: email,
      subject: `New Inquiry: ${practiceLabel} — ${name}`,
      text: [
        `NEW CONTACT FORM SUBMISSION — ${practiceLabel}`,
        `Name:    ${name}`,
        `Email:   ${email}`,
        `Phone:   ${phone || "—"}`,
        `Matter:  ${practiceLabel}`,
        `Message:`,
        message,
        `Received: ${timestamp}`,
      ].join("\n"),
    });
    return { status: "success" };
  } catch (err) {
    console.error("[Contact Form] Resend error:", err);
    return { status: "error", message: "Failed to send your message. Please try again or call us directly." };
  }
}

export type SubscribeResult =
  | { status: "success" }
  | { status: "already_subscribed" }
  | { status: "invalid_email" }
  | { status: "error"; message: string };

export async function subscribeToNewsletter(formData: FormData): Promise<SubscribeResult> {
  const email = (formData.get("email") as string | null)?.trim().toLowerCase();
  const firstName = (formData.get("firstName") as string | null)?.trim() ?? "";
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return { status: "invalid_email" };

  const apiKey = process.env.MAILCHIMP_API_KEY;
  const audienceId = process.env.MAILCHIMP_AUDIENCE_ID;
  const server = process.env.MAILCHIMP_API_SERVER;

  if (!apiKey || !audienceId || !server) {
    console.log("[Newsletter] no API config:", { email, firstName });
    await new Promise((r) => setTimeout(r, 600));
    return { status: "success" };
  }

  // Validate env vars contain only expected characters before interpolating into URL
  if (!/^[a-z0-9]+$/.test(server) || !/^[a-z0-9]+$/i.test(audienceId)) {
    console.error("[Newsletter] Invalid MAILCHIMP env var format");
    return { status: "error", message: "Configuration error. Please try again later." };
  }

  try {
    const url = `https://${server}.api.mailchimp.com/3.0/lists/${audienceId}/members`;
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Basic ${Buffer.from(`anystring:${apiKey}`).toString("base64")}` },
      body: JSON.stringify({ email_address: email, status: "pending", merge_fields: { FNAME: firstName }, tags: ["website-signup", "seokane-inc"] }),
    });
    const data = await res.json();
    if (res.ok) return { status: "success" };
    if (data.title === "Member Exists") return { status: "already_subscribed" };
    if (data.title === "Invalid Resource") return { status: "invalid_email" };
    return { status: "error", message: data.detail ?? "Subscription failed." };
  } catch (err) {
    return { status: "error", message: "Network error. Please try again." };
  }
}
