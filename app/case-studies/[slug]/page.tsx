import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CaseStudyDetail, { PAPER_BG } from "@/components/case-studies/CaseStudyDetail";
import RudradharmaCaseStudy from "@/components/case-studies/RudradharmaCaseStudy";
import DohabusCaseStudy from "@/components/case-studies/DohabusCaseStudy";
import RITMCaseStudy from "@/components/case-studies/RITMCaseStudy";
import CameraMarketCaseStudy from "@/components/case-studies/CameraMarketCaseStudy";
import PremiumCaseStudy from "@/components/case-studies/PremiumCaseStudy";
import CaseStudyCard from "@/components/case-studies/CaseStudyCard";
import { getAllCaseStudies, getCaseStudyBySlug } from "@/lib/caseStudies";

export function generateStaticParams() {
  return getAllCaseStudies().map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) return { title: "Case Study | SIDPIN Digital" };
  return { title: `${study.title} | SIDPIN Digital`, description: study.description };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) notFound();

  const more = getAllCaseStudies().filter((s) => s.slug !== slug);

  return (
    <>
      <Navbar />
      <main>
        {/* Rudradharma, Dohabus, RITM, and Camera Market use custom layouts with Brand Identity sections, others use premium layout */}
        {slug === "rudradharma-spiritual-ecommerce" ? (
          <RudradharmaCaseStudy />
        ) : slug === "dohabus-qatar-tourism-platform" ? (
          <DohabusCaseStudy study={study} />
        ) : slug === "ritm-hospitality-institute-website" ? (
          <RITMCaseStudy study={study} />
        ) : slug === "camera-market-dehradun-photography-e-commerce" ? (
          <CameraMarketCaseStudy study={study} />
        ) : (
          <PremiumCaseStudy study={study} />
        )}

        {/* More case studies */}
        {more.length > 0 && (
          <section style={PAPER_BG}>
            <div className="mx-auto max-w-[1500px] px-[24px] pb-28 md:px-[40px]">
              <h2 className="mb-8 text-[28px] font-semibold text-fg md:text-[36px]" style={{ fontFamily: "Hanken Grotesk, sans-serif" }}>
                More Case Studies
              </h2>
              <div className="grid gap-8 md:grid-cols-2">
                {more.map((s) => (
                  <CaseStudyCard key={s.slug} study={s} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
