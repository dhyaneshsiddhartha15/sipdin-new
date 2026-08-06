import type { LucideIcon } from "lucide-react";
import {
  Megaphone,
  Search,
  TrendingUp,
  Share2,
  Globe,
  Smartphone,
  Code2,
  Boxes,
  Cpu,
  Sparkles,
  Brain,
  MessageSquare,
  Layers,
  Workflow,
  Server,
  FileCode,
  Lightbulb,
  Rocket,
  Wand2,
  UsersRound,
} from "lucide-react";

export type MegaMenuItem = {
  name: string;
  description: string;
  href: string;
  icon: LucideIcon;
};

export type MegaMenuColumn = {
  name: string;
  items: MegaMenuItem[];
};

export type MegaMenuPromo = {
  title: string;
  audience: string;
  description: string;
  href: string;
  icon: LucideIcon;
};

/**
 * Services mega-menu content — modelled on the reference layout.
 * The "Design" column has been intentionally omitted.
 * Each item links to a real service detail page (/services/<slug>). The first six
 * reuse existing pages; the rest are new entries added in lib/services.ts.
 */
export const servicesMenuColumns: MegaMenuColumn[] = [
  {
    name: "Marketing",
    items: [
      { name: "Meta Ads", description: "Paid Social & Performance Campaigns", href: "/services/social-media-marketing", icon: Megaphone },
      { name: "Google Ads", description: "Search, Display & Shopping Ads", href: "/services/ppc", icon: Search },
      { name: "SEO/GEO/AEO", description: "Search, GEO & AI Visibility", href: "/services/seo", icon: TrendingUp },
      { name: "Social Media Management", description: "Content, Growth & Community", href: "/services/social-media-management", icon: Share2 },
    ],
  },
  {
    name: "Software Engineering",
    items: [
      { name: "Website Development", description: "Full Stack Systems", href: "/services/web-development", icon: Globe },
      { name: "Mobile App Development", description: "Native & Hybrid Apps", href: "/services/app-development", icon: Smartphone },
      { name: "Software Development", description: "Custom Enterprise Tools", href: "/services/software-development", icon: Code2 },
      { name: "Blockchain Development", description: "Smart contracts & dApps", href: "/services/blockchain-development", icon: Boxes },
    ],
  },
  {
    name: "AI Services",
    items: [
      { name: "AI Development", description: "Intelligent Applications & Systems", href: "/services/ai-development", icon: Cpu },
      { name: "Generative AI", description: "LLMs, Copilots & Agents", href: "/services/generative-ai", icon: Sparkles },
      { name: "Machine Learning", description: "Predictive & smart systems", href: "/services/machine-learning", icon: Brain },
      { name: "AI Chatbot", description: "Intelligent Customer Support", href: "/services/ai-chatbot", icon: MessageSquare },
      { name: "AI SaaS", description: "Scalable AI Platforms", href: "/services/ai-saas", icon: Layers },
      { name: "AI Integration", description: "Seamless AI-Powered Workflows", href: "/services/ai-integration", icon: Workflow },
    ],
  },
  {
    name: "Consulting",
    items: [
      { name: "IT Consulting", description: "Technology Strategy & Planning", href: "/services/it-consulting", icon: Server },
      { name: "Software Consulting", description: "Architecture & Development Guidance", href: "/services/software-consulting", icon: FileCode },
      { name: "Mobile Consulting", description: "App Strategy & Optimization", href: "/services/mobile-consulting", icon: Smartphone },
      { name: "AI Consulting", description: "AI Adoption & Implementation", href: "/services/ai-consulting", icon: Lightbulb },
    ],
  },
];

export const servicesMenuPromos: MegaMenuPromo[] = [
  {
    title: "MVP Design",
    audience: "For Startups",
    description: "Create a digital product, attract investors and new clients",
    href: "/contact",
    icon: Rocket,
  },
  {
    title: "Product Redesign",
    audience: "For Scaleups",
    description: "Fresh look, improved user experience or enhanced functionality",
    href: "/contact",
    icon: Wand2,
  },
  {
    title: "Team Extension",
    audience: "For Enterprises",
    description: "Expand your team with our talented design & dev experts",
    href: "/contact",
    icon: UsersRound,
  },
];
