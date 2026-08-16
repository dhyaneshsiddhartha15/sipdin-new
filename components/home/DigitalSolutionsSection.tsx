"use client";

/**
 * DigitalSolutionsSection — Premium "End-to-End Digital Solutions" section
 * Left: Typography content with CTAs
 * Right: Interactive 3D globe with floating solution nodes
 * Bottom: Glassmorphism feature bar
 */

import { motion } from "framer-motion";
import { ArrowRight, Code, Workflow, Palette, Cloud, BarChart3, Shield } from "lucide-react";
import DigitalSolutionsGlobe from "./DigitalSolutionsGlobe";

const SOLUTIONS = [
  { id: "development", title: "Development", subtitle: "Custom solutions that drive results", Icon: Code },
  { id: "automation", title: "Automation", subtitle: "Streamline processes & boost efficiency", Icon: Workflow },
  { id: "design", title: "Design", subtitle: "User-centric designs that engage", Icon: Palette },
  { id: "cloud", title: "Cloud", subtitle: "Scalable & secure infrastructure", Icon: Cloud },
  { id: "analytics", title: "Analytics", subtitle: "Data insights that power decisions", Icon: BarChart3 },
  { id: "security", title: "Security", subtitle: "Protecting what matters most", Icon: Shield },
];

const FEATURES = [
  {
    title: "Comprehensive",
    description: "Solutions across multiple domains",
    icon: Code
  },
  {
    title: "Reliable",
    description: "Built on trust, security & quality",
    icon: Shield
  },
  {
    title: "Scalable",
    description: "Solutions that grow with your business",
    icon: Cloud
  },
  {
    title: "Results-Driven",
    description: "Focused on measurable impact & success",
    icon: BarChart3
  }
];

function SolutionNode({ solution, index }: { solution: typeof SOLUTIONS[0], index: number }) {
  const Icon = solution.Icon;

  // Position nodes around the globe
  const positions = [
    { top: "10%", left: "75%" },
    { top: "25%", right: "8%" },
    { top: "50%", right: "5%" },
    { bottom: "35%", right: "10%" },
    { bottom: "15%", left: "70%" },
    { bottom: "5%", left: "40%" }
  ];

  const pos = positions[index % positions.length];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="absolute z-20"
      style={{
        [Object.keys(pos)[0] as any]: Object.values(pos)[0],
        [Object.keys(pos)[1] as any]: Object.values(pos)[1]
      }}
    >
      <div className="relative group">
        {/* Connection line to globe */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
          className="absolute origin-left"
          style={{
            width: "60px",
            height: "1px",
            background: "linear-gradient(to right, #4169E1, transparent)",
            top: "50%",
            right: "100%",
          }}
        />

        {/* Node card */}
        <motion.div
          whileHover={{ y: -5, scale: 1.02 }}
          className="bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-5 min-w-[200px] shadow-xl"
          style={{
            boxShadow: "0 0 30px rgba(65,105,225,0.15)"
          }}
        >
          <div className="flex items-center gap-3 mb-2">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, rgba(65,105,225,0.2), rgba(0,184,255,0.1))",
                border: "1px solid rgba(65,105,225,0.3)"
              }}
            >
              <Icon size={18} className="text-blue-400" strokeWidth={2} />
            </div>
            <h4 className="text-white font-semibold text-sm" style={{ fontFamily: "Hanken Grotesk, sans-serif" }}>
              {solution.title}
            </h4>
          </div>
          <p className="text-gray-400 text-xs leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
            {solution.subtitle}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function DigitalSolutionsSection() {
  return (
    <section
      className="relative py-[80px] px-[24px] md:px-[80px] overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #050816 0%, #0a0e1a 50%, #0d1117 100%)",
        fontFamily: "Inter, -apple-system, sans-serif"
      }}
    >
      {/* Background ambient effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[20%] left-[10%] w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(65,105,225,0.08), transparent 70%)",
            filter: "blur(100px)"
          }}
        />
        <div
          className="absolute bottom-[10%] right-[15%] w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(0,184,255,0.06), transparent 70%)",
            filter: "blur(80px)"
          }}
        />
      </div>

      <div className="max-w-[1440px] mx-auto relative z-10 text-left">
        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-16 items-center mb-20">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-8 text-left"
          >
            {/* Eyebrow text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span
                className="inline-block font-semibold tracking-[0.35em] uppercase text-xs"
                style={{ color: "#4169E1", fontFamily: "Geist, sans-serif" }}
              >
                END-TO-END DIGITAL SOLUTIONS
              </span>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-bold leading-[1.1] tracking-tight text-white"
              style={{ fontFamily: "Hanken Grotesk, sans-serif", fontSize: "clamp(36px, 4.5vw, 56px)" }}
            >
              End-to-End Digital
              <br />
              Solutions That{" "}
              <span style={{ color: "#4169E1" }}>
                Drive Growth
              </span>
            </motion.h1>

            {/* Supporting text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-400 text-lg leading-relaxed"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              We deliver comprehensive digital solutions across multiple domains to help businesses
              innovate, scale, and stay ahead in a digital world.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.a
                href="/services"
                className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-[15px] font-semibold text-gray-900 transition-all duration-300 hover:bg-gray-100 hover:scale-[1.02]"
                whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(255,255,255,0.2)" }}
                whileTap={{ scale: 0.98 }}
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Explore All Solutions
                <ArrowRight size={18} strokeWidth={2.5} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right side - Interactive 3D Globe */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative h-[500px] lg:h-[600px]"
          >
            <div className="absolute inset-0">
              <DigitalSolutionsGlobe />
            </div>

            {/* Floating solution nodes */}
            {SOLUTIONS.map((solution, index) => (
              <SolutionNode key={solution.id} solution={solution} index={index} />
            ))}
          </motion.div>
        </div>

        {/* Bottom Feature Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative z-20"
        >
          <div
            className="rounded-2xl border border-gray-700/50 backdrop-blur-xl px-8 py-10"
            style={{
              background: "rgba(17, 24, 39, 0.6)",
              boxShadow: "0 20px 50px rgba(0, 0, 0, 0.3)"
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {FEATURES.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="flex-shrink-0">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                        style={{
                          background: "linear-gradient(135deg, rgba(65,105,225,0.15), rgba(0,184,255,0.08))",
                          border: "1px solid rgba(65,105,225,0.25)"
                        }}
                      >
                        <Icon size={22} className="text-blue-400" strokeWidth={2} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold mb-1" style={{ fontFamily: "Hanken Grotesk, sans-serif" }}>
                        {feature.title}
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
                        {feature.description}
                      </p>
                    </div>

                    {/* Vertical separator (except for last item) */}
                    {index < FEATURES.length - 1 && (
                      <div
                        className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-gradient-to-b from-transparent via-gray-700 to-transparent"
                        style={{
                          right: `${((index + 1) * 25)}%`
                        }}
                      />
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}