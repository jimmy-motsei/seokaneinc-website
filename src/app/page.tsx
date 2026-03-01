import type { Metadata } from "next";
import Link from "next/link";
import { SitePage } from "@/components/site/SiteChrome";
import { PlaceholderImage } from "@/components/site/PlaceholderImage";
import { practiceAreas, proofPoints } from "@/content/site-content";

export const metadata: Metadata = {
  title: "Seokane Inc. | Strategic Legal Counsel for Growing Businesses",
  description:
    "Boutique South African law firm delivering strategic legal counsel across commercial litigation, corporate law, employment matters, and business compliance.",
};

export default function HomePage() {
  return (
    <SitePage>
      <section className="section-padding bg-[linear-gradient(160deg,var(--color-white),var(--color-surface-light))]">
        <div className="container-site grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="eyebrow">Boutique South African Law Firm</p>
            <h1 className="mt-4 text-5xl sm:text-6xl">
              Strategic Legal Counsel for Complex Business Decisions
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-ink-muted">
              Seokane Incorporated delivers technically excellent, solution-oriented advice
              that helps growing businesses and corporate clients navigate legal complexity
              with confidence.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                Schedule a Consultation
              </Link>
              <Link href="/practice-areas" className="btn-secondary">
                Explore Our Practice Areas
              </Link>
            </div>
          </div>
          <PlaceholderImage label="Placeholder: Homepage Hero Image (Johannesburg skyline or modern office)" />
        </div>
      </section>

      <section className="section-padding-sm bg-white">
        <div className="container-site grid gap-12 lg:grid-cols-2">
          <div className="prose-site">
            <p className="eyebrow">Who We Are</p>
            <h2 className="mt-3 text-4xl">Professional, Business-Minded, Outcome-Focused</h2>
            <p className="mt-6">
              With over two decades of combined corporate and legal expertise, our team
              provides practical legal guidance that is aligned to your business objectives,
              timelines, and risk profile.
            </p>
          </div>
          <div className="grid gap-4">
            {proofPoints.map((point) => (
              <article key={point.title} className="card-base">
                <h3 className="text-2xl">{point.title}</h3>
                <p className="mt-3 text-ink-muted">{point.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface-light">
        <div className="container-site">
          <p className="eyebrow">Practice Areas</p>
          <h2 className="mt-3 text-4xl">Focused Expertise in High-Impact Legal Areas</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {practiceAreas.map((area) => (
              <article key={area.slug} className="card-base bg-white">
                <h3 className="text-2xl">{area.title}</h3>
                <p className="mt-3 text-ink-muted">{area.shortDescription}</p>
                <Link href={`/practice-areas/${area.slug}`} className="mt-6 inline-flex text-sm font-semibold text-navy hover:text-amber">
                  Learn more
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding-sm bg-navy text-white">
        <div className="container-site grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="eyebrow text-amber-light">Call To Action</p>
            <h2 className="mt-3 text-4xl text-white">Need Strategic Legal Direction?</h2>
            <p className="mt-4 max-w-2xl text-surface">
              Discuss your matter with a team that combines legal precision with commercial
              perspective.
            </p>
          </div>
          <Link href="/contact" className="btn-ghost">
            Schedule Consultation
          </Link>
        </div>
      </section>
    </SitePage>
  );
}
