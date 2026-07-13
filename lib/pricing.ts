/**
 * Pricing page data — Sidpin's real Website Development plans with updated pricing.
 * Matches the home page pricing section for consistency.
 */

import type { Region } from "./locale";
import { formatPrice } from "./locale";

export type PlanValue = boolean | string;

export type Plan = {
  key: string;
  name: string;
  price: string; // e.g. "₹18,000 – ₹28,000" (INR base)
  period: string; // e.g. "one-time"
  currency?: string; // e.g. "₹"
  popular?: boolean;
  tagline?: string;
};

export type FeatureRow = {
  label: string;
  values: PlanValue[]; // one per plan, same order as PLANS
};

// Base plans in INR
export const BASE_PLANS: Plan[] = [
  {
    key: "starter",
    name: "Starter",
    price: "₹18,000 – ₹28,000",
    period: "one-time",
    currency: "",
    tagline: "5–7 page custom-designed site, mobile responsive, basic SEO setup"
  },
  {
    key: "growth",
    name: "Growth",
    price: "₹40,000 – ₹65,000",
    period: "one-time",
    currency: "",
    popular: true,
    tagline: "Custom design, up to 12 pages, self-editable CMS, on-page SEO"
  },
  {
    key: "premium",
    name: "Premium",
    price: "₹85,000 – ₹1,40,000",
    period: "one-time",
    currency: "",
    tagline: "Fully custom multi-page site, advanced animations, multi-location/branch pages"
  },
];

// Get formatted plans based on region
export function getPlans(region: Region): Plan[] {
  return BASE_PLANS.map((plan) => ({
    ...plan,
    price: formatPrice(plan.price, region),
  }));
}

// For backward compatibility
export const PLANS = BASE_PLANS;

export const FEATURES: FeatureRow[] = [
  { label: "Pages included", values: ["5–7 pages", "Up to 12 pages", "Unlimited pages"] },
  { label: "Custom designed website", values: [true, true, true] },
  { label: "Responsive design (mobile, tablet, desktop)", values: [true, true, true] },
  { label: "WhatsApp/contact integration", values: [true, true, true] },
  { label: "SEO setup", values: ["Basic setup", "On-page SEO", "Advanced SEO"] },
  { label: "Self-editable CMS", values: [false, true, true] },
  { label: "Google Maps/booking integration", values: [false, true, true] },
  { label: "Advanced animations", values: [false, false, true] },
  { label: "Multi-location/branch pages", values: [false, false, true] },
  { label: "CRM/booking integration", values: [false, false, true] },
  { label: "Revision rounds", values: ["1 round", "2 rounds", "Multiple rounds"] },
  { label: "Support", values: ["Standard", "Standard", "Priority"] },
  { label: "Dedicated project manager", values: [false, false, true] },
];

export const PERKS: string[] = [
  "Mobile-first responsive design",
  "SEO-ready, fast-loading build",
  "Modern technologies & clean code",
  "On-time delivery, guaranteed",
  "WhatsApp/contact integration",
  "Free consultation before project",
];

export type Testimonial = { quote: string; name: string; role: string };

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Sidpin took our 70-year Rudraksha legacy online with complete authenticity. Our sales and customer trust have never been stronger.",
    name: "Avish Bansal",
    role: "Rudradharma",
  },
  {
    quote:
      "On a lean budget they delivered a website that competes with global hospitality brands. Prospective students notice the difference.",
    name: "Shubham Rayal",
    role: "Raboche Institute of Technology & Management",
  },
  {
    quote:
      "Our brand finally looks as strong as our training. Enquiries went up the moment the new site went live.",
    name: "Ankit Rawat",
    role: "AG Fitness",
  },
];

export type Included = { title: string; body: string; icon: string };

export const INCLUDED: Included[] = [
  {
    icon: "builder",
    title: "Custom design, built for you",
    body: "Every site is designed around your brand — no cookie-cutter templates, just work that fits your business."
  },
  {
    icon: "security",
    title: "Fast & secure",
    body: "Optimised for speed and secured for your users, so your site performs on every device."
  },
  {
    icon: "uptime",
    title: "SEO-ready foundation",
    body: "Built with best practices so you're set up to rank and be found from day one."
  },
  {
    icon: "dashboard",
    title: "Easy to manage",
    body: "A clean CMS / admin panel (on Growth & Premium) so you can update content yourself."
  },
  {
    icon: "support",
    title: "Ongoing support",
    body: "We stay with you after launch — ongoing care, updates, and help whenever you need it."
  },
];
