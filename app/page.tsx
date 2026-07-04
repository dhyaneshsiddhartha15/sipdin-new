"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WordCycleHero from "@/components/home/WordCycleHero";
import BuildPipeline from "@/components/home/BuildPipeline";
import TechnologyCore from "@/components/home/TechnologyCore";
import ParticleWave from "@/components/ui/ParticleWave";
import VideoShowcase from "@/components/home/VideoShowcase";
import IntegrationHero from "@/components/home/IntegrationHero";
import CoreAiExpertise from "@/components/home/CoreAiExpertise";
import StatsSection from "@/components/home/StatsSection";
import TechMarquee from "@/components/home/TechMarquee";
import CloudDeployment from "@/components/home/CloudDeployment";
import ClientShowcase from "@/components/home/ClientShowcase";
import ExpertiseGrid from "@/components/home/ExpertiseGrid";
import CrmSlideshow from "@/components/home/CrmSlideshow";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* 1. HERO EXPERIENCE - Integration Grid */}
        <IntegrationHero />

        {/* 1.5 STATS SECTION */}
        <StatsSection />

        {/* 1.6 CORE AI EXPERTISE */}
        <CoreAiExpertise />

        {/* 1.7 CLOUD DEPLOYMENT */}
        <CloudDeployment />

        {/* 1.8 CLIENT SHOWCASE */}
        <ClientShowcase />

        {/* 1.9 TECH MARQUEE */}
        <TechMarquee />

        {/* 2. OUR EXPERTISE */}
        <ExpertiseGrid />

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

        {/* 8. INDUSTRY CRM CAROUSEL */}
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

        {/* 9. BRAND GROWTH ECOSYSTEM */}
        <section className="py-[160px] px-[80px] bg-bg border-t border-b border-line/10">
          <div className="max-w-[1440px] mx-auto text-center">
            <div className="mb-24">
              <span className="font-['Geist'] text-xs font-medium text-[#4169E1] tracking-[0.4em] uppercase mb-4 block">
                The Velocity Framework
              </span>
              <h2 className="font-['Hanken_Grotesk'] text-[48px] md:text-[48px] font-medium">
                Every Growth System <br />
                Starts With Attention.
              </h2>
            </div>
            <div className="relative flex flex-col md:flex-row justify-between items-start gap-8 md:gap-4 no-scrollbar overflow-x-auto pb-12 px-4">
              {/* Connecting Line (Desktop) */}
              <div className="hidden md:block absolute top-12 left-10 right-10 h-[2px] bg-gradient-to-r from-[#4169E1]/10 via-[#4169E1]/60 to-[#4169E1]/10 z-0" />
              {/* Step 1 */}
              <div className="relative z-10 flex flex-col items-center min-w-[200px] group">
                <div className="w-24 h-24 rounded-full bg-surface border-4 border-[#4169E1] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-3xl text-[#4169E1]">
                    movie
                  </span>
                </div>
                <h4 className="font-['Geist'] uppercase tracking-widest text-fg mb-2">
                  Brand Film
                </h4>
                <div className="h-10 w-[2px] bg-[#4169E1]/30 md:hidden mb-4" />
              </div>
              {/* Step 2 */}
              <div className="relative z-10 flex flex-col items-center min-w-[200px] group">
                <div className="w-24 h-24 rounded-full bg-surface border border-line flex items-center justify-center mb-6 group-hover:border-[#4169E1] transition-colors">
                  <span className="material-symbols-outlined text-3xl">
                    language
                  </span>
                </div>
                <h4 className="font-['Geist'] uppercase tracking-widest text-fg mb-2">
                  Website
                </h4>
                <div className="h-10 w-[2px] bg-[#4169E1]/30 md:hidden mb-4" />
              </div>
              {/* Step 3 */}
              <div className="relative z-10 flex flex-col items-center min-w-[200px] group">
                <div className="w-24 h-24 rounded-full bg-surface border border-line flex items-center justify-center mb-6 group-hover:border-[#4169E1] transition-colors">
                  <span className="material-symbols-outlined text-3xl">target</span>
                </div>
                <h4 className="font-['Geist'] uppercase tracking-widest text-fg mb-2">
                  Lead Gen
                </h4>
                <div className="h-10 w-[2px] bg-[#4169E1]/30 md:hidden mb-4" />
              </div>
              {/* Step 4 */}
              <div className="relative z-10 flex flex-col items-center min-w-[200px] group">
                <div className="w-24 h-24 rounded-full bg-surface border-4 border-[#4169E1] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-3xl text-[#4169E1]">
                    database
                  </span>
                </div>
                <h4 className="font-['Geist'] uppercase tracking-widest text-fg mb-2">
                  CRM
                </h4>
                <div className="h-10 w-[2px] bg-[#4169E1]/30 md:hidden mb-4" />
              </div>
              {/* Step 5 */}
              <div className="relative z-10 flex flex-col items-center min-w-[200px] group">
                <div className="w-24 h-24 rounded-full bg-surface border border-line flex items-center justify-center mb-6 group-hover:border-[#4169E1] transition-colors">
                  <span className="material-symbols-outlined text-3xl">
                    smart_toy
                  </span>
                </div>
                <h4 className="font-['Geist'] uppercase tracking-widest text-fg mb-2">
                  Automation
                </h4>
                <div className="h-10 w-[2px] bg-[#4169E1]/30 md:hidden mb-4" />
              </div>
              {/* Step 6 */}
              <div className="relative z-10 flex flex-col items-center min-w-[200px] group">
                <div className="w-24 h-24 rounded-full bg-surface border border-line flex items-center justify-center mb-6 group-hover:border-[#4169E1] transition-colors">
                  <span className="material-symbols-outlined text-3xl text-green-400">
                    trending_up
                  </span>
                </div>
                <h4 className="font-['Geist'] uppercase tracking-widest text-fg mb-2">
                  Conversion
                </h4>
                <div className="h-10 w-[2px] bg-[#4169E1]/30 md:hidden mb-4" />
              </div>
            </div>
          </div>
        </section>

        {/* 10. CREATIVE SERVICES (Bento Grid) */}
        <section className="py-[160px] px-[80px] bg-surface">
          <div className="max-w-[1440px] mx-auto">
            <div className="mb-24">
              <span className="font-['Geist'] text-xs font-medium text-[#4169E1] tracking-[0.4em] uppercase mb-4 block">
                Creative Excellence
              </span>
              <h2 className="font-['Hanken_Grotesk'] text-[48px] md:text-[48px] font-medium">
                We Create Content <br />
                That Gets Results.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 h-[800px]">
              {/* Video Production - Large card */}
              <div className="hover-lift md:col-span-2 glass-card rounded-2xl overflow-hidden relative group hover:bg-surface-2 transition-all">
                <div className="absolute inset-0 bg-gradient-to-br from-[#4169E1]/20 to-transparent" />
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity"
                >
                  <source src="/video-showcase.mp4" type="video/mp4" />
                </video>
                <div className="relative z-10 p-10 h-full flex flex-col justify-between">
                  <div>
                    <div className="w-16 h-16 rounded-2xl bg-[#4169E1]/20 border border-[#4169E1]/30 flex items-center justify-center mb-6 backdrop-blur-sm">
                      <span className="material-symbols-outlined text-3xl text-[#4169E1]">videocam</span>
                    </div>
                    <h3 className="font-['Hanken_Grotesk'] text-3xl font-medium mb-4">
                      Video Production
                    </h3>
                    <p className="text-fg-2 max-w-md text-lg">
                      Professional video shooting that captures your brand story. From concept to final cut.
                    </p>
                  </div>
                  <div className="flex items-center gap-4 mt-8">
                    <span className="material-symbols-outlined text-[#4169E1]">check_circle</span>
                    <span className="text-fg-2">4K Cinematic Quality</span>
                    <span className="material-symbols-outlined text-[#4169E1]">check_circle</span>
                    <span className="text-fg-2">Professional Lighting</span>
                  </div>
                </div>
              </div>

              {/* Video Editing / YouTube */}
              <div className="hover-lift glass-card rounded-2xl p-8 flex flex-col justify-between group hover:bg-surface-2 transition-all relative overflow-hidden">
                {/* YouTube Video Embed */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF0000]/10 to-transparent" />
                <div className="absolute inset-4 top-16 bottom-20 opacity-40">
                  <div className="w-full h-full rounded-lg overflow-hidden">
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&loop=1&playlist=dQw4w9WgXcQ&controls=0&showinfo=0"
                      title="SIDPIN Video Edit"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-red-500/20 border border-red-500/30 flex items-center justify-center mb-4 backdrop-blur-sm">
                    <svg className="w-8 h-8 text-red-500" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </div>
                  <h3 className="font-['Hanken_Grotesk'] text-2xl font-medium mb-2">
                    Video Editing
                  </h3>
                  <p className="text-fg-2 text-sm leading-relaxed mb-6">
                    Professional editing that turns raw footage into engaging content. See our work on YouTube.
                  </p>
                </div>
                <a
                  href="https://www.youtube.com/@SIDPIN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10 flex items-center gap-3 text-red-500 font-['Geist'] text-xs font-medium tracking-widest uppercase hover:gap-4 transition-all"
                >
                  <span>Watch On YouTube</span>
                  <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </a>
              </div>

              {/* Social Media Management */}
              <div className="hover-lift glass-card rounded-2xl p-8 flex flex-col justify-between group hover:bg-surface-2 transition-all relative overflow-hidden">
                {/* Instagram Profile Mockup Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#E4405F]/10 to-[#C13584]/10" />
                <div className="absolute inset-0 opacity-20">
                  <div className="w-full h-full bg-white rounded-lg overflow-hidden">
                    <div className="relative w-full h-full">
                      {/* Instagram profile mockup */}
                      <div className="absolute top-4 left-4 right-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#E4405F] to-[#C13584] p-0.5">
                            <div className="w-full h-full rounded-full bg-white/90" />
                          </div>
                          <div>
                            <div className="text-xs font-semibold text-gray-900">SIDPIN</div>
                            <div className="text-[9px] text-gray-600">@sidpin</div>
                          </div>
                          <div className="ml-auto">
                            <div className="px-3 py-1 bg-[#0095F6] rounded text-[9px] font-semibold text-white">Follow</div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute top-20 left-4 right-4 flex justify-around">
                        <div className="text-center">
                          <div className="text-sm font-bold text-gray-900">152</div>
                          <div className="text-[8px] text-gray-600">Posts</div>
                        </div>
                        <div className="text-center">
                          <div className="text-sm font-bold text-gray-900">8.5K</div>
                          <div className="text-[8px] text-gray-600">Followers</div>
                        </div>
                        <div className="text-center">
                          <div className="text-sm font-bold text-gray-900">234</div>
                          <div className="text-[8px] text-gray-600">Following</div>
                        </div>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4 grid grid-cols-3 gap-1">
                        <div className="aspect-square bg-gradient-to-br from-[#E4405F]/50 to-[#C13584]/50 rounded" />
                        <div className="aspect-square bg-gradient-to-br from-[#833AB4]/50 to-[#E4405F]/50 rounded" />
                        <div className="aspect-square bg-gradient-to-br from-[#405DE6]/50 to-[#833AB4]/50 rounded" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#E4405F]/20 to-[#C13584]/20 border border-[#E4405F]/30 flex items-center justify-center mb-4 backdrop-blur-sm">
                    <svg className="w-8 h-8 text-[#E4405F]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                  <h3 className="font-['Hanken_Grotesk'] text-2xl font-medium mb-2">
                    Social Media
                  </h3>
                  <p className="text-fg-2 text-sm leading-relaxed mb-6">
                    Strategic content, community management, and growth analytics. Follow us for tips.
                  </p>
                </div>
                <a
                  href="https://www.instagram.com/sidpin/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10 flex items-center gap-3 text-[#E4405F] font-['Geist'] text-xs font-medium tracking-widest uppercase hover:gap-4 transition-all"
                >
                  <span>Follow On Instagram</span>
                  <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </a>
              </div>

              {/* Graphic Design - Large card */}
              <div className="hover-lift md:col-span-2 glass-card rounded-2xl p-10 flex flex-col md:flex-row gap-8 items-center group hover:bg-surface-2 transition-all relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#9333EA]/10 to-[#06b6d4]/10" />
                <div className="relative z-10 flex-1">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-purple-500/30 flex items-center justify-center mb-6 backdrop-blur-sm">
                    <span className="material-symbols-outlined text-3xl text-purple-400">palette</span>
                  </div>
                  <h3 className="font-['Hanken_Grotesk'] text-3xl font-medium mb-4">
                    Graphic Design
                  </h3>
                  <p className="text-fg-2 text-lg">
                    From logos to brand identity, social media graphics to print materials. We create visuals that make your brand memorable.
                  </p>
                </div>
                <div className="relative z-10 flex-1 flex justify-center gap-4">
                  <div className="w-32 h-32 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/20 flex items-center justify-center">
                    <span className="material-symbols-outlined text-4xl text-purple-400">brush</span>
                  </div>
                  <div className="w-32 h-32 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/20 flex items-center justify-center">
                    <span className="material-symbols-outlined text-4xl text-cyan-400">photo_library</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


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
