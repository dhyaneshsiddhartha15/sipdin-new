"use client";

import { useState } from "react";
import Link from "next/link";
import type { Service, ServiceCategory } from "@/lib/services";
import ReviewsAndConnect from "./ReviewsAndConnect";

const stats = [
  { value: "50+", label: "Projects Completed" },
  { value: "100%", label: "Client Retention" },
  { value: "4.9", label: "Client Rating" },
];

// Relevant photo for each service, shown in the About block
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
      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden bg-bg py-[80px] px-6 md:px-[80px]">
        <div className="ai-grid-bg pointer-events-none absolute inset-0 opacity-40" />
        <div className="relative max-w-[1440px] mx-auto">
          <div>
            <span className="font-['Geist'] text-xs font-medium text-[#4169E1] tracking-[0.4em] uppercase mb-6 block">
              {category.name} — Our Services
            </span>
            <h1 className="font-['Hanken_Grotesk'] text-[40px] md:text-[64px] font-semibold leading-[1.05] tracking-tight mb-6">
              {service.heroTitle}
            </h1>
            <p className="font-['Hanken_Grotesk'] text-2xl font-medium text-fg mb-8 leading-snug">
              {service.tagline}
            </p>
            <p className="font-['Inter'] text-lg text-fg-2 mb-6 max-w-2xl leading-relaxed">
              {service.description}
            </p>
            <p className="font-['Inter'] text-base text-fg-2 mb-12 max-w-2xl leading-relaxed">
              {service.intro}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-['Geist'] text-xs font-semibold uppercase tracking-[0.18em] text-white transition-transform hover:scale-105"
                style={{
                  backgroundImage:
                    "linear-gradient(120deg,#2E4FB8 0%,#4169E1 45%,#6E8CFF 100%)",
                }}
              >
                Schedule a Meeting
              </Link>
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-line px-8 py-4 font-['Geist'] text-xs font-semibold uppercase tracking-[0.18em] text-fg transition-colors hover:border-[#4169E1] hover:text-[#4169E1]"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                WhatsApp
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* ============ STATS BAR ============ */}
      <section className="border-y border-line/10 bg-surface px-6 py-16 md:px-[80px]">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-8 md:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="glass-card flex items-center justify-center gap-4 rounded-2xl border border-line/30 px-8 py-8"
            >
              <span className="font-['Hanken_Grotesk'] text-4xl font-semibold text-[#4169E1]">
                {stat.value}
              </span>
              <span className="font-['Geist'] text-sm uppercase tracking-widest text-fg-2">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ============ ABOUT ============ */}
      <section className="bg-bg px-6 py-[120px] md:px-[80px]">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div>
            <span className="font-['Geist'] mb-4 block text-xs font-medium uppercase tracking-[0.4em] text-[#4169E1]">
              {service.aboutLabel}
            </span>
            <h2 className="font-['Hanken_Grotesk'] mb-8 text-[36px] font-medium leading-[1.15] md:text-[48px]">
              {service.aboutTitle}
            </h2>
            <p className="font-['Inter'] max-w-xl text-lg leading-relaxed text-fg-2">
              {service.aboutText}
            </p>
          </div>
          <div className="relative">
            <div className="glass-card group relative aspect-[4/3] overflow-hidden rounded-2xl border border-line/30">
              {serviceImages[service.slug] ? (
                <>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={serviceImages[service.slug]}
                    alt={service.name}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05070f]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-7">
                    <span className="block h-[3px] w-10 rounded-full bg-[#4169E1] mb-3" />
                    <span className="font-['Geist'] text-xs font-semibold uppercase tracking-[0.3em] text-white">
                      {service.name}
                    </span>
                  </div>
                </>
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#4169E1]/20 via-transparent to-[#6E8CFF]/10">
                  <span className="font-['Geist'] text-xs uppercase tracking-[0.3em] text-fg-2">
                    {service.name}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ============ OFFERINGS GRID ============ */}
      <section className="bg-surface px-6 py-[120px] md:px-[80px]">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-20 text-center">
            <span className="font-['Geist'] mb-4 block text-xs font-medium uppercase tracking-[0.4em] text-[#4169E1]">
              What We Offer
            </span>
            <h2 className="font-['Hanken_Grotesk'] text-[36px] font-medium md:text-[48px]">
              {service.offeringsTitle}
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {service.offerings.map((offering, index) => (
              <div
                key={offering.title}
                className="hover-lift glass-card group relative overflow-hidden rounded-2xl border border-line/30 p-10 transition-all duration-500 hover:border-[#4169E1]/40"
              >
                <span className="font-['Geist'] mb-6 block text-sm font-bold text-[#4169E1]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-['Hanken_Grotesk'] mb-4 text-2xl font-medium">
                  {offering.title}
                </h3>
                <p className="font-['Inter'] text-sm leading-relaxed text-fg-2">
                  {offering.description}
                </p>
                <div className="mt-8 h-px w-0 bg-[#4169E1] transition-all duration-700 group-hover:w-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ REVIEWS + CONNECT FORM ============ */}
      <ReviewsAndConnect currentService={service.name} />

      {/* ============ FAQ ============ */}
      <section className="bg-bg px-6 py-[120px] md:px-[80px]">
        <div className="mx-auto max-w-4xl">
          <div className="mb-16 text-center">
            <span className="font-['Geist'] mb-6 inline-flex items-center gap-2 rounded-full border border-line px-5 py-2 text-xs font-medium uppercase tracking-widest text-[#4169E1]">
              <span className="material-symbols-outlined text-base">bolt</span>
              Help
            </span>
            <h2 className="font-['Hanken_Grotesk'] mb-8 text-[36px] font-medium md:text-[48px]">
              <span className="text-[#4169E1]">FAQs:</span> Find Your Solutions
            </h2>
            <p className="font-['Inter'] mx-auto max-w-2xl text-lg leading-relaxed text-fg-2">
              {service.faqIntro}
            </p>
          </div>
          <div className="flex flex-col gap-4">
            {service.faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={faq.question}
                  className="glass-card overflow-hidden rounded-xl border border-line/30"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 px-8 py-6 text-left"
                  >
                    <span className="font-['Hanken_Grotesk'] text-lg font-medium">
                      {faq.question}
                    </span>
                    <span
                      className={`material-symbols-outlined shrink-0 text-[#4169E1] transition-transform duration-300 ${
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
                      <p className="font-['Inter'] px-8 pb-6 text-base leading-relaxed text-fg-2">
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

      {/* ============ CTA BANNER ============ */}
      <section className="relative overflow-hidden px-6 py-[140px] md:px-[80px]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1230] via-[#101a3d] to-[#0a1230]" />
        <div className="ai-grid-bg absolute inset-0 opacity-20" />
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <h2 className="font-['Hanken_Grotesk'] mb-8 text-[40px] font-semibold text-white md:text-[64px]">
            Every story is unique
          </h2>
          <p className="font-['Inter'] mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-white/70">
            Every brand has its own voice, audience, and goals. Share your story
            with us, and we&apos;ll create a tailored strategy that builds
            awareness, increases engagement, and turns attention into loyal
            customers.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 rounded-full px-10 py-5 font-['Geist'] text-xs font-semibold uppercase tracking-[0.2em] text-white transition-transform hover:scale-105"
            style={{
              backgroundImage:
                "linear-gradient(120deg,#2E4FB8 0%,#4169E1 45%,#6E8CFF 100%)",
            }}
          >
            Start Your Project
            <span className="material-symbols-outlined text-lg">
              arrow_forward
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}
