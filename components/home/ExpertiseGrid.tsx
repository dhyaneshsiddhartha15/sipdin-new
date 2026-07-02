"use client";

import Link from "next/link";

const services = [
  {
    title: "Search Optimization",
    slug: "seo",
    description:
      "Technical SEO, authority building, keyword growth strategy, and AI-ready search visibility.",
    color: "#5FE8B5",
  },
  {
    title: "Performance PPC",
    slug: "ppc",
    description:
      "ROI-focused campaigns across Google Ads and remarketing systems built to convert.",
    color: "#A5AFFB",
  },
  {
    title: "Meta Ads",
    slug: "social-media-marketing",
    description:
      "Full-funnel Facebook and Instagram ad campaigns engineered for qualified leads and sales.",
    color: "#FFD53D",
  },
  {
    title: "Social Media",
    slug: "social-media-management",
    description:
      "Content systems that grow followers, generate trust, and drive leads consistently.",
    color: "#FFA9C5",
  },
  {
    title: "Web Engineering",
    slug: "web-development",
    description:
      "Fast, secure, SEO-ready websites built for conversions and scale.",
    color: "#A5AFFB",
  },
  {
    title: "App Development",
    slug: "app-development",
    description:
      "Custom mobile applications built for business automation and user growth.",
    color: "#FFD53D",
  },
  {
    title: "Experience Design",
    slug: "ui-ux-design",
    description:
      "UI/UX interfaces that improve usability, retention, and customer engagement.",
    color: "#FFA9C5",
  },
  {
    title: "E-commerce Architecture",
    slug: "ecommerce-development",
    description:
      "High-converting stores engineered for repeat purchases and revenue growth.",
    color: "#5FE8B5",
  },
  {
    title: "Marketing Automation",
    slug: "marketing-automation",
    description:
      "Lead nurturing, CRM flows, email automation, and scalable growth systems.",
    color: "#FFD53D",
  },
  {
    title: "Video Editing",
    slug: "video-editing",
    description:
      "Cinematic edits, reels, and long-form content that keep audiences watching.",
    color: "#FFA9C5",
  },
  {
    title: "Graphic Designing",
    slug: "graphic-designing",
    description:
      "Logos, brand identity, and social creatives that make your brand memorable.",
    color: "#5FE8B5",
  },
  {
    title: "Managed Cloud",
    slug: "managed-cloud",
    description:
      "Deployment and management on AWS and DigitalOcean — secure, scalable, always on.",
    color: "#A5AFFB",
  },
];

const springEase = "cubic-bezier(0.34, 1.56, 0.64, 1)";

export default function ExpertiseGrid() {
  return (
    <section className="py-[160px] px-[24px] md:px-[80px] bg-bg overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <div className="mb-24 max-w-3xl">
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

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">
          {services.map((service, index) => (
            <div key={service.title} className="group relative">
              {/* Stacked layers revealed on hover */}
              <div
                className="absolute inset-0 border-2 border-black opacity-0 group-hover:opacity-100 group-hover:translate-x-[14px] group-hover:translate-y-[14px]"
                style={{
                  background: service.color,
                  transition: `transform 0.45s ${springEase}, opacity 0.25s ease`,
                }}
              />
              <div
                className="absolute inset-0 border-2 border-black opacity-0 group-hover:opacity-100 group-hover:translate-x-[7px] group-hover:translate-y-[7px]"
                style={{
                  background: service.color,
                  transition: `transform 0.35s ${springEase}, opacity 0.2s ease`,
                }}
              />

              {/* Main card */}
              <div
                className="relative h-full min-h-[340px] border-2 border-black p-8 flex flex-col group-hover:-translate-x-[6px] group-hover:-translate-y-[6px]"
                style={{
                  background: service.color,
                  transition: `transform 0.45s ${springEase}`,
                }}
              >
                {/* Curved LEARN MORE text */}
                <svg
                  className="absolute -top-4 -right-4 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  viewBox="0 0 100 100"
                  aria-hidden="true"
                >
                  <defs>
                    <path
                      id={`expertise-arc-${index}`}
                      d="M 12,60 A 40,40 0 0 1 88,60"
                      fill="none"
                    />
                  </defs>
                  <text
                    className="font-['Geist']"
                    fill="#000000"
                    fontSize="13"
                    fontWeight="700"
                    letterSpacing="2"
                  >
                    <textPath href={`#expertise-arc-${index}`}>
                      LEARN MORE
                    </textPath>
                  </text>
                </svg>

                <div className="flex items-baseline gap-3 mb-6">
                  <span className="font-['Geist'] text-sm font-bold text-black/60">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-black/60">—</span>
                </div>

                <h3 className="font-['Hanken_Grotesk'] text-[22px] font-bold text-black uppercase tracking-wide mb-4 flex items-center gap-2">
                  <span
                    className="inline-block w-0 overflow-hidden group-hover:w-6"
                    style={{ transition: `width 0.35s ${springEase}` }}
                  >
                    →
                  </span>
                  {service.title}
                </h3>

                <p className="font-['Inter'] text-[15px] leading-relaxed text-black/80 flex-1">
                  {service.description}
                </p>

                <div className="flex items-end justify-between mt-8">
                  <Link
                    href={`/services/${service.slug}`}
                    className="flex-1 border-2 border-black bg-white text-black text-center font-['Geist'] text-xs font-bold tracking-[0.15em] uppercase py-3 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:bg-black hover:text-white"
                    style={{
                      transition: `all 0.35s ${springEase}`,
                    }}
                  >
                    Let&apos;s Go
                  </Link>
                  <span className="text-2xl text-black ml-4 group-hover:hidden">
                    ↗
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
