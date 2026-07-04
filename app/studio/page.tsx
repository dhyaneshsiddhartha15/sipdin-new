import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Reveal from "@/components/studio/Reveal";

export const metadata: Metadata = {
  title: "Studio | SIDPIN Digital - Cinematic Precision",
  description:
    "SIDPIN Digital is a Creative Growth & Production Company helping businesses stand out through filmmaking, storytelling, digital experiences, and growth systems.",
};

const philosophyCards = [
  {
    icon: "auto_awesome",
    title: "Stories Create Connection",
    desc: "The human brain is wired for narrative. We build brands that resonate emotionally.",
    delay: 0,
  },
  {
    icon: "lightbulb",
    title: "Creativity Has A Purpose",
    desc: "Aesthetic without utility is art. Aesthetic with utility is growth. We focus on the latter.",
    delay: 100,
  },
  {
    icon: "hub",
    title: "Growth Requires Systems",
    desc: "Inspiration is the spark, but sustainable growth is the engine. We build the machinery.",
    delay: 200,
  },
  {
    icon: "zoom_in",
    title: "Every Detail Matters",
    desc: "From the color grade of a video to the load time of a landing page—precision is non-negotiable.",
    delay: 300,
  },
];

const traditionalItems = [
  "One-off Campaigns",
  "Vanity Metrics Focus",
  "Generic Content Pieces",
  "Surface-level Engagement",
];

const sidpinItems = [
  "End-to-End Story Systems",
  "Growth & Revenue Architecture",
  "High-Fidelity Cinematic Experiences",
  "Omnichannel Digital Mastery",
];

const teamMembers = [
  {
    name: "Anand Siddhartha",
    role: "Founder & Creative Director",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDRybxOEpvOOupYwJKq46oBOauK5auCLITt77MkfZhw53btcsZGxom5ptYvkSapHukpCFNAHCgEP1QNaubqpIPJ1mV0TQuWsWWRO1cbxo9JsK5_EdoWtKnMtkq_DpwKHznGSv3vanua6CoA1K0cO9-PskAMm42LwzCEdwIvvKUmvMrnLA1ijbHgl3FIrBbgY3BzgRkG3ZxuM5vYgVrU65OE40mvh2JJlzTfkgloHaK61pXdy9wzPauHESMy78JQQ_3jbrRF0A9ziwun",
    alt: "Portrait of Anand Siddhartha, Founder & Creative Director",
    delay: 0,
  },
  {
    name: "Priyanshu",
    role: "Website Development",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAkBGts20x5SpkXyGTSRycRU9jvgd59tBHmJH4xnGC16xyl-SxRZ4AX1uYYY00ptOCG_hqqwOMOxipd9NoiwHOKwPUc0X3rW-Vo3FpBLZ-4LWxkDSdDesqgBRRwfKeqrb_aSzPK22SnXMC81EGuoU0TnItH0cZWqNEN4461k9GhuJvvccRlX90OW9D2rV5Uf8u7ONEeXHNt1vE5qomw96YSuQEP2FxGzR684EH2-3Lx1KKJY1pR0DkF_A78-bguAX83bUVEYQeENU85",
    alt: "Portrait of Priyanshu, Website Development",
    delay: 50,
  },
  {
    name: "Preeti",
    role: "Operations & Strategy",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAqI9v1l8EtAFHjQfJPfTDIxSThoufUPMX9OwYgs0Hb4tg3bYZ4asuferqJjwiPTRTdcoWpE09cRWuPu1JGXwPv9N6qL5hyeVkJKUeOw6nGXP6q2vEySKvU3iYRDea9THhaH2SahFjRbRhIM74k7ifyMiF_k2yTjuqftM8L9lx9rMxdjTJjgHAUK_pzGYz4g_ePOEApog8SJgRMlarLcDWBc8rGzaCXMBxuCTbKZ4r-ppF-RoqFXRkN1OiICohlZfq9vhXbR9WNqJG0",
    alt: "Portrait of Preeti, Operations & Strategy",
    delay: 100,
  },
  {
    name: "Vivek",
    role: "Advertising & Performance",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDA7whMOrfBfFCcpSYZoGcltNNobw1Bv5xgkaVEhBVQC2D_hH1i7W2F4dsvp3kstULfg3i7zOE2EgcoqJCcwXV-9UtyGKtQE_tKPTpsUaKp81lz2vQz2Ac3HU06Jmwm9ltvqJSfaup4mslL6pB73bpQyrh0NFn6V0QJBONU1_d0GIFmnu64QkgnXkytN_sBfbVx6vocXr3Sn04vNzGs41lX-kyXVyIfpuy0qTj4K3rpvv81g_OO_pm53jepAOryRaBGSZd0USIaeMEy",
    alt: "Portrait of Vivek, Advertising & Performance",
    delay: 150,
  },
];

const journeySteps = [
  { num: "1", title: "Idea", desc: "Conceptualization of the core narrative.", active: true },
  { num: "2", title: "Strategy", desc: "Architecting the growth funnel.", active: false },
  { num: "3", title: "Production", desc: "Cinematic capture with precision.", active: false },
  { num: "4", title: "Editing", desc: "Polishing the storytelling rhythm.", active: false },
  { num: "5", title: "Experience", desc: "Deploying digital environments.", active: false },
  { num: "6", title: "System", desc: "Implementing the growth engine.", active: false },
  { num: "7", title: "Impact", desc: "Measurable business transformation.", active: true, icon: "rocket_launch" },
];

const industries = [
  { icon: "hotel", label: "Hotels" },
  { icon: "restaurant", label: "Dining" },
  { icon: "flight", label: "Travel" },
  { icon: "spa", label: "Wellness" },
  { icon: "school", label: "Education" },
  { icon: "volunteer_activism", label: "NGOs" },
  { icon: "person", label: "Brands" },
  { icon: "trending_up", label: "Growth" },
];

export default function StudioPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden pt-24">
          <div className="absolute inset-0 z-0">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-25"
              style={{
                backgroundImage: "url('/stitch-exports/studio-screenshot.png')",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent" />
          </div>
          <div className="relative z-10 text-center max-w-4xl px-[24px] md:px-0">
            <h1 className="font-['Hanken_Grotesk'] text-[48px] md:text-[80px] font-semibold leading-[1.1] tracking-tight text-fg mb-6">
              We Build Brands That People Remember.
            </h1>
            <p className="font-['Inter'] text-lg leading-[1.6] text-fg/70 max-w-2xl mx-auto">
              SIDPIN Digital is a Creative Growth &amp; Production Company helping
              businesses stand out through filmmaking, storytelling, digital
              experiences, and growth systems.
            </p>
          </div>
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <span className="material-symbols-outlined text-[#4169E1] opacity-50">
              keyboard_double_arrow_down
            </span>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-40 px-[24px] md:px-[80px] max-w-[1440px] mx-auto overflow-hidden">
          <div className="grid grid-cols-12 gap-[32px]">
            <div className="col-span-12 md:col-span-8">
              <p className="font-['Geist'] text-xs font-medium text-[#4169E1] uppercase tracking-[0.3em] mb-12">
                The Genesis
              </p>
              <Reveal>
                <h2 className="font-['Hanken_Grotesk'] text-[32px] md:text-[80px] font-semibold leading-none mb-24 text-fg">
                  From filmmaking passion to architectural business growth.
                </h2>
              </Reveal>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-[32px] items-center">
            <div className="col-span-12 md:col-span-6">
              <Reveal>
                <div className="aspect-video glass-card rounded-xl overflow-hidden relative group">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCPS_-ARN5qGIvttn3ePTrDD4vGrGPfrmif0c4vTREUn8zgq8Q-N0fs8VYXFqLsWzD4hoMM3ZoJ-w9hrNPEgE_ah4WOswXrhPn-71fDhu8qwk-95zMJvNmIu1gW03sZNVWoQIumkr5_-rhacX1sLzLl3hQvIA61D8waybgPypHOQdpOiqiqpwQzr4mv12VcKHkHUvs1WMdBxjqstE5UtmMI6cCEI4adpgJTwwnfTbV_XYs2jQHzBRyvFol0Z07blvIag-mCqc8RfwgW')",
                    }}
                    role="img"
                    aria-label="Professional cinema camera in a dark atmospheric studio"
                  />
                </div>
              </Reveal>
            </div>
            <div className="col-span-12 md:col-span-5 md:col-start-8">
              <Reveal>
                <div className="font-['Inter'] text-lg leading-[1.6] text-fg/60 space-y-8">
                  <p>
                    We didn&apos;t start as an agency. We started as
                    storytellers with a camera and an obsession for the perfect
                    frame. We realized that beautiful images weren&apos;t enough
                    if they didn&apos;t lead to meaningful results.
                  </p>
                  <p>
                    That realization evolved into SIDPIN Digital—a studio where cinematic
                    artistry meets rigorous business strategy. We don&apos;t just
                    capture moments; we architect growth systems that use
                    narrative as their core engine.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Core Philosophy */}
        <section className="py-40 bg-surface-2">
          <div className="px-[24px] md:px-[80px] max-w-[1440px] mx-auto mb-20">
            <h2 className="font-['Hanken_Grotesk'] text-[32px] md:text-[48px] font-medium tracking-[0.05em] text-fg text-center">
              Core Philosophy
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-[24px] md:px-[80px] max-w-[1440px] mx-auto gap-[32px]">
            {philosophyCards.map((card) => (
              <Reveal key={card.title} delay={card.delay}>
                <div className="glass-card p-10 rounded-xl flex flex-col justify-between h-[450px] transition-all duration-500 hover:scale-[1.02] hover:border-[#4169E1]/30 group">
                  <span
                    className="material-symbols-outlined text-4xl text-[#4169E1]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    {card.icon}
                  </span>
                  <div>
                    <h3 className="font-['Hanken_Grotesk'] text-[32px] font-medium text-fg mb-4">
                      {card.title}
                    </h3>
                    <p className="text-fg/60 font-['Inter']">
                      {card.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Why We Are Different */}
        <section className="py-40 px-[24px] md:px-[80px] max-w-[1440px] mx-auto">
          <Reveal>
            <div className="text-center mb-32">
              <h2 className="font-['Hanken_Grotesk'] text-[32px] md:text-[80px] font-semibold text-fg mb-6">
                Redefining the Model
              </h2>
              <p className="font-['Inter'] text-lg text-fg/60">
                Why settle for campaigns when you can build an ecosystem?
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px]">
            <Reveal>
              <div className="p-12 border border-line/20 rounded-2xl">
                <h3 className="font-['Hanken_Grotesk'] text-[32px] font-medium text-fg/40 mb-8">
                  Traditional Agency
                </h3>
                <ul className="space-y-6">
                  {traditionalItems.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-4 text-fg/40"
                    >
                      <span className="material-symbols-outlined text-[#ffb4ab]">
                        close
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal>
              <div className="p-12 glass-card border-2 border-[#4169E1]/40 rounded-2xl shadow-2xl">
                <h3 className="font-['Hanken_Grotesk'] text-[32px] font-medium text-[#4169E1] mb-8">
                  The SIDPIN Digital Approach
                </h3>
                <ul className="space-y-6">
                  {sidpinItems.map((item) => (
                    <li key={item} className="flex items-center gap-4">
                      <span
                        className="material-symbols-outlined text-[#4169E1]"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        check_circle
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Meet The Team */}
        <section className="py-40 bg-surface overflow-hidden">
          <div className="px-[24px] md:px-[80px] max-w-[1440px] mx-auto mb-20">
            <p className="font-['Geist'] text-xs font-medium text-[#4169E1] uppercase tracking-[0.3em] mb-4">
              The Collective
            </p>
            <h2 className="font-['Hanken_Grotesk'] text-[32px] md:text-[48px] font-medium tracking-[0.05em] text-fg">
              Expertise in Every Frame.
            </h2>
          </div>
          <div className="flex horizontal-scroll-container overflow-x-auto px-[24px] md:px-[80px] gap-[32px] pb-10">
            {teamMembers.map((member) => (
              <Reveal
                key={member.name}
                className="flex-shrink-0 w-[320px]"
                delay={member.delay}
              >
                <div
                  className="h-[450px] w-full bg-cover bg-center rounded-xl grayscale hover:grayscale-0 transition-all duration-700"
                  style={{ backgroundImage: `url('${member.image}')` }}
                  role="img"
                  aria-label={member.alt}
                />
                <div className="mt-6">
                  <p className="font-['Hanken_Grotesk'] text-[32px] font-medium text-fg">
                    {member.name}
                  </p>
                  <p className="font-['Geist'] text-xs font-medium text-[#4169E1] uppercase tracking-widest mt-1">
                    {member.role}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Our Vision */}
        <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDGbC_ApRZi_PH7VjX-wZIk6AlZJ6a5p-zC2sEXqNIA8kpFgyHUIeaaW_nGVh6q8sdJaBjISE7vPHVkjIqf94B8V_jj5QNo4YckfYXghhtC89RvaNAkqcb0G5vwRAANdsKE8m3G7gLgPfjhlX7_9zuydpH9zXI4C-wDDPrN7W7kDQKYVG29vldW7GiJmLyytVum-MkdHzxzXhufi1ADZuJem5bxQo9J8MX_k9cVj5kp16F_YoPnztY_ehc6yWvYlHUn_rxS5O0hNEst')",
            }}
          />
          <div className="absolute inset-0 bg-surface/70 backdrop-blur-sm" />
          <Reveal>
            <div className="relative z-10 text-center px-[24px]">
              <h2 className="font-['Hanken_Grotesk'] text-[48px] md:text-[80px] font-semibold leading-tight text-fg mb-8">
                Building The Future <br /> Of Brand Growth
              </h2>
              <div className="w-24 h-1 bg-[#4169E1] mx-auto" />
            </div>
          </Reveal>
        </section>

        {/* The SIDPIN Digital Journey */}
        <section className="py-40 px-[24px] md:px-[80px] bg-surface-2">
          <div className="max-w-[1440px] mx-auto">
            <Reveal>
              <h2 className="font-['Hanken_Grotesk'] text-[32px] md:text-[48px] font-medium tracking-[0.05em] text-fg mb-24">
                The SIDPIN Digital Journey
              </h2>
            </Reveal>
            <div className="relative">
              <div className="absolute top-6 left-0 w-full h-px bg-[#D6DAE4] hidden md:block" />
              <div className="grid grid-cols-1 md:grid-cols-7 gap-8 relative">
                {journeySteps.map((step, i) => (
                  <Reveal key={step.title} delay={i * 100}>
                    <div>
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center font-bold mb-6 relative z-10 mx-auto md:mx-0 ${
                          step.active
                            ? "bg-[#4169E1] text-[#FFFFFF]"
                            : "bg-surface-2 border border-line/20 text-fg"
                        }`}
                      >
                        {step.icon ? (
                          <span className="material-symbols-outlined text-sm">
                            {step.icon}
                          </span>
                        ) : (
                          step.num
                        )}
                      </div>
                      <h4 className="font-['Hanken_Grotesk'] text-lg font-bold text-fg mb-2">
                        {step.title}
                      </h4>
                      <p className="text-fg/60 text-sm font-['Inter']">
                        {step.desc}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="py-40 px-[24px] md:px-[80px] max-w-[1440px] mx-auto">
          <Reveal>
            <h2 className="font-['Hanken_Grotesk'] text-[32px] md:text-[48px] font-medium tracking-[0.05em] text-fg mb-24 text-center">
              Specialized Impact
            </h2>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map((industry) => (
              <Reveal key={industry.label}>
                <div className="h-40 glass-card flex flex-col items-center justify-center gap-4 group cursor-pointer hover:bg-[#4169E1]/10 transition-colors">
                  <span className="material-symbols-outlined text-3xl text-fg group-hover:scale-110 transition-transform">
                    {industry.icon}
                  </span>
                  <span className="font-['Geist'] text-xs font-medium tracking-widest uppercase text-fg">
                    {industry.label}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC4BDiwOQVwvXqT4bA27sfv9dYjbLzrbjB9HGr6A87UtAWbDBFIw1etwSyURKA2uc5y9d9XLKfiJ3SCWR0kkGA--E_w_9aTFy2I5Xd6HKO4Lf5xUwSEIrKFkqYyVYgUAHA8GEd69FY-W_eFCkDvSpAiV9IyAQhTIdtE48fjfgepC2sQpv-279fsYr7vrYWrq8ZSOYMIPtuxQRlIvtkoiMQLyyJiIh4zkJq2KYWyPgBrU1R201LLZjJmfOFn1grCqfQoryWsPvWt04dh')",
            }}
          />
          <div className="absolute inset-0 bg-surface/70" />
          <div className="relative z-10 text-center px-[24px]">
            <Reveal>
              <h2 className="font-['Hanken_Grotesk'] text-[48px] md:text-[80px] font-semibold leading-tight text-fg mb-12">
                Let&apos;s Build Something <br /> Worth Remembering.
              </h2>
            </Reveal>
            <Reveal>
              <div className="flex flex-col md:flex-row gap-6 justify-center">
                <a
                  href="/contact"
                  className="bg-[#4169E1] text-[#FFFFFF] px-12 py-5 rounded-full font-['Geist'] text-xs font-medium tracking-wider uppercase transition-all duration-300 hover:opacity-80 royal-blue-glow"
                >
                  Start A Project
                </a>
                <a
                  href="/work"
                  className="border border-fg/20 hover:border-fg text-fg px-12 py-5 rounded-full font-['Geist'] text-xs font-medium tracking-wider uppercase transition-all duration-300"
                >
                  View Our Work
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
