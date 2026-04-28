import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SitePage } from "@/components/site/SiteChrome";
import { practiceAreas } from "@/content/site-content";

export const metadata: Metadata = {
  title: "Practice Areas | Seokane Incorporated",
  description:
    "Corporate law, commercial law, company secretarial, intellectual property, commercial litigation, administration of estates, and wills and trusts. Boutique legal expertise for SA businesses.",
};

export default function PracticeAreasPage() {
  return (
    <SitePage>
      <section className="section-padding bg-surface-light">
        <div className="container-site grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="eyebrow">Practice Areas</p>
            <h1 className="mt-4 text-5xl">Our Areas of Expertise</h1>
            <p className="mt-6 text-lg text-ink-muted">
              We concentrate on the legal areas where growing businesses face their greatest
              challenges. Not broad. Focused. Because depth of expertise delivers better outcomes.
            </p>
          </div>
          <div className="relative h-80 lg:h-full lg:min-h-[360px] overflow-hidden">
            <Image
              src="/images/practice-areas.png"
              alt="Seokane Inc. practice areas"
              fill
              className="object-cover object-[center_30%]"
              sizes="(max-width: 1024px) 100vw, 45vw"
              priority
            />
            <div className="img-overlay-banner" aria-hidden="true" />
          </div>
        </div>
      </section>

      <section className="section-padding-sm bg-white">
        <div className="container-site grid gap-6 md:grid-cols-2">
          {practiceAreas.map((area) => (
            <article key={area.slug} className="card-base">
              <h2 className="text-3xl">{area.title}</h2>
              <p className="mt-3 text-ink-muted">{area.fullDescription}</p>
              <ul role="list" className="mt-6 space-y-2 text-sm text-ink-muted">
                {area.services.slice(0, 3).map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
              <Link href={`/practice-areas/${area.slug}`} className="btn-secondary mt-7">
                View Details
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section-padding-sm bg-navy text-white">
        <div className="container-site text-center">
          <h2 className="text-3xl text-white">Not Sure Where to Start?</h2>
          <p className="mx-auto mt-4 max-w-xl text-surface">
            Tell us what you&rsquo;re dealing with and we&rsquo;ll point you in the right direction.
          </p>
          <Link href="/contact" className="btn-ghost mt-8">
            Contact Our Team
          </Link>
        </div>
      </section>
    </SitePage>
  );
}
