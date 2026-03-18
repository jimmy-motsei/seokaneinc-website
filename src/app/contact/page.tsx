import type { Metadata } from "next";
import Link from "next/link";
import { PlaceholderImage } from "@/components/site/PlaceholderImage";
import { SitePage } from "@/components/site/SiteChrome";
import { ContactForm } from "@/components/site/ContactForm";
import { office } from "@/content/site-content";

export const metadata: Metadata = {
  title: "Contact Seokane Inc. | Schedule a Consultation",
  description:
    "Contact Seokane Incorporated to discuss your commercial, corporate, employment, or compliance matter. We respond within one business day.",
};

export default function ContactPage() {
  return (
    <SitePage>
      <section className="section-padding bg-surface-light">
        <div className="container-site grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="eyebrow">Contact</p>
            <h1 className="mt-4 text-5xl">Let&rsquo;s Talk About Your Legal Challenge</h1>
            <p className="mt-6 text-lg text-ink-muted">
              Use the form below or reach us directly. We aim to respond within one business day.
            </p>
          </div>
          <PlaceholderImage label="Placeholder: Contact Hero Image" />
        </div>
      </section>

      <section className="section-padding-sm bg-white">
        <div className="container-site grid gap-8 lg:grid-cols-2">
          <article className="card-base">
            <p className="eyebrow">Contact Details</p>
            <h2 className="mt-3 text-3xl">Our Office</h2>
            <ul role="list" className="mt-5 space-y-3 text-ink-muted">
              <li>{office.address}</li>
              <li>
                <a href={`tel:${office.phone}`} className="hover:text-navy transition-colors">
                  {office.phone}
                </a>
              </li>
              <li>
                <a href={`tel:${office.mobile}`} className="hover:text-navy transition-colors">
                  {office.mobile} (Mobile / WhatsApp)
                </a>
              </li>
              <li>
                <a href={`mailto:${office.email}`} className="hover:text-navy transition-colors">
                  {office.email}
                </a>
              </li>
              <li>{office.hours}</li>
            </ul>
            <p className="mt-6 text-sm text-ink-muted">
              Privacy notice: Information submitted through this form is used only to respond
              to your inquiry. We do not share your details with third parties. See our{" "}
              <Link href="/privacy" className="text-navy hover:text-amber transition-colors">
                Privacy Policy
              </Link>{" "}
              for full details.
            </p>
          </article>

          <ContactForm />
        </div>
      </section>

      <section className="section-padding-sm bg-surface-light">
        <div className="container-site">
          <PlaceholderImage label="Placeholder: Office location map" className="h-96" />
        </div>
      </section>
    </SitePage>
  );
}
