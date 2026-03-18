# Claude Code Brief: Design System Alignment v3 — FINAL (Transparent Logo)
> Project: `seokane-platform`
> Session type: Design system — typography + brand colour + real logo asset
> Read first: `.agents/client-context.md`
> Supersedes: ALL previous typography briefs

---

## Objective

Four targeted changes to complete the Seokane Inc. brand identity:

1. **Typography** — Add Playfair Display serif for H1 and H2 (both weight 700)
2. **Brand colour** — Replace all amber/yellow with Jaffa orange `#E78034` and derived shades
3. **Logo** — Replace `SeokaneSymbol` SVG component in nav and footer with the real transparent PNG (`/public/seokane-symbol.png`)
4. **Favicon** — Point Next.js metadata to the real PNG asset

**Do not change:** layout, components, copy, spacing, or anything not listed above.

---

## Asset Confirmed in Project

```
/public/seokane-symbol.png
```

This is the official Seokane brand mark with a **fully transparent background**. The orange mark (`#E78034` Jaffa) will sit cleanly on any background — no wrapper div or background colour needed.

---

## Files to Change

```
1. src/app/layout.tsx                 ← Playfair Display import + favicon metadata
2. src/app/globals.css                ← typography + colour token updates
3. src/components/site/SiteChrome.tsx ← replace SVG logo with next/image (nav + footer)
4. src/app/icon.svg                   ← DELETE this file
```

Do not touch any `page.tsx` files, content files, or any other components.

---

## Change 1: `src/app/layout.tsx`

### 1a. Update font imports

**Current:**
```typescript
import { Manrope } from "next/font/google";

const bodyFont = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});
```

**Replace with:**
```typescript
import { Manrope, Playfair_Display } from "next/font/google";

const displayFont = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const bodyFont = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});
```

### 1b. Update `<body>` className

**Current:**
```typescript
<body className={`${bodyFont.variable} antialiased`}>
```

**Replace with:**
```typescript
<body className={`${displayFont.variable} ${bodyFont.variable} antialiased`}>
```

### 1c. Update metadata with favicon

**Current:**
```typescript
export const metadata: Metadata = {
  title: "Seokane Incorporated | Boutique South African Law Firm",
  description: "Strategic legal counsel...",
};
```

**Replace with:**
```typescript
export const metadata: Metadata = {
  title: "Seokane Incorporated | Boutique South African Law Firm",
  description:
    "Strategic legal counsel and commercial solutions for growing businesses and corporate clients in South Africa.",
  icons: {
    icon: "/seokane-symbol.png",
    apple: "/seokane-symbol.png",
  },
};
```

---

## Change 2: `src/app/globals.css`

### 2a. Add `--font-display` to `:root`

After `--font-body: var(--font-body);` add:
```css
--font-display: var(--font-display);
```

### 2b. Update `@theme inline`

**Find:**
```css
--font-sans:    var(--font-body);
--font-serif:   var(--font-body);
```

**Replace with:**
```css
--font-sans:    var(--font-body);
--font-serif:   var(--font-display);
--font-display: var(--font-display);
```

### 2c. Replace ALL heading rules in `@layer base`

Find and replace the entire h1/h2/h3/h4/h5/h6 block:

```css
h1 {
  font-family: var(--font-display);
  font-weight: 700;
  line-height: 1.05;
  letter-spacing: -0.01em;
  color: var(--color-navy-dark);
}

h2 {
  font-family: var(--font-display);
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.01em;
  color: var(--color-navy-dark);
}

h3 {
  font-family: var(--font-body);
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: -0.01em;
  color: var(--color-navy-dark);
}

h4,
h5,
h6 {
  font-family: var(--font-body);
  font-weight: 600;
  line-height: 1.25;
  letter-spacing: 0;
  color: var(--color-navy-dark);
}
```

### 2d. Replace amber colour tokens in `:root`

**Find:**
```css
--color-amber:        #d2a647;  /* Amber Yellow     — CTA / highlight */
--color-amber-light:  #deba6f;  /* Amber light variant */
--color-amber-dark:   #b88c35;  /* Amber dark variant */
```

**Replace with:**
```css
--color-amber:        #E78034;  /* Jaffa Orange      — CTA / highlight */
--color-amber-light:  #EFA06A;  /* Jaffa light */
--color-amber-dark:   #C45E1A;  /* Jaffa dark */
```

### 2e. Warm surface backgrounds

```css
/* Find → Replace */
--color-surface:       #f7f8fa  →  #f5f1e8
--color-surface-light: #fafbfd  →  #faf7f2
```

### 2f. Grep audit — confirm no hardcoded old values remain

```bash
grep -rn "#d2a647\|#deba6f\|#b88c35" src/
```

Any results found must be replaced with `var(--color-amber)` or the new hex values before marking this done.

---

## Change 3: `src/components/site/SiteChrome.tsx`

### 3a. Update imports

**Current:**
```typescript
import Link from "next/link";
import { ReactNode } from "react";
import { practiceAreas, office } from "@/content/site-content";
import { SeokaneSymbol } from "./SeokaneSymbol";
```

**Replace with:**
```typescript
import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";
import { practiceAreas, office } from "@/content/site-content";
```

### 3b. Replace header logo

**Find the current header logo block:**
```tsx
<Link href="/" className="flex items-center gap-3">
  <SeokaneSymbol size={38} color="#d2a647" />
  <div>
    <p className="text-xl font-bold text-white tracking-tight">Seokane Inc.</p>
    <p className="text-xs uppercase tracking-[0.12em] text-white/50">Attorneys</p>
  </div>
</Link>
```

**Replace with:**
```tsx
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
```

### 3c. Replace footer logo

**Find the current footer logo block:**
```tsx
<div className="flex items-center gap-3 mb-4">
  <SeokaneSymbol size={32} color="var(--color-navy-dark)" />
  <p className="text-xl font-bold tracking-tight text-[var(--color-navy-dark)]">Seokane Inc.</p>
</div>
```

**Replace with:**
```tsx
<div className="flex items-center gap-3 mb-4">
  <Image
    src="/seokane-symbol.png"
    alt="Seokane Inc. logo"
    width={36}
    height={36}
  />
  <p className="text-xl font-bold tracking-tight text-[var(--color-navy-dark)]">Seokane Inc.</p>
</div>
```

No wrapper divs. The PNG has a transparent background and will sit cleanly on both the dark navy header and the white footer.

---

## Change 4: Delete `src/app/icon.svg`

```bash
rm src/app/icon.svg
```

The favicon is now handled by `metadata.icons` in `layout.tsx` pointing to `/seokane-symbol.png`.

---

## Verification

```bash
npx tsc --noEmit
npm run dev
```

Check every item in this list before marking done:

| Element | Expected |
|---|---|
| Browser tab favicon | Seokane orange symbol |
| Nav logo | Orange symbol PNG, no dark box behind it |
| Footer logo | Orange symbol PNG, floats cleanly on white |
| H1 hero heading | Playfair Display — clearly serif |
| H2 section headings | Playfair Display weight 700 |
| H3 card headings | Manrope weight 600 — lighter than before |
| All CTA buttons | Jaffa orange `#E78034` |
| Button hover | Darker Jaffa `#C45E1A` |
| Surface sections | Warm off-white `#f5f1e8` |
| Nav links | Manrope — unchanged |
| Body text | Manrope — unchanged |
| Eyebrow labels | Manrope uppercase — unchanged |
| No console errors | Clean output |

---

## Definition of Done

- [ ] Playfair Display imported and both font variables in `layout.tsx`
- [ ] `metadata.icons` points to `/seokane-symbol.png`
- [ ] H1 + H2 → Playfair Display weight 700
- [ ] H3/H4 → Manrope weight 600
- [ ] `--color-amber` = `#E78034` and variants updated
- [ ] Surface colours warmed
- [ ] Nav logo uses `next/image` — no wrapper div
- [ ] Footer logo uses `next/image` — no wrapper div
- [ ] `SeokaneSymbol` import removed from `SiteChrome.tsx`
- [ ] `icon.svg` deleted
- [ ] Grep confirms no old amber hex values remain
- [ ] `npx tsc --noEmit` passes
- [ ] Dev server clean

---

## Out of Scope

- Page copy, layout, component structure
- `SeokaneSymbol.tsx` file (leave in place, just unused)
- Contact form, mobile nav, WhatsApp button
- Any colours other than amber tokens and surface tokens above
