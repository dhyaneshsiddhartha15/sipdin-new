"use client";

/**
 * PricingSection — dark, glowing "space" pricing block on the homepage. The
 * interactive pricer (service · region · category dropdowns → recomputing tier
 * cards) lives in the shared <ServicePricer />; this component only supplies the
 * section chrome and heading.
 */

import { useLocale } from "@/contexts/LocaleContext";
import ServicePricer from "@/components/pricing/ServicePricer";

export default function PricingSection() {
  const { t } = useLocale();

  return (
    <section className="relative overflow-hidden bg-[#0a0618] py-[80px] text-white md:py-[120px]">
      {/* Ambient purple space glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 right-0 h-[440px] w-[560px] rounded-full bg-[#7c3aed]/25 blur-[150px]" />
        <div className="absolute top-1/3 left-0 h-[380px] w-[520px] rounded-full bg-[#4f46e5]/20 blur-[150px]" />
      </div>

      {/* Big glowing planet curve at the bottom */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center overflow-hidden">
        <div
          className="relative top-[46%] aspect-square w-[150vw] max-w-[2200px] rounded-full"
          style={{
            background: "radial-gradient(circle at 50% 0%, #3a1c7a 0%, #1a0d40 34%, #0a0618 62%)",
            boxShadow:
              "inset 0 70px 140px -40px rgba(167,110,255,0.9), 0 -20px 120px -10px rgba(139,92,246,0.55)",
            border: "1px solid rgba(167,110,255,0.45)",
          }}
        />
        <div
          className="absolute top-[46%] h-[3px] w-[70%] -translate-y-[1px] rounded-full blur-[2px]"
          style={{ background: "linear-gradient(90deg, transparent, rgba(200,160,255,0.9), transparent)" }}
        />
      </div>

      <div className="relative mx-auto max-w-[1200px] px-[24px] md:px-[40px]">
        {/* Header */}
        <div className="mb-12 max-w-2xl">
          <h2
            className="font-semibold leading-[1.05] tracking-tight"
            style={{ fontFamily: "Hanken Grotesk, sans-serif", fontSize: "clamp(36px, 4.6vw, 60px)" }}
          >
            {t("pricing.title")}
          </h2>
          <p
            className="mt-4 text-white/60"
            style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(14px, 1.1vw, 16px)" }}
          >
            {t("pricing.subtitle")}
          </p>
        </div>

        <ServicePricer defaultService="website" />
      </div>
    </section>
  );
}
