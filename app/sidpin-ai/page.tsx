import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Reveal from "@/components/studio/Reveal";
import AiCloudCTA from "@/components/home/AiCloudCTA";
import AiHero from "@/components/sidpin-ai/AiHero";
import AiDevelopmentSection from "@/components/sidpin-ai/AiDevelopmentSection";
import AiProcessTimeline from "@/components/sidpin-ai/AiProcessTimeline";
import AiBuildShowcase from "@/components/sidpin-ai/AiBuildShowcase";
import { Bot, Workflow, Database, Cloud } from "lucide-react";

export const metadata: Metadata = {
  title: "SidPin.ai | SIDPIN Digital — AI Agents, Automation & Cloud Systems",
  description:
    "SidPin.ai is SIDPIN Digital's AI arm — we design and ship AI agents, workflow automation, RAG knowledge systems, and the cloud infrastructure they run on.",
};

const CAPABILITIES = [
  {
    Icon: Bot,
    title: "AI Agents & Chatbots",
    desc: "Conversational agents that handle support, sales, and internal workflows — trained on your business, not a generic script.",
  },
  {
    Icon: Workflow,
    title: "Workflow Automation",
    desc: "We replace manual, repetitive work with automations that connect your tools and run in the background, every day.",
  },
  {
    Icon: Database,
    title: "RAG & Knowledge Systems",
    desc: "Retrieval-augmented systems that make your AI accurate and citeable — grounded in your own data, not guesswork.",
  },
  {
    Icon: Cloud,
    title: "Cloud-Native Infrastructure",
    desc: "The managed cloud foundation — AWS, Azure, GCP, or DigitalOcean — that keeps every AI system fast, secure, and reliable.",
  },
];

export default function SidpinAiPage() {
  return (
    <>
      <Navbar />
      <main className="bg-bg">
        <AiHero />
        <AiDevelopmentSection />
        <AiProcessTimeline />
        <AiBuildShowcase />

        {/* Capabilities */}
        <section id="capabilities" className="px-[24px] pb-[100px] pt-[100px] md:px-[80px]">
          <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CAPABILITIES.map(({ Icon, title, desc }, i) => (
              <Reveal key={title} delay={i * 100}>
                <div className="h-full rounded-3xl border border-line bg-surface p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-24px_rgba(65,105,225,0.35)]">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-[#4169E1]/10">
                    <Icon size={22} className="text-[#4169E1]" />
                  </span>
                  <h3
                    className="mt-6 text-[19px] font-semibold text-fg"
                    style={{ fontFamily: "Hanken Grotesk, sans-serif" }}
                  >
                    {title}
                  </h3>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-fg-2">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Closing CTA — reuses the same premium AI + Cloud CTA from the homepage */}
        <section className="px-[24px] pb-[100px] md:px-[80px]">
          <div className="mx-auto max-w-[1440px]">
            <AiCloudCTA />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
