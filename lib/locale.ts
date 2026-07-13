/**
 * Locale & Region system for language switching and region-based pricing
 */

import type { TranslationKey } from "./translations";
import { translations } from "./translations";

export type Language = "en" | "ar";
export type Region = "in" | "intl"; // in = India (INR), intl = International (USD)

export type Locale = {
  language: Language;
  region: Region;
};

// Language names for display
export const LANGUAGE_NAMES: Record<Language, string> = {
  en: "English",
  ar: "العربية", // Arabic
};

// Currency symbols and codes by region
export const REGION_INFO = {
  in: { currency: "₹", code: "INR", name: "India (INR)" },
  intl: { currency: "$", code: "USD", name: "International (USD)" },
};

// Conversion rate: 1 USD ≈ 83 INR (approximate, for display)
const USD_TO_INR = 83;

/**
 * Convert INR price to USD (divide by rate)
 */
export function inrToUsd(inrPrice: string): string {
  // Extract numeric value from INR range (e.g., "₹18,000 – ₹28,000" -> [18000, 28000])
  const numbers = inrPrice.match(/[\d,]+/g);
  if (!numbers) return inrPrice;

  const values = numbers.map((n) => {
    const num = parseInt(n.replace(/,/g, ""), 10);
    // Convert to USD and round
    const usd = Math.round(num / USD_TO_INR);
    return `$${usd.toLocaleString()}`;
  });

  return values.length === 1 ? values[0] : `${values[0]} – ${values[1]}`;
}

/**
 * Format price based on region
 */
export function formatPrice(inrPrice: string, region: Region): string {
  if (region === "in") {
    return inrPrice; // Return as-is for India
  }
  return inrToUsd(inrPrice); // Convert to USD for international
}

/**
 * Detect user's region from IP geolocation or browser locale
 * This is a simplified version - you can enhance with actual IP detection
 */
export function detectRegion(): Region {
  // Check if user has previously set a preference
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem("sidpin-region");
    if (saved === "in" || saved === "intl") return saved;
  }

  // Detect from browser locale (simplified)
  if (typeof navigator !== "undefined") {
    const locale = navigator.language || navigator.languages?.[0] || "";
    // Indian locales: en-IN, hi-IN, etc.
    if (locale.includes("-IN") || locale.includes("IN")) {
      return "in";
    }
  }

  // Default to international
  return "intl";
}

/**
 * Check if language is RTL (right-to-left)
 */
export function isRTL(language: Language): boolean {
  return language === "ar";
}

/**
 * Get direction for HTML element
 */
export function getDirection(language: Language): "ltr" | "rtl" {
  return isRTL(language) ? "rtl" : "ltr";
}

/**
 * Create a translator function for a given language
 */
export function createTranslator(language: Language) {
  return (key: TranslationKey): string => {
    return translations[language][key] || translations.en[key] || key;
  };
}
