"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    title: "Search Engine Optimization",
    slug: "seo",
    icon: "search",
    color: "#4285F4",
    description:
      "Maximize your search traffic and rank higher on Google with our SEO experts.",
  },
  {
    title: "Pay-Per-Click Advertising",
    slug: "ppc",
    icon: "ads_click",
    color: "#EA4335",
    description:
      "Drive conversions and traffic to your website and app with our PPC specialists.",
  },
  {
    title: "Meta Ads",
    slug: "social-media-marketing",
    icon: "campaign",
    color: "#1877F2",
    description:
      "Full-funnel Facebook and Instagram campaigns engineered for qualified leads.",
  },
  {
    title: "Social Media Marketing",
    slug: "social-media-management",
    icon: "share",
    color: "#E4405F",
    description:
      "Build your brand with highly engaging social media campaigns and content.",
  },
  {
    title: "Web Development",
    slug: "web-development",
    icon: "code",
    color: "#8B5CF6",
    description:
      "We develop fast, secure, SEO-ready websites that drive conversions.",
  },
  {
    title: "App Development",
    slug: "app-development",
    icon: "smartphone",
    color: "#14B8A6",
    description:
      "Custom mobile apps that help customers connect with your product easily.",
  },
  {
    title: "UI/UX Design",
    slug: "ui-ux-design",
    icon: "palette",
    color: "#F97316",
    description:
      "Enhance customer experience across web and app with better UI and UX.",
  },
  {
    title: "E-commerce Development",
    slug: "ecommerce-development",
    icon: "shopping_cart",
    color: "#22C55E",
    description:
      "High-converting online stores engineered for repeat purchases and growth.",
  },
  {
    title: "Marketing Automation",
    slug: "marketing-automation",
    icon: "smart_toy",
    color: "#6366F1",
    description:
      "Lead nurturing, CRM flows, and email automation that scale your growth.",
  },
  {
    title: "Video Editing",
    slug: "video-editing",
    icon: "movie",
    color: "#EF4444",
    description:
      "Cinematic edits, reels, and long-form content that keep audiences watching.",
  },
  {
    title: "Graphic Designing",
    slug: "graphic-designing",
    icon: "brush",
    color: "#EC4899",
    description:
      "Logos, brand identity, and social creatives that make your brand memorable.",
  },
  {
    title: "Managed Cloud",
    slug: "managed-cloud",
    icon: "cloud",
    color: "#0EA5E9",
    description:
      "Secure, scalable deployment and management on AWS and DigitalOcean.",
  },
];

/* Fade-up reveal when scrolled into view */
function Reveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        height: "100%",
        opacity: shown ? 1 : 0,
        transform: shown ? "translateY(0)" : "translateY(36px)",
        transition: `opacity 700ms ease ${delay}ms, transform 700ms cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function ServiceCard({ service }: { service: (typeof services)[number] }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group block h-full bg-surface rounded-xl p-8 shadow-[0_10px_40px_-18px_rgba(17,24,39,0.14)] border border-line/50 transition-all duration-400 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-20px_rgba(65,105,225,0.35)]"
    >
      <span
        className="material-symbols-outlined text-[42px] block"
        style={{ color: service.color }}
      >
        {service.icon}
      </span>
      <h3 className="font-['Hanken_Grotesk'] text-[20px] font-bold text-fg mt-6 mb-3 leading-snug">
        {service.title}
      </h3>
      <p className="font-['Inter'] text-[14.5px] leading-[1.75] text-fg-2">
        {service.description}
      </p>
      <span
        aria-hidden="true"
        className="mt-8 inline-block text-[26px] leading-none text-fg transition-all duration-300 group-hover:translate-x-2 group-hover:text-[#4169E1]"
      >
        &#8594;
      </span>
    </Link>
  );
}

export default function ExpertiseGrid() {
  return (
    <section className="py-[160px] px-[24px] md:px-[64px] bg-bg overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <div className="mb-20 max-w-3xl">
          <span className="font-['Geist'] text-xs font-medium text-[#4169E1] tracking-[0.4em] uppercase mb-4 block">
            Our Expertise
          </span>
          <h2 className="font-['Hanken_Grotesk'] text-[48px] md:text-[48px] font-medium mb-6">
            End-to-End Digital <br />
            Marketing Solutions
          </h2>
          <p className="font-['Inter'] text-lg text-fg-2">
            We provide comprehensive digital marketing solutions designed to
            help businesses grow faster, generate qualified leads, and build a
            commanding online presence.
          </p>
        </div>

        {/* Aligned 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map((service, i) => (
            <Reveal key={service.slug + service.title} delay={(i % 3) * 90}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
