import type { Metadata } from "next";
import Link from "next/link";
import { PlaceholderImage } from "@/components/site/PlaceholderImage";
import { SitePage } from "@/components/site/SiteChrome";
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

          <form className="card-base space-y-4" action="#" method="post">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-semibold text-navy-dark">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                required
                className="w-full border border-surface-dark px-4 py-3 focus:border-amber focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-semibold text-navy-dark">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full border border-surface-dark px-4 py-3 focus:border-amber focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-navy-dark">
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                className="w-full border border-surface-dark px-4 py-3 focus:border-amber focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="subject" className="mb-2 block text-sm font-semibold text-navy-dark">
                Matter Type
              </label>
              <select
                id="subject"
                name="subject"
                required
                className="w-full border border-surface-dark px-4 py-3 focus:border-amber focus:outline-none bg-white"
              >
                <option value="">Select a practice area</option>
                <option value="commercial-litigation">Commercial Litigation</option>
                <option value="corporate-commercial">Corporate &amp; Commercial</option>
                <option value="employment-labour">Employment &amp; Labour</option>
                <option value="estates-trusts">Estates &amp; Trusts</option>
                <option value="business-compliance">Business Compliance</option>
                <option value="sme-services">SME Services</option>
                <option value="other">Other</option>
              </select>
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
                className="w-full border border-surface-dark px-4 py-3 focus:border-amber focus:outline-none"
              />
            </div>
            <input type="text" name="company_website" tabIndex={-1} autoComplete="off" className="hidden" />
            <button type="submit" className="btn-primary">
              Send Inquiry
            </button>
            <p className="text-sm text-ink-muted">
              We aim to respond within one business day. If your matter is urgent, please
              call us directly on{" "}
              <a href="tel:+27110522817" className="text-navy hover:text-amber transition-colors">
                +27 (0)11 052 2817
              </a>
              .
            </p>
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
