/**
 * "Our Products" release feed — a CustomerShip-style changelog of Sidpin's
 * product enhancements. Drives /our-products (filters + card grid + pagination).
 */

export type ReleaseType = "New" | "Improvement" | "Beta" | "Fix";

export type Release = {
  id: string;
  product: string; // product area
  type: ReleaseType;
  title: string;
  date: string; // human date
  summary: string;
  benefits: string[];
  /** Two-colour gradient used for the card's screenshot placeholder. */
  gradient: [string, string];
};

export const PRODUCT_AREAS = [
  "All products",
  "Sidpin Sites",
  "Sidpin CRM",
  "3D Studio",
  "Analytics",
  "SuperPopups",
  "App Platform",
] as const;

export const RELEASE_TYPES = ["All types", "New", "Improvement", "Beta", "Fix"] as const;

export const RELEASES: Release[] = [
  {
    id: "sites-ai-builder",
    product: "Sidpin Sites",
    type: "New",
    title: "AI Website Builder 2.0",
    date: "Jul 8, 2026",
    summary:
      "Describe your business in a sentence and generate a full, on-brand website — copy, layout, and imagery — in under a minute.",
    benefits: [
      "Go from prompt to live site in ~60 seconds",
      "Brand-aware colour and type selection",
      "One-click section regeneration",
    ],
    gradient: ["#4169e1", "#7c5cec"],
  },
  {
    id: "crm-pipelines",
    product: "Sidpin CRM",
    type: "New",
    title: "Visual Pipelines & Automations",
    date: "Jul 2, 2026",
    summary:
      "A drag-and-drop pipeline builder with trigger-based automations so leads move themselves through your funnel.",
    benefits: [
      "Unlimited custom pipeline stages",
      "No-code automation rules",
      "Real-time deal forecasting",
    ],
    gradient: ["#0c8a99", "#12c2b0"],
  },
  {
    id: "studio-configurator",
    product: "3D Studio",
    type: "Beta",
    title: "Real-Time Product Configurator",
    date: "Jun 26, 2026",
    summary:
      "Let customers rotate, recolour, and customise products in real time with a WebGL configurator embeddable anywhere.",
    benefits: [
      "60fps interactive 3D on mobile",
      "Material & colour presets",
      "AR quick-look support",
    ],
    gradient: ["#6d5ae6", "#a855f7"],
  },
  {
    id: "analytics-funnels",
    product: "Analytics",
    type: "Improvement",
    title: "Funnel & Retention Reports",
    date: "Jun 19, 2026",
    summary:
      "Understand exactly where visitors drop off with multi-step funnels and cohort retention charts — no tagging required.",
    benefits: [
      "Auto-captured events",
      "Cohort retention heatmaps",
      "Shareable report links",
    ],
    gradient: ["#e08a34", "#f4c400"],
  },
  {
    id: "superpopups-ai",
    product: "SuperPopups",
    type: "New",
    title: "AI-Personalised Popups",
    date: "Jun 12, 2026",
    summary:
      "Popups that adapt their offer and copy to each visitor's intent, boosting conversion without extra design work.",
    benefits: [
      "Intent-based targeting",
      "A/B tests that run themselves",
      "Average +34% opt-in lift",
    ],
    gradient: ["#db2777", "#f472b6"],
  },
  {
    id: "app-offline-sync",
    product: "App Platform",
    type: "Improvement",
    title: "Offline-First Sync Engine",
    date: "Jun 5, 2026",
    summary:
      "Your apps now stay fully usable offline and reconcile changes automatically the moment connectivity returns.",
    benefits: [
      "Conflict-free background sync",
      "Instant optimistic updates",
      "Works across web & native",
    ],
    gradient: ["#2563eb", "#38bdf8"],
  },
  {
    id: "sites-speed",
    product: "Sidpin Sites",
    type: "Improvement",
    title: "Edge Caching & Image CDN",
    date: "May 28, 2026",
    summary:
      "Every site is now served from the edge with automatic image optimisation, cutting median load times roughly in half.",
    benefits: [
      "Global edge delivery",
      "Automatic AVIF / WebP images",
      "Core Web Vitals out of the box",
    ],
    gradient: ["#0ea5e9", "#22d3ee"],
  },
  {
    id: "crm-inbox-fix",
    product: "Sidpin CRM",
    type: "Fix",
    title: "Unified Inbox Reliability",
    date: "May 21, 2026",
    summary:
      "Resolved sync delays in the unified inbox so email, chat, and social messages now arrive in real time.",
    benefits: [
      "Sub-second message delivery",
      "Accurate unread counts",
      "Restored threading edge cases",
    ],
    gradient: ["#475569", "#94a3b8"],
  },
];

export const TYPE_COLORS: Record<ReleaseType, { bg: string; text: string }> = {
  New: { bg: "rgba(65,105,225,0.16)", text: "#93b0ff" },
  Improvement: { bg: "rgba(16,185,129,0.16)", text: "#5ee9b5" },
  Beta: { bg: "rgba(168,85,247,0.16)", text: "#d8b4fe" },
  Fix: { bg: "rgba(245,158,11,0.16)", text: "#fcd34d" },
};
