"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Play, Pause, Star } from "lucide-react";

// Testimonials data
const TESTIMONIALS = [
  {
    id: 1,
    quote: "SIDPIN Digital transformed our online presence completely. Our organic traffic increased by 450% and our conversion rates have never been better. They truly understand digital marketing.",
    author: "Sarah Chen",
    role: "CEO, TechStart Inc.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&crop=face",
    company: "TechStart Inc.",
    rating: 5,
  },
  {
    id: 2,
    quote: "The AI automation solutions they built for us saved over 20 hours per week on repetitive tasks. The ROI was visible within the first month. Absolutely game-changing.",
    author: "Michael Rodriguez",
    role: "Operations Director, Streamline Co.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face",
    company: "Streamline Co.",
    rating: 5,
  },
  {
    id: 3,
    quote: "Their creative design team brought our brand vision to life perfectly. The new website looks stunning and performs even better. Best design investment we've made.",
    author: "Emily Watson",
    role: "Marketing Director, Brand Elevate",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop&crop=face",
    company: "Brand Elevate",
    rating: 5,
  },
  {
    id: 4,
    quote: "The custom CRM they built integrates seamlessly with all our tools. Our team productivity increased by 40% and we finally have real-time visibility into our pipeline.",
    author: "David Kim",
    role: "Sales Director, GrowthPro",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop&crop=face",
    company: "GrowthPro",
    rating: 5,
  },
  {
    id: 5,
    quote: "Their video production team created content that tells our story beautifully. The brand videos have increased our engagement by 300% on social media.",
    author: "Lisa Park",
    role: "Brand Manager, Visual Stories",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&h=120&fit=crop&crop=face",
    company: "Visual Stories",
    rating: 5,
  },
];

export default function TestimonialsCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isDark, setIsDark] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
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

  useEffect(() => {
    if (!isPlaying) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return;
    }

    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const colors = isDark
    ? {
        bg: "#070b14",
        cardBg: "rgba(15, 22, 38, 0.8)",
        title: "#eef2fb",
        subtitle: "#aab4c9",
        quote: "#eef2fb",
        border: "rgba(110, 140, 255, 0.15)",
      }
    : {
        bg: "#ffffff",
        cardBg: "#ffffff",
        title: "#111111",
        subtitle: "#555555",
        quote: "#111111",
        border: "#e5e7eb",
      };

  const testimonial = TESTIMONIALS[currentSlide];

  return (
    <>
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .testimonial-slide {
          animation: fadeIn 0.6s ease-out;
        }
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        .avatar-glow {
          position: relative;
        }
        .avatar-glow::after {
          content: '';
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          background: linear-gradient(90deg, #4169E1, #8B5CF6, #F97316, #4169E1);
          background-size: 1000px 100%;
          animation: shimmer 3s linear infinite;
          z-index: -1;
        }
      `}</style>

      <section style={{ background: colors.bg, fontFamily: "Hanken Grotesk, -apple-system, sans-serif" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "80px 24px" }}>
          {/* Section Header */}
          <div style={{
            textAlign: "center",
            marginBottom: "64px",
          }}>
            <span style={{
              fontFamily: "Geist, sans-serif",
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.4em",
              textTransform: "uppercase",
              color: isDark ? "#6E8CFF" : "#4169E1",
              marginBottom: "16px",
              display: "block",
            }}>
              Client Stories
            </span>
            <h2 style={{
              fontSize: "clamp(32px, 4vw, 48px)",
              fontWeight: 700,
              lineHeight: 1.1,
              color: colors.title,
              marginBottom: "16px",
              fontFamily: "Hanken Grotesk, sans-serif",
            }}>
              Trusted by Industry Leaders.
            </h2>
            <p style={{
              fontSize: "18px",
              lineHeight: 1.6,
              color: colors.subtitle,
              fontFamily: "Inter, sans-serif",
              maxWidth: "600px",
              margin: "0 auto",
            }}>
              See what our clients have to say about working with us.
            </p>
          </div>

          {/* Testimonial Carousel */}
          <div
            className="testimonial-slide"
            style={{
              background: colors.cardBg,
              borderRadius: "24px",
              padding: "48px",
              border: `1px solid ${colors.border}`,
              boxShadow: isDark
                ? "0 40px 80px rgba(65, 105, 225, 0.15)"
                : "0 40px 80px rgba(0, 0, 0, 0.08)",
            }}
          >
            {/* Quote */}
            <div style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "24px",
              marginBottom: "32px",
            }}>
              {/* Avatar */}
              <div style={{ position: "relative", flexShrink: 0 }}>
                <div
                  className="avatar-glow"
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    overflow: "hidden",
                    border: `3px solid ${isDark ? "#6E8CFF" : "#4169E1"}`,
                  }}
                >
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>

              {/* Quote content */}
              <div style={{ flex: 1 }}>
                {/* Rating stars */}
                <div style={{
                  display: "flex",
                  gap: "4px",
                  marginBottom: "16px",
                }}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      fill={isDark ? "#6E8CFF" : "#4169E1"}
                      color={isDark ? "#6E8CFF" : "#4169E1"}
                    />
                  ))}
                </div>

                <blockquote style={{
                  fontSize: "24px",
                  lineHeight: 1.5,
                  color: colors.quote,
                  marginBottom: "24px",
                  fontFamily: "Hanken Grotesk, sans-serif",
                  fontWeight: 500,
                  fontStyle: "italic",
                }}>
                  "{testimonial.quote}"
                </blockquote>

                {/* Author info */}
                <div>
                  <div style={{
                    fontSize: "16px",
                    fontWeight: 700,
                    color: colors.title,
                    marginBottom: "4px",
                    fontFamily: "Hanken Grotesk, sans-serif",
                  }}>
                    {testimonial.author}
                  </div>
                  <div style={{
                    fontSize: "14px",
                    color: colors.subtitle,
                    fontFamily: "Inter, sans-serif",
                  }}>
                    {testimonial.role}
                  </div>
                  <div style={{
                    fontSize: "13px",
                    color: isDark ? "#6E8CFF" : "#4169E1",
                    fontWeight: 600,
                    fontFamily: "Geist, sans-serif",
                    marginTop: "4px",
                  }}>
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderTop: `1px solid ${colors.border}`,
              paddingTop: "24px",
            }}>
              {/* Slide indicators */}
              <div style={{
                display: "flex",
                gap: "8px",
              }}>
                {TESTIMONIALS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    style={{
                      width: currentSlide === idx ? "32px" : "8px",
                      height: "8px",
                      borderRadius: "4px",
                      background: currentSlide === idx
                        ? (isDark ? "#6E8CFF" : "#4169E1")
                        : `${colors.subtitle}40`,
                      border: "none",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                    }}
                  />
                ))}
              </div>

              {/* Navigation buttons */}
              <div style={{
                display: "flex",
                gap: "12px",
              }}>
                <button
                  onClick={prevSlide}
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    border: `1px solid ${colors.border}`,
                    background: "transparent",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = isDark ? "#6E8CFF" : "#4169E1";
                    e.currentTarget.style.borderColor = isDark ? "#6E8CFF" : "#4169E1";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.borderColor = colors.border;
                  }}
                >
                  <ChevronLeft size={20} color={colors.title} />
                </button>

                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    border: `1px solid ${colors.border}`,
                    background: "transparent",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = isDark ? "#6E8CFF" : "#4169E1";
                    e.currentTarget.style.borderColor = isDark ? "#6E8CFF" : "#4169E1";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.borderColor = colors.border;
                  }}
                >
                  {isPlaying ? (
                    <Pause size={18} color={colors.title} />
                  ) : (
                    <Play size={18} color={colors.title} />
                  )}
                </button>

                <button
                  onClick={nextSlide}
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    border: `1px solid ${colors.border}`,
                    background: "transparent",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = isDark ? "#6E8CFF" : "#4169E1";
                    e.currentTarget.style.borderColor = isDark ? "#6E8CFF" : "#4169E1";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.borderColor = colors.border;
                  }}
                >
                  <ChevronRight size={20} color={colors.title} />
                </button>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div style={{
            textAlign: "center",
            marginTop: "48px",
          }}>
            <p style={{
              fontSize: "16px",
              color: colors.subtitle,
              marginBottom: "24px",
              fontFamily: "Inter, sans-serif",
            }}>
              Ready to achieve similar results?
            </p>
            <a
              href="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "16px 32px",
                background: isDark ? "#6E8CFF" : "#4169E1",
                color: "#fff",
                borderRadius: "8px",
                textDecoration: "none",
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                transition: "all 0.3s ease",
                fontFamily: "Geist, sans-serif",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow = isDark
                  ? "0 10px 30px rgba(110, 140, 255, 0.4)"
                  : "0 10px 30px rgba(65, 105, 225, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Start Your Project
              <span style={{ fontSize: "16px" }}>→</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
