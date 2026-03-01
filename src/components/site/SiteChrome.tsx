import Link from "next/link";
import { ReactNode } from "react";
import { practiceAreas, office } from "@/content/site-content";

const navItems = [
  { href: "/about", label: "About" },
  { href: "/practice-areas", label: "Practice Areas" },
  { href: "/sme-services", label: "For SMEs" },
  { href: "/team", label: "Our Team" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-surface-dark bg-white/90 backdrop-blur">
      <div className="container-site flex flex-wrap items-center justify-between gap-4 py-5">
        <Link href="/" className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-md bg-navy text-white">
            <span className="text-sm font-bold">SI</span>
          </div>
          <div>
            <p className="font-serif text-xl text-navy-dark">Seokane Inc.</p>
            <p className="text-xs uppercase tracking-[0.12em] text-ink-muted">Attorneys</p>
          </div>
        </Link>

        <nav className="flex flex-wrap items-center gap-5 text-sm font-medium text-ink-muted">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-amber">
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="/contact" className="btn-primary">
          Schedule Consultation
        </Link>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-20 bg-navy-dark text-surface-light">
      <div className="container-site grid gap-10 py-14 md:grid-cols-4">
        <div>
          <p className="font-serif text-2xl">Seokane Incorporated</p>
          <p className="mt-3 text-sm text-surface">
            Boutique South African law firm delivering strategic legal counsel and
            commercial solutions.
          </p>
        </div>

        <div>
          <p className="eyebrow">Quick Links</p>
          <ul role="list" className="mt-3 space-y-2 text-sm text-surface">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow">Practice Areas</p>
          <ul role="list" className="mt-3 space-y-2 text-sm text-surface">
            {practiceAreas.map((area) => (
              <li key={area.slug}>
                <Link href={`/practice-areas/${area.slug}`} className="hover:text-white">
                  {area.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow">Contact</p>
          <ul role="list" className="mt-3 space-y-2 text-sm text-surface">
            <li>{office.address}</li>
            <li>{office.phone}</li>
            <li>
              <a href={`mailto:${office.email}`} className="hover:text-white">
                {office.email}
              </a>
            </li>
            <li>{office.hours}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-navy-muted/60">
        <div className="container-site flex flex-wrap items-center justify-between gap-3 py-4 text-xs text-surface">
          <p>© {new Date().getFullYear()} Seokane Incorporated. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/contact" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-white">
              Terms of Service
            </Link>
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
