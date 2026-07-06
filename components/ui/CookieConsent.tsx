"use client";

import { useEffect, useState } from "react";
import { Cookie, X } from "lucide-react";

const STORAGE_KEY = "sidpin-cookie-consent";

const details = [
  {
    name: "Strictly Necessary",
    desc: "Required for the website to function — theme preference, security, and basic navigation. Always active.",
  },
  {
    name: "Analytics",
    desc: "Help us understand how visitors use our site so we can improve pages, content, and performance.",
  },
  {
    name: "Marketing",
    desc: "Used to measure our campaigns and show you relevant SIDPIN Digital offers across platforms.",
  },
];

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const decide = (value: "accepted" | "declined") => {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {}
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="cookie-slide-up fixed bottom-5 left-5 right-5 md:right-auto md:max-w-[420px] z-[90] rounded-2xl bg-[#0C1424] border border-[#4169E1]/30 shadow-[0_24px_60px_rgba(0,0,0,0.45)] overflow-hidden"
    >
      {/* accent top line */}
      <div className="h-[3px] bg-gradient-to-r from-[#4169E1] to-[#6E8CFF]" />

      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-3">
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-full bg-[#4169E1]/15 border border-[#4169E1]/30 flex items-center justify-center shrink-0">
              <Cookie size={19} className="text-[#6E8CFF]" />
            </span>
            <h4 className="font-['Hanken_Grotesk'] text-[17px] font-bold text-white">
              This website uses cookies
            </h4>
          </div>
          <button
            type="button"
            onClick={() => decide("declined")}
            aria-label="Dismiss cookie banner"
            className="text-white/40 hover:text-white transition-colors cursor-pointer shrink-0"
          >
            <X size={18} />
          </button>
        </div>

        <p className="font-['Inter'] text-[13px] leading-relaxed text-white/75 mb-4">
          This website uses cookies to improve user experience. By using our
          website you consent to all cookies in accordance with our Cookie
          Policy.{" "}
          <button
            type="button"
            onClick={() => setShowDetails((s) => !s)}
            className="text-[#6E8CFF] hover:text-[#8FB0FF] underline underline-offset-2 cursor-pointer transition-colors"
          >
            Read more
          </button>
        </p>

        {/* Expandable details */}
        <div
          className="grid transition-[grid-template-rows] duration-400 ease-out"
          style={{ gridTemplateRows: showDetails ? "1fr" : "0fr" }}
        >
          <div className="overflow-hidden">
            <div className="flex flex-col gap-3 mb-4 rounded-xl bg-white/[0.04] border border-white/10 p-4">
              {details.map((d) => (
                <div key={d.name}>
                  <span className="font-['Hanken_Grotesk'] text-[13px] font-bold text-white block mb-0.5">
                    {d.name}
                  </span>
                  <span className="font-['Inter'] text-[12px] leading-relaxed text-white/60">
                    {d.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => decide("accepted")}
            className="flex-1 font-['Geist'] text-[11px] font-semibold tracking-[0.12em] uppercase bg-[#4169E1] text-white rounded-full px-5 py-3 cursor-pointer hover:bg-[#2E4FB8] transition-colors"
          >
            Accept All
          </button>
          <button
            type="button"
            onClick={() => decide("declined")}
            className="flex-1 font-['Geist'] text-[11px] font-semibold tracking-[0.12em] uppercase bg-transparent border border-white/25 text-white/85 rounded-full px-5 py-3 cursor-pointer hover:border-white/60 hover:text-white transition-colors"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => setShowDetails((s) => !s)}
            className="font-['Geist'] text-[11px] font-semibold tracking-[0.12em] uppercase text-[#6E8CFF] hover:text-[#8FB0FF] cursor-pointer transition-colors whitespace-nowrap"
          >
            {showDetails ? "Hide" : "Show"} details
          </button>
        </div>
      </div>

      <style>{`
        .cookie-slide-up {
          animation: cookieSlideUp 600ms cubic-bezier(0.22, 1, 0.36, 1) 800ms both;
        }
        @keyframes cookieSlideUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
