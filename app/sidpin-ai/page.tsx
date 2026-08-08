import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AiCloudCTA from "@/components/home/AiCloudCTA";
import AiHero from "@/components/sidpin-ai/AiHero";
import AiPoweredSystem from "@/components/sidpin-ai/AiPoweredSystem";
import AiDevelopmentSection from "@/components/sidpin-ai/AiDevelopmentSection";
import AiProcessTimeline from "@/components/sidpin-ai/AiProcessTimeline";
import AiBuildShowcase from "@/components/sidpin-ai/AiBuildShowcase";
import AiIndustries from "@/components/sidpin-ai/AiIndustries";
import AiPortfolio from "@/components/sidpin-ai/AiPortfolio";
import AiFAQ from "@/components/sidpin-ai/AiFAQ";

export const metadata: Metadata = {
  title: "Sidpin.ai | SIDPIN Digital — AI Agents, Automation & Cloud Systems",
  description:
    "Sidpin.ai is SIDPIN Digital's AI arm — we design and ship AI agents, workflow automation, RAG knowledge systems, and the cloud infrastructure they run on.",
};

export default function SidpinAiPage() {
  return (
    <>
      <Navbar />
      <main className="bg-bg">
        <AiHero />
        <AiPoweredSystem />
        <AiDevelopmentSection />
        <AiProcessTimeline />
        <AiBuildShowcase />
        <AiIndustries />
        <AiPortfolio />
        <AiFAQ />

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
