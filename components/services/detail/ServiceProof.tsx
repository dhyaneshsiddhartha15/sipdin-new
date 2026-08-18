/**
 * "03 — PROOF" — three real projects as dark result cards, pulled from the
 * case-study library so the numbers stay in one place.
 */

import Link from "next/link";
import { getAllCaseStudies } from "@/lib/caseStudies";
import SectionHeading from "./SectionHeading";

export default function ServiceProof() {
  const studies = getAllCaseStudies().slice(0, 3);
  if (studies.length === 0) return null;

  return (
    <section className="bg-bg px-6 py-[88px] md:px-[80px]">
      <div className="mx-auto max-w-[1440px]">
        <SectionHeading
          index="03"
          label="Proof"
          title="Real projects."
          accent="Real numbers."
          intro="Every number below comes from work we shipped. Ask us on the call — we'll walk you through the account."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {studies.map((study) => {
            const [headline, ...rest] = study.stats;
            return (
              <Link
                key={study.slug}
                href={`/case-studies/${study.slug}`}
                className="group flex flex-col rounded-[20px] bg-[#0b1020] p-7 ring-1 ring-white/10 transition-transform duration-300 hover:-translate-y-1.5"
              >
                <div className="flex items-center gap-3">
                  <span
                    className="font-['Hanken_Grotesk'] grid h-9 w-9 place-items-center rounded-lg text-[15px] font-bold text-white"
                    style={{ backgroundColor: study.accent }}
                  >
                    {study.productInitial}
                  </span>
                  <span className="min-w-0">
                    <span className="font-['Hanken_Grotesk'] block truncate text-[16px] font-semibold text-white">
                      {study.product}
                    </span>
                    <span className="font-['Geist'] block truncate text-[10.5px] uppercase tracking-[0.18em] text-white/45">
                      {study.tag}
                    </span>
                  </span>
                </div>

                {headline ? (
                  <>
                    <p
                      className="font-['Hanken_Grotesk'] mt-7 text-[42px] font-bold leading-none"
                      style={{ color: study.accent }}
                    >
                      {headline.value}
                    </p>
                    <p className="font-['Inter'] mt-2 text-[13px] text-white/70">
                      {headline.label}
                    </p>
                  </>
                ) : null}

                <p className="font-['Inter'] mt-5 flex-1 text-[13px] leading-relaxed text-white/55">
                  {study.description}
                </p>

                {rest.length > 0 ? (
                  <div className="mt-6 grid grid-cols-2 gap-4 border-t border-white/10 pt-5">
                    {rest.slice(0, 2).map((stat) => (
                      <div key={stat.label}>
                        <p className="font-['Hanken_Grotesk'] text-[19px] font-semibold text-white">
                          {stat.value}
                        </p>
                        <p className="font-['Geist'] mt-1 text-[10.5px] uppercase tracking-[0.14em] text-white/45">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : null}

                <span className="font-['Geist'] mt-6 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/70 transition-colors group-hover:text-white">
                  Read the case study →
                </span>
              </Link>
            );
          })}
        </div>

        <div className="mt-6 rounded-[20px] border-l-4 border-brand bg-surface px-7 py-6 ring-1 ring-line/50">
          <p className="font-['Inter'] text-[14px] leading-relaxed text-fg-2">
            These are projects we ran end to end. More land here as they wrap —{" "}
            <strong className="font-semibold text-fg">
              we don&apos;t publish invented case studies or borrowed results.
            </strong>{" "}
            <Link href="/case-studies" className="font-semibold text-brand hover:underline">
              Read them all →
            </Link>
          </p>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/contact"
            className="font-['Geist'] inline-flex items-center justify-center rounded-full bg-brand px-10 py-4 text-[13px] font-semibold uppercase tracking-[0.14em] text-white transition-transform duration-300 hover:scale-[1.03]"
          >
            Get My Free Audit
          </Link>
        </div>
      </div>
    </section>
  );
}
