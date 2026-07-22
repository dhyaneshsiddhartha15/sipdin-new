"use client";

/**
 * ServicePricer — interactive pricing (ported from the multi-service / region /
 * category reference). Three dropdowns (service · region · category) drive a set
 * of three tier cards whose price recomputes from a per-region base and a
 * category multiplier, and whose feature list gains a category-specific line.
 *
 * Rendered on a dark parent (home PricingSection + the /pricing panel), so it
 * ships no background of its own — just white-on-dark controls and 3D cards.
 */

import { useMemo, useRef, useState } from "react";
import Link from "next/link";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { Check, ChevronDown, Gift } from "lucide-react";

/* ---------------------------------------------------------------- data ---- */

type RegionKey = "india" | "gulf" | "usa";
type CategoryKey =
  | "business"
  | "clinic"
  | "restaurant"
  | "school"
  | "realestate"
  | "gym"
  | "hotel";

type Region = { label: string; symbol: string; locale: string; step: number; note: string };

const REGIONS: Record<RegionKey, Region> = {
  india: { label: "India", symbol: "₹", locale: "en-IN", step: 500, note: "one-time" },
  gulf: { label: "Gulf (UAE / QA / SA)", symbol: "AED ", locale: "en-US", step: 10, note: "one-time" },
  usa: { label: "USA / Canada", symbol: "$", locale: "en-US", step: 10, note: "one-time" },
};

// Per-category price multiplier + the extra deliverable it unlocks, split into
// "site" services (websites, 3D, e-commerce) and "system" services (CRM, apps).
const CATEGORIES: {
  key: CategoryKey;
  label: string;
  site: number;
  system: number;
  siteFeature: string;
  systemFeature: string;
}[] = [
  { key: "business", label: "Business", site: 1.0, system: 1.0, siteFeature: "Click-to-WhatsApp lead routing", systemFeature: "Deal pipeline + task automation" },
  { key: "clinic", label: "Clinic / hospital", site: 1.45, system: 1.15, siteFeature: "Doctor profiles + slot booking", systemFeature: "Patient records + visit history" },
  { key: "restaurant", label: "Restaurant", site: 1.1, system: 1.1, siteFeature: "Live digital menu + table reservations", systemFeature: "Table turnover + order history tracking" },
  { key: "school", label: "School / institute", site: 1.35, system: 1.2, siteFeature: "Admissions intake + notice board", systemFeature: "Student & parent record management" },
  { key: "realestate", label: "Real estate", site: 1.5, system: 1.25, siteFeature: "Listings with map-based search", systemFeature: "Property & deal pipeline tracking" },
  { key: "gym", label: "Gym / fitness", site: 1.1, system: 1.1, siteFeature: "Class calendar + membership signup", systemFeature: "Membership renewals + attendance log" },
  { key: "hotel", label: "Hotel", site: 1.6, system: 1.2, siteFeature: "Room availability + booking engine", systemFeature: "Guest profiles + stay history" },
];

type Tier = {
  name: string;
  desc: string;
  includes: string[];
  bonus: string;
  delivery: string;
  featured?: boolean; // middle tier — "Recommended"
  fromPrice?: boolean; // show "From " before the price
};

type ServiceDef = {
  key: string;
  label: string;
  kind: "site" | "system";
  base: Record<RegionKey, [number, number, number]>;
  tiers: [Tier, Tier, Tier];
};

const SERVICES: ServiceDef[] = [
  {
    key: "website",
    label: "Website development",
    kind: "site",
    base: { india: [16500, 55000, 165000], gulf: [2499, 6999, 17999], usa: [999, 2999, 6999] },
    tiers: [
      { name: "Starter", desc: "For startups & small businesses establishing their online presence.", includes: ["Up to 6 custom pages, responsive", "Basic on-page SEO + speed optimization", "Contact form, WhatsApp & Maps"], bonus: "1-year domain + web hosting", delivery: "15-day post-launch support" },
      { name: "Business", desc: "For growing businesses looking to generate more leads.", includes: ["Up to 15 pages + editable CMS", "Advanced technical SEO + Search Console", "Blog module + business email (5 inboxes)"], bonus: "1-year domain + premium hosting", delivery: "30-day priority support", featured: true },
      { name: "Enterprise", desc: "Enterprise-grade functionality, integrations & custom features.", includes: ["Unlimited pages, fully custom UI/UX", "CRM + payment gateway + booking system", "AI chat + multi-language + multi-location"], bonus: "1-year domain + premium hosting", delivery: "Dedicated PM · priority support", fromPrice: true },
    ],
  },
  {
    key: "3d-website",
    label: "3D website development",
    kind: "site",
    base: { india: [64999, 149999, 349999], gulf: [8999, 19999, 44999], usa: [2499, 5999, 13999] },
    tiers: [
      { name: "Launch", desc: "One immersive 3D showcase moment on an otherwise standard site.", includes: ["One interactive 3D showcase section", "Standard responsive build around it", "Optimised load for the 3D scene"], bonus: "3D asset optimisation pass", delivery: "2–3 week turnaround · 15-day support window" },
      { name: "Growth", desc: "Multiple interactive 3D sections with a walkthrough feel.", includes: ["Multiple interactive 3D sections", "Walkthrough-style navigation", "Basic product configurator"], bonus: "Branded loading experience", delivery: "3–5 week turnaround · 30-day support window", featured: true },
      { name: "Premium", desc: "A full 3D experience with custom configurators, tuned across devices.", includes: ["Full 3D interactive experience", "Custom configurators", "Optimised across all devices"], bonus: "Free AI FAQ assistant on launch", delivery: "5–8 week turnaround · 90-day support window" },
    ],
  },
  {
    key: "crm",
    label: "Custom CRM",
    kind: "system",
    base: { india: [249999, 699999, 1800000], gulf: [34999, 89999, 240000], usa: [18999, 44999, 95000] },
    tiers: [
      { name: "Launch", desc: "Get contacts, leads and pipeline out of spreadsheets.", includes: ["Centralised contact database", "Visual sales pipeline board", "Single-role access control"], bonus: "60-day onboarding support included", delivery: "6–8 week build" },
      { name: "Growth", desc: "Automate the repetitive parts of your sales & ops workflow.", includes: ["Custom automation rules engine", "Role-based team dashboards", "2–3 third-party integrations"], bonus: "Free data migration from your current tool", delivery: "3–4 month build", featured: true },
      { name: "Scale", desc: "A CRM built to run multi-branch or high-volume operations.", includes: ["AI-assisted lead scoring", "Multi-branch data architecture", "5+ enterprise integrations"], bonus: "Dedicated onboarding specialist", delivery: "6–9 month build", fromPrice: true },
    ],
  },
  {
    key: "app",
    label: "App development",
    kind: "system",
    base: { india: [156000, 375000, 812500], gulf: [16999, 39999, 84999], usa: [8999, 21999, 46999] },
    tiers: [
      { name: "MVP", desc: "A market-ready app to validate your idea & attract first customers.", includes: ["Custom UI/UX — 20+ premium screens", "Android or cross-platform app", "Auth + admin dashboard + cloud DB"], bonus: "Play Store deployment assistance", delivery: "6–8 week delivery" },
      { name: "Growth", desc: "A feature-rich app to engage users & accelerate growth.", includes: ["Premium UI/UX — 40+ custom screens", "Android + iOS, payments + real-time chat", "GPS + push + reviews + advanced dashboard"], bonus: "App Store & Play Store deployment", delivery: "3–4 month delivery", featured: true },
      { name: "Enterprise", desc: "Enterprise-grade solution with AI, automation & limitless scale.", includes: ["Unlimited screens, fully custom ecosystem", "AI assistant + live video + voice/video calls", "Marketplace + wallet + subscriptions + LMS"], bonus: "Dedicated onboarding specialist", delivery: "Custom project timeline", fromPrice: true },
    ],
  },
  {
    key: "ecommerce",
    label: "E-commerce (Shopify)",
    kind: "site",
    base: { india: [45000, 95000, 250000], gulf: [4999, 12999, 27999], usa: [2499, 6499, 13999] },
    tiers: [
      { name: "Starter Store", desc: "Everything you need to start selling professionally.", includes: ["Up to 8 pages, up to 50 products", "Premium Shopify design + secure gateway", "Inventory, shipping/tax & product reviews"], bonus: "1-year domain + hosting", delivery: "Store launch support" },
      { name: "Growth Store", desc: "A conversion-focused store built to grow your sales.", includes: ["Up to 20 pages, up to 500 products", "Fully custom design + multiple gateways", "Wishlist, coupons, email marketing & analytics"], bonus: "1-year domain + hosting", delivery: "30-day support · multi-currency", featured: true },
      { name: "Enterprise Commerce", desc: "Enterprise commerce with automation & scalability.", includes: ["Unlimited pages & products, bespoke build", "AI recommendations + CRM/ERP + custom APIs", "Warehouse automation + subscriptions + BI"], bonus: "1-year domain + premium hosting", delivery: "Dedicated launch manager · priority support", fromPrice: true },
    ],
  },
];

/* ------------------------------------------------------------ helpers ---- */

function fmt(n: number, region: Region) {
  return n.toLocaleString(region.locale, { maximumFractionDigits: 0 });
}

function priceFor(base: number, mult: number, region: Region) {
  return Math.round((base * mult) / region.step) * region.step;
}

/* ----------------------------------------------------------- plan card ---- */

function PlanCard({
  tier,
  price,
  region,
  feature,
  index,
}: {
  tier: Tier;
  price: number;
  region: Region;
  feature: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(my, [0, 1], [6, -6]), { stiffness: 160, damping: 16 });
  const rotateY = useSpring(useTransform(mx, [0, 1], [-6, 6]), { stiffness: 160, damping: 16 });

  const onMove = (e: React.MouseEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  };
  const onLeave = () => {
    mx.set(0.5);
    my.set(0.5);
  };

  const hi = !!tier.featured;
  const includes = [...tier.includes, feature];

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      initial={{ opacity: 0, y: 26 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      className={[
        "group relative flex flex-col overflow-hidden rounded-2xl border p-6 md:p-7",
        hi
          ? "border-white/25 bg-gradient-to-b from-[#1b1b27] to-[#0d0d15] shadow-[0_40px_90px_-30px_rgba(99,102,241,0.6)] md:-translate-y-3"
          : "border-white/10 bg-[#0c0c14] shadow-[0_24px_70px_-40px_rgba(99,102,241,0.5)]",
      ].join(" ")}
    >
      {/* Top glow */}
      <div
        className="pointer-events-none absolute -top-24 left-1/2 h-56 w-[140%] -translate-x-1/2 rounded-[50%] blur-3xl"
        style={{
          background: hi
            ? "radial-gradient(closest-side, rgba(255,255,255,0.5), rgba(180,180,255,0.15), transparent)"
            : "radial-gradient(closest-side, rgba(79,70,229,0.75), rgba(124,58,237,0.3), transparent)",
        }}
      />

      {hi && (
        <span
          className="absolute left-1/2 top-4 z-20 -translate-x-1/2 rounded-full bg-white px-3.5 py-1 text-[11px] font-bold text-black"
          style={{ fontFamily: "Geist, sans-serif", transform: "translateX(-50%) translateZ(60px)" }}
        >
          ★ Recommended
        </span>
      )}

      <div className="relative z-10 flex flex-1 flex-col" style={{ transform: "translateZ(40px)" }}>
        <p className={`text-[15px] font-medium ${hi ? "mt-5" : ""} text-white/85`} style={{ fontFamily: "Hanken Grotesk, sans-serif" }}>
          {tier.name}
        </p>
        <p className="mt-1 min-h-[36px] text-[12px] leading-snug text-white/45" style={{ fontFamily: "Inter, sans-serif" }}>
          {tier.desc}
        </p>

        <div className="mt-3 flex items-end gap-1">
          <span className="text-[30px] font-semibold leading-none text-white md:text-[34px]" style={{ fontFamily: "Hanken Grotesk, sans-serif" }}>
            {tier.fromPrice ? "From " : ""}
            {region.symbol}
            {fmt(price, region)}
          </span>
        </div>
        <span className="mt-1 text-[12px] text-white/45">{region.note}</span>

        <div className="my-5 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.25em] text-white/35">
          <span className="h-px flex-1 bg-white/10" />
          What you get
          <span className="h-px flex-1 bg-white/10" />
        </div>

        <ul className="space-y-3">
          {includes.map((f) => (
            <li key={f} className="flex items-start gap-2.5 text-[13px] leading-snug text-white/70" style={{ fontFamily: "Inter, sans-serif" }}>
              <Check size={15} className="mt-[2px] shrink-0 text-emerald-400" />
              {f}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex items-start gap-2.5 rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-3">
          <Gift size={15} className="mt-[2px] shrink-0 text-[#c4b5fd]" />
          <span className="text-[12.5px] leading-snug text-white/70" style={{ fontFamily: "Inter, sans-serif" }}>
            <span className="text-white/40">Thrown in free — </span>
            {tier.bonus}
          </span>
        </div>

        <p className="mt-4 text-[12px] text-white/45" style={{ fontFamily: "Inter, sans-serif" }}>
          {tier.delivery}
        </p>

        <Link
          href="/contact"
          className={[
            "mt-6 block w-full rounded-full py-3 text-center text-[14px] font-semibold transition-all duration-300",
            hi ? "bg-white text-black hover:bg-white/90" : "border border-white/20 text-white hover:border-white/40 hover:bg-white/5",
          ].join(" ")}
          style={{ fontFamily: "Geist, sans-serif" }}
        >
          Get started
        </Link>
      </div>
    </motion.div>
  );
}

/* --------------------------------------------------------- dropdown ------ */

function Dropdown({
  label,
  value,
  onChange,
  children,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/40" style={{ fontFamily: "Geist, sans-serif" }}>
        {label}
      </span>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          aria-label={label}
          className="w-full cursor-pointer appearance-none rounded-full border border-white/15 bg-white/5 py-2.5 pe-11 ps-5 text-sm font-medium text-white outline-none transition-colors hover:border-white/30 focus:border-[#7c3aed] focus:ring-2 focus:ring-[#7c3aed]/40"
          style={{ fontFamily: "Geist, sans-serif" }}
        >
          {children}
        </select>
        <ChevronDown size={16} className="pointer-events-none absolute end-4 top-1/2 -translate-y-1/2 text-white/60" />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------- pricer ---- */

export default function ServicePricer({ defaultService = "website" }: { defaultService?: string }) {
  const [serviceKey, setServiceKey] = useState(defaultService);
  const [regionKey, setRegionKey] = useState<RegionKey>("india");
  const [categoryKey, setCategoryKey] = useState<CategoryKey>("business");

  const service = SERVICES.find((s) => s.key === serviceKey) ?? SERVICES[0];
  const region = REGIONS[regionKey];
  const category = CATEGORIES.find((c) => c.key === categoryKey) ?? CATEGORIES[0];

  const { mult, feature } = useMemo(() => {
    const isSite = service.kind === "site";
    return {
      mult: isSite ? category.site : category.system,
      feature: isSite ? category.siteFeature : category.systemFeature,
    };
  }, [service.kind, category]);

  const base = service.base[regionKey];

  return (
    <div className="relative">
      {/* Dropdown controls */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Dropdown label="Pricing for" value={serviceKey} onChange={setServiceKey}>
          {SERVICES.map((s) => (
            <option key={s.key} value={s.key} className="bg-[#0d0d15] text-white">
              {s.label}
            </option>
          ))}
        </Dropdown>
        <Dropdown label="Region" value={regionKey} onChange={(v) => setRegionKey(v as RegionKey)}>
          {(Object.keys(REGIONS) as RegionKey[]).map((k) => (
            <option key={k} value={k} className="bg-[#0d0d15] text-white">
              {REGIONS[k].label}
            </option>
          ))}
        </Dropdown>
        <Dropdown label="Required for" value={categoryKey} onChange={(v) => setCategoryKey(v as CategoryKey)}>
          {CATEGORIES.map((c) => (
            <option key={c.key} value={c.key} className="bg-[#0d0d15] text-white">
              {c.label}
            </option>
          ))}
        </Dropdown>
      </div>

      {/* Cards */}
      <div className="mt-10" style={{ perspective: "1200px" }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={`${serviceKey}-${regionKey}-${categoryKey}`}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="grid gap-6 md:grid-cols-3 md:items-stretch"
          >
            {service.tiers.map((tier, i) => (
              <PlanCard
                key={`${serviceKey}-${tier.name}`}
                tier={tier}
                price={priceFor(base[i], mult, region)}
                region={region}
                feature={feature}
                index={i}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <p className="mt-8 text-center text-[12.5px] text-white/40" style={{ fontFamily: "Inter, sans-serif" }}>
        Prices are indicative one-time estimates and adapt to your region &amp; industry. Final quote confirmed after a quick scoping call.
      </p>
    </div>
  );
}
