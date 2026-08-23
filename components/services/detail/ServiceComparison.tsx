/**
 * "04 — HOW WE'RE DIFFERENT" — typical agency vs SIDPIN, side by side.
 * Stacks into two labelled cards on small screens.
 */

import { Check, X } from "lucide-react";
import { COMPARISON_ROWS, WEBDEV_COMPARISON_ROWS, APP_COMPARISON_ROWS, SOFTWARE_COMPARISON_ROWS, AI_COMPARISON_ROWS, CHATBOT_COMPARISON_ROWS, SAAS_COMPARISON_ROWS, INTEGRATION_COMPARISON_ROWS, GENERATIVE_COMPARISON_ROWS } from "@/lib/serviceDetail";
import SectionHeading from "./SectionHeading";
import type { Service } from "@/lib/services";

interface ServiceComparisonProps {
  service?: Service;
}

export default function ServiceComparison({ service }: ServiceComparisonProps = {}) {
  // Use service-specific comparison content
  const isWebDev = service?.slug === 'web-development';
  const isAppDev = service?.slug === 'app-development';
  const isSoftwareDev = service?.slug === 'software-development';
  const isAIDev = service?.slug === 'ai-development';
  const isChatbot = service?.slug === 'ai-chatbot';
  const isSaaS = service?.slug === 'ai-saas';
  const isIntegration = service?.slug === 'ai-integration';
  const isGenerative = service?.slug === 'generative-ai';

  const comparisonRows = isWebDev ? WEBDEV_COMPARISON_ROWS :
                        isAppDev ? APP_COMPARISON_ROWS :
                        isSoftwareDev ? SOFTWARE_COMPARISON_ROWS :
                        isAIDev ? AI_COMPARISON_ROWS :
                        isChatbot ? CHATBOT_COMPARISON_ROWS :
                        isSaaS ? SAAS_COMPARISON_ROWS :
                        isIntegration ? INTEGRATION_COMPARISON_ROWS :
                        isGenerative ? GENERATIVE_COMPARISON_ROWS : COMPARISON_ROWS;

  const title = isWebDev
    ? "No lock-ins. No templates."
    : isAppDev
    ? "No lock-ins. No ownership battles."
    : isSoftwareDev
    ? "No lock-ins. No IP battles."
    : isAIDev
    ? "No demos that never ship."
    : isChatbot
    ? "No generic responses."
    : isSaaS
    ? "No unprofitable scaling."
    : isIntegration
    ? "No disruption required."
    : isGenerative
    ? "No hallucinations."
    : "No lock-ins. No black boxes.";
  const accent = isWebDev
    ? "No shortcuts."
    : isAppDev
    ? "No fine print."
    : isSoftwareDev
    ? "No compromises."
    : isAIDev
    ? "Production-grade AI."
    : isChatbot
    ? "Grounded on your knowledge."
    : isSaaS
    ? "Built for profitability."
    : isIntegration
    ? "Smarter existing tools."
    : isGenerative
    ? "Grounded and guarded."
    : "No excuses.";
  const intro = isWebDev
    ? "Everything below is already stated somewhere on this site. Here it is side by side for web development."
    : isAppDev
    ? "Everything below is already stated somewhere on this site. Here it is side by side for mobile app development."
    : isSoftwareDev
    ? "Everything below is already stated somewhere on this site. Here it is side by side for custom software development."
    : isAIDev
    ? "Everything below is already stated somewhere on this site. Here it is side by side for AI development."
    : isChatbot
    ? "Everything below is already stated somewhere on this site. Here it is side by side for AI chatbot development."
    : isSaaS
    ? "Everything below is already stated somewhere on this site. Here it is side by side for AI SaaS development."
    : isIntegration
    ? "Everything below is already stated somewhere on this site. Here it is side by side for AI integration."
    : isGenerative
    ? "Everything below is already stated somewhere on this site. Here it is side by side for generative AI development."
    : "Everything below is already stated somewhere on this site. Here it is side by side.";

  return (
    <section className="bg-surface-2/40 px-6 py-[88px] md:px-[80px]">
      <div className="mx-auto max-w-[1440px]">
        <SectionHeading
          index="04"
          label="How we're different"
          title={title}
          accent={accent}
          intro={intro}
        />

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,180px)_minmax(0,1fr)_minmax(0,1fr)] lg:gap-6">
          {/* Column headers (lg only — the row labels carry the small screens) */}
          <div className="hidden lg:block" />
          <div className="hidden items-center gap-3 lg:flex">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-fg-3/15 text-fg-3">
              ?
            </span>
            <span className="font-['Hanken_Grotesk'] text-[17px] font-semibold text-fg-2">
              Typical agency
            </span>
          </div>
          <div className="hidden items-center gap-3 lg:flex">
            <span className="font-['Geist'] grid h-7 w-7 place-items-center rounded-full bg-brand text-[11px] font-bold text-white">
              SD
            </span>
            <span className="font-['Hanken_Grotesk'] text-[17px] font-semibold text-fg">
              SIDPIN Digital
            </span>
            <span className="font-['Geist'] rounded-full border border-brand/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-brand">
              In writing
            </span>
          </div>

          {/* Rows */}
          {comparisonRows.map((row) => (
            <div key={row.label} className="contents">
              <p className="font-['Geist'] pt-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-fg-3 lg:border-t lg:border-line/40">
                {row.label}
              </p>

              <div className="flex items-start gap-3 border-t border-line/40 pt-4 lg:border-line/40">
                <X className="mt-0.5 h-4 w-4 shrink-0 text-fg-3" strokeWidth={2.5} aria-hidden />
                <p className="font-['Inter'] text-[14px] text-fg-2">{row.typical}</p>
              </div>

              <div className="flex items-start gap-3 rounded-xl border border-brand/25 bg-surface px-4 py-4 lg:mb-1 lg:mt-3 lg:border-brand/20">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" strokeWidth={3} aria-hidden />
                <span>
                  <span className="font-['Hanken_Grotesk'] block text-[15px] font-semibold text-fg">
                    {row.sidpin}
                  </span>
                  <span className="font-['Geist'] mt-1 block text-[11.5px] leading-relaxed text-fg-2">
                    {row.sidpinNote}
                  </span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
