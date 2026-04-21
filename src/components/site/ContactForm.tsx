"use client";

import { useRef, useState, useTransition } from "react";
import Link from "next/link";
import { Send, Loader2, CheckCircle, AlertCircle, Phone } from "lucide-react";
import { office } from "@/content/site-content";

const FIELD_CLASS =
  "w-full border border-[var(--color-surface-dark)] bg-white px-4 py-3 text-sm text-[var(--color-ink)] placeholder:text-[var(--color-ink-faint)] outline-none transition-colors focus:border-[var(--color-navy-muted)]";

const FIELD_ERROR_CLASS =
  "w-full border border-red-400 bg-red-50 px-4 py-3 text-sm text-[var(--color-ink)] placeholder:text-[var(--color-ink-faint)] outline-none transition-colors focus:border-red-500";

const MATTER_LABELS: Record<string, string> = {
  "corporate-law": "Corporate Law",
  "commercial-law": "Commercial Law",
  "company-secretarial": "Company Secretarial",
  "intellectual-property": "Intellectual Property",
  "commercial-litigation": "Commercial Litigation",
  "administration-of-estates": "Administration of Estates",
  "wills-and-trusts": "Wills and Trusts",
  "sme-services": "SME Services",
  other: "Other / General Inquiry",
};

type FormState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; message: string };

export function ContactForm() {
  const [state, setState] = useState<FormState>({ status: "idle" });
  const [isPending, startTransition] = useTransition();
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const formRef = useRef<HTMLFormElement>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const name      = (formData.get("name")            as string).trim();
    const email     = (formData.get("email")           as string).trim().toLowerCase();
    const phone     = (formData.get("phone")           as string).trim();
    const subject   = (formData.get("subject")         as string).trim();
    const message   = (formData.get("message")         as string).trim();
    const honeypot  = (formData.get("company_website") as string).trim();

    if (honeypot) { setState({ status: "success" }); return; }

    const errors: Record<string, string> = {};
    if (!name)    errors.name    = "Full name is required.";
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
                  errors.email   = "A valid email address is required.";
    if (!subject) errors.subject = "Please select a matter type.";
    if (!message) errors.message = "A brief description is required.";

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    setFieldErrors({});
    setState({ status: "idle" });

    startTransition(async () => {
      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name,
            email,
            phone,
            matterType: MATTER_LABELS[subject] ?? subject,
            message,
          }),
        });

        if (res.ok) {
          setState({ status: "success" });
          formRef.current?.reset();
        } else {
          const data = await res.json().catch(() => ({}));
          setState({ status: "error", message: data.error ?? "Failed to send your message. Please try again or call us directly." });
        }
      } catch {
        setState({ status: "error", message: "Network error. Please try again or call us directly." });
      }
    });
  }

  if (state.status === "success") {
    return (
      <div className="card-base flex flex-col items-center justify-center text-center py-10 px-6 sm:px-8 sm:py-14 min-h-[360px] sm:min-h-[480px]">
        <div className="inline-flex h-14 w-14 items-center justify-center bg-emerald-50 rounded-full mb-5">
          <CheckCircle className="h-7 w-7 text-emerald-500" aria-hidden="true" />
        </div>
        <h3 className="text-2xl font-semibold text-[var(--color-navy-dark)] mb-3">Message Sent</h3>
        <p className="text-[var(--color-ink-muted)] max-w-xs leading-relaxed mb-2">
          Thank you — your inquiry has been sent to City Seokane directly. We aim to respond within one business day.
        </p>
        <p className="text-sm text-[var(--color-ink-muted)] mb-8">
          If your matter is urgent, please call{" "}
          <a href={`tel:${office.phone.replace(/\s+/g, "")}`} className="font-semibold text-[var(--color-navy)] hover:text-[var(--color-cta)] transition-colors">
            {office.phone}
          </a>{" "}directly.
        </p>
        <button onClick={() => { setState({ status: "idle" }); setFieldErrors({}); }}
          className="text-sm font-semibold text-[var(--color-navy)] underline underline-offset-3 hover:text-[var(--color-cta)] transition-colors">
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate className="card-base space-y-4">
      {state.status === "error" && (
        <div className="flex items-start gap-3 border border-red-200 bg-red-50 px-4 py-3">
          <AlertCircle className="h-4 w-4 shrink-0 mt-0.5 text-red-500" aria-hidden="true" />
          <p className="text-sm text-red-700">{state.message}</p>
        </div>
      )}
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-[var(--color-navy-dark)]">
          Full Name <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <input id="name" name="name" type="text" required autoComplete="name"
          placeholder="e.g. Thabo Nkosi" className={fieldErrors.name ? FIELD_ERROR_CLASS : FIELD_CLASS} />
        {fieldErrors.name && <p className="mt-1 text-xs text-red-600">{fieldErrors.name}</p>}
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-[var(--color-navy-dark)]">
            Email Address <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input id="email" name="email" type="email" required autoComplete="email"
            placeholder="you@company.co.za" className={fieldErrors.email ? FIELD_ERROR_CLASS : FIELD_CLASS} />
          {fieldErrors.email && <p className="mt-1 text-xs text-red-600">{fieldErrors.email}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-[var(--color-navy-dark)]">Phone Number</label>
          <input id="phone" name="phone" type="tel" autoComplete="tel"
            placeholder="+27 (0)82 000 0000" className={FIELD_CLASS} />
        </div>
      </div>
      <div>
        <label htmlFor="subject" className="mb-1.5 block text-sm font-semibold text-[var(--color-navy-dark)]">
          Matter Type <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <select id="subject" name="subject" required defaultValue=""
          className={`${fieldErrors.subject ? FIELD_ERROR_CLASS : FIELD_CLASS} cursor-pointer`}>
          <option value="" disabled>Select a practice area</option>
          <option value="corporate-law">Corporate Law</option>
          <option value="commercial-law">Commercial Law</option>
          <option value="company-secretarial">Company Secretarial</option>
          <option value="intellectual-property">Intellectual Property</option>
          <option value="commercial-litigation">Commercial Litigation</option>
          <option value="administration-of-estates">Administration of Estates</option>
          <option value="wills-and-trusts">Wills and Trusts</option>
          <option value="sme-services">SME Services</option>
          <option value="other">Other / General Inquiry</option>
        </select>
        {fieldErrors.subject && <p className="mt-1 text-xs text-red-600">{fieldErrors.subject}</p>}
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-[var(--color-navy-dark)]">
          Brief Description <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <textarea id="message" name="message" rows={5} required
          placeholder="Describe your matter briefly — the more context you provide, the more useful our initial response will be."
          className={`${fieldErrors.message ? FIELD_ERROR_CLASS : FIELD_CLASS} resize-y min-h-[120px]`} />
        {fieldErrors.message && <p className="mt-1 text-xs text-red-600">{fieldErrors.message}</p>}
      </div>
      <input type="text" name="company_website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      <button type="submit" disabled={isPending}
        className="btn-primary-amber w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed">
        {isPending ? (
          <><Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />Sending…</>
        ) : (
          <><Send className="h-4 w-4" aria-hidden="true" />Send Inquiry</>
        )}
      </button>
      <div className="flex items-start gap-2 pt-1">
        <Phone className="h-3.5 w-3.5 shrink-0 mt-0.5 text-[var(--color-ink-faint)]" aria-hidden="true" />
        <p className="text-xs text-[var(--color-ink-muted)] leading-relaxed">
          We aim to respond within one business day. Urgent matters:{" "}
          <a href={`tel:${office.phone.replace(/\s+/g, "")}`} className="font-semibold text-[var(--color-navy)] hover:text-[var(--color-cta)] transition-colors">
            {office.phone}
          </a>. Your information is handled in accordance with our{" "}
          <Link href="/privacy" className="underline underline-offset-2 hover:text-[var(--color-ink)] transition-colors">
            Privacy Policy
          </Link>.
        </p>
      </div>
    </form>
  );
}
