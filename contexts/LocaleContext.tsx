"use client";

import { createContext, useContext, useState, useEffect, ReactNode, useMemo } from "react";
import type { Language, Region, Locale } from "@/lib/locale";
import { detectRegion, getDirection, createTranslator } from "@/lib/locale";
import type { TranslationKey } from "@/lib/translations";

type LocaleContextType = {
  locale: Locale;
  setLanguage: (lang: Language) => void;
  setRegion: (region: Region) => void;
  t: (key: TranslationKey) => string;
};

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(() => {
    // Initialize from localStorage or defaults
    if (typeof window !== "undefined") {
      const savedLang = localStorage.getItem("sidpin-language") as Language | null;
      const savedRegion = localStorage.getItem("sidpin-region") as Region | null;
      return {
        language: savedLang || "en",
        region: savedRegion || detectRegion(),
      };
    }
    return { language: "en", region: "intl" };
  });

  // Update document direction when language changes
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.dir = getDirection(locale.language);
      document.documentElement.lang = locale.language;
    }
  }, [locale.language]);

  const setLanguage = (lang: Language) => {
    setLocale((prev) => ({ ...prev, language: lang }));
    if (typeof window !== "undefined") {
      localStorage.setItem("sidpin-language", lang);
    }
  };

  const setRegion = (region: Region) => {
    setLocale((prev) => ({ ...prev, region }));
    if (typeof window !== "undefined") {
      localStorage.setItem("sidpin-region", region);
    }
  };

  // Create translator function
  const t = useMemo(() => createTranslator(locale.language), [locale.language]);

  return (
    <LocaleContext.Provider value={{ locale, setLanguage, setRegion, t }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return context;
}
