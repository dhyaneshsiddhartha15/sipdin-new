"use client";

import { useEffect, useState, useRef } from "react";
import { Play, Pause, ChevronLeft, ChevronRight } from "lucide-react";

// Service categories similar to Adobe's tabs
const CATEGORIES = [
  { id: "digital-marketing", name: "Digital Marketing", color: "#4169E1" },
  { id: "web-development", name: "Web Development", color: "#22C55E" },
  { id: "creative-design", name: "Creative Design", color: "#F97316" },
  { id: "ai-automation", name: "AI & Automation", color: "#8B5CF6" },
  { id: "video-production", name: "Video Production", color: "#EF4444" },
];

// Hero slides data
const SLIDES = [
  {
    category: "digital-marketing",
    title: "Scale Your Digital Presence.",
    subtitle: "Drive results with data-driven SEO, content marketing, and social media strategies that convert visitors into customers.",
    cta: "Start Your Growth Journey",
    secondaryCta: "See Our Results",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
    badge: "Proven ROI",
    badgeText: "Average 300% increase in organic traffic",
  },
  {
    category: "web-development",
    title: "Build Fast. Convert Better.",
    subtitle: "Custom websites and web applications built with modern technologies that load in milliseconds and drive conversions.",
    cta: "Build Your Website",
    secondaryCta: "View Portfolio",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=800&fit=crop",
    badge: "Lightning Fast",
    badgeText: "Sub-2-second load times guaranteed",
  },
  {
    category: "creative-design",
    title: "Design That Captivates.",
    subtitle: "Stunning visuals, branding, and user experiences that make your brand unforgettable and drive engagement.",
    cta: "Start Your Project",
    secondaryCta: "See Our Work",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=800&fit=crop",
    badge: "Award-Winning",
    badgeText: "Recognized for design excellence",
  },
  {
    category: "ai-automation",
    title: "Automate Everything.",
    subtitle: "AI-powered solutions that streamline workflows, automate repetitive tasks, and supercharge your productivity.",
    cta: "Automate Now",
    secondaryCta: "Learn More",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=800&fit=crop",
    badge: "Cutting Edge",
    badgeText: "Latest AI technology integrated",
  },
  {
    category: "video-production",
    title: "Stories That Move.",
    subtitle: "Professional video production that tells your brand story with cinematic quality and emotional impact.",
    cta: "Create Your Video",
    secondaryCta: "Watch Showreel",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1200&h=800&fit=crop",
    badge: "Cinema Quality",
    badgeText: "4K production with professional editors",
  },
];

export default function AdobeHeroCarousel() {
  const [activeCategory, setActiveCategory] = useState("digital-marketing");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isDark, setIsDark] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Filter slides by active category
  const categorySlides = SLIDES.filter(s => s.category === activeCategory);
  const slide = categorySlides[currentSlide];

  useEffect(() => {
    // Check dark mode
    const checkDark = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };
    checkDark();
    const observer = new MutationObserver(checkDark);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  // Auto-advance slides
  useEffect(() => {
    if (!isPlaying) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return;
    }

    intervalRef.current = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % categorySlides.length);
        setIsTransitioning(false);
      }, 500);
    }, 5000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, activeCategory, categorySlides.length]);

  const nextSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % categorySlides.length);
      setIsTransitioning(false);
    }, 500);
  };

  const prevSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + categorySlides.length) % categorySlides.length);
      setIsTransitioning(false);
    }, 500);
  };

  const colors = isDark
    ? {
        bg: "#070b14",
        cardBg: "rgba(15, 22, 38, 0.8)",
        title: "#eef2fb",
        subtitle: "#aab4c9",
        tabBg: "rgba(15, 22, 38, 0.6)",
        tabActive: "#6E8CFF",
        badge: "#6E8CFF",
      }
    : {
        bg: "#ffffff",
        cardBg: "rgba(255, 255, 255, 0.95)",
        title: "#111111",
        subtitle: "#555555",
        tabBg: "#f5f5f7",
        tabActive: "#4169E1",
        badge: "#4169E1",
      };

  const currentCategoryData = CATEGORIES.find(c => c.id === activeCategory);

  return (
    <>
      <style jsx>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeSlide {
          from { opacity: 0; transform: scale(1.05); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-slide-up {
          animation: slideUp 0.8s ease-out forwards;
        }
        .animate-slide-in {
          animation: slideIn 0.6s ease-out forwards;
        }
        .animate-fade-slide {
          animation: fadeSlide 0.8s ease-out forwards;
        }
        .slide-content {
          opacity: ${isTransitioning ? 0 : 1};
          transition: opacity 0.5s ease;
        }
      `}</style>

      {/* Main Hero Section */}
      <section style={{ background: colors.bg, fontFamily: "Hanken Grotesk, -apple-system, sans-serif" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "40px 24px" }}>
          {/* Category Tabs - Similar to Adobe's product tabs */}
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "12px",
            justifyContent: "center",
            marginBottom: "48px",
          }}>
            {CATEGORIES.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setActiveCategory(category.id);
                  setCurrentSlide(0);
                  setIsTransitioning(true);
                  setTimeout(() => setIsTransitioning(false), 500);
                }}
                style={{
                  padding: "12px 24px",
                  borderRadius: "full",
                  border: "none",
                  background: activeCategory === category.id ? category.color : colors.tabBg,
                  color: activeCategory === category.id ? "#fff" : colors.title,
                  fontSize: "13px",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  fontFamily: "Geist, sans-serif",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
                onMouseEnter={(e) => {
                  if (activeCategory !== category.id) {
                    e.currentTarget.style.transform = "scale(1.05)";
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                <span style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: activeCategory === category.id ? "#fff" : category.color,
                }} />
                {category.name}
              </button>
            ))}
          </div>

          {/* Hero Content - Two Column Layout */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 500px), 1fr))",
            gap: "48px",
            alignItems: "center",
          }}>
            {/* Left: Text Content */}
            <div className="slide-content" style={{ padding: "20px" }}>
              {/* Badge */}
              {slide?.badge && (
                <div style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "8px 16px",
                  background: isDark ? "rgba(110, 140, 255, 0.1)" : "rgba(65, 105, 225, 0.1)",
                  borderRadius: "full",
                  marginBottom: "24px",
                  border: `1px solid ${colors.badge}20`,
                }}>
                  <span style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: colors.badge,
                    animation: "pulse 2s ease-in-out infinite",
                  }} />
                  <span style={{
                    fontSize: "11px",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: colors.badge,
                    fontFamily: "Geist, sans-serif",
                  }}>
                    {slide.badge}
                  </span>
                </div>
              )}

              {/* Headline */}
              <h1 style={{
                fontSize: "clamp(40px, 5vw, 64px)",
                fontWeight: 700,
                lineHeight: 1.1,
                color: colors.title,
                marginBottom: "24px",
                fontFamily: "Hanken Grotesk, sans-serif",
              }}>
                {slide?.title}
              </h1>

              {/* Subtitle */}
              <p style={{
                fontSize: "18px",
                lineHeight: 1.6,
                color: colors.subtitle,
                marginBottom: "16px",
                fontFamily: "Inter, sans-serif",
                maxWidth: "500px",
              }}>
                {slide?.subtitle}
              </p>

              {/* Badge Text */}
              {slide?.badgeText && (
                <p style={{
                  fontSize: "14px",
                  color: currentCategoryData?.color || colors.badge,
                  marginBottom: "32px",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 500,
                }}>
                  {slide.badgeText}
                </p>
              )}

              {/* CTAs */}
              <div style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "16px",
                marginBottom: "32px",
              }}>
                <a
                  href="#contact"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "16px 32px",
                    background: currentCategoryData?.color || colors.tabActive,
                    color: "#fff",
                    borderRadius: "8px",
                    textDecoration: "none",
                    fontSize: "13px",
                    fontWeight: 700,
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    transition: "all 0.3s ease",
                    fontFamily: "Geist, sans-serif",
                    border: "none",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)";
                    e.currentTarget.style.boxShadow = `0 10px 30px ${currentCategoryData?.color || colors.tabActive}40`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {slide?.cta}
                  <span style={{ fontSize: "16px" }}>→</span>
                </a>

                <a
                  href="#work"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "16px 32px",
                    background: "transparent",
                    color: colors.title,
                    borderRadius: "8px",
                    textDecoration: "none",
                    fontSize: "13px",
                    fontWeight: 600,
                    transition: "all 0.3s ease",
                    fontFamily: "Geist, sans-serif",
                    border: `2px solid ${colors.tabActive}`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = `${colors.tabActive}10`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  {slide?.secondaryCta}
                </a>
              </div>

              {/* Slide Navigation */}
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
              }}>
                <button
                  onClick={prevSlide}
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    border: `1px solid ${colors.subtitle}40`,
                    background: "transparent",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = colors.tabActive;
                    e.currentTarget.style.borderColor = colors.tabActive;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.borderColor = `${colors.subtitle}40`;
                  }}
                >
                  <ChevronLeft size={20} color={colors.title} />
                </button>

                <div style={{
                  display: "flex",
                  gap: "8px",
                }}>
                  {categorySlides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setIsTransitioning(true);
                        setTimeout(() => {
                          setCurrentSlide(idx);
                          setIsTransitioning(false);
                        }, 500);
                      }}
                      style={{
                        width: currentSlide === idx ? "32px" : "8px",
                        height: "8px",
                        borderRadius: "4px",
                        background: currentSlide === idx
                          ? (currentCategoryData?.color || colors.tabActive)
                          : `${colors.subtitle}40`,
                        border: "none",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                      }}
                    />
                  ))}
                </div>

                <button
                  onClick={nextSlide}
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    border: `1px solid ${colors.subtitle}40`,
                    background: "transparent",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = colors.tabActive;
                    e.currentTarget.style.borderColor = colors.tabActive;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.borderColor = `${colors.subtitle}40`;
                  }}
                >
                  <ChevronRight size={20} color={colors.title} />
                </button>

                {/* Play/Pause */}
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    border: `1px solid ${colors.subtitle}40`,
                    background: "transparent",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = colors.tabActive;
                    e.currentTarget.style.borderColor = colors.tabActive;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.borderColor = `${colors.subtitle}40`;
                  }}
                >
                  {isPlaying ? (
                    <Pause size={18} color={colors.title} />
                  ) : (
                    <Play size={18} color={colors.title} />
                  )}
                </button>
              </div>
            </div>

            {/* Right: Hero Image */}
            <div className="slide-content" style={{ position: "relative" }}>
              <div style={{
                position: "relative",
                borderRadius: "24px",
                overflow: "hidden",
                boxShadow: isDark
                  ? "0 40px 80px rgba(65, 105, 225, 0.2)"
                  : "0 40px 80px rgba(0, 0, 0, 0.1)",
              }}>
                {/* Gradient overlay */}
                <div style={{
                  position: "absolute",
                  inset: 0,
                  background: `linear-gradient(135deg, ${currentCategoryData?.color || colors.tabActive}20 0%, transparent 50%)`,
                  zIndex: 1,
                }} />

                {/* Image */}
                {slide?.image && (
                  <img
                    src={slide.image}
                    alt={slide.title}
                    style={{
                      width: "100%",
                      height: "auto",
                      display: "block",
                      transition: "transform 0.8s ease",
                    }}
                  />
                )}

                {/* Floating badge overlay */}
                <div style={{
                  position: "absolute",
                  bottom: "24px",
                  left: "24px",
                  right: "24px",
                  padding: "16px",
                  background: isDark ? "rgba(15, 22, 38, 0.9)" : "rgba(255, 255, 255, 0.95)",
                  backdropFilter: "blur(10px)",
                  borderRadius: "12px",
                  zIndex: 2,
                  border: `1px solid ${currentCategoryData?.color || colors.tabActive}20`,
                }}>
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                  }}>
                    <span style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: currentCategoryData?.color || colors.tabActive,
                      animation: "pulse 2s ease-in-out infinite",
                    }} />
                    <span style={{
                      fontSize: "12px",
                      fontWeight: 600,
                      color: colors.title,
                      fontFamily: "Geist, sans-serif",
                    }}>
                      {currentCategoryData?.name}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </>
  );
}
