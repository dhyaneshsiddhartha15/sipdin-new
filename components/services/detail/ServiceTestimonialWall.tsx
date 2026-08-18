/**
 * "01 — TESTIMONIAL" — a horizontally scrolling wall of client quote cards.
 * Photos are intentionally not used here; the cards carry the words.
 */

import { Quote } from "lucide-react";
import { clientReviews, reviewInitials } from "@/lib/testimonials";
import SectionHeading from "./SectionHeading";

export default function ServiceTestimonialWall() {
  return (
    <section className="overflow-hidden bg-bg px-6 py-[88px] md:px-[80px]">
      <div className="mx-auto max-w-[1440px]">
        <SectionHeading
          index="01"
          label="Testimonial"
          title="See What"
          accent="Clients Say"
          intro="Real feedback from businesses we've helped grow. From higher-quality leads to increased revenue, our clients' results speak for themselves."
        />
      </div>

      {/* Full-bleed scroller — drag or swipe through the wall. */}
      <div className="mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {clientReviews.map((review) => (
          <article
            key={review.name}
            className="flex w-[300px] shrink-0 snap-start flex-col justify-between rounded-[20px] border border-line/50 bg-surface p-7 shadow-[0_18px_50px_-32px_rgba(15,23,42,0.5)] md:w-[340px]"
          >
            <Quote className="h-6 w-6 text-brand/60" aria-hidden />
            <p className="font-['Inter'] mt-5 flex-1 text-[14.5px] leading-relaxed text-fg-2">
              “{review.quote}”
            </p>
            <div className="mt-7 flex items-center gap-3 border-t border-line/50 pt-5">
              <span className="font-['Geist'] grid h-10 w-10 place-items-center rounded-full bg-brand/10 text-[13px] font-bold text-brand">
                {reviewInitials(review.name)}
              </span>
              <span className="min-w-0">
                <span className="font-['Hanken_Grotesk'] block truncate text-[15px] font-semibold text-fg">
                  {review.name}
                </span>
                <span className="font-['Geist'] block truncate text-[11px] uppercase tracking-[0.14em] text-fg-3">
                  {review.role}
                </span>
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
