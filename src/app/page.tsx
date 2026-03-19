import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Scale, Users, TrendingUp, Briefcase, ChevronRight, Play, Quote, ArrowRight, Clock, Calendar } from "lucide-react";
import { SitePage } from "@/components/site/SiteChrome";
import { NewsletterWidget } from "@/components/site/NewsletterWidget";
import { Stagger, StaggerItem } from "@/components/site/Animations";
import { practiceAreas, teamMembers, recentArticles, office } from "@/content/site-content";

export const metadata: Metadata = {
  title: "Seokane Inc. | Strategic Legal Counsel for Growing Businesses",
  description:
    "Boutique South African law firm delivering strategic legal counsel across commercial litigation, corporate law, employment matters, and business compliance.",
};

const whyChooseItems = [
  {
    icon: Scale,
    title: "We've Sat on Your Side of the Table",
    body: "City Seokane held executive positions — including CEO — at major South African corporates before establishing private practice. We don't just understand the law. We understand the commercial pressure behind every legal decision you face.",
  },
  {
    icon: Users,
    title: "Focused Where It Matters Most",
    body: "We concentrate on the legal areas where businesses face their greatest challenges: commercial disputes, corporate transactions, employment matters, and regulatory compliance. Focus delivers better outcomes than breadth.",
  },
  {
    icon: TrendingUp,
    title: "Over Two Decades in Practice",
    body: "Admitted to the bar in 1999 and in practice since 2001, our team has handled complex matters across High Court litigation, corporate transactions, and employment disputes. Experience you can rely on.",
  },
  {
    icon: Briefcase,
    title: "Advice Built Around Your Objectives",
    body: "We frame every legal recommendation around your business goals, timelines, and risk tolerance — not just the legal process. You leave every consultation knowing exactly where you stand and what to do next.",
  },
];

const faqs = [
  {
    question: "What types of matters does Seokane Inc. handle?",
    answer:
      "We handle commercial and corporate legal matters — including commercial litigation, corporate transactions, employment and labour disputes, estate and trust administration, and ongoing business compliance. Our focus is on growing businesses and corporate clients who need technically rigorous, commercially grounded advice.",
    open: true,
  },
  {
    question: "How do I schedule a consultation?",
    answer:
      `Complete the contact form on our Contact page, call us on ${office.phone}, or email ${office.email}. We aim to respond within one business day.`,
  },
  {
    question: "Do you work with small and medium-sized businesses?",
    answer:
      "Yes. We have a dedicated SME services offering that provides practical, affordable legal support — including company secretarial services, commercial contract drafting, and employment law guidance. Visit our For SMEs page for details.",
  },
  {
    question: "Where is Seokane Inc. located?",
    answer:
      "Our office is at 1 Maxwell Drive, Sunninghill, Johannesburg, 2191. We serve clients across South Africa and can accommodate remote consultations where appropriate.",
  },
  {
    question: "What should I bring to my first consultation?",
    answer:
      "Bring any documents related to your matter — contracts, correspondence, corporate records, or notices received. A brief written summary of your situation also helps. We'll guide you on specifics once your consultation is confirmed.",
  },
];

export default function HomePage() {
  return (
    <SitePage>

      {/* ── 1. HERO ────────────────────────────────────────────── */}
      <section className="relative bg-[var(--color-navy-dark)] overflow-hidden">

        {/* Main hero row: text left, photo right-to-edge */}
        <div className="flex min-h-[60vh] lg:min-h-[88vh]">

          {/* Left: text content */}
          <div className="relative z-10 flex flex-col justify-center px-6 py-20 md:px-10 lg:w-[54%] lg:py-28 lg:pl-[max(2.5rem,calc((100vw-1280px)/2+2.5rem))] lg:pr-16">
            <span className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/25 bg-white/8 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-white/70">
              Boutique Corporate Law Firm · Est. 2001
            </span>

            <h1 className="text-[clamp(1.9rem,5vw,4rem)] font-bold leading-[1.08] tracking-tight text-white">
              Strategic Legal<br />
              Counsel for<br />
              Growing Businesses.
            </h1>

            <p className="mt-5 max-w-[480px] text-base font-light leading-relaxed text-white/60">
              When a legal problem threatens what you&rsquo;ve built, you need an attorney
              who understands both the law and the business behind it. That&rsquo;s what we do.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link href="/contact" className="btn-light">
                Schedule a Consultation
              </Link>
              <Link
                href="/practice-areas"
                className="inline-flex items-center gap-2.5 text-sm font-semibold text-white/80 transition-colors hover:text-white"
              >
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/15 transition-colors hover:bg-white/25">
                  <Play className="h-3 w-3 fill-current translate-x-px" aria-hidden="true" />
                </span>
                Explore Practice Areas
              </Link>
            </div>
          </div>

          {/* Right: photo fills remaining width, bleeds to viewport edge */}
          <div className="relative hidden flex-1 lg:block">
            <Image
              src="/images/hero-attorney.jpg"
              alt="City Seokane, Director — Seokane Incorporated"
              fill
              priority
              className="object-cover object-center"
              sizes="46vw"
            />

            {/* Left-edge gradient blends photo into dark bg */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[var(--color-navy-dark)] to-transparent"
            />
          </div>
        </div>

        {/* Recent Updates bar */}
        <div className="border-t border-white/10 bg-[var(--color-navy-dark)]">
          <div className="container-site py-10 sm:py-4">
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6 lg:gap-0">
              <p className="text-xs font-semibold uppercase tracking-widest text-white/50 flex-shrink-0 lg:w-36">
                Latest Insights
              </p>
              <div className="flex flex-col sm:flex-row sm:flex-1 sm:flex-wrap sm:justify-between gap-3">
                {recentArticles.map((article) => (
                  <Link
                    key={article.slug}
                    href={`/blog/${article.slug}`}
                    className="group flex items-center gap-3 min-w-0 transition-all hover:opacity-90"
                  >
                    <div className="h-12 w-16 flex-shrink-0 overflow-hidden relative border border-white/10 group-hover:border-white/20 transition-all">
                      <Image
                        src={article.image}
                        alt=""
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="64px"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] uppercase tracking-widest text-[var(--color-amber)] mb-0.5 group-hover:text-[var(--color-amber-light)] transition-colors">
                        {article.tag}
                      </p>
                      <p className="text-xs font-semibold text-white group-hover:text-white/80 line-clamp-2 max-w-[220px] transition-colors">
                        {article.title}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. ABOUT + STATS ───────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-site">

          {/* Heading row */}
          <div className="grid gap-8 lg:grid-cols-2 lg:items-start mb-12">
            <div>
              <p className="eyebrow mb-3">About Seokane Inc.</p>
              <h2 className="text-4xl xl:text-5xl">
                Legal Depth. Commercial Judgment.
              </h2>
            </div>
            <div className="prose-site self-center">
              <p>
                Seokane Incorporated is a boutique Johannesburg law firm serving growing
                businesses and corporate clients across South Africa. We&rsquo;ve been at this
                since 2001 — long enough to have handled the disputes, contracts, and
                compliance challenges that keep business owners up at night.
              </p>
              <p className="mt-4">
                What sets us apart is not just our legal expertise. Our Director, City
                Seokane, held senior executive roles at Alexander Forbes, the SABC, and
                VVM Global Services before establishing private practice. That corporate
                background means our advice is shaped by real business context — not just
                legal technicalities.
              </p>
            </div>
          </div>

          {/* Stat cards — 95% on dark card to match Lexor priority */}
          <div className="grid gap-6 sm:grid-cols-3">
            {/* Dark card — lead stat */}
            <div className="stat-card-dark">
              <p className="text-7xl font-sans font-bold text-white leading-none">95%</p>
              <div>
                <p className="text-[1.05rem] font-semibold text-white/80">Client Satisfaction Rate</p>
                <p className="mt-1 text-[0.9rem] text-white/50">Based on post-case client feedback</p>
              </div>
            </div>

            {/* Light card */}
            <div className="stat-card-light">
              <p className="text-7xl font-sans font-bold text-[var(--color-navy-dark)] leading-none">20+</p>
              <div>
                <p className="text-[1.05rem] font-semibold text-[var(--color-ink)]">Years Combined Experience</p>
                <p className="mt-1 text-[0.9rem] text-[var(--color-ink-muted)]">Founded on roots dating back to 2001</p>
              </div>
            </div>

            {/* Light card */}
            <div className="stat-card-light">
              <p className="text-7xl font-sans font-bold text-[var(--color-navy-dark)] leading-none">5</p>
              <div>
                <p className="text-[1.05rem] font-semibold text-[var(--color-ink)]">Focused Practice Areas</p>
                <p className="mt-1 text-[0.9rem] text-[var(--color-ink-muted)]">
                  Commercial · Corporate · Employment · Estates · Compliance
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. WHY CHOOSE US ───────────────────────────────────── */}
      <section className="section-padding bg-[var(--color-surface)]">
        <div className="container-site">
          <p className="eyebrow mb-3">Why Choose Us</p>
          <h2 className="text-3xl sm:text-4xl xl:text-5xl mb-10">Why Growing Businesses Choose Seokane</h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseItems.map(({ icon: Icon, title, body }, i) => {
              const isFirst = i === 0;
              return (
                <article
                  key={title}
                  className={`feature-card ${isFirst ? "bg-[var(--color-navy)] shadow-none" : ""}`}
                >
                  <Icon className={`h-5 w-5 flex-shrink-0 ${isFirst ? "text-white" : "text-[var(--color-navy-dark)]"}`} aria-hidden="true" />
                  <div>
                    <h3 className={`text-base font-semibold mb-1.5 ${isFirst ? "text-white" : ""}`}>{title}</h3>
                    <p className={`text-xs leading-relaxed line-clamp-5 ${isFirst ? "text-white/65" : "text-[var(--color-ink-muted)]"}`}>{body}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 4. PRACTICE AREAS — SPLIT ──────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-site grid gap-16 lg:grid-cols-2 lg:items-center">

          {/* Left: image with Lexor-style corner bracket decorations */}
          <div className="relative">
            {/* Top-left bracket: dark outer square, white inner at bottom-right */}
            <div aria-hidden="true" className="absolute -top-4 -left-4 z-10 h-14 w-14">
              <div className="absolute inset-0 bg-[var(--color-navy-dark)]" />
              <div className="absolute bottom-0 right-0 h-8 w-8 bg-white" />
            </div>
            {/* Bottom-right bracket: dark outer square, white inner at top-left */}
            <div aria-hidden="true" className="absolute -bottom-4 -right-4 z-10 h-14 w-14">
              <div className="absolute inset-0 bg-[var(--color-navy-dark)]" />
              <div className="absolute top-0 left-0 h-8 w-8 bg-white" />
            </div>
            <div className="relative z-0 h-[440px] w-full overflow-hidden">
              <Image
                src="/images/attorneys-consultation.jpg"
                alt="Seokane Inc. attorneys in consultation"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="img-overlay-tint" aria-hidden="true" />
            </div>
          </div>

          {/* Right: numbered practice areas */}
          <div>
            <h2 className="text-4xl xl:text-5xl mb-8">
              Protecting Your Interests with Precision and Care
            </h2>

            <ol role="list">
              {practiceAreas.slice(0, 3).map((area, i) => (
                <li key={area.slug}>
                  <Link
                    href={`/practice-areas/${area.slug}`}
                    className="practice-item group block"
                  >
                    <span className={`text-3xl font-sans font-semibold min-w-[3rem] ${i === 0 ? "text-[var(--color-navy-dark)]/60" : "text-[var(--color-navy-dark)]/20"}`}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="flex-1">
                      <p className="font-semibold text-[var(--color-ink)] group-hover:text-[var(--color-navy)] transition-colors">
                        {area.title}
                      </p>
                      <p className="mt-1 text-sm text-[var(--color-ink-muted)]">
                        {area.shortDescription}
                      </p>
                    </div>
                    <ChevronRight
                      className="h-4 w-4 text-[var(--color-ink-muted)] opacity-0 group-hover:opacity-100 transition-opacity self-center"
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              ))}
            </ol>

            <Link
              href="/practice-areas"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-navy)] hover:text-[var(--color-amber)] transition-colors"
            >
              View all practice areas
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 5. TEAM ────────────────────────────────────────────── */}
      <section className="section-padding bg-[var(--color-surface)]">
        <div className="container-site">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="eyebrow mb-3">Our Team</p>
              <h2 className="text-4xl xl:text-5xl">Meet Our Expert Team</h2>
            </div>
            <Link
              href="/team"
              aria-label="View all team members"
              className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-navy)] hover:text-[var(--color-amber)] transition-colors"
            >
              View all
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <article key={member.name} className="group">
                <div className="overflow-hidden mb-4 relative h-80 w-full">
                  <Image
                    src={member.image}
                    alt={`Photo of ${member.name}`}
                    fill
                    className="object-cover object-[center_15%] transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="img-overlay-tint" aria-hidden="true" />
                </div>
                <h3 className="text-2xl">{member.name}</h3>
                <p className="text-sm font-medium text-[var(--color-amber)] mt-0.5">{member.title}</p>
                <p className="mt-2 text-sm text-[var(--color-ink-muted)] leading-relaxed line-clamp-3">
                  {member.bio}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. TESTIMONIAL ─────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-site max-w-3xl mx-auto text-center">
          <p className="eyebrow mb-6">Testimonial</p>
          <Quote
            className="h-10 w-10 text-[var(--color-navy-dark)]/15 mx-auto mb-6"
            aria-hidden="true"
          />
          <blockquote>
            <p className="font-sans text-2xl sm:text-3xl xl:text-4xl leading-snug text-[var(--color-navy-dark)]">
              &ldquo;Seokane truly stands out for their professionalism and dedication to
              their clients. I&rsquo;m grateful to have found a firm that not only delivers
              results but genuinely cares about their clients&rsquo; well-being.&rdquo;
            </p>
            <footer className="mt-8 flex items-center justify-center gap-3">
              <div className="h-10 w-10 rounded-full bg-[var(--color-navy-dark)] flex-shrink-0 flex items-center justify-center">
                <span className="text-sm font-semibold text-white/70">C</span>
              </div>
              <div className="text-left">
                {/* TODO: Replace with named client testimonial */}
                <p className="text-sm font-semibold text-[var(--color-ink)]">[Client Name]</p>
                <p className="text-xs text-[var(--color-ink-muted)]">Chief Executive Officer</p>
              </div>
            </footer>
          </blockquote>
        </div>
      </section>

      {/* ── 7. LATEST ARTICLES ─────────────────────────────────── */}
      <section className="section-padding bg-[var(--color-surface)]">
        <div className="container-site">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="eyebrow mb-3">Legal Insights</p>
              <h2 className="text-4xl xl:text-5xl">Latest from the Firm</h2>
            </div>
            <Link
              href="/blog"
              aria-label="View all articles"
              className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-navy)] hover:text-[var(--color-amber)] transition-colors"
            >
              View all
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <Stagger className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {recentArticles.map((article) => (
              <StaggerItem key={article.slug} as="article">
                <Link href={`/blog/${article.slug}`} className="group block h-full">
                  <div className="relative overflow-hidden mb-4 h-52">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute top-3 left-3 bg-[var(--color-navy-dark)]/80 px-2.5 py-1 backdrop-blur-sm">
                      <span className="text-[10px] font-semibold uppercase tracking-widest text-[var(--color-amber)]">
                        {article.tag}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 mb-2 text-xs text-[var(--color-ink-muted)]">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" aria-hidden="true" />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" aria-hidden="true" />
                      {article.readTime}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--color-navy-dark)] group-hover:text-[var(--color-navy)] transition-colors leading-snug mb-2">
                    {article.title}
                  </h3>
                  <p className="text-sm text-[var(--color-ink-muted)] leading-relaxed line-clamp-2">
                    {article.excerpt}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-cta)] group-hover:gap-2.5 transition-all">
                    Read article
                    <ArrowRight className="h-3 w-3" aria-hidden="true" />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ── 8. NEWSLETTER ──────────────────────────────────────── */}
      <section className="section-padding-sm">
        <div className="container-site">
          <NewsletterWidget variant="dark" />
        </div>
      </section>

      {/* ── 9. FAQ ─────────────────────────────────────────────── */}
      <section className="section-padding bg-[var(--color-surface)]">
        <div className="container-site grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">

          {/* Left: heading + CTA */}
          <div className="lg:sticky lg:top-24">
            <h2 className="text-4xl xl:text-5xl mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-[var(--color-ink-muted)] mb-8">
              Have another question? Please don&rsquo;t hesitate to contact our team.
            </p>
            <Link href="/contact" className="btn-secondary">
              Contact Our Team
            </Link>
          </div>

          {/* Right: accordion */}
          <div className="space-y-0 divide-y divide-[var(--color-surface-dark)]">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group py-5"
                open={faq.open}
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 list-none text-base font-semibold text-[var(--color-ink)] hover:text-[var(--color-navy)] transition-colors">
                  {faq.question}
                  <ChevronRight
                    className="h-4 w-4 flex-shrink-0 text-[var(--color-ink-muted)] transition-transform group-open:rotate-90"
                    aria-hidden="true"
                  />
                </summary>
                <p className="mt-3 text-sm text-[var(--color-ink-muted)] leading-relaxed pr-8">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. CTA BANNER ──────────────────────────────────────── */}
      <section
        className="section-padding-sm relative overflow-hidden"
        style={{
          background: `
            radial-gradient(ellipse at 20% 50%, var(--color-navy-light) 0%, transparent 60%),
            radial-gradient(ellipse at 80% 50%, var(--color-navy-muted) 0%, transparent 60%),
            var(--color-navy-dark)
          `,
        }}
      >
        {/* Subtle diagonal texture overlay */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              white 0px,
              white 1px,
              transparent 1px,
              transparent 24px
            )`,
          }}
        />

        <div className="container-site relative z-10 text-center">
          <h2 className="text-3xl sm:text-4xl xl:text-5xl text-white mb-3">
            Ready to Resolve Your<br />Legal Challenge?
          </h2>
          <p className="text-xl sm:text-2xl md:text-3xl font-sans text-white/80 mb-4">
            Seokane Inc. is Here to Help.
          </p>
          <p className="text-white/55 mb-10 max-w-md mx-auto">
            From commercial disputes to compliance and employment matters, we deliver
            strategic legal counsel grounded in over two decades of practice and real
            executive experience.
          </p>
          <Link href="/contact" className="btn-ghost">
            Schedule a Consultation
          </Link>
        </div>
      </section>

    </SitePage>
  );
}
