"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { SeokaneSymbol } from "./SeokaneSymbol";

interface NavItem {
  href: string;
  label: string;
}

interface OfficeInfo {
  phone: string;
  email: string;
}

interface MobileNavProps {
  navItems: NavItem[];
  office: OfficeInfo;
}

export function MobileNav({ navItems, office }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  const close = () => setIsOpen(false);

  // Body scroll lock
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <>
      {/* Hamburger toggle — mobile only */}
      <button
        className="lg:hidden flex items-center justify-center w-11 h-11 text-white/80 hover:text-white transition-colors"
        onClick={() => setIsOpen((v) => !v)}
        aria-expanded={isOpen}
        aria-controls="mobile-nav-drawer"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Backdrop */}
      <div
        className="lg:hidden fixed inset-0 z-40 bg-black/60"
        style={{
          opacity: isOpen ? 1 : 0,
          visibility: isOpen ? "visible" : "hidden",
          transition: "opacity var(--transition-slow), visibility var(--transition-slow)",
        }}
        onClick={close}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        id="mobile-nav-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        className="lg:hidden fixed top-0 right-0 h-full w-[82vw] max-w-xs z-50 flex flex-col"
        style={{
          background: "var(--color-navy)",
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform var(--transition-slow)",
        }}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
          <Link href="/" className="flex items-center gap-3" onClick={close}>
            <SeokaneSymbol size={32} color="#d2a647" />
            <div>
              <p className="text-base font-bold text-white tracking-tight">Seokane Inc.</p>
              <p className="text-[0.65rem] uppercase tracking-[0.12em] text-white/50">Attorneys</p>
            </div>
          </Link>
          <button
            className="flex items-center justify-center w-9 h-9 text-white/60 hover:text-white transition-colors"
            onClick={close}
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 overflow-y-auto px-6 py-4">
          <ul role="list">
            {navItems.map((item) => (
              <li key={item.href} className="border-b border-white/10">
                <Link
                  href={item.href}
                  className="flex items-center py-4 text-base font-medium text-white/80 hover:text-white transition-colors"
                  onClick={close}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-6">
            <Link href="/contact" className="btn-ghost w-full text-center" onClick={close}>
              Schedule Consultation
            </Link>
          </div>
        </nav>

        {/* Drawer footer */}
        <div className="px-6 py-5 border-t border-white/10 space-y-1">
          <a
            href={`tel:${office.phone}`}
            className="block text-sm text-white/50 hover:text-white/80 transition-colors"
          >
            {office.phone}
          </a>
          <a
            href={`mailto:${office.email}`}
            className="block text-sm text-white/50 hover:text-white/80 transition-colors"
          >
            {office.email}
          </a>
        </div>
      </aside>
    </>
  );
}
