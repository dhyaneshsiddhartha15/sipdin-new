"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import EcosystemTabs from "@/components/home/EcosystemTabs";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* 1. HERO EXPERIENCE */}
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div
              className="w-full h-full bg-cover bg-center scale-105 animate-[pulse_8s_infinite]"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC4BDiwOQVwvXqT4bA27sfv9dYjbLzrbjB9HGr6A87UtAWbDBFIw1etwSyURKA2uc5y9d9XLKfiJ3SCWR0kkGA--E_w_9aTFy2I5Xd6HKO4Lf5xUwSEIrKFkqYyVYgUAHA8GEd69FY-W_eFCkDvSpAiV9IyAQhTIdtE48fjfgepC2sQpv-279fsYr7vrYWrq8ZSOYMIPtuxQRlIvtkoiMQLyyJiIh4zkJq2KYWyPgBrU1R201LLZjJmfOFn1grCqfQoryWsPvWt04dh')",
              }}
            />
            <div className="absolute inset-0 bg-black/50 cinematic-vignette" />
          </div>
          <div className="relative z-10 text-center px-[24px] md:px-0 max-w-4xl">
            <h1 className="font-['Hanken_Grotesk'] text-[48px] md:text-[80px] font-semibold leading-[1.1] tracking-tight text-[#e2e2e4] mb-6 opacity-0 translate-y-8 animate-[fadeInUp_1s_ease-out_forwards]">
              Stories That Move <br />
              <span className="text-[#e9c349]">Brands Forward</span>
            </h1>
            <p className="font-['Inter'] text-lg leading-[1.6] text-[#cfc4c5] max-w-2xl mx-auto mb-10 opacity-0 translate-y-8 animate-[fadeInUp_1s_ease-out_0.2s_forwards]">
              We create cinematic content, digital experiences, and growth
              systems that help modern brands stand out, connect, and grow.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 opacity-0 translate-y-8 animate-[fadeInUp_1s_ease-out_0.4s_forwards]">
              <button className="w-full md:w-auto bg-[#e9c349] text-[#241a00] px-10 py-5 font-['Geist'] text-xs font-medium tracking-[0.2em] uppercase hover:shadow-[0_0_30px_rgba(233,195,73,0.3)] transition-all">
                View Our Work
              </button>
              <button className="w-full md:w-auto border border-[#4c4546] text-[#e2e2e4] px-10 py-5 font-['Geist'] text-xs font-medium tracking-[0.2em] uppercase hover:bg-[#e2e2e4]/5 transition-all">
                Start A Project
              </button>
            </div>
          </div>
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <span className="material-symbols-outlined text-[#e9c349] text-4xl">
              expand_more
            </span>
          </div>
        </section>

        {/* 2. THE ATTENTION ECONOMY (Brand Story) */}
        <section className="py-[160px] px-[80px] bg-[#0c0e10]">
          <div className="max-w-[1440px] mx-auto text-center">
            <span className="font-['Geist'] text-xs font-medium text-[#e9c349] tracking-[0.4em] uppercase mb-8 block">
              The Paradox
            </span>
            <h2 className="font-['Hanken_Grotesk'] text-[48px] md:text-[96px] font-semibold leading-[1.05] tracking-tight mb-24 max-w-5xl mx-auto">
              In A World Full Of Noise, <br />
              <span className="opacity-20">Attention Is Everything.</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-[32px] text-left items-center">
              <div className="md:col-span-5">
                <div className="aspect-[4/5] relative overflow-hidden group">
                  <img
                    className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-110"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhnmJPv3nyYAbqQ4-mBOvXcX8rGO5oIbtE-ZqPcGf5wFler4dpBZvC0hAtX0h75_pCtwRhVXe2UZKhissxDvTNNMhsyDUWKCAJykFI1pSaKPj9n8U7bBroPazthuwL5ToQQjOYH9h4IDZ5PQUuV0YL1slylHezvnsvzAZELxAifWPY83Cz72oo7qO3wPpQnc70Mfq0ej0aIBiEMfJTuXKox9hREIM22JAjy9c1Hhp02kBV3ykBPeI54zh5Wt0CDCN6PfBta_ajidJ-"
                    alt="Brand imagery"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                </div>
              </div>
              <div className="md:col-start-7 md:col-span-6 space-y-12">
                <p className="font-['Hanken_Grotesk'] text-2xl font-medium text-[#e2e2e4] leading-relaxed">
                  Every day thousands of brands compete for attention. Most
                  content gets ignored. Most websites get forgotten. Most
                  marketing gets skipped.
                </p>
                <p className="font-['Inter'] text-lg text-[#cfc4c5]">
                  The brands that win are the brands people remember. We don't
                  just add to the noise. We cut through it with surgical precision
                  and cinematic depth.
                </p>
                <div className="pt-8">
                  <div className="h-px w-32 bg-[#e9c349] mb-4" />
                  <span className="font-['Geist'] text-xs uppercase tracking-widest text-[#e2e2e4]">
                    Precision Over Volume
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. EXPLORE THE ECOSYSTEM */}
        <section className="py-[160px] px-[80px] bg-[#111415] overflow-hidden">
          <div className="max-w-[1440px] mx-auto">
            <div className="mb-24">
              <span className="font-['Geist'] text-xs font-medium text-[#e9c349] tracking-[0.4em] uppercase mb-4 block">
                Our Capabilities
              </span>
              <h2 className="font-['Hanken_Grotesk'] text-[48px] md:text-[48px] font-medium">
                Explore The Ecosystem
              </h2>
            </div>
            <EcosystemTabs />
          </div>
        </section>

        {/* 4. CRM SOFTWARE SHOWCASE */}
        <section className="py-[160px] px-[80px] bg-[#0c0e10] overflow-hidden">
          <div className="max-w-[1440px] mx-auto text-center">
            <div className="max-w-4xl mx-auto mb-20">
              <span className="font-['Geist'] text-xs font-medium text-[#e9c349] tracking-[0.4em] uppercase mb-8 block">
                Operational Mastery
              </span>
              <h2 className="font-['Hanken_Grotesk'] text-[48px] md:text-[48px] font-medium mb-8">
                Your Business Doesn't Need More Leads. <br />
                <span className="text-[#e9c349]">
                  It Needs A Better System.
                </span>
              </h2>
              <p className="font-['Inter'] text-lg text-[#cfc4c5] max-w-3xl mx-auto">
                Most businesses lose opportunities because there is no structured
                process to manage inquiries, customers, follow-ups, payments, and
                communication. SIDPIN CRM helps businesses organize operations,
                automate workflows, and create a seamless customer experience.
              </p>
            </div>
            <div className="relative max-w-6xl mx-auto aspect-video rounded-2xl overflow-hidden border border-[#4c4546]/20 shadow-2xl group">
              {/* Dashboard Mockup */}
              <img
                alt="CRM Dashboard"
                className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 transition-all duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3it1QuiGvijlsnnY-7_fftXi5S3WWBNW7K9r6_PsNKTs6MkmmSOLUd-P4MZHaTrgk_2fn_RSj4wTYV43zJ0GisLVYluHmqvQCI-YnX1RnzMNrSILdBAvar7_jwv5HhbnAq_7mXmWa8z_GfNrGH2bnP-6rnufgXzDr7gRxiU8FqzxVkqyvjFcLhlnNpBAyU9ydjg4jDiF35ZIgTNTSp96phv8J2DqJbxhtGjErI_2avfr6oKJsAiR42zrV_Gzc-uepU5zMSvX7RKdX"
              />
              {/* Floating Glass Cards */}
              <div className="absolute top-10 left-10 glass-card p-4 rounded-xl flex items-center gap-4 animate-[fadeInUp_1s_ease-out_0.2s_forwards] hover:scale-105 transition-transform cursor-default">
                <span className="material-symbols-outlined text-[#e9c349]">
                  person_add
                </span>
                <div className="text-left">
                  <p className="text-xs font-['Geist'] text-[#cfc4c5] uppercase">
                    Status Update
                  </p>
                  <p className="text-sm font-semibold">New Lead Generated</p>
                </div>
              </div>
              <div className="absolute top-1/4 right-10 glass-card p-4 rounded-xl flex items-center gap-4 animate-[fadeInUp_1s_ease-out_0.4s_forwards] hover:scale-105 transition-transform cursor-default">
                <span className="material-symbols-outlined text-green-400">
                  payments
                </span>
                <div className="text-left">
                  <p className="text-xs font-['Geist'] text-[#cfc4c5] uppercase">
                    Finance
                  </p>
                  <p className="text-sm font-semibold">Payment Received</p>
                </div>
              </div>
              <div className="absolute bottom-20 left-20 glass-card p-4 rounded-xl flex items-center gap-4 animate-[fadeInUp_1s_ease-out_0.6s_forwards] hover:scale-105 transition-transform cursor-default">
                <span className="material-symbols-outlined text-blue-400">
                  event_available
                </span>
                <div className="text-left">
                  <p className="text-xs font-['Geist'] text-[#cfc4c5] uppercase">
                    Calendar
                  </p>
                  <p className="text-sm font-semibold">Booking Confirmed</p>
                </div>
              </div>
              <div className="absolute bottom-10 right-1/4 glass-card p-4 rounded-xl flex items-center gap-4 animate-[fadeInUp_1s_ease-out_0.8s_forwards] hover:scale-105 transition-transform cursor-default">
                <span className="material-symbols-outlined text-[#e9c349]">
                  forward_to_inbox
                </span>
                <div className="text-left">
                  <p className="text-xs font-['Geist'] text-[#cfc4c5] uppercase">
                    Automation
                  </p>
                  <p className="text-sm font-semibold">Follow-Up Sent</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. INDUSTRY CRM CAROUSEL */}
        <section className="py-[160px] bg-[#111415]">
          <div className="px-[80px] max-w-[1440px] mx-auto">
            <div className="flex justify-between items-end mb-16">
              <div className="max-w-2xl">
                <span className="font-['Geist'] text-xs font-medium text-[#e9c349] tracking-[0.4em] uppercase mb-4 block">
                  Vertical Solutions
                </span>
                <h2 className="font-['Hanken_Grotesk'] text-[48px] md:text-[48px] font-medium">
                  One CRM. <br />
                  Built For Every Business.
                </h2>
              </div>
              <div className="hidden md:flex gap-4">
                <button
                  onClick={() =>
                    document
                      .getElementById("industry-carousel")
                      ?.scrollBy({ left: -400, behavior: "smooth" })
                  }
                  className="w-12 h-12 rounded-full border border-[#4c4546] flex items-center justify-center hover:bg-[#e2e2e4]/5"
                >
                  <span className="material-symbols-outlined">arrow_back</span>
                </button>
                <button
                  onClick={() =>
                    document
                      .getElementById("industry-carousel")
                      ?.scrollBy({ left: 400, behavior: "smooth" })
                  }
                  className="w-12 h-12 rounded-full border border-[#4c4546] flex items-center justify-center hover:bg-[#e2e2e4]/5"
                >
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </div>
            </div>
            <div
              className="flex gap-8 overflow-x-auto no-scrollbar scroll-smooth pb-10"
              id="industry-carousel"
            >
              {/* Card 1 */}
              <div className="min-w-[400px] aspect-[4/5] glass-card rounded-2xl p-10 flex flex-col justify-end group transition-all duration-500 hover:border-[#e9c349]/40">
                <div className="mb-auto">
                  <span className="material-symbols-outlined text-4xl text-[#e9c349] mb-6">
                    self_improvement
                  </span>
                  <h3 className="font-['Hanken_Grotesk'] text-3xl font-medium mb-4">
                    Yoga & TTC Centers
                  </h3>
                  <p className="text-[#cfc4c5] font-['Inter'] text-base">
                    Manage batch enrolments, automated reminders for renewals,
                    and student progress tracking in one unified interface.
                  </p>
                </div>
                <div className="h-px w-0 group-hover:w-full bg-[#e9c349] transition-all duration-700 mt-8" />
              </div>
              {/* Card 2 */}
              <div className="min-w-[400px] aspect-[4/5] glass-card rounded-2xl p-10 flex flex-col justify-end group transition-all duration-500 hover:border-[#e9c349]/40">
                <div className="mb-auto">
                  <span className="material-symbols-outlined text-4xl text-[#e9c349] mb-6">
                    hotel
                  </span>
                  <h3 className="font-['Hanken_Grotesk'] text-3xl font-medium mb-4">
                    Hotels & Resorts
                  </h3>
                  <p className="text-[#cfc4c5] font-['Inter'] text-base">
                    Seamless guest management from booking to checkout.
                    Personalize guest experiences with deep data insights.
                  </p>
                </div>
                <div className="h-px w-0 group-hover:w-full bg-[#e9c349] transition-all duration-700 mt-8" />
              </div>
              {/* Card 3 */}
              <div className="min-w-[400px] aspect-[4/5] glass-card rounded-2xl p-10 flex flex-col justify-end group transition-all duration-500 hover:border-[#e9c349]/40">
                <div className="mb-auto">
                  <span className="material-symbols-outlined text-4xl text-[#e9c349] mb-6">
                    restaurant
                  </span>
                  <h3 className="font-['Hanken_Grotesk'] text-3xl font-medium mb-4">
                    Restaurants & Cafés
                  </h3>
                  <p className="text-[#cfc4c5] font-['Inter'] text-base">
                    Reservation systems paired with loyalty programs. Automate
                    feedback collection and drive repeat visits.
                  </p>
                </div>
                <div className="h-px w-0 group-hover:w-full bg-[#e9c349] transition-all duration-700 mt-8" />
              </div>
              {/* Card 4 */}
              <div className="min-w-[400px] aspect-[4/5] glass-card rounded-2xl p-10 flex flex-col justify-end group transition-all duration-500 hover:border-[#e9c349]/40">
                <div className="mb-auto">
                  <span className="material-symbols-outlined text-4xl text-[#e9c349] mb-6">
                    flight_takeoff
                  </span>
                  <h3 className="font-['Hanken_Grotesk'] text-3xl font-medium mb-4">
                    Travel Agencies
                  </h3>
                  <p className="text-[#cfc4c5] font-['Inter'] text-base">
                    Itinerary builders, visa tracking, and automated documentation.
                    Manage global clients with local precision.
                  </p>
                </div>
                <div className="h-px w-0 group-hover:w-full bg-[#e9c349] transition-all duration-700 mt-8" />
              </div>
              {/* Card 5 */}
              <div className="min-w-[400px] aspect-[4/5] glass-card rounded-2xl p-10 flex flex-col justify-end group transition-all duration-500 hover:border-[#e9c349]/40">
                <div className="mb-auto">
                  <span className="material-symbols-outlined text-4xl text-[#e9c349] mb-6">
                    school
                  </span>
                  <h3 className="font-['Hanken_Grotesk'] text-3xl font-medium mb-4">
                    Schools & Colleges
                  </h3>
                  <p className="text-[#cfc4c5] font-['Inter'] text-base">
                    Student lifecycle management from admission inquiries to alumni
                    relations. Integrated communication hubs.
                  </p>
                </div>
                <div className="h-px w-0 group-hover:w-full bg-[#e9c349] transition-all duration-700 mt-8" />
              </div>
            </div>
          </div>
        </section>

        {/* 6. BRAND GROWTH ECOSYSTEM */}
        <section className="py-[160px] px-[80px] bg-[#0c0e10] border-t border-b border-[#988e90]/10">
          <div className="max-w-[1440px] mx-auto text-center">
            <div className="mb-24">
              <span className="font-['Geist'] text-xs font-medium text-[#e9c349] tracking-[0.4em] uppercase mb-4 block">
                The Velocity Framework
              </span>
              <h2 className="font-['Hanken_Grotesk'] text-[48px] md:text-[48px] font-medium">
                Every Growth System <br />
                Starts With Attention.
              </h2>
            </div>
            <div className="relative flex flex-col md:flex-row justify-between items-start gap-8 md:gap-4 no-scrollbar overflow-x-auto pb-12 px-4">
              {/* Connecting Line (Desktop) */}
              <div className="hidden md:block absolute top-12 left-10 right-10 h-[2px] bg-gradient-to-r from-[#e9c349]/10 via-[#e9c349]/60 to-[#e9c349]/10 z-0" />
              {/* Step 1 */}
              <div className="relative z-10 flex flex-col items-center min-w-[200px] group">
                <div className="w-24 h-24 rounded-full bg-[#111415] border-4 border-[#e9c349] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-3xl text-[#e9c349]">
                    movie
                  </span>
                </div>
                <h4 className="font-['Geist'] uppercase tracking-widest text-[#e2e2e4] mb-2">
                  Brand Film
                </h4>
                <div className="h-10 w-[2px] bg-[#e9c349]/30 md:hidden mb-4" />
              </div>
              {/* Step 2 */}
              <div className="relative z-10 flex flex-col items-center min-w-[200px] group">
                <div className="w-24 h-24 rounded-full bg-[#111415] border border-[#988e90] flex items-center justify-center mb-6 group-hover:border-[#e9c349] transition-colors">
                  <span className="material-symbols-outlined text-3xl">
                    language
                  </span>
                </div>
                <h4 className="font-['Geist'] uppercase tracking-widest text-[#e2e2e4] mb-2">
                  Website
                </h4>
                <div className="h-10 w-[2px] bg-[#e9c349]/30 md:hidden mb-4" />
              </div>
              {/* Step 3 */}
              <div className="relative z-10 flex flex-col items-center min-w-[200px] group">
                <div className="w-24 h-24 rounded-full bg-[#111415] border border-[#988e90] flex items-center justify-center mb-6 group-hover:border-[#e9c349] transition-colors">
                  <span className="material-symbols-outlined text-3xl">target</span>
                </div>
                <h4 className="font-['Geist'] uppercase tracking-widest text-[#e2e2e4] mb-2">
                  Lead Gen
                </h4>
                <div className="h-10 w-[2px] bg-[#e9c349]/30 md:hidden mb-4" />
              </div>
              {/* Step 4 */}
              <div className="relative z-10 flex flex-col items-center min-w-[200px] group">
                <div className="w-24 h-24 rounded-full bg-[#111415] border-4 border-[#e9c349] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-3xl text-[#e9c349]">
                    database
                  </span>
                </div>
                <h4 className="font-['Geist'] uppercase tracking-widest text-[#e2e2e4] mb-2">
                  CRM
                </h4>
                <div className="h-10 w-[2px] bg-[#e9c349]/30 md:hidden mb-4" />
              </div>
              {/* Step 5 */}
              <div className="relative z-10 flex flex-col items-center min-w-[200px] group">
                <div className="w-24 h-24 rounded-full bg-[#111415] border border-[#988e90] flex items-center justify-center mb-6 group-hover:border-[#e9c349] transition-colors">
                  <span className="material-symbols-outlined text-3xl">
                    smart_toy
                  </span>
                </div>
                <h4 className="font-['Geist'] uppercase tracking-widest text-[#e2e2e4] mb-2">
                  Automation
                </h4>
                <div className="h-10 w-[2px] bg-[#e9c349]/30 md:hidden mb-4" />
              </div>
              {/* Step 6 */}
              <div className="relative z-10 flex flex-col items-center min-w-[200px] group">
                <div className="w-24 h-24 rounded-full bg-[#111415] border border-[#988e90] flex items-center justify-center mb-6 group-hover:border-[#e9c349] transition-colors">
                  <span className="material-symbols-outlined text-3xl text-green-400">
                    trending_up
                  </span>
                </div>
                <h4 className="font-['Geist'] uppercase tracking-widest text-[#e2e2e4] mb-2">
                  Conversion
                </h4>
                <div className="h-10 w-[2px] bg-[#e9c349]/30 md:hidden mb-4" />
              </div>
            </div>
          </div>
        </section>

        {/* 7. THE BUSINESS OPERATING SYSTEM (Bento Grid) */}
        <section className="py-[160px] px-[80px] bg-[#111415]">
          <div className="max-w-[1440px] mx-auto">
            <div className="mb-24">
              <span className="font-['Geist'] text-xs font-medium text-[#e9c349] tracking-[0.4em] uppercase mb-4 block">
                Engineered Features
              </span>
              <h2 className="font-['Hanken_Grotesk'] text-[48px] md:text-[48px] font-medium">
                More Than Software. <br />
                Your Business Operating System.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 h-[800px]">
              {/* Lead Management */}
              <div className="md:col-span-2 glass-card rounded-2xl p-10 flex flex-col justify-between group hover:bg-[#37393b] transition-all overflow-hidden relative">
                <div>
                  <h3 className="font-['Hanken_Grotesk'] text-3xl font-medium mb-4">
                    Lead Management
                  </h3>
                  <p className="text-[#cfc4c5] max-w-md">
                    Capture every inquiry from Meta, Google, and Web directly
                    into a unified pipeline with instant notification systems.
                  </p>
                </div>
                <div className="absolute -right-10 -bottom-10 opacity-5 group-hover:opacity-20 transition-opacity">
                  <span className="material-symbols-outlined text-[200px]">
                    group
                  </span>
                </div>
              </div>
              {/* Team Management */}
              <div className="glass-card rounded-2xl p-10 flex flex-col justify-between group hover:bg-[#37393b] transition-all">
                <span className="material-symbols-outlined text-4xl text-[#e9c349]">
                  badge
                </span>
                <div>
                  <h3 className="font-['Hanken_Grotesk'] text-2xl font-medium mb-2">
                    Team Management
                  </h3>
                  <p className="text-[#cfc4c5] text-sm">
                    Assign leads, track performance, and monitor KPIs in
                    real-time.
                  </p>
                </div>
              </div>
              {/* Automated Follow-Ups */}
              <div className="glass-card rounded-2xl p-10 flex flex-col justify-between group hover:bg-[#37393b] transition-all">
                <span className="material-symbols-outlined text-4xl text-[#e9c349]">
                  auto_awesome
                </span>
                <div>
                  <h3 className="font-['Hanken_Grotesk'] text-2xl font-medium mb-2">
                    Automated Follow-Ups
                  </h3>
                  <p className="text-[#cfc4c5] text-sm">
                    Nurture leads while you sleep with intelligent drip
                    sequences.
                  </p>
                </div>
              </div>
              {/* AI Assistance & Analytics (Spans 2 columns) */}
              <div className="md:col-span-2 glass-card rounded-2xl p-10 flex flex-col md:flex-row gap-10 items-center group hover:bg-[#37393b] transition-all">
                <div className="flex-1">
                  <h3 className="font-['Hanken_Grotesk'] text-3xl font-medium mb-4">
                    Analytics & AI
                  </h3>
                  <p className="text-[#cfc4c5]">
                    Predictive modeling for sales and intelligent customer
                    sentiment analysis to help you make data-driven decisions.
                  </p>
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="w-full h-32 bg-[#e9c349]/10 border border-[#e9c349]/20 rounded-lg flex items-center justify-around p-4">
                    <div className="h-full w-4 bg-[#e9c349]/40 rounded-t animate-[pulse_2s_infinite]" />
                    <div className="h-full w-4 bg-[#e9c349]/60 rounded-t animate-[pulse_2.5s_infinite]" />
                    <div className="h-full w-4 bg-[#e9c349]/80 rounded-t animate-[pulse_3s_infinite]" />
                    <div className="h-full w-4 bg-[#e9c349]/30 rounded-t animate-[pulse_1.5s_infinite]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. WHY CHOOSE SIDPIN */}
        <section className="py-[160px] bg-[#111415] overflow-hidden">
          <div className="px-[80px] max-w-[1440px] mx-auto mb-20">
            <span className="font-['Geist'] text-xs font-medium text-[#e9c349] tracking-[0.4em] uppercase mb-4 block">
              Why Choose SIDPIN
            </span>
            <h2 className="font-['Hanken_Grotesk'] text-[48px] md:text-[48px] font-medium mb-6">
              Not Another Agency. <br />
              A Creative Growth Partner.
            </h2>
            <p className="font-['Inter'] text-lg text-[#cfc4c5] max-w-2xl">
              Most agencies offer services. We build attention, trust, systems,
              and growth through one connected ecosystem.
            </p>
          </div>
          <div className="flex gap-8 overflow-x-auto no-scrollbar snap-x snap-mandatory px-[80px] pb-20">
            {/* Card 1 */}
            <div className="min-w-[350px] md:min-w-[500px] aspect-[16/10] relative rounded-xl overflow-hidden snap-center group cursor-default">
              <img
                alt="Filmmaking First"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdKJvVlOFupyFlwYGG4Kc0Yvax3uW02Q_B6DftqUtYbOeJmw6ZNviE_WkoeztLE8VBFCvQNU5aRfWynV7kk_3wpVCfl4xTRj58O52v-Cobihpl4yNMVA-C9BrHuzWOrqxwXOCnwEUn_-uTPcfnYQBKE6pOnpJsmBhca4tgnWkd6krWImwBnKFxtaQWuLolk1HvEwK9WLrDMzB9EAb27JHfqelyDlv0pxRcjpg1g9ARvX4EjBzyxqzH5zYgUaUN0dsm7b6Bu2jmxay-"
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute bottom-0 left-0 w-full p-8 glass-card border-none">
                <h3 className="font-['Hanken_Grotesk'] text-2xl font-medium mb-3">
                  Filmmaking First
                </h3>
                <p className="text-[#cfc4c5] text-sm leading-relaxed">
                  We don't start with marketing. We start with storytelling.
                  Because great brands are built through stories people remember.
                </p>
              </div>
            </div>
            {/* Card 2 */}
            <div className="min-w-[350px] md:min-w-[500px] aspect-[16/10] relative rounded-xl overflow-hidden snap-center group cursor-default">
              <img
                alt="Beyond Content"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAl1tkvhHM3qZ4c9A2TEAByFmvBwqY1owqMc-Dst35Fl0eGtCpIP_BvBF0b44hCa4A8s74CkeN_mj5OK1sAHfvLLoDSotxG4agnsILkDT-C0NVgo8a_UFPrtpgmvbnUmCVERUufkGeIIb55vEsFLzvdR3pvIvk9Yl88w7TQI3YDCfM4BmgKEg3BfUzmx4nnrU5KoK8M7slHjvP7r7MUfUbKS1nCkUbwhosIXCHyT2fIqv6wzMF9UE2yZ3Psd9Y1rg0ji2p-6ubWYn-0"
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute bottom-0 left-0 w-full p-8 glass-card border-none">
                <h3 className="font-['Hanken_Grotesk'] text-2xl font-medium mb-3">
                  Beyond Content
                </h3>
                <p className="text-[#cfc4c5] text-sm leading-relaxed">
                  Content gets attention. Websites create trust. Systems create
                  consistency. Marketing creates growth. We connect every piece
                  together.
                </p>
              </div>
            </div>
            {/* Card 3 */}
            <div className="min-w-[350px] md:min-w-[500px] aspect-[16/10] relative rounded-xl overflow-hidden snap-center group cursor-default">
              <img
                alt="Built For Real Businesses"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3it1QuiGvijlsnnY-7_fftXi5S3WWBNW7K9r6_PsNKTs6MkmmSOLUd-P4MZHaTrgk_2fn_RSj4wTYV43zJ0GisLVYluHmqvQCI-YnX1RnzMNrSILdBAvar7_jwv5HhbnAq_7mXmWa8z_GfNrGH2bnP-6rnufgXzDr7gRxiU8FqzxVkqyvjFcLhlnNpBAyU9ydjg4jDiF35ZIgTNTSp96phv8J2DqJbxhtGjErI_2avfr6oKJsAiR42zrV_Gzc-uepU5zMSvX7RKdX"
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute bottom-0 left-0 w-full p-8 glass-card border-none">
                <h3 className="font-['Hanken_Grotesk'] text-2xl font-medium mb-3">
                  Built For Real Businesses
                </h3>
                <p className="text-[#cfc4c5] text-sm leading-relaxed">
                  Whether it's a hotel, resort, restaurant, travel company, yoga
                  center, school, NGO, or growing brand, every solution is
                  tailored around business goals.
                </p>
              </div>
            </div>
            {/* Card 4 */}
            <div className="min-w-[350px] md:min-w-[500px] aspect-[16/10] relative rounded-xl overflow-hidden snap-center group cursor-default">
              <img
                alt="Growth Focused"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBiLmyMG-2YeZXqZgln-YhxSclfsKQrixNTd05Au0ZqNgIuy0zpPGaittoIri2T1v5lOhNQNLc2i_yY2v0xcNAZFmq44zRhG--U_81X9FD45kpUE16D_ZXE7RKqtiD9eXgb5TSBTF4O1LrnTVWsAYTNckaiy8EGQfHjcSHjC1BtoVhpt8_alMBnfd6Oif2AUjBo3SZPCmI2XY0dWQswNCgI5srhnoBGKCAc6e0LRO3EOoOp1jZREf26jm48GDy50Bwkf0BC0RzOX4u4"
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute bottom-0 left-0 w-full p-8 glass-card border-none">
                <h3 className="font-['Hanken_Grotesk'] text-2xl font-medium mb-3">
                  Growth Focused
                </h3>
                <p className="text-[#cfc4c5] text-sm leading-relaxed">
                  Views are important. Followers are useful. Growth is what
                  matters. Every project is designed to create measurable
                  business impact.
                </p>
              </div>
            </div>
            {/* Card 5 */}
            <div className="min-w-[350px] md:min-w-[500px] aspect-[16/10] relative rounded-xl overflow-hidden snap-center group cursor-default">
              <img
                alt="Long-Term Partner"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/ida-public/AB6AXuByZ5D5bG3-HI4_hegmUnR64F50mrUVCCX1YO4PpBdu_NABZ_VtpHER1LZJah_ol6cYo45ooY2gDdt69ORlH79paJYUMMeuLltkIVaj9-yqvWOHqXvpqFWJIzlnoGxybM2KiTgj3asj7e-iqqmUSsYwy3LRDPQx6atbDeH7GMMvcrTJptAFk5osvivWREJPWdhkN9r0jSaAluzYW2HqfaArbRMtGVwsQXDTkc0hbNbyODM9QIIpytvlgZB_fQPGQCCEo2JhUTkzVNul"
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute bottom-0 left-0 w-full p-8 glass-card border-none">
                <h3 className="font-['Hanken_Grotesk'] text-2xl font-medium mb-3">
                  Long-Term Partner
                </h3>
                <p className="text-[#cfc4c5] text-sm leading-relaxed">
                  We don't just deliver projects. We help brands evolve, improve,
                  and grow over time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="relative h-screen flex items-center justify-center bg-black overflow-hidden">
          <div className="absolute inset-0">
            <div
              className="w-full h-full bg-cover bg-center opacity-40"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuByZ5D5bG3-HI4_hegmUnR64F50mrUVCCX1YO4PpBdu_NABZ_VtpHER1LZJah_ol6cYo45ooY2gDdt69ORlH79paJYUMMeuLltkIVaj9-yqvWOHqXvpqFWJIzlnoGxybM2KiTgj3asj7e-iqqmUSsYwy3LRDPQx6atbDeH7GMMvcrTJptAFk5osvivWREJPWdhkN9r0jSaAluzYW2HqfaArbRMtGVwsQXDTkc0hbNbyODM9QIIpytvlgZB_fQPGQCCEo2JhUTkzVNul')",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#111415] via-transparent to-[#111415]" />
          </div>
          <div className="relative z-10 text-center max-w-4xl px-[24px]">
            <h2 className="font-['Hanken_Grotesk'] text-[48px] md:text-[80px] font-semibold mb-8">
              Great Brands <br />
              Aren't Built By Chance.
            </h2>
            <p className="font-['Inter'] text-lg text-[#cfc4c5] max-w-2xl mx-auto mb-16">
              They are built through stories, experiences, and systems that work
              together. Are you ready to evolve?
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <button className="w-full md:w-auto bg-[#e9c349] text-[#241a00] px-12 py-6 font-['Geist'] text-xs font-medium tracking-[0.2em] uppercase hover:scale-105 transition-all shadow-[0_0_50px_rgba(233,195,73,0.2)]">
                Start Your Project
              </button>
              <button className="w-full md:w-auto text-[#e2e2e4] font-['Geist'] text-xs font-medium tracking-[0.2em] uppercase flex items-center gap-4 group">
                Book A Discovery Call
                <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
