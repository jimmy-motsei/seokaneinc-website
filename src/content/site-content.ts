export type PracticeArea = {
  slug: string;
  title: string;
  image: string;
  shortDescription: string;
  fullDescription: string;
  services: string[];
};

export const practiceAreas: PracticeArea[] = [
  {
    slug: "corporate-law",
    title: "Corporate Law",
    image: "/images/hero-practice-corporate-commercial.jpg",
    shortDescription:
      "Sound legal counsel for corporate governance, transactions, and business structuring.",
    fullDescription:
      "Sound corporate law advice is the foundation of a well-governed business. Whether you are structuring a transaction, managing shareholder relationships, or ensuring your directors understand their legal duties — the quality of your legal counsel at this level shapes your business for years. We advise management teams, directors, and shareholders on the full range of corporate legal matters, combining technical legal rigour with the commercial insight that comes from real executive experience.",
    services: [
      "Shareholder and partnership agreements",
      "Mergers, acquisitions, and due diligence support",
      "Corporate restructuring and reorganisation",
      "Director duties and board governance advisory",
      "Corporate compliance and statutory obligations",
    ],
  },
  {
    slug: "commercial-law",
    title: "Commercial Law",
    image: "/images/attorneys-consultation.jpg",
    shortDescription:
      "Practical legal support for commercial contracts, negotiations, and business dealings.",
    fullDescription:
      "Every commercial relationship you enter — with clients, suppliers, partners, or investors — is governed by contracts and agreements. When those documents are well-drafted and clearly understood, they protect your business. When they are not, they become a source of costly disputes and uncertainty. We help businesses structure and document their commercial dealings in a way that is legally robust, commercially practical, and enforceable when it matters.",
    services: [
      "Commercial contract drafting and review",
      "Terms of service and supplier agreements",
      "Negotiation support and commercial risk advisory",
      "Joint venture and partnership structuring",
      "Contract dispute prevention and pre-litigation advisory",
    ],
  },
  {
    slug: "company-secretarial",
    title: "Company Secretarial",
    image: "/images/hero-practice-business-compliance.png",
    shortDescription:
      "Ongoing compliance support to keep your business properly constituted and audit-ready.",
    fullDescription:
      "Staying compliant with South Africa's Companies Act, CIPC requirements, and ongoing statutory obligations is not optional — and it's easy to fall behind when you're focused on running your business. We act as a reliable company secretarial partner, handling the filings, records, and documentation that keep your business properly constituted and audit-ready. From company registrations to director changes and annual returns, we manage the administrative and compliance backbone of your corporate structure.",
    services: [
      "CIPC company registrations and amendments",
      "Director and shareholder changes",
      "Statutory register maintenance",
      "Annual return filing and governance support",
      "Company secretarial advisory",
    ],
  },
  {
    slug: "intellectual-property",
    title: "Intellectual Property",
    image: "/images/hero-attorney.jpg",
    shortDescription:
      "Protecting your business's intellectual assets, brands, and proprietary rights.",
    fullDescription:
      "Your intellectual property — your brand, your original works, your confidential information and trade secrets — is often among your most valuable business assets. Protecting it requires both proactive legal structuring and swift action when infringement occurs. We advise businesses on identifying, protecting, and enforcing their intellectual property rights under South African law, and help put in place the agreements and registrations that safeguard what you have built.",
    services: [
      "Trade mark registration and protection",
      "Copyright advisory",
      "Confidentiality and non-disclosure agreements",
      "IP licensing and assignment agreements",
      "IP infringement advisory",
    ],
  },
  {
    slug: "commercial-litigation",
    title: "Commercial Litigation",
    image: "/images/hero-practice-commercial-litigation.jpg",
    shortDescription:
      "Strategic dispute resolution for high-stakes commercial conflicts.",
    fullDescription:
      "When a commercial dispute arises — a breach of contract, an unpaid debt, a partnership breakdown — the decisions you make in the first days matter. We approach every matter with a strategy-first mindset, focused on your risk, your timeline, and the commercial outcome you need. We represent businesses in the High Court and Magistrates' Court, and advise throughout the dispute lifecycle — from early negotiation through to judgment and enforcement.",
    services: [
      "Breach of contract disputes",
      "Debt recovery and enforcement",
      "Urgent interdict applications",
      "High Court and Magistrates' Court litigation",
      "Settlement negotiation and mediation strategy",
    ],
  },
  {
    slug: "administration-of-estates",
    title: "Administration of Estates",
    image: "/images/hero-practice-estates-trusts.jpg",
    shortDescription:
      "Expert guidance through the deceased estate administration process.",
    fullDescription:
      "Administering a deceased estate involves a formal, regulated process that can feel overwhelming — particularly during an emotionally difficult time. The requirements under the Administration of Estates Act are detailed, and errors or delays at any stage can create complications for beneficiaries and heirs. We provide step-by-step guidance to executors and families, ensuring that the estate is reported, administered, and distributed correctly and efficiently.",
    services: [
      "Reporting deceased estates to the Master of the High Court",
      "Executor appointment and letters of executorship support",
      "Liquidation and distribution account preparation",
      "Estate creditor management",
      "Estate compliance documentation",
    ],
  },
  {
    slug: "wills-and-trusts",
    title: "Wills and Trusts",
    image: "/images/hero-practice-estates-trusts.jpg",
    shortDescription:
      "Careful planning and drafting to protect your legacy and provide for your loved ones.",
    fullDescription:
      "A valid, well-drafted will is one of the most important legal documents you will ever sign. Without one, your estate is distributed according to the Intestate Succession Act — which may not reflect your wishes or provide for your family as you intend. Trusts, used correctly, provide powerful tools for asset protection, estate planning, and providing for dependants. We advise on both instruments with care and clarity, tailored to your personal and financial circumstances.",
    services: [
      "Will drafting and review",
      "Inter vivos and testamentary trust formation",
      "Trust deed drafting and advisory",
      "Estate planning advisory",
      "Trust administration support",
    ],
  },
];

export const proofPoints = [
  {
    title: "Deep Corporate Experience",
    description:
      "Our Director City Seokane, held senior positions in both the legal profession and the corporate environment, demonstrating leadership and strategic management across multiple industries. That background means we understand your business context, not just the legal technicalities.",
  },
  {
    title: "Focused High-Impact Expertise",
    description:
      "We concentrate on areas where businesses face their greatest challenges: commercial litigation, corporate transactions, regulatory compliance, and employment matters. Focused expertise delivers better outcomes.",
  },
  {
    title: "Proven Track Record Since 2001",
    description:
      "While Seokane Incorporated was established in 2016, our practice traces its roots to Seokane Lesomo Attorneys, founded in June 2001 — representing over two decades of continuous legal service delivery.",
  },
];

export const smeServices = [
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
];

export const teamMembers = [
  {
    name: "City Seokane",
    title: "Director",
    image: "/images/director-headshot.jpg",
    bio: "City was admitted as an attorney of the High Court in 1999, and has been in active practice since 2001. Before establishing private practice, he held senior executive roles at major South African organisations — including Alexander Forbes Risk Services, the SABC, and VVM Global Services, where he served as Chief Executive Officer. That corporate background is what makes his legal counsel different. He leads all strategic client matters at Seokane Inc. and is the primary point of contact for corporate and high-value commercial work.",
  },
  {
    name: "Lerato Anita Ferland",
    title: "Senior Associate",
    image: "/images/lerato-ferland-headshot.png",
    bio: "Lerato Anita Ferland is an Admitted Attorney of the High Court of South Africa (Gauteng Local Division) and a Senior Associate at Seokane Incorporated Attorneys. She is known for her strong legal expertise, professionalism, and client-focused approach. Beginning her legal career in 2017 as a legal assistant, Lerato completed her articles at a reputable Johannesburg firm, gaining experience in estate administration, family law, debt collection, motion proceedings, and litigation support. Since joining Seokane Incorporated in 2023, she has focused on high court litigation, corporate and commercial law, and estate planning. She is also pursuing further qualifications in Conveyancing and Notarial Practice to expand her professional capabilities.",
  },
  {
    name: "Sesethu Zingelwa",
    title: "Associate",
    image: "/images/team-tshadi-lefakane.jpg", // TODO: replace with sesethu-zingelwa-headshot.jpg when available
    bio: "Sesethu Zingelwa is an Admitted Attorney of the High Court of South Africa and an Associate at Seokane Incorporated Attorneys. With a background in both law and psychology, she brings valuable experience in infrastructure projects, corporate and commercial law, and dispute resolution. She began her career at ENS in the Project Development and Finance team, advising government and state-owned entities on major infrastructure transactions, including pipelines, ports, and public-private partnerships. After her admission, she expanded her practice to litigation, dispute resolution, and corporate law, providing practical and professional legal support to both corporate and individual clients.",
  },
];

export const office = {
  address: "1 Maxwell Drive, Sunninghill, Johannesburg, 2191",
  phone: "+27 (0)11 052 2817",
  mobile: "+27 (0)83 778 9288",
  fax: "+27 (0)10 020 1861",
  email: "city@seokaneinc.co.za",
  hours: "Monday to Friday, 08:00 - 17:00",
};

/* ─── Blog Articles ──────────────────────────────────────────── */

export type Article = {
  slug: string;
  date: string;
  dateISO: string;
  tag: string;
  practiceSlug: string;
  title: string;
  excerpt: string;
  image: string;
  readTime: string;
  author: string;
  body: string;
};

export const articles: Article[] = [
  /* ── Commercial Litigation ── */
  {
    slug: "navigating-commercial-disputes-south-africa",
    date: "14 January 2026",
    dateISO: "2026-01-14",
    tag: "Commercial Litigation",
    practiceSlug: "commercial-litigation",
    title: "Navigating Commercial Disputes in South Africa: A Strategic Guide",
    excerpt:
      "When a commercial dispute arises, the decisions you make in the first days often determine the outcome. Here is how to approach it strategically.",
    image: "/images/hero-practice-commercial-litigation.jpg",
    readTime: "5 min read",
    author: "City Seokane",
    body: `
      <p>Commercial disputes are a fact of doing business. Whether it is a breach of contract, an unpaid debt, or a partnership breakdown, how you respond in the early stages will often determine whether you resolve the matter quickly or spend years in litigation.</p>
      <h2>Start with a Clear Legal Assessment</h2>
      <p>Before you send a demand letter or instruct attorneys to issue summons, you need a clear-eyed assessment of your legal position. This means understanding your contractual rights, the strength of your evidence, the probable defences your opponent will raise, and a realistic view of the likely outcome. A poor legal position aggressively pursued rarely produces good results.</p>
      <h2>Consider Your Commercial Objectives</h2>
      <p>Not every dispute is best resolved through litigation. Sometimes a negotiated settlement, even on less favourable terms, is the right commercial outcome — particularly where you have an ongoing business relationship with the other party, or where the cost and disruption of litigation outweighs the value in dispute. Your attorney should understand both the legal and commercial dimensions of the matter.</p>
      <h2>Preserve Your Evidence Early</h2>
      <p>Evidence deteriorates. Emails are deleted, witnesses forget, and documents are misfiled. From the moment a dispute becomes likely, preserve all relevant correspondence, contracts, invoices, and internal communications. If you anticipate that the other party may destroy evidence, an urgent application to court for a preservation order may be appropriate.</p>
      <h2>Know When to Use Urgency</h2>
      <p>South African courts provide for urgent applications where immediate relief is necessary to prevent irreparable harm. If a competitor is using your confidential information, a debtor is dissipating assets, or a contractual right is being infringed in real time, urgent relief may be available. Acting quickly and correctly in these situations can make the difference between protecting your interests and suffering a loss that cannot be undone.</p>
      <p>If you are facing a commercial dispute and need guidance on your options, contact Seokane Inc. for a confidential consultation.</p>
    `,
  },
  {
    slug: "urgent-interdict-applications-explained",
    date: "8 December 2025",
    dateISO: "2025-12-08",
    tag: "Commercial Litigation",
    practiceSlug: "commercial-litigation",
    title: "Urgent Interdict Applications: When Speed Matters",
    excerpt:
      "An urgent interdict can stop wrongful conduct in its tracks — but only if you act correctly and quickly. Understanding the requirements is essential.",
    image: "/images/attorneys-consultation.jpg",
    readTime: "4 min read",
    author: "Modiegi Mafalo",
    body: `
      <p>When someone is acting in a way that is causing you immediate and ongoing harm, the law provides a powerful remedy: the urgent interdict. But obtaining one requires satisfying the court on multiple requirements, and getting it wrong can result in a costly failure at a critical moment.</p>
      <h2>The Requirements for an Urgent Interdict</h2>
      <p>South African courts apply a well-established test when considering urgent interdict applications. You must demonstrate: (1) a clear right or prima facie right that is being threatened or infringed; (2) a reasonable apprehension of irreparable harm if the interdict is not granted; (3) the balance of convenience favours granting the order; and (4) there is no other adequate remedy available.</p>
      <h2>What Makes a Matter Truly Urgent</h2>
      <p>Courts take a dim view of manufactured urgency. A matter is urgent when the applicant would not be able to obtain substantial redress in the ordinary course if forced to wait for a hearing in due course. This typically means the harm is imminent or already ongoing, and a delay of weeks or months would result in harm that cannot subsequently be remedied — for example, the destruction of evidence, the dissipation of assets, or the disclosure of trade secrets.</p>
      <h2>The Practical Steps</h2>
      <p>Moving an urgent application requires rapid preparation of a founding affidavit setting out the facts, a clear and concise legal argument, and a draft order precisely defining the relief sought. The papers must be served on the respondent, who typically has an opportunity to oppose — though the urgency of the matter will determine how much time they are given. Getting the papers right under time pressure is where experienced litigation counsel makes a material difference.</p>
      <p>If you believe you have a matter requiring urgent court intervention, contact our litigation team immediately to discuss your options.</p>
    `,
  },

  /* ── Corporate & Commercial ── */
  {
    slug: "shareholder-agreements-why-every-business-needs-one",
    date: "28 January 2026",
    dateISO: "2026-01-28",
    tag: "Corporate & Commercial",
    practiceSlug: "corporate-law",
    title: "Shareholder Agreements: Why Every Business Needs One",
    excerpt:
      "A shareholder agreement is the legal foundation of your business relationship. Without one, disputes can become expensive and uncontrollable.",
    image: "/images/hero-practice-corporate-commercial.jpg",
    readTime: "5 min read",
    author: "City Seokane",
    body: `
      <p>Two business partners launch a company together. Things go well for a few years. Then one wants to bring in a new investor the other disagrees with. Or one wants to sell their shares to a competitor. Or one stops contributing but refuses to be bought out. Without a shareholder agreement, each of these situations can become an expensive, damaging dispute with no clear road map for resolution.</p>
      <h2>What a Shareholder Agreement Does</h2>
      <p>A shareholder agreement sits alongside your memorandum of incorporation and governs the relationship between shareholders. It deals with matters that the Companies Act and MOI either do not address or address inadequately for your specific business context — including decision-making thresholds, share transfer restrictions, dividend policy, dispute resolution mechanisms, and what happens when a shareholder wants to exit or dies.</p>
      <h2>Key Provisions Every Agreement Should Include</h2>
      <p>Well-drafted shareholder agreements address the following: pre-emptive rights (requiring a selling shareholder to offer shares to existing shareholders before selling to outsiders); tag-along and drag-along rights (protecting minority shareholders or enabling majority shareholders to complete a sale); deadlock resolution mechanisms; restraints of trade; and clearly defined processes for valuing shares when a shareholder exits. The right provisions depend on the nature and size of the business and the specific relationship between the shareholders.</p>
      <h2>When to Get One</h2>
      <p>The best time to conclude a shareholder agreement is before or at the time of incorporation. Once a business is established and relationships are established, negotiating the agreement becomes more complicated — parties have more to argue about, and entrenched positions make agreement harder. Getting it right at the start is far less expensive and disruptive than dealing with a shareholder dispute later.</p>
      <p>Contact Seokane Inc. to discuss a shareholder agreement tailored to your business structure and objectives.</p>
    `,
  },
  {
    slug: "commercial-contracts-common-drafting-mistakes",
    date: "15 November 2025",
    dateISO: "2025-11-15",
    tag: "Corporate & Commercial",
    practiceSlug: "commercial-law",
    title: "Five Common Mistakes in Commercial Contracts",
    excerpt:
      "Poorly drafted contracts create uncertainty, enable disputes, and expose your business to risk. Here are the mistakes we see most often — and how to avoid them.",
    image: "/images/hero-about.jpg",
    readTime: "4 min read",
    author: "Modiegi Mafalo",
    body: `
      <p>A commercial contract should clearly allocate rights, obligations, and risk between the parties. When it fails to do that — because it is poorly drafted, copied from a template without adaptation, or rushed through without legal review — it becomes a liability rather than a protection.</p>
      <h2>1. Vague Scope of Work or Deliverables</h2>
      <p>The most common source of contract disputes is ambiguity about what was actually agreed. What exactly is the service provider obligated to deliver? By when? To what standard? Contracts that use loose language like "reasonable efforts" or "as agreed" without further specification are invitations to dispute. Be specific and concrete about deliverables, timescales, and quality standards.</p>
      <h2>2. No Payment Terms or Unclear Invoicing Provisions</h2>
      <p>When is payment due? From the date of the invoice? From the date the invoice is received? From the date the goods are delivered? In what currency? What is the interest rate on late payments? These details matter, and leaving them vague or absent creates leverage for the other party to delay payment.</p>
      <h2>3. Missing or Inadequate Limitation of Liability Clauses</h2>
      <p>Without a limitation of liability clause, your exposure in the event of a breach or failure could be unlimited — including consequential losses that far exceed the value of the contract. South African courts will enforce properly drafted limitation clauses. Make sure they are in your standard agreements.</p>
      <h2>4. Inadequate Termination and Exit Provisions</h2>
      <p>How does either party exit the contract if things go wrong? What constitutes a material breach that entitles termination? Is there a cure period? What are the consequences of termination — do obligations survive? Contracts that are silent on termination can trap parties in relationships that are no longer working.</p>
      <h2>5. Incorrect Governing Law and Dispute Resolution</h2>
      <p>For South African businesses contracting with foreign parties, specifying governing law and the forum for disputes is critical. But even in domestic contracts, specifying whether disputes go to mediation, arbitration, or court — and in which jurisdiction — avoids arguments about process later. Contact us to review your standard contracts and close the gaps before a dispute arises.</p>
    `,
  },

  /* ── Estates & Trusts ── */
  {
    slug: "deceased-estate-administration-what-to-expect",
    date: "3 December 2025",
    dateISO: "2025-12-03",
    tag: "Estates & Trusts",
    practiceSlug: "administration-of-estates",
    title: "Deceased Estate Administration: What to Expect",
    excerpt:
      "Administering a deceased estate involves more steps than most people realise. Understanding the process helps families navigate a difficult time with clarity.",
    image: "/images/hero-practice-estates-trusts.jpg",
    readTime: "5 min read",
    author: "Tshadi Lefakane",
    body: `
      <p>When a person dies, their estate must be administered and distributed in accordance with their will (if there is one) or the Intestate Succession Act (if there is not). The process is regulated by the Administration of Estates Act and involves several formal steps — many of which take time and require careful attention to avoid delays or legal complications.</p>
      <h2>Reporting the Estate</h2>
      <p>The first step is reporting the deceased estate to the Master of the High Court. This must be done within 14 days of the date of death by the person who has custody of the will or who is responsible for the funeral. The Master's office is located in the jurisdiction where the deceased was ordinarily resident at the time of death. Failure to report timeously can result in delays and, in some cases, penalties.</p>
      <h2>Appointment of the Executor</h2>
      <p>The Master appoints an executor to administer the estate. If the deceased left a valid will, the nominated executor is usually appointed. Where the executor is not a registered professional (such as an attorney), the Master may require them to provide security — typically a bond of security — before letters of executorship are issued. The executor's powers arise only once the letters of executorship have been issued.</p>
      <h2>Liquidation and Distribution Account</h2>
      <p>The executor must prepare a liquidation and distribution account showing all assets, liabilities, and the proposed distribution of the estate. This account is submitted to the Master and must lie open for inspection for 21 days. Creditors and heirs may object to the account. Once the account is approved, the executor distributes the estate in accordance with it.</p>
      <h2>Timeframes and Practical Considerations</h2>
      <p>Estate administration is rarely quick. Complex estates — those involving businesses, trusts, foreign assets, or disputed claims — can take two or more years to finalise. Engaging an experienced attorney as executor or as support for a lay executor reduces delays, minimises disputes, and protects the interests of all beneficiaries. Contact us to discuss the administration of a deceased estate.</p>
    `,
  },

  /* ── Business Compliance ── */
  {
    slug: "cipc-annual-returns-what-companies-need-to-know",
    date: "18 February 2026",
    dateISO: "2026-02-18",
    tag: "Business Compliance",
    practiceSlug: "company-secretarial",
    title: "CIPC Annual Returns: What Companies Need to Know",
    excerpt:
      "CIPC annual returns are a basic but non-negotiable compliance requirement. Missing the deadline has real consequences for your company's standing.",
    image: "/images/hero-practice-business-compliance.png",
    readTime: "4 min read",
    author: "Tshadi Lefakane",
    body: `
      <p>Every company and close corporation registered with the Companies and Intellectual Property Commission is required to file an annual return. This is not a tax filing — it is a statutory compliance requirement under the Companies Act, 2008. The obligation applies whether or not the company is trading, and failure to comply can result in your company being deregistered.</p>
      <h2>When Must Annual Returns Be Filed?</h2>
      <p>Annual returns must be filed within 30 business days after the anniversary of the company's incorporation date. For close corporations, the deadline is within 30 business days after the anniversary of the end of the financial year. CIPC sends reminder notices, but it is the company's responsibility to ensure compliance — the reminder is a courtesy, not a condition.</p>
      <h2>What Does Filing Involve?</h2>
      <p>The annual return is filed online through the CIPC e-services portal. It requires confirmation of the company's registered information, payment of the prescribed annual return fee (which is based on the company's turnover), and — for companies that meet certain thresholds — submission of annual financial statements. Ensure your company's registered address, director details, and other statutory information are accurate before filing.</p>
      <h2>Consequences of Non-Compliance</h2>
      <p>A company that fails to file its annual return will be flagged as non-compliant by CIPC. After two consecutive years of non-compliance, CIPC will begin the deregistration process. A deregistered company loses its legal standing and its directors can become personally liable for the company's obligations. Reinstatement is possible but involves cost, delay, and administrative complexity.</p>
      <h2>Keeping Your Compliance Current</h2>
      <p>Annual returns are one part of a broader compliance picture. Directors also need to ensure that changes to directors, registered addresses, and share capital are notified to CIPC promptly. Our company secretarial team can manage your CIPC compliance on your behalf. Contact us to discuss a compliance support arrangement for your business.</p>
    `,
  },
  {
    slug: "company-secretarial-services-why-they-matter",
    date: "12 September 2025",
    dateISO: "2025-09-12",
    tag: "Business Compliance",
    practiceSlug: "company-secretarial",
    title: "Company Secretarial Services: Why They Matter for Your Business",
    excerpt:
      "Company secretarial work is often treated as administrative overhead. In reality, it is the foundation of your company's legal integrity — and neglecting it has consequences.",
    image: "/images/hero-sme.png",
    readTime: "4 min read",
    author: "City Seokane",
    body: `
      <p>When businesses think about legal risk, they typically think about contracts, disputes, and regulatory investigations. Rarely do they think about company secretarial compliance — until something goes wrong. A company that has failed to maintain its statutory records, file required notices, or properly document its board decisions is a company with hidden legal exposure.</p>
      <h2>What Company Secretarial Work Covers</h2>
      <p>Company secretarial services encompass the full range of statutory compliance obligations under the Companies Act, 2008: CIPC registrations and amendments, director and shareholder changes, maintaining the statutory register of members and directors, preparing and filing annual returns, drafting board and shareholder resolutions, and ensuring that governance decisions are properly documented. For companies with more complex structures — holding companies, trusts, multiple classes of shares — the work is more substantial.</p>
      <h2>Why It Cannot Be Left to Chance</h2>
      <p>Statutory records that are out of date or inaccurate create real problems. A director who is still registered at CIPC after resigning remains potentially liable for company obligations. A share register that does not reflect actual ownership creates disputes about who controls the company. A board resolution that was never properly documented may be challenged as invalid. These are not theoretical risks — they arise regularly in practice, particularly during transactions, disputes, and due diligence processes.</p>
      <h2>The Cost of Getting It Wrong</h2>
      <p>The consequences of poor company secretarial compliance range from practical delays (a transaction cannot proceed because the company's records are inconsistent) to legal exposure (personal liability for directors, or the company being placed in deregistration). Bringing statutory records up to date after years of neglect is time-consuming and more expensive than staying current in the first place.</p>
      <h2>How We Can Help</h2>
      <p>Seokane Inc. provides company secretarial support as a standalone service for SMEs and growing businesses. Whether you need a once-off CIPC filing, a full statutory records review, or an ongoing company secretarial arrangement, we can help. Contact us to discuss what your business needs.</p>
    `,
  },
];

export const recentArticles: Article[] = [...articles]
  .sort((a, b) => b.dateISO.localeCompare(a.dateISO))
  .slice(0, 3);
