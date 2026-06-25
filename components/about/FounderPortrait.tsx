"use client";

import { useRef } from "react";

export default function FounderPortrait() {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;

    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const moveX = (clientX - innerWidth / 2) / 40;
    const moveY = (clientY - innerHeight / 2) / 40;

    el.style.transform = `rotateY(${moveX}deg) rotateX(${-moveY}deg)`;
  };

  const handleMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "rotateY(0deg) rotateX(0deg)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative group w-full max-w-md aspect-[3/4] overflow-hidden cinematic-shadow rounded-sm transition-transform duration-300"
      style={{ transformStyle: "preserve-3d" }}
    >
      <img
        className="w-full h-full object-cover transition-transform duration-700 scale-105 group-hover:scale-110"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrpoo4j94SC2YdUSAtAmo903uwMuXSKzExPgPU6ASg4zX5b4jNzFh8cvO3RDWtFiN9slCZjmc_e2C5xdP-a-uh5l-qo3OD4-XauQBCsDsLfzzEgmTC0IY_ucytkbJW9DVfptuGscDGCmHEtvJE7A8ZGIbaSe21HpVnVDRJHW0NvoAI68Z4YWtfKmIwpgqRNreUxy0YjHGEibvsQFXI18cHpzFYerF-584WBr-TMCjZuVXmfirlIhcZyLDdI5l2YdBaIqDPwEzFGL3D"
        alt="Cinematic portrait of founder Anand Siddhartha"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <div className="absolute bottom-8 left-8">
        <p className="font-['Geist'] text-xs font-medium text-[#4169E1] tracking-[0.2em] uppercase mb-2">
          The Visionary
        </p>
        <h3 className="font-['Hanken_Grotesk'] text-[32px] font-medium text-fg">
          Anand Siddhartha
        </h3>
      </div>
    </div>
  );
}
