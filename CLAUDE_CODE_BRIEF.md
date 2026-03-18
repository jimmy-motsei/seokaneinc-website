# Claude Code Brief: Set Website Copy — Seokane Inc.
> Project: `seokane-platform`
> Prepared by: Maru Online
> Read before starting: `.agents/client-context.md`
> Copy source: `new_website_copy.md` (same directory as this file)

---

## Objective

Replace all placeholder copy in the Seokane Inc. Next.js codebase with the final approved copy from `new_website_copy.md`. The client needs to see the site with real copy in place — images will follow separately. Do not change any design, layout, styling, or component structure. Copy only.

---

## Rules Before You Start

1. **Read `.agents/client-context.md` first** — it is the source of truth for this project.
2. **Read `new_website_copy.md` in full** before touching any file.
3. **Do not change layout, components, or styling.** Only text content changes.
4. **Do not remove or rename any components.** `<PlaceholderImage />` stays in place.
5. **All content lives in two places** — update both:
   - `src/content/site-content.ts` for structured data (practice areas, team bios, SME services, office details)
   - Individual `page.tsx` files for hero headings, body copy, section text
6. **One file at a time.** Complete each file fully before moving to the next.
7. **TypeScript must compile cleanly** — run `npx tsc --noEmit` after completing all changes.
8. **After each file:** confirm the change with a one-line summary before moving on.

---

## Execution Order

Work through files in this exact order to avoid cross-file dependency issues:

```
1. src/content/site-content.ts          ← structured content (practice areas, team, SME, office)
2. src/app/page.tsx                     ← homepage
3. src/app/about/page.tsx               ← about page
4. src/app/practice-areas/page.tsx      ← practice areas index
5. src/app/practice-areas/[slug]/page.tsx ← dynamic practice area detail
6. src/app/sme-services/page.tsx        ← for SMEs page
7. src/app/team/page.tsx                ← team page
8. src/app/contact/page.tsx             ← contact page
9. src/components/site/SiteChrome.tsx   ← footer about blurb only
10. CREATE: src/app/privacy/page.tsx    ← new POPIA page (does not exist yet)
```

---

## File-by-File Instructions

---

### 1. `src/content/site-content.ts`

This is the most important file. All structured content is managed here.

**practiceAreas array — update all 5 entries:**

```typescript
// commercial-litigation
{
  slug: "commercial-litigation",
  title: "Commercial Litigation",
  shortDescription: "Strategic dispute resolution for high-stakes commercial conflicts.",
  fullDescription: "When a commercial dispute arises — a breach of contract, an unpaid debt, a partnership breakdown — the decisions you make in the first days matter. We approach every matter with a strategy-first mindset, focused on your risk, your timeline, and the commercial outcome you need. We represent businesses in the High Court and Magistrates' Court, and advise throughout the dispute lifecycle — from early negotiation through to judgment and enforcement.",
  services: [
    "Breach of contract disputes",
    "Debt recovery and enforcement",
    "Urgent interdict applications",
    "High Court and Magistrates' Court litigation",
    "Settlement negotiation and mediation strategy",
  ],
},

// corporate-commercial
{
  slug: "corporate-commercial",
  title: "Corporate & Commercial Law",
  shortDescription: "Practical legal structuring for transactions, growth, and governance.",
  fullDescription: "Whether you're closing a transaction, restructuring your business, or negotiating a contract that needs to hold under pressure — sound corporate legal advice is what protects your interests and keeps your business moving forward. We work with management teams, directors, and shareholders to provide advice that is technically rigorous and commercially practical. We understand that legal decisions happen in the context of business deadlines and competing priorities.",
  services: [
    "Commercial contract drafting and review",
    "Due diligence support",
    "Shareholder and partnership agreements",
    "Corporate restructuring support",
    "Board and governance advisory",
  ],
},

// employment-labour
{
  slug: "employment-labour",
  title: "Employment & Labour Law",
  shortDescription: "Employer-focused labour law guidance for compliance and dispute readiness.",
  fullDescription: "South African employment law is detailed, constantly evolving, and unforgiving of procedural errors. Whether you're managing a disciplinary matter, navigating a retrenchment, or defending a CCMA dispute, the outcome often depends on whether the right processes were followed from the start. We help employers build solid employment frameworks and respond effectively when disputes arise.",
  services: [
    "Employment contract drafting",
    "Disciplinary and grievance process support",
    "CCMA dispute representation support",
    "Workplace policy frameworks",
    "Retrenchment and restructuring guidance",
  ],
},

// estates-trusts
{
  slug: "estates-trusts",
  title: "Estates & Trusts",
  shortDescription: "Clear, compassionate legal support for estate and trust administration.",
  fullDescription: "Dealing with a deceased estate or setting up a trust often happens during emotionally difficult times — and the legal and administrative requirements can feel overwhelming. We provide clear, step-by-step guidance to make the process as straightforward as possible. Our goal is to give you confidence that everything is being handled correctly, so you can focus on what matters.",
  services: [
    "Will drafting and review",
    "Trust formation and advisory",
    "Deceased estate administration",
    "Executor support",
    "Estate compliance documentation",
  ],
},

// business-compliance
{
  slug: "business-compliance",
  title: "Business Compliance",
  shortDescription: "Ongoing compliance support to keep your business properly constituted.",
  fullDescription: "Staying compliant with South Africa's Companies Act, CIPC requirements, and ongoing statutory obligations is not optional — and it's easy to fall behind when you're focused on running your business. We act as a reliable compliance partner, handling the filings, records, and documentation that keep your business properly constituted and audit-ready.",
  services: [
    "CIPC company registrations",
    "Director and shareholder changes",
    "Annual return and governance support",
    "Statutory document preparation",
    "Company secretarial advisory",
  ],
},
```

**teamMembers array — update all 3 entries:**

```typescript
{
  name: "City Seokane",
  title: "Director",
  bio: "City was admitted as an attorney of the High Court in 1999, and has been in active practice since 2001. Before establishing private practice, he held senior executive roles at major South African organisations — including Alexander Forbes Risk Services, the SABC, and VVM Global Services, where he served as Chief Executive Officer. That corporate background is what makes his legal counsel different. He leads all strategic client matters at Seokane Inc. and is the primary point of contact for corporate and high-value commercial work.",
},
{
  name: "Modiegi Mafalo",
  title: "Senior Associate",
  bio: "Modiegi was admitted as an attorney of the High Court in June 2018. She holds an LLB from the University of Limpopo and a Postgraduate Certificate in Corporate Law from UNISA. She leads the firm's corporate litigation practice, with particular expertise in mercantile law, banking law, and commercial dispute resolution.",
},
{
  name: "Tshadi Lefakane",
  title: "Candidate Attorney",
  bio: "Tshadi holds an LLB from UNISA and is registered as a candidate attorney with the Legal Practice Council. She provides grounded, diligent support across commercial contracts, employment law, civil litigation, and wills and estates — working directly with clients at every stage.",
},
```

**smeServices array — update all 3 entries:**

```typescript
{
  title: "Company Secretarial Services",
  items: [
    "Company registrations and amendments",
    "Director and shareholder updates",
    "Statutory register maintenance",
    "Compliance filing and annual returns",
  ],
},
{
  title: "Corporate Legal Services",
  items: [
    "Commercial contract drafting and negotiation",
    "Terms of service and supplier agreements",
    "Dispute prevention and resolution support",
    "Transaction and partnership legal support",
  ],
},
{
  title: "Employment & Labour Support",
  items: [
    "Employment contracts and HR policy drafting",
    "Disciplinary and incapacity process guidance",
    "Labour dispute and CCMA support",
    "Workplace compliance advisory",
  ],
},
```

**office object — no changes needed, already accurate.**

---

### 2. `src/app/page.tsx`

Update these text values in place — do not restructure the component:

| Location in file | Current text | New text |
|---|---|---|
| Badge/eyebrow span | `Boutique Corporate Law Firm · Est. 2001` | ✓ Keep as is |
| h1 | `Strategic Legal Counsel for Growing Businesses.` | ✓ Keep as is |
| Hero subheadline p | Current text | `When a legal problem threatens what you've built, you need an attorney who understands both the law and the business behind it. That's what we do.` |
| Attorney name card p | `City Seokane` | ✓ Keep |
| Attorney name card sub | `20+ Years Experience` | `20+ Years' Experience` (add apostrophe) |
| About section h2 | `Two Decades of Legal and Corporate Excellence` | `Legal Depth. Commercial Judgment.` |
| About section p | Current prose | `Seokane Incorporated is a boutique Johannesburg law firm serving growing businesses and corporate clients across South Africa. We've been at this since 2001 — long enough to have handled the disputes, contracts, and compliance challenges that keep business owners up at night. What sets us apart is not just our legal expertise. Our Director, City Seokane, held senior executive roles at Alexander Forbes, the SABC, and VVM Global Services before establishing private practice. That corporate background means our advice is shaped by real business context — not just legal technicalities.` |
| Why Choose h2 | `Why Choose Seokane` | `Why Growing Businesses Choose Seokane` |
| `whyChooseItems` array title 1 | `Deep Corporate Experience` | `We've Sat on Your Side of the Table` |
| `whyChooseItems` array body 1 | Current | `City Seokane held executive positions — including CEO — at major South African corporates before establishing private practice. We don't just understand the law. We understand the commercial pressure behind every legal decision you face.` |
| `whyChooseItems` array title 2 | `Client-Centric` | `Focused Where It Matters Most` |
| `whyChooseItems` array body 2 | Current | `We concentrate on the legal areas where businesses face their greatest challenges: commercial disputes, corporate transactions, employment matters, and regulatory compliance. Focus delivers better outcomes than breadth.` |
| `whyChooseItems` array title 3 | `Proven Track Record` | `Over Two Decades in Practice` |
| `whyChooseItems` array body 3 | Current | `Admitted to the bar in 1999 and in practice since 2001, our team has handled complex matters across High Court litigation, corporate transactions, and employment disputes. Experience you can rely on.` |
| `whyChooseItems` array title 4 | `Strategic Advice` | `Advice Built Around Your Objectives` |
| `whyChooseItems` array body 4 | Current | `We frame every legal recommendation around your business goals, timelines, and risk tolerance — not just the legal process. You leave every consultation knowing exactly where you stand and what to do next.` |
| Practice areas heading | `Protecting Your Interests with Precision and Care` | ✓ Keep as is |
| Testimonial blockquote | Current | `"Seokane truly stands out for their professionalism and dedication to their clients. I'm grateful to have found a firm that not only delivers results but genuinely cares about their clients' well-being."` |
| Testimonial attribution name | `Client Name` | `[Client Name]` — add HTML comment `{/* TODO: Replace with named client testimonial */}` |
| FAQ h2 | `Frequently Asked Questions` | ✓ Keep |
| All 5 FAQ answers | Current | See FAQ copy in `new_website_copy.md` — update each answer to match |
| CTA banner h2 | `Ready to Resolve Your Legal Challenge?` | ✓ Keep |
| CTA banner p (2xl) | `Seokane Inc. is Here to Help.` | ✓ Keep |
| CTA banner body p | Current | `From commercial disputes to compliance and employment matters, we deliver strategic legal counsel grounded in over two decades of practice and real executive experience.` |

**Stat cards — update sub-labels:**
- 95% card: sub-label → `Based on post-case client feedback`
- 20+ card: sub-label → `Founded on roots dating back to 2001`
- 5 card: sub-label → `Commercial · Corporate · Employment · Estates · Compliance`

---

### 3. `src/app/about/page.tsx`

Update metadata and all text content:

**Metadata:**
```typescript
title: "About Seokane Inc. | Boutique Legal Advisory in South Africa",
description: "Learn how Seokane Incorporated combines over two decades of legal practice with executive corporate experience to deliver strategy-driven legal counsel to SA businesses.",
```

**Section content updates:**

| Section | Heading | Body |
|---|---|---|
| Hero | `Legal Advice Built for Business Reality` | `We are a boutique South African law firm delivering strategic legal counsel and commercial solutions to growing businesses and corporate clients. We've been doing this since 2001 — with the experience and judgment to show for it.` |
| Our Story | `Built on Experience Since 2001` | `The practice that became Seokane Incorporated began in June 2001 as Seokane Lesomo Attorneys. Over more than two decades, it has evolved into a focused team serving clients through changing regulatory and commercial landscapes. Seokane Incorporated was formally established in January 2016. Today, we serve growing businesses and corporate clients across Gauteng and beyond — with the same commitment to technical excellence and straight-talking advice that has kept clients coming back since the beginning.` |
| Our Approach | `Professional but Approachable` | `We lead with clarity. You won't need a legal dictionary to understand our advice. Every recommendation comes with a plain-language explanation of what it means for your business.` |
| CTA section h2 | `Explore Our Practice Areas` | ✓ Keep |
| CTA body | Current | `See where our team delivers the strongest legal and commercial impact.` |

**Add a new section** between "Our Story" and the existing card grid — insert this block:

```tsx
<section className="section-padding-sm bg-white">
  <div className="container-site max-w-3xl">
    <p className="eyebrow mb-3">Leadership</p>
    <h2 className="text-3xl mb-6">City Seokane — Director</h2>
    <div className="space-y-4 text-ink-muted leading-relaxed">
      <p>
        City was admitted as an attorney of the High Court in 1999. Before establishing
        private practice, he held senior executive roles in major South African
        organisations — including positions at Alexander Forbes Risk Services, the SABC,
        and VVM Global Services, where he served as Chief Executive Officer.
      </p>
      <p>
        That career path shapes how we work. When you sit across from City in a
        consultation, you're talking to someone who has managed legal risk from the
        boardroom, negotiated under commercial pressure, and made decisions where the
        outcome affected an entire organisation.
      </p>
      <p>
        It means our legal advice comes with business judgment built in.
      </p>
    </div>
  </div>
</section>
```

Insert this section **after** the `bg-surface-light` hero section and **before** the existing two-card grid section.

---

### 4. `src/app/practice-areas/page.tsx`

**Metadata:**
```typescript
title: "Practice Areas | Seokane Incorporated",
description: "Commercial litigation, corporate and commercial law, employment and labour, estates and trusts, and business compliance. Boutique legal expertise for SA businesses.",
```

**Hero updates:**
- Heading: `Our Areas of Expertise` ✓ keep
- Body: `We concentrate on the legal areas where growing businesses face their greatest challenges. Not broad. Focused. Because depth of expertise delivers better outcomes.`

**Add CTA section at bottom** (after the cards grid, before closing `</SitePage>`):
```tsx
<section className="section-padding-sm bg-navy text-white">
  <div className="container-site text-center">
    <h2 className="text-3xl text-white">Not Sure Where to Start?</h2>
    <p className="mx-auto mt-4 max-w-xl text-surface">
      Tell us what you&rsquo;re dealing with and we&rsquo;ll point you in the right direction.
    </p>
    <Link href="/contact" className="btn-ghost mt-8">
      Contact Our Team
    </Link>
  </div>
</section>
```

---

### 5. `src/app/practice-areas/[slug]/page.tsx`

**Hero body:** Replace current `{area.fullDescription}` reference — it's already pulling from `site-content.ts` which you updated in step 1. ✓ No change needed to the template itself.

**Update the "Discuss Your Matter" sidebar card:**
- Heading: `Need Strategic Direction?` ✓ keep
- Body: `We can assess your risk, clarify your options, and recommend a practical legal route.`
- CTA label: `Schedule a Consultation` (change from current `Schedule Consultation`)

---

### 6. `src/app/sme-services/page.tsx`

**Metadata:**
```typescript
title: "Legal Services for South African SMEs | Seokane Inc.",
description: "Practical, affordable legal support for growing South African businesses — company secretarial, commercial contracts, employment law, and business compliance.",
```

**Hero:**
- Heading: `Your Legal Partner for Sustainable Growth` ✓ keep
- Body: `Running a small or medium business in South Africa means wearing a lot of hats. Legal shouldn't be one you have to guess at. We provide practical, reliable legal support that keeps your business protected and properly structured as it grows.`

**Add intro section** between hero and the cards grid:
```tsx
<section className="section-padding-sm bg-white">
  <div className="container-site max-w-3xl">
    <h2 className="text-3xl mb-6">Legal Infrastructure for Growing Businesses</h2>
    <div className="space-y-4 text-ink-muted leading-relaxed">
      <p>
        Most SME owners don&rsquo;t need a large law firm on retainer. They need a
        trusted legal partner who knows their business, responds promptly, and gives
        straight answers at a fair cost.
      </p>
      <p>
        That&rsquo;s what Seokane Inc. is for your business. We work with SMEs across
        Gauteng on the legal matters that come up as you grow — contracts, employment
        issues, company structure, and compliance requirements.
      </p>
    </div>
  </div>
</section>
```

**CTA section:**
- Body: `Speak to us about practical legal support that keeps your SME compliant and commercially protected.`

---

### 7. `src/app/team/page.tsx`

**Metadata:**
```typescript
title: "Our Team | Seokane Incorporated",
description: "Meet the legal professionals at Seokane Incorporated — experienced attorneys serving commercial and corporate clients across South Africa.",
```

**Hero:**
- Heading: `Experienced Legal Professionals` ✓ keep
- Body: `We're a focused team. You'll work with people who know your matter and give it the attention it deserves.`

**Team bios** are now pulled from `site-content.ts` via the `teamMembers` array — already updated in step 1. ✓ No template changes needed.

**CTA section:**
- Heading: `Work With Our Team`
- Body: `Tell us about your legal challenge. We'll recommend the right next step.`
- CTA: `Contact Us` ✓ keep

---

### 8. `src/app/contact/page.tsx`

**Metadata:**
```typescript
title: "Contact Seokane Inc. | Schedule a Consultation",
description: "Contact Seokane Incorporated to discuss your commercial, corporate, employment, or compliance matter. We respond within one business day.",
```

**Hero:**
- Heading: `Let's Talk About Your Legal Challenge`
- Body: `Use the form below or reach us directly. We aim to respond within one business day.`

**Contact details card:**
- Heading: `Our Office` ✓ keep
- Add mobile/WhatsApp line after phone: `{office.mobile} (Mobile / WhatsApp)`
  - Add `mobile` field to `office` object in `site-content.ts` if not already present: `mobile: "+27 (0)83 778 9288"`
- Privacy notice text: `Privacy notice: Information submitted through this form is used only to respond to your inquiry. We do not share your details with third parties. See our Privacy Policy for full details.`
- Update the `href` on "Privacy Policy" to point to `/privacy` instead of `/contact`

**Contact form — add a subject dropdown before the message textarea:**
```tsx
<div>
  <label htmlFor="subject" className="mb-2 block text-sm font-semibold text-navy-dark">
    Matter Type
  </label>
  <select
    id="subject"
    name="subject"
    required
    className="w-full border border-surface-dark px-4 py-3 focus:border-amber focus:outline-none bg-white"
  >
    <option value="">Select a practice area</option>
    <option value="commercial-litigation">Commercial Litigation</option>
    <option value="corporate-commercial">Corporate &amp; Commercial</option>
    <option value="employment-labour">Employment &amp; Labour</option>
    <option value="estates-trusts">Estates &amp; Trusts</option>
    <option value="business-compliance">Business Compliance</option>
    <option value="sme-services">SME Services</option>
    <option value="other">Other</option>
  </select>
</div>
```

Replace the existing plain text `Subject` input with this select. Keep all other fields.

**Below form — add response time note:**
```tsx
<p className="text-sm text-ink-muted">
  We aim to respond within one business day. If your matter is urgent, please call
  us directly on <a href="tel:+27110522817" className="text-navy hover:text-amber transition-colors">+27 (0)11 052 2817</a>.
</p>
```

Add this immediately below the submit button.

---

### 9. `src/components/site/SiteChrome.tsx`

**Footer column 1 — update the firm description paragraph:**
```tsx
<p className="text-sm leading-relaxed text-[var(--color-ink-muted)]">
  Seokane Incorporated is a boutique South African law firm delivering strategic legal
  counsel and commercial solutions for growing businesses and corporate clients. In
  practice since 2001.
</p>
```

**Footer bottom bar — update Privacy Policy link href:**
Change `href="/contact"` on the Privacy Policy link to `href="/privacy"`.

---

### 10. CREATE `src/app/privacy/page.tsx`

Create this file from scratch:

```tsx
import type { Metadata } from "next";
import Link from "next/link";
import { SitePage } from "@/components/site/SiteChrome";

export const metadata: Metadata = {
  title: "Privacy Policy | Seokane Incorporated",
  description:
    "How Seokane Incorporated collects, uses, and protects personal information in compliance with POPIA.",
};

export default function PrivacyPage() {
  return (
    <SitePage>
      <section className="section-padding bg-surface-light">
        <div className="container-site max-w-3xl">
          <p className="eyebrow mb-4">Legal</p>
          <h1 className="text-5xl">Privacy Policy</h1>
          <p className="mt-4 text-sm text-ink-muted">
            Last updated: {new Date().getFullYear()}
          </p>
        </div>
      </section>

      <section className="section-padding-sm bg-white">
        <div className="container-site max-w-3xl space-y-8 text-ink-muted leading-relaxed">

          <div>
            <h2 className="text-2xl text-navy-dark mb-3">Introduction</h2>
            <p>
              Seokane Incorporated respects your privacy. This policy explains how we
              collect, use, and protect personal information submitted through this
              website, in compliance with the Protection of Personal Information Act
              (POPIA), Act 4 of 2013.
            </p>
          </div>

          <div>
            <h2 className="text-2xl text-navy-dark mb-3">What We Collect</h2>
            <p>
              We collect name, email address, phone number, and matter details submitted
              through our contact form. We do not collect any information without your
              knowledge or consent.
            </p>
          </div>

          <div>
            <h2 className="text-2xl text-navy-dark mb-3">How We Use It</h2>
            <p>
              Information you submit is used only to assess and respond to your legal
              inquiry. We do not sell, share, or use your information for marketing
              purposes without your explicit consent.
            </p>
          </div>

          <div>
            <h2 className="text-2xl text-navy-dark mb-3">How We Protect It</h2>
            <p>
              All information is handled securely and accessed only by authorised
              members of our practice. We do not store form submissions in third-party
              databases.
            </p>
          </div>

          <div>
            <h2 className="text-2xl text-navy-dark mb-3">Your Rights Under POPIA</h2>
            <p>
              You have the right to access, correct, or request deletion of your
              personal information at any time. To exercise these rights, contact us at{" "}
              <a
                href="mailto:city@seokaneinc.co.za"
                className="text-navy hover:text-amber transition-colors"
              >
                city@seokaneinc.co.za
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-2xl text-navy-dark mb-3">Contact</h2>
            <p>
              Seokane Incorporated<br />
              1 Maxwell Drive, Sunninghill, Johannesburg, 2191<br />
              <a
                href="mailto:city@seokaneinc.co.za"
                className="text-navy hover:text-amber transition-colors"
              >
                city@seokaneinc.co.za
              </a>
            </p>
          </div>

          <div className="pt-4 border-t border-surface-dark">
            <Link href="/contact" className="btn-primary">
              Return to Contact
            </Link>
          </div>

        </div>
      </section>
    </SitePage>
  );
}
```

---

## Verification Steps

After completing all 10 files:

```bash
# 1. TypeScript check
npx tsc --noEmit

# 2. Run dev server and check each page visually
npm run dev

# Pages to verify:
# / → homepage
# /about → about
# /practice-areas → index
# /practice-areas/commercial-litigation → detail (check copy pulled from site-content.ts)
# /practice-areas/corporate-commercial → detail
# /practice-areas/employment-labour → detail
# /practice-areas/estates-trusts → detail
# /practice-areas/business-compliance → detail
# /sme-services → SME page
# /team → team page
# /contact → contact page (check dropdown, response note)
# /privacy → new POPIA page
```

---

## What Is NOT In Scope for This Session

Do not build or change any of the following — these are separate sessions:

- Mobile navigation drawer
- WhatsApp floating button
- Contact form Resend integration (`src/app/actions.ts`)
- Open Graph / SEO meta images
- `sitemap.xml` / `robots.txt`
- GA4 analytics
- Any image replacement (all `<PlaceholderImage />` stays)
- shadcn/ui decision

---

## Definition of Done

This session is complete when:

- [ ] All 10 files updated or created
- [ ] `npx tsc --noEmit` passes with no errors
- [ ] Dev server runs without console errors
- [ ] Every page displays correct copy from `new_website_copy.md`
- [ ] `/privacy` page renders correctly
- [ ] Footer Privacy Policy link routes to `/privacy` not `/contact`
- [ ] Contact form has subject dropdown and response time note
