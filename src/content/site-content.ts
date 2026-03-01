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
      "We represent businesses in commercial disputes with a strategy-first approach focused on risk, speed, and commercial outcomes. Our team supports negotiation, mediation, and court proceedings while protecting your operational continuity.",
    services: [
      "Breach of contract disputes",
      "Debt recovery and enforcement",
      "Urgent interdict applications",
      "High Court and Magistrates' Court litigation",
      "Settlement and mediation strategy",
    ],
  },
  {
    slug: "corporate-commercial",
    title: "Corporate & Commercial Law",
    shortDescription:
      "Practical legal structuring for transactions, growth, and governance.",
    fullDescription:
      "From transaction support to contract architecture, we help leadership teams make legally sound business decisions. Our advice is technically rigorous and grounded in commercial realities.",
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
      "We help businesses manage labour risk through proactive policy design and responsive dispute support. Our guidance is built for South African employment frameworks and practical workplace realities.",
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
      "We assist families and fiduciaries with wills, trust structures, and deceased estate administration. Our approach combines legal precision with clear guidance during sensitive transitions.",
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
      "We act as a legal compliance partner for companies that need reliable governance and filing support. Our team helps you stay aligned with regulatory obligations and company secretarial requirements.",
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
      "Our leadership combines executive corporate roles and legal practice, bringing business context to legal decisions.",
  },
  {
    title: "Focused High-Impact Expertise",
    description:
      "We concentrate on commercial litigation, transactions, compliance, and employment matters where business risk is highest.",
  },
  {
    title: "Proven Track Record Since 2001",
    description:
      "Our roots trace back to Seokane Lesomo Attorneys, with over two decades of continuous service delivery.",
  },
];

export const smeServices = [
  {
    title: "Company Secretarial Services",
    items: [
      "Company registrations and amendments",
      "Director and shareholder updates",
      "Statutory register maintenance",
      "Compliance filing support",
    ],
  },
  {
    title: "Corporate Legal Services",
    items: [
      "Commercial contract drafting and negotiation",
      "Terms and policy development",
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
    bio: "A commercially minded legal leader with executive and advisory experience across major South African institutions. City leads strategic client matters with a focus on technical quality and practical outcomes.",
  },
  {
    name: "Modiegi Mafalo",
    title: "Associate",
    bio: "Modiegi supports corporate, litigation, and employment matters with disciplined legal execution and client-first communication.",
  },
  {
    name: "Tshadi Lefakane",
    title: "Candidate Attorney",
    bio: "Tshadi contributes to legal research, drafting, and matter support across the firm's core practice areas.",
  },
];

export const office = {
  address: "18 Eton Road, Parktown, Johannesburg, 2193, South Africa",
  phone: "+27 (0)11 123 4567",
  email: "info@seokaneinc.co.za",
  hours: "Monday to Friday, 08:00 - 17:00",
};
