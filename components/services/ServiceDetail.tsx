"use client";

/**
 * ServiceDetail — shared template for every /services/[slug] page.
 *
 * Section order mirrors the approved design: hero + dashboard, client logos,
 * 01 testimonials, 02 what we do, creative gallery, 03 proof, 04 how we're
 * different, 05 how we work, 06 reviews, FAQ, and the closing CTA.
 * Per-service copy comes from `lib/services.ts`; the site-wide blocks (proof,
 * process, comparison) come from `lib/serviceDetail.ts`.
 */

import { useState } from "react";
import Link from "next/link";
import type { Service, ServiceCategory } from "@/lib/services";
import CustomSolutionForm from "./CustomSolutionForm";
import ServiceHero from "./detail/ServiceHero";
import ServiceLogoWall from "./detail/ServiceLogoWall";
import ServiceTestimonialWall from "./detail/ServiceTestimonialWall";
import ServiceWhatWeDo from "./detail/ServiceWhatWeDo";
import ServiceWorkGallery from "./detail/ServiceWorkGallery";
import ServiceProof from "./detail/ServiceProof";
import ServiceWebDevProof from "./detail/ServiceWebDevProof";
import ServiceComparison from "./detail/ServiceComparison";
import ServiceProcess from "./detail/ServiceProcess";
import ServiceReviews from "./detail/ServiceReviews";
import ServiceWebDevPricing from "./detail/ServiceWebDevPricing";

// Relevant photo for each service, used as the lead visual in "What we do".
const serviceImages: Record<string, string> = {
  "web-development": "/expertise/web-development.jpg",
  "app-development": "/expertise/app-development.jpg",
  "ui-ux-design": "/expertise/ui-ux.jpg",
  "ecommerce-development": "/expertise/ecommerce.jpg",
  "social-media-management": "/expertise/social-media.jpg",
  "social-media-marketing": "/expertise/meta-ads.jpg",
  seo: "/expertise/seo.jpg",
  ppc: "/expertise/ppc.jpg",
  "video-production": "/expertise/video-production.jpg",
  "video-editing": "/expertise/video-editing.jpg",
  "graphic-designing": "/expertise/graphic-design.jpg",
  "crm-solutions": "/crm/crm-1.jpeg",
  "marketing-automation": "/expertise/automation.jpg",
  "managed-cloud": "/expertise/cloud.jpg",
};

export default function ServiceDetail({
  service,
  category,
}: {
  service: Service;
  category: ServiceCategory;
}) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="pt-24">
      <ServiceHero service={service} category={category} />
      <ServiceLogoWall />
      <ServiceTestimonialWall />
      <ServiceWhatWeDo service={service} serviceImage={serviceImages[service.slug]} />
      {/* Hide ServiceWorkGallery for web development, show for others */}
      {service.slug !== 'web-development' && <ServiceWorkGallery serviceName={service.name} />}
      {/* Use web development proof for web-dev service, regular proof for others */}
      {service.slug === 'web-development' ? <ServiceWebDevProof /> : <ServiceProof />}
      <ServiceComparison service={service} />
      {/* Custom pricing table for web development */}
      {service.slug === 'web-development' && <ServiceWebDevPricing />}
      <ServiceProcess service={service} />
      <ServiceReviews />

      {/* ============ FAQ ============ */}
      <section className="bg-bg px-6 py-[88px] md:px-[80px]">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <span className="font-['Geist'] block text-[11px] font-semibold uppercase tracking-[0.35em] text-brand">
              07 — Help
            </span>
            <h2 className="font-['Hanken_Grotesk'] mt-6 text-[32px] font-bold leading-[1.1] tracking-tight text-fg md:text-[46px]">
              FAQs.{" "}
              <em className="not-italic text-brand md:italic">Straight answers.</em>
            </h2>
            <p className="font-['Inter'] mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-fg-2">
              {service.faqIntro}
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {service.faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-[16px] border border-line/50 bg-surface"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 px-7 py-5 text-left"
                  >
                    <span className="font-['Hanken_Grotesk'] text-[16.5px] font-semibold text-fg">
                      {faq.question}
                    </span>
                    <span
                      className={`material-symbols-outlined shrink-0 text-brand transition-transform duration-300 ${
                        isOpen ? "rotate-90" : ""
                      }`}
                    >
                      chevron_right
                    </span>
                  </button>
                  <div
                    className="grid transition-all duration-300"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="font-['Inter'] px-7 pb-6 text-[14.5px] leading-relaxed text-fg-2">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ LEAD FORM ============ */}
      <section className="bg-surface-2/40 px-6 py-[88px] md:px-[80px]">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
          <div>
            <span className="font-['Geist'] block text-[11px] font-semibold uppercase tracking-[0.35em] text-brand">
              08 — Next step
            </span>
            <h2 className="font-['Hanken_Grotesk'] mt-6 text-[32px] font-bold leading-[1.1] tracking-tight text-fg md:text-[42px]">
              Tell us where you are today.{" "}
              <em className="not-italic text-brand md:italic">We&apos;ll tell you straight.</em>
            </h2>
            <p className="font-['Inter'] mt-5 max-w-[520px] text-[15px] leading-relaxed text-fg-2">
              Send us your {service.name.toLowerCase()} brief and we&apos;ll come back with an
              honest read: what we&apos;d do first, what it costs, and whether we&apos;re the
              right team for it.
            </p>
          </div>
          <CustomSolutionForm />
        </div>
      </section>

      {/* ============ CTA BANNER ============ */}
      <section className="relative overflow-hidden px-6 py-[110px] md:px-[80px]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1230] via-[#101a3d] to-[#0a1230]" />
        <div className="ai-grid-bg absolute inset-0 opacity-20" />
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <h2 className="font-['Hanken_Grotesk'] mb-6 text-[36px] font-bold leading-tight text-white md:text-[56px]">
            Every story is unique
          </h2>
          <p className="font-['Inter'] mx-auto mb-10 max-w-2xl text-[15.5px] leading-relaxed text-white/70">
            Every brand has its own voice, audience, and goals. Share yours with us and
            we&apos;ll build the strategy that turns attention into customers.
          </p>
          <Link
            href="/contact"
            className="font-['Geist'] inline-flex items-center gap-3 rounded-full bg-brand px-10 py-4 text-[13px] font-semibold uppercase tracking-[0.16em] text-white transition-transform duration-300 hover:scale-[1.03]"
          >
            Start Your Project
            <span className="material-symbols-outlined text-lg">arrow_forward</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
