export type Initiative = {
  title: string;
  description: string;
  tags: string[];
  href?: string;
};

export type WorkSection = {
  company: string;
  role: string;
  years: string;
  color: string;
  initiatives: Initiative[];
};

export const workData: WorkSection[] = [
  {
    company: "Cove Brands",
    role: "Builder & Strategist",
    years: "2022–Present",
    color: "#1B2A4A",
    initiatives: [
      {
        title: "A Pricing Framework Built for Uncertainty",
        description:
          "Cove Brands responds to the 2025 US tariff crisis with a scenario-based pricing plan designed to protect margins across a China-sourced product portfolio.",
        tags: ["Pricing", "Strategy", "Marketplace"],
      },
      {
        title: "Building the Company's First Analytics Capability",
        description:
          "Cove Brands builds its first analytics capability to standardize performance reporting across ten acquired ecommerce brands.",
        tags: ["Analytics", "Operations", "Data"],
      },
      {
        title: "Rebuilding Brand Management from the Ground Up",
        description:
          "Cove Brands creates an offshore brand management team following a company acquisition and change in leadership philosophy.",
        tags: ["People & Recruiting", "Operations", "Strategy"],
      },
    ],
  },
  {
    company: "Accenture & ZS Associates",
    role: "Consultant",
    years: "2018–2022",
    color: "#4A5568",
    initiatives: [
      {
        title: "Building a Two-Sided TV Advertising Marketplace",
        description:
          "Accenture designs a multimillion-dollar ad sales platform for a telecom client, with a product owner bridging business objectives and engineering execution across twelve agile sprints.",
        tags: ["Product Management", "Marketplace", "Agile"],
      },
      {
        title: "Evaluating a Health-Tech Startup",
        description:
          "ZS Associates leads financial due diligence on a health-tech acquisition for a pharma corporate venture capital fund, from founder interviews to financial model to final presentation.",
        tags: ["Finance", "Consulting", "Venture Capital"],
      },
    ],
  },
  {
    company: "New York University",
    role: "Researcher",
    years: "2014–2018",
    color: "#7A6652",
    initiatives: [
      {
        title: "Do Corruption Investigations Change Elections?",
        description:
          "NYU undergraduate honors thesis examining whether legal accountability mechanisms shift voter behavior, published through the university's politics honors program.",
        tags: ["Research", "Political Science", "Economics"],
        href: "https://as.nyu.edu/departments/politics/Undergraduate/BAPolitics/HonorsProgram/honors_IR_theses.html",
      },
    ],
  },
];
