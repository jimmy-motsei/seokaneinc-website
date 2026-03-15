import type { Metadata } from "next";
import Link from "next/link";
import { PlaceholderImage } from "@/components/site/PlaceholderImage";
import { SitePage } from "@/components/site/SiteChrome";
import { smeServices } from "@/content/site-content";

export const metadata: Metadata = {
  title: "Legal Services for South African SMEs | Seokane Inc.",
  description:
    "Practical, affordable legal support for growing South African businesses — company secretarial, commercial contracts, employment law, and business compliance.",
};

export default function SmeServicesPage() {
  return (
    <SitePage>
      <section className="section-padding bg-surface-light">
        <div className="container-site grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="eyebrow">For SMEs</p>
            <h1 className="mt-4 text-5xl">Your Legal Partner for Sustainable Growth</h1>
            <p className="mt-6 text-lg text-ink-muted">
              Running a small or medium business in South Africa means wearing a lot of hats.
              Legal shouldn&rsquo;t be one you have to guess at. We provide practical, reliable
              legal support that keeps your business protected and properly structured as it grows.
            </p>
          </div>
          <PlaceholderImage label="Placeholder: SMEs Services Hero Image" />
        </div>
      </section>

      <section className="section-padding-sm bg-white">
        <div className="container-site max-w-3xl">
          <h2 className="text-3xl mb-6">Legal Infrastructure for Growing Businesses</h2>
          <div className="space-y-4 text-ink-muted leading-relaxed">
            <p>
              Most SME owners don&rsquo;t need a large law firm on retainer. They need a
              trusted legal partner who knows their business, responds promptly, and gives
              straight answers at a fair cost.
            </p>
            <p>
              That&rsquo;s what Seokane Inc. is for your business. We work with SMEs across
              Gauteng on the legal matters that come up as you grow — contracts, employment
              issues, company structure, and compliance requirements.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding-sm bg-white">
        <div className="container-site grid gap-6 lg:grid-cols-3">
          {smeServices.map((service) => (
            <article key={service.title} className="card-base">
              <h2 className="text-2xl">{service.title}</h2>
              <ul role="list" className="mt-5 space-y-2 text-sm text-ink-muted">
                {service.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section-padding-sm bg-navy text-white">
        <div className="container-site text-center">
          <h2 className="text-4xl text-white">Ready to Strengthen Your Legal Foundation?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-surface">
            Speak to us about practical legal support that keeps your SME compliant and
            commercially protected.
          </p>
          <Link href="/contact" className="btn-ghost mt-8">
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </SitePage>
  );
}
