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

        <Link href="/contact" className="btn-primary hidden lg:inline-flex">
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
      <div className="container-site grid gap-10 py-14 md:grid-cols-4">
        <div>
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
            Seokane Incorporated is a boutique South African law firm delivering strategic
            legal counsel and commercial solutions for growing businesses and corporate
            clients. In practice since 2001.
          </p>
        </div>

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

        <div>
          <p className="eyebrow mb-4">Headquarters</p>
          <ul role="list" className="space-y-2 text-sm text-[var(--color-ink-muted)]">
            <li className="leading-relaxed">{office.address}</li>
            <li>
              <a href={`tel:${office.phone}`} className="transition-colors hover:text-[var(--color-ink)]">
                {office.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${office.email}`} className="transition-colors hover:text-[var(--color-ink)]">
                {office.email}
              </a>
            </li>
            <li className="text-[var(--color-ink-muted)]/60">{office.hours}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[var(--color-surface-dark)]">
        <div className="container-site flex flex-wrap items-center justify-between gap-3 py-4 text-xs text-[var(--color-ink-muted)]">
          <p>© {new Date().getFullYear()} Seokane Incorporated. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="transition-colors hover:text-[var(--color-ink)]">Privacy Policy</Link>
            <Link href="/contact" className="transition-colors hover:text-[var(--color-ink)]">Terms of Service</Link>
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
