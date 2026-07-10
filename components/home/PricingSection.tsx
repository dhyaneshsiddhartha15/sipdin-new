"use client";

/**
 * PricingSection — dark, glowing 3D pricing block with a service dropdown.
 * Selecting a service (Website Development / 3D Website / CRM / App Development)
 * swaps the three plans with an animated transition. Cards have a top glow, a
 * highlighted middle plan, and a subtle mouse-driven 3D tilt (framer-motion).
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
import { Check, ChevronDown } from "lucide-react";

type Plan = {
  name: string;
  price: string;
  period: string;
  features: string[];
  highlighted?: boolean;
};

type Service = { key: string; label: string; plans: Plan[] };

/** Discount labels shown per column (Starter / Growth / Enterprise). */
const DISCOUNTS = ["75% off", "Special offer • 80% off", "71% off"];

const SERVICES: Service[] = [
  {
    key: "web",
    label: "Website Development",
    plans: [
      { name: "Starter Plan", price: "$599", period: "/project", features: ["5-page responsive website", "Basic on-page SEO setup", "Contact form integration", "Mobile-first design", "1 revision round"] },
      { name: "Growth Plan", price: "$1,499", period: "/project", highlighted: true, features: ["Up to 15 pages", "Advanced SEO & analytics", "CMS + blog integration", "Speed & performance tuning", "3 revision rounds"] },
      { name: "Enterprise Plan", price: "$3,499", period: "/project", features: ["Unlimited pages", "Custom web-app features", "E-commerce ready", "Priority support & SLA", "Unlimited revisions"] },
    ],
  },
  {
    key: "3d",
    label: "3D Website",
    plans: [
      { name: "Starter Plan", price: "$1,200", period: "/project", features: ["1 interactive 3D scene", "Basic WebGL setup", "Scroll-based animation", "Mobile fallback", "1 revision round"] },
      { name: "Growth Plan", price: "$2,900", period: "/project", highlighted: true, features: ["Up to 4 3D scenes", "Custom shaders & lighting", "Interactive product viewer", "Performance optimization", "3 revision rounds"] },
      { name: "Enterprise Plan", price: "$6,500", period: "/project", features: ["Unlimited 3D scenes", "Real-time configurator", "AR / VR ready", "Dedicated 3D engineer", "Unlimited revisions"] },
    ],
  },
  {
    key: "crm",
    label: "CRM",
    plans: [
      { name: "Starter Plan", price: "$29", period: "/month", features: ["Up to 3 users", "Contact & lead management", "Email integration", "Basic sales pipeline", "Standard support"] },
      { name: "Growth Plan", price: "$79", period: "/month", highlighted: true, features: ["Up to 15 users", "Automation workflows", "Custom pipelines", "Analytics dashboard", "Priority support"] },
      { name: "Enterprise Plan", price: "$199", period: "/month", features: ["Unlimited users", "Advanced automation & AI", "API & custom integrations", "Role-based access control", "Dedicated account manager"] },
    ],
  },
  {
    key: "app",
    label: "App Development",
    plans: [
      { name: "Starter Plan", price: "$2,500", period: "/project", features: ["Single platform (iOS or Android)", "Up to 5 screens", "Basic UI kit", "App store submission", "1 revision round"] },
      { name: "Growth Plan", price: "$6,000", period: "/project", highlighted: true, features: ["Cross-platform (iOS + Android)", "Up to 15 screens", "Custom UI / UX", "Backend + REST API", "3 revision rounds"] },
      { name: "Enterprise Plan", price: "$14,000", period: "/project", features: ["Unlimited screens", "Custom native modules", "Real-time & offline sync", "CI/CD + maintenance", "Dedicated app team"] },
    ],
  },
];

function PlanCard({ plan, index, discount }: { plan: Plan; index: number; discount?: string }) {
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

      {/* Discount label */}
      {discount && (
        <span
          className="absolute right-4 top-4 z-20 rounded-full bg-[#FFD400] px-3 py-1 text-[11px] font-bold text-black shadow-[0_6px_20px_-6px_rgba(255,212,0,0.7)]"
          style={{ fontFamily: "Geist, sans-serif", transform: "translateZ(60px)" }}
        >
          {discount}
        </span>
      )}

      <div className="relative z-10" style={{ transform: "translateZ(40px)" }}>
        <p className="text-[15px] font-medium text-white/85" style={{ fontFamily: "Hanken Grotesk, sans-serif" }}>
          {plan.name}
        </p>
        <div className="mt-1.5 flex items-end gap-1">
          <span className="text-[42px] font-semibold leading-none text-white" style={{ fontFamily: "Hanken Grotesk, sans-serif" }}>
            {plan.price}
          </span>
          <span className="mb-1 text-sm text-white/55">{plan.period}</span>
        </div>

        <div className="my-5 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.25em] text-white/35">
          <span className="h-px flex-1 bg-white/10" />
          Features
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
          href="/pricing"
          className={[
            "mt-7 block w-full rounded-full py-3 text-center text-[14px] font-semibold transition-all duration-300",
            hi
              ? "bg-white text-black hover:bg-white/90"
              : "border border-white/20 text-white hover:border-white/40 hover:bg-white/5",
          ].join(" ")}
          style={{ fontFamily: "Geist, sans-serif" }}
        >
          Learn more
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
              Smart pricing for
              <br /> every stage
            </h2>
            <p className="mt-4 max-w-md text-white/60" style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(14px, 1.1vw, 16px)" }}>
              Find the perfect balance of features, performance, and affordability.
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

        {/* Plans — animate when the service changes */}
        <div className="mt-12" style={{ perspective: "1200px" }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={serviceKey}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="grid gap-6 md:grid-cols-3 md:items-center"
            >
              {active.plans.map((plan, i) => (
                <PlanCard key={`${serviceKey}-${plan.name}`} plan={plan} index={i} discount={DISCOUNTS[i]} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
