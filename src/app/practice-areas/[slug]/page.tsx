import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PlaceholderImage } from "@/components/site/PlaceholderImage";
import { SitePage } from "@/components/site/SiteChrome";
import { practiceAreas } from "@/content/site-content";

type PageParams = { slug: string };

export function generateStaticParams() {
  return practiceAreas.map((area) => ({ slug: area.slug }));
}

export function generateMetadata({ params }: { params: PageParams }): Metadata {
  const area = practiceAreas.find((item) => item.slug === params.slug);
  if (!area) {
    return { title: "Practice Area | Seokane Incorporated" };
  }

  return {
    title: `${area.title} | Seokane Incorporated`,
    description: area.shortDescription,
  };
}

export default function PracticeAreaDetailPage({ params }: { params: PageParams }) {
  const area = practiceAreas.find((item) => item.slug === params.slug);
  if (!area) {
    notFound();
  }

  return (
    <SitePage>
      <section className="section-padding bg-surface-light">
        <div className="container-site grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="eyebrow">Practice Area</p>
            <h1 className="mt-4 text-5xl">{area.title}</h1>
            <p className="mt-6 text-lg text-ink-muted">{area.fullDescription}</p>
          </div>
          <PlaceholderImage label={`Placeholder: ${area.title} hero image`} />
        </div>
      </section>

      <section className="section-padding-sm bg-white">
        <div className="container-site grid gap-8 lg:grid-cols-[1fr_auto] lg:items-start">
          <article className="card-base max-w-3xl">
            <h2 className="text-3xl">How We Support You</h2>
            <ul role="list" className="mt-5 space-y-3 text-ink-muted">
              {area.services.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </article>
          <div className="card-base w-full lg:w-80">
            <p className="eyebrow">Discuss Your Matter</p>
            <h3 className="mt-3 text-2xl">Need Strategic Direction?</h3>
            <p className="mt-4 text-sm text-ink-muted">
              We can assess risk, clarify options, and recommend a practical legal route.
            </p>
            <Link href="/contact" className="btn-primary mt-6">
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </SitePage>
  );
}
