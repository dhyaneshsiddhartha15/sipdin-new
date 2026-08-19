/**
 * Creative gallery — four tall campaign posters from our recent work, with a
 * link through to the full portfolio. Posters fall back to a brand gradient
 * when a campaign has no image yet.
 */

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getAllRecentWork } from "@/lib/recentWork";

export default function ServiceWorkGallery({ serviceName }: { serviceName: string }) {
  const items = getAllRecentWork().slice(0, 4);
  if (items.length === 0) return null;

  return (
    <section className="bg-bg px-6 py-[88px] md:px-[80px]">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-[640px]">
            <h2 className="font-['Hanken_Grotesk'] text-[26px] font-bold leading-tight tracking-tight text-fg md:text-[32px]">
              The creative decides everything.{" "}
              <em className="not-italic text-brand md:italic">Here&apos;s ours.</em>
            </h2>
            <p className="font-['Inter'] mt-3 text-[14.5px] leading-relaxed text-fg-2">
              Not stock templates. Campaigns built to test, win, and bring your cost per
              result down — the same craft goes into every {serviceName.toLowerCase()} project.
            </p>
          </div>

          <Link
            href="/recent-work"
            className="font-['Geist'] inline-flex shrink-0 items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-[12.5px] font-semibold uppercase tracking-[0.14em] text-white transition-transform duration-300 hover:scale-[1.03]"
          >
            See Our Portfolio
            <ArrowRight className="h-4 w-4" strokeWidth={2.5} aria-hidden />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-5 lg:grid-cols-4">
          {items.map((work) => {
            const poster = work.posters?.[0];
            return (
              <Link
                key={work.slug}
                href={`/recent-work/${work.slug}`}
                className="group block"
              >
                <div
                  className="relative aspect-[3/4.6] overflow-hidden rounded-[18px] shadow-[0_20px_55px_-30px_rgba(15,23,42,0.55)]"
                  style={{
                    backgroundImage: `linear-gradient(160deg, ${work.gradient[0]} 0%, ${work.gradient[1]} 100%)`,
                  }}
                >
                  {poster ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={poster}
                      alt={work.brand}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                    />
                  ) : null}

                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent px-5 pb-5 pt-16">
                    <p
                      className="font-['Hanken_Grotesk'] text-[26px] font-bold leading-none"
                      style={{ color: work.accent }}
                    >
                      {work.heroStat.value}
                    </p>
                    <p className="font-['Geist'] mt-1 text-[10.5px] uppercase tracking-[0.16em] text-white/70">
                      {work.heroStat.label}
                    </p>
                  </div>
                </div>

                <p className="font-['Geist'] mt-3 text-[10.5px] uppercase tracking-[0.2em] text-fg-3">
                  {work.brand} · {work.category}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
