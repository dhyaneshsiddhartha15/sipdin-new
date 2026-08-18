/**
 * "06 — REVIEWS" — rating summary bar plus three review cards.
 */

import { Star } from "lucide-react";
import { clientReviews, reviewInitials } from "@/lib/testimonials";
import SectionHeading from "./SectionHeading";

const AVATAR_COLORS = ["#4169E1", "#C2410C", "#B45309"];

export default function ServiceReviews() {
  const reviews = clientReviews.slice(0, 3);

  return (
    <section className="bg-surface-2/40 px-6 py-[88px] md:px-[80px]">
      <div className="mx-auto max-w-[1440px]">
        <SectionHeading
          index="06"
          label="Reviews"
          title="Don't take our word for it."
          accent="Take theirs."
        />

        {/* Rating bar */}
        <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-[18px] border border-line/50 bg-surface px-7 py-6 md:flex-row md:items-center">
          <div className="flex items-center gap-4">
            <span className="font-['Hanken_Grotesk'] text-[42px] font-bold leading-none text-fg">
              4.9
            </span>
            <span>
              <span className="flex gap-0.5">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="h-4 w-4 fill-[#F5A623] text-[#F5A623]" aria-hidden />
                ))}
              </span>
              <span className="font-['Inter'] mt-1.5 block text-[13.5px] text-fg-2">
                Rated <strong className="font-semibold text-fg">4.9 / 5</strong> by our clients
              </span>
            </span>
          </div>

          <a
            href="https://www.google.com/search?q=SIDPIN+Digital+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="font-['Geist'] text-[12px] font-semibold uppercase tracking-[0.14em] text-brand hover:underline"
          >
            Read them all →
          </a>
        </div>

        {/* Review cards */}
        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {reviews.map((review, i) => (
            <article
              key={review.name}
              className="flex flex-col rounded-[18px] border border-line/50 bg-surface p-7"
            >
              <div className="flex items-center gap-3">
                <span
                  className="font-['Geist'] grid h-10 w-10 place-items-center rounded-full text-[13px] font-bold text-white"
                  style={{ backgroundColor: AVATAR_COLORS[i % AVATAR_COLORS.length] }}
                >
                  {reviewInitials(review.name)}
                </span>
                <span className="min-w-0">
                  <span className="font-['Hanken_Grotesk'] block truncate text-[15.5px] font-semibold text-fg">
                    {review.name}
                  </span>
                  <span className="font-['Geist'] block truncate text-[11px] uppercase tracking-[0.14em] text-fg-3">
                    {review.role}
                  </span>
                </span>
              </div>

              <span className="mt-4 flex gap-0.5">
                {[0, 1, 2, 3, 4].map((s) => (
                  <Star key={s} className="h-3.5 w-3.5 fill-[#F5A623] text-[#F5A623]" aria-hidden />
                ))}
              </span>

              <p className="font-['Inter'] mt-4 flex-1 text-[14px] leading-relaxed text-fg-2">
                {review.quote}
              </p>

              {review.when ? (
                <p className="font-['Geist'] mt-6 text-[11px] uppercase tracking-[0.14em] text-fg-3">
                  {review.when}
                </p>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
