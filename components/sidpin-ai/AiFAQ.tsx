"use client";

/**
 * AiFAQ — FAQ section with CTA and accordion.
 * Supports light and dark modes.
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Check, ArrowRight } from "lucide-react";

const FAQS = [
  {
    id: "timeline",
    question: "How long does an AI project usually take?",
    answer:
      "Project timelines depend on complexity, integrations, and AI model requirements. Most MVPs are delivered within 6–10 weeks, while enterprise solutions follow a phased implementation approach.",
  },
  {
    id: "integration",
    question: "Can you integrate AI into our existing software?",
    answer:
      "Yes, we specialize in integrating AI into your current systems. Whether it's CRM, ERP, or custom platforms, we build APIs and connectors that enable seamless AI functionality without disrupting your workflow.",
  },
  {
    id: "technologies",
    question: "Which AI models and technologies do you work with?",
    answer:
      "We work with leading AI technologies including OpenAI GPT models, Anthropic Claude, open-source LLMs (Llama, Mistral), and proprietary models. We choose the right tech stack based on your specific requirements, budget, and data privacy needs.",
  },
  {
    id: "support",
    question: "Do you offer post-launch maintenance and support?",
    answer:
      "Absolutely. We provide ongoing support including monitoring, performance optimization, model retraining, and feature enhancements. Our retainers ensure your AI systems stay accurate and reliable as your business grows.",
  },
  {
    id: "security",
    question: "How do you ensure security and data privacy?",
    answer:
      "Security is built into every layer. We implement encryption, access controls, audit logs, and comply with regulations like HIPAA and GDPR. Your data stays yours — we never use client data to train public models.",
  },
  {
    id: "custom",
    question: "Can you build custom AI agents for our business?",
    answer:
      "Yes, custom AI agents are our specialty. From customer service chatbots to internal workflow automation, we build agents trained on your business knowledge that handle complex tasks autonomously.",
  },
];

function AccordionItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: (typeof FAQS)[0];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className="rounded-2xl border border-line bg-surface/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
    >
      <button
        onClick={onToggle}
        className="flex w-full items-start gap-4 p-6 text-left"
      >
        <span className="mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-fg-3/30">
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown size={18} className="text-fg" strokeWidth={2} />
          </motion.div>
        </span>
        <div className="flex-1">
          <h4 className="text-[18px] font-semibold text-fg">{faq.question}</h4>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-6 pl-[52px]">
              <p className="text-[16px] leading-relaxed text-fg-2">
                {faq.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function AiFAQ() {
  const [openId, setOpenId] = useState("timeline");

  return (
    <section className="bg-bg px-[24px] py-[120px] md:px-[80px]">
      <div className="mx-auto max-w-[1440px]">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block rounded-full border border-line px-4 py-2 text-[12px] font-semibold uppercase tracking-wider text-fg-2"
          >
            FAQs
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 text-[48px] font-bold leading-tight text-fg md:text-[54px]"
            style={{ fontFamily: "Hanken Grotesk, sans-serif" }}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-6 max-w-[700px] text-[17px] leading-relaxed text-fg-2"
          >
            Everything you need to know about our AI development process, pricing,
            timelines, integrations, deployment, and long-term support.
          </motion.p>
        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-10 lg:gap-16">
          {/* Left Side - CTA (40%) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 space-y-8"
          >
            {/* Label */}
            <span
              className="inline-block text-[14px] font-semibold uppercase tracking-wider"
              style={{ color: "#4169E1" }}
            >
              Need Expert Guidance?
            </span>

            {/* Heading */}
            <h3
              className="text-[36px] font-bold leading-[1.15] text-fg"
              style={{ fontFamily: "Hanken Grotesk, sans-serif" }}
            >
              Let's Build Your
              <br />
              Next{" "}
              <span style={{ color: "#4169E1" }}>
                AI Product
              </span>
              <br />
              Together
            </h3>

            {/* Description */}
            <p className="text-[16px] leading-relaxed text-fg-2">
              From AI strategy and MVP development to enterprise deployment, our
              team helps you launch production-ready AI solutions faster.
            </p>

            {/* CTA Button */}
            <motion.a
              href="#contact"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full px-8 py-4 text-[16px] font-semibold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              style={{
                background: "linear-gradient(100deg, #1E3A8A 0%, #4169E1 55%, #00B8FF 100%)",
                boxShadow: "0 16px 40px -14px rgba(0,184,255,0.55)",
              }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Book a Free Strategy Call
              <motion.span
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <ArrowRight size={20} strokeWidth={2.5} />
              </motion.span>
            </motion.a>

            {/* Trust Indicators */}
            <div className="space-y-3 pt-4">
              {[
                { text: "Free consultation" },
                { text: "Response within 24 hours" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3 text-[15px] text-fg-2"
                >
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-[#4169E1]/10">
                    <Check size={12} className="text-[#4169E1]" strokeWidth={3} />
                  </span>
                  {item.text}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - FAQ Accordion (60%) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6"
          >
            <div className="space-y-4">
              {FAQS.map((faq, index) => (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <AccordionItem
                    faq={faq}
                    isOpen={openId === faq.id}
                    onToggle={() => setOpenId(openId === faq.id ? "" : faq.id)}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
