"use client";

/**
 * PricingSection — Dark, glowing 3D pricing with dual dropdown system.
 * Select service + business type → shows recommended tier with highlight.
 */

import { useRef, useState } from "react";
import Link from "next/link";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { Check, ChevronDown, Plus } from "lucide-react";

type Tier = "starter" | "growth" | "premium";

type BusinessType =
  | "hotel"
  | "school"
  | "clinic"
  | "realestate"
  | "retail"
  | "yoga"
  | "influencer"
  | "other";

type Plan = {
  tier: Tier;
  name: string;
  price: string;
  period: string;
  tagline?: string;
  features: string[];
  cta: string;
  ctaHref: string;
};

type Addon = { title: string; note?: string };

type Service = {
  key: string;
  label: string;
  plans: Plan[];
  addonsTitle: string;
  addons: Addon[];
};

// Business types for dropdown
const BUSINESS_TYPES: { value: BusinessType; label: string }[] = [
  { value: "hotel", label: "Hotels and restaurants" },
  { value: "school", label: "Schools and institutes" },
  { value: "clinic", label: "Clinics and hospitals" },
  { value: "realestate", label: "Real estate and builders" },
  { value: "retail", label: "Retail and e-commerce" },
  { value: "yoga", label: "Yoga and fitness" },
  { value: "influencer", label: "Influencer and portfolio" },
  { value: "other", label: "Other" },
];

// Recommendation mapping based on business type
const RECOMMENDATION_MAP: Record<BusinessType, Tier> = {
  hotel: "premium",
  school: "growth",
  clinic: "growth",
  realestate: "growth",
  retail: "growth",
  yoga: "starter",
  influencer: "starter",
  other: "growth",
};

const SERVICES: Service[] = [
  {
    key: "website",
    label: "Website development",
    plans: [
      {
        tier: "starter",
        name: "Starter",
        price: "₹18,000 – ₹28,000",
        period: "one-time",
        tagline: "5–7 page custom-designed site, mobile responsive, basic SEO setup",
        cta: "Get Started",
        ctaHref: "/contact",
        features: [
          "5–7 page custom-designed site",
          "Mobile responsive design",
          "Basic SEO setup",
          "1 revision round",
          "WhatsApp/contact integration",
        ],
      },
      {
        tier: "growth",
        name: "Growth",
        price: "₹40,000 – ₹65,000",
        period: "one-time",
        tagline: "Custom design, up to 12 pages, self-editable CMS, on-page SEO",
        cta: "Get Started",
        ctaHref: "/contact",
        features: [
          "Custom design",
          "Up to 12 pages",
          "Self-editable CMS",
          "On-page SEO",
          "Google Maps/booking integration",
          "2 revision rounds",
        ],
      },
      {
        tier: "premium",
        name: "Premium",
        price: "₹85,000 – ₹1,40,000",
        period: "one-time",
        tagline: "Fully custom multi-page site, advanced animations, multi-location/branch pages",
        cta: "Get Started",
        ctaHref: "/contact",
        features: [
          "Fully custom multi-page site",
          "Advanced animations",
          "Multi-location/branch pages",
          "CRM/booking integration",
          "Priority support",
        ],
      },
    ],
    addonsTitle: "Add-on Services",
    addons: [
      { title: "3D & Interactive", note: "Immersive 3D elements & animations" },
      { title: "Logo & Branding", note: "Professional logo & brand identity" },
      { title: "Content Writing", note: "SEO-friendly content that converts" },
      { title: "Maintenance", note: "Ongoing updates & website care" },
      { title: "Digital Marketing", note: "SEO, Social Media & PPC campaigns" },
    ],
  },
  {
    key: "3d-website",
    label: "3D website development",
    plans: [
      {
        tier: "starter",
        name: "Starter",
        price: "₹65,000 – ₹1,00,000",
        period: "one-time",
        tagline: "One immersive 3D showcase section, rest standard responsive design",
        cta: "Get Started",
        ctaHref: "/contact",
        features: [
          "One immersive 3D showcase section",
          "Rest of site standard responsive design",
        ],
      },
      {
        tier: "growth",
        name: "Growth",
        price: "₹1,30,000 – ₹2,00,000",
        period: "one-time",
        tagline: "Multiple interactive 3D sections, walkthrough-style navigation, basic configurator",
        cta: "Get Started",
        ctaHref: "/contact",
        features: [
          "Multiple interactive 3D sections",
          "Walkthrough-style navigation",
          "Basic configurator",
        ],
      },
      {
        tier: "premium",
        name: "Premium",
        price: "₹2,75,000 – ₹4,50,000",
        period: "one-time",
        tagline: "Full 3D interactive experience, custom configurators, optimized across devices",
        cta: "Get Started",
        ctaHref: "/contact",
        features: [
          "Full 3D interactive experience",
          "Custom configurators",
          "Optimized across devices",
        ],
      },
    ],
    addonsTitle: "Add-on Services",
    addons: [
      { title: "3D Modeling", note: "Custom 3D assets & environments" },
      { title: "Animations", note: "Advanced motion graphics" },
      { title: "VR/AR Integration", note: "Immersive reality features" },
    ],
  },
  {
    key: "crm",
    label: "Custom CRM",
    plans: [
      {
        tier: "starter",
        name: "Starter",
        price: "₹45,000 – ₹65,000",
        period: "one-time",
        tagline: "Lead & contact management, single branch, basic reporting, up to 5 logins",
        cta: "Get Started",
        ctaHref: "/contact",
        features: [
          "Lead & contact management",
          "Single branch",
          "Basic reporting",
          "Up to 5 logins",
        ],
      },
      {
        tier: "growth",
        name: "Growth",
        price: "₹90,000 – ₹1,40,000",
        period: "one-time",
        tagline: "Multi-user roles, WhatsApp/email automation, follow-up tracking, up to 15 logins",
        cta: "Get Started",
        ctaHref: "/contact",
        features: [
          "Multi-user roles",
          "WhatsApp/email automation",
          "Follow-up tracking",
          "Up to 15 logins",
        ],
      },
      {
        tier: "premium",
        name: "Premium",
        price: "₹2,00,000 – ₹3,50,000+",
        period: "one-time",
        tagline: "Multi-branch support, advanced workflow automation, custom modules, unlimited users",
        cta: "Get Started",
        ctaHref: "/contact",
        features: [
          "Multi-branch support",
          "Advanced workflow automation",
          "Custom modules",
          "Unlimited users",
        ],
      },
    ],
    addonsTitle: "CRM Add-ons",
    addons: [
      { title: "AI Chatbot", note: "From ₹15,000" },
      { title: "WhatsApp Integration", note: "From ₹10,000" },
      { title: "Email Automation", note: "From ₹10,000" },
      { title: "Mobile App", note: "From ₹80,000" },
    ],
  },
  {
    key: "app",
    label: "App development",
    plans: [
      {
        tier: "starter",
        name: "Starter (MVP)",
        price: "₹75,000 – ₹1,25,000",
        period: "one-time",
        tagline: "Single platform (Android or hybrid), core features only, basic admin panel",
        cta: "Get Started",
        ctaHref: "/contact",
        features: [
          "Single platform (Android or hybrid)",
          "Core features only",
          "Basic admin panel",
        ],
      },
      {
        tier: "growth",
        name: "Growth",
        price: "₹1,60,000 – ₹2,60,000",
        period: "one-time",
        tagline: "Android + iOS cross-platform, backend/database, payment gateway, push notifications",
        cta: "Get Started",
        ctaHref: "/contact",
        features: [
          "Android + iOS cross-platform",
          "Backend/database",
          "Payment gateway",
          "Push notifications",
        ],
      },
      {
        tier: "premium",
        name: "Premium",
        price: "₹3,20,000 – ₹5,50,000+",
        period: "one-time",
        tagline: "Real-time features (chat/live tracking/booking), scalable backend, admin analytics",
        cta: "Get Started",
        ctaHref: "/contact",
        features: [
          "Real-time features (chat/live tracking/booking)",
          "Scalable backend",
          "Admin analytics",
        ],
      },
    ],
    addonsTitle: "App Add-ons",
    addons: [
      { title: "Admin Dashboard", note: "From ₹25,000" },
      { title: "API Integration", note: "From ₹15,000" },
      { title: "Maintenance", note: "From ₹10,000/month" },
    ],
  },
  {
    key: "ecommerce",
    label: "E-commerce website (Shopify)",
    plans: [
      {
        tier: "starter",
        name: "Starter",
        price: "₹28,000 – ₹42,000",
        period: "one-time",
        tagline: "Shopify setup, premium theme customization, up to 25 products, payment/shipping setup",
        cta: "Get Started",
        ctaHref: "/contact",
        features: [
          "Shopify setup",
          "Premium theme customization",
          "Up to 25 products",
          "Payment/shipping setup",
        ],
      },
      {
        tier: "growth",
        name: "Growth",
        price: "₹55,000 – ₹85,000",
        period: "one-time",
        tagline: "Custom-themed design, unlimited products, abandoned cart + email automation, basic SEO",
        cta: "Get Started",
        ctaHref: "/contact",
        features: [
          "Custom-themed design",
          "Unlimited products",
          "Abandoned cart + email automation",
          "Basic SEO",
        ],
      },
      {
        tier: "premium",
        name: "Premium",
        price: "₹1,10,000 – ₹1,80,000",
        period: "one-time",
        tagline: "Fully custom Shopify build, multi-currency/language, advanced automation, priority support",
        cta: "Get Started",
        ctaHref: "/contact",
        features: [
          "Fully custom Shopify build",
          "Multi-currency/language",
          "Advanced automation",
          "Priority support",
        ],
      },
    ],
    addonsTitle: "E-commerce Add-ons",
    addons: [
      { title: "Product Photography", note: "From ₹5,000" },
      { title: "SEO Package", note: "From ₹15,000" },
      { title: "Social Integration", note: "From ₹8,000" },
    ],
  },
  {
    key: "social-media",
    label: "Social media management",
    plans: [
      {
        tier: "starter",
        name: "Starter",
        price: "₹12,000 – ₹18,000",
        period: "/mo",
        tagline: "2 platforms, 12 posts/month, basic graphic design, monthly report",
        cta: "Get Started",
        ctaHref: "/contact",
        features: [
          "2 platforms",
          "12 posts/month",
          "Basic graphic design",
          "Monthly report",
        ],
      },
      {
        tier: "growth",
        name: "Growth",
        price: "₹25,000 – ₹38,000",
        period: "/mo",
        tagline: "3 platforms, daily posting, reels/short video, DM/comment management, monthly strategy call",
        cta: "Get Started",
        ctaHref: "/contact",
        features: [
          "3 platforms",
          "Daily posting",
          "Reels/short video",
          "DM/comment management",
          "Monthly strategy call",
        ],
      },
      {
        tier: "premium",
        name: "Premium",
        price: "₹45,000 – ₹75,000",
        period: "/mo",
        tagline: "Full-platform coverage, paid ad management, influencer coordination, in-depth analytics",
        cta: "Get Started",
        ctaHref: "/contact",
        features: [
          "Full-platform coverage",
          "Paid ad management",
          "Influencer coordination",
          "In-depth analytics",
        ],
      },
    ],
    addonsTitle: "Social Media Add-ons",
    addons: [
      { title: "Content Shoot", note: "From ₹15,000" },
      { title: "Ad Management", note: "From ₹10,000/month" },
      { title: "Influencer Campaign", note: "Custom quote" },
    ],
  },
  {
    key: "content",
    label: "Content creation",
    plans: [
      {
        tier: "starter",
        name: "Starter",
        price: "₹15,000 – ₹25,000",
        period: "one-time",
        tagline: "Half-day shoot, 15–20 edited photos, 1 basic reel, 1 revision",
        cta: "Get Started",
        ctaHref: "/contact",
        features: [
          "Half-day shoot",
          "15–20 edited photos",
          "1 basic reel",
          "1 revision",
        ],
      },
      {
        tier: "growth",
        name: "Growth",
        price: "₹35,000 – ₹55,000",
        period: "one-time",
        tagline: "Full-day shoot, 30+ photos, 3–4 reels, basic brand graphics, 2 revisions",
        cta: "Get Started",
        ctaHref: "/contact",
        features: [
          "Full-day shoot",
          "30+ photos",
          "3–4 reels",
          "Basic brand graphics",
          "2 revisions",
        ],
      },
      {
        tier: "premium",
        name: "Premium",
        price: "₹75,000 – ₹1,25,000",
        period: "one-time",
        tagline: "Multi-day shoot, brand film (2–3 min), drone footage, full asset library",
        cta: "Get Started",
        ctaHref: "/contact",
        features: [
          "Multi-day shoot",
          "Brand film (2–3 min)",
          "Drone footage",
          "Full asset library",
        ],
      },
    ],
    addonsTitle: "Content Add-ons",
    addons: [
      { title: "Drone Coverage", note: "From ₹20,000" },
      { title: "Video Editing", note: "From ₹10,000" },
      { title: "Brand Guidelines", note: "From ₹15,000" },
    ],
  },
];

function PlanCard({
  plan,
  index,
  isRecommended,
}: {
  plan: Plan;
  index: number;
  isRecommended: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(my, [0, 1], [7, -7]), {
    stiffness: 160,
    damping: 16,
  });
  const rotateY = useSpring(useTransform(mx, [0, 1], [-7, 7]), {
    stiffness: 160,
    damping: 16,
  });

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

  const hi = isRecommended;

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      initial={{ opacity: 0, y: 26 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      className={[
        "group relative overflow-hidden rounded-2xl border p-6 md:p-7",
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
            ? "radial-gradient(closest-side, rgba(255,255,255,0.55), rgba(180,180,255,0.15), transparent)"
            : "radial-gradient(closest-side, rgba(79,70,229,0.8), rgba(124,58,237,0.35), transparent)",
        }}
      />

      {/* Recommended badge */}
      {hi && (
        <span
          className="absolute left-1/2 top-4 z-20 -translate-x-1/2 rounded-full bg-white px-3.5 py-1 text-[11px] font-bold text-black"
          style={{
            fontFamily: "Geist, sans-serif",
            transform: "translateX(-50%) translateZ(60px)",
          }}
        >
          ★ Recommended
        </span>
      )}

      <div className="relative z-10" style={{ transform: "translateZ(40px)" }}>
        <p
          className={`text-[15px] font-medium ${
            hi ? "mt-5" : ""
          } text-white/85`}
          style={{ fontFamily: "Hanken Grotesk, sans-serif" }}
        >
          {plan.name}
        </p>
        {plan.tagline && (
          <p
            className="mt-1 text-[12px] leading-snug text-white/45"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            {plan.tagline}
          </p>
        )}
        <div className="mt-3 flex items-end gap-1">
          <span
            className="text-[42px] font-semibold leading-none text-white"
            style={{ fontFamily: "Hanken Grotesk, sans-serif" }}
          >
            {plan.price}
          </span>
          <span className="mb-1 text-sm text-white/55">{plan.period}</span>
        </div>

        <div className="my-5 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.25em] text-white/35">
          <span className="h-px flex-1 bg-white/10" />
          Includes
          <span className="h-px flex-1 bg-white/10" />
        </div>

        <ul className="space-y-3">
          {plan.features.map((f) => (
            <li
              key={f}
              className="flex items-start gap-2.5 text-[13px] leading-snug text-white/70"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              <Check size={15} className="mt-[2px] shrink-0 text-emerald-400" />
              {f}
            </li>
          ))}
        </ul>

        <Link
          href={plan.ctaHref}
          className={[
            "mt-7 block w-full rounded-full py-3 text-center text-[14px] font-semibold transition-all duration-300",
            hi
              ? "bg-white text-black hover:bg-white/90"
              : "border border-white/20 text-white hover:border-white/40 hover:bg-white/5",
          ].join(" ")}
          style={{ fontFamily: "Geist, sans-serif" }}
        >
          {plan.cta}
        </Link>
      </div>
    </motion.div>
  );
}

export default function PricingSection() {
  const [serviceKey, setServiceKey] = useState(SERVICES[0].key);
  const [businessType, setBusinessType] = useState<BusinessType>("other");
  const active = SERVICES.find((s) => s.key === serviceKey) ?? SERVICES[0];
  const recommendedTier = RECOMMENDATION_MAP[businessType];

  return (
    <section
      className="relative overflow-hidden bg-[#0a0618] py-[80px] text-white md:py-[120px]"
    >
      {/* Ambient purple space glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 right-0 h-[440px] w-[560px] rounded-full bg-[#7c3aed]/25 blur-[150px]" />
        <div className="absolute top-1/3 left-0 h-[380px] w-[520px] rounded-full bg-[#4f46e5]/20 blur-[150px]" />
      </div>

      {/* Big glowing planet curve at the bottom */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center overflow-hidden">
        <div
          className="relative top-[46%] aspect-square w-[150vw] max-w-[2200px] rounded-full"
          style={{
            background:
              "radial-gradient(circle at 50% 0%, #3a1c7a 0%, #1a0d40 34%, #0a0618 62%)",
            boxShadow:
              "inset 0 70px 140px -40px rgba(167,110,255,0.9), 0 -20px 120px -10px rgba(139,92,246,0.55)",
            border: "1px solid rgba(167,110,255,0.45)",
          }}
        />
        {/* Bright rim highlight */}
        <div
          className="absolute top-[46%] h-[3px] w-[70%] -translate-y-[1px] rounded-full blur-[2px]"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(200,160,255,0.9), transparent)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1200px] px-[24px] md:px-[40px]">
        {/* Header + dropdowns */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2
              className="font-semibold leading-[1.05] tracking-tight"
              style={{
                fontFamily: "Hanken Grotesk, sans-serif",
                fontSize: "clamp(36px, 4.6vw, 60px)",
              }}
            >
              Simple, Transparent
              <br /> &amp; Fair Pricing
            </h2>
            <p
              className="mt-4 max-w-md text-white/60"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "clamp(14px, 1.1vw, 16px)",
              }}
            >
              High-quality websites, 3D experiences &amp; custom CRM solutions
              that drive results.
            </p>
          </div>

          {/* Dual dropdowns */}
          <div className="flex flex-col sm:flex-row items-start sm:items-end gap-3 sm:gap-4">
            {/* Service dropdown */}
            <div className="flex items-center gap-2">
              <span
                className="hidden text-xs uppercase tracking-widest text-white/40 sm:block"
                style={{ fontFamily: "Geist, sans-serif" }}
              >
                Pricing for
              </span>
              <div className="relative">
                <select
                  value={serviceKey}
                  onChange={(e) => setServiceKey(e.target.value)}
                  aria-label="Choose a service"
                  className="cursor-pointer appearance-none rounded-full border border-white/15 bg-white/5 py-2.5 pe-11 ps-5 text-sm font-medium text-white outline-none transition-colors hover:border-white/30 focus:border-[#7c3aed] focus:ring-2 focus:ring-[#7c3aed]/40"
                  style={{ fontFamily: "Geist, sans-serif" }}
                >
                  {SERVICES.map((s) => (
                    <option
                      key={s.key}
                      value={s.key}
                      className="bg-[#0d0d15] text-white"
                    >
                      {s.label}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  size={16}
                  className="pointer-events-none absolute end-4 top-1/2 -translate-y-1/2 text-white/60"
                />
              </div>
            </div>

            {/* Business type dropdown */}
            <div className="flex items-center gap-2">
              <span
                className="hidden text-xs uppercase tracking-widest text-white/40 sm:block"
                style={{ fontFamily: "Geist, sans-serif" }}
              >
                Required for
              </span>
              <div className="relative">
                <select
                  value={businessType}
                  onChange={(e) =>
                    setBusinessType(e.target.value as BusinessType)
                  }
                  aria-label="Choose your business type"
                  className="cursor-pointer appearance-none rounded-full border border-white/15 bg-white/5 py-2.5 pe-11 ps-5 text-sm font-medium text-white outline-none transition-colors hover:border-white/30 focus:border-[#7c3aed] focus:ring-2 focus:ring-[#7c3aed]/40"
                  style={{ fontFamily: "Geist, sans-serif" }}
                >
                  {BUSINESS_TYPES.map((b) => (
                    <option
                      key={b.value}
                      value={b.value}
                      className="bg-[#0d0d15] text-white"
                    >
                      {b.label}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  size={16}
                  className="pointer-events-none absolute end-4 top-1/2 -translate-y-1/2 text-white/60"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Plans + add-ons — animate when selections change */}
        <div className="mt-12" style={{ perspective: "1200px" }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={`${serviceKey}-${businessType}`}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <div className="grid gap-6 md:grid-cols-3 md:items-center">
                {active.plans.map((plan, i) => (
                  <PlanCard
                    key={`${serviceKey}-${plan.tier}`}
                    plan={plan}
                    index={i}
                    isRecommended={plan.tier === recommendedTier}
                  />
                ))}
              </div>

              {/* Add-on services */}
              <div className="mt-14">
                <div className="mb-6 flex items-center justify-center gap-3">
                  <span className="h-px w-10 bg-white/15" />
                  <h3
                    className="text-center text-[18px] font-bold text-white md:text-[22px]"
                    style={{ fontFamily: "Hanken Grotesk, sans-serif" }}
                  >
                    {active.addonsTitle}
                  </h3>
                  <span className="h-px w-10 bg-white/15" />
                </div>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
                  {active.addons.map((a) => (
                    <div
                      key={a.title}
                      className="group relative rounded-xl border border-white/10 bg-white/[0.03] p-4 text-center transition-all hover:border-white/25 hover:bg-white/[0.06] backdrop-blur-sm"
                    >
                      {/* Blur glow effect on hover */}
                      <div className="pointer-events-none absolute inset-0 rounded-xl bg-[#7c3aed]/10 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />
                      <div className="relative z-10">
                        <span className="mx-auto mb-2.5 grid h-9 w-9 place-items-center rounded-lg bg-[#7c3aed]/20 text-[#c4b5fd]">
                          <Plus size={16} />
                        </span>
                        <p
                          className="text-[13px] font-semibold leading-snug text-white"
                          style={{ fontFamily: "Hanken Grotesk, sans-serif" }}
                        >
                          {a.title}
                        </p>
                        {a.note && (
                          <p
                            className="mt-1 text-[11px] text-white/45"
                            style={{ fontFamily: "Inter, sans-serif" }}
                          >
                            {a.note}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
