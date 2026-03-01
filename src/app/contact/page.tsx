import type { Metadata } from "next";
import { PlaceholderImage } from "@/components/site/PlaceholderImage";
import { SitePage } from "@/components/site/SiteChrome";
import { office } from "@/content/site-content";

export const metadata: Metadata = {
  title: "Contact Seokane Inc. | Schedule a Consultation",
  description:
    "Contact Seokane Incorporated to discuss commercial litigation, corporate, employment, or compliance matters.",
};

export default function ContactPage() {
  return (
    <SitePage>
      <section className="section-padding bg-surface-light">
        <div className="container-site grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="eyebrow">Contact</p>
            <h1 className="mt-4 text-5xl">Schedule a Consultation</h1>
            <p className="mt-6 text-lg text-ink-muted">
              Share your legal matter and our team will respond within one business day.
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
              <li>{office.phone}</li>
              <li>{office.email}</li>
              <li>{office.hours}</li>
            </ul>
            <p className="mt-6 text-sm text-ink-muted">
              Privacy notice: Information submitted through this form is used only to assess
              and respond to your inquiry.
            </p>
          </article>

          <form className="card-base space-y-4" action="#" method="post">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-semibold text-navy-dark">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                required
                className="w-full rounded-md border border-surface-dark px-4 py-3 focus:border-amber focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-semibold text-navy-dark">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-md border border-surface-dark px-4 py-3 focus:border-amber focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="subject" className="mb-2 block text-sm font-semibold text-navy-dark">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                required
                className="w-full rounded-md border border-surface-dark px-4 py-3 focus:border-amber focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-semibold text-navy-dark">
                Brief Description
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full rounded-md border border-surface-dark px-4 py-3 focus:border-amber focus:outline-none"
              />
            </div>
            <input type="text" name="company_website" tabIndex={-1} autoComplete="off" className="hidden" />
            <button type="submit" className="btn-primary">
              Submit Inquiry
            </button>
          </form>
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
