"use client";

import { useState } from "react";

const projectTypes = [
  "Brand Film",
  "Commercial",
  "Photography",
  "Website",
  "CRM Dev",
  "App Dev",
  "SEO",
  "Branding",
  "Custom",
];

export default function ProjectTypeSelector() {
  const [selected, setSelected] = useState("Website");

  return (
    <section className="py-40 bg-black overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-[24px] md:px-[80px] mb-16">
        <h3 className="font-['Geist'] text-xs font-medium text-[#e2e2e4]/40 tracking-[0.3em] uppercase">
          Choose Your Project Type
        </h3>
      </div>
      <div className="flex overflow-x-auto hide-scrollbar px-[24px] md:px-[80px] gap-[32px] pb-10">
        {projectTypes.map((type) => {
          const isSelected = selected === type;
          return (
            <button
              key={type}
              type="button"
              onClick={() => setSelected(type)}
              className={`flex-none w-72 h-40 glass-card rounded-none flex items-center justify-center p-8 text-center group transition-all ${
                isSelected
                  ? "border-2 border-[#e9c349]"
                  : "hover:border-[#e9c349]"
              }`}
            >
              <span
                className={`font-['Hanken_Grotesk'] text-[32px] font-medium transition-colors ${
                  isSelected
                    ? "text-[#e9c349]"
                    : "text-[#e2e2e4] group-hover:text-[#e9c349]"
                }`}
              >
                {type}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
