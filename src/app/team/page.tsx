import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SitePage } from "@/components/site/SiteChrome";
import { teamMembers } from "@/content/site-content";

export const metadata: Metadata = {
  title: "Our Team | Seokane Incorporated",
  description:
    "Meet the legal professionals at Seokane Incorporated — experienced attorneys serving commercial and corporate clients across South Africa.",
};

export default function TeamPage() {
  return (
    <SitePage>
      <section className="section-padding bg-surface-light">
        <div className="container-site grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="eyebrow">Our Team</p>
            <h1 className="mt-4 text-5xl">Experienced Legal Professionals</h1>
            <p className="mt-6 text-lg text-ink-muted">
              We&rsquo;re a focused team of admitted attorneys and candidate attorneys. You&rsquo;ll
              work directly with the person who knows your matter — and who gives it the
              attention it deserves.
            </p>
          </div>
          <div className="relative h-80 lg:h-full lg:min-h-[360px] overflow-hidden">
            <Image
              src="/images/hero-about.jpg"
              alt="Seokane Inc. legal team"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 45vw"
              priority
            />
            <div className="img-overlay-banner" aria-hidden="true" />
          </div>
        </div>
      </section>

      <section className="section-padding-sm bg-white">
        <div className="container-site grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {teamMembers.map((member) => (
            <article key={member.name} className="card-base">
              <div className="relative h-80 w-full overflow-hidden -mx-10 -mt-10 mb-6" style={{ width: "calc(100% + 5rem)" }}>
                <Image
                  src={member.image}
                  alt={`Photo of ${member.name}`}
                  fill
                  className="object-cover object-[center_15%]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                />
              </div>
              <h2 className="text-2xl">{member.name}</h2>
              <p className="mt-1 text-sm font-semibold uppercase tracking-[0.1em] text-amber-dark">
                {member.title}
              </p>
              <p className="mt-4 text-ink-muted">{member.bio}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-padding-sm bg-navy text-white">
        <div className="container-site text-center">
          <h2 className="text-4xl text-white">Work With Our Team</h2>
          <p className="mx-auto mt-4 max-w-2xl text-surface">
            Tell us about your legal challenge. We&rsquo;ll recommend the right next step.
          </p>
          <Link href="/contact" className="btn-ghost mt-8">
            Contact Us
          </Link>
        </div>
      </section>
    </SitePage>
  );
}
