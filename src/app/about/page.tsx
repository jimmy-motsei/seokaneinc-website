import type { Metadata } from "next";
import Link from "next/link";
import { PlaceholderImage } from "@/components/site/PlaceholderImage";
import { SitePage } from "@/components/site/SiteChrome";

export const metadata: Metadata = {
  title: "About Seokane Inc. | Boutique Legal Advisory in South Africa",
  description:
    "Learn about Seokane Incorporated's strategic, solution-oriented legal approach and guiding principles.",
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
              commercial solutions to growing businesses and corporate clients.
            </p>
          </div>
          <PlaceholderImage label="Placeholder: About Hero Image" />
        </div>
      </section>

      <section className="section-padding-sm bg-white">
        <div className="container-site grid gap-8 lg:grid-cols-2">
          <article className="card-base">
            <p className="eyebrow">Our Story</p>
            <h2 className="mt-3 text-3xl">Built on Experience Since 2001</h2>
            <p className="mt-4 text-ink-muted">
              While Seokane Incorporated was established in 2016, our legal practice roots trace
              back to 2001. Over time, the firm has evolved into a focused team serving clients
              through changing regulatory and commercial landscapes.
            </p>
          </article>
          <article className="card-base">
            <p className="eyebrow">Our Approach</p>
            <h2 className="mt-3 text-3xl">Professional but Approachable</h2>
            <p className="mt-4 text-ink-muted">
              We lead with clarity, avoid unnecessary legal jargon, and frame advice around
              outcomes. Every matter is handled with technical rigor, strategic thinking, and
              transparent communication.
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
