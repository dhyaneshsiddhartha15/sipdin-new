"use client";

/**
 * AiProcessTimeline — Bento box style process grid
 * Modern grid layout with varied card sizes showcasing the 6-step AI development process
 */

import { motion } from "framer-motion";
import { useLayoutEffect, useRef } from "react";
import { Check, ArrowRight, Target, BarChart3, Zap, Shield, Users, Rocket } from "lucide-react";

// Bento grid process data with proper card hierarchy and dark mode colors
const BENTO_ITEMS = [
  {
    id: 1,
    phase: "01",
    title: "Discovery & Strategy",
    description: "Understanding your business and AI opportunities",
    type: "wide",
    icon: Target,
    background: "bg-white/[0.98]",
    features: ["Goals assessment", "AI opportunity mapping", "ROI projections"]
  },
  {
    id: 2,
    phase: "02",
    title: "Data Foundation",
    description: "Building your RAG knowledge base",
    type: "standard",
    icon: BarChart3,
    background: "bg-white/[0.98]",
    metric: "Data Sources Integrated"
  },
  {
    id: 3,
    phase: "03",
    title: "Model Training",
    description: "Custom AI for your business",
    type: "standard",
    icon: Zap,
    background: "bg-white/[0.98]",
    metric: "Models Deployed"
  },
  {
    id: 4,
    phase: "04",
    title: "System Integration",
    description: "Connecting all your tools seamlessly",
    type: "standard",
    icon: Shield,
    background: "bg-white/[0.98]",
    metric: "APIs Connected"
  },
  {
    id: 5,
    phase: "05",
    title: "Testing & Quality",
    description: "Rigorous validation and optimization",
    type: "standard",
    icon: Users,
    background: "bg-white/[0.98]",
    metric: "Test Scenarios"
  },
  {
    id: 6,
    phase: "06",
    title: "Launch & Scale",
    description: "Deploy with ongoing support",
    type: "wide-cta",
    icon: Rocket,
    background: "bg-white/[0.98]",
    cta: "Start Your AI Journey"
  }
];

// Premium bento card component with subtle styling
function BentoCard({
  item,
  index
}: {
  item: typeof BENTO_ITEMS[0];
  index: number;
}) {
  const Icon = item.icon;

  // Grid placement based on card type - simple 3-row layout
  const getGridClass = () => {
    switch (item.type) {
      case "wide":
        return "lg:col-span-2";
      case "wide-cta":
        return "lg:col-span-3";
      case "standard":
        return "lg:col-span-1";
      default:
        return "lg:col-span-1";
    }
  };

  // Height based on card type
  const getMinHeight = () => {
    switch (item.type) {
      case "wide":
        return "min-h-[180px]";
      case "wide-cta":
        return "min-h-[160px]";
      case "standard":
        return "min-h-[180px]";
      default:
        return "min-h-[180px]";
    }
  };

  return (
    <motion.div
      className={`bento-item ${getGridClass()} relative overflow-hidden rounded-2xl ${item.background} ${getMinHeight()} p-5 lg:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
      style={{
        border: "1px solid rgba(255,255,255,0.1)",
        boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.03)",
      }}
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] as any }}
      whileHover={{ boxShadow: "0 4px 16px rgba(0,0,0,0.08)" }}
    >
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-start">
        {/* Step number pill */}
        <div className="mb-4 inline-flex items-center rounded-full bg-white/90 px-3 py-1.5 shadow-sm">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-700">
            {item.phase}
          </span>
        </div>

        {/* Icon container */}
        <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-sm">
          <Icon size={20} className="text-gray-700" />
        </div>

        {/* Title and description */}
        <h3 className="text-[18px] font-bold leading-tight text-gray-900 mb-2" style={{ fontFamily: "Hanken Grotesk, sans-serif" }}>
          {item.title}
        </h3>
        <p className="text-[13px] leading-relaxed text-gray-600 mb-4">
          {item.description}
        </p>

        {/* Features for dominant card - positioned toward lower portion */}
        {item.features && item.type === "dominant" && (
          <div className="mt-auto space-y-2.5 pt-6">
            {item.features.map((feature, i) => (
              <div key={i} className="flex items-center gap-2.5 text-[13px] text-gray-700">
                <Check size={14} className="text-blue-600 flex-shrink-0" strokeWidth={2.5} />
                <span className="font-medium">{feature}</span>
              </div>
            ))}
          </div>
        )}

        {/* Metric for compact cards - visually stronger */}
        {item.metric && item.type !== "dominant" && (
          <div className="mt-auto pt-3">
            <div className="text-[11px] text-gray-500 mb-1.5 uppercase tracking-wide font-medium">{item.metric}</div>
            <div className="text-[28px] font-bold text-gray-900 leading-none">12+</div>
          </div>
        )}

        {/* CTA for wide launch card */}
        {item.cta && (
          <motion.a
            href="#contact"
            className="mt-auto inline-flex items-center justify-center gap-2 w-full px-6 py-3 rounded-full bg-gradient-to-r from-[#4169E1] to-[#3b5dbd] text-white text-[14px] font-semibold shadow-md transition-all duration-300 hover:shadow-lg hover:from-[#3b5dbd] hover:to-[#2e4aa8]"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
            {item.cta}
            <ArrowRight size={16} />
          </motion.a>
        )}
      </div>
    </motion.div>
  );
}

export default function AiProcessTimeline() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={sectionRef}
      className="relative bg-bg py-24 md:py-32 px-6 md:px-[80px]"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {/* Section Header */}
      <div className="mx-auto max-w-[1440px] mb-16">
        <motion.div
          className="text-center space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as any }}
        >
          <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.35em] text-[#4169E1]">
            Our Process
          </span>
          <h2
            className="text-[36px] md:text-[46px] font-bold leading-tight text-white"
            style={{ fontFamily: "Hanken Grotesk, sans-serif" }}
          >
            How We Build AI That Works
          </h2>
          <p className="text-[15px] md:text-[16px] text-white/70 max-w-[580px] mx-auto leading-relaxed">
            A proven, systematic approach to developing AI solutions that
            deliver measurable business results.
          </p>
        </motion.div>
      </div>

      {/* Premium Bento Grid - 3-row layout */}
      <div className="mx-auto max-w-[1200px]">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-5 auto-rows-auto">
          {/* Row 1: Discovery (2 cols) + Data Foundation (1 col) */}
          <div className="col-span-1 lg:col-span-2">
            <BentoCard item={BENTO_ITEMS[0]} index={0} />
          </div>
          <div className="col-span-1">
            <BentoCard item={BENTO_ITEMS[1]} index={1} />
          </div>

          {/* Row 2: Model Training + System Integration + Testing Quality (all 1 col each) */}
          <div className="col-span-1">
            <BentoCard item={BENTO_ITEMS[2]} index={2} />
          </div>
          <div className="col-span-1">
            <BentoCard item={BENTO_ITEMS[3]} index={3} />
          </div>
          <div className="col-span-1">
            <BentoCard item={BENTO_ITEMS[4]} index={4} />
          </div>

          {/* Row 3: Launch & Scale (3 cols - full width) */}
          <div className="col-span-1 lg:col-span-3">
            <BentoCard item={BENTO_ITEMS[5]} index={5} />
          </div>
        </div>
      </div>
    </section>
  );
}