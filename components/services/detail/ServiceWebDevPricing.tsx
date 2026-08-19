/**
 * ServiceWebDevPricing — Custom pricing table for web development services
 * Designed to match the reference dark table UI while keeping existing pricing
 */

import Link from "next/link";
import { WEBDEV_PLANS, WEBDEV_FEATURES } from "@/lib/pricing";

export default function ServiceWebDevPricing() {
  return (
    <section className="bg-surface-2/40 px-6 py-[88px] md:px-[80px]">
      <div className="mx-auto max-w-[1240px]">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <span className="font-['Geist'] block text-[11px] font-semibold uppercase tracking-[0.35em] text-brand">
            Pricing
          </span>
          <h2 className="font-['Hanken_Grotesk'] mt-6 text-[32px] font-bold leading-[1.1] tracking-tight text-fg md:text-[42px]">
            Custom Web Development{" "}
            <em className="not-italic text-brand md:italic">Packages and Pricing</em>
          </h2>
          <p className="font-['Inter'] mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-fg-2">
            Web development services are priced by scope — not by a fixed package. Below is an honest breakdown of what different types of websites cost, what's included, and what affects the final number.
          </p>
        </div>

        {/* Dark Pricing Table */}
        <div className="rounded-xl overflow-hidden border border-line/30 bg-[#0f172a]">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              {/* Table Header */}
              <thead>
                <tr className="border-b border-[#1e293b] bg-[#1e293b]/50">
                  <th className="px-6 py-4 font-['Hanken_Grotesk'] text-sm font-semibold text-white">
                    Package
                  </th>
                  <th className="px-6 py-4 font-['Hanken_Grotesk'] text-sm font-semibold text-white">
                    What's Included
                  </th>
                  <th className="px-6 py-4 font-['Hanken_Grotesk'] text-sm font-semibold text-white">
                    Price (INR)
                  </th>
                  <th className="px-6 py-4 font-['Hanken_Grotesk'] text-sm font-semibold text-white">
                    Timeline
                  </th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody>
                {WEBDEV_PLANS.map((plan, index) => (
                  <tr
                    key={plan.key}
                    className={`border-b border-[#1e293b] last:border-b-0 ${
                      index % 2 === 0 ? 'bg-[#0f172a]' : 'bg-[#1e293b]/20'
                    }`}
                  >
                    {/* Package Name */}
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        {plan.popular && (
                          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand text-[10px] font-bold text-white">
                            ✓
                          </span>
                        )}
                        <div>
                          <div className="font-['Hanken_Grotesk'] text-base font-semibold text-white">
                            {plan.name}
                          </div>
                          <div className="font-['Inter'] mt-1 text-xs text-gray-400">
                            {plan.tagline}
                          </div>
                        </div>
                      </div>
                    </td>

                    {/* Features Summary */}
                    <td className="px-6 py-5">
                      <div className="font-['Inter'] text-sm text-gray-300">
                        {plan.name === 'Starter' && 'Up to 6 custom pages, mobile responsive, basic SEO, WhatsApp & forms'}
                        {plan.name === 'Business' && 'Up to 15 pages, CMS, advanced SEO, 3D components, lead generation'}
                        {plan.name === 'Enterprise' && 'Unlimited pages, CRM integration, AI chat, payment gateway, booking system'}
                      </div>
                    </td>

                    {/* Price */}
                    <td className="px-6 py-5">
                      <div className="font-['Hanken_Grotesk'] text-base font-semibold text-white">
                        {plan.price}
                      </div>
                      <div className="font-['Inter'] mt-1 text-xs text-gray-400">
                        One-time payment
                      </div>
                    </td>

                    {/* Timeline */}
                    <td className="px-6 py-5">
                      <div className="font-['Inter'] text-sm text-gray-300">
                        {plan.name === 'Starter' && '1–2 weeks'}
                        {plan.name === 'Business' && '2–3 weeks'}
                        {plan.name === 'Enterprise' && '3–4 weeks'}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Table Footer Note */}
          <div className="border-t border-[#1e293b] bg-[#1e293b]/30 px-6 py-4">
            <p className="font-['Inter'] text-center text-xs text-gray-400">
              * Exact pricing depends on specific requirements, design complexity, and additional features needed
            </p>
          </div>
        </div>

        {/* Key Features Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-lg border border-line/30 bg-surface px-6 py-5">
            <div className="font-['Hanken_Grotesk'] text-base font-semibold text-fg">
              All Plans Include
            </div>
            <ul className="font-['Inter'] mt-3 space-y-2 text-sm text-fg-2">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 h-4 w-4 shrink-0 rounded-full bg-brand/20 text-center text-[10px] font-bold text-brand">
                  ✓
                </span>
                <span>Mobile-responsive design</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 h-4 w-4 shrink-0 rounded-full bg-brand/20 text-center text-[10px] font-bold text-brand">
                  ✓
                </span>
                <span>WhatsApp & contact integration</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 h-4 w-4 shrink-0 rounded-full bg-brand/20 text-center text-[10px] font-bold text-brand">
                  ✓
                </span>
                <span>Free 1-year domain & hosting</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 h-4 w-4 shrink-0 rounded-full bg-brand/20 text-center text-[10px] font-bold text-brand">
                  ✓
                </span>
                <span>SSL certificate & security</span>
              </li>
            </ul>
          </div>

          <div className="rounded-lg border border-line/30 bg-surface px-6 py-5">
            <div className="font-['Hanken_Grotesk'] text-base font-semibold text-fg">
              Performance Focus
            </div>
            <ul className="font-['Inter'] mt-3 space-y-2 text-sm text-fg-2">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 h-4 w-4 shrink-0 rounded-full bg-brand/20 text-center text-[10px] font-bold text-brand">
                  ✓
                </span>
                <span>Fast loading speeds</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 h-4 w-4 shrink-0 rounded-full bg-brand/20 text-center text-[10px] font-bold text-brand">
                  ✓
                </span>
                <span>SEO-optimized structure</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 h-4 w-4 shrink-0 rounded-full bg-brand/20 text-center text-[10px] font-bold text-brand">
                  ✓
                </span>
                <span>Google Analytics integration</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 h-4 w-4 shrink-0 rounded-full bg-brand/20 text-center text-[10px] font-bold text-brand">
                  ✓
                </span>
                <span>Clean, maintainable code</span>
              </li>
            </ul>
          </div>

          <div className="rounded-lg border border-line/30 bg-surface px-6 py-5">
            <div className="font-['Hanken_Grotesk'] text-base font-semibold text-fg">
              Ongoing Support
            </div>
            <ul className="font-['Inter'] mt-3 space-y-2 text-sm text-fg-2">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 h-4 w-4 shrink-0 rounded-full bg-brand/20 text-center text-[10px] font-bold text-brand">
                  ✓
                </span>
                <span>Post-launch support period</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 h-4 w-4 shrink-0 rounded-full bg-brand/20 text-center text-[10px] font-bold text-brand">
                  ✓
                </span>
                <span>Training & documentation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 h-4 w-4 shrink-0 rounded-full bg-brand/20 text-center text-[10px] font-bold text-brand">
                  ✓
                </span>
                <span>Source code ownership</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 h-4 w-4 shrink-0 rounded-full bg-brand/20 text-center text-[10px] font-bold text-brand">
                  ✓
                </span>
                <span>Maintenance packages available</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/contact"
            className="font-['Geist'] inline-flex items-center gap-3 rounded-full bg-brand px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.16em] text-white transition-transform duration-300 hover:scale-[1.03]"
          >
            Get Custom Quote
            <span className="material-symbols-outlined text-lg">arrow_forward</span>
          </Link>
        </div>
      </div>
    </section>
  );
}