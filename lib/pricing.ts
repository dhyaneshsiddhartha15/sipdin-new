/**
 * Pricing page data — Sidpin's real Website Development plans, the feature
 * comparison matrix, the "all plans include" perks, testimonials, and the
 * "included with every plan" cards. CRM pricing lives on the homepage pricing
 * section (per-service dropdown) and is linked from /pricing.
 */

export type PlanValue = boolean | string;

export type Plan = {
  key: string;
  name: string;
  price: string; // e.g. "150" or "Custom"
  period: string; // e.g. "/project"
  currency?: string; // e.g. "$"
  popular?: boolean;
  tagline?: string;
};

export type FeatureRow = {
  label: string;
  values: PlanValue[]; // one per plan, same order as PLANS
};

export const PLANS: Plan[] = [
  { key: "starter", name: "Starter", price: "150", period: "/project", currency: "$", tagline: "Ideal for startups & small businesses" },
  { key: "business", name: "Business", price: "250", period: "/project", currency: "$", popular: true, tagline: "Perfect for growing businesses" },
  { key: "custom", name: "Custom", price: "Custom", period: "/project", tagline: "For large-scale & custom requirements" },
];

export const FEATURES: FeatureRow[] = [
  { label: "Pages included", values: ["Up to 5", "Up to 10", "Unlimited"] },
  { label: "2D or 3D website", values: [true, true, true] },
  { label: "Responsive design (mobile, tablet, desktop)", values: [true, true, true] },
  { label: "Contact form integration", values: [true, true, true] },
  { label: "On-page SEO", values: ["Basic setup", "Advanced + speed", "Advanced + custom"] },
  { label: "E-commerce functionality", values: [false, true, "Multi-vendor / booking"] },
  { label: "CMS / Admin panel", values: [false, true, true] },
  { label: "Web application development", values: [false, false, true] },
  { label: "Free hosting", values: ["1 Year", "1 Year", "As per requirement"] },
  { label: "Free domain", values: ["1 Year", "1 Year", "As per requirement"] },
  { label: "Revision rounds", values: ["1", "3", "Unlimited"] },
  { label: "Free support", values: ["6 Months", "6 Months", "Priority"] },
  { label: "Dedicated project manager", values: [false, false, true] },
];

export const PERKS: string[] = [
  "1 Year Free Hosting & Domain",
  "6 Months Free Support",
  "Mobile-first responsive design",
  "SEO-ready, fast-loading build",
  "Modern technologies & clean code",
  "On-time delivery, guaranteed",
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
  { icon: "builder", title: "Custom design, built for you", body: "Every site is designed around your brand — no cookie-cutter templates, just work that fits your business." },
  { icon: "security", title: "Fast & secure", body: "Optimised for speed and secured for your users, so your site performs on every device." },
  { icon: "uptime", title: "SEO-ready foundation", body: "Built with best practices so you're set up to rank and be found from day one." },
  { icon: "dashboard", title: "Easy to manage", body: "A clean CMS / admin panel (on Business & Custom) so you can update content yourself." },
  { icon: "support", title: "6 months free support", body: "We stay with you after launch — ongoing care, updates, and help whenever you need it." },
];
