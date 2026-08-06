"use client";

/**
 * AiIndustries — Industries accordion section.
 * Shows where we've deployed production AI systems.
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HeartPulse,
  Landmark,
  ShoppingCart,
  Factory,
  Building2,
  GraduationCap,
  ShieldCheck,
  Truck,
  Film,
  Cpu,
  Plus,
  Minus,
  ChevronRight,
} from "lucide-react";

const INDUSTRIES = [
  {
    id: "healthcare",
    title: "AI in Healthcare & MedTech",
    icon: HeartPulse,
    items: [
      "Clinical AI assistants",
      "EHR NLP summarization",
      "Patient risk stratification",
      "Predictive readmission prevention",
      "Automated prior authorization",
      "HIPAA-compliant data pipelines",
    ],
  },
  {
    id: "fintech",
    title: "AI in Fintech & Banking",
    icon: Landmark,
    items: [
      "Fraud detection & prevention",
      "Credit risk modeling",
      "Algorithmic trading",
      "Customer service automation",
      "KYC/AML compliance",
    ],
  },
  {
    id: "retail",
    title: "AI in E-Commerce & Retail",
    icon: ShoppingCart,
    items: [
      "Personalized recommendations",
      "Demand forecasting",
      "Inventory optimization",
      "Visual search",
      "Dynamic pricing",
    ],
  },
  {
    id: "manufacturing",
    title: "AI in Manufacturing",
    icon: Factory,
    items: [
      "Predictive maintenance",
      "Quality control automation",
      "Supply chain optimization",
      "Production scheduling",
      "Defect detection",
    ],
  },
  {
    id: "realestate",
    title: "AI in Real Estate",
    icon: Building2,
    items: [
      "Property valuation models",
      "Lead qualification chatbots",
      "Virtual property tours",
      "Market trend analysis",
      "Document automation",
    ],
  },
  {
    id: "education",
    title: "AI in Education & EdTech",
    icon: GraduationCap,
    items: [
      "Personalized learning paths",
      "Automated grading",
      "Student engagement tracking",
      "Content generation",
      "Administrative automation",
    ],
  },
  {
    id: "insurance",
    title: "AI in Insurance",
    icon: ShieldCheck,
    items: [
      "Claims automation",
      "Risk assessment",
      "Fraud detection",
      "Underwriting assistance",
      "Customer support bots",
    ],
  },
  {
    id: "logistics",
    title: "AI in Logistics & Supply Chain",
    icon: Truck,
    items: [
      "Route optimization",
      "Demand prediction",
      "Warehouse automation",
      "Fleet management",
      "Delivery tracking",
    ],
  },
  {
    id: "media",
    title: "AI in Media & Entertainment",
    icon: Film,
    items: [
      "Content recommendation",
      "Automated video editing",
      "Personalization engines",
      "Audience analytics",
      "Content moderation",
    ],
  },
  {
    id: "saas",
    title: "AI in SaaS & Technology",
    icon: Cpu,
    items: [
      "Feature automation",
      "User behavior analysis",
      "Churn prediction",
      "Support automation",
      "Data-driven insights",
    ],
  },
];

function AccordionItem({
  industry,
  isOpen,
  onToggle,
}: {
  industry: (typeof INDUSTRIES)[0];
  isOpen: boolean;
  onToggle: () => void;
}) {
  const Icon = industry.icon;

  return (
    <div className="border-b border-line last:border-0">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-5 py-6 text-left transition-all duration-300 hover:bg-fg-3/30"
      >
        <div className="flex items-center gap-4">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#4169E1]/10">
            <Icon size={20} className="text-[#4169E1]" strokeWidth={1.5} />
          </span>
          <span className="text-[17px] font-semibold text-fg">
            {industry.title}
          </span>
        </div>
        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-line">
          {isOpen ? (
            <Minus size={16} className="text-fg" strokeWidth={2} />
          ) : (
            <Plus size={16} className="text-fg" strokeWidth={2} />
          )}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-5 pb-6 pl-[72px]">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                {industry.items.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className="text-[14px] text-fg-2">{item}</span>
                    {index < industry.items.length - 1 && (
                      <span className="text-fg-3">·</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function AiIndustries() {
  const [openId, setOpenId] = useState("healthcare");

  return (
    <section className="bg-bg px-[24px] py-[100px] md:px-[80px]">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 gap-y-16">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-8">
            {/* Heading */}
            <div>
              <h2
                className="text-[46px] font-bold leading-[1.1] text-fg md:text-[52px]"
                style={{ fontFamily: "Hanken Grotesk, sans-serif" }}
              >
                Industries Where We've Built and Deployed Production AI Systems
              </h2>
              <p className="mt-5 max-w-[500px] text-[16px] leading-relaxed text-fg-2">
                From startups to enterprises — we've delivered AI solutions across
                industries that drive real business impact.
              </p>
            </div>

            {/* Image Card */}
            <div className="h-[290px] w-full overflow-hidden rounded-[18px]">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80"
                alt="AI implementation across industries"
                className="h-full w-full object-cover"
              />
            </div>

            {/* CTA Section */}
            <div className="space-y-4">
              <h3
                className="text-[26px] font-semibold text-fg"
                style={{ fontFamily: "Hanken Grotesk, sans-serif" }}
              >
                Looking for a Reliable AI Development Company?
              </h3>
              <p className="max-w-[480px] text-[15px] leading-relaxed text-fg-2">
                Partner with a team that delivers scalable, production-ready AI
                solutions tailored to your business needs — from strategy to
                deployment and beyond.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-3 rounded-full px-8 py-4 text-[15px] font-bold text-white transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: "linear-gradient(100deg, #1E3A8A 0%, #4169E1 55%, #00B8FF 100%)",
                  boxShadow: "0 16px 40px -14px rgba(0,184,255,0.55)",
                }}
              >
                Book A Free Assessment
                <ChevronRight size={18} strokeWidth={2.5} />
              </a>
            </div>
          </div>

          {/* Right Column - Accordion */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-line bg-surface">
              {INDUSTRIES.map((industry) => (
                <AccordionItem
                  key={industry.id}
                  industry={industry}
                  isOpen={openId === industry.id}
                  onToggle={() => setOpenId(openId === industry.id ? "" : industry.id)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
