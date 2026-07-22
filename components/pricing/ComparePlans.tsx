"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, Minus, Rocket } from "lucide-react";
import { MATRICES, formatPlans, type PlanValue } from "@/lib/pricing";
import { useLocale } from "@/contexts/LocaleContext";

function Value({ v }: { v: PlanValue }) {
  if (v === true) return <Check size={20} className="mx-auto text-emerald-500" strokeWidth={2.5} />;
  if (v === false) return <Minus size={18} className="mx-auto text-fg-3" />;
  return (
    <span className="text-[15px] font-medium text-fg" style={{ fontFamily: "Inter, sans-serif" }}>
      {v}
    </span>
  );
}

export default function ComparePlans() {
  const { locale } = useLocale();
  const [activeId, setActiveId] = useState(MATRICES[0].id);

  const active = MATRICES.find((m) => m.id === activeId) ?? MATRICES[0];
  const plans = formatPlans(active.plans, locale.region);
  const features = active.features;
  const popularIdx = plans.findIndex((p) => p.popular);

  return (
    <div>
      {/* Category tabs */}
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {MATRICES.map((m) => {
          const isActive = m.id === activeId;
          return (
            <button
              key={m.id}
              type="button"
              onClick={() => setActiveId(m.id)}
              aria-pressed={isActive}
              className={`rounded-full px-5 py-2.5 text-[13px] font-bold transition-colors ${
                isActive
                  ? "bg-brand text-white shadow-[0_4px_16px_rgba(65,105,225,0.4)]"
                  : "border border-line text-fg-2 hover:border-fg/40 hover:text-fg"
              }`}
              style={{ fontFamily: "Geist, sans-serif" }}
            >
              {m.label}
            </button>
          );
        })}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[860px] border-collapse text-left">
          <thead>
            <tr>
              <th className="w-[28%] align-bottom" />
              {plans.map((p, i) => (
                <th key={p.key} className={`w-[24%] px-4 pb-6 align-top ${i === popularIdx ? "rounded-t-2xl bg-brand/[0.06]" : ""}`}>
                  <div className="flex h-[240px] flex-col justify-between">
                    <div>
                      {p.popular && (
                        <span className="mb-2 inline-block rounded-full bg-brand px-3 py-1 text-[11px] font-bold text-white" style={{ fontFamily: "Geist, sans-serif" }}>
                          ★ Most Popular
                        </span>
                      )}
                      <div className="text-[18px] font-bold text-fg" style={{ fontFamily: "Hanken Grotesk, sans-serif" }}>
                        {p.name}
                      </div>
                      {p.tagline && (
                        <p className="mt-1 text-[12px] leading-snug text-fg-3" style={{ fontFamily: "Inter, sans-serif" }}>
                          {p.tagline}
                        </p>
                      )}
                      <div className="mt-2 flex items-end gap-0.5">
                        <span className="text-[28px] font-extrabold leading-none text-fg" style={{ fontFamily: "Hanken Grotesk, sans-serif" }}>
                          {p.price}
                        </span>
                      </div>
                      <div className="mt-1 flex items-end gap-0.5">
                        <span className="mb-1 text-[14px] text-fg-3">{p.period}</span>
                      </div>
                    </div>
                    <Link
                      href="/contact"
                      className="mt-4 block rounded-lg bg-[#111318] py-3 text-center text-[13px] font-bold text-white transition-colors hover:bg-black"
                      style={{ fontFamily: "Geist, sans-serif" }}
                    >
                      {p.price === "Custom" ? "Contact Us" : "Get Started"}
                    </Link>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {/* Group header */}
            <tr>
              <td colSpan={plans.length + 1} className="pb-3 pt-8">
                <span className="flex items-center gap-2 text-[15px] font-bold text-fg" style={{ fontFamily: "Hanken Grotesk, sans-serif" }}>
                  <Rocket size={18} className="text-brand" />
                  {active.label} features
                </span>
              </td>
            </tr>

            {features.map((f, ri) => (
              <tr key={f.label} className="border-t border-line">
                <td className="py-4 pe-4 text-[15px] font-medium text-fg-2" style={{ fontFamily: "Inter, sans-serif" }}>
                  {f.label}
                </td>
                {f.values.map((v, ci) => (
                  <td key={ci} className={`px-4 py-4 text-center ${ci === popularIdx ? "bg-brand/[0.06]" : ""} ${ri === features.length - 1 && ci === popularIdx ? "rounded-b-2xl" : ""}`}>
                    <Value v={v} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
