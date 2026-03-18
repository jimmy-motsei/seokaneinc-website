import type { Metadata } from "next";
import Link from "next/link";
import { PlaceholderImage } from "@/components/site/PlaceholderImage";
import { SitePage } from "@/components/site/SiteChrome";

export const metadata: Metadata = {
  title: "About Seokane Inc. | Boutique Legal Advisory in South Africa",
  description:
    "Learn how Seokane Incorporated combines over two decades of legal practice with executive corporate experience to deliver strategy-driven legal counsel to SA businesses.",
};

export default function AboutPage() {
  return (
    <SitePage>
      <section className="section-padding bg-surface-light">
        <div className="container-site grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="eyebrow">About Seokane Incorporated</p>
            <h1 className="mt-4 text-5xl">Legal Advice Built for Business Reality</h1>
            <p className="mt-6 text-lg text-ink-muted">
              We are a boutique South African law firm delivering strategic legal counsel and
              commercial solutions to growing businesses and corporate clients. We&rsquo;ve been
              doing this since 2001 — with the experience and judgment to show for it.
            </p>
          </div>
          <PlaceholderImage label="Placeholder: About Hero Image" />
        </div>
      </section>

      <section className="section-padding-sm bg-white">
        <div className="container-site max-w-3xl">
          <p className="eyebrow mb-3">Our Story</p>
          <h2 className="text-3xl mb-6">Built on Experience Since 2001</h2>
          <div className="space-y-4 text-ink-muted leading-relaxed">
            <p>
              The practice that became Seokane Incorporated began in June 2001 as Seokane
              Lesomo Attorneys. Over more than two decades, it has evolved into a focused
              team serving clients through changing regulatory and commercial landscapes.
            </p>
            <p>
              Seokane Incorporated was formally established in January 2016. Today, we serve
              growing businesses and corporate clients across Gauteng and beyond — with the
              same commitment to technical excellence and straight-talking advice that has
              kept clients coming back since the beginning.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding-sm bg-white">
        <div className="container-site max-w-3xl">
          <p className="eyebrow mb-3">Leadership</p>
          <h2 className="text-3xl mb-6">City Seokane — Director</h2>
          <div className="space-y-4 text-ink-muted leading-relaxed">
            <p>
              City was admitted as an attorney of the High Court in 1999. Before establishing
              private practice, he held senior executive roles in major South African
              organisations — including positions at Alexander Forbes Risk Services, the SABC,
              and VVM Global Services, where he served as Chief Executive Officer.
            </p>
            <p>
              That career path shapes how we work. When you sit across from City in a
              consultation, you&rsquo;re talking to someone who has managed legal risk from the
              boardroom, negotiated under commercial pressure, and made decisions where the
              outcome affected an entire organisation.
            </p>
            <p>
              It means our legal advice comes with business judgment built in.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding-sm bg-white">
        <div className="container-site grid gap-8 lg:grid-cols-2">
          <article className="card-base">
            <p className="eyebrow">Our Approach</p>
            <h2 className="mt-3 text-3xl">Professional but Approachable</h2>
            <p className="mt-4 text-ink-muted">
              We lead with clarity. You won&rsquo;t need a legal dictionary to understand our
              advice. Every recommendation comes with a plain-language explanation of what
              it means for your business.
            </p>
          </article>
          <article className="card-base">
            <p className="eyebrow">Our Commitment</p>
            <h2 className="mt-3 text-3xl">Strategy First. Then Execution.</h2>
            <p className="mt-4 text-ink-muted">
              Every matter at Seokane Inc. starts the same way: we listen. We ask about your
              business objectives, your timeline, your risk tolerance. Only once we understand
              the commercial context do we advise on the legal strategy.
            </p>
          </article>
        </div>
      </section>

      <section className="section-padding-sm bg-white">
        <div className="container-site">
          <p className="eyebrow mb-3">Affiliates</p>
          <h2 className="text-3xl mb-8">Bouverie Attorneys</h2>

          <div className="border-l-4 border-[var(--color-amber)] pl-6 py-2">
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <p className="text-sm font-semibold text-[var(--color-amber)] uppercase tracking-wide mb-1">
                  Affiliate Firm
                </p>
                <p className="text-lg font-semibold text-[var(--color-navy-dark)] mb-1">Bouverie Attorneys</p>
                <p className="text-sm text-[var(--color-ink-muted)] mb-4">Bramley, Johannesburg</p>
                <p className="text-sm text-[var(--color-ink-muted)] mb-1">
                  <span className="font-medium text-[var(--color-ink)]">Director:</span>{" "}
                  Jeanette Bouverie — practising since 2006
                </p>
                <div className="mt-4 space-y-2 text-sm">
                  <a
                    href="mailto:jeanette@bouverieattorneys.co.za"
                    className="flex items-center gap-2 text-[var(--color-ink-muted)] hover:text-[var(--color-navy)] transition-colors"
                  >
                    <svg className="h-4 w-4 shrink-0 text-[var(--color-amber)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
                      <rect x="2" y="4" width="20" height="16" rx="2"/>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                    </svg>
                    jeanette@bouverieattorneys.co.za
                  </a>
                  <a
                    href="tel:+27114409398"
                    className="flex items-center gap-2 text-[var(--color-ink-muted)] hover:text-[var(--color-navy)] transition-colors"
                  >
                    <svg className="h-4 w-4 shrink-0 text-[var(--color-amber)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.38 2 2 0 0 1 3.6 1.2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.78a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                    +27 (0)11 440 9398
                  </a>
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-[var(--color-ink)] mb-3">Services</p>
                <ul className="space-y-1.5 text-sm text-[var(--color-ink-muted)]">
                  {[
                    "Property transfers and conveyancing",
                    "Immigration advice",
                    "Notary services",
                    "Ante-nuptial agreements",
                    "Residence and work permits",
                  ].map((service) => (
                    <li key={service} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-amber)]" aria-hidden="true" />
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding-sm bg-navy text-white">
        <div className="container-site text-center">
          <p className="eyebrow text-amber-light">Next Step</p>
          <h2 className="mt-3 text-4xl text-white">Explore Our Practice Areas</h2>
          <p className="mx-auto mt-4 max-w-2xl text-surface">
            See where our team delivers the strongest legal and commercial impact.
          </p>
          <Link href="/practice-areas" className="btn-ghost mt-8">
            Explore Practice Areas
          </Link>
        </div>
      </section>
    </SitePage>
  );
}
