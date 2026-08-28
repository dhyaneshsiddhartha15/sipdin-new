"use client";

import Link from "next/link";
import type { CaseStudy } from "@/lib/caseStudies";
import CaseStudyBanner from "./CaseStudyBanner";

export default function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <Link
      href={`/case-studies/${study.slug}`}
      className="group block overflow-hidden rounded-2xl border border-line/50 bg-white shadow-[0_8px_30px_-12px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_32px_70px_-24px_rgba(0,50,100,0.25)]"
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
