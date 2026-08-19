/**
 * Client logo wall — static grid of eight client marks under the hero.
 */

import Image from "next/image";
import { LOGO_WALL_FILES } from "@/lib/serviceDetail";

export default function ServiceLogoWall() {
  return (
    <section className="border-y border-line/40 bg-surface-2/40 px-6 py-14 md:px-[80px]">
      <div className="mx-auto max-w-[1240px]">
        <p className="font-['Geist'] text-center text-[11px] font-medium uppercase tracking-[0.25em] text-fg-2">
          Brands that trust SIDPIN Digital — 50+ projects across 20+ industries
        </p>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {LOGO_WALL_FILES.map((file) => (
            <div
              key={file}
              className="relative h-[104px] rounded-2xl bg-surface ring-1 ring-line/50 transition-transform duration-300 hover:-translate-y-1"
            >
              {/* next/image so these source files (some are multi-MB) are resized and
                  served as webp instead of shipped whole. */}
              <Image
                src={`/logos/${encodeURIComponent(file)}`}
                alt="SIDPIN Digital client logo"
                fill
                sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 260px"
                className="object-contain p-3.5"
              />
            </div>
          ))}
        </div>

        <p className="font-['Geist'] mt-6 text-center text-[11px] leading-relaxed text-fg-3">
          A selection of the brands we build and run campaigns for. More land here as projects go live.
        </p>
      </div>
    </section>
  );
}
