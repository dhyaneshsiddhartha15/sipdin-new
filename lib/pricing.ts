/**
 * Pricing page data — plans, the feature-comparison matrix, the "no extra cost"
 * perks, testimonials, and the "included with every plan" cards. Content is
 * adapted to Sidpin's website/growth plans. Edit values here to tune pricing.
 */

export type PlanValue = boolean | string;

export type Plan = {
  key: string;
  name: string;
  price: string; // e.g. "69"
  period: string; // e.g. "/mo"
  currency?: string; // e.g. "₹"
  popular?: boolean;
  /** Discount badge, e.g. "75% off" or "Special offer • 80% off". */
  discount?: string;
};

export type FeatureRow = {
  label: string;
  values: PlanValue[]; // one per plan, same order as PLANS
};

export const PLANS: Plan[] = [
  { key: "single", name: "Single", price: "69", period: "/mo", currency: "₹", discount: "75% off" },
  { key: "premium", name: "Premium", price: "139", period: "/mo", currency: "₹", popular: true, discount: "Special offer • 80% off" },
  { key: "unlimited", name: "Unlimited", price: "249", period: "/mo", currency: "₹", discount: "72% off" },
  { key: "cloud", name: "Cloud Startup", price: "599", period: "/mo", currency: "₹", discount: "71% off" },
];

export const FEATURES: FeatureRow[] = [
  { label: "Websites", values: ["1", "3", "Unlimited", "Unlimited"] },
  { label: "Storage", values: ["10 GB", "20 GB", "50 GB", "100 GB"] },
  { label: "Daily backups", values: [false, false, true, true] },
  { label: "Free CDN", values: [false, false, true, true] },
  { label: "WordPress", values: [true, true, true, true] },
  { label: "Drag-and-drop website builder", values: [false, true, true, true] },
  { label: "E-commerce", values: [false, true, true, true] },
  { label: "Web apps", values: [false, false, "5", "10"] },
  { label: "Free domain (with annual plans)", values: [false, true, true, true] },
  { label: "Mailboxes — free for 1 year", values: ["1", "10", "Unlimited", "Unlimited"] },
  { label: "Free email marketing", values: [false, false, true, true] },
  { label: "Priority 24/7 expert support", values: [false, true, true, true] },
  { label: "AI tools", values: [true, true, true, true] },
  { label: "AI SEO ready", values: [false, true, true, true] },
  { label: "99.9% uptime guarantee", values: [true, true, true, true] },
  { label: "Global data centres", values: [true, true, true, true] },
  { label: "Free automatic website migration", values: [false, true, true, true] },
  { label: "Unlimited free SSL", values: [true, true, true, true] },
  { label: "Dedicated IP address", values: [false, false, false, true] },
];

export const PERKS: string[] = [
  "Unlimited SSL security certificates",
  "Free domain (with annual plans)",
  "Professionally designed templates",
  "Automatic back-ups and updates",
  "Business email addresses",
  "Unlimited web traffic",
];

export type Testimonial = { quote: string; name: string; role: string };

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Sidpin rebuilt our store and our online sales doubled within two months. A completely different experience from every provider we'd tried before.",
    name: "Ayesha Khan",
    role: "Founder, Lumen Studios",
  },
  {
    quote:
      "Sidpin made website management effortless — regular updates and better scalability as we added more products and destinations.",
    name: "Daniel Osei",
    role: "CEO, NovaCRM",
  },
  {
    quote:
      "Being with Sidpin gives us a website that's a unique experience for our clients, so we can focus on the creative work instead of maintenance.",
    name: "Priya Nair",
    role: "Co-founder, Bloomkart",
  },
];

export type Included = { title: string; body: string; icon: string };

export const INCLUDED: Included[] = [
  { icon: "builder", title: "Website Builder", body: "Build your website in 3 simple steps with AI tools. You'll be going live in minutes." },
  { icon: "security", title: "Total security", body: "Relax — your websites and visitors are protected by the latest security software." },
  { icon: "uptime", title: "99.9% uptime, guaranteed", body: "Our 99.9% uptime guarantee means your website is always available." },
  { icon: "dashboard", title: "A single, simple dashboard", body: "Easy for beginners and pros alike — see at a glance how your site is performing." },
  { icon: "support", title: "24/7 customer support", body: "Expert support whenever you need it. We typically respond in under 2 minutes." },
];
