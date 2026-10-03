"use client";

/**
 * WafeeqCaseStudy — wraps the shared PremiumCaseStudy layout with Wafeeq's
 * Brand Identity section and Product Gallery showcase (same structure as the
 * Dohabus / RITM custom layouts).
 */

import { useEffect, useRef, useState } from "react";
import PremiumCaseStudy from "./PremiumCaseStudy";

// === ANIMATION HOOK ===
function useScrollReveal() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, isVisible] as const;
}

// === MOBILE APP SCREENS FOR THE SHOWCASE GALLERY ===
const WAFEEQ_SCREENS = [
  "/case-study/wafeeq/m-1.jpg",
  "/case-study/wafeeq/m-2.jpg",
  "/case-study/wafeeq/m-3.jpg",
  "/case-study/wafeeq/m-4.jpg",
  "/case-study/wafeeq/m-5.jpg",
  "/case-study/wafeeq/m-6.jpg",
];

// === WAFEEQ PRODUCT GALLERY SHOWCASE (center screen mirrors the passing card) ===
function WafeeqGallerySection() {
  const [headingRef, headingVisible] = useScrollReveal();

  const [currentCenterImage, setCurrentCenterImage] = useState(WAFEEQ_SCREENS[0]);
  const [centerImageOpacity, setCenterImageOpacity] = useState(1);
  const galleryRef = useRef<HTMLDivElement>(null);

  // Center screen mirrors whichever scrolling card is passing through the
  // center of the mockup — the passing card "enters" the screen (rAF-driven).
  useEffect(() => {
    const container = galleryRef.current;
    if (!container) return;

    let raf = 0;
    let lastIndex = -1;
    let fadeTimer: ReturnType<typeof setTimeout>;

    const tick = () => {
      const cRect = container.getBoundingClientRect();
      const centerX = cRect.left + cRect.width / 2;

      let closest: HTMLElement | null = null;
      let min = Infinity;
      container.querySelectorAll<HTMLElement>(".gallery-item").forEach((it) => {
        const r = it.getBoundingClientRect();
        const d = Math.abs(r.left + r.width / 2 - centerX);
        if (d < min) {
          min = d;
          closest = it;
        }
      });

      if (closest) {
        const idx =
          parseInt((closest as HTMLElement).dataset.imageIndex || "0") % WAFEEQ_SCREENS.length;
        if (idx !== lastIndex) {
          lastIndex = idx;
          setCenterImageOpacity(0);
          clearTimeout(fadeTimer);
          fadeTimer = setTimeout(() => {
            setCurrentCenterImage(WAFEEQ_SCREENS[idx]);
            setCenterImageOpacity(1);
          }, 180);
        }
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(fadeTimer);
    };
  }, []);

  return (
    <section className="relative bg-[#F8F5FC] py-32 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 relative z-10">
        <div
          ref={headingRef}
          className={`text-center transition-all duration-1000 ${
            headingVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h3 className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#7C3AED] mb-6" style={{ fontFamily: "Inter, sans-serif" }}>
            Product Gallery
          </h3>
          <p className="text-[14px] text-[#666666] mb-12 max-w-2xl mx-auto" style={{ fontFamily: "Inter, sans-serif" }}>
            Explore the Wafeeq platform — courses, AI sign practice, dashboards, and a community built for inclusive learning.
          </p>
        </div>

        {/* GALLERY CONTAINER */}
        <div className="relative overflow-hidden py-20" style={{ height: "44rem" }} ref={galleryRef as any}>

          {/* Layer 1: Continuous Scrolling App Screens - RIGHT → LEFT */}
          <div className="absolute inset-0 flex items-center">
            <div className="flex animate-gallery-scroll items-center gap-10" id="galleryTrack">
              {[...Array(6)].fill(null).map((_, setIndex) => (
                <div key={`scroll-${setIndex}`} className="flex gap-10">
                  {WAFEEQ_SCREENS.map((src, imgIndex) => (
                    <div
                      key={`scroll-${setIndex}-${imgIndex}`}
                      className="gallery-item flex-shrink-0 w-[248px] h-[512px] rounded-[2.25rem] overflow-hidden bg-white ring-1 ring-black/5 shadow-[0_30px_60px_-15px_rgba(124,58,237,0.25)] brightness-[0.97] transition-all duration-500"
                      data-image-index={imgIndex}
                    >
                      <img
                        src={src}
                        alt={`Wafeeq app screen ${imgIndex + 1}`}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Layer 2: Fixed Center Phone Mockup with Dynamic Screen */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
            <div className="relative">
              {/* Realistic phone shadow */}
              <div className="absolute inset-0 bg-black/20 rounded-[3.5rem] blur-2xl transform scale-105 translate-y-4"></div>

              {/* Main phone body — screen matches the screenshot aspect (347:771) so the FULL image shows with no crop */}
              <div className="w-[276px] bg-gradient-to-b from-gray-900 to-gray-800 rounded-[3rem] p-3 shadow-2xl relative z-10">
                <div className="w-full aspect-[347/771] bg-white rounded-[2.4rem] overflow-hidden relative">
                  <img
                    src={currentCenterImage}
                    alt="Wafeeq app screen"
                    className="w-full h-full object-cover object-top transition-opacity duration-200 ease-in-out"
                    style={{ opacity: centerImageOpacity }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Layer 3: Strong Edge Fade Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-72 bg-gradient-to-r from-[#F8F5FC] via-[#F8F5FC]/60 to-transparent z-20"></div>
          <div className="absolute right-0 top-0 bottom-0 w-72 bg-gradient-to-l from-[#F8F5FC] via-[#F8F5FC]/60 to-transparent z-20"></div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7C3AED]/20 to-transparent" />
    </section>
  );
}

// === WAFEEQ BRAND IDENTITY SHOWCASE SECTION ===
function WafeeqBrandIdentitySection() {
  const [sectionRef, sectionVisible] = useScrollReveal();
  const [headingRef, headingVisible] = useScrollReveal();
  const [paletteRef, paletteVisible] = useScrollReveal();
  const [typographyRef, typographyVisible] = useScrollReveal();
  const [logoRef, logoVisible] = useScrollReveal();

  // Wafeeq brand colors sampled from wafeeq.com
  const BRAND_COLORS = [
    { name: "Wafeeq Violet", hex: "#7C3AED", description: "Primary brand color" },
    { name: "Bright Violet", hex: "#8B5CF6", description: "Interactive accent" },
    { name: "Royal Purple", hex: "#6b398f", description: "Deep brand tone" },
    { name: "Plum", hex: "#4b3a63", description: "Secondary text" },
    { name: "Wafeeq Orange", hex: "#EF8010", description: "Primary CTA accent" },
    { name: "Amber", hex: "#F59E0B", description: "Highlight accent" },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#F8F5FC] py-32 overflow-hidden"
    >
      {/* Subtle hands-pattern background tint */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 20% 30%, #7C3AED 0%, transparent 40%), radial-gradient(circle at 80% 70%, #EF8010 0%, transparent 40%)`,
        backgroundSize: "900px 900px",
      }} />

      <div className="mx-auto max-w-[1400px] px-6 md:px-12 relative z-10">

        {/* SECTION HEADER */}
        <div
          ref={headingRef}
          className={`text-center mb-20 transition-all duration-1000 ${
            headingVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.3em] text-[#7C3AED]" style={{ fontFamily: "Inter, sans-serif" }}>
            Brand Identity
          </span>
          <h2 className="mt-6 text-[36px] md:text-[48px] font-bold leading-[1.1] tracking-tight text-[#1A1A1A]" style={{ fontFamily: "Hanken Grotesk, sans-serif" }}>
            An Inclusive Identity,
            <br />
            Built for Accessible Learning
          </h2>
          <p className="mt-6 text-[16px] text-[#666666] max-w-2xl mx-auto" style={{ fontFamily: "Inter, sans-serif" }}>
            Wafeeq&rsquo;s visual language reflects its mission — Access. Empower. Thrive. — with a warm, high-contrast system designed for accessibility across Arabic and English.
          </p>
        </div>

        {/* MAIN GRID - DESIGN SYSTEM */}
        <div className="grid gap-12 lg:gap-16 lg:grid-cols-2">

          {/* LEFT COLUMN */}
          <div className="space-y-16">

            {/* COLOR PALETTE */}
            <div
              ref={paletteRef}
              className={`transition-all duration-1000 delay-200 ${
                paletteVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h3 className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#1A1A1A] mb-6" style={{ fontFamily: "Inter, sans-serif" }}>
                Color Palette
              </h3>
              <p className="text-[14px] text-[#666666] mb-6" style={{ fontFamily: "Inter, sans-serif" }}>
                A violet-forward palette with warm orange accents — high-contrast pairs that keep every screen readable and welcoming.
              </p>

              {/* Color swatches grid */}
              <div className="grid grid-cols-3 gap-4">
                {BRAND_COLORS.map((color) => (
                  <div key={color.hex} className="space-y-2">
                    {/* Color swatch */}
                    <div
                      className="h-24 rounded-lg shadow-sm transition-transform hover:scale-105 duration-300"
                      style={{ backgroundColor: color.hex }}
                    />
                    {/* Color info */}
                    <div>
                      <div className="text-[12px] font-medium text-[#1A1A1A]">{color.name}</div>
                      <div className="text-[11px] text-[#888888] font-mono">{color.hex}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* TYPOGRAPHY */}
            <div
              ref={typographyRef}
              className={`transition-all duration-1000 delay-300 ${
                typographyVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h3 className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#1A1A1A] mb-6" style={{ fontFamily: "Inter, sans-serif" }}>
                Typography
              </h3>
              <p className="text-[14px] text-[#666666] mb-6" style={{ fontFamily: "Inter, sans-serif" }}>
                Clean, highly legible type that works across English and Arabic in both light and dark themes.
              </p>

              {/* Typography samples */}
              <div className="bg-white rounded-xl p-6 border border-[#E5E5E5]">
                <div className="space-y-6">
                  {/* Primary typeface */}
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.15em] text-[#888888] mb-2">Primary Typeface</div>
                    <div className="text-[24px] text-[#1A1A1A] leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
                      Aa Bb Cc Dd
                    </div>
                    <div className="text-[16px] text-[#1A1A1A] mt-2" style={{ fontFamily: "Inter, sans-serif" }}>
                      ABCDEFGHIJKLMNOPQRSTUVWXYZ
                    </div>
                    <div className="text-[14px] text-[#666666] mt-1" style={{ fontFamily: "Inter, sans-serif" }}>
                      abcdefghijklmnopqrstuvwxyz
                    </div>
                  </div>

                  {/* Typography hierarchy */}
                  <div className="pt-6 border-t border-[#F5F5F5]">
                    <div className="text-[11px] uppercase tracking-[0.15em] text-[#888888] mb-3">Typography Hierarchy</div>
                    <div className="space-y-3">
                      <div className="text-[32px] font-bold text-[#1A1A1A]" style={{ fontFamily: "Inter, sans-serif" }}>
                        Heading
                      </div>
                      <div className="text-[20px] font-semibold text-[#1A1A1A]" style={{ fontFamily: "Inter, sans-serif" }}>
                        Subheading
                      </div>
                      <div className="text-[14px] text-[#666666]" style={{ fontFamily: "Inter, sans-serif" }}>
                        Body text - Regular paragraph for content and descriptions
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-16">

            {/* LOGO */}
            <div
              ref={logoRef}
              className={`transition-all duration-1000 delay-400 ${
                logoVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h3 className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#1A1A1A] mb-6" style={{ fontFamily: "Inter, sans-serif" }}>
                Logo & Brand Mark
              </h3>
              <p className="text-[14px] text-[#666666] mb-6" style={{ fontFamily: "Inter, sans-serif" }}>
                A signature multicoloured hand mark paired with the wordmark — carrying the tagline &ldquo;Access. Empower. Thrive.&rdquo;
              </p>

              {/* Logo display */}
              <div className="bg-white rounded-xl p-8 border border-[#E5E5E5] flex items-center justify-center min-h-[200px]">
                <img
                  src="/case-study/wafeeq/logo-wafeeq.png"
                  alt="Wafeeq Logo"
                  className="h-24 w-auto object-contain"
                />
              </div>
            </div>

            {/* UI ACCENTS & ELEMENTS */}
            <div className={`transition-all duration-1000 delay-500 ${
              logoVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}>
              <h3 className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#1A1A1A] mb-6" style={{ fontFamily: "Inter, sans-serif" }}>
                UI Elements & Accents
              </h3>

              {/* UI elements grid */}
              <div className="space-y-4">
                {/* Buttons */}
                <div className="bg-white rounded-xl p-6 border border-[#E5E5E5]">
                  <div className="text-[11px] uppercase tracking-[0.15em] text-[#888888] mb-4">Button Style</div>
                  <div className="flex flex-wrap gap-3">
                    <button className="px-6 py-3 bg-[#EF8010] text-white text-[14px] font-semibold rounded-lg hover:bg-[#d97108] transition-colors">
                      Explore Courses
                    </button>
                    <button className="px-6 py-3 bg-white text-[#7C3AED] text-[14px] font-semibold rounded-lg border-2 border-[#7C3AED] hover:bg-[#7C3AED] hover:text-white transition-colors">
                      Become a Sponsor
                    </button>
                  </div>
                </div>

                {/* Iconography & Borders */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl p-6 border border-[#E5E5E5]">
                    <div className="text-[11px] uppercase tracking-[0.15em] text-[#888888] mb-4">Iconography</div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#7C3AED]/10 flex items-center justify-center">
                        <svg className="w-5 h-5 text-[#7C3AED]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 3v2.5a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3.5" />
                        </svg>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-[#EF8010]/10 flex items-center justify-center">
                        <svg className="w-5 h-5 text-[#EF8010]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        </svg>
                      </div>
                    </div>
                    <div className="text-[12px] text-[#666666] mt-3">Friendly hand & AI icons in brand tones</div>
                  </div>

                  <div className="bg-white rounded-xl p-6 border border-[#E5E5E5]">
                    <div className="text-[11px] uppercase tracking-[0.15em] text-[#888888] mb-4">Borders & Shapes</div>
                    <div className="space-y-2">
                      <div className="h-8 rounded-lg border-2 border-[#7C3AED]/20"></div>
                      <div className="h-8 rounded-full border-2 border-[#7C3AED]/30"></div>
                    </div>
                    <div className="text-[12px] text-[#666666] mt-3">Soft rounded corners with violet accents</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7C3AED]/20 to-transparent" />
    </section>
  );
}

// === WRAPPER COMPONENT ===
interface WafeeqCaseStudyProps {
  study: any;
}

export default function WafeeqCaseStudy({ study }: WafeeqCaseStudyProps) {
  return (
    <>
      {/* Use PremiumCaseStudy for the main content */}
      <PremiumCaseStudy study={study} />
      {/* Wafeeq Brand Identity Section */}
      <WafeeqBrandIdentitySection />
      {/* Wafeeq Product Gallery showcase */}
      <WafeeqGallerySection />
    </>
  );
}
