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
