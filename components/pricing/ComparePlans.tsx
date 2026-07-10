import Link from "next/link";
import { Check, Minus, Rocket } from "lucide-react";
import { PLANS, FEATURES, type PlanValue } from "@/lib/pricing";

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
  const popularIdx = PLANS.findIndex((p) => p.popular);

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[860px] border-collapse text-left">
        <thead>
          <tr>
            <th className="w-[28%] align-bottom" />
            {PLANS.map((p, i) => (
              <th key={p.key} className={`px-4 pb-6 align-bottom ${i === popularIdx ? "rounded-t-2xl bg-brand/[0.06]" : ""}`}>
                {p.discount && (
                  <span className="mb-2 inline-block rounded-full bg-[#FFD400] px-2.5 py-1 text-[11px] font-bold text-black" style={{ fontFamily: "Geist, sans-serif" }}>
                    {p.discount}
                  </span>
                )}
                <div className="text-[18px] font-bold text-fg" style={{ fontFamily: "Hanken Grotesk, sans-serif" }}>
                  {p.name}
                </div>
                <div className="mt-1.5 flex items-end gap-0.5">
                  <span className="text-[18px] font-semibold text-fg-2">{p.currency}</span>
                  <span className="text-[34px] font-extrabold leading-none text-fg" style={{ fontFamily: "Hanken Grotesk, sans-serif" }}>
                    {p.price}
                  </span>
                  <span className="mb-1 text-[14px] text-fg-3">{p.period}</span>
                </div>
                <Link
                  href="/contact"
                  className="mt-4 block rounded-lg bg-[#111318] py-3 text-center text-[13px] font-bold text-white transition-colors hover:bg-black"
                  style={{ fontFamily: "Geist, sans-serif" }}
                >
                  Claim Deal
                </Link>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* Group header */}
          <tr>
            <td colSpan={PLANS.length + 1} className="pb-3 pt-8">
              <span className="flex items-center gap-2 text-[15px] font-bold text-fg" style={{ fontFamily: "Hanken Grotesk, sans-serif" }}>
                <Rocket size={18} className="text-brand" />
                Top features
              </span>
            </td>
          </tr>

          {FEATURES.map((f, ri) => (
            <tr key={f.label} className="border-t border-line">
              <td className="py-4 pe-4 text-[15px] font-medium text-fg-2" style={{ fontFamily: "Inter, sans-serif" }}>
                {f.label}
              </td>
              {f.values.map((v, ci) => (
                <td key={ci} className={`px-4 py-4 text-center ${ci === popularIdx ? "bg-brand/[0.06]" : ""} ${ri === FEATURES.length - 1 && ci === popularIdx ? "rounded-b-2xl" : ""}`}>
                  <Value v={v} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
