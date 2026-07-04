"use client";

import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";

// Official Google logo letter colors
const googleLetters = [
  { ch: "G", color: "#4285F4" },
  { ch: "o", color: "#EA4335" },
  { ch: "o", color: "#FBBC05" },
  { ch: "g", color: "#4285F4" },
  { ch: "l", color: "#34A853" },
  { ch: "e", color: "#EA4335" },
];

export default function RankOnGoogle() {
  return (
    <section className="relative py-[140px] px-[24px] md:px-[80px] bg-surface overflow-hidden">
      <style>{`
        @keyframes rank-float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-14px) rotate(3deg); }
        }
        @keyframes rank-dash {
          to { stroke-dashoffset: -24; }
        }
      `}</style>

      {/* Decorative dotted arcs */}
      <svg
        aria-hidden="true"
        className="absolute top-10 left-8 w-40 h-40 text-[#4169E1]/50 hidden md:block"
        viewBox="0 0 160 160"
        fill="none"
      >
        <path
          d="M10 150 C30 60, 90 20, 150 30"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeDasharray="1 10"
          strokeLinecap="round"
          style={{ animation: "rank-dash 2.5s linear infinite" }}
        />
        <path d="M138 22 L152 30 L140 40" fill="currentColor" />
      </svg>
      <svg
        aria-hidden="true"
        className="absolute bottom-12 right-10 w-36 h-36 text-[#4169E1]/40 hidden md:block"
        viewBox="0 0 160 160"
        fill="none"
      >
        <path
          d="M150 10 C120 90, 60 130, 10 120"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeDasharray="1 10"
          strokeLinecap="round"
          style={{ animation: "rank-dash 2.5s linear infinite" }}
        />
      </svg>

      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-10 items-center">
        {/* Left — copy */}
        <div className="text-center lg:text-left">
          <span className="font-['Geist'] text-xs font-medium text-[#4169E1] tracking-[0.4em] uppercase mb-6 block">
            Search Domination
          </span>
          <h2 className="font-['Hanken_Grotesk'] text-[36px] md:text-[52px] font-bold leading-[1.15] text-fg mb-8">
            Rank Your Website On the{" "}
            <span className="text-[#4169E1]">1st Page</span> of Google Search
          </h2>
          <p className="font-['Inter'] text-lg text-fg-2 leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10">
            If your ultimate business goal is to generate qualified leads
            quickly, you&apos;ve come to the right place. SIDPIN Digital combines
            technical SEO, authority building, and AI-ready search strategy to
            put your brand where customers are already looking — at the top.
          </p>

          <div className="flex flex-col sm:flex-row items-center lg:items-start lg:justify-start justify-center gap-5">
            <Link
              href="/services/seo"
              className="inline-flex items-center gap-3 bg-[#4169E1] text-white px-10 py-5 rounded-full font-['Geist'] text-xs font-semibold tracking-[0.2em] uppercase royal-blue-glow hover:-translate-y-0.5 transition-all duration-300"
            >
              Learn More <ArrowRight size={16} />
            </Link>
            <a
              href="tel:+917453869244"
              className="group inline-flex items-center gap-4"
            >
              <span className="grid h-14 w-14 place-items-center rounded-full bg-[#4169E1]/10 border border-[#4169E1]/30 text-[#4169E1] transition-transform duration-300 group-hover:scale-110">
                <Phone size={20} />
              </span>
              <span className="text-left">
                <span className="block font-['Geist'] text-[10px] tracking-[0.2em] uppercase text-fg-3">
                  Give us a call
                </span>
                <span className="block font-['Inter'] text-[15px] font-semibold text-fg">
                  +91 074538 69244
                </span>
              </span>
            </a>
          </div>
        </div>

        {/* Right — "Be #1 on Google" visual */}
        <div className="flex justify-center">
          <div className="relative select-none">
            <div className="flex items-center justify-center gap-6 mb-2">
              <span className="font-['Hanken_Grotesk'] text-[64px] md:text-[84px] font-bold text-fg leading-none">
                Be
              </span>

              {/* Magnifying glass over #1 */}
              <div
                className="relative"
                style={{ animation: "rank-float 4.5s ease-in-out infinite" }}
              >
                <div className="grid h-32 w-32 md:h-40 md:w-40 place-items-center rounded-full border-[6px] border-fg bg-surface shadow-[0_20px_50px_rgba(65,105,225,0.25)]">
                  <span className="font-['Hanken_Grotesk'] text-[52px] md:text-[64px] font-bold text-fg leading-none">
                    #1
                  </span>
                </div>
                {/* Handle */}
                <div className="absolute -top-3 -right-6 h-[7px] w-16 md:w-20 rotate-[38deg] rounded-full bg-fg origin-left" />
              </div>
            </div>

            <div className="flex items-end justify-center gap-5">
              <span className="font-['Hanken_Grotesk'] text-[40px] md:text-[52px] font-semibold text-fg-2 leading-none pb-3">
                on
              </span>
              <span className="font-['Hanken_Grotesk'] text-[84px] md:text-[120px] font-bold leading-none tracking-tight">
                {googleLetters.map((l, i) => (
                  <span key={`${l.ch}-${i}`} style={{ color: l.color }}>
                    {l.ch}
                  </span>
                ))}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
