"use client";

import { useEffect, useRef } from "react";

const HERO_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAM0g6mSuIgFhLepDjdbzwTFp3MJpNEH8nP1FkgvEM3aTRDWf4TAESKNjP0biu29bFiLjam1CmNvzSPIESRTRYdECVzZ8uc3W3Lol1TlslWqS4t_9FCjt44UftpEvzfyWDEG5lCMm9fMAx23schr36k-vp1ZApimJMZ1FBAmbDzQLlQJCiPCpbQpMg72G0C02QxHWQOMqPPHRvI7Fne1H3md-wnD55MmtBwBR_quDZsPiy1ctyiMlpx9hNQM6IhDVDuJnF-K9i0mcg2";

export default function ParallaxHero() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const el = parallaxRef.current;
      if (!el) return;
      el.style.transform = `translateY(${window.pageYOffset * 0.4}px)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-screen w-full flex items-end justify-start overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div
          ref={parallaxRef}
          className="w-full h-full parallax-section will-change-transform"
          style={{ backgroundImage: `url('${HERO_IMAGE}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/75 to-transparent" />
      </div>
      <div className="relative z-10 px-[24px] md:px-[80px] pb-32 max-w-[1440px] mx-auto w-full">
        <div className="max-w-4xl">
          <span className="font-['Geist'] text-xs font-medium tracking-[0.4em] uppercase text-[#4169E1] mb-6 block">
            The Vision Behind SIDPIN
          </span>
          <h1 className="font-['Hanken_Grotesk'] text-[48px] md:text-[80px] font-semibold leading-[1.1] tracking-tight text-fg">
            Beyond the Lens: <br />
            The Architecture of Growth.
          </h1>
        </div>
      </div>
    </section>
  );
}
