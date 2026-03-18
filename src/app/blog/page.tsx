import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { SitePage } from "@/components/site/SiteChrome";
import { NewsletterWidget } from "@/components/site/NewsletterWidget";
import { FadeUp, Stagger, StaggerItem } from "@/components/site/Animations";
import { articles } from "@/content/site-content";

export const metadata: Metadata = {
  title: "Legal Insights | Seokane Inc.",
  description:
    "Practical commentary on South African commercial law, employment developments, and compliance updates from Seokane Incorporated.",
};

const sortedArticles = [...articles].sort((a, b) =>
  b.dateISO.localeCompare(a.dateISO)
);
const featuredArticle = sortedArticles[0];
const remainingArticles = sortedArticles.slice(1);

const tags = Array.from(new Set(articles.map((a) => a.tag)));

export default function BlogPage() {
  return (
    <SitePage>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="section-padding-sm bg-[var(--color-navy-dark)]">
        <div className="container-site">
          <p className="eyebrow-light mb-4">Legal Insights</p>
          <h1 className="text-[clamp(2.4rem,4.5vw,3.5rem)] font-bold leading-tight tracking-tight text-white max-w-2xl">
            Practical Legal Commentary<br />for South African Businesses
          </h1>
          <p className="mt-4 text-white/55 max-w-xl text-base leading-relaxed">
            Articles on commercial law, employment matters, compliance, and corporate
            transactions — written for decision-makers, not legal specialists.
          </p>
        </div>
      </section>

      {/* ── Featured Article ──────────────────────────────────── */}
      <section className="section-padding-sm bg-white">
        <div className="container-site">
          <p className="eyebrow mb-6">Featured Article</p>
          <FadeUp>
            <Link
              href={`/blog/${featuredArticle.slug}`}
              className="group grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center"
            >
              <div className="relative overflow-hidden h-72 lg:h-96">
                <Image
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  priority
                />
                <div className="absolute top-4 left-4 bg-[var(--color-navy-dark)]/80 px-3 py-1.5 backdrop-blur-sm">
                  <span className="text-[11px] font-semibold uppercase tracking-widest text-[var(--color-amber)]">
                    {featuredArticle.tag}
                  </span>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-4 mb-4 text-xs text-[var(--color-ink-muted)]">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                    {featuredArticle.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                    {featuredArticle.readTime}
                  </span>
                </div>
                <h2 className="text-3xl xl:text-4xl group-hover:text-[var(--color-navy)] transition-colors">
                  {featuredArticle.title}
                </h2>
                <p className="mt-4 text-[var(--color-ink-muted)] leading-relaxed">
                  {featuredArticle.excerpt}
                </p>
                <p className="mt-3 text-xs text-[var(--color-ink-muted)]">
                  By {featuredArticle.author}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-cta)] group-hover:gap-3 transition-all">
                  Read article
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </div>
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* ── Tag filter pills ─────────────────────────────────── */}
      <div className="bg-[var(--color-surface)] border-y border-[var(--color-surface-dark)]">
        <div className="container-site py-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-ink-muted)] mr-2">
              Topics:
            </span>
            <span className="px-3 py-1 text-xs font-medium bg-[var(--color-navy)] text-white">
              All
            </span>
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium border border-[var(--color-surface-dark)] text-[var(--color-ink-muted)] hover:border-[var(--color-navy)] hover:text-[var(--color-navy)] transition-colors cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Article grid ─────────────────────────────────────── */}
      <section className="section-padding bg-[var(--color-surface)]">
        <div className="container-site">
          <Stagger className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {remainingArticles.map((article) => (
              <StaggerItem key={article.slug} as="article">
                <Link href={`/blog/${article.slug}`} className="group block h-full">
                  {/* Image with date badge overlay */}
                  <div className="relative overflow-hidden mb-4 h-52">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between px-3 pb-3 pt-8 bg-gradient-to-t from-[var(--color-navy-dark)]/70 to-transparent">
                      <span className="text-[10px] font-semibold uppercase tracking-widest text-[var(--color-amber)]">
                        {article.tag}
                      </span>
                      <span className="text-[10px] text-white/70">{article.date}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 mb-2 text-xs text-[var(--color-ink-muted)]">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" aria-hidden="true" />
                      {article.readTime}
                    </span>
                    <span>· {article.author}</span>
                  </div>

                  <h3 className="text-lg font-semibold text-[var(--color-navy-dark)] group-hover:text-[var(--color-navy)] transition-colors leading-snug mb-2">
                    {article.title}
                  </h3>
                  <p className="text-sm text-[var(--color-ink-muted)] leading-relaxed line-clamp-2 mb-3">
                    {article.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-cta)] group-hover:gap-2.5 transition-all">
                    Read more
                    <ArrowRight className="h-3 w-3" aria-hidden="true" />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ── Newsletter ───────────────────────────────────────── */}
      <section className="section-padding-sm">
        <div className="container-site">
          <NewsletterWidget variant="dark" />
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section
        className="section-padding-sm relative overflow-hidden"
        style={{
          background: `
            radial-gradient(ellipse at 20% 50%, var(--color-navy-light) 0%, transparent 60%),
            var(--color-navy-dark)
          `,
        }}
      >
        <div className="container-site relative z-10 text-center">
          <h2 className="text-3xl sm:text-4xl text-white mb-3">
            Ready to Discuss Your Legal Matter?
          </h2>
          <p className="text-white/55 mb-8 max-w-md mx-auto">
            Our team is available for consultations across all practice areas. We aim to
            respond within one business day.
          </p>
          <Link href="/contact" className="btn-primary">
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </SitePage>
  );
}
