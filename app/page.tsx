"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WordCycleHero from "@/components/home/WordCycleHero";
import BuildPipeline from "@/components/home/BuildPipeline";
import TechnologyCore from "@/components/home/TechnologyCore";
import ParticleWave from "@/components/ui/ParticleWave";
import VideoShowcase from "@/components/home/VideoShowcase";
import IntegrationHero from "@/components/home/IntegrationHero";
import AiCloudSection from "@/components/home/AiCloudSection";
import StatsSection from "@/components/home/StatsSection";
import ClientLogos from "@/components/home/ClientLogos";
import TechMarquee from "@/components/home/TechMarquee";
import ExpertiseGrid from "@/components/home/ExpertiseGrid";
import CrmSlideshow from "@/components/home/CrmSlideshow";
import RankOnGoogle from "@/components/home/RankOnGoogle";
import VelocityFramework from "@/components/home/VelocityFramework";
import WhyChoosePartner from "@/components/home/WhyChoosePartner";
import FaqChat from "@/components/home/FaqChat";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* 1. HERO EXPERIENCE - Integration Grid */}
        <IntegrationHero />

        {/* 1.5 STATS SECTION */}
        <StatsSection />

        {/* 1.55 CLIENT LOGO WALL — trusted by */}
        <ClientLogos />

        {/* 1.6 AI SOLUTIONS & MANAGED CLOUD — one combined section (01 AI, 02 Cloud) */}
        <AiCloudSection />

        {/* 1.8 WHY CHOOSE SIDPIN — digital marketing partner accordion */}
        <WhyChoosePartner />

        {/* 1.9 TECH MARQUEE */}
        <TechMarquee />

        {/* 2. OUR EXPERTISE */}
        <ExpertiseGrid />

        {/* 3. RANK ON GOOGLE — SEO conversion section */}
        <RankOnGoogle />

        {/* 4. WORD CYCLE HERO */}
        <section className="py-[80px] px-[80px] bg-bg">
          <div className="max-w-[1440px] mx-auto">
            <WordCycleHero />
          </div>
        </section>

        {/* 5. BUILD PIPELINE */}
        <section className="py-[80px] px-[80px] bg-surface">
          <div className="max-w-[1440px] mx-auto">
            <BuildPipeline />
          </div>
        </section>

        {/* 6. INTEGRATION FLOW - Moved to VisionInfrastructure section */}
        {/* <section className="py-[160px] px-[80px] bg-bg">
          <div className="max-w-[1440px] mx-auto text-center">
            <div className="mb-16">
              <span className="font-['Geist'] text-xs font-medium text-[#4169E1] tracking-[0.4em] uppercase mb-8 block">
                Seamless Connectivity
              </span>
              <h2 className="font-['Hanken_Grotesk'] text-[48px] md:text-[64px] font-semibold leading-[1.1] tracking-tight mb-8">
                Everything Connected. <br />
                <span className="gradient-text">Nothing Left Behind.</span>
              </h2>
              <p className="font-['Inter'] text-lg text-fg-2 max-w-3xl mx-auto">
                Our AI-powered engine integrates with your entire stack — from
                communication tools to payment systems — creating one unified
                operating system for your business.
              </p>
            </div>
            <IntegrationFlow />
          </div>
        </section> */}

        {/* 6.5 TECHNOLOGY CORE */}
        {/* <TechnologyCore /> */}

        {/* 8. THE VELOCITY FRAMEWORK — how we create digital solutions */}
        <VelocityFramework />

        {/* 9. INDUSTRY CRM CAROUSEL */}
        <section className="py-[160px] bg-surface">
          <div className="px-[80px] max-w-[1440px] mx-auto">
            <div className="mb-16 max-w-2xl">
              <span className="font-['Geist'] text-xs font-medium text-[#4169E1] tracking-[0.4em] uppercase mb-4 block">
                Vertical Solutions
              </span>
              <h2 className="font-['Hanken_Grotesk'] text-[48px] md:text-[48px] font-medium">
                One CRM. <br />
                Built For Every Business.
              </h2>
            </div>
            <CrmSlideshow />
          </div>
        </section>

        {/* 10. FAQ — chat-style frequently asked questions */}
        <FaqChat />

        {/* FINAL CTA */}
        {/* <section className="relative h-screen flex items-center justify-center bg-bg overflow-hidden">
          <div className="absolute inset-0">
            <div
              className="w-full h-full bg-cover bg-center opacity-40"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuByZ5D5bG3-HI4_hegmUnR64F50mrUVCCX1YO4PpBdu_NABZ_VtpHER1LZJah_ol6cYo45ooY2gDdt69ORlH79paJYUMMeuLltkIVaj9-yqvWOHqXvpqFWJIzlnoGxybM2KiTgj3asj7e-iqqmUSsYwy3LRDPQx6atbDeH7GMMvcrTJptAFk5osvivWREJPWdhkN9r0jSaAluzYW2HqfaArbRMtGVwsQXDTkc0hbNbyODM9QIIpytvlgZB_fQPGQCCEo2JhUTkzVNul')",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-bg via-transparent to-bg" />
          </div>
          <div className="relative z-10 text-center max-w-4xl px-[24px]">
            <h2 className="font-['Hanken_Grotesk'] text-[48px] md:text-[80px] font-semibold mb-8">
              Great Brands <br />
              Aren't Built By Chance.
            </h2>
            <p className="font-['Inter'] text-lg text-fg-2 max-w-2xl mx-auto mb-16">
              They are built through stories, experiences, and systems that work
              together. Are you ready to evolve?
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <button className="w-full md:w-auto bg-[#4169E1] text-[#FFFFFF] px-12 py-6 font-['Geist'] text-xs font-medium tracking-[0.2em] uppercase hover:scale-105 transition-all shadow-[0_0_50px_rgba(65, 105, 225,0.2)]">
                Start Your Project
              </button>
              <button className="w-full md:w-auto text-fg font-['Geist'] text-xs font-medium tracking-[0.2em] uppercase flex items-center gap-4 group">
                Book A Discovery Call
                <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
        </section> */}
      </main>
      <Footer />
    </>
  );
}
