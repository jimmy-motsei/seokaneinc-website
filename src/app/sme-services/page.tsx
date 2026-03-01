import type { Metadata } from "next";
import Link from "next/link";
import { PlaceholderImage } from "@/components/site/PlaceholderImage";
import { SitePage } from "@/components/site/SiteChrome";
import { smeServices } from "@/content/site-content";

export const metadata: Metadata = {
  title: "For SMEs | Seokane Incorporated",
  description:
    "Legal services for South African SMEs covering company secretarial, corporate legal support, and employment law guidance.",
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
              We support SMEs with legal infrastructure that enables confident growth,
              investment readiness, and operational resilience.
            </p>
          </div>
          <PlaceholderImage label="Placeholder: SMEs Services Hero Image" />
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
            Schedule Consultation
          </Link>
        </div>
      </section>
    </SitePage>
  );
}
