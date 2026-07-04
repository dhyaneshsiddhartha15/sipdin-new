import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Reveal from "@/components/studio/Reveal";

export const metadata: Metadata = {
  title: "Our Work | SIDPIN Case Studies",
  description:
    "Real results across social media growth, CRM platforms, e-commerce, web engineering, video production, and marketing automation.",
};

const featured = {
  tag: "Social Media Growth",
  title: "Panchbhoot Yog — Building a Wellness Brand to 716K+ Followers",
  description:
    "A Haridwar-based yoga and naturopathy brand needed to reach students far beyond its city. Through consistent content systems, reels strategy, and community management, the page grew into one of the largest wellness communities in its niche — 716K+ followers and thousands of engaged students.",
  image: "/social/social-case-1.jpeg",
  href: "/services/social-media-management",
  stats: [
    { value: "716K+", label: "Followers" },
    { value: "2.2K+", label: "Posts Published" },
    { value: "Organic", label: "Growth Engine" },
  ],
};

const cases = [
  {
    tag: "Social Media Marketing",
    title: "Wellness Content Engine",
    description:
      "A repeatable reels and carousel system that keeps a health brand in front of its audience every single day.",
    image: "/social/social-case-2.jpeg",
    href: "/services/social-media-marketing",
  },
  {
    tag: "Enterprise CRM",
    title: "SIDPIN CRM Platform",
    description:
      "A custom CRM that organizes inquiries, follow-ups, payments, and communication into one operational dashboard.",
    image: "/crm/crm-1.jpeg",
    href: "/services/marketing-automation",
  },
  {
    tag: "E-commerce",
    title: "High-Converting Storefront",
    description:
      "An e-commerce build engineered for fast checkout, repeat purchases, and clean product storytelling.",
    image: "/expertise/ecommerce.jpg",
    href: "/services/ecommerce-development",
  },
  {
    tag: "Web Engineering",
    title: "Conversion-First Web Platform",
    description:
      "A fast, secure, SEO-ready website rebuilt from the ground up to turn visitors into qualified leads.",
    image: "/expertise/web-development.jpg",
    href: "/services/web-development",
  },
  {
    tag: "Video Production",
    title: "Cinematic Brand Storytelling",
    description:
      "Long-form and short-form edits that keep audiences watching — from brand films to daily social content.",
    image: "/expertise/video-editing.jpg",
    href: "/services/video-editing",
  },
  {
    tag: "Marketing Automation",
    title: "Always-On Lead Nurturing",
    description:
      "CRM flows, email sequences, and WhatsApp automation that follow up with every lead — without manual work.",
    image: "/expertise/automation.jpg",
    href: "/services/marketing-automation",
  },
];

export default function WorkPage() {
  return (
    <>
      <Navbar />
      <main className="bg-surface">
        {/* Hero */}
        <section className="pt-48 pb-24 px-[24px] md:px-[80px]">
          <div className="max-w-[1440px] mx-auto text-center">
            <Reveal>
              <span className="font-['Geist'] text-xs font-medium text-[#4169E1] tracking-[0.4em] uppercase mb-6 block">
                Our Work
              </span>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="font-['Hanken_Grotesk'] text-[40px] md:text-[64px] font-semibold leading-tight text-fg mb-8">
                Case Studies That <span className="text-[#4169E1]">Speak Results</span>
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="font-['Inter'] text-lg text-fg-2 max-w-3xl mx-auto">
                From growing wellness brands to hundreds of thousands of
                followers, to building CRMs, storefronts, and automation systems
                — here is a look at the work we do and the outcomes it creates.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Featured case study */}
        <section className="pb-24 px-[24px] md:px-[80px]">
          <div className="max-w-[1440px] mx-auto">
            <Reveal>
              <Link
                href={featured.href}
                className="group grid grid-cols-1 lg:grid-cols-2 glass-panel border border-line/40 hover:border-[#4169E1]/50 rounded-3xl overflow-hidden transition-colors duration-500"
              >
                <div className="relative min-h-[380px] lg:min-h-[520px] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent lg:bg-gradient-to-r" />
                </div>
                <div className="p-10 md:p-16 flex flex-col justify-center">
                  <span className="inline-flex self-start font-['Geist'] text-[11px] font-semibold tracking-[0.2em] uppercase text-[#4169E1] border border-[#4169E1]/40 rounded-full px-4 py-1.5 mb-8">
                    {featured.tag}
                  </span>
                  <h2 className="font-['Hanken_Grotesk'] text-[28px] md:text-[38px] font-semibold leading-tight text-fg mb-6">
                    {featured.title}
                  </h2>
                  <p className="font-['Inter'] text-base md:text-lg text-fg-2 leading-relaxed mb-10">
                    {featured.description}
                  </p>
                  <div className="grid grid-cols-3 gap-6 mb-10">
                    {featured.stats.map((stat) => (
                      <div key={stat.label}>
                        <p className="font-['Hanken_Grotesk'] text-[26px] md:text-[32px] font-bold text-[#4169E1]">
                          {stat.value}
                        </p>
                        <p className="font-['Geist'] text-[11px] tracking-[0.12em] uppercase text-fg-3">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-2 font-['Geist'] text-xs font-semibold tracking-[0.2em] uppercase text-fg group-hover:text-[#4169E1] transition-colors">
                    Read More{" "}
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1.5"
                    />
                  </span>
                </div>
              </Link>
            </Reveal>
          </div>
        </section>

        {/* Case studies grid */}
        <section className="pb-32 px-[24px] md:px-[80px]">
          <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cases.map((item, i) => (
              <Reveal key={item.title} delay={(i % 3) * 120}>
                <Link
                  href={item.href}
                  className="group flex flex-col h-full glass-panel border border-line/40 hover:border-[#4169E1]/50 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(65,105,225,0.15)]"
                >
                  <div className="relative h-[240px] overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.05]"
                    />
                    <span className="absolute top-4 left-4 font-['Geist'] text-[10px] font-semibold tracking-[0.15em] uppercase text-white bg-black/55 backdrop-blur-sm rounded-full px-3.5 py-1.5">
                      {item.tag}
                    </span>
                  </div>
                  <div className="flex flex-col flex-1 p-8">
                    <h3 className="font-['Hanken_Grotesk'] text-[21px] font-semibold text-fg mb-3 leading-snug">
                      {item.title}
                    </h3>
                    <p className="font-['Inter'] text-[14.5px] text-fg-2 leading-relaxed flex-1">
                      {item.description}
                    </p>
                    <span className="inline-flex items-center gap-2 mt-6 font-['Geist'] text-[11px] font-semibold tracking-[0.18em] uppercase text-fg-3 group-hover:text-[#4169E1] transition-colors">
                      View Details
                      <ArrowUpRight
                        size={14}
                        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-32 px-[24px] md:px-[80px] bg-surface-2">
          <div className="max-w-[1440px] mx-auto text-center">
            <Reveal>
              <h2 className="font-['Hanken_Grotesk'] text-[36px] md:text-[56px] font-semibold leading-tight text-fg mb-8">
                Your Brand Could Be <br />
                The Next Case Study.
              </h2>
            </Reveal>
            <Reveal delay={150}>
              <p className="font-['Inter'] text-lg text-fg-2 max-w-2xl mx-auto mb-14">
                Tell us where your business is today and where you want it to
                be — we&apos;ll engineer the system that gets it there.
              </p>
            </Reveal>
            <Reveal delay={250}>
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
