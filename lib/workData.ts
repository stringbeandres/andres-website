export type Initiative = {
  title: string;
  description: string;
  tags: string[];
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
        title: "Initiative 1",
        description: "Placeholder description for Cove initiative 1.",
        tags: ["Marketplace", "Strategy"],
      },
      {
        title: "Initiative 2",
        description: "Placeholder description for Cove initiative 2.",
        tags: ["Operations", "Growth"],
      },
      {
        title: "Initiative 3",
        description: "Placeholder description for Cove initiative 3.",
        tags: ["Analytics", "Tooling"],
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
        title: "Initiative 1",
        description: "Placeholder description for Accenture initiative 1.",
        tags: ["Consulting", "Strategy"],
      },
      {
        title: "Initiative 2",
        description: "Placeholder description for Accenture initiative 2.",
        tags: ["Operations", "Analytics"],
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
        title: "Initiative 1",
        description: "Placeholder description for NYU initiative 1.",
        tags: ["Research", "Political Science"],
      },
    ],
  },
];
