"use client";

/**
 * MobileAppGallerySection — auto-scrolling strip of phone-framed mobile
 * screenshots with a fixed centre phone that mirrors whichever screen passes
 * through the middle (rAF-driven, same mechanic as Rudradharma's app gallery).
 */

import { useEffect, useRef, useState } from "react";
import type { CaseStudy } from "@/lib/caseStudies";

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

function MobileAppGallerySection({
  section,
  accent,
}: {
  section: Extract<CaseStudy["sections"][number], { type: "mobileGallery" }>;
  accent: string;
}) {
  const { label, intro, screens } = section;
  const bg = "#fafafa";

  const [headingRef, headingVisible] = useScrollReveal();
  const [currentPhoneImage, setCurrentPhoneImage] = useState(screens[0]);
  const [phoneImageOpacity, setPhoneImageOpacity] = useState(1);
  const galleryRef = useRef<HTMLDivElement>(null);

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
        const idx = parseInt((closest as HTMLElement).dataset.imageIndex || "0") % screens.length;
        if (idx !== lastIndex) {
          lastIndex = idx;
          setPhoneImageOpacity(0);
          clearTimeout(fadeTimer);
          fadeTimer = setTimeout(() => {
            setCurrentPhoneImage(screens[idx]);
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
  }, [screens]);

  return (
    <section className="relative py-24 overflow-hidden" style={{ backgroundColor: bg }}>
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-12">
        <div
          ref={headingRef}
          className={`text-center transition-all duration-1000 ${
            headingVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h3
            className="mb-5 text-[12px] font-semibold uppercase tracking-[0.2em]"
            style={{ color: accent, fontFamily: "Inter, sans-serif" }}
          >
            {label}
          </h3>
          {intro && (
            <p className="mx-auto mb-8 max-w-2xl text-[14px] leading-relaxed text-[#666666]" style={{ fontFamily: "Inter, sans-serif" }}>
              {intro}
            </p>
          )}
        </div>

        {/* GALLERY CONTAINER */}
        <div className="relative overflow-hidden py-16" style={{ height: "44rem" }} ref={galleryRef}>
          {/* Layer 1: Continuous Scrolling App Screens — RIGHT → LEFT */}
          <div className="absolute inset-0 flex items-center">
            <div className="flex animate-gallery-scroll items-center gap-10" id="galleryTrack">
              {[...Array(6)].fill(null).map((_, setIndex) => (
                <div key={`scroll-${setIndex}`} className="flex gap-10">
                  {screens.map((src, imgIndex) => (
                    <div
                      key={`scroll-${setIndex}-${imgIndex}`}
                      className="gallery-item flex-shrink-0 overflow-hidden rounded-[2.25rem] bg-white brightness-[0.97] transition-all duration-500"
                      style={{
                        width: "240px",
                        height: "520px",
                        boxShadow: `0 30px 60px -15px ${accent}35`,
                      }}
                      data-image-index={imgIndex}
                    >
                      <img
                        src={src}
                        alt={`${label} screen ${imgIndex + 1}`}
                        className="h-full w-full object-cover object-top"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Layer 2: Fixed Centre Phone Mockup with Dynamic Screen */}
          <div className="absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              {/* Realistic phone shadow */}
              <div className="absolute inset-0 scale-105 translate-y-4 rounded-[3.5rem] bg-black/20 blur-2xl" />

              {/* Main phone body — screen matches the mobile screenshot aspect (~383:829) so the FULL image shows with no crop */}
              <div className="relative z-10 w-[276px] rounded-[3rem] bg-gradient-to-b from-gray-900 to-gray-800 p-3 shadow-2xl">
                <div className="relative w-full overflow-hidden rounded-[2.4rem] bg-white aspect-[383/829]">
                  <img
                    src={currentPhoneImage}
                    alt={`${label} screen`}
                    className="h-full w-full object-cover object-top transition-opacity duration-200 ease-in-out"
                    style={{ opacity: phoneImageOpacity }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Layer 3: Strong Edge Fade Masks */}
          <div
            className="absolute left-0 top-0 bottom-0 z-20 w-20 sm:w-40 md:w-72"
            style={{ background: `linear-gradient(90deg, ${bg} 0%, ${bg}cc 45%, transparent 100%)` }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 z-20 w-20 sm:w-40 md:w-72"
            style={{ background: `linear-gradient(270deg, ${bg} 0%, ${bg}cc 45%, transparent 100%)` }}
          />
        </div>
      </div>

      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: `linear-gradient(90deg, transparent, ${accent}25, transparent)` }}
      />
    </section>
  );
}

export default MobileAppGallerySection;
