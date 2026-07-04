import type { Metadata } from "next";
import Link from "next/link";
import {
  Target,
  Eye,
  Rocket,
  ShieldCheck,
  Lightbulb,
  HeartHandshake,
  BarChart3,
  Award,
  Mail,
  Phone,
  ArrowRight,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Reveal from "@/components/studio/Reveal";

export const metadata: Metadata = {
  title: "About Us | SIDPIN — Digital Marketing & IT Partner",
  description:
    "Learn about SIDPIN's mission, vision, and core values. We help businesses grow faster with SEO, performance marketing, web engineering, and AI-driven automation.",
};

const pillars = [
  {
    icon: Target,
    title: "Our Mission",
    body: "Our mission is to help businesses of all sizes grow their online presence and revenue through search engine optimization, paid advertising, social media, and high-performance web and app engineering. We believe in complete transparency — clear reporting, honest timelines, and strategies built around your goals, not our packages. Every engagement starts with your customer and ends with measurable growth.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    body: "Our vision is to empower businesses with cutting-edge digital marketing and AI-driven strategies that create sustainable, compounding growth. We want to be the partner brands think of when they decide to stop experimenting and start scaling — a team that stays ahead of every platform shift so our clients are always first to benefit.",
  },
  {
    icon: Rocket,
    title: "Our Specialization",
    body: "We specialize in SEO, pay-per-click advertising, social media marketing, content creation, and analytics — backed by full-stack expertise in web development, mobile apps, e-commerce, and marketing automation. This blend of marketing and engineering under one roof means your campaigns, your website, and your data all work as one system.",
  },
];

const values = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    tagline: "Honest strategies, real results.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    tagline: "Always ahead of trends.",
  },
  {
    icon: HeartHandshake,
    title: "Customer First",
    tagline: "Your growth is our priority.",
  },
  {
    icon: BarChart3,
    title: "Data-Driven",
    tagline: "Every decision backed by numbers.",
  },
  {
    icon: Award,
    title: "Excellence",
    tagline: "High-quality execution, every time.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="bg-surface">
        {/* Hero */}
        <section className="pt-48 pb-32 px-[24px] md:px-[80px]">
          <div className="max-w-[1440px] mx-auto text-center">
            <Reveal>
              <span className="font-['Geist'] text-xs font-medium text-[#4169E1] tracking-[0.4em] uppercase mb-6 block">
                About Us
              </span>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="font-['Hanken_Grotesk'] text-[40px] md:text-[64px] font-semibold leading-tight text-fg mb-8">
                Why SIDPIN is the <span className="text-[#4169E1]">best in town</span>
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="font-['Inter'] text-lg text-fg-2 max-w-3xl mx-auto">
                SIDPIN is a results-driven digital marketing and technology
                agency. We don&apos;t sell one-size-fits-all packages — we build
                customized growth systems that combine performance marketing,
                engineering, and AI to generate qualified leads and measurable
                revenue for your business.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Mission / Vision / Specialization */}
        <section className="py-32 px-[24px] md:px-[80px] bg-surface-2">
          <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pillars.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 150}>
                <div className="glass-panel h-full p-10 md:p-12 border border-white/5 hover:border-[#4169E1]/40 transition-colors duration-500">
                  <div className="w-14 h-14 rounded-full bg-[#4169E1]/10 border border-[#4169E1]/30 flex items-center justify-center mb-8">
                    <pillar.icon size={26} className="text-[#4169E1]" />
                  </div>
                  <h2 className="font-['Hanken_Grotesk'] text-[26px] font-semibold text-fg mb-5">
                    {pillar.title}
                  </h2>
                  <p className="font-['Inter'] text-[15px] leading-relaxed text-fg-2">
                    {pillar.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Core Values */}
        <section className="py-32 px-[24px] md:px-[80px]">
          <div className="max-w-[1440px] mx-auto">
            <div className="text-center mb-20">
              <Reveal>
                <span className="font-['Geist'] text-xs font-medium text-[#4169E1] tracking-[0.4em] uppercase mb-4 block">
                  What We Stand For
                </span>
              </Reveal>
              <Reveal delay={100}>
                <h2 className="font-['Hanken_Grotesk'] text-[36px] md:text-[48px] font-semibold text-fg">
                  Our Core Values
                </h2>
              </Reveal>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {values.map((value, i) => (
                <Reveal key={value.title} delay={i * 100}>
                  <div className="glass-panel h-full p-8 text-center border border-white/5 hover:border-[#4169E1]/40 hover:-translate-y-1.5 transition-all duration-500">
                    <div className="w-12 h-12 mx-auto rounded-full bg-[#4169E1]/10 border border-[#4169E1]/30 flex items-center justify-center mb-6">
                      <value.icon size={22} className="text-[#4169E1]" />
                    </div>
                    <h3 className="font-['Hanken_Grotesk'] text-[18px] font-semibold text-fg mb-3">
                      {value.title}
                    </h3>
                    <p className="font-['Inter'] text-sm text-fg-2">
                      {value.tagline}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Who We Are */}
        <section className="py-32 px-[24px] md:px-[80px] bg-surface-2">
          <div className="max-w-4xl mx-auto text-center">
            <Reveal>
              <span className="font-['Geist'] text-xs font-medium text-[#4169E1] tracking-[0.4em] uppercase mb-6 block">
                Who We Are
              </span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-['Hanken_Grotesk'] text-[32px] md:text-[44px] font-semibold text-fg mb-8">
                Your trusted digital marketing &amp; IT partner
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="font-['Inter'] text-lg text-fg-2 leading-relaxed">
                From startups finding their first customers to established
                brands scaling to new markets, SIDPIN delivers end-to-end
                solutions — SEO, paid media, social, websites, apps, e-commerce,
                cloud, and AI automation. One team, one strategy, one goal:
                making your brand impossible to ignore.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Connect With Us */}
        <section className="py-32 px-[24px] md:px-[80px]">
          <div className="max-w-[1440px] mx-auto text-center">
            <Reveal>
              <h2 className="font-['Hanken_Grotesk'] text-[36px] md:text-[48px] font-semibold text-fg mb-16">
                Connect With Us
              </h2>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-16">
              <Reveal delay={100}>
                <a
                  href="mailto:hello@sidpin.com"
                  className="glass-panel flex flex-col items-center gap-4 p-10 border border-white/5 hover:border-[#4169E1]/40 transition-colors duration-500"
                >
                  <Mail size={24} className="text-[#4169E1]" />
                  <span className="font-['Inter'] text-fg">
                    hello@sidpin.com
                  </span>
                </a>
              </Reveal>
              <Reveal delay={200}>
                <a
                  href="tel:+917453869244"
                  className="glass-panel flex flex-col items-center gap-4 p-10 border border-white/5 hover:border-[#4169E1]/40 transition-colors duration-500"
                >
                  <Phone size={24} className="text-[#4169E1]" />
                  <span className="font-['Inter'] text-fg">
                    +91 074538 69244
                  </span>
                </a>
              </Reveal>
            </div>
            <Reveal delay={300}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-[#4169E1] text-white px-12 py-6 font-['Geist'] text-xs font-medium tracking-[0.3em] uppercase royal-blue-glow hover:translate-x-2 transition-all duration-300"
              >
                Start Your Project <ArrowRight size={16} />
              </Link>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
