"use client";

import Link from "next/link";
import type { CaseStudy } from "@/lib/caseStudies";
import CaseStudyBanner from "./CaseStudyBanner";

export default function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <Link
      href={`/case-studies/${study.slug}`}
      className="group block overflow-hidden rounded-2xl border border-line bg-surface transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_60px_-28px_rgba(17,24,39,0.35)]"
    >
      <div className="aspect-[16/10] w-full overflow-hidden">
        <CaseStudyBanner study={study} />
      </div>
      <div className="p-6 md:p-8">
        <span
          className="inline-block rounded bg-surface-2 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-fg-2"
          style={{ fontFamily: "Geist, sans-serif" }}
        >
          {study.tag}
        </span>
        <h3
          className="mt-4 text-[22px] font-semibold leading-tight text-fg transition-colors group-hover:text-brand md:text-[26px]"
          style={{ fontFamily: "Hanken Grotesk, sans-serif" }}
        >
          {study.title}
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-fg-2" style={{ fontFamily: "Inter, sans-serif" }}>
          {study.description}
        </p>
      </div>
    </Link>
  );
}
