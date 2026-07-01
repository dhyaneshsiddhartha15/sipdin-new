"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  {
    value: 150,
    suffix: "+",
    label: "Projects Delivered",
    description: "Across digital marketing, web development, and creative design",
  },
  {
    value: 85,
    suffix: "%",
    label: "Client Retention Rate",
    description: "Businesses that choose to grow with us year after year",
  },
  {
    value: 3,
    suffix: "x",
    label: "Average ROI Increase",
    description: "Typical growth in marketing performance for our clients",
  },
  {
    value: 5,
    suffix: "+",
    label: "Years of Excellence",
    description: "Building digital products and marketing systems that work",
  },
  {
    value: 25,
    suffix: "+",
    label: "Industries Served",
    description: "From hospitality to education, healthcare to retail",
  },
  {
    value: 100,
    suffix: "%",
    label: "On-Time Delivery",
    description: "Projects delivered on schedule, every time",
  },
];

export default function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [isDark, setIsDark] = useState(false);

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

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;

    if (!section || !track) return;

    // Calculate scroll amount
    function getScrollAmount() {
      if (!track) return 0;
      const trackWidth = track.scrollWidth;
      const viewportWidth = window.innerWidth;
      const lastCard = track.lastElementChild;
      const lastCardWidth = lastCard ? lastCard.clientWidth : 320;
      return -(trackWidth - viewportWidth * 0.65 - lastCardWidth / 2);
    }

    // Create horizontal scroll animation
    const tween = gsap.to(track, {
      x: getScrollAmount,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => "+=" + track.scrollWidth,
        scrub: 1,
        pin: true,
        invalidateOnRefresh: true,
      },
    });

    // Animate numbers
    const numberElements = section.querySelectorAll(".stat-number");
    numberElements.forEach((el) => {
      const span = el.querySelector("span");
      if (!span) return;

      const target = parseFloat(span.getAttribute("data-value") || "0");
      const decimals = (span.getAttribute("data-value")?.split(".")[1] || "").length;

      gsap.to(span, {
        innerText: target,
        duration: 1.5,
        snap: { innerText: decimals ? 1 / Math.pow(10, decimals) : 1 },
        scrollTrigger: {
          trigger: section,
          start: "top 60%",
          toggleActions: "play none none reverse",
        },
        onUpdate: function () {
          const target = this.targets()[0] as HTMLElement;
          target.innerText = parseFloat(target.innerText).toFixed(decimals);
        },
      });
    });

    ScrollTrigger.refresh();

    return () => {
      tween.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const colors = isDark
    ? {
        bg: "#070b14",
        title: "#eef2fb",
        subtitle: "#aab4c9",
        border: "rgba(110, 140, 255, 0.2)",
        gradientStart: "#6E8CFF",
        gradientEnd: "#00D4FF",
      }
    : {
        bg: "#ffffff",
        title: "#111111",
        subtitle: "#666666",
        border: "rgba(0, 0, 0, 0.1)",
        gradientStart: "#4169E1",
        gradientEnd: "#06b6d4",
      };

  return (
    <section
      ref={sectionRef}
      style={{
        position: "relative",
        background: colors.bg,
        overflow: "hidden",
        padding: "60px 0",
        fontFamily: "Hanken Grotesk, -apple-system, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          textAlign: "center",
          padding: "0 24px",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(24px, 4vw, 42px)",
            fontWeight: 500,
            lineHeight: 1.3,
            marginBottom: "40px",
            color: colors.title,
          }}
        >
          Built for Real Business Growth. <br />
          Designed for Long-Term Success.
        </h2>
      </div>

      <div style={{ overflow: "visible", marginTop: "40px" }}>
        <div
          ref={trackRef}
          style={{
            display: "flex",
            flexWrap: "nowrap" as const,
            gap: "48px",
            paddingLeft: "5vw",
            width: "max-content",
          }}
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              style={{
                width: "320px",
                borderTop: `1px solid ${colors.border}`,
                paddingTop: "32px",
                flexShrink: 0,
              }}
            >
              <div
                className="stat-number"
                style={{
                  fontSize: "80px",
                  fontWeight: 300,
                  lineHeight: 1,
                  marginBottom: "16px",
                  color: isDark ? "#6E8CFF" : "#4169E1",
                }}
              >
                <span className="num" data-value={stat.value.toString()}>
                  0
                </span>
                {stat.suffix}
              </div>
              <div
                style={{
                  fontSize: "16px",
                  color: colors.subtitle,
                  lineHeight: 1.5,
                  maxWidth: "80%",
                }}
              >
                <strong style={{ color: colors.title, display: "block", marginBottom: "4px" }}>
                  {stat.label}
                </strong>
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
