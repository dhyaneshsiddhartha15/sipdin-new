"use client";

/**
 * CaseStudyDetail — the shared layout every case-study page renders through.
 * A blue wavy background (public/wavy-baclh.webp) with every content block in a
 * white card colour-matched to the study's accent. Hero (screenshot + tag +
 * title), a bold stats row, then the flexible content sections.
 */
import type { CaseStudy, Section } from "@/lib/caseStudies";

/** Blue wavy background shared by the case-study listing + detail pages. */
export const PAPER_BG = {
  backgroundImage: "url('/wavy-baclh.webp')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
  backgroundColor: "#1666e6",
} as const;

/** Frosted-white card used to hold readable content on the blue background. */
function Card({
  accent,
  children,
  className = "",
}: {
  accent: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-3xl border-t-4 bg-white p-7 shadow-[0_30px_70px_-40px_rgba(8,30,80,0.6)] md:p-10 ${className}`}
      style={{ borderColor: accent }}
    >
      {children}
    </div>
  );
}

function num(i: number) {
  return String(i + 1).padStart(2, "0");
}

function Heading({ children, accent }: { children: React.ReactNode; accent: string }) {
  return (
    <h2
      className="text-[28px] font-extrabold tracking-tight md:text-[38px]"
      style={{ color: accent, fontFamily: "Hanken Grotesk, sans-serif" }}
    >
      {children}
    </h2>
  );
}

function SectionBlock({ section, accent }: { section: Section; accent: string }) {
  if (section.type === "text") {
    return (
      <Card accent={accent}>
        <Heading accent={accent}>{section.heading}</Heading>
        <div className="mt-6 space-y-5">
          {section.body.map((p, i) => (
            <p key={i} className="text-[18px] font-medium leading-[1.8] text-[#333] md:text-[20px]" style={{ fontFamily: "Inter, sans-serif" }}>
              {p}
            </p>
          ))}
        </div>
      </Card>
    );
  }

  if (section.type === "list") {
    return (
      <Card accent={accent}>
        <Heading accent={accent}>{section.heading}</Heading>
        {section.intro && (
          <p className="mt-6 text-[18px] font-medium leading-[1.8] text-[#333] md:text-[20px]" style={{ fontFamily: "Inter, sans-serif" }}>
            {section.intro}
          </p>
        )}
        <ol className="mt-7 space-y-6">
          {section.items.map((it, i) => (
            <li key={i} className="flex gap-4">
              <span
                className="grid h-9 w-9 shrink-0 place-items-center rounded-xl text-[15px] font-extrabold text-white md:text-[16px]"
                style={{ background: accent, fontFamily: "Hanken Grotesk, sans-serif" }}
              >
                {num(i)}
              </span>
              <div className="pt-1 text-[18px] leading-[1.7] md:text-[19px]" style={{ fontFamily: "Inter, sans-serif" }}>
                {it.label && <span className="font-bold text-fg">{it.label}: </span>}
                {it.text && <span className="font-medium text-[#3a3a3a]">{it.text}</span>}
                {it.sub && (
                  <ul className="mt-3 space-y-2">
                    {it.sub.map((s, j) => (
                      <li key={j} className="flex items-start gap-3 text-[16px] font-medium text-[#444]">
                        <span className="mt-[9px] h-2 w-2 shrink-0 rounded-full" style={{ background: accent }} />
                        {s}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ol>
        {section.note && (
          <p
            className="mt-8 rounded-2xl border-s-4 px-5 py-4 text-[17px] font-semibold italic leading-[1.7] text-[#2a2a2a]"
            style={{ borderColor: accent, background: `${accent}12`, fontFamily: "Inter, sans-serif" }}
          >
            {section.note}
          </p>
        )}
      </Card>
    );
  }

  if (section.type === "table") {
    return (
      <Card accent={accent}>
        <Heading accent={accent}>{section.heading}</Heading>
        <div className="mt-6 overflow-x-auto rounded-2xl border border-[#0f1728]/12">
          <table className="w-full min-w-[560px] border-collapse text-left text-[16px]" style={{ fontFamily: "Inter, sans-serif" }}>
            <thead>
              <tr style={{ background: `${accent}14` }}>
                {section.columns.map((c, i) => (
                  <th
                    key={i}
                    className="p-4 text-[14px] font-extrabold uppercase tracking-wide"
                    style={i === section.columns.length - 1 ? { color: accent } : { color: "#1a1a1a" }}
                  >
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.rows.map((row, ri) => (
                <tr key={ri} className="border-t border-[#0f1728]/10">
                  {row.map((cell, ci) => (
                    <td
                      key={ci}
                      className={`p-4 align-top ${ci === 0 ? "font-bold text-fg" : ci === row.length - 1 ? "font-semibold text-fg" : "font-medium text-[#555]"}`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    );
  }

  if (section.type === "image") {
    const single = section.images.length === 1;
    return (
      <Card accent={accent}>
        {section.heading && <Heading accent={accent}>{section.heading}</Heading>}
        {section.intro && (
          <p className="mt-6 text-[18px] font-medium leading-[1.8] text-[#333] md:text-[20px]" style={{ fontFamily: "Inter, sans-serif" }}>
            {section.intro}
          </p>
        )}
        <div className={`${section.heading || section.intro ? "mt-6" : ""} grid gap-6 ${single ? "" : "sm:grid-cols-2"}`}>
          {section.images.map((img) => (
            <figure key={img.src}>
              <div className="overflow-hidden rounded-2xl border border-[#0f1728]/10 bg-[#faf7f0]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img.src} alt={img.caption ?? "Case study visual"} className="h-auto w-full object-contain" loading="lazy" />
              </div>
              {img.caption && (
                <figcaption className="mt-3 text-center text-[14px] font-medium italic text-[#666]" style={{ fontFamily: "Inter, sans-serif" }}>
                  {img.caption}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      </Card>
    );
  }

  // quote
  return (
    <Card accent={accent} className="text-center">
      <span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl text-[30px] font-bold text-white shadow-lg" style={{ background: accent }}>
        &rdquo;
      </span>
      <blockquote className="mt-6">
        <p className="mx-auto max-w-2xl text-[21px] font-semibold italic leading-relaxed text-fg md:text-[24px]" style={{ fontFamily: "Inter, sans-serif" }}>
          &ldquo;{section.text}&rdquo;
        </p>
        <figcaption className="mt-6">
          <span className="block text-[18px] font-bold text-fg" style={{ fontFamily: "Hanken Grotesk, sans-serif" }}>
            {section.name}
          </span>
          <span className="mt-1 block text-[12px] font-semibold uppercase tracking-[0.2em]" style={{ color: accent, fontFamily: "Geist, sans-serif" }}>
            {section.role}
          </span>
        </figcaption>
      </blockquote>
    </Card>
  );
}

export default function CaseStudyDetail({ study }: { study: CaseStudy }) {
  return (
    <article style={PAPER_BG}>
      {/* Hero — heading only */}
      <section className="mx-auto max-w-[1500px] px-[24px] pb-16 pt-36 md:px-[40px] md:pt-44">
        <div className="max-w-4xl">
          <span className="inline-block rounded bg-white/20 px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.25em] text-white backdrop-blur" style={{ fontFamily: "Geist, sans-serif" }}>
            {study.tag}
          </span>
          <h1 className="mt-5 text-[38px] font-extrabold leading-[1.05] tracking-tight text-white drop-shadow-[0_2px_20px_rgba(8,30,80,0.4)] md:text-[56px]" style={{ fontFamily: "Hanken Grotesk, sans-serif" }}>
            {study.title}
          </h1>
          <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-white/85 drop-shadow-[0_2px_20px_rgba(8,30,80,0.4)] md:text-[19px]" style={{ fontFamily: "Inter, sans-serif" }}>
            {study.description}
          </p>
        </div>

        {/* Stats — creative cards */}
        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {study.stats.map((s) => (
            <div key={s.label} className="rounded-2xl border-t-4 bg-white p-7 shadow-[0_30px_70px_-40px_rgba(8,30,80,0.6)]" style={{ borderColor: study.accent }}>
              <div className="text-[56px] font-extrabold leading-none tracking-tight md:text-[68px]" style={{ color: study.accent, fontFamily: "Hanken Grotesk, sans-serif" }}>
                {s.value}
              </div>
              <div className="mt-3 h-1.5 w-12 rounded-full" style={{ background: study.accent }} />
              <div className="mt-3 text-[16px] font-semibold text-[#333]" style={{ fontFamily: "Inter, sans-serif" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sections */}
      <section className="mx-auto max-w-[1500px] px-[24px] pb-28 md:px-[40px]">
        <div className="space-y-8">
          {study.sections.map((section, i) => (
            <SectionBlock key={i} section={section} accent={study.accent} />
          ))}
        </div>
      </section>
    </article>
  );
}
