"use client";

import { useLocale } from "@/contexts/LocaleContext";
import type { Language } from "@/lib/locale";

/** Order of the slider segments (kept LTR so EN is always on the left). */
const LANG_ORDER: { key: Language; label: string }[] = [
  { key: "en", label: "EN" },
  { key: "ar", label: "AR" },
];

export default function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { locale, setLanguage } = useLocale();

  return (
    <div className={`flex items-center ${className}`}>
      {/* EN / AR sliding toggle (always LTR so the geometry never flips) */}
      <div
        dir="ltr"
        role="group"
        aria-label="Language"
        className="flex h-10 items-center rounded-full bg-[#4169E1]/10 p-1"
      >
        {LANG_ORDER.map((l) => {
          const isActive = locale.language === l.key;
          return (
            <button
              key={l.key}
              type="button"
              onClick={() => setLanguage(l.key)}
              aria-pressed={isActive}
              className="w-11 rounded-full text-[13px] font-bold leading-none"
              style={{
                paddingBlock: "0.45rem",
                background: isActive ? "#4169E1" : "transparent",
                color: isActive ? "#ffffff" : "#4169E1",
                boxShadow: isActive ? "0 2px 8px rgba(65,105,225,0.45)" : "none",
              }}
            >
              {l.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
