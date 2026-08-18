/**
 * "02 — WHAT WE DO" — the three core offerings as picture cards, with the
 * remaining offerings listed in a strip underneath.
 */

import type { Service } from "@/lib/services";
import SectionHeading from "./SectionHeading";

/** Visual pool for the second and third card when a service only has one image. */
const IMAGE_POOL = [
  "/expertise/web-development.jpg",
  "/expertise/social-media.jpg",
  "/expertise/seo.jpg",
  "/expertise/ui-ux.jpg",
];

export default function ServiceWhatWeDo({
  service,
  serviceImage,
}: {
  service: Service;
  serviceImage?: string;
}) {
  const core = service.offerings.slice(0, 3);
  const rest = service.offerings.slice(3);

  // Card visuals: the service's own photo first, then distinct fallbacks.
  const visuals = [serviceImage, ...IMAGE_POOL.filter((src) => src !== serviceImage)]
    .filter(Boolean)
    .slice(0, 3) as string[];

  return (
    <section className="bg-surface-2/40 px-6 py-[88px] md:px-[80px]">
      <div className="mx-auto max-w-[1440px]">
        <SectionHeading
          index="02"
          label="What we do"
          title="Everything that turns your budget"
          accent="into revenue."
          intro={service.aboutText}
        />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {core.map((offering, i) => (
            <article
              key={offering.title}
              className="group overflow-hidden rounded-[20px] border border-line/50 bg-surface transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_-30px_rgba(15,23,42,0.45)]"
            >
              <div className="relative h-[210px] overflow-hidden bg-brand/5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={visuals[i]}
                  alt=""
                  aria-hidden
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand/25 via-transparent to-transparent" />
              </div>

              <div className="p-7">
                <span className="font-['Geist'] block text-[11px] font-semibold uppercase tracking-[0.24em] text-brand">
                  Core / {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-['Hanken_Grotesk'] mt-3 text-[21px] font-semibold text-fg">
                  {offering.title}
                </h3>
                <p className="font-['Inter'] mt-3 text-[14px] leading-relaxed text-fg-2">
                  {offering.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {rest.length > 0 ? (
          <div className="mt-6 rounded-[20px] border border-line/50 bg-surface px-7 py-6">
            <p className="font-['Geist'] text-[11px] font-semibold uppercase tracking-[0.2em] text-brand">
              Also available, when the data says you need them:
            </p>
            <p className="font-['Inter'] mt-3 text-[14.5px] text-fg-2">
              {rest.map((offering) => offering.title).join("  ·  ")}
            </p>
          </div>
        ) : null}
      </div>
    </section>
  );
}
