/**
 * Site-wide content for the service detail pages — the parts that are the same
 * whichever service you are reading about (proof numbers, how we work, how we
 * compare). Per-service copy stays in `lib/services.ts`.
 */

export type StatItem = { value: string; label: string };

/** Headline numbers shown in the hero row and the hero dashboard mockup. */
export const SERVICE_STATS: StatItem[] = [
  { value: "50+", label: "projects" },
  { value: "100%", label: "retention" },
  { value: "4.9", label: "client rating" },
];

/**
 * Client logos for the "brands that trust us" wall (files live in /public/logos).
 * Deliberately the lightest of the client marks — 6.png and 8.png are our own.
 */
export const LOGO_WALL_FILES = [
  "12.png",
  "7.png",
  "24.png",
  "20.png",
  "5.png",
  "13.png",
  "2.png",
  "21.png",
];

export type ComparisonRow = {
  label: string;
  typical: string;
  sidpin: string;
  sidpinNote: string;
};

/** "How we're different" — the claims below are all stated elsewhere on the site. */
export const COMPARISON_ROWS: ComparisonRow[] = [
  {
    label: "Contract",
    typical: "12 months, locked",
    sidpin: "Month to month",
    sidpinNote: "Scope agreed per phase, no lock-in",
  },
  {
    label: "Your accounts",
    typical: "Theirs. You leave with nothing",
    sidpin: "Yours — always",
    sidpinNote: "Code, accounts, analytics, creatives",
  },
  {
    label: "Pricing",
    typical: "Vague retainers, hidden markups",
    sidpin: "Flat, published on this site",
    sidpinNote: "See the pricing page before you call",
  },
  {
    label: "Reporting",
    typical: "Monthly PDF full of impressions",
    sidpin: "Numbers that move revenue",
    sidpinNote: "Leads, cost per lead, conversions",
  },
  {
    label: "A bad month",
    typical: "Buried in the deck",
    sidpin: "You see it too",
    sidpinNote: "Good or bad, same report",
  },
  {
    label: "Who does the work",
    typical: "Junior handed your account",
    sidpin: "The team you met",
    sidpinNote: "Designers and engineers in-house",
  },
  {
    label: "Delivery",
    typical: "“We'll get back to you”",
    sidpin: "Weekly, in writing",
    sidpinNote: "Every sprint ends with something live",
  },
];

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
  note: string;
};

/** "How we work" — five steps, same discipline on every engagement. */
export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Audit",
    description:
      "We tear down what you have today — site, funnels, tracking and the competitors beating you.",
    note: "Free — yours whether you hire us or not.",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "We agree the numbers up front: target cost per lead, volume, timeline and budget split.",
    note: "You approve before a rupee is spent.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Design, development, campaigns and tracking — shipped by the in-house team, not outsourced.",
    note: "Every conversion measured from day one.",
  },
  {
    number: "04",
    title: "Optimize",
    description:
      "Weekly test cycles. We pause what loses, feed what wins, and write down every decision.",
    note: "This is where cost per lead falls.",
  },
  {
    number: "05",
    title: "Scale",
    description:
      "Budget follows what is proven. New channels are added only when the data says so.",
    note: "Growth, without guessing.",
  },
];

export const PROCESS_BULLETS = [
  {
    title: "Tracking built by engineers.",
    body: "Most accounts we audit measure the wrong thing — or nothing at all. Our developers wire it up properly.",
  },
  {
    title: "Design and development in-house.",
    body: "No waiting on “your web guy”. Designers, engineers and campaign managers sit on one team.",
  },
  {
    title: "Process that survives people.",
    body: "Documented playbooks — your project never depends on one person's memory.",
  },
];

export const PROCESS_ASK = {
  title: "And what we need from you:",
  body: "Access to your accounts, 30 minutes for a kickoff call, and a yes on the plan.",
  highlight: "We do the rest.",
};
