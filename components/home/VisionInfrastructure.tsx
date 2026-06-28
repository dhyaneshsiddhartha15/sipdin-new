"use client";

import IntegrationFlow from "./IntegrationFlow";

export default function VisionInfrastructure() {
  return (
    <section className="relative overflow-hidden bg-surface py-[120px] md:py-[160px] px-[24px] md:px-[80px]">
      {/* Subtle background pattern */}
      <div className="ai-grid-bg pointer-events-none absolute inset-0 opacity-20" />

      <div className="relative z-10 max-w-[1400px] mx-auto">
        {/* Section label */}
        <span className="inline-flex items-center gap-2 rounded-full border border-[#4169E1]/20 bg-[#4169E1]/5 px-5 py-2 font-['Geist'] text-xs font-medium uppercase tracking-[0.3em] text-[#4169E1] backdrop-blur-sm mb-8">
          Section 02 — Who we're built for
        </span>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT: Text content */}
          <div className="text-left">
            {/* Main Headline */}
            <h2 className="font-['Hanken_Grotesk'] text-[40px] md:text-[48px] lg:text-[56px] font-semibold leading-[1.1] tracking-tight mb-8 text-fg">
              You have a vision.
              <br />
              <span className="gradient-text">We build the digital infrastructure around it.</span>
            </h2>

            {/* Body text */}
            <p className="font-['Inter'] text-lg md:text-xl text-fg-2 leading-relaxed mb-8">
              Whether you're opening your first clinic, scaling a restaurant to three
              locations, launching an app you've been sketching for months, or just
              tired of looking less professional than you actually are — this is where
              that changes. We work with businesses that are serious about where
              they're going, and need a team that can keep up.
            </p>

            {/* Visual divider */}
            <div className="flex items-center gap-4">
              <div className="h-px w-16 bg-[#4169E1]/30" />
              <div className="w-2 h-2 rounded-full bg-[#4169E1]" />
              <div className="h-px w-16 bg-[#4169E1]/30" />
            </div>
          </div>

          {/* RIGHT: AI Engine visualization */}
          <div className="relative">
            <IntegrationFlow />
          </div>
        </div>
      </div>

      {/* Bottom ambient glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-[60vh] w-[60vh] rounded-full bg-[#4169E1]/10 blur-[120px]" />
    </section>
  );
}
