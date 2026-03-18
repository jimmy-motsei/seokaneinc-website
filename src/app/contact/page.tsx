import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
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
          <div className="relative h-80 lg:h-full lg:min-h-[360px] overflow-hidden">
            <Image
              src="/images/hero-contact.png"
              alt="Seokane Inc. office — 1 Maxwell Drive, Sunninghill"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 45vw"
              priority
            />
            <div className="img-overlay-tint" aria-hidden="true" />
          </div>
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
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center bg-[var(--color-navy)] px-8 py-10 md:px-12 md:py-14">
            <div>
              <p className="eyebrow-light mb-3">How to Find Us</p>
              <h2 className="text-2xl sm:text-3xl text-white mb-2">
                1 Maxwell Drive, Sunninghill
              </h2>
              <p className="text-white/55 text-sm">Johannesburg, 2191 · Gauteng, South Africa</p>
              <p className="mt-4 text-white/55 text-sm">
                Monday to Friday, 08:00 – 17:00 · Parking available on site
              </p>
            </div>
            <a
              href="https://maps.google.com/?q=1+Maxwell+Drive+Sunninghill+Johannesburg"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost mt-6 lg:mt-0 whitespace-nowrap"
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      </section>
    </SitePage>
  );
}
