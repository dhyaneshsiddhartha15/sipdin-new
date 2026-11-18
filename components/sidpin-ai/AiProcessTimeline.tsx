"use client";

/**
 * AiProcessTimeline — AI-themed bento process grid, theme-aware.
 * Light: white cards on a soft blue-tinted background with royal-blue accents.
 * Dark: glassy navy cards on the deep-space background (#050816) with glows.
 */

import { motion } from "framer-motion";
import { useRef } from "react";
import { Check, ArrowRight, Target, BarChart3, Zap, Shield, Users, Rocket } from "lucide-react";

// Bento grid process data
const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const BENTO_ITEMS = [
  {
    id: 1,
    phase: "01",
    title: "Discovery & Strategy",
    description: "Understanding your business and AI opportunities",
    type: "wide",
    icon: Target,
    features: ["Goals assessment", "AI opportunity mapping", "ROI projections"]
  },
  {
    id: 2,
    phase: "02",
    title: "Data Foundation",
    description: "Building your RAG knowledge base",
    type: "standard",
    icon: BarChart3,
    metric: "Data Sources Integrated"
  },
  {
    id: 3,
    phase: "03",
    title: "Model Training",
    description: "Custom AI for your business",
    type: "standard",
    icon: Zap,
    metric: "Models Deployed"
  },
  {
    id: 4,
    phase: "04",
    title: "System Integration",
    description: "Connecting all your tools seamlessly",
    type: "standard",
    icon: Shield,
    metric: "APIs Connected"
  },
  {
    id: 5,
    phase: "05",
    title: "Testing & Quality",
    description: "Rigorous validation and optimization",
    type: "standard",
    icon: Users,
    metric: "Test Scenarios"
  },
  {
    id: 6,
    phase: "06",
    title: "Launch & Scale",
    description: "Deploy with ongoing support",
    type: "wide-cta",
    icon: Rocket,
    cta: "Start Your AI Journey"
  }
];

// Neural-node corner ornament — dots wired by faint lines, like a circuit
function NeuralNodes({ flip = false }: { flip?: boolean }) {
  return (
    <svg
      aria-hidden
      className={`pointer-events-none absolute bottom-3 right-3 h-14 w-24 opacity-25 dark:opacity-40 ${flip ? "scale-x-[-1]" : ""}`}
      viewBox="0 0 96 56"
      fill="none"
    >
      <path d="M6 50 L34 30 L62 38 L90 10" stroke="rgba(110,140,255,0.55)" strokeWidth="1.5" />
      <circle cx="6" cy="50" r="3" fill="#4169e1" />
      <circle cx="34" cy="30" r="4" fill="#6e8cff" />
      <circle cx="62" cy="38" r="3" fill="#4169e1" />
      <circle cx="90" cy="10" r="4" fill="#8fb0ff" />
    </svg>
  );
}

// Premium bento card (theme-aware)
function BentoCard({
  item,
  index
}: {
  item: typeof BENTO_ITEMS[0];
  index: number;
}) {
  const Icon = item.icon;

  // Grid placement based on card type
  const getGridClass = () => {
    switch (item.type) {
      case "wide":
        return "lg:col-span-2";
      case "wide-cta":
        return "lg:col-span-3";
      default:
        return "lg:col-span-1";
    }
  };

  const getMinHeight = () => {
    switch (item.type) {
      case "wide-cta":
        return "min-h-[160px]";
      default:
        return "min-h-[190px]";
    }
  };

  const isCta = item.type === "wide-cta";

  return (
    <motion.div
      className={`bento-item group relative overflow-hidden rounded-2xl ${getGridClass()} ${getMinHeight()} p-6 lg:p-8 transition-all duration-300 hover:-translate-y-2 border bg-white border-line/70 shadow-[0_2px_14px_rgba(20,40,100,0.06)] dark:bg-[#0a0f1e] dark:border-white/10 dark:shadow-[0_8px_32px_rgba(0,0,0,0.35)]`}
      style={
        isCta
          ? undefined
          : { backgroundImage: "linear-gradient(160deg, rgba(65,105,225,0.035) 0%, transparent 55%)" }
      }
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: EASE }}
      whileHover={{
        boxShadow: "0 12px 48px rgba(65,105,225,0.25), 0 0 0 1px rgba(110,140,255,0.4)",
      }}
    >
      {/* CTA card tint (gradient) */}
      {isCta && (
        <div
          aria-hidden
          className="absolute inset-0 bg-[#4169e1]/[0.07] dark:bg-[linear-gradient(135deg,rgba(65,105,225,0.25)_0%,rgba(110,140,255,0.12)_50%,rgba(20,28,58,0.9)_100%)]"
        />
      )}

      {/* Top accent line — brightens on hover */}
      <div className="absolute left-0 top-0 h-[2px] w-0 transition-all duration-500 group-hover:w-full" style={{ background: "linear-gradient(90deg, #4169e1, #8fb0ff)" }} />

      {/* Ghost step numeral */}
      <span
        aria-hidden
        className="pointer-events-none absolute -top-3 right-4 select-none text-[88px] font-extrabold leading-none tracking-tighter opacity-[0.22] dark:opacity-[0.16]"
        style={{
          WebkitTextStroke: "1.5px #6e8cff",
          color: "transparent",
          fontFamily: "Hanken Grotesk, sans-serif",
        }}
      >
        {item.phase}
      </span>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-start">
        {/* Icon tile */}
        <div
          className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl shadow-[0_6px_20px_rgba(65,105,225,0.35)] dark:shadow-[0_6px_20px_rgba(65,105,225,0.4)]"
          style={{ background: "linear-gradient(135deg, #4169e1 0%, #6e8cff 100%)" }}
        >
          <Icon size={22} className="text-white" />
        </div>

        {/* Phase label */}
        <div className="mb-2 inline-flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[#4169e1] dark:bg-[#6e8cff]" />
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#4169e1] dark:text-[#8fb0ff]">
            Phase {item.phase}
          </span>
        </div>

        {/* Title and description */}
        <h3 className="mb-2 text-[20px] font-bold leading-tight text-fg dark:text-white" style={{ fontFamily: "Hanken Grotesk, sans-serif" }}>
          {item.title}
        </h3>
        <p className="mb-5 text-[14px] leading-relaxed text-fg-2 dark:text-white/60">
          {item.description}
        </p>

        {/* Features for wide card */}
        {item.features && item.type === "wide" && (
          <div className="mt-auto grid grid-cols-1 gap-3 pt-4 sm:grid-cols-3 sm:gap-4">
            {item.features.map((feature, i) => (
              <div key={i} className="flex items-center gap-3 text-[14px] font-medium text-fg-2 dark:text-white/80">
                <div
                  className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full shadow-[0_0_12px_rgba(110,140,255,0.45)]"
                  style={{ background: "linear-gradient(135deg, #4169e1, #6e8cff)" }}
                >
                  <Check size={12} className="text-white" strokeWidth={2.5} />
                </div>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        )}

        {/* Metric for compact cards */}
        {item.metric && item.type !== "wide" && !isCta && (
          <div className="mt-auto pt-4">
            <div className="mb-2 text-[11px] font-medium uppercase tracking-wide text-fg-2/80 dark:text-white/50">{item.metric}</div>
            <div
              className="text-[36px] font-bold leading-none"
              style={{
                background: "linear-gradient(135deg, #4169e1 0%, #6e8cff 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                fontFamily: "Hanken Grotesk, sans-serif",
              }}
            >
              12+
            </div>
          </div>
        )}

        {/* CTA for wide launch card */}
        {item.cta && (
          <motion.a
            href="#contact"
            className="mt-auto inline-flex w-full items-center justify-center gap-3 rounded-full px-8 py-4 text-[15px] font-bold text-white shadow-[0_10px_36px_rgba(65,105,225,0.4)] transition-all duration-300 hover:shadow-[0_14px_48px_rgba(110,140,255,0.55)]"
            style={{ background: "linear-gradient(135deg, #4169e1 0%, #6e8cff 100%)" }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {item.cta}
            <ArrowRight size={18} />
          </motion.a>
        )}
      </div>

      {/* Neural corner ornament */}
      <NeuralNodes flip={index % 2 === 1} />
    </motion.div>
  );
}

export default function AiProcessTimeline() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-bg px-6 py-24 md:px-[80px] md:py-32 dark:bg-[#050816]"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {/* Ambient glows — soft in light, vivid in dark */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute -top-32 left-1/4 h-[420px] w-[720px] rounded-full blur-[160px] bg-[#4169e1]/[0.07] dark:bg-[#4169e1]/[0.16]"
        />
        <div
          className="absolute bottom-0 right-1/4 h-[360px] w-[560px] rounded-full blur-[160px] bg-[#6e8cff]/[0.05] dark:bg-[#6e8cff]/[0.10]"
        />
        {/* Faint dot grid */}
        <div
          className="absolute inset-0 hidden dark:block dark:opacity-[0.05]"
          style={{
            backgroundImage: "radial-gradient(rgba(143,176,255,0.9) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.05] dark:hidden"
          style={{
            backgroundImage: "radial-gradient(rgba(35,61,146,0.9) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />
      </div>

      {/* Section Header */}
      <div className="relative z-10 mx-auto mb-16 max-w-[1440px]">
        <motion.div
          className="space-y-6 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.35em] text-[#4169e1] dark:text-[#6e8cff]">
            Our Process
          </span>
          <h2
            className="text-[36px] font-bold leading-tight text-fg dark:text-white md:text-[46px]"
            style={{ fontFamily: "Hanken Grotesk, sans-serif" }}
          >
            How We Build AI That Works
          </h2>
          <p className="mx-auto max-w-[580px] text-[15px] leading-relaxed text-fg-2 dark:text-white/60 md:text-[16px]">
            A proven, systematic approach to developing AI solutions that
            deliver measurable business results.
          </p>
        </motion.div>
      </div>

      {/* Bento Grid */}
      <div className="relative z-10 mx-auto max-w-[1200px]">
        <div className="grid auto-rows-auto grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-5">
          {/* Row 1: Discovery (2 cols) + Data Foundation (1 col) */}
          <div className="col-span-1 lg:col-span-2">
            <BentoCard item={BENTO_ITEMS[0]} index={0} />
          </div>
          <div className="col-span-1">
            <BentoCard item={BENTO_ITEMS[1]} index={1} />
          </div>

          {/* Row 2: Model Training + System Integration + Testing Quality */}
          <div className="col-span-1">
            <BentoCard item={BENTO_ITEMS[2]} index={2} />
          </div>
          <div className="col-span-1">
            <BentoCard item={BENTO_ITEMS[3]} index={3} />
          </div>
          <div className="col-span-1">
            <BentoCard item={BENTO_ITEMS[4]} index={4} />
          </div>

          {/* Row 3: Launch & Scale (full width) */}
          <div className="col-span-1 lg:col-span-3">
            <BentoCard item={BENTO_ITEMS[5]} index={5} />
          </div>
        </div>
      </div>
    </section>
  );
}
