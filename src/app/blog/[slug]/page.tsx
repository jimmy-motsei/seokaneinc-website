import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Clock, Calendar, ArrowLeft, ArrowRight, Tag } from "lucide-react";
import { SitePage } from "@/components/site/SiteChrome";
import { NewsletterWidget } from "@/components/site/NewsletterWidget";
import { articles, practiceAreas } from "@/content/site-content";

type PageParams = { slug: string };

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export function generateMetadata({ params }: { params: PageParams }): Metadata {
  const article = articles.find((a) => a.slug === params.slug);
  if (!article) return { title: "Article | Seokane Inc." };
  return {
    title: `${article.title} | Seokane Inc.`,
    description: article.excerpt,
  };
}

export default function ArticlePage({ params }: { params: PageParams }) {
  const article = articles.find((a) => a.slug === params.slug);
  if (!article) notFound();

  const sortedArticles = [...articles].sort((a, b) =>
    b.dateISO.localeCompare(a.dateISO)
  );
  const currentIndex = sortedArticles.findIndex((a) => a.slug === params.slug);
  const prevArticle =
    currentIndex < sortedArticles.length - 1
      ? sortedArticles[currentIndex + 1]
      : null;
  const nextArticle =
    currentIndex > 0 ? sortedArticles[currentIndex - 1] : null;

  const relatedPractice = practiceAreas.find(
    (p) => p.slug === article.practiceSlug
  );
  const relatedArticles = articles
    .filter(
      (a) => a.practiceSlug === article.practiceSlug && a.slug !== article.slug
    )
    .slice(0, 2);

  return (
    <SitePage>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <div className="relative h-[58vh] min-h-[400px] overflow-hidden">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="img-overlay-hero" />
        <div className="absolute inset-0 flex flex-col justify-end pb-10">
          <div className="container-site">
            <div className="flex items-center gap-2 mb-3">
              <Tag className="h-3.5 w-3.5 text-[var(--color-amber)]" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-widest text-[var(--color-amber)]">
                {article.tag}
              </span>
            </div>
            <h1 className="text-[clamp(1.8rem,4vw,3rem)] font-bold leading-tight tracking-tight text-white max-w-3xl">
              {article.title}
            </h1>
            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-white/60">
              <span className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                {article.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                {article.readTime}
              </span>
              <span>By {article.author}</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Two-column layout ─────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-site grid gap-12 lg:grid-cols-[1fr_300px] lg:items-start">

          {/* Article body */}
          <div>
            <div
              className="prose-article"
              dangerouslySetInnerHTML={{ __html: article.body }}
            />

            {/* Back to blog link */}
            <div className="mt-10 pt-8 border-t border-[var(--color-surface-dark)]">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-navy)] hover:text-[var(--color-cta)] transition-colors"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                Back to Legal Insights
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6 lg:sticky lg:top-24">

            {/* CTA card */}
            <div className="bg-[var(--color-navy-dark)] p-6">
              <p className="eyebrow-light mb-3">Seokane Inc.</p>
              <h3 className="text-xl font-semibold text-white mb-3 leading-snug">
                Discuss Your Legal Matter
              </h3>
              <p className="text-sm text-white/55 leading-relaxed mb-5">
                Our team provides strategic legal counsel across all practice areas.
                Consultations available in person and remotely.
              </p>
              <Link href="/contact" className="btn-ghost w-full justify-center text-center block">
                Schedule a Consultation
              </Link>
              <a
                href="tel:+27110522817"
                className="mt-3 flex items-center justify-center gap-2 text-sm text-white/50 hover:text-white/80 transition-colors"
              >
                +27 (0)11 052 2817
              </a>
            </div>

            {/* Related practice area */}
            {relatedPractice && (
              <div className="card-base">
                <p className="eyebrow mb-3">Practice Area</p>
                <h4 className="text-lg font-semibold text-[var(--color-navy-dark)] mb-2">
                  {relatedPractice.title}
                </h4>
                <p className="text-sm text-[var(--color-ink-muted)] leading-relaxed mb-4">
                  {relatedPractice.shortDescription}
                </p>
                <Link
                  href={`/practice-areas/${relatedPractice.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-cta)] hover:gap-2.5 transition-all"
                >
                  View practice area
                  <ArrowRight className="h-3 w-3" aria-hidden="true" />
                </Link>
              </div>
            )}

            {/* Related articles */}
            {relatedArticles.length > 0 && (
              <div>
                <p className="eyebrow mb-4">Related Articles</p>
                <ul role="list" className="space-y-4">
                  {relatedArticles.map((related) => (
                    <li key={related.slug}>
                      <Link
                        href={`/blog/${related.slug}`}
                        className="group flex gap-3"
                      >
                        <div className="relative h-14 w-20 flex-shrink-0 overflow-hidden">
                          <Image
                            src={related.image}
                            alt={related.title}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                            sizes="80px"
                          />
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs font-semibold text-[var(--color-navy-dark)] group-hover:text-[var(--color-navy)] transition-colors leading-snug line-clamp-2">
                            {related.title}
                          </p>
                          <p className="mt-1 text-[10px] text-[var(--color-ink-muted)]">
                            {related.date}
                          </p>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </section>

      {/* ── Newsletter ────────────────────────────────────────── */}
      <NewsletterWidget variant="dark" />

      {/* ── Prev / Next navigation ────────────────────────────── */}
      {(prevArticle || nextArticle) && (
        <div className="border-t border-[var(--color-surface-dark)] bg-white">
          <div className="container-site py-8 grid gap-4 sm:grid-cols-2">
            {prevArticle ? (
              <Link
                href={`/blog/${prevArticle.slug}`}
                className="group flex flex-col gap-1 p-4 border border-[var(--color-surface-dark)] hover:border-[var(--color-navy)] transition-colors"
              >
                <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[var(--color-ink-muted)]">
                  <ArrowLeft className="h-3 w-3" aria-hidden="true" />
                  Previous Article
                </span>
                <p className="text-sm font-semibold text-[var(--color-navy-dark)] group-hover:text-[var(--color-navy)] transition-colors leading-snug line-clamp-2">
                  {prevArticle.title}
                </p>
              </Link>
            ) : (
              <div />
            )}

            {nextArticle ? (
              <Link
                href={`/blog/${nextArticle.slug}`}
                className="group flex flex-col gap-1 p-4 border border-[var(--color-surface-dark)] hover:border-[var(--color-navy)] transition-colors sm:items-end sm:text-right"
              >
                <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[var(--color-ink-muted)]">
                  Next Article
                  <ArrowRight className="h-3 w-3" aria-hidden="true" />
                </span>
                <p className="text-sm font-semibold text-[var(--color-navy-dark)] group-hover:text-[var(--color-navy)] transition-colors leading-snug line-clamp-2">
                  {nextArticle.title}
                </p>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      )}
    </SitePage>
  );
}
