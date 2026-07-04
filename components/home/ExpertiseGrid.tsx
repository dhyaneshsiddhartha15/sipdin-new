"use client";

import Link from "next/link";

const services = [
  {
    title: "Search Engine Optimization",
    slug: "seo",
    image: "/expertise/seo.jpg",
    description:
      "Maximize your search traffic and rank higher on Google with our SEO experts.",
  },
  {
    title: "Pay-Per-Click Advertising",
    slug: "ppc",
    image: "/expertise/ppc.jpg",
    description:
      "Drive conversions and traffic to your website and app with our PPC specialists.",
  },
  {
    title: "Meta Ads",
    slug: "social-media-marketing",
    image: "/expertise/meta-ads.jpg",
    description:
      "Full-funnel Facebook and Instagram campaigns engineered for qualified leads.",
  },
  {
    title: "Social Media Marketing",
    slug: "social-media-management",
    image: "/expertise/social-media.jpg",
    description:
      "Build your brand with highly engaging social media campaigns and content.",
  },
  {
    title: "Web Development",
    slug: "web-development",
    image: "/expertise/web-development.jpg",
    description:
      "We develop fast, secure, SEO-ready websites that drive conversions.",
  },
  {
    title: "App Development",
    slug: "app-development",
    image: "/expertise/app-development.jpg",
    description:
      "Custom mobile apps that help customers connect with your product easily.",
  },
  {
    title: "UI/UX Design",
    slug: "ui-ux-design",
    image: "/expertise/ui-ux.jpg",
    description:
      "Enhance customer experience across web and app with better UI and UX.",
  },
  {
    title: "E-commerce Development",
    slug: "ecommerce-development",
    image: "/expertise/ecommerce.jpg",
    description:
      "High-converting online stores engineered for repeat purchases and growth.",
  },
  {
    title: "Marketing Automation",
    slug: "marketing-automation",
    image: "/expertise/automation.jpg",
    description:
      "Lead nurturing, CRM flows, and email automation that scale your growth.",
  },
  {
    title: "Video Editing",
    slug: "video-editing",
    image: "/expertise/video-editing.jpg",
    description:
      "Cinematic edits, reels, and long-form content that keep audiences watching.",
  },
  {
    title: "Graphic Designing",
    slug: "graphic-designing",
    image: "/expertise/graphic-design.jpg",
    description:
      "Logos, brand identity, and social creatives that make your brand memorable.",
  },
  {
    title: "Managed Cloud",
    slug: "managed-cloud",
    image: "/expertise/cloud.jpg",
    description:
      "Secure, scalable deployment and management on AWS and DigitalOcean.",
  },
];

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map((service) => (
            <Link
              key={service.slug + service.title}
              href={`/services/${service.slug}`}
              className="group relative block h-[400px] rounded-2xl overflow-hidden border border-white/10 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(65,105,225,0.25)]"
            >
              {/* Photo background */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={service.image}
                alt={service.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.06]"
              />

              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#05070f] via-[#05070f]/55 to-[#05070f]/15 transition-opacity duration-500 group-hover:from-[#0a1128]" />

              {/* Accent line + content pinned to bottom */}
              <div className="absolute inset-x-0 bottom-0 p-7">
                <span className="block h-[3px] w-10 rounded-full bg-[#4169E1] mb-5 transition-all duration-500 group-hover:w-16" />
                <h3 className="font-['Hanken_Grotesk'] text-[24px] font-bold leading-tight text-white mb-3">
                  {service.title}
                </h3>
                <p className="font-['Inter'] text-[14px] leading-relaxed text-white/80 max-w-[92%]">
                  {service.description}
                </p>

                <span className="mt-5 inline-flex items-center gap-2 font-['Geist'] text-xs font-semibold tracking-[0.15em] uppercase text-[#8FA6FF] opacity-0 -translate-x-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0">
                  Learn More <span aria-hidden="true">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
