# Claude Code Brief: Design System Alignment — Lexor Reference Match
> Project: `seokane-platform`
> Session type: Design system update — typography + colour only
> Read first: `.agents/client-context.md`
> Reference: `lexor-reference.jpeg` (in project root if available, otherwise described below)

---

## Objective

Align the Seokane Inc. website visual design to 90%+ match with the Lexor reference design. The structure and layout are already correct. This session targets three specific changes only:

1. Add a serif display font (Playfair Display) for H1 and H2 headings
2. Reduce H3/H4 font weight to feel lighter and more refined
3. Warm up the surface background colour to match Lexor's off-white

**Do not change:** layout, components, copy, images, spacing, or anything not listed above.

---

## What Lexor Looks Like (Reference Description)

The Lexor template uses:
- **Serif font** (authoritative, classic) for all major headings H1 and H2 — weight 700 for H1, weight 400–500 for H2
- **Sans-serif** (clean, readable) for body text, nav, buttons, captions — same as current Manrope
- **H2 headings are noticeably lighter weight** than H1 — the serif does the authority work, not the weight
- **Surface/background sections** use a warm off-white (`#f5f1e8` range) not a cool grey
- **H3s** inside cards use sans-serif medium weight (600), not heavy (800)

---

## Files to Change

Only these three files. Nothing else.

```
1. src/app/layout.tsx          ← add Playfair Display font import
2. src/app/globals.css         ← update font variables, heading styles, surface colour
3. src/content/ (none)         ← do not touch
4. Any page.tsx (none)         ← do not touch
```

---

## Change 1: `src/app/layout.tsx`

Add `Playfair_Display` import alongside the existing `Manrope` import.

**Current:**
```typescript
import { Manrope } from "next/font/google";

const bodyFont = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export default function RootLayout({ children }: ...) {
  return (
    <html lang="en">
      <body className={`${bodyFont.variable} antialiased`}>
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

export default function RootLayout({ children }: ...) {
  return (
    <html lang="en">
      <body className={`${displayFont.variable} ${bodyFont.variable} antialiased`}>
```

---

## Change 2: `src/app/globals.css`

### 2a. Add `--font-display` to `:root`

Find the `:root` block. It currently has:
```css
--font-body: var(--font-body);
```

Add immediately after it:
```css
--font-display: var(--font-display);
```

### 2b. Add `--font-display` to `@theme inline`

Find the `@theme inline` block. It currently has:
```css
--font-sans: var(--font-body);
--font-serif: var(--font-body);
```

Replace those two lines with:
```css
--font-sans:    var(--font-body);
--font-serif:   var(--font-display);
--font-display: var(--font-display);
```

### 2c. Update heading styles in `@layer base`

Find the heading rules in `@layer base`. Currently:

```css
h1 {
  font-family: var(--font-body);
  font-weight: 800;
  line-height: 0.95;
  letter-spacing: -0.03em;
  color: var(--color-navy-dark);
}

h2,
h3 {
  font-family: var(--font-body);
  font-weight: 800;
  line-height: 1.0;
  letter-spacing: -0.03em;
  color: var(--color-navy-dark);
}

h4,
h5,
h6 {
  font-family: var(--font-body);
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: 0;
  color: var(--color-navy-dark);
}
```

**Replace entirely with:**
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
  font-weight: 400;
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

### 2d. Warm up the surface colour

Find in `:root`:
```css
--color-surface:      #f7f8fa;  /* Near-white background */
```

Replace with:
```css
--color-surface:      #f5f1e8;  /* Warm off-white — matches Lexor reference */
```

Find:
```css
--color-surface-light:#fafbfd;
```

Replace with:
```css
--color-surface-light:#faf7f2;  /* Warm variant */
```

### 2e. Fix hero H1 line-height

The homepage hero H1 is very large and currently set to `line-height: 0.95` which causes overlap on the serif. Update the base `h1` rule above — already done in 2c with `1.05`. No additional change needed.

### 2f. Update stat card H1/number treatment

The large stat numbers (95%, 20+, 5) use `font-sans` in the Tailwind classes in `page.tsx`. These should stay as Manrope (sans) — they are numbers, not headings. **Do not change anything in page.tsx** — the `font-sans` Tailwind utility will correctly resolve to Manrope since `--font-sans` still maps to `--font-body`.

---

## Change 3: Verify button and nav remain unchanged

After making the above changes, the following should still use Manrope (sans-serif) — verify visually:

- Navigation links → `font-family: var(--font-body)` ✓ (they inherit from body, not from h tags)
- `.btn-primary`, `.btn-secondary`, `.btn-ghost`, `.btn-light` → all have `font-family: var(--font-body)` explicitly set ✓
- `.eyebrow` → has `font-family: var(--font-body)` explicitly set ✓

None of these need changes. If any accidentally pick up the serif, add `font-family: var(--font-body)` explicitly to that class in `globals.css`.

---

## Verification Steps

```bash
# 1. TypeScript check
npx tsc --noEmit

# 2. Start dev server
npm run dev
```

Then visually verify each of these:

| Check | Expected result |
|---|---|
| Homepage H1 "Strategic Legal Counsel..." | Playfair Display, weight 700, slightly warm letter-spacing |
| Section H2 "Legal Depth. Commercial Judgment." | Playfair Display, weight 400 — noticeably lighter than H1 |
| "Why Growing Businesses Choose Seokane" H2 | Playfair Display, weight 400 |
| Card H3s "We've Sat on Your Side of the Table" | Manrope, weight 600 — clean sans, not heavy |
| Nav links | Manrope — unchanged |
| Buttons | Manrope — unchanged |
| Eyebrow labels ("ABOUT US", "WHY CHOOSE US") | Manrope — unchanged |
| Surface background sections | Warm off-white, not cool grey |
| `bg-[var(--color-surface)]` sections | Visibly warmer than before |
| Stat numbers "95%", "20+" | Manrope bold — unchanged |

---

## Expected Visual Outcome

After these changes, the site should read as:

- **Headings:** Classic, authoritative serif — close to Lexor's editorial feel
- **Body/UI:** Clean modern sans — unchanged
- **Backgrounds:** Warm off-white sections instead of cool grey
- **Overall:** ~90% visual match to Lexor reference, with Seokane's own navy/amber identity intact

---

## Definition of Done

- [ ] `Playfair_Display` imported and applied in `layout.tsx`
- [ ] `--font-display` variable defined in `:root` and `@theme inline`
- [ ] H1 uses Playfair Display weight 700
- [ ] H2 uses Playfair Display weight 400
- [ ] H3/H4 uses Manrope weight 600
- [ ] Surface colours updated to warm off-white
- [ ] `npx tsc --noEmit` passes
- [ ] Dev server runs without errors
- [ ] Nav, buttons, and eyebrows still render in Manrope
- [ ] No layout shifts or overflow caused by font change

---

## Out of Scope

Do not touch in this session:

- Any page copy or content
- Layout or component structure
- Images or placeholder components
- Contact form
- Mobile navigation
- WhatsApp button
- Any colour other than `--color-surface` and `--color-surface-light`
