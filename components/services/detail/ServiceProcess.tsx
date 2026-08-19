/**
 * "05 — HOW WE WORK" — five-step timeline, the three things that make it
 * repeatable, and what we need from the client.
 */

import { Clock } from "lucide-react";
import { PROCESS_ASK, PROCESS_BULLETS, PROCESS_STEPS } from "@/lib/serviceDetail";
import SectionHeading from "./SectionHeading";

export default function ServiceProcess() {
  return (
    <section className="bg-bg px-6 py-[88px] md:px-[80px]">
      <div className="mx-auto max-w-[1440px]">
        <SectionHeading
          index="05"
          label="How we work"
          title="Marketing and engineering,"
          accent="run the same way."
          intro="The discipline that ships software now runs your project: documented decisions, weekly cycles, and numbers you can check yourself."
        />

        {/* Timeline */}
        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
          {PROCESS_STEPS.map((step) => (
            <div key={step.number} className="border-t-2 border-line/60 pt-5">
              <span className="mb-4 block h-[3px] w-9 rounded-full bg-brand" />
              <span className="font-['Geist'] block text-[12px] font-semibold text-brand">
                {step.number}
              </span>
              <h3 className="font-['Hanken_Grotesk'] mt-2 text-[20px] font-semibold text-fg">
                {step.title}
              </h3>
              <p className="font-['Inter'] mt-3 text-[13.5px] leading-relaxed text-fg-2">
                {step.description}
              </p>
              <p className="font-['Geist'] mt-4 rounded-lg border border-line/50 bg-surface px-3 py-2.5 text-[11.5px] leading-relaxed text-fg-2">
                {step.note}
              </p>
            </div>
          ))}
        </div>

        {/* Bullets + ask */}
        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:gap-14">
          <div className="flex flex-col">
            {PROCESS_BULLETS.map((bullet) => (
              <div
                key={bullet.title}
                className="flex items-start gap-3 border-b border-line/40 py-5 first:pt-0"
              >
                <span className="mt-1 text-brand">*</span>
                <span>
                  <span className="font-['Hanken_Grotesk'] block text-[15.5px] font-semibold text-fg">
                    {bullet.title}
                  </span>
                  <span className="font-['Inter'] mt-1.5 block text-[13.5px] leading-relaxed text-fg-2">
                    {bullet.body}
                  </span>
                </span>
              </div>
            ))}
          </div>

          <div className="self-start rounded-[18px] border-l-4 border-brand bg-surface px-6 py-6 ring-1 ring-line/50">
            <p className="font-['Hanken_Grotesk'] text-[16px] font-semibold text-fg">
              {PROCESS_ASK.title}
            </p>
            <p className="font-['Inter'] mt-3 text-[14px] leading-relaxed text-fg-2">
              {PROCESS_ASK.body}{" "}
              <strong className="font-semibold text-brand">{PROCESS_ASK.highlight}</strong>
            </p>
          </div>
        </div>

        {/* Accountability note */}
        <div className="mt-12 flex items-start gap-3 rounded-[18px] border border-brand/30 bg-brand/[0.04] px-6 py-5">
          <Clock className="mt-0.5 h-[18px] w-[18px] shrink-0 text-brand" strokeWidth={2} aria-hidden />
          <p className="font-['Inter'] text-[14px] leading-relaxed text-fg-2">
            <strong className="font-semibold text-fg">Accountability, on the record:</strong>{" "}
            you get the same weekly report we read internally — good month or bad.
          </p>
        </div>
      </div>
    </section>
  );
}
