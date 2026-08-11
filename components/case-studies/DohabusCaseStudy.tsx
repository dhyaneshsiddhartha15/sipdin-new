"use client";

/**
 * DohabusCaseStudy — Premium editorial case study layout for Dohabus Qatar Tourism Platform
 * Features: two-column hero, large showcases, image galleries, alternating feature layouts
 */

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
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

// === APP SCREENS FOR THE SHOWCASE GALLERY ===
const DOHABUS_SCREENS = [
  '/case-study/Doha-bus/8.jpg',
  '/case-study/Doha-bus/9.jpg',
  '/case-study/Doha-bus/10.jpg',
  '/case-study/Doha-bus/11.jpg',
  '/case-study/Doha-bus/12.jpg',
  '/case-study/Doha-bus/13.jpg',
];

// === DOHABUS APP GALLERY SHOWCASE (center phone mirrors the passing screen) ===
function DohabusGallerySection() {
  const [headingRef, headingVisible] = useScrollReveal();

  const [currentPhoneImage, setCurrentPhoneImage] = useState(DOHABUS_SCREENS[0]);
  const [phoneImageOpacity, setPhoneImageOpacity] = useState(1);
  const galleryRef = useRef<HTMLDivElement>(null);

  // Center phone mirrors whichever scrolling screen is passing through the
  // center of the mockup — the passing screen "enters" the phone (rAF-driven).
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
          parseInt((closest as HTMLElement).dataset.imageIndex || "0") % DOHABUS_SCREENS.length;
        if (idx !== lastIndex) {
          lastIndex = idx;
          setPhoneImageOpacity(0);
          clearTimeout(fadeTimer);
          fadeTimer = setTimeout(() => {
            setCurrentPhoneImage(DOHABUS_SCREENS[idx]);
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

  return (
    <section className="relative bg-[#FAF8F3] py-32 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 relative z-10">
        <div
          ref={headingRef}
          className={`text-center transition-all duration-1000 ${
            headingVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h3 className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#0C8A99] mb-6" style={{ fontFamily: "Inter, sans-serif" }}>
            App Gallery
          </h3>
          <p className="text-[14px] text-[#666666] mb-12 max-w-2xl mx-auto" style={{ fontFamily: "Inter, sans-serif" }}>
            Explore the Dohabus booking experience — tours, attractions, and seamless trip planning.
          </p>
        </div>

        {/* GALLERY CONTAINER */}
        <div className="relative overflow-hidden py-20" style={{ height: '44rem' }} ref={galleryRef as any}>

          {/* Layer 1: Continuous Scrolling App Screens - RIGHT → LEFT */}
          <div className="absolute inset-0 flex items-center">
            <div className="flex animate-gallery-scroll items-center gap-10" id="galleryTrack">
              {[...Array(6)].fill(null).map((_, setIndex) => (
                <div key={`scroll-${setIndex}`} className="flex gap-10">
                  {DOHABUS_SCREENS.map((src, imgIndex) => (
                    <div
                      key={`scroll-${setIndex}-${imgIndex}`}
                      className="gallery-item flex-shrink-0 w-[248px] h-[512px] rounded-[2.25rem] overflow-hidden bg-white ring-1 ring-black/5 shadow-[0_30px_60px_-15px_rgba(12,138,153,0.25)] brightness-[0.97] transition-all duration-500"
                      data-image-index={imgIndex}
                    >
                      <img
                        src={src}
                        alt={`Dohabus app screen ${imgIndex + 1}`}
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
                    src={currentPhoneImage}
                    alt="Dohabus app screen"
                    className="w-full h-full object-cover object-top transition-opacity duration-200 ease-in-out"
                    style={{ opacity: phoneImageOpacity }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Layer 3: Strong Edge Fade Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-72 bg-gradient-to-r from-[#FAF8F3] via-[#FAF8F3]/60 to-transparent z-20"></div>
          <div className="absolute right-0 top-0 bottom-0 w-72 bg-gradient-to-l from-[#FAF8F3] via-[#FAF8F3]/60 to-transparent z-20"></div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0C8A99]/20 to-transparent" />
    </section>
  );
}

// === DOHABUS BRAND IDENTITY SHOWCASE SECTION ===
function DohabusBrandIdentitySection() {
  const [sectionRef, sectionVisible] = useScrollReveal();
  const [headingRef, headingVisible] = useScrollReveal();
  const [paletteRef, paletteVisible] = useScrollReveal();
  const [typographyRef, typographyVisible] = useScrollReveal();
  const [logoRef, logoVisible] = useScrollReveal();

  // Dohabus brand colors derived from Qatar tourism and bus branding
  const BRAND_COLORS = [
    { name: "Doha Teal", hex: "#0C8A99", description: "Primary brand color" },
    { name: "Qatar Maroon", hex: "#8A1538", description: "Heritage accent" },
    { name: "Desert Sand", hex: "#D4A574", description: "Earth tones" },
    { name: "Sky Blue", hex: "#5BA4B5", description: "Fresh accent" },
    { name: "Warm Gold", hex: "#C9A961", description: "Premium touch" },
    { name: "Deep Charcoal", hex: "#1A1A1A", description: "Primary text" },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#FAF8F3] py-32 overflow-hidden"
    >
      {/* Subtle pattern background */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `repeating-conic-gradient(from 0deg, #0C8A99 0deg, #0C8A99 0.5deg, transparent 0.5deg, transparent 45deg)`,
        backgroundSize: '800px 800px',
        filter: 'blur(1px)'
      }} />

      <div className="mx-auto max-w-[1400px] px-6 md:px-12 relative z-10">

        {/* SECTION HEADER */}
        <div
          ref={headingRef}
          className={`text-center mb-20 transition-all duration-1000 ${
            headingVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.3em] text-[#0C8A99]" style={{ fontFamily: "Inter, sans-serif" }}>
            Brand Identity
          </span>
          <h2 className="mt-6 text-[36px] md:text-[48px] font-bold leading-[1.1] tracking-tight text-[#1A1A1A]" style={{ fontFamily: "Hanken Grotesk, sans-serif" }}>
            A Tourism Identity,
            <br />
            Rooted in Qatari Heritage
          </h2>
          <p className="mt-6 text-[16px] text-[#666666] max-w-2xl mx-auto" style={{ fontFamily: "Inter, sans-serif" }}>
            Dohabus's visual language reflects Qatar's tourism spirit — modern, welcoming, and deeply connected to Arabian hospitality.
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
                Colors inspired by Qatar's landscape — from the turquoise waters of the Arabian Gulf to the warm desert sands.
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
                        border: color.hex === "#FAF8F3" ? "1px solid #E5E5E5" : "none"
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
                Modern, clean typography that ensures readability for international tourists while maintaining cultural warmth.
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
                Logo & Brand Mark
              </h3>
              <p className="text-[14px] text-[#666666] mb-6" style={{ fontFamily: "Inter, sans-serif" }}>
                A distinctive logo representing Dohabus's position as Qatar's premier sightseeing and tourism platform.
              </p>

              {/* Logo display */}
              <div className="bg-white rounded-xl p-8 border border-[#E5E5E5] flex items-center justify-center min-h-[200px]">
                <img
                  src="/dohabus_logo.jpg"
                  alt="Dohabus Logo"
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
                    <button className="px-6 py-3 bg-[#0C8A99] text-white text-[14px] font-semibold rounded-lg hover:bg-[#0a7684] transition-colors">
                      Book Now
                    </button>
                    <button className="px-6 py-3 bg-white text-[#0C8A99] text-[14px] font-semibold rounded-lg border-2 border-[#0C8A99] hover:bg-[#0C8A99] hover:text-white transition-colors">
                      View Tours
                    </button>
                  </div>
                </div>

                {/* Iconography & Borders */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl p-6 border border-[#E5E5E5]">
                    <div className="text-[11px] uppercase tracking-[0.15em] text-[#888888] mb-4">Iconography</div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#0C8A99]/10 flex items-center justify-center">
                        <svg className="w-5 h-5 text-[#0C8A99]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 7m0 13V7" />
                        </svg>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-[#0C8A99]/10 flex items-center justify-center">
                        <svg className="w-5 h-5 text-[#0C8A99]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                    <div className="text-[12px] text-[#666666] mt-3">Clean line icons with teal accents</div>
                  </div>

                  <div className="bg-white rounded-xl p-6 border border-[#E5E5E5]">
                    <div className="text-[11px] uppercase tracking-[0.15em] text-[#888888] mb-4">Borders & Shapes</div>
                    <div className="space-y-2">
                      <div className="h-8 rounded-lg border-2 border-[#0C8A99]/20"></div>
                      <div className="h-8 rounded-full border-2 border-[#0C8A99]/30"></div>
                    </div>
                    <div className="text-[12px] text-[#666666] mt-3">Rounded corners with tourism-themed borders</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* TOURISM IMAGERY STYLE */}
        <div className={`mt-20 transition-all duration-1000 delay-600 ${
          logoVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <h3 className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#1A1A1A] mb-6 text-center" style={{ fontFamily: "Inter, sans-serif" }}>
            Tourism Imagery
          </h3>
          <p className="text-[14px] text-[#666666] mb-8 text-center max-w-2xl mx-auto" style={{ fontFamily: "Inter, sans-serif" }}>
            Showcasing Qatar's landmarks, desert adventures, and tourism experiences.
          </p>

          {/* Tourism images grid */}
          <div className="grid grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-4 border border-[#E5E5E5] shadow-sm hover:shadow-md transition-shadow">
              <img
                src="/case-study/Doha-bus/1.jpg"
                alt="Dohabus Tour"
                className="w-full h-32 object-cover"
              />
            </div>
            <div className="bg-white rounded-xl p-4 border border-[#E5E5E5] shadow-sm hover:shadow-md transition-shadow">
              <img
                src="/case-study/Doha-bus/2.jpg"
                alt="Desert Safari"
                className="w-full h-32 object-cover"
              />
            </div>
            <div className="bg-white rounded-xl p-4 border border-[#E5E5E5] shadow-sm hover:shadow-md transition-shadow">
              <img
                src="/case-study/Doha-bus/3.jpg"
                alt="City Tour"
                className="w-full h-32 object-cover"
              />
            </div>
          </div>
        </div>

        {/* TOURISM VISUAL LANGUAGE */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-700 ${
          logoVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-white rounded-full border border-[#0C8A99]/20">
            <div className="w-8 h-8 rounded-full bg-[#0C8A99]/10 flex items-center justify-center">
              <svg className="w-4 h-4 text-[#0C8A99]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="text-[12px] text-[#666666]" style={{ fontFamily: "Inter, sans-serif" }}>
              Global tourism appeal • Qatari heritage • Modern adventure experiences
            </div>
          </div>
        </div>

      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0C8A99]/20 to-transparent" />
    </section>
  );
}

// === WRAPPER COMPONENT ===
interface DohabusCaseStudyProps {
  study: any;
}

export default function DohabusCaseStudy({ study }: DohabusCaseStudyProps) {
  return (
    <>
      {/* Use PremiumCaseStudy for the main content */}
      <PremiumCaseStudy study={study} />
      {/* Add Dohabus Brand Identity Section */}
      <DohabusBrandIdentitySection />
      {/* Add Dohabus App Gallery showcase */}
      <DohabusGallerySection />
    </>
  );
}
