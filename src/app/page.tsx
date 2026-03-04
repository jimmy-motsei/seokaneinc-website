import type { Metadata } from "next";
import Link from "next/link";
import { Scale, Users, TrendingUp, Briefcase, ChevronRight, Play, Quote, ArrowRight } from "lucide-react";
import { SitePage } from "@/components/site/SiteChrome";
import { PlaceholderImage } from "@/components/site/PlaceholderImage";
import { practiceAreas, teamMembers } from "@/content/site-content";

export const metadata: Metadata = {
  title: "Seokane Inc. | Strategic Legal Counsel for Growing Businesses",
  description:
    "Boutique South African law firm delivering strategic legal counsel across commercial litigation, corporate law, employment matters, and business compliance.",
};

const whyChooseItems = [
  {
    icon: Scale,
    title: "Deep Expertise",
    body: "Technically excellent legal counsel across commercial litigation, corporate law, and employment matters.",
  },
  {
    icon: Users,
    title: "Client-Centric",
    body: "We build lasting relationships grounded in trust, transparency, and clear communication.",
  },
  {
    icon: TrendingUp,
    title: "Proven Track Record",
    body: "Over two decades of continuous service delivery across complex business and commercial matters.",
  },
  {
    icon: Briefcase,
    title: "Strategic Advice",
    body: "Legal guidance aligned to your business objectives, timelines, and commercial risk profile.",
  },
];

const faqs = [
  {
    question: "What types of matters does Seokane Inc. handle?",
    answer:
      "We handle a broad range of commercial and corporate legal matters including commercial litigation, corporate transactions, employment and labour disputes, estate and trust administration, and ongoing business compliance. Our focus is on growing businesses and corporate clients.",
    open: true,
  },
  {
    question: "How do I schedule a consultation?",
    answer:
      "You can schedule a consultation by completing our contact form, calling our office directly, or emailing us at info@seokaneinc.co.za. We aim to respond within one business day.",
  },
  {
    question: "Do you work with small and medium-sized businesses?",
    answer:
      "Yes. We have a dedicated SME services offering that provides affordable, practical legal support for smaller businesses — including company secretarial services, contract drafting, and employment law guidance.",
  },
  {
    question: "Where is Seokane Inc. located?",
    answer:
      "Our offices are located at 18 Eton Road, Parktown, Johannesburg, 2193. We serve clients across South Africa and can accommodate remote consultations.",
  },
  {
    question: "What should I bring to my first consultation?",
    answer:
      "Bring any relevant documents related to your matter — contracts, correspondence, corporate documents, or notices. A brief written summary of your situation is also helpful. We will guide you on specifics once your consultation is confirmed.",
  },
];

export default function HomePage() {
  return (
    <SitePage>

      {/* ── 1. HERO ────────────────────────────────────────────── */}
      <section className="relative bg-[var(--color-navy-dark)] overflow-hidden">

        {/* Main hero row: text left, photo right-to-edge */}
        <div className="flex min-h-[82vh] lg:min-h-[88vh]">

          {/* Left: text content */}
          <div className="relative z-10 flex flex-col justify-center px-6 py-20 md:px-10 lg:w-[54%] lg:py-28 lg:pl-[max(2.5rem,calc((100vw-1280px)/2+2.5rem))] lg:pr-16">
            <span className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/25 bg-white/8 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-white/70">
              Your Attorney at Law
            </span>

            <h1 className="text-[clamp(2.6rem,5vw,4rem)] font-bold leading-[1.08] tracking-tight text-white">
              Providing Expert<br />
              Legal Solutions<br />
              That Protect You.
            </h1>

            <p className="mt-5 max-w-[480px] text-base font-light leading-relaxed text-white/60">
              With decades of experience across complex legal matters, we provide
              strategic solutions that safeguard your rights, protect your interests,
              and guide you through every step with confidence and clarity.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link href="/contact" className="btn-light">
                Schedule a Call
              </Link>
              <Link
                href="/practice-areas"
                className="inline-flex items-center gap-2.5 text-sm font-semibold text-white/80 transition-colors hover:text-white"
              >
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/15 transition-colors hover:bg-white/25">
                  <Play className="h-3 w-3 fill-current translate-x-px" aria-hidden="true" />
                </span>
                Watch Video
              </Link>
            </div>
          </div>

          {/* Right: photo fills remaining width, bleeds to viewport edge */}
          <div className="relative hidden flex-1 lg:block">
            <PlaceholderImage
              label="Lead attorney portrait"
              square
              dark
              className="absolute inset-0 h-full w-full"
            />

            {/* Left-edge gradient blends photo into dark bg */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[var(--color-navy-dark)] to-transparent"
            />

            {/* Attorney name card — overlaid bottom-left of photo */}
            <div className="absolute bottom-8 left-8 rounded-xl bg-black/55 px-5 py-3.5 backdrop-blur-sm">
              <p className="text-sm font-semibold text-white">City Seokane</p>
              <p className="mt-0.5 text-xs text-white/55">20+ Years Experience</p>
            </div>
          </div>
        </div>

        {/* Recent Updates bar */}
        <div className="border-t border-white/10 bg-[var(--color-navy-dark)]">
          <div className="container-site py-4">
            <div className="flex flex-wrap items-center gap-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-white/50 flex-shrink-0">
                Recent Updates
              </p>
              <div className="flex flex-wrap gap-5">
                {[
                  {
                    label: "Legal insight",
                    title: "Recent Successes and Community Impact",
                    body: "Seokane Inc. continues to advance justice and empower clients.",
                  },
                  {
                    label: "Firm news",
                    title: "Advocacy, Achievement and Engagement",
                    body: "Seokane continues to make strides in the legal landscape.",
                  },
                ].map((item) => (
                  <Link
                    key={item.title}
                    href="/contact"
                    className="group flex items-center gap-3 min-w-0"
                  >
                    <div className="h-12 w-16 flex-shrink-0 overflow-hidden rounded-md bg-white/10">
                      <PlaceholderImage label="" square className="h-full w-full [&>div:last-child]:min-h-0 [&>div:last-child]:p-0" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] uppercase tracking-widest text-[var(--color-amber)] mb-0.5">
                        {item.label}
                      </p>
                      <p className="text-xs font-semibold text-white group-hover:text-white/80 truncate max-w-[200px]">
                        {item.title}
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
              <p className="eyebrow mb-3">About Us</p>
              <h2 className="text-4xl xl:text-5xl">
                Seokane is a Legacy<br />of Legal Excellence
              </h2>
            </div>
            <div className="prose-site self-center">
              <p>
                At Seokane Incorporated, we pride ourselves on a rich history of delivering
                exceptional legal services and fostering meaningful relationships with our
                clients. With a commitment to integrity and professionalism, our team of
                experienced attorneys has navigated complex legal landscapes since 2001.
              </p>
            </div>
          </div>

          {/* Stat cards — 95% on dark card to match Lexor priority */}
          <div className="grid gap-5 sm:grid-cols-3">
            {/* Dark card — lead stat */}
            <div className="stat-card-dark">
              <p className="text-7xl font-serif font-bold text-white leading-none">95%</p>
              <p className="mt-3 text-sm font-semibold text-white/80">Client Satisfaction Rate</p>
              <p className="mt-1 text-xs text-white/50">Based on post-case client feedback</p>
            </div>

            {/* Light card */}
            <div className="stat-card-light">
              <p className="text-7xl font-serif font-bold text-[var(--color-navy-dark)] leading-none">20+</p>
              <p className="mt-3 text-sm font-semibold text-[var(--color-ink)]">Years Combined Experience</p>
              <p className="mt-1 text-xs text-[var(--color-ink-muted)]">Founded on roots dating back to 2001</p>
            </div>

            {/* Light card */}
            <div className="stat-card-light">
              <p className="text-7xl font-serif font-bold text-[var(--color-navy-dark)] leading-none">5</p>
              <p className="mt-3 text-sm font-semibold text-[var(--color-ink)]">Focused Practice Areas</p>
              <p className="mt-1 text-xs text-[var(--color-ink-muted)]">
                Commercial · Corporate · Employment · Estates · Compliance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. WHY CHOOSE US ───────────────────────────────────── */}
      <section className="section-padding bg-[var(--color-surface)]">
        <div className="container-site">
          <p className="eyebrow mb-3">Why Choose Us</p>
          <h2 className="text-4xl xl:text-5xl mb-10">Why Choose Seokane</h2>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseItems.map(({ icon: Icon, title, body }, i) => {
              const isFirst = i === 0;
              return (
                <article
                  key={title}
                  className={`feature-card ${isFirst ? "bg-[var(--color-navy-dark)] border-[var(--color-navy-dark)]" : ""}`}
                >
                  <div className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg ${isFirst ? "bg-white/15" : "bg-[var(--color-navy-dark)]"}`}>
                    <Icon className="h-5 w-5 text-white" aria-hidden="true" />
                  </div>
                  <h3 className={`text-xl mb-2 ${isFirst ? "text-white" : ""}`}>{title}</h3>
                  <p className={`text-sm leading-relaxed ${isFirst ? "text-white/65" : "text-[var(--color-ink-muted)]"}`}>{body}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 4. PRACTICE AREAS — SPLIT ──────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-site grid gap-12 lg:grid-cols-2 lg:items-center">

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
            <PlaceholderImage
              label="Attorneys in consultation"
              className="relative z-0 h-[440px] w-full"
            />
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
                    className={`practice-item group block ${i === 0 ? "practice-item-active" : ""}`}
                  >
                    <span className={`text-3xl font-serif font-semibold min-w-[3rem] ${i === 0 ? "text-[var(--color-navy-dark)]/60" : "text-[var(--color-navy-dark)]/20"}`}>
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

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <article key={member.name} className="group">
                <div className="overflow-hidden rounded-lg mb-4">
                  <PlaceholderImage
                    label={`Photo of ${member.name}`}
                    className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
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
            <p className="font-serif text-2xl sm:text-3xl xl:text-4xl leading-snug text-[var(--color-navy-dark)]">
              &ldquo;Seokane truly stands out for their professionalism and dedication to
              their clients. I&rsquo;m grateful to have found a firm that not only delivers
              results but genuinely cares about their clients&rsquo; well-being.&rdquo;
            </p>
            <footer className="mt-8 flex items-center justify-center gap-3">
              <div className="h-10 w-10 rounded-full bg-[var(--color-surface)] overflow-hidden flex-shrink-0">
                <PlaceholderImage label="" className="h-full w-full object-cover" />
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-[var(--color-ink)]">Client Name</p>
                <p className="text-xs text-[var(--color-ink-muted)]">Chief Executive Officer</p>
              </div>
            </footer>
          </blockquote>
        </div>
      </section>

      {/* ── 7. FAQ ─────────────────────────────────────────────── */}
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
            <Link href="/contact" className="btn-primary">
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
          <h2 className="text-4xl sm:text-5xl text-white mb-3">
            Facing Legal Challenges?
          </h2>
          <p className="text-2xl sm:text-3xl font-serif text-white/80 mb-4">
            Seokane is Here to Help
          </p>
          <p className="text-white/55 mb-10 max-w-md mx-auto">
            From complex disputes to everyday legal matters, trust us to guide you
            with expertise and care.
          </p>
          <Link href="/contact" className="btn-primary">
            Get Started
          </Link>
        </div>
      </section>

    </SitePage>
  );
}
