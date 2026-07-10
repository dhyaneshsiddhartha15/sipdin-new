"use client";

/**
 * PolicyPage — reusable legal/policy layout (Fair Usage, Privacy, Terms…).
 * Dark curved hero + a sticky left section-nav (with scroll-spy active state)
 * + a white content column. Mirrors the reference privacy-policy layout.
 */

import { useEffect, useMemo, useRef, useState } from "react";

export type PolicyBlock =
  | { type: "p"; text: string }
  | { type: "h"; text: string }
  | { type: "ul"; items: string[] };

export type PolicySection = {
  id: string;
  title: string;
  body: PolicyBlock[];
};

export default function PolicyPage({
  eyebrow = "Legal",
  title,
  effective,
  intro,
  sections,
}: {
  eyebrow?: string;
  title: string;
  effective: string;
  intro?: string;
  sections: PolicySection[];
}) {
  const [active, setActive] = useState(sections[0]?.id);
  const refs = useRef<Record<string, HTMLElement | null>>({});

  // Scroll-spy: highlight the section nearest the top of the viewport.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );
    Object.values(refs.current).forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [sections]);

  const nav = useMemo(() => sections.map((s) => ({ id: s.id, title: s.title })), [sections]);

  return (
    <main className="bg-white">
      {/* Curved dark hero */}
      <section className="relative overflow-hidden rounded-b-[40px] bg-[#12245c] pb-14 pt-32 md:rounded-b-[52px] md:pb-16 md:pt-36">
        <div
          className="pointer-events-none absolute inset-0 opacity-80"
          style={{
            background:
              "radial-gradient(1100px 420px at 12% -30%, rgba(65,105,225,0.65), transparent), radial-gradient(800px 420px at 100% 130%, rgba(65,105,225,0.4), transparent)",
          }}
        />
        <div className="relative mx-auto max-w-[1120px] px-[24px] md:px-[40px]">
          <span className="text-[11px] font-semibold uppercase tracking-[0.4em] text-white/60" style={{ fontFamily: "Geist, sans-serif" }}>
            {eyebrow}
          </span>
          <h1 className="mt-4 text-[40px] font-extrabold leading-[1.05] tracking-tight text-white md:text-[62px]" style={{ fontFamily: "Hanken Grotesk, sans-serif" }}>
            {title}
          </h1>
          <p className="mt-4 text-[15px] font-medium text-white/60" style={{ fontFamily: "Inter, sans-serif" }}>
            {effective}
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="mx-auto max-w-[1120px] px-[24px] py-16 md:px-[40px] md:py-24">
        <div className="grid gap-12 lg:grid-cols-[260px_1fr] lg:gap-16">
          {/* Sticky section nav */}
          <aside className="hidden lg:block">
            <nav className="sticky top-28">
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#9a9a9a]" style={{ fontFamily: "Geist, sans-serif" }}>
                On this page
              </p>
              <ul className="space-y-1">
                {nav.map((s) => {
                  const on = active === s.id;
                  return (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className={`block border-l-2 py-2 pl-4 text-[14px] leading-snug transition-colors ${
                          on
                            ? "border-brand font-semibold text-[#1a1a1a]"
                            : "border-transparent text-[#6a6a6a] hover:text-[#1a1a1a]"
                        }`}
                        style={{ fontFamily: "Inter, sans-serif" }}
                      >
                        {s.title}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </aside>

          {/* Body */}
          <article className="max-w-2xl">
            {intro && (
              <p className="mb-12 text-[18px] leading-relaxed text-[#4a4a4a]" style={{ fontFamily: "Inter, sans-serif" }}>
                {intro}
              </p>
            )}
            {sections.map((s) => (
              <section
                key={s.id}
                id={s.id}
                ref={(el) => {
                  refs.current[s.id] = el;
                }}
                className="scroll-mt-28 border-t border-[#ececec] py-10 first:border-t-0 first:pt-0"
              >
                <h2 className="mb-5 text-[26px] font-extrabold tracking-tight text-[#1a1a1a] md:text-[30px]" style={{ fontFamily: "Hanken Grotesk, sans-serif" }}>
                  {s.title}
                </h2>
                <div className="space-y-4">
                  {s.body.map((b, i) => {
                    if (b.type === "h")
                      return (
                        <h3 key={i} className="pt-2 text-[18px] font-bold text-[#1a1a1a]" style={{ fontFamily: "Hanken Grotesk, sans-serif" }}>
                          {b.text}
                        </h3>
                      );
                    if (b.type === "ul")
                      return (
                        <ul key={i} className="space-y-2.5 pl-1">
                          {b.items.map((it, j) => (
                            <li key={j} className="flex gap-3 text-[16px] leading-relaxed text-[#4a4a4a]" style={{ fontFamily: "Inter, sans-serif" }}>
                              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                              {it}
                            </li>
                          ))}
                        </ul>
                      );
                    return (
                      <p key={i} className="text-[16px] leading-relaxed text-[#4a4a4a]" style={{ fontFamily: "Inter, sans-serif" }}>
                        {b.text}
                      </p>
                    );
                  })}
                </div>
              </section>
            ))}
          </article>
        </div>
      </div>
    </main>
  );
}
