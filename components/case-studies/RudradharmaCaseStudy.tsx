"use client";

/**
 * RudradharmaCaseStudy — Premium editorial case study layout for Rudradharma spiritual e-commerce
 * Features: two-column hero, large showcases, image galleries, alternating feature layouts
 */

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

// === UNSPLASH IMAGES (TEMPORARY PLACEHOLDERS) ===
// These can be easily replaced with actual project images later
const UNSPLASH_IMAGES = {
  hero: "https://images.unsplash.com/photo-1609766858322-7b021092f2c1?w=1200&q=80",
  showcase: "https://images.unsplash.com/photo-1610049521610-1d3d3ef254b9?w=1600&q=80",
  gallery1: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&q=80",
  gallery2: "https://images.unsplash.com/photo-1610049521610-1d3d3ef254b9?w=800&q=80",
  gallery3: "https://images.unsplash.com/photo-1621600411688-4be93cd685f6?w=1000&q=80",
  gallery4: "https://images.unsplash.com/photo-1609949848964-4cf4eb72b0d8?w=800&q=80",
  feature1: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1000&q=80",
  feature2: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&q=80",
  feature3: "https://images.unsplash.com/photo-1556742502-ec7370e76d11?w=1000&q=80",
  feature4: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1000&q=80",
};

// === RUDRADHARMA CASE STUDY DATA ===
const CASE_STUDY = {
  slug: "rudradharma-spiritual-ecommerce",
  tag: "E-Commerce",
  title: "Rudradharma – Building a Transparent Spiritual E-Commerce Brand",
  description: "Taking a trusted 1953 Rudraksha store online — 500+ SKUs, macro product photography, and META campaigns hitting 10–12× ROAS.",
  accent: "#E08A34",
  logo: "/logos/15.png",

  // Project Information
  industry: "E-Commerce / Spiritual Wellness",
  projectLength: "3 months",
  services: "E-Commerce Development, Product Photography, META Ads, Branding",
  techStack: "Shopify, META Ads Manager, Google Analytics",

  // Stats
  stats: [
    { value: "10–12×", label: "ROAS on META" },
    { value: "500+", label: "Product SKUs" },
    { value: "13K+", label: "Tracked Events" },
  ],

  // About Project
  aboutProject: [
    "Rudradharma is a spiritual wellness brand offering authentic Nepali Rudraksha beads. While the physical store has been operating since 1953, the brand had no digital presence until 2024.",
    "The goal was to transform a trusted offline Rudraksha store into a fully functional online spiritual e-commerce brand — reaching customers across India while maintaining transparency and authenticity.",
    "Sidpin Digital partnered with the brand to build the entire digital ecosystem from scratch: website development, product photography, branding, and performance marketing.",
  ],

  // Features with content
  features: [
    {
      id: 1,
      category: "The Challenge",
      title: "Before partnering with Sidpin Digital, Rudradharma faced several major challenges",
      points: [
        "No website or online store",
        "No online sales channel",
        "No structured digital marketing strategy",
        "Poor product presentation and photography",
        "No experience running META Ads",
        "No analytics or conversion tracking",
      ],
      note: "Despite decades of trust offline, the brand had zero visibility in the digital marketplace.",
    },
    {
      id: 2,
      category: "Strategy",
      title: "Sidpin Digital designed a full-stack digital strategy to bring the brand online and build credibility, focused on three pillars",
      points: [
        { label: "E-Commerce Infrastructure", text: "A scalable online store capable of handling a large spiritual product catalog" },
        { label: "Transparency & Trust", text: "Customer trust built through detailed product visualization and authentic information" },
        { label: "Performance Marketing", text: "Targeted META advertising to generate qualified leads and online sales" },
      ],
    },
    {
      id: 3,
      category: "Execution",
      title: "Comprehensive execution across multiple domains",
      items: [
        {
          label: "E-Commerce Website Development",
          text: "A complete e-commerce website built on Shopify",
          sub: ["Launch of 500+ product SKUs", "Secure payment gateway integration", "SEO-optimized product pages", "Clean, intuitive product navigation", "Structured catalog for multiple Rudraksha types"],
        },
        {
          label: "Product Photography & Visual Presentation",
          text: "A high-detail photography strategy to prove authenticity and trust",
          sub: ["Every Rudraksha bead photographed individually", "2–3 angles per product", "High-resolution macro photography", "Exact size and weight clearly displayed"],
        },
        {
          label: "Branding & Content Strategy",
          text: "A spiritual brand identity built around authenticity and knowledge",
          sub: ["Spiritual storytelling content", "Rudraksha education posts", "High-quality product visuals", "Consistent social-media branding", "Spiritual symbolism woven into design"],
        },
        {
          label: "SEO Implementation",
          text: "A full SEO structure across the website",
          sub: ["Keyword-optimized product pages", "SEO-focused Rudraksha descriptions", "Technical SEO setup", "Structured product data", "Organic discoverability for spiritual searches"],
        },
        {
          label: "META Performance Marketing",
          text: "Paid campaigns on Facebook & Instagram at ~₹500/day",
          sub: ["Lead generation", "Direct product inquiries", "Conversion campaigns"],
        },
      ],
    },
    {
      id: 4,
      category: "Results",
      title: "The results demonstrated strong demand for authentic Rudraksha online",
      points: [
        "10–12× ROAS via lead-generation META campaigns",
        "4.2K+ website views in early campaign stages",
        "13K+ total tracked events",
        "1.3K+ product views",
        "1.5K+ new visitors",
      ],
    },
    {
      id: 5,
      category: "Unique Differentiator",
      title: "What truly separates Rudradharma from other Rudraksha sellers is complete transparency",
      points: [
        "Exact bead photography",
        "True weight and size of the Rudraksha",
        "Multiple viewing angles",
        "Authentic Nepali Rudraksha sourcing",
      ],
      note: "Customers receive the exact bead displayed on the website — significantly increasing trust in online purchases.",
    },
    {
      id: 6,
      category: "Launch",
      title: "Diwali 2024 Launch",
      points: ["The brand's online platform officially launched during Diwali 2024, aligning the launch with a spiritually significant shopping period."],
    },
    {
      id: 7,
      category: "Future Vision",
      title: "The long-term vision of Rudradharma is to become",
      points: [
        "One of the most trusted Rudraksha brands in India",
        "A leading destination for authentic spiritual beads and malas",
        "A digital platform for spiritual wellness and Vedic guidance",
      ],
      note: "Sidpin Digital continues to support the brand with creative content, marketing strategy, and performance campaigns to scale its online growth.",
    },
  ],

  // Quote
  quote: {
    text: "Sidpin took our 70-year family business online with complete authenticity — customers finally see the exact bead they receive before they buy.",
    name: "Rudradharma",
    role: "Brand Owner",
  },
};

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

// === SECTION COMPONENTS ===

// 1. HERO SECTION
function HeroSection() {
  const [titleRef, titleVisible] = useScrollReveal();
  const [imageRef, imageVisible] = useScrollReveal();

  return (
    <section className="relative bg-[#fafafa] pt-24 md:pt-32">
      <div className="mx-auto max-w-[1400px] px-6 pb-16 md:px-12 md:pb-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* LEFT - Project Info */}
          <div
            ref={titleRef}
            className={`transition-all duration-1000 ${
              titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="inline-block rounded-full border border-[#E08A34]/30 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#E08A34]">
              {CASE_STUDY.tag}
            </span>
            <h1 className="mt-6 text-[32px] font-bold leading-[1.1] tracking-tight text-[#1A1A1A] md:text-[48px] lg:text-[56px]" style={{ fontFamily: "Hanken Grotesk, sans-serif" }}>
              {CASE_STUDY.title}
            </h1>
            <p className="mt-6 text-[16px] leading-relaxed text-[#555555] md:text-[18px]" style={{ fontFamily: "Inter, sans-serif" }}>
              {CASE_STUDY.description}
            </p>

            {/* Stats Preview */}
            <div className="mt-10 flex flex-wrap gap-8">
              {CASE_STUDY.stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-[28px] font-bold leading-none text-[#E08A34]" style={{ fontFamily: "Hanken Grotesk, sans-serif" }}>
                    {stat.value}
                  </div>
                  <div className="mt-1 text-[12px] font-medium uppercase tracking-wider text-[#888888]" style={{ fontFamily: "Inter, sans-serif" }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* RIGHT - Large Image */}
          <div
            ref={imageRef}
            className={`relative overflow-hidden rounded-3xl transition-all duration-1000 ${
              imageVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <img
              src="/case-study/rudradharma-6.png"
              alt="Rudradharma Spiritual E-Commerce"
              className="h-full w-full object-cover"
              style={{ minHeight: "400px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// 2. LOGO SECTION (CENTERED - VERY LARGE)
function LogoSection() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section className="bg-[#fafafa] py-0">
      <div
        ref={ref}
        className={`mx-auto max-w-[1400px] px-6 text-center transition-all duration-1000 md:px-12 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <img
          src="/case-study/rudradharma.png"
          alt="Rudradharma"
          className="mx-auto h-auto w-full max-w-[1100px] object-contain pb-16"
        />
      </div>
    </section>
  );
}

// 3. PROJECT INFORMATION GRID
function ProjectInfoSection() {
  const info = [
    { label: "Industry", value: CASE_STUDY.industry },
    { label: "Project Length", value: CASE_STUDY.projectLength },
    { label: "Services", value: CASE_STUDY.services },
    { label: "Tech Stack", value: CASE_STUDY.techStack },
  ];

  return (
    <section className="bg-[#fafafa] pb-24">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {info.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-[#E08A34]/10 bg-white p-6 transition-all duration-300 hover:shadow-lg hover:shadow-[#E08A34]/5"
            >
              <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#888888]" style={{ fontFamily: "Inter, sans-serif" }}>
                {item.label}
              </div>
              <div className="mt-3 text-[15px] font-medium leading-snug text-[#1A1A1A]" style={{ fontFamily: "Inter, sans-serif" }}>
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 4. ABOUT PROJECT SECTION
function AboutProjectSection() {
  const [leftRef, leftVisible] = useScrollReveal();
  const [rightRef, rightVisible] = useScrollReveal();
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const text = textRef.current;
    if (!section || !text) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    let rafId: number;

    const updateParallax = () => {
      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const isDesktop = window.innerWidth >= 1024;

      // Scroll progress (0 to 1) as the section moves through the viewport
      const scrollProgress = Math.max(0, Math.min(1, (viewportHeight - rect.top) / (viewportHeight + rect.height)));

      // Clean vertical drift only
      const parallaxOffset = isDesktop ? 120 : 50;
      const parallaxY = scrollProgress * parallaxOffset - (parallaxOffset / 2);

      text.style.transform = `translate3d(0, ${parallaxY}px, 0)`;
      text.style.willChange = "transform";
    };

    const handleScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updateParallax);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateParallax();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-24 relative z-20">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* LEFT - Heading */}
          <div
            ref={leftRef}
            className={`flex items-center justify-center lg:justify-start transition-all duration-1000 ${
              leftVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-[28px] font-bold leading-tight text-[#1A1A1A] md:text-[36px]" style={{ fontFamily: "Hanken Grotesk, sans-serif" }}>
              About Project
            </h2>
          </div>

          {/* RIGHT - Content */}
          <div
            ref={rightRef}
            className={`transition-all duration-1000 delay-200 ${
              rightVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div ref={textRef} className="space-y-6 text-[16px] leading-relaxed text-[#555555] md:text-[18px]" style={{ fontFamily: "Inter, sans-serif" }}>
              {CASE_STUDY.aboutProject.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 5. IMAGE GALLERY SECTION (PREMIUM STICKY PARALLAX LIKE AGENCY SITES)
function GallerySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const img = imgRef.current;
    if (!section || !img) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    let rafId: number;

    const updateParallax = () => {
      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const isDesktop = window.innerWidth >= 1024;

      // Scroll progress (0 to 1) as the section moves through the viewport
      const scrollProgress = Math.max(0, Math.min(1, (viewportHeight - rect.top) / (viewportHeight + rect.height)));

      // Clean vertical drift only
      const parallaxOffset = isDesktop ? 120 : 50;
      const parallaxY = scrollProgress * parallaxOffset - (parallaxOffset / 2);

      img.style.transform = `translate3d(0, ${parallaxY}px, 0)`;
      img.style.willChange = "transform";
    };

    const handleScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updateParallax);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateParallax();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  // Image effects: (1) sticky, (2) parallax vertical drift, (3) grayscale → color on hover.
  return (
    <section ref={sectionRef} data-gallery-section className="bg-transparent lg:sticky lg:top-0 z-10 overflow-visible">
      <div className="mx-auto max-w-[1700px] px-6 md:px-12 relative">
        <div className="relative overflow-visible rounded-3xl">
          <img
            ref={imgRef}
            src="/case-study/rudradharma-layout.png"
            alt="Rudradharma Layout"
            className="relative z-30 h-auto w-full max-w-[1600px] mx-auto object-cover grayscale transition-[filter] duration-500 ease-out hover:grayscale-0"
            style={{ filter: "grayscale(100%)" }}
            onMouseEnter={(e) => e.currentTarget.style.filter = "grayscale(0%)"}
            onMouseLeave={(e) => e.currentTarget.style.filter = "grayscale(100%)"}
          />
        </div>
      </div>
    </section>
  );
}

// 6. FEATURE SECTION WITH ALTERNATING LAYOUTS
function FeatureSection({ feature, index }: { feature: typeof CASE_STUDY.features[0]; index: number }) {
  const [textRef, textVisible] = useScrollReveal();
  const [categoryRef, categoryVisible] = useScrollReveal();
  const [titleRef, titleVisible] = useScrollReveal();
  const [contentRef, contentVisible] = useScrollReveal();
  const [imageRef, imageVisible] = useScrollReveal();
  const sectionRef = useRef<HTMLElement>(null);
  const isEven = index % 2 === 0; // 0, 2, 4... = text left | 1, 3, 5... = image left

  useEffect(() => {
    const section = sectionRef.current;
    const categoryEl = categoryRef.current;
    const titleEl = titleRef.current;
    const contentEl = contentRef.current;
    const imageEl = imageRef.current;
    if (!section || (!categoryEl && !titleEl && !contentEl && !imageEl)) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    let rafId: number;

    const updateParallax = () => {
      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const isDesktop = window.innerWidth >= 1024;

      // Scroll progress (0 to 1) as the section moves through the viewport
      const scrollProgress = Math.max(0, Math.min(1, (viewportHeight - rect.top) / (viewportHeight + rect.height)));

      // Clean vertical drift — image moves a touch more than text for subtle depth
      const parallaxOffset = isDesktop ? 120 : 50;
      const parallaxY = scrollProgress * parallaxOffset - (parallaxOffset / 2);

      if (categoryEl) categoryEl.style.transform = `translate3d(0, ${parallaxY * 0.4}px, 0)`;
      if (titleEl) titleEl.style.transform = `translate3d(0, ${parallaxY * 0.5}px, 0)`;
      if (contentEl) contentEl.style.transform = `translate3d(0, ${parallaxY * 0.6}px, 0)`;
      if (imageEl) imageEl.style.transform = `translate3d(0, ${parallaxY}px, 0)`;
    };

    const handleScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updateParallax);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateParallax();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, [categoryRef, titleRef, contentRef, imageRef]);

  return (
    <section ref={sectionRef} className={`py-24 ${index % 2 === 0 ? "bg-white" : "bg-[#fafafa]"}`}>
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className={`flex flex-col gap-12 lg:flex-row ${isEven ? "" : "lg:flex-row-reverse"}`}>
          {/* Content Side */}
          <div className="flex flex-col justify-center">
            <span
              ref={categoryRef}
              className={`inline-block text-[14px] font-semibold uppercase tracking-[0.25em] text-[#E08A34] transition-all duration-1000 delay-100 ${
                categoryVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {feature.category}
            </span>
            <h2
              ref={titleRef}
              className={`mt-4 text-[32px] font-bold leading-tight text-[#1A1A1A] md:text-[40px] transition-all duration-1000 delay-200 ${
                titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ fontFamily: "Hanken Grotesk, sans-serif" }}
            >
              {feature.title}
            </h2>

            {/* Points or Items */}
            <div
              ref={contentRef}
              className={`mt-8 space-y-4 transition-all duration-1000 delay-300 ${
                contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {feature.points && (
                <ul className="space-y-3">
                  {feature.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-[15px] leading-relaxed text-[#555555]">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#E08A34]" />
                      {typeof point === "string" ? point : (
                        <>
                          <span className="font-semibold text-[#1A1A1A]">{point.label}: </span>
                          <span>{point.text}</span>
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              )}

              {feature.items && (
                <div className="space-y-6">
                  {feature.items.map((item, i) => (
                    <div key={i}>
                      <div className="mb-2 text-[15px] font-semibold text-[#1A1A1A]">{item.label}</div>
                      <div className="text-[15px] leading-relaxed text-[#555555]">{item.text}</div>
                      {item.sub && (
                        <ul className="mt-3 space-y-2">
                          {item.sub.map((sub, j) => (
                            <li key={j} className="flex items-start gap-3 text-[14px] text-[#666666]">
                              <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-[#E08A34]/50" />
                              {sub}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Note */}
            {feature.note && (
              <div className="mt-8 rounded-xl border-l-4 border-[#E08A34] bg-[#E08A34]/5 px-6 py-4 italic">
                <p className="text-[14px] leading-relaxed text-[#555555]" style={{ fontFamily: "Inter, sans-serif" }}>
                  {feature.note}
                </p>
              </div>
            )}
          </div>

          {/* Image Side */}
          <div
            ref={imageRef}
            className={`transition-opacity duration-1000 delay-200 ${
              imageVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="overflow-hidden rounded-3xl">
              <img
                src={UNSPLASH_IMAGES[`feature${index + 1}` as keyof typeof UNSPLASH_IMAGES]}
                alt={`${feature.category} Feature`}
                className="h-auto w-full object-cover"
                style={{ minHeight: "400px", maxHeight: "500px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 7. QUOTE SECTION
function QuoteSection() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section className="bg-[#fafafa] py-24">
      <div className="mx-auto max-w-[900px] px-6 text-center md:px-12">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="mb-8 text-[64px] font-bold leading-none text-[#E08A34]">"</div>
          <blockquote className="mb-8">
            <p className="text-[20px] font-semibold italic leading-relaxed text-[#1A1A1A] md:text-[28px]" style={{ fontFamily: "Inter, sans-serif" }}>
              {CASE_STUDY.quote.text}
            </p>
          </blockquote>
          <figcaption>
            <div className="text-[18px] font-bold text-[#1A1A1A]" style={{ fontFamily: "Hanken Grotesk, sans-serif" }}>
              {CASE_STUDY.quote.name}
            </div>
            <div className="mt-1 text-[12px] font-semibold uppercase tracking-[0.2em] text-[#E08A34]" style={{ fontFamily: "Inter, sans-serif" }}>
              {CASE_STUDY.quote.role}
            </div>
          </figcaption>
        </div>
      </div>
    </section>
  );
}

// 8. RUDRADHARMA BRAND IDENTITY SHOWCASE SECTION
function BrandIdentitySection() {
  const [sectionRef, sectionVisible] = useScrollReveal();
  const [headingRef, headingVisible] = useScrollReveal();
  const [paletteRef, paletteVisible] = useScrollReveal();
  const [typographyRef, typographyVisible] = useScrollReveal();
  const [logoRef, logoVisible] = useScrollReveal();

  // Actual Rudradharma brand colors derived from the website
  const BRAND_COLORS = [
    { name: "Rudradharma Orange", hex: "#E08A34", description: "Primary accent" },
    { name: "Warm Ivory", hex: "#FAF8F3", description: "Background surface" },
    { name: "Rudraksha Brown", hex: "#8B6F47", description: "Earth tones" },
    { name: "Deep Charcoal", hex: "#1A1A1A", description: "Primary text" },
    { name: "Soft Gold", hex: "#C9A961", description: "Premium accent" },
    { name: "Warm Sand", hex: "#D4C4A8", description: "Supportive tone" },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#FAF8F3] py-32 overflow-hidden"
    >
      {/* Subtle mandala pattern background */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `repeating-conic-gradient(from 0deg, #E08A34 0deg, #E08A34 0.5deg, transparent 0.5deg, transparent 45deg)`,
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
          <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.3em] text-[#E08A34]" style={{ fontFamily: "Inter, sans-serif" }}>
            Brand Identity
          </span>
          <h2 className="mt-6 text-[36px] md:text-[48px] font-bold leading-[1.1] tracking-tight text-[#1A1A1A]" style={{ fontFamily: "Hanken Grotesk, sans-serif" }}>
            A Spiritual Identity,
            <br />
            Rooted in Tradition
          </h2>
          <p className="mt-6 text-[16px] text-[#666666] max-w-2xl mx-auto" style={{ fontFamily: "Inter, sans-serif" }}>
            Rudradharma's visual language is built on warmth, authenticity and spiritual elegance — every element honors the sacred essence of Rudraksha.
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
                Warm tones inspired by Rudraksha, brass and natural textures.
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
                Clean modern typography balances traditional brand character with digital clarity.
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
                A distinctive wordmark representing Rudradharma's spiritual identity.
              </p>

              {/* Logo display */}
              <div className="bg-white rounded-xl p-8 border border-[#E5E5E5] flex items-center justify-center min-h-[200px]">
                <img
                  src="/logos/15.png"
                  alt="Rudradharma Logo"
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
                    <button className="px-6 py-3 bg-[#E08A34] text-white text-[14px] font-semibold rounded-lg hover:bg-[#c47828] transition-colors">
                      Primary Action
                    </button>
                    <button className="px-6 py-3 bg-white text-[#E08A34] text-[14px] font-semibold rounded-lg border-2 border-[#E08A34] hover:bg-[#E08A34] hover:text-white transition-colors">
                      Secondary
                    </button>
                  </div>
                </div>

                {/* Iconography & Borders */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl p-6 border border-[#E5E5E5]">
                    <div className="text-[11px] uppercase tracking-[0.15em] text-[#888888] mb-4">Iconography</div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#E08A34]/10 flex items-center justify-center">
                        <svg className="w-5 h-5 text-[#E08A34]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-[#E08A34]/10 flex items-center justify-center">
                        <svg className="w-5 h-5 text-[#E08A34]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                      </div>
                    </div>
                    <div className="text-[12px] text-[#666666] mt-3">Minimal line icons with orange accents</div>
                  </div>

                  <div className="bg-white rounded-xl p-6 border border-[#E5E5E5]">
                    <div className="text-[11px] uppercase tracking-[0.15em] text-[#888888] mb-4">Borders & Shapes</div>
                    <div className="space-y-2">
                      <div className="h-8 rounded-lg border-2 border-[#E08A34]/20"></div>
                      <div className="h-8 rounded-full border-2 border-[#E08A34]/30"></div>
                    </div>
                    <div className="text-[12px] text-[#666666] mt-3">Soft rounded corners with warm borders</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* PRODUCT IMAGERY STYLE */}
        <div className={`mt-20 transition-all duration-1000 delay-600 ${
          logoVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <h3 className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#1A1A1A] mb-6 text-center" style={{ fontFamily: "Inter, sans-serif" }}>
            Product Imagery
          </h3>
          <p className="text-[14px] text-[#666666] mb-8 text-center max-w-2xl mx-auto" style={{ fontFamily: "Inter, sans-serif" }}>
            Authentic Rudraksha photography with warm, natural tones.
          </p>

          {/* Product images grid */}
          <div className="grid grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-4 border border-[#E5E5E5] shadow-sm hover:shadow-md transition-shadow">
              <img
                src="/case-study/rudradharma-1.png"
                alt="Rudraksha Product"
                className="w-full h-32 object-contain"
              />
            </div>
            <div className="bg-white rounded-xl p-4 border border-[#E5E5E5] shadow-sm hover:shadow-md transition-shadow">
              <img
                src="/case-study/rudradharma-3.png"
                alt="Rudraksha Mala"
                className="w-full h-32 object-contain"
              />
            </div>
            <div className="bg-white rounded-xl p-4 border border-[#E5E5E5] shadow-sm hover:shadow-md transition-shadow">
              <img
                src="/case-study/rudradharma-4.png"
                alt="Rudraksha Detail"
                className="w-full h-32 object-contain"
              />
            </div>
          </div>
        </div>

        {/* SPIRITUAL VISUAL LANGUAGE */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-700 ${
          logoVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-white rounded-full border border-[#E08A34]/20">
            <div className="w-8 h-8 rounded-full bg-[#E08A34]/10 flex items-center justify-center">
              <div className="text-[16px] text-[#E08A34]/60" style={{ fontFamily: 'serif' }}>
                ॐ
              </div>
            </div>
            <div className="text-[12px] text-[#666666]" style={{ fontFamily: "Inter, sans-serif" }}>
              Subtle spiritual motifs • Traditional Indian elegance • Premium minimalism
            </div>
          </div>
        </div>

      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E08A34]/20 to-transparent" />
    </section>
  );
}

// === MAIN COMPONENT ===
export default function RudradharmaCaseStudy() {
  return (
    <main className="bg-white">
      <HeroSection />
      <LogoSection />
      <ProjectInfoSection />
      {/* About Project text stays pinned while the gallery image scrolls up and overlaps it */}
      <div className="relative">
        <AboutProjectSection />
        <GallerySection />
      </div>

      {/* Feature Sections with Alternating Layouts */}
      {CASE_STUDY.features.map((feature, index) => (
        <FeatureSection key={feature.id} feature={feature} index={index} />
      ))}

      <QuoteSection />
      <BrandIdentitySection />
    </main>
  );
}
