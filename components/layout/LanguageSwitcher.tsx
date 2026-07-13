"use client";

import { useState } from "react";
import { useLocale } from "@/contexts/LocaleContext";
import { LANGUAGE_NAMES, REGION_INFO, type Language, type Region } from "@/lib/locale";

// Short label for the current language shown on the trigger button
const LANGUAGE_SHORT: Record<Language, string> = {
  en: "EN",
  ar: "ع",
};

export default function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { locale, setLanguage, setRegion } = useLocale();
  const [isOpen, setIsOpen] = useState(false);

  const shortLang = LANGUAGE_SHORT[locale.language];
  const currency = REGION_INFO[locale.region].currency;

  return (
    <div className={`relative ${className}`}>
      {/* Button — shows current language + currency so visitors know they can switch */}
      <button
        type="button"
        onClick={() => setIsOpen((v) => !v)}
        className="flex h-12 items-center gap-1.5 rounded-full bg-[#4169E1]/10 px-3.5 text-[#4169E1] transition-colors hover:bg-[#4169E1]/20"
        aria-label="Change language, region or currency"
        title="Change language, region or currency"
      >
        <span className="text-[15px] leading-none">🌐</span>
        <span className="text-[13px] font-semibold leading-none">{shortLang}</span>
        <span className="text-[#4169E1]/40 leading-none">·</span>
        <span className="text-[13px] font-semibold leading-none">{currency}</span>
        <span
          className={`material-symbols-outlined text-[16px] leading-none transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          expand_more
        </span>
      </button>

      {/* Dropdown */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />

          {/* Menu */}
          <div className="absolute right-0 top-14 z-20 w-64 rounded-2xl bg-[#0D1530] p-4 ring-1 ring-[#4169E1]/50 shadow-[0_0_16px_rgba(65,105,225,0.35),0_24px_60px_-16px_rgba(0,0,0,0.7)]">
            {/* Language Section */}
            <div className="mb-4">
              <p className="mb-2 px-2 text-[11px] font-semibold uppercase tracking-wider text-white/40">
                Language
              </p>
              <div className="space-y-1">
                {(Object.keys(LANGUAGE_NAMES) as Language[]).map((lang) => (
                  <button
                    key={lang}
                    type="button"
                    onClick={() => {
                      setLanguage(lang);
                      setIsOpen(false);
                    }}
                    className={`w-full rounded-lg px-3 py-2.5 text-left text-[14px] font-medium transition-colors ${
                      locale.language === lang
                        ? "bg-white/10 text-white"
                        : "text-white/70 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {LANGUAGE_NAMES[lang]}
                  </button>
                ))}
              </div>
            </div>

            {/* Region Section */}
            <div>
              <p className="mb-2 px-2 text-[11px] font-semibold uppercase tracking-wider text-white/40">
                Region & Currency
              </p>
              <div className="space-y-1">
                {(Object.keys(REGION_INFO) as Region[]).map((region) => (
                  <button
                    key={region}
                    type="button"
                    onClick={() => {
                      setRegion(region);
                      setIsOpen(false);
                    }}
                    className={`w-full rounded-lg px-3 py-2.5 text-left text-[14px] font-medium transition-colors ${
                      locale.region === region
                        ? "bg-white/10 text-white"
                        : "text-white/70 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <span className="flex items-center justify-between">
                      <span>{REGION_INFO[region].name}</span>
                      <span className="text-white/40">{REGION_INFO[region].currency}</span>
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
