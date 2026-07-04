"use client";

const CAPABILITIES = [
  {
    icon: "smart_toy",
    title: "AI Engine",
    desc: "Proprietary gesture & sentiment models running real-time inference at the edge.",
  },
  {
    icon: "cloud_sync",
    title: "Cloud Pipeline",
    desc: "Auto-scaling build & deploy pipeline with zero-downtime delivery.",
  },
  {
    icon: "bolt",
    title: "Automation Mesh",
    desc: "Event-driven workflows that nurture, route, and convert without friction.",
  },
  {
    icon: "shield_lock",
    title: "Security Layer",
    desc: "End-to-end encryption, granular access control, and continuous auditing.",
  },
  {
    icon: "analytics",
    title: "Predictive Analytics",
    desc: "Forecasting and intelligent insights that turn raw data into decisions.",
  },
  {
    icon: "hub",
    title: "Unified Integrations",
    desc: "One operating layer connecting communication, payments, and growth tools.",
  },
];

export default function TechnologyCore() {
  return (
    <section className="relative overflow-hidden bg-bg py-[160px] px-6 md:px-[80px]">
      {/* layered ambient backdrop */}
      <div className="ai-mesh-bg pointer-events-none absolute inset-0 opacity-90" />
      <div className="ai-grid-bg pointer-events-none absolute inset-0 opacity-50" />
      <div className="ai-spotlight pointer-events-none absolute inset-x-0 top-0 h-96" />

      <div className="relative z-10 mx-auto max-w-[1440px]">
        {/* Eyebrow pill */}
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 px-5 py-2 font-['Geist'] text-xs font-medium uppercase tracking-[0.3em] text-[#4169E1] backdrop-blur-md">
            <span className="material-symbols-outlined text-[18px]">layers</span>
            Core Protocol 4.5
          </span>
        </div>

        {/* Heading */}
        <h2 className="mx-auto mt-8 max-w-4xl text-center font-['Hanken_Grotesk'] text-[40px] md:text-[72px] font-semibold leading-[1.05] tracking-tight text-fg">
          The <span className="gradient-text">Technology Core</span> <br />
          Powering SIDPIN Digital
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-center font-['Inter'] text-lg text-fg-2">
          A single, intelligent engine orchestrating every layer of your brand —
          from cinematic content to conversion, fully automated and enterprise-grade.
        </p>

        {/* Animated core */}
        <div className="relative mx-auto mt-20 mb-24 grid h-72 w-72 place-items-center">
          {/* rotating conic ring */}
          <div
            className="absolute inset-0 rounded-full opacity-80 animate-[spin_18s_linear_infinite]"
            style={{
              background:
                "conic-gradient(from 0deg,transparent 0deg,#4169E1 90deg,#8FB0FF 160deg,transparent 230deg,#4169E1 320deg,transparent 360deg)",
              mask: "radial-gradient(farthest-side,transparent calc(100% - 2px),#000 calc(100% - 2px))",
              WebkitMask:
                "radial-gradient(farthest-side,transparent calc(100% - 2px),#000 calc(100% - 2px))",
            }}
          />
          {/* counter-rotating dashed ring */}
          <div
            className="absolute inset-8 rounded-full border border-dashed border-[#4169E1]/30 animate-[spin_26s_linear_infinite_reverse]"
          />
          {/* glow */}
          <div className="absolute inset-10 rounded-full bg-[#4169E1]/20 blur-2xl" />
          {/* pulse ring */}
          <div className="absolute inset-12 rounded-full border border-[#4169E1]/40 animate-ping" />
          {/* core orb */}
          <div className="relative grid h-32 w-32 place-items-center rounded-full glass-panel brand-glow">
            <span className="material-symbols-outlined text-5xl text-[#4169E1] text-glow">
              memory
            </span>
          </div>
          {/* orbiting dots */}
          {[0, 120, 240].map((deg) => (
            <div
              key={deg}
              className="absolute inset-0 animate-[spin_12s_linear_infinite]"
              style={{ transform: `rotate(${deg}deg)` }}
            >
              <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-gradient-to-br from-[#6E8CFF] to-[#4169E1] shadow-[0_0_12px_rgba(65,105,225,0.8)]" />
            </div>
          ))}
        </div>

        {/* Capability cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CAPABILITIES.map((c) => (
            <div
              key={c.title}
              className="hover-lift group relative overflow-hidden rounded-3xl glass-card p-8 transition-colors duration-300 hover:border-[#4169E1]/50"
            >
              {/* animated gradient border on hover */}
              <span className="gradient-ring absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              {/* hover spotlight glow */}
              <span className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#4169E1]/25 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative z-10">
                <div className="mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-[#6E8CFF] to-[#2E4FB8] text-white shadow-[0_10px_24px_-10px_rgba(65,105,225,0.8)] transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3">
                  <span className="material-symbols-outlined text-[28px]">{c.icon}</span>
                </div>
                <h3 className="mb-3 font-['Hanken_Grotesk'] text-2xl font-semibold text-fg">
                  {c.title}
                </h3>
                <p className="font-['Inter'] text-sm leading-relaxed text-fg-2">
                  {c.desc}
                </p>
                <div className="mt-6 flex items-center gap-2 font-['Geist'] text-xs font-medium uppercase tracking-[0.18em] text-[#4169E1] opacity-0 transition-all duration-300 group-hover:opacity-100">
                  Explore
                  <span className="material-symbols-outlined text-[16px] transition-transform duration-300 group-hover:translate-x-1">
                    arrow_forward
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
