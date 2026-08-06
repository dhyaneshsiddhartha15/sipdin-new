"use client";

/**
 * AiPortfolio — Auto-scrolling portfolio section.
 * Showcases case studies we've delivered for clients.
 */

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import AIConsultationModal from "@/components/contact/AIConsultationModal";
import { getAllCaseStudies } from "@/lib/caseStudies";

// Get first 3 case studies for the portfolio
const CASE_STUDIES = getAllCaseStudies().slice(0, 3);

const PROJECTS = CASE_STUDIES.map((cs) => ({
  id: cs.slug,
  name: cs.product,
  subtitle: cs.tag,
  gradient: `linear-gradient(135deg, ${cs.accent} 0%, ${cs.bannerColor || cs.accent}CC 100%)`,
  description: cs.description,
  stats: cs.stats,
  image: cs.heroImage || "https://images.unsplash.com/photo-15566567932-02371d2713ef?w=800&q=80",
  alt: `${cs.product} case study`,
  slug: cs.slug,
}));

function ProjectCard({ project }: { project: (typeof PROJECTS)[0] }) {
  return (
    <motion.div
      className="relative h-[520px] w-[750px] shrink-0 overflow-hidden rounded-[28px] shadow-2xl"
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.3 }}
    >
      {/* Card Background */}
      <div
        className="absolute inset-0"
        style={{ background: project.gradient }}
      />

      {/* Card Content */}
      <div className="relative z-10 grid h-full grid-cols-1 md:grid-cols-[45%_55%]">
        {/* Left Side - Project Info */}
        <div className="flex flex-col justify-center p-10 text-white">
          <span className="text-[13px] font-medium uppercase tracking-wider opacity-90">
            {project.subtitle}
          </span>
          <h3
            className="mt-3 text-[36px] font-bold leading-tight"
            style={{ fontFamily: "Hanken Grotesk, sans-serif" }}
          >
            {project.name}
          </h3>

          <p className="mt-5 line-clamp-3 text-[15px] leading-relaxed opacity-90">
            {project.description}
          </p>

          {/* Stats */}
          <div className="mt-8 grid grid-cols-2 gap-4">
            {project.stats.slice(0, 4).map((stat, index) => (
              <div key={index}>
                <div
                  className="text-[26px] font-bold leading-none"
                  style={{ fontFamily: "Hanken Grotesk, sans-serif" }}
                >
                  {stat.value}
                </div>
                <div className="mt-1 text-[12px] opacity-75">{stat.label}</div>
              </div>
            ))}
          </div>

          <motion.a
            href={`/case-studies/${project.slug}`}
            className="mt-auto inline-flex w-max items-center gap-2 self-start rounded-full bg-white px-6 py-3 text-[14px] font-semibold text-[#1A1730] transition-all duration-300 hover:scale-105 hover:shadow-xl"
            whileHover={{ scale: 1.03 }}
          >
            View Project
            <ArrowRight size={16} strokeWidth={2.5} />
          </motion.a>
        </div>

        {/* Right Side - Mobile Mockup */}
        <div className="relative flex items-center justify-center p-8">
          <motion.div
            className="relative h-[450px] w-[240px] overflow-hidden rounded-[32px] border-4 border-white/20 shadow-2xl"
            whileHover={{ y: -8 }}
            transition={{ duration: 0.4 }}
          >
            <img
              src={project.image}
              alt={project.alt}
              className="h-full w-full object-cover"
            />
            {/* Phone overlay elements */}
            <div className="absolute inset-0 rounded-[28px] border-4 border-black/10" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default function AiPortfolio() {
  const [modalOpen, setModalOpen] = useState(false);

  // Triple projects for seamless infinite scroll (1,2,3,1,2,3,1,2,3...)
  // When animation reaches 1/3, it jumps back to start - creating 3→1→2→3 loop
  const displayProjects = [...PROJECTS, ...PROJECTS, ...PROJECTS];

  return (
    <>
      <section className="relative overflow-hidden bg-bg px-[24px] py-[120px] md:px-[80px]">
        <div className="mx-auto max-w-[1440px]">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <h2
              className="text-[48px] font-bold leading-tight text-fg md:text-[54px]"
              style={{ fontFamily: "Hanken Grotesk, sans-serif" }}
            >
              AI Projects We've Built for Global Clients
            </h2>

            <p className="mx-auto mt-6 max-w-[700px] text-[17px] leading-relaxed text-fg-2">
              We don't just claim to be a top AI company—we prove it with real,
              production-ready results. Here are three AI systems built and deployed
              for real clients.
            </p>
          </div>

          {/* Horizontal Auto-Scrolling Projects */}
          <div
            className="relative"
            style={{
              maskImage:
                "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)",
            }}
          >
            <style>{`
              @keyframes scroll-left {
                0% { transform: translateX(0); }
                100% { transform: translateX(-33.333%); }
              }
              .scroll-container {
                animation: scroll-left 40s linear infinite;
              }
              .scroll-container:hover {
                animation-play-state: paused;
              }
              @media (max-width: 768px) {
                .scroll-container {
                  animation: scroll-left 60s linear infinite;
                }
              }
            `}</style>

            <div className="scroll-container flex gap-7">
              {displayProjects.map((project, index) => (
                <ProjectCard key={`${project.id}-${index}`} project={project} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <AIConsultationModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
