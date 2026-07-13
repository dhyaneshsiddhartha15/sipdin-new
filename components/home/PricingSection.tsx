"use client";

/**
 * PricingSection — dark, glowing 3D pricing block with a service dropdown.
 * Selecting a service (Website Development / CRM) swaps the three plans plus the
 * add-on strip with an animated transition. Cards have a top glow, a highlighted
 * "Most Popular" plan, and a subtle mouse-driven 3D tilt (framer-motion).
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

type Plan = {
  name: string;
  price: string;
  period: string;
  tagline?: string;
  features: string[];
  highlighted?: boolean;
  badge?: string;
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

const SERVICES: Service[] = [
  {
    key: "web",
    label: "Website Development",
    plans: [
      {
        name: "Starter",
        price: "$150",
        period: "/project",
        tagline: "Ideal for startups & small businesses",
        cta: "Get Started",
        ctaHref: "/pricing",
        features: [
          "Up to 5 Pages (2D or 3D Website)",
          "Responsive Design (Mobile, Tablet, Desktop)",
          "Contact Form Integration",
          "Basic SEO Setup",
          "1 Year Free Hosting",
          "1 Year Free Domain",
          "1 Revision Round",
          "6 Months Free Support",
        ],
      },
      {
        name: "Business",
        price: "$250",
        period: "/project",
        tagline: "Perfect for growing businesses",
        highlighted: true,
        badge: "Most Popular",
        cta: "Get Started",
        ctaHref: "/pricing",
        features: [
          "Up to 10 Pages (2D or 3D Website)",
          "E-commerce Functionality",
          "CMS / Admin Panel",
          "Advanced SEO & Speed Optimization",
          "1 Year Free Hosting",
          "1 Year Free Domain",
          "3 Revision Rounds",
          "6 Months Free Support",
        ],
      },
      {
        name: "Custom",
        price: "Custom",
        period: "/project",
        tagline: "For large-scale & custom requirements",
        cta: "Contact Us",
        ctaHref: "/contact",
        features: [
          "Unlimited Pages (2D or 3D Website)",
          "Custom Features & Functionalities",
          "E-commerce / Multi-vendor / Booking",
          "Web Application Development",
          "Priority Support",
          "Dedicated Project Manager",
          "Unlimited Revisions",
          "Hosting & Domain (As per Requirement)",
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
    key: "crm",
    label: "CRM",
    plans: [
      {
        name: "Starter CRM",
        price: "$499",
        period: "one-time",
        tagline: "Perfect for small businesses",
        cta: "Get Started",
        ctaHref: "/pricing",
        features: [
          "Customer Management",
          "Lead Management",
          "Login & Role Management",
          "Dashboard",
          "Basic Reports",
          "Responsive Design",
          "Email Notifications",
        ],
      },
      {
        name: "Business CRM",
        price: "$1,499",
        period: "one-time",
        tagline: "Built for growing businesses",
        highlighted: true,
        badge: "Most Popular",
        cta: "Get Started",
        ctaHref: "/pricing",
        features: [
          "Everything in Starter, plus:",
          "Appointment Booking",
          "Invoice & Billing",
          "Employee Management",
          "Sales Pipeline",
          "Analytics Dashboard",
          "Email & WhatsApp Integration",
          "Custom Reports",
        ],
      },
      {
        name: "Enterprise CRM",
        price: "Custom",
        period: "quote",
        tagline: "For businesses with unique workflows",
        cta: "Contact Us",
        ctaHref: "/contact",
        features: [
          "Multi-branch CRM",
          "ERP Integration",
          "AI Automation",
          "Customer Portals",
          "Mobile App",
          "API Integrations",
          "Advanced Dashboards",
          "Custom Workflow Automation",
        ],
      },
    ],
    addonsTitle: "Power-Up Your CRM with Add-ons",
    addons: [
      { title: "AI Chatbot Integration", note: "From $199" },
      { title: "WhatsApp Integration", note: "From $99" },
      { title: "Email Automation", note: "From $99" },
      { title: "Mobile App (Android / iOS)", note: "From $999" },
      { title: "Appointment Booking", note: "From $149" },
      { title: "Invoice & Billing Module", note: "From $199" },
      { title: "Advanced Reports", note: "From $199" },
      { title: "Inventory Management", note: "From $299" },
      { title: "API & Custom Integrations", note: "From $149" },
      { title: "Annual Maintenance & Support", note: "From $49/month" },
    ],
  },
];

function PlanCard({ plan, index }: { plan: Plan; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(my, [0, 1], [7, -7]), { stiffness: 160, damping: 16 });
  const rotateY = useSpring(useTransform(mx, [0, 1], [-7, 7]), { stiffness: 160, damping: 16 });

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

  const hi = plan.highlighted;

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

      {/* Most Popular badge */}
      {plan.badge && (
        <span
          className="absolute left-1/2 top-4 z-20 -translate-x-1/2 rounded-full bg-white px-3.5 py-1 text-[11px] font-bold text-black"
          style={{ fontFamily: "Geist, sans-serif", transform: "translateX(-50%) translateZ(60px)" }}
        >
          ★ {plan.badge}
        </span>
      )}

      <div className="relative z-10" style={{ transform: "translateZ(40px)" }}>
        <p className={`text-[15px] font-medium ${plan.badge ? "mt-5" : ""} text-white/85`} style={{ fontFamily: "Hanken Grotesk, sans-serif" }}>
          {plan.name}
        </p>
        {plan.tagline && (
          <p className="mt-1 text-[12px] leading-snug text-white/45" style={{ fontFamily: "Inter, sans-serif" }}>
            {plan.tagline}
          </p>
        )}
        <div className="mt-3 flex items-end gap-1">
          <span className="text-[42px] font-semibold leading-none text-white" style={{ fontFamily: "Hanken Grotesk, sans-serif" }}>
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
            <li key={f} className="flex items-start gap-2.5 text-[13px] leading-snug text-white/70" style={{ fontFamily: "Inter, sans-serif" }}>
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
  const active = SERVICES.find((s) => s.key === serviceKey) ?? SERVICES[0];

  return (
    <section className="relative overflow-hidden bg-[#0a0618] py-[80px] text-white md:py-[120px]">
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
          style={{ background: "linear-gradient(90deg, transparent, rgba(200,160,255,0.9), transparent)" }}
        />
      </div>

      <div className="relative mx-auto max-w-[1200px] px-[24px] md:px-[40px]">
        {/* Header + dropdown */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2
              className="font-semibold leading-[1.05] tracking-tight"
              style={{ fontFamily: "Hanken Grotesk, sans-serif", fontSize: "clamp(36px, 4.6vw, 60px)" }}
            >
              Simple, Transparent
              <br /> &amp; Fair Pricing
            </h2>
            <p className="mt-4 max-w-md text-white/60" style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(14px, 1.1vw, 16px)" }}>
              High-quality websites, 3D experiences &amp; custom CRM solutions that drive results.
            </p>
          </div>

          {/* Service dropdown */}
          <div className="flex items-center gap-3">
            <span className="hidden text-xs uppercase tracking-widest text-white/40 sm:block" style={{ fontFamily: "Geist, sans-serif" }}>
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
                  <option key={s.key} value={s.key} className="bg-[#0d0d15] text-white">
                    {s.label}
                  </option>
                ))}
              </select>
              <ChevronDown size={16} className="pointer-events-none absolute end-4 top-1/2 -translate-y-1/2 text-white/60" />
            </div>
          </div>
        </div>

        {/* Plans + add-ons — animate when the service changes */}
        <div className="mt-12" style={{ perspective: "1200px" }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={serviceKey}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <div className="grid gap-6 md:grid-cols-3 md:items-center">
                {active.plans.map((plan, i) => (
                  <PlanCard key={`${serviceKey}-${plan.name}`} plan={plan} index={i} />
                ))}
              </div>

              {/* Add-on services */}
              <div className="mt-14">
                <div className="mb-6 flex items-center justify-center gap-3">
                  <span className="h-px w-10 bg-white/15" />
                  <h3 className="text-center text-[18px] font-bold text-white md:text-[22px]" style={{ fontFamily: "Hanken Grotesk, sans-serif" }}>
                    {active.addonsTitle}
                  </h3>
                  <span className="h-px w-10 bg-white/15" />
                </div>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
                  {active.addons.map((a) => (
                    <div key={a.title} className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-center transition-colors hover:border-white/25 hover:bg-white/[0.06]">
                      <span className="mx-auto mb-2.5 grid h-9 w-9 place-items-center rounded-lg bg-[#7c3aed]/20 text-[#c4b5fd]">
                        <Plus size={16} />
                      </span>
                      <p className="text-[13px] font-semibold leading-snug text-white" style={{ fontFamily: "Hanken Grotesk, sans-serif" }}>
                        {a.title}
                      </p>
                      {a.note && (
                        <p className="mt-1 text-[11px] text-white/45" style={{ fontFamily: "Inter, sans-serif" }}>
                          {a.note}
                        </p>
                      )}
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
