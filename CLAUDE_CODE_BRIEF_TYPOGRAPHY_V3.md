# Claude Code Brief: Design System Alignment v3 — FINAL
> Project: `seokane-platform`
> Session type: Design system — typography + brand colour + real logo asset
> Read first: `.agents/client-context.md`
> Supersedes: `CLAUDE_CODE_BRIEF_TYPOGRAPHY.md` and `CLAUDE_CODE_BRIEF_TYPOGRAPHY_V2.md`

---

## Objective

Four targeted changes to complete the Seokane Inc. brand identity on the website:

1. **Typography** — Add Playfair Display serif for H1 and H2 (both weight 700)
2. **Brand colour** — Replace all amber/yellow with Jaffa orange `#E78034` and derived shades
3. **Logo** — Replace `SeokaneSymbol` SVG component in nav and footer with the real PNG asset (`/public/seokane-symbol.png`)
4. **Favicon** — Replace the current `icon.svg` with the real PNG asset

**Do not change:** layout, components, copy, spacing, or anything not listed above.

---

## Asset Confirmed in Project

The real logo file is already in the project at:
```
/public/seokane-symbol.png
```

This is the official Seokane brand mark: three-element composition (teardrop top-right, diagonal blade centre, square corner bottom-left) in Jaffa orange `#E78034` on a black/transparent background.

The background of the PNG is black — this is fine for the dark navy header but will need handling in the footer (light background). See Change 3 below for the exact implementation.

---

## Files to Change

```
1. src/app/layout.tsx                    ← add Playfair Display font import + favicon meta
2. src/app/globals.css                   ← typography + colour token updates
3. src/components/site/SiteChrome.tsx    ← replace SVG logo with next/image in nav + footer
4. src/app/icon.svg                      ← DELETE this file (replaced by PNG favicon)
```

`SeokaneSymbol.tsx` — do NOT delete it yet, but it will no longer be imported in `SiteChrome.tsx`. Leave the file in place for now.

---

## Change 1: `src/app/layout.tsx`

### 1a. Add Playfair Display

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

### 1b. Update body className

**Current:**
```typescript
<body className={`${bodyFont.variable} antialiased`}>
```

**Replace with:**
```typescript
<body className={`${displayFont.variable} ${bodyFont.variable} antialiased`}>
```

### 1c. Update favicon metadata

**Current metadata export:**
```typescript
export const metadata: Metadata = {
  title: "Seokane Incorporated | Boutique South African Law Firm",
  description: "...",
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

In the `:root` block, after `--font-body: var(--font-body);` add:
```css
--font-display: var(--font-display);
```

### 2b. Update `@theme inline`

Find:
```css
--font-sans:    var(--font-body);
--font-serif:   var(--font-body);
```

Replace with:
```css
--font-sans:    var(--font-body);
--font-serif:   var(--font-display);
--font-display: var(--font-display);
```

### 2c. Update heading styles in `@layer base`

Replace ALL heading rules with:

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

### 2d. Replace all amber colour tokens

In `:root`, find:
```css
--color-amber:        #d2a647;  /* Amber Yellow     — CTA / highlight */
--color-amber-light:  #deba6f;  /* Amber light variant */
--color-amber-dark:   #b88c35;  /* Amber dark variant */
```

Replace with:
```css
--color-amber:        #E78034;  /* Jaffa Orange      — CTA / highlight */
--color-amber-light:  #EFA06A;  /* Jaffa light */
--color-amber-dark:   #C45E1A;  /* Jaffa dark */
```

### 2e. Warm surface backgrounds

In `:root`:
- `--color-surface: #f7f8fa;` → `--color-surface: #f5f1e8;`
- `--color-surface-light: #fafbfd;` → `--color-surface-light: #faf7f2;`

### 2f. Grep audit after changes

Run this after completing globals.css:
```bash
grep -rn "#d2a647\|#deba6f\|#b88c35" src/
```
Any results must be updated to use `var(--color-amber)` or the new hex values.

---

## Change 3: `src/components/site/SiteChrome.tsx`

This is the most important change in this brief. Replace the `SeokaneSymbol` SVG component with `next/image` using the real PNG.

### 3a. Update imports

**Current top of file:**
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

`SeokaneSymbol` import is removed. `Image` from `next/image` is added.

### 3b. Update the header logo

**Current header logo block:**
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
  <div className="flex-shrink-0 w-10 h-10 rounded-lg overflow-hidden bg-[var(--color-navy-dark)]">
    <Image
      src="/seokane-symbol.png"
      alt="Seokane Inc."
      width={40}
      height={40}
      className="w-full h-full object-cover"
      priority
    />
  </div>
  <div>
    <p className="text-xl font-bold text-white tracking-tight">Seokane Inc.</p>
    <p className="text-xs uppercase tracking-[0.12em] text-white/50">Attorneys</p>
  </div>
</Link>
```

Note: The PNG has a black background — on the dark navy header this blends naturally. The `bg-[var(--color-navy-dark)]` wrapper ensures the container matches if there's any edge antialiasing.

### 3c. Update the footer logo

**Current footer logo block:**
```tsx
<div className="flex items-center gap-3 mb-4">
  <SeokaneSymbol size={32} color="var(--color-navy-dark)" />
  <p className="text-xl font-bold tracking-tight text-[var(--color-navy-dark)]">Seokane Inc.</p>
</div>
```

**Replace with:**
```tsx
<div className="flex items-center gap-3 mb-4">
  <div className="flex-shrink-0 w-9 h-9 rounded-md overflow-hidden bg-[var(--color-navy-dark)]">
    <Image
      src="/seokane-symbol.png"
      alt="Seokane Inc."
      width={36}
      height={36}
      className="w-full h-full object-cover"
    />
  </div>
  <p className="text-xl font-bold tracking-tight text-[var(--color-navy-dark)]">Seokane Inc.</p>
</div>
```

Note on footer: The PNG has a black background and the footer is white — the dark rounded container `bg-[var(--color-navy-dark)]` creates a deliberate dark badge effect that looks intentional and mirrors the nav treatment. This is consistent with how Lexor and similar law firm sites handle logos on light backgrounds. Do NOT try to make the PNG background transparent — it isn't, and attempting CSS tricks will look worse than the badge treatment.

### 3d. Update `next.config.ts` if needed

Check `next.config.ts`. If it's empty (just `{}` in the config), no change needed — local `/public` images work without configuration.

If there's an `images` config block that restricts domains, no change needed for local assets.

---

## Change 4: Delete `src/app/icon.svg`

The current `icon.svg` is a manually drawn SVG recreation of the symbol. Now that we have the real PNG, it should be deleted. The `metadata.icons` in `layout.tsx` (set in Change 1c) will point Next.js to `/seokane-symbol.png` instead.

```bash
rm src/app/icon.svg
```

Or delete via file explorer. Either works.

---

## Verification Checklist

```bash
npx tsc --noEmit
npm run dev
```

| Element | Expected result |
|---|---|
| Browser tab favicon | Seokane symbol PNG (orange on dark) |
| Nav logo | PNG image in dark rounded container, sits left of "Seokane Inc." text |
| Footer logo | PNG image in dark rounded container, sits left of "Seokane Inc." text |
| H1 homepage hero | Playfair Display, weight 700, noticeably serif |
| H2 "Legal Depth. Commercial Judgment." | Playfair Display, weight 700 |
| H2 "Why Growing Businesses Choose Seokane" | Playfair Display, weight 700 |
| H3 card headings | Manrope weight 600 |
| `btn-primary` background | Jaffa orange `#E78034` |
| `btn-primary` hover | Darker Jaffa `#C45E1A` |
| CTA buttons throughout | Jaffa orange |
| Focus rings | Jaffa orange |
| Surface sections (`bg-surface`) | Warm off-white `#f5f1e8` |
| Nav links | Manrope — unchanged |
| Body text | Manrope — unchanged |
| Eyebrow labels | Manrope uppercase — unchanged |
| Stat numbers | Manrope bold — unchanged |
| No console errors | Clean dev server output |

---

## Definition of Done

- [ ] `Playfair_Display` imported and applied in `layout.tsx`
- [ ] `metadata.icons` points to `/seokane-symbol.png`
- [ ] `--font-display` defined in `:root` and `@theme inline`
- [ ] H1 and H2 use Playfair Display weight 700
- [ ] H3/H4 use Manrope weight 600
- [ ] `--color-amber` = `#E78034`, `--color-amber-light` = `#EFA06A`, `--color-amber-dark` = `#C45E1A`
- [ ] Surface colours updated to warm off-white
- [ ] Header logo uses `next/image` with `/seokane-symbol.png`
- [ ] Footer logo uses `next/image` with `/seokane-symbol.png`
- [ ] `SeokaneSymbol` import removed from `SiteChrome.tsx`
- [ ] `icon.svg` deleted
- [ ] Grep confirms no hardcoded old amber/yellow values remain
- [ ] `npx tsc --noEmit` passes with no errors
- [ ] Dev server runs without console errors

---

## Out of Scope

- Any page copy or content
- Layout or component structural changes
- `SeokaneSymbol.tsx` file itself (leave in place, just unused)
- Contact form wiring
- Mobile navigation
- WhatsApp button
- Any colours other than amber tokens and surface tokens listed above
