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

// Region-aware price formatting for any set of plans
export function formatPlans(plans: Plan[], region: Region): Plan[] {
  return plans.map((plan) => ({
    ...plan,
    price: formatPrice(plan.price, region),
  }));
}

// Get formatted plans based on region
export function getPlans(region: Region): Plan[] {
  return formatPlans(BASE_PLANS, region);
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

// ── E-Commerce package matrix ──────────────────────────────
export const ECOMMERCE_PLANS: Plan[] = [
  { key: "starter", name: "Starter", price: "₹35,000", period: "one-time", currency: "", tagline: "Essential online store to start selling" },
  { key: "growth", name: "Growth", price: "₹70,000", period: "one-time", currency: "", popular: true, tagline: "Scale up with advanced store features" },
  { key: "enterprise", name: "Enterprise", price: "₹1,50,000+", period: "one-time", currency: "", tagline: "Full-scale custom commerce platform" },
];

export const ECOMMERCE_FEATURES: FeatureRow[] = [
  { label: "Custom UI/UX Design", values: [true, true, true] },
  { label: "Shopify / WooCommerce Setup", values: [true, true, true] },
  { label: "Mobile Responsive Design", values: [true, true, true] },
  { label: "Premium Theme Setup", values: [true, true, true] },
  { label: "Custom Theme Development", values: [false, "Optional", true] },
  { label: "Product Upload", values: ["Up to 50", "Up to 500", "Unlimited"] },
  { label: "Product Categories", values: [true, true, true] },
  { label: "Shopping Cart", values: [true, true, true] },
  { label: "Secure Checkout", values: [true, true, true] },
  { label: "Payment Gateway Integration", values: [true, true, true] },
  { label: "Shipping Configuration", values: [true, true, true] },
  { label: "Coupon & Discount System", values: [false, true, true] },
  { label: "Wishlist", values: [false, true, true] },
  { label: "Product Search & Filters", values: ["Basic", "Advanced", "Premium"] },
  { label: "Customer Accounts", values: [true, true, true] },
  { label: "Order Management", values: [true, true, true] },
  { label: "Inventory Management", values: ["Basic", "Advanced", "Enterprise"] },
  { label: "Tax Configuration", values: ["Basic", true, true] },
  { label: "Email Notifications", values: [true, true, true] },
  { label: "WhatsApp Integration", values: [true, true, true] },
  { label: "Social Media Integration", values: [true, true, true] },
  { label: "Google Analytics", values: [true, true, true] },
  { label: "Google Search Console", values: [false, true, true] },
  { label: "Basic SEO Setup", values: [true, true, true] },
  { label: "XML Sitemap", values: [false, true, true] },
  { label: "Blog / CMS", values: ["Optional", true, true] },
  { label: "Performance Optimization", values: ["Basic", "Advanced", "Premium"] },
  { label: "Security Best Practices", values: [true, true, "Enterprise Grade"] },
  { label: "Third-Party App Integration", values: [false, "Basic", "Unlimited"] },
  { label: "Multi-language Support", values: [false, "Optional", true] },
  { label: "Multi-currency Support", values: [false, "Optional", true] },
  { label: "CRM Integration", values: [false, "Optional", true] },
  { label: "Marketing Automation", values: [false, "Optional", true] },
  { label: "Source Code Ownership", values: [true, true, true] },
  { label: "Technical Documentation", values: [false, "Basic", "Complete"] },
  { label: "Training Session", values: [false, false, true] },
  { label: "Post-launch Support", values: ["1 Month", "2 Months", "3 Months"] },
];

// ── Mobile App package matrix ──────────────────────────────
export const MOBILE_PLANS: Plan[] = [
  { key: "launch", name: "Launch", price: "₹25,000", period: "one-time", currency: "", tagline: "Get your Android app live" },
  { key: "growth", name: "Growth", price: "₹45,000", period: "one-time", currency: "", popular: true, tagline: "Cross-platform Android + iOS app" },
  { key: "enterprise", name: "Enterprise", price: "₹80,000", period: "one-time", currency: "", tagline: "Advanced app with premium integrations" },
];

export const MOBILE_FEATURES: FeatureRow[] = [
  { label: "Custom UI/UX Design", values: [true, true, true] },
  { label: "Android App", values: [true, true, true] },
  { label: "iOS App", values: [false, true, true] },
  { label: "Cross-Platform Development", values: [false, true, true] },
  { label: "Responsive Layout", values: [true, true, true] },
  { label: "User Authentication", values: [true, true, true] },
  { label: "User Profiles", values: [true, true, true] },
  { label: "Push Notifications", values: [true, true, true] },
  { label: "API Integration", values: ["Basic", "Advanced", "Unlimited"] },
  { label: "Firebase Integration", values: [true, true, true] },
  { label: "Google Maps Integration", values: ["Optional", true, true] },
  { label: "Payment Gateway", values: [false, true, true] },
  { label: "Social Login (Google / Apple)", values: [false, true, true] },
  { label: "In-App Chat", values: [false, "Optional", true] },
  { label: "Booking & Appointment System", values: [false, "Optional", true] },
  { label: "QR / Barcode Scanner", values: [false, "Optional", true] },
  { label: "File Uploads", values: [false, true, true] },
  { label: "Offline Support", values: [false, "Basic", "Advanced"] },
  { label: "Admin Dashboard", values: ["Basic", "Advanced", "Enterprise"] },
  { label: "CMS Integration", values: [false, "Optional", true] },
  { label: "Database Integration", values: [true, true, true] },
  { label: "Cloud Backend Integration", values: [true, true, true] },
  { label: "Third-Party API Integrations", values: ["Basic", "Advanced", "Unlimited"] },
  { label: "AI Chatbot Integration", values: [false, "Optional", true] },
  { label: "Real-Time Features", values: [false, "Optional", true] },
  { label: "Live Location Tracking", values: [false, "Optional", true] },
  { label: "Multi-language Support", values: [false, "Optional", true] },
  { label: "Analytics Integration", values: ["Basic", "Advanced", "Enterprise"] },
  { label: "Crash Monitoring", values: [true, true, true] },
  { label: "Performance Optimization", values: ["Basic", "Advanced", "Premium"] },
  { label: "Security Best Practices", values: [true, true, "Enterprise Grade"] },
  { label: "App Store Publishing Support", values: [false, true, true] },
  { label: "Google Play Store Publishing", values: [true, true, true] },
  { label: "Source Code Ownership", values: [true, true, true] },
  { label: "Technical Documentation", values: [false, "Basic", "Complete"] },
  { label: "Training Session", values: [false, false, true] },
  { label: "Post-launch Support", values: ["1 Month", "2 Months", "3 Months"] },
];

// ── Web Development package matrix (detailed) ──────────────
export const WEBDEV_PLANS: Plan[] = [
  { key: "starter", name: "Starter", price: "₹16,500", period: "one-time", currency: "", tagline: "For startups & small businesses establishing an online presence" },
  { key: "business", name: "Business", price: "₹55,000", period: "one-time", currency: "", popular: true, tagline: "For growing businesses looking to generate more leads" },
  { key: "enterprise", name: "Enterprise", price: "₹1,65,000+", period: "one-time", currency: "", tagline: "Enterprise-grade functionality, integrations & custom features" },
];

export const WEBDEV_FEATURES: FeatureRow[] = [
  { label: "Number of Custom Pages", values: ["Up to 6", "Up to 15", "Unlimited"] },
  { label: "Custom Responsive Design", values: [true, true, true] },
  { label: "Mobile & Tablet Optimized", values: [true, true, true] },
  { label: "Contact & Inquiry Forms", values: [true, true, true] },
  { label: "WhatsApp Integration", values: [true, true, true] },
  { label: "Google Maps Integration", values: [true, true, true] },
  { label: "Social Media Integration", values: [true, true, true] },
  { label: "SSL Certificate Setup", values: [true, true, true] },
  { label: "SEO Optimization", values: ["Basic On-Page", "Advanced Technical", "Enterprise SEO"] },
  { label: "Google Analytics Setup", values: [true, true, true] },
  { label: "Google Search Console Setup", values: [false, true, true] },
  { label: "Content Management System (CMS)", values: [false, true, true] },
  { label: "Blog & News Module", values: [false, true, true] },
  { label: "Business Email Setup", values: [false, "Up to 5", "Custom"] },
  { label: "Lead Generation Forms", values: [false, true, true] },
  { label: "Premium UI/UX Components", values: [false, true, "Fully Custom"] },
  { label: "Performance Optimization", values: ["Standard", "Enhanced", "Premium"] },
  { label: "Custom Web App Features", values: [false, false, true] },
  { label: "CRM Integration", values: [false, false, true] },
  { label: "Third-Party API Integration", values: [false, false, true] },
  { label: "Payment Gateway Integration", values: [false, false, true] },
  { label: "Booking & Appointment System", values: [false, false, true] },
  { label: "AI Chat Assistant", values: [false, false, true] },
  { label: "Animations & Interactions", values: [false, false, "Advanced"] },
  { label: "Multi-Language Support", values: [false, false, true] },
  { label: "Multi-Location Website", values: [false, false, true] },
  { label: "Security Level", values: ["Standard SSL", "Enhanced", "Enterprise-Level"] },
  { label: "Dedicated Project Manager", values: [false, false, true] },
  { label: "Free 1-Yr Domain & Hosting", values: [true, "Premium Hosting", "Premium Hosting"] },
  { label: "Post-Launch Support", values: ["15 Days", "30 Days", "Priority"] },
];

// ── SaaS & CRM Solution matrix ─────────────────────────────
export const SAAS_PLANS: Plan[] = [
  { key: "starter", name: "Starter", price: "₹75,000", period: "one-time", currency: "", tagline: "Core CRM to manage customers & leads" },
  { key: "business", name: "Business", price: "₹1,50,000", period: "one-time", currency: "", popular: true, tagline: "Full CRM with pipelines, automation & collaboration" },
  { key: "enterprise", name: "Enterprise", price: "₹3,50,000+", period: "one-time", currency: "", tagline: "Enterprise SaaS with AI, multi-company & custom workflows" },
];

export const SAAS_FEATURES: FeatureRow[] = [
  { label: "Custom UI/UX Design", values: [true, true, true] },
  { label: "Responsive Design", values: [true, true, true] },
  { label: "User Authentication", values: [true, true, true] },
  { label: "Role-Based Access Control (RBAC)", values: ["Basic", "Advanced", "Enterprise"] },
  { label: "Dashboard", values: [true, true, true] },
  { label: "Customer Management", values: [true, true, true] },
  { label: "Lead Management", values: ["Basic", "Advanced", "Enterprise"] },
  { label: "Contact Management", values: [true, true, true] },
  { label: "Task Management", values: [false, true, true] },
  { label: "Calendar & Scheduling", values: [false, true, true] },
  { label: "Sales Pipeline", values: [false, true, true] },
  { label: "Employee Management", values: [false, "Optional", true] },
  { label: "Team Collaboration", values: [false, true, true] },
  { label: "File & Document Management", values: [false, true, true] },
  { label: "Email Integration", values: ["Basic", "Advanced", "Unlimited"] },
  { label: "WhatsApp Integration", values: [false, "Optional", true] },
  { label: "SMS Notifications", values: [false, "Optional", true] },
  { label: "API Integrations", values: ["Basic", "Advanced", "Unlimited"] },
  { label: "Third-Party Integrations", values: [false, "Basic", "Unlimited"] },
  { label: "Reports & Analytics", values: ["Basic", "Advanced", "Enterprise"] },
  { label: "Real-Time Notifications", values: [false, "Optional", true] },
  { label: "Workflow Automation", values: [false, "Optional", true] },
  { label: "AI Chatbot / AI Assistant", values: [false, "Optional", true] },
  { label: "Multi-company Support", values: [false, false, true] },
  { label: "Database Integration", values: [true, true, true] },
  { label: "Cloud Deployment", values: [true, true, true] },
  { label: "Performance Optimization", values: ["Basic", "Advanced", "Premium"] },
  { label: "Security Best Practices", values: [true, true, "Enterprise Grade"] },
  { label: "Backup & Recovery", values: ["Basic", "Advanced", "Automated"] },
  { label: "Audit Logs", values: [false, "Optional", true] },
  { label: "Source Code Ownership", values: [true, true, true] },
  { label: "Technical Documentation", values: [false, "Basic", "Complete"] },
  { label: "Training Session", values: [false, false, true] },
  { label: "Post-launch Support", values: ["1 Month", "2 Months", "3 Months"] },
];

// ── Shopify / E-Commerce Store matrix ──────────────────────
export const SHOPIFY_PLANS: Plan[] = [
  { key: "starter", name: "Starter Store", price: "₹45,000", period: "one-time", currency: "", tagline: "Everything you need to start selling professionally" },
  { key: "growth", name: "Growth Store", price: "₹95,000", period: "one-time", currency: "", popular: true, tagline: "Conversion-focused store built to grow your sales" },
  { key: "enterprise", name: "Enterprise Commerce", price: "₹2,50,000+", period: "one-time", currency: "", tagline: "Enterprise commerce with automation & scalability" },
];

export const SHOPIFY_FEATURES: FeatureRow[] = [
  { label: "Number of Pages", values: ["Up to 8", "Up to 20", "Unlimited"] },
  { label: "Product Upload Limit", values: ["Up to 50", "Up to 500", "Unlimited"] },
  { label: "Store Design Type", values: ["Premium Shopify", "Fully Custom", "Bespoke"] },
  { label: "Mobile-First Shopping", values: [true, true, true] },
  { label: "Payment Gateways", values: ["Single Gateway", "Multiple Gateways", "Multiple + Custom"] },
  { label: "Inventory Management", values: ["Standard", "Advanced", "Warehouse & Automation"] },
  { label: "Shipping & Tax Config", values: [true, true, true] },
  { label: "Product Reviews", values: [true, true, true] },
  { label: "SEO & Performance", values: ["Basic SEO & Speed", "Performance & Conversion", "Enterprise BI & SEO"] },
  { label: "Wishlist & Accounts", values: [false, true, true] },
  { label: "Coupons & Gift Cards", values: [false, true, true] },
  { label: "Email Marketing Integration", values: [false, true, true] },
  { label: "Sales Analytics Dashboard", values: [false, "Sales Dashboard", "Advanced BI"] },
  { label: "Multi-Currency Support", values: [false, true, true] },
  { label: "Multi-Language Support", values: [false, false, true] },
  { label: "AI Product Recommendations", values: [false, false, true] },
  { label: "Multi-Vendor Marketplace", values: [false, false, "Optional"] },
  { label: "CRM & ERP Integrations", values: [false, false, true] },
  { label: "Subscriptions & Memberships", values: [false, false, true] },
  { label: "Custom API Integrations", values: [false, false, true] },
  { label: "Dedicated Support & Management", values: ["Launch Support", "30 Days Support", "Dedicated Manager"] },
  { label: "Free 1-Year Domain & Hosting", values: [true, true, "Premium Hosting"] },
];

// All comparison matrices shown in the "Compare our plans" tabs
export type PlanMatrix = { id: string; label: string; plans: Plan[]; features: FeatureRow[] };

export const MATRICES: PlanMatrix[] = [
  { id: "web", label: "Web Development", plans: WEBDEV_PLANS, features: WEBDEV_FEATURES },
  { id: "ecommerce", label: "E-Commerce", plans: ECOMMERCE_PLANS, features: ECOMMERCE_FEATURES },
  { id: "shopify", label: "Shopify", plans: SHOPIFY_PLANS, features: SHOPIFY_FEATURES },
  { id: "mobile", label: "Mobile App", plans: MOBILE_PLANS, features: MOBILE_FEATURES },
  { id: "saas", label: "SaaS & CRM", plans: SAAS_PLANS, features: SAAS_FEATURES },
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
