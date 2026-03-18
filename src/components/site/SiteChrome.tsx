import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";
import { practiceAreas, office } from "@/content/site-content";
import { MobileNav } from "./MobileNav";

const navItems = [
  { href: "/about", label: "About" },
  { href: "/practice-areas", label: "Practice Areas" },
  { href: "/sme-services", label: "For SMEs" },
  { href: "/team", label: "Our Team" },
  { href: "/blog", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="bg-[var(--color-navy)] border-b border-white/10">
      <div className="container-site flex flex-wrap items-center justify-between gap-4 py-5">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/seokane-symbol.png"
            alt="Seokane Inc. logo"
            width={40}
            height={40}
            priority
          />
          <div>
            <p className="text-xl font-bold text-white tracking-tight">Seokane Inc.</p>
            <p className="text-xs uppercase tracking-[0.12em] text-white/50">Attorneys</p>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-white/70">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="/contact" className="btn-ghost hidden lg:inline-flex">
          Schedule Consultation
        </Link>

        <MobileNav navItems={navItems} office={office} />
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-white border-t border-[var(--color-surface-dark)]">
      <div className="container-site grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-5">
        {/* Column 1: Brand */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3 mb-4">
            <Image
              src="/seokane-symbol.png"
              alt="Seokane Inc. logo"
              width={36}
              height={36}
            />
            <p className="text-xl font-bold tracking-tight text-[var(--color-navy-dark)]">Seokane Inc.</p>
          </div>
          <p className="text-sm leading-relaxed text-[var(--color-ink-muted)]">
            Boutique South African law firm delivering strategic legal counsel for growing
            businesses. In practice since 2001.
          </p>
        </div>

        {/* Column 2: Company */}
        <div>
          <p className="eyebrow mb-4">Company</p>
          <ul role="list" className="space-y-2 text-sm text-[var(--color-ink-muted)]">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-[var(--color-ink)]">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Practice Areas */}
        <div>
          <p className="eyebrow mb-4">Practice Areas</p>
          <ul role="list" className="space-y-2 text-sm text-[var(--color-ink-muted)]">
            {practiceAreas.map((area) => (
              <li key={area.slug}>
                <Link
                  href={`/practice-areas/${area.slug}`}
                  className="transition-colors hover:text-[var(--color-ink)]"
                >
                  {area.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Resources */}
        <div>
          <p className="eyebrow mb-4">Resources</p>
          <ul role="list" className="space-y-2 text-sm text-[var(--color-ink-muted)]">
            <li>
              <Link href="/blog" className="transition-colors hover:text-[var(--color-ink)]">
                Legal Insights
              </Link>
            </li>
            <li>
              <Link href="/sme-services" className="transition-colors hover:text-[var(--color-ink)]">
                SME Services
              </Link>
            </li>
            <li>
              <Link href="/about" className="transition-colors hover:text-[var(--color-ink)]">
                About the Firm
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="transition-colors hover:text-[var(--color-ink)]">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 5: Headquarters */}
        <div>
          <p className="eyebrow mb-4">Headquarters</p>
          <ul role="list" className="space-y-3 text-sm text-[var(--color-ink-muted)]">
            <li className="flex items-start gap-2 leading-relaxed">
              <svg className="h-4 w-4 shrink-0 mt-0.5 text-[var(--color-ink-faint)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                <circle cx="12" cy="9" r="2.5"/>
              </svg>
              <span>{office.address}</span>
            </li>
            <li className="flex items-center gap-2">
              <svg className="h-4 w-4 shrink-0 text-[var(--color-ink-faint)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.38 2 2 0 0 1 3.6 1.2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.78a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <a href={`tel:${office.phone}`} className="transition-colors hover:text-[var(--color-ink)]">
                {office.phone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <svg className="h-4 w-4 shrink-0 text-[var(--color-ink-faint)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
              <a href={`mailto:${office.email}`} className="transition-colors hover:text-[var(--color-ink)]">
                {office.email}
              </a>
            </li>
            <li className="text-[var(--color-ink-muted)]/60 text-xs">{office.hours}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[var(--color-surface-dark)]">
        <div className="container-site flex flex-wrap items-center justify-between gap-3 py-4 text-xs text-[var(--color-ink-muted)]">
          <p>© {new Date().getFullYear()} Seokane Incorporated. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="transition-colors hover:text-[var(--color-ink)]">Privacy Policy</Link>
            {/* Social icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/seokane-incorporated"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Seokane Inc. on LinkedIn"
                className="transition-colors hover:text-[var(--color-navy)]"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://x.com/seokaneinc"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Seokane Inc. on X"
                className="transition-colors hover:text-[var(--color-navy)]"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/seokaneinc"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Seokane Inc. on Facebook"
                className="transition-colors hover:text-[var(--color-navy)]"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function SitePage({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}
