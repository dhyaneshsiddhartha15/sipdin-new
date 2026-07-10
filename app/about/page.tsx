import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Reveal from "@/components/studio/Reveal";

export const metadata: Metadata = {
  title: "About Us | SIDPIN Digital — Digital Marketing & IT Partner",
  description:
    "Learn about SIDPIN Digital's mission, vision, and core values. We help businesses grow faster with SEO, performance marketing, web engineering, and AI-driven automation.",
};

const clientLogos = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

const values = [
  {
    icon: "diamond",
    iconColor: "#EC4899",
    cardBg: "#FDF0EC",
    title: "We value our people and our reputation",
    body: "We believe that there is no substitute for real talent. Every person has a different set of skills, and we know people are the assets of an agency.",
  },
  {
    icon: "handshake",
    iconColor: "#4169E1",
    cardBg: "#EEF1FE",
    title: "You can trust us",
    body: "Trust forms the basis of our business. We partner with clients to build relationships based on trust and mutual respect. This in turn helps us build great brands and long term relationships.",
  },
  {
    icon: "percent",
    iconColor: "#22C55E",
    cardBg: "#EAF9F1",
    title: "We Keep 100% Transparency",
    body: "We think that transparency is the future of good business.",
  },
  {
    icon: "workspace_premium",
    iconColor: "#A855F7",
    cardBg: "#F7EDFD",
    title: "We Have 5+ Years of Experience",
    body: "We have a well-experienced team — our clients benefit from proven playbooks across hospitality, education, healthcare, retail, and more.",
  },
];

const strengths = [
  {
    icon: "lightbulb",
    title: "Continuous Innovation and Adaptability",
    body: "We stay ahead by embracing the latest trends and technologies in digital marketing.",
  },
  {
    icon: "description",
    title: "Transparent Reporting and Accountability",
    body: "Regular, detailed reports and open communication ensure complete transparency.",
  },
  {
    icon: "search_insights",
    title: "Strong Focus on ROI and Business Growth",
    body: "Our primary goal is to drive tangible results and foster business growth.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white">
        {/* ============ 0. HERO ============ */}
        <section className="relative bg-white pt-[170px] pb-[100px] px-[24px] md:px-[80px] overflow-hidden">
          {/* faint vertical guide lines */}
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none hidden lg:block">
            <span className="absolute top-0 bottom-0 left-[25%] w-px bg-black/[0.04]" />
            <span className="absolute top-0 bottom-0 left-[50%] w-px bg-black/[0.04]" />
            <span className="absolute top-0 bottom-0 left-[75%] w-px bg-black/[0.04]" />
          </div>

          <div className="relative max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left — copy */}
            <div>
              <Reveal>
                <h1 className="font-['Hanken_Grotesk'] text-[clamp(42px,5vw,66px)] font-semibold leading-[1.18] text-[#1A1A1A] mb-9">
                  Crafting{" "}
                  <span className="underline decoration-[#4169E1] decoration-[5px] underline-offset-[12px]">
                    top-notch
                  </span>{" "}
                  digital business solutions
                </h1>
                <p className="font-['Inter'] text-[16px] leading-[1.9] text-[#555555] max-w-[540px] mb-10">
                  We are a full-service marketing agency founded in 2014, and
                  we are best known for our strategic brand solutions. Over the
                  years, we have grown alongside our clients, continuously
                  expanding our range of services and expertise to empower
                  brands to thrive in the ever-changing digital landscape.
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="tel:+917453869244"
                    className="bg-[#1A1A1A] text-white font-['Inter'] text-[15px] font-semibold px-8 py-4 rounded-[4px] hover:bg-[#4169E1] transition-colors duration-300"
                  >
                    Call Now
                  </a>
                  <Link
                    href="/case-studies"
                    className="inline-flex items-center gap-3 bg-white border border-[#d7e0f7] text-[#1A1A1A] font-['Inter'] text-[15px] font-semibold px-8 py-4 rounded-[4px] hover:border-[#4169E1]/60 transition-colors duration-300"
                  >
                    <span className="material-symbols-outlined text-[20px]">play_arrow</span>
                    Watch Video
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* Right — geometric collage */}
            <Reveal delay={150}>
              <div aria-hidden="true" className="hidden md:grid grid-cols-3 gap-4 max-w-[520px] mx-auto">
                {/* row 1 */}
                <div className="h-[150px] flex items-center">
                  <span className="block w-full h-[92px] rounded-full border-[3px] border-[#1A1A1A]" />
                </div>
                <div className="h-[150px] flex items-center justify-center">
                  <span className="w-[120px] h-[120px] rounded-full bg-[#7C6FF0] flex items-center justify-center">
                    <span className="material-symbols-outlined text-white text-[44px]">stars</span>
                  </span>
                </div>
                <div className="h-[150px]">
                  <span className="block w-full h-full rounded-l-full bg-[#5FBF8B]" />
                </div>
                {/* row 2 */}
                <div className="h-[170px] flex items-center justify-center">
                  <span className="w-[120px] h-[120px] rounded-full bg-[#1A1A1A]" />
                </div>
                <div className="h-[170px] rounded-2xl bg-[#F0913C] flex items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/logo-mark.png" alt="" className="w-20 h-20 object-contain" />
                </div>
                <div className="h-[170px] flex items-end">
                  <span className="block w-full h-[85px] rounded-t-full bg-[#2E6BE6]" />
                </div>
                {/* row 3 */}
                <div className="h-[150px]">
                  <span
                    className="block w-full h-full bg-[#7C6FF0]"
                    style={{ clipPath: "polygon(0 0, 0 100%, 100% 100%)" }}
                  />
                </div>
                <div className="h-[150px] flex items-start justify-center">
                  <span className="block w-[130px] h-[65px] rounded-b-full bg-[#2E6BE6]" />
                </div>
                <div className="h-[150px] rounded-full bg-[#1A1A1A] flex items-center justify-center">
                  <span className="block w-[54px] h-[54px] rounded-full bg-[#F4EFE4] [clip-path:inset(0_50%_0_0)]" />
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============ 1. CLIENTS BAND ============ */}
        <section className="relative bg-[#F7F8FA] pt-[90px] pb-[90px] px-[24px] md:px-[80px] overflow-hidden">
          {/* faint vertical guide lines */}
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none hidden lg:block">
            <span className="absolute top-0 bottom-0 left-[25%] w-px bg-black/[0.04]" />
            <span className="absolute top-0 bottom-0 left-[50%] w-px bg-black/[0.04]" />
            <span className="absolute top-0 bottom-0 left-[75%] w-px bg-black/[0.04]" />
          </div>

          <div className="relative max-w-[1300px] mx-auto">
            <Reveal>
              <span className="font-['Geist'] text-xs font-medium tracking-[0.4em] uppercase text-[#4169E1] mb-6 block">
                Our Clients
              </span>
              <h2 className="font-['Hanken_Grotesk'] text-[clamp(28px,3.6vw,44px)] font-semibold leading-[1.3] text-[#1A1A1A] mb-6 max-w-3xl">
                We&apos;ve worked on over{" "}
                <span className="text-[#4169E1]">150+ projects</span> with{" "}
                <span className="text-[#4169E1]">100+ clients</span>
              </h2>
              <p className="font-['Inter'] text-[17px] text-[#555555] leading-relaxed">
                We believe that our greatest reward lies in our clients&apos;
                trust and satisfaction.
              </p>
              <p className="font-['Inter'] text-[17px] text-[#8a8a8a] leading-relaxed mb-14">
                We aren&apos;t just an agency; we are your dedicated partner.
              </p>
            </Reveal>

            {/* client logos */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-12 gap-y-10 items-center">
              {clientLogos.map((n, i) => (
                <Reveal key={n} delay={i * 80}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`/logos/${n}.png`}
                    alt="SIDPIN Digital client logo"
                    loading="lazy"
                    className="mx-auto h-[54px] w-auto object-contain opacity-70 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0"
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ 2. COMMITMENT + VALUE CARDS ============ */}
        <section className="relative bg-white py-[130px] px-[24px] md:px-[80px] overflow-hidden">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none hidden lg:block">
            <span className="absolute top-0 bottom-0 left-[25%] w-px bg-black/[0.04]" />
            <span className="absolute top-0 bottom-0 left-[50%] w-px bg-black/[0.04]" />
            <span className="absolute top-0 bottom-0 left-[75%] w-px bg-black/[0.04]" />
          </div>

          <div className="relative max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            {/* Left — commitment copy */}
            <div className="lg:sticky lg:top-36">
              <Reveal>
                <h2 className="font-['Hanken_Grotesk'] text-[clamp(34px,4vw,52px)] font-semibold leading-[1.25] text-[#1A1A1A] mb-8">
                  Driving Dreams, Defining Values: Our Agency&apos;s{" "}
                  <span className="underline decoration-[#4169E1] decoration-[4px] underline-offset-[10px]">
                    Commitment
                  </span>
                </h2>
                <p className="font-['Inter'] text-[16px] leading-[1.9] text-[#555555] mb-10 max-w-[540px]">
                  We go beyond the ordinary at SIDPIN Digital, driven by a
                  passion for innovation and a commitment to our core values.
                  With trust as our foundation, we collaborate as dedicated
                  partners to deliver impactful strategies that propel your
                  brand to new heights in the ever-evolving digital world. Join
                  us in unleashing your brand&apos;s potential and writing a
                  success story together!
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 font-['Inter'] text-[15px] font-semibold text-[#4169E1] border border-[#4169E1] rounded-[6px] px-7 py-3.5 hover:bg-[#4169E1] hover:text-white transition-colors duration-300"
                >
                  Learn More <span aria-hidden="true">&#8594;</span>
                </Link>
              </Reveal>
            </div>

            {/* Right — pastel value cards */}
            <div className="flex flex-col gap-7">
              {values.map((v, i) => (
                <Reveal key={v.title} delay={i * 120}>
                  <div
                    className="rounded-2xl p-8 transition-transform duration-400 hover:-translate-y-1"
                    style={{ background: v.cardBg }}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <span
                        className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                        style={{ background: v.iconColor }}
                      >
                        <span className="material-symbols-outlined text-white text-[24px]">
                          {v.icon}
                        </span>
                      </span>
                      <h3 className="font-['Hanken_Grotesk'] text-[19px] font-bold text-[#1A1A1A] leading-snug">
                        {v.title}
                      </h3>
                    </div>
                    <p className="font-['Inter'] text-[15px] leading-[1.85] text-[#555555]">
                      {v.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ 3. STRENGTHS ROW ============ */}
        <section className="bg-[#F7F8FA] py-[110px] px-[24px] md:px-[80px]">
          <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {strengths.map((s, i) => (
              <Reveal key={s.title} delay={i * 120}>
                <div className="h-full bg-white rounded-xl px-8 py-12 text-center shadow-[0_16px_50px_-30px_rgba(26,26,26,0.35)] transition-transform duration-400 hover:-translate-y-1.5">
                  <span className="material-symbols-outlined text-[#4169E1] text-[40px] mb-5 inline-block">
                    {s.icon}
                  </span>
                  <h3 className="font-['Hanken_Grotesk'] text-[20px] font-bold text-[#1A1A1A] leading-snug mb-4">
                    {s.title}
                  </h3>
                  <p className="font-['Inter'] text-[14.5px] leading-[1.8] text-[#555555]">
                    {s.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ============ 4. WE LOVE STARTUPS ============ */}
        <section className="bg-white py-[130px] px-[24px] md:px-[80px] overflow-hidden">
          <div className="max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left — red card with floating stat cards */}
            <Reveal>
              <div className="relative mx-auto w-full max-w-[430px] pt-16 pb-6">
                {/* blurred blobs behind */}
                <span
                  aria-hidden="true"
                  className="absolute right-0 top-24 w-52 h-52 rounded-[40%] bg-[#2E6BE6]/70 blur-[2px]"
                />
                <span
                  aria-hidden="true"
                  className="absolute right-6 top-48 w-44 h-44 rounded-[45%] bg-[#5FBF8B]/70"
                />
                <span
                  aria-hidden="true"
                  className="absolute -left-8 top-40 w-24 h-2.5 rotate-[-35deg] rounded-full bg-[#9BD4E8]"
                />
                <span
                  aria-hidden="true"
                  className="absolute -left-2 top-56 w-16 h-2 rotate-[-35deg] rounded-full bg-[#9BD4E8]/70"
                />

                {/* red portrait card */}
                <div className="relative rounded-[24px] bg-gradient-to-b from-[#C4161C] to-[#8E0F14] aspect-[3/4] max-w-[340px] mx-auto flex items-center justify-center overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/logo-full-white.png"
                    alt="SIDPIN Digital"
                    className="w-44 object-contain drop-shadow-[0_16px_40px_rgba(0,0,0,0.4)]"
                  />
                </div>

                {/* Earning card */}
                <div className="absolute top-0 left-0 w-[210px] rounded-2xl bg-white shadow-[0_24px_60px_-20px_rgba(26,26,26,0.35)] p-5">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-['Inter'] text-[11px] text-[#9a968c]">Your Earning</span>
                    <span className="font-['Inter'] text-[11px] font-semibold text-[#4169E1]">&#9650; +2.45%</span>
                  </div>
                  <span className="font-['Hanken_Grotesk'] block text-[24px] font-bold text-[#12203E] mb-3">
                    &#8377;60.1K
                  </span>
                  <div className="flex items-end gap-1.5 h-[54px]">
                    {[34, 46, 28, 52, 38, 46, 30, 54].map((h, i) => (
                      <span
                        key={i}
                        className="flex-1 rounded-full bg-[#4169E1]/80"
                        style={{ height: `${h}px` }}
                      />
                    ))}
                  </div>
                </div>

                {/* Spend card */}
                <div className="absolute top-24 right-0 w-[210px] rounded-2xl bg-white shadow-[0_24px_60px_-20px_rgba(26,26,26,0.35)] p-5">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-['Inter'] text-[11px] text-[#9a968c]">Spend this month</span>
                    <span className="font-['Inter'] text-[11px] font-semibold text-[#22C55E]">&#9650; +7.45%</span>
                  </div>
                  <span className="font-['Hanken_Grotesk'] block text-[24px] font-bold text-[#12203E] mb-2">
                    &#8377;20.5K
                  </span>
                  <svg viewBox="0 0 170 50" className="w-full h-[50px]" aria-hidden="true">
                    <polyline
                      points="0,40 18,28 34,38 50,16 66,30 82,10 98,26 114,18 130,34 146,12 170,22"
                      fill="none"
                      stroke="#2EBD85"
                      strokeWidth="2.5"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            </Reveal>

            {/* Right — copy */}
            <div>
              <Reveal>
                <h2 className="font-['Hanken_Grotesk'] text-[clamp(32px,4vw,50px)] font-semibold leading-[1.3] text-[#1A1A1A] mb-9">
                  We{" "}
                  <span className="underline decoration-[#4169E1] decoration-[4px] underline-offset-[10px]">
                    love
                  </span>{" "}
                  startups and innovations
                </h2>
              </Reveal>
              <div className="flex flex-col gap-6 mb-11">
                <Reveal delay={100}>
                  <p className="font-['Inter'] text-[16px] leading-[1.9] text-[#555555]">
                    At SIDPIN Digital, we provide{" "}
                    <strong className="text-[#1A1A1A]">
                      top digital marketing consulting services
                    </strong>{" "}
                    and strategies along with cost-effective solutions — our
                    expertise saves our clients&apos; valuable time, effort,
                    and money.
                  </p>
                </Reveal>
                <Reveal delay={200}>
                  <p className="font-['Inter'] text-[16px] leading-[1.9] text-[#555555]">
                    We are committed to earning our clients&apos; trust through
                    outstanding execution and uncompromising dedication to
                    their success. Our aim is to help small businesses grow
                    using our pool of experienced and certified talent.
                  </p>
                </Reveal>
                <Reveal delay={300}>
                  <p className="font-['Inter'] text-[16px] leading-[1.9] text-[#555555]">
                    Businesses come across many issues during growth and our
                    model is to be there with you every step of the way. You
                    can count on our honesty.
                  </p>
                </Reveal>
              </div>
              <Reveal delay={400}>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-3 bg-white border border-[#4169E1] text-[#1A1A1A] font-['Inter'] text-[15px] font-semibold rounded-[4px] px-7 py-4 hover:bg-[#4169E1] hover:text-white transition-colors duration-300"
                >
                  See How We Can Help You{" "}
                  <span
                    aria-hidden="true"
                    className="material-symbols-outlined text-[20px]"
                  >
                    arrow_circle_right
                  </span>
                </Link>
              </Reveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
