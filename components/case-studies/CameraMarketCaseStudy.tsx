"use client";

/**
 * CameraMarketCaseStudy — Premium editorial case study layout for Camera Market Dehradun
 * Features: hero, large showcases, alternating feature layouts, brand identity
 */

import { useEffect, useRef, useState } from "react";
import PremiumCaseStudy from "./PremiumCaseStudy";
import type { CaseStudy } from "@/lib/caseStudies";

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

// === GALLERY IMAGE TRACKER ===
const GALLERY_IMAGES = [
  '/case-study/camera/8.jpg',
  '/case-study/camera/9.jpg',
  '/case-study/camera/10.jpg',
  '/case-study/camera/11.jpg',
  '/case-study/camera/13.png'
];

// === CAMERA MARKET BRAND IDENTITY SHOWCASE SECTION ===
function CameraMarketBrandIdentitySection() {
  const [sectionRef, sectionVisible] = useScrollReveal();
  const [headingRef, headingVisible] = useScrollReveal();
  const [paletteRef, paletteVisible] = useScrollReveal();
  const [typographyRef, typographyVisible] = useScrollReveal();
  const [logoRef, logoVisible] = useScrollReveal();

  // Dynamic phone screen state
  const [currentPhoneImage, setCurrentPhoneImage] = useState(GALLERY_IMAGES[0]);
  const [phoneImageOpacity, setPhoneImageOpacity] = useState(1);
  const galleryRef = useRef<HTMLDivElement>(null);

  // Center phone mirrors whichever scrolling screen is passing through the
  // center of the mockup — the passing screen "enters" the phone. Driven by
  // rAF (smooth, auto-pauses when off-screen) instead of a 100ms polling loop.
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
          parseInt((closest as HTMLElement).dataset.imageIndex || "0") % GALLERY_IMAGES.length;
        if (idx !== lastIndex) {
          lastIndex = idx;
          setPhoneImageOpacity(0);
          clearTimeout(fadeTimer);
          fadeTimer = setTimeout(() => {
            setCurrentPhoneImage(GALLERY_IMAGES[idx]);
            setPhoneImageOpacity(1);
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

  // Camera Market brand colors - photography & tech theme
  const BRAND_COLORS = [
    { name: "Tech Navy", hex: "#1E3A8A", description: "Primary brand color" },
    { name: "Lens Blue", hex: "#3B82F6", description: "Trust & reliability" },
    { name: "Camera Silver", hex: "#E5E7EB", description: "Equipment tones" },
    { name: "Amber Gold", hex: "#F59E0B", description: "Premium accent" },
    { name: "Focus Purple", hex: "#6366F1", description: "Creative accent" },
    { name: "Deep Charcoal", hex: "#1A1A1A", description: "Primary text" },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#F8F9FA] py-32 overflow-hidden"
    >
      {/* Subtle camera lens pattern background */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle, #1E3A8A 1px, transparent 1px)`,
        backgroundSize: '40px 40px',
        filter: 'blur(0.5px)'
      }} />

      <div className="mx-auto max-w-[1400px] px-6 md:px-12 relative z-10">

        {/* SECTION HEADER */}
        <div
          ref={headingRef}
          className={`text-center mb-20 transition-all duration-1000 ${
            headingVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.3em] text-[#1E3A8A]" style={{ fontFamily: "Inter, sans-serif" }}>
            Brand Identity
          </span>
          <h2 className="mt-6 text-[36px] md:text-[48px] font-bold leading-[1.1] tracking-tight text-[#1A1A1A]" style={{ fontFamily: "Hanken Grotesk, sans-serif" }}>
            A Creator's Identity,
            <br />
            Focused on Photography
          </h2>
          <p className="mt-6 text-[16px] text-[#666666] max-w-2xl mx-auto" style={{ fontFamily: "Inter, sans-serif" }}>
            Camera Market Dehradun's visual language speaks to photographers, filmmakers, and creators — professional, reliable, and passion-driven.
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
                Tech-inspired colors that evoke professional equipment, creativity, and trust.
              </p>

              {/* Color swatches grid */}
              <div className="grid grid-cols-3 gap-4">
                {BRAND_COLORS.map((color, index) => (
                  <div key={color.hex} className="space-y-2">
                    {/* Color swatch */}
                    <div
                      className="h-24 rounded-lg shadow-sm transition-transform hover:scale-105 duration-300"
                      style={{
                        backgroundColor: color.hex,
                        border: color.hex === "#E5E7EB" || color.hex === "#F8F9FA" ? "1px solid #E5E5E5" : "none"
                      }}
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
                Bold, modern typography ensuring readability and technical clarity for equipment specifications.
              </p>

              {/* Typography samples */}
              <div className="bg-white rounded-xl p-6 border border-[#E5E5E5]">
                <div className="space-y-6">
                  {/* Primary typeface */}
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.15em] text-[#888888] mb-2">Primary Typeface</div>
                    <div className="text-[24px] text-[#1A1A1A] leading-relaxed" style={{ fontFamily: "Hanken Grotesk, sans-serif" }}>
                      Aa Bb Cc Dd
                    </div>
                    <div className="text-[16px] text-[#1A1A1A] mt-2" style={{ fontFamily: "Hanken Grotesk, sans-serif" }}>
                      ABCDEFGHIJKLMNOPQRSTUVWXYZ
                    </div>
                    <div className="text-[14px] text-[#666666] mt-1" style={{ fontFamily: "Hanken Grotesk, sans-serif" }}>
                      abcdefghijklmnopqrstuvwxyz
                    </div>
                  </div>

                  {/* Typography hierarchy */}
                  <div className="pt-6 border-t border-[#F5F5F5]">
                    <div className="text-[11px] uppercase tracking-[0.15em] text-[#888888] mb-3">Typography Hierarchy</div>
                    <div className="space-y-3">
                      <div className="text-[32px] font-bold text-[#1A1A1A]" style={{ fontFamily: "Hanken Grotesk, sans-serif" }}>
                        Heading
                      </div>
                      <div className="text-[20px] font-semibold text-[#1A1A1A]" style={{ fontFamily: "Hanken Grotesk, sans-serif" }}>
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
                Store Identity
              </h3>
              <p className="text-[14px] text-[#666666] mb-6" style={{ fontFamily: "Inter, sans-serif" }}>
                A professional mark representing Camera Market's position as Dehradun's trusted photography equipment retailer.
              </p>

              {/* Logo display */}
              <div className="bg-white rounded-xl p-8 border border-[#E5E5E5] flex items-center justify-center min-h-[200px]">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <svg className="w-12 h-12 text-[#1E3A8A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="text-[20px] font-bold text-[#1A1A1A]" style={{ fontFamily: "Hanken Grotesk, sans-serif" }}>
                    Camera Market
                  </div>
                  <div className="text-[12px] text-[#666666] mt-1" style={{ fontFamily: "Inter, sans-serif" }}>
                    Dehradun
                  </div>
                </div>
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
                    <button className="px-6 py-3 bg-[#1E3A8A] text-white text-[14px] font-semibold rounded-lg hover:bg-[#1e40af] transition-colors">
                      Shop Now
                    </button>
                    <button className="px-6 py-3 bg-white text-[#1E3A8A] text-[14px] font-semibold rounded-lg border-2 border-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white transition-colors">
                      View Products
                    </button>
                  </div>
                </div>

                {/* Iconography & Borders */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl p-6 border border-[#E5E5E5]">
                    <div className="text-[11px] uppercase tracking-[0.15em] text-[#888888] mb-4">Iconography</div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#1E3A8A]/10 flex items-center justify-center">
                        <svg className="w-5 h-5 text-[#1E3A8A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                        </svg>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-[#1E3A8A]/10 flex items-center justify-center">
                        <svg className="w-5 h-5 text-[#1E3A8A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </div>
                    </div>
                    <div className="text-[12px] text-[#666666] mt-3">Photography equipment icons</div>
                  </div>

                  <div className="bg-white rounded-xl p-6 border border-[#E5E5E5]">
                    <div className="text-[11px] uppercase tracking-[0.15em] text-[#888888] mb-4">Borders & Shapes</div>
                    <div className="space-y-2">
                      <div className="h-8 rounded-lg border-2 border-[#1E3A8A]/20"></div>
                      <div className="h-8 rounded-full border-2 border-[#1E3A8A]/30"></div>
                    </div>
                    <div className="text-[12px] text-[#666666] mt-3">Modern tech-inspired borders</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ANIMATED IMAGE CAROUSEL */}
        <div className={`mt-20 transition-all duration-1000 delay-600 ${
          logoVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <h3 className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#1A1A1A] mb-6 text-center" style={{ fontFamily: "Inter, sans-serif" }}>
            Product Gallery
          </h3>
          <p className="text-[14px] text-[#666666] mb-12 text-center max-w-2xl mx-auto" style={{ fontFamily: "Inter, sans-serif" }}>
            Explore our range of professional photography equipment
          </p>

          {/* GALLERY CONTAINER */}
          <div className="relative overflow-hidden py-20" style={{ height: '44rem' }} ref={galleryRef as any}>

            {/* Layer 1: Continuous Scrolling App Screens - RIGHT → LEFT */}
            <div className="absolute inset-0 flex items-center">
              <div className="flex animate-gallery-scroll items-center gap-10" id="galleryTrack">
                {[...Array(6)].fill(null).map((_, setIndex) => (
                  <div key={`scroll-${setIndex}`} className="flex gap-10">
                    {[
                      { src: '/case-study/camera/8.jpg', id: 0 },
                      { src: '/case-study/camera/9.jpg', id: 1 },
                      { src: '/case-study/camera/10.jpg', id: 2 },
                      { src: '/case-study/camera/11.jpg', id: 3 }
                    ].map((img, imgIndex) => (
                      <div
                        key={`scroll-${setIndex}-${imgIndex}`}
                        className="gallery-item flex-shrink-0 w-[248px] h-[512px] rounded-[2.25rem] overflow-hidden bg-white ring-1 ring-black/5 shadow-[0_30px_60px_-15px_rgba(30,58,138,0.25)] brightness-[0.97] transition-all duration-500"
                        data-image-index={img.id}
                      >
                        <img
                          src={img.src}
                          alt={`Camera Market app screen ${imgIndex + 1}`}
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
              {/* Phone frame with enhanced shadow */}
              <div className="relative">
                {/* Realistic phone shadow */}
                <div className="absolute inset-0 bg-black/20 rounded-[3.5rem] blur-2xl transform scale-105 translate-y-4"></div>

                {/* Main phone body — screen matches the screenshot aspect (347:771) so the FULL image shows with no crop */}
                <div className="w-[276px] bg-gradient-to-b from-gray-900 to-gray-800 rounded-[3rem] p-3 shadow-2xl relative z-10">
                  <div className="w-full aspect-[347/771] bg-white rounded-[2.4rem] overflow-hidden relative">
                    <img
                      src={currentPhoneImage}
                      alt="Camera Market app screen"
                      className="w-full h-full object-cover transition-opacity duration-200 ease-in-out"
                      style={{ opacity: phoneImageOpacity }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Layer 3: Strong Edge Fade Masks */}
            <div className="absolute left-0 top-0 bottom-0 w-72 bg-gradient-to-r from-[#F8F9FA] via-[#F8F9FA]/60 to-transparent z-20"></div>
            <div className="absolute right-0 top-0 bottom-0 w-72 bg-gradient-to-l from-[#F8F9FA] via-[#F8F9FA]/60 to-transparent z-20"></div>
          </div>
        </div>

        {/* CREATOR VISUAL LANGUAGE */}
        <div className={`mt-20 text-center transition-all duration-1000 delay-600 ${
          logoVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-white rounded-full border border-[#1E3A8A]/20">
            <div className="w-8 h-8 rounded-full bg-[#1E3A8A]/10 flex items-center justify-center">
              <svg className="w-4 h-4 text-[#1E3A8A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <div className="text-[12px] text-[#666666]" style={{ fontFamily: "Inter, sans-serif" }}>
              Professional gear • Expert guidance • Creator community
            </div>
          </div>
        </div>

      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1E3A8A]/20 to-transparent" />
    </section>
  );
}

// === WRAPPER COMPONENT ===
interface CameraMarketCaseStudyProps {
  study: CaseStudy;
}

export default function CameraMarketCaseStudy({ study }: CameraMarketCaseStudyProps) {
  return (
    <>
      {/* Use PremiumCaseStudy for the main content */}
      <PremiumCaseStudy study={study} />
      {/* Add Camera Market Brand Identity Section */}
      <CameraMarketBrandIdentitySection />
    </>
  );
}
