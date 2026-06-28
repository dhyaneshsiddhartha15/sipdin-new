"use client";

import { useEffect, useState } from "react";

const WORDS = [
  { text: "Create.", color: "#F97316" },  // orange
  { text: "Build.", color: "#EF4444" },   // red
  { text: "Scale.", color: "#22C55E" },   // green
  { text: "Deliver.", color: "#EAB308" }, // yellow
];

const INTERVAL = 1500; // ms per word

export default function WordCycleHero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((a) => (a + 1) % WORDS.length);
    }, INTERVAL);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex flex-col items-center gap-4">
      {/* pill badge */}
      <div className="inline-flex items-center gap-2 rounded-full border border-[#4169E1]/30 bg-[#4169E1]/10 px-4 py-1.5 font-['Geist'] text-xs font-medium text-[#4169E1]">
        <span className="h-2 w-2 rounded-full bg-[#4169E1] animate-pulse" />
        SIDPIN — Cinematic Precision in Every Frame
      </div>

      {/* word row */}
      <div className="flex flex-wrap justify-center gap-3 md:gap-4 font-['Hanken_Grotesk'] text-4xl md:text-6xl lg:text-7xl font-semibold">
        {WORDS.map((w, i) => {
          const isActive = i === active;
          return (
            <span
              key={w.text}
              className="transition-all duration-500"
              style={{
                color: isActive ? w.color : "#5A6473",
                textShadow: isActive ? `0 0 40px ${w.color}66` : "none",
                transform: isActive ? "scale(1.08)" : "scale(1)",
              }}
            >
              {w.text}
            </span>
          );
        })}
      </div>

      {/* subheadline */}
      <p className="font-['Inter'] text-lg text-fg-2 max-w-2xl text-center mt-4">
        We engineer brands, systems, and growth that last.
      </p>
    </div>
  );
}
