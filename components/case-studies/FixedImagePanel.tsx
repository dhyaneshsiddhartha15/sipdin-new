/**
 * FixedImagePanel — an image painted as a FIXED background, the same treatment
 * the /case-studies listing uses: the picture stays locked to the viewport while
 * the page scrolls, and is only ever visible through this panel's own box.
 *
 * Why a background and not an <img>: `background-attachment: fixed` is what
 * produces the "image holds still, content scrolls past" effect. Nothing in the
 * ancestor chain may carry `transform`, `filter`, `perspective` or `contain` —
 * any of those makes the element a containing block and silently degrades the
 * fixed background back to `scroll`. That is why the optional grayscale lives on
 * an overlay (backdrop-filter) instead of on the panel itself.
 *
 * Sizing: a fixed background is sized against the VIEWPORT, not this element, so
 * `cover` crops hard whenever the image and the window disagree on aspect ratio
 * (a 1.27 image in a 1.78 window loses ~30% of its height and reads as zoomed
 * in). `contain` shows the whole frame instead, and `aspectRatio` narrows the
 * panel to exactly the width the contained image paints at, so no filler bars
 * show beside it.
 */
export default function FixedImagePanel({
  src,
  alt,
  /** Start greyed and fade to full colour on hover. */
  grayscaleUntilHover = false,
  /** Image width ÷ height. Frames the panel to the image; omit for full width. */
  aspectRatio,
  /** Tailwind height utilities; defaults to 70vh, full viewport on large screens. */
  heightClassName = "h-[70vh] min-h-[420px] lg:h-screen",
}: {
  src: string;
  alt: string;
  grayscaleUntilHover?: boolean;
  aspectRatio?: number;
  heightClassName?: string;
}) {
  return (
    <section className="relative z-10 bg-transparent">
      <div className="mx-auto max-w-[1700px] px-6 md:px-12">
        <div
          role="img"
          aria-label={alt}
          className={`group mx-auto w-full overflow-hidden rounded-3xl bg-contain bg-center bg-no-repeat bg-fixed ${heightClassName}`}
          style={{
            backgroundImage: `url('${src}')`,
            /* Shows only if the panel is wider than the contained image. */
            backgroundColor: "#f2f2f2",
            /* The contained image paints at `100vh × ratio` wide on landscape
               windows; capping the panel there makes it hug the picture. On tall
               windows the image fits to width instead, and 100% wins. */
            ...(aspectRatio ? { maxWidth: `calc(100vh * ${aspectRatio})` } : {}),
          }}
        >
          {grayscaleUntilHover && (
            <div className="h-full w-full backdrop-grayscale transition-opacity duration-500 ease-out group-hover:opacity-0" />
          )}
        </div>
      </div>
    </section>
  );
}
