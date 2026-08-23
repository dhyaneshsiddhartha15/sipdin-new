import Link from "next/link";
import { serviceCategories } from "@/lib/services";

/**
 * Categories kept out of the public index. The services themselves still exist
 * in lib/services.ts and their /services/<slug> pages still resolve — they're
 * just not advertised here.
 */
const HIDDEN_CATEGORIES = new Set(["Consulting"]);

/**
 * Every service we actually have a page for, grouped by category.
 *
 * Driven by `serviceCategories` — the same source the mega-menu items and the
 * `/services/[slug]` detail pages read from — so this page can't drift out of
 * sync with them again. (The home page's ExpertiseGrid stays a hand-picked
 * highlight reel; this is the complete index.)
 */
export default function AllServicesGrid() {
  return (
    <section className="overflow-hidden bg-bg px-[24px] py-[160px] md:px-[64px]">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-20 max-w-3xl">
          <span className="mb-4 block font-['Geist'] text-xs font-medium uppercase tracking-[0.4em] text-[#4169E1]">
            Our Expertise
          </span>
          <h2 className="mb-6 font-['Hanken_Grotesk'] text-[34px] font-medium sm:text-[42px] md:text-[48px]">
            Everything We Build, <br />
            Market and Automate
          </h2>
          <p className="font-['Inter'] text-lg text-fg-2">
            End-to-end digital services across engineering, marketing, creative,
            AI and consulting. Pick any one to see how we approach it.
          </p>
        </div>

        <div className="space-y-16">
          {serviceCategories
            .filter((category) => !HIDDEN_CATEGORIES.has(category.name))
            .map((category) => (
            <div key={category.name}>
              <div className="mb-7 flex items-center gap-4">
                <h3 className="font-['Hanken_Grotesk'] text-[22px] font-bold text-fg md:text-[26px]">
                  {category.name}
                </h3>
                <span className="h-px flex-1 bg-line/60" />
                <span className="font-['Inter'] text-[13px] font-medium text-fg-2">
                  {category.services.length}
                </span>
              </div>

              <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
                {category.services.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="group flex h-full flex-col rounded-xl border border-line/50 bg-surface p-8 shadow-[0_10px_40px_-18px_rgba(17,24,39,0.14)] transition-all duration-400 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-20px_rgba(65,105,225,0.35)]"
                  >
                    <h4 className="mb-3 font-['Hanken_Grotesk'] text-[20px] font-bold leading-snug text-fg">
                      {service.name}
                    </h4>
                    <p className="font-['Inter'] text-[14.5px] leading-[1.75] text-fg-2">
                      {service.tagline}
                    </p>
                    <span
                      aria-hidden="true"
                      className="mt-8 inline-block text-[26px] leading-none text-fg transition-all duration-300 group-hover:translate-x-2 group-hover:text-[#4169E1]"
                    >
                      &#8594;
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
