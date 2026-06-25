"use client";

export default function VideoShowcase() {
  return (
    <section className="relative overflow-hidden bg-[#05070d] py-[120px] px-6 md:px-[80px]">
      {/* ambient depth */}
      <div className="ai-grid-bg pointer-events-none absolute inset-0 opacity-40" />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[80vh] w-[80vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4169E1]/15 blur-[150px]"
      />

      <div className="relative z-10 mx-auto max-w-[1100px] text-center">
        {/* eyebrow */}
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2 font-['Geist'] text-xs font-medium uppercase tracking-[0.3em] text-[#8FB0FF] backdrop-blur-md">
          <span className="material-symbols-outlined text-[18px]">play_circle</span>
          Showreel
        </span>

        {/* heading */}
        <h2 className="mx-auto mt-8 max-w-3xl font-['Hanken_Grotesk'] text-[40px] md:text-[64px] font-semibold leading-[1.05] tracking-tight text-white">
          Where Vision <span className="gradient-text">Comes To Life</span>
        </h2>
        <p className="mx-auto mt-5 max-w-2xl font-['Inter'] text-lg text-white/60">
          A glimpse of the cinematic content and digital experiences we craft for
          brands that refuse to blend in.
        </p>
      </div>

      {/* Video — blends into the dark band (no frame). mix-blend-screen drops
          the video's black background so only the glowing animation shows. */}
      <div className="relative z-10 mx-auto mt-12 max-w-5xl">
        <video
          src="/showcase.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="block h-auto w-full mix-blend-screen"
          style={{
            WebkitMaskImage:
              "radial-gradient(120% 120% at 50% 50%, #000 60%, transparent 100%)",
            maskImage:
              "radial-gradient(120% 120% at 50% 50%, #000 60%, transparent 100%)",
          }}
        />
      </div>
    </section>
  );
}
