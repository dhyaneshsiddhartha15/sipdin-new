import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CaseStudyCard from "@/components/case-studies/CaseStudyCard";
import { PAPER_BG } from "@/components/case-studies/CaseStudyDetail";
import { getAllCaseStudies } from "@/lib/caseStudies";

export const metadata: Metadata = {
  title: "Case Studies | SIDPIN Digital",
  description:
    "Real results from Sidpin Digital — how we design, build, and grow products and brands. Explore our case studies.",
};

export default function CaseStudiesPage() {
  const studies = getAllCaseStudies();

  return (
    <>
      <Navbar />
      <main style={PAPER_BG}>
        {/* Heading */}
        <section className="mx-auto max-w-[1200px] px-[24px] pb-6 pt-36 md:px-[40px] md:pt-44">
          <span className="text-[11px] font-semibold uppercase tracking-[0.4em] text-brand" style={{ fontFamily: "Geist, sans-serif" }}>
            Case Studies
          </span>
          <h1 className="mt-4 max-w-3xl text-[40px] font-bold leading-[1.05] tracking-tight text-fg md:text-[64px]" style={{ fontFamily: "Hanken Grotesk, sans-serif" }}>
            Products we built.
            <br /> Results we delivered.
          </h1>
          <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-fg-2" style={{ fontFamily: "Inter, sans-serif" }}>
            A look inside how Sidpin partners with brands and products — the problem, the strategy,
            the build, and the numbers that followed.
          </p>
        </section>

        {/* Grid */}
        <section className="mx-auto max-w-[1200px] px-[24px] pb-28 pt-10 md:px-[40px]">
          <div className="grid gap-8 md:grid-cols-2">
            {studies.map((study) => (
              <CaseStudyCard key={study.slug} study={study} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
