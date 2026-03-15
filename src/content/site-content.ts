export type PracticeArea = {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  services: string[];
};

export const practiceAreas: PracticeArea[] = [
  {
    slug: "commercial-litigation",
    title: "Commercial Litigation",
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
    slug: "corporate-commercial",
    title: "Corporate & Commercial Law",
    shortDescription:
      "Practical legal structuring for transactions, growth, and governance.",
    fullDescription:
      "Whether you're closing a transaction, restructuring your business, or negotiating a contract that needs to hold under pressure — sound corporate legal advice is what protects your interests and keeps your business moving forward. We work with management teams, directors, and shareholders to provide advice that is technically rigorous and commercially practical. We understand that legal decisions happen in the context of business deadlines and competing priorities.",
    services: [
      "Commercial contract drafting and review",
      "Due diligence support",
      "Shareholder and partnership agreements",
      "Corporate restructuring support",
      "Board and governance advisory",
    ],
  },
  {
    slug: "employment-labour",
    title: "Employment & Labour Law",
    shortDescription:
      "Employer-focused labour law guidance for compliance and dispute readiness.",
    fullDescription:
      "South African employment law is detailed, constantly evolving, and unforgiving of procedural errors. Whether you're managing a disciplinary matter, navigating a retrenchment, or defending a CCMA dispute, the outcome often depends on whether the right processes were followed from the start. We help employers build solid employment frameworks and respond effectively when disputes arise.",
    services: [
      "Employment contract drafting",
      "Disciplinary and grievance process support",
      "CCMA dispute representation support",
      "Workplace policy frameworks",
      "Retrenchment and restructuring guidance",
    ],
  },
  {
    slug: "estates-trusts",
    title: "Estates & Trusts",
    shortDescription:
      "Clear, compassionate legal support for estate and trust administration.",
    fullDescription:
      "Dealing with a deceased estate or setting up a trust often happens during emotionally difficult times — and the legal and administrative requirements can feel overwhelming. We provide clear, step-by-step guidance to make the process as straightforward as possible. Our goal is to give you confidence that everything is being handled correctly, so you can focus on what matters.",
    services: [
      "Will drafting and review",
      "Trust formation and advisory",
      "Deceased estate administration",
      "Executor support",
      "Estate compliance documentation",
    ],
  },
  {
    slug: "business-compliance",
    title: "Business Compliance",
    shortDescription:
      "Ongoing compliance support to keep your business properly constituted.",
    fullDescription:
      "Staying compliant with South Africa's Companies Act, CIPC requirements, and ongoing statutory obligations is not optional — and it's easy to fall behind when you're focused on running your business. We act as a reliable compliance partner, handling the filings, records, and documentation that keep your business properly constituted and audit-ready.",
    services: [
      "CIPC company registrations",
      "Director and shareholder changes",
      "Annual return and governance support",
      "Statutory document preparation",
      "Company secretarial advisory",
    ],
  },
];

export const proofPoints = [
  {
    title: "Deep Corporate Experience",
    description:
      "Our Director has held senior executive roles at Alexander Forbes Risk Services, the SABC, and VVM Global Services — including Chief Executive Officer. That background means we understand your business context, not just the legal technicalities.",
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
  {
    title: "Employment & Labour Support",
    items: [
      "Employment contracts and HR policy drafting",
      "Disciplinary and incapacity process guidance",
      "Labour dispute and CCMA support",
      "Workplace compliance advisory",
    ],
  },
];

export const teamMembers = [
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
];

export const office = {
  address: "1 Maxwell Drive, Sunninghill, Johannesburg, 2191",
  phone: "+27 (0)11 052 2817",
  mobile: "+27 (0)83 778 9288",
  fax: "+27 (0)10 020 1861",
  email: "city@seokaneinc.co.za",
  hours: "Monday to Friday, 08:00 - 17:00",
};
