import type { Metadata } from "next";
import Link from "next/link";
import { PlaceholderImage } from "@/components/site/PlaceholderImage";
import { SitePage } from "@/components/site/SiteChrome";
import { teamMembers } from "@/content/site-content";

export const metadata: Metadata = {
  title: "Our Team | Seokane Incorporated",
  description:
    "Meet the legal professionals at Seokane Incorporated serving commercial and corporate clients in South Africa.",
};

export default function TeamPage() {
  return (
    <SitePage>
      <section className="section-padding bg-surface-light">
        <div className="container-site">
          <p className="eyebrow">Our Team</p>
          <h1 className="mt-4 text-5xl">Experienced Legal Professionals</h1>
          <p className="mt-6 max-w-3xl text-lg text-ink-muted">
            We combine legal expertise and commercial perspective to deliver strategic,
            solution-oriented support.
          </p>
        </div>
      </section>

      <section className="section-padding-sm bg-white">
        <div className="container-site grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {teamMembers.map((member) => (
            <article key={member.name} className="card-base">
              <PlaceholderImage label={`Placeholder Headshot: ${member.name}`} className="h-64" />
              <h2 className="mt-6 text-2xl">{member.name}</h2>
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
            Tell us about your legal challenge and we will recommend the right next step.
          </p>
          <Link href="/contact" className="btn-ghost mt-8">
            Contact Us
          </Link>
        </div>
      </section>
    </SitePage>
  );
}
