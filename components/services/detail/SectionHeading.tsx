/**
 * Shared heading for the numbered service-detail sections:
 * a mono eyebrow ("02 — WHAT WE DO"), a bold title, an italic accent phrase
 * in the brand colour, and an optional intro paragraph.
 */

export function SectionHeading({
  index,
  label,
  title,
  accent,
  intro,
}: {
  /** Two-digit section number, e.g. "02". Omit for unnumbered sections. */
  index?: string;
  label: string;
  title: string;
  /** Rendered italic in the brand colour, after the title. */
  accent?: string;
  intro?: string;
}) {
  return (
    <div className="max-w-[820px]">
      <span className="font-['Geist'] block text-[11px] font-semibold uppercase tracking-[0.35em] text-brand">
        {index ? `${index} — ` : ""}
        {label}
      </span>
      <h2 className="font-['Hanken_Grotesk'] mt-6 text-[32px] font-bold leading-[1.1] tracking-tight text-fg md:text-[46px]">
        {title}{" "}
        {accent ? (
          <em className="font-['Hanken_Grotesk'] not-italic text-brand md:italic">
            {accent}
          </em>
        ) : null}
      </h2>
      {intro ? (
        <p className="font-['Inter'] mt-5 max-w-[620px] text-[15px] leading-relaxed text-fg-2">
          {intro}
        </p>
      ) : null}
    </div>
  );
}

export default SectionHeading;
