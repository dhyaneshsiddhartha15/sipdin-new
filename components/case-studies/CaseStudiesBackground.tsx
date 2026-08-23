/**
 * CaseStudiesBackground — the sky background behind the case-studies listing.
 *
 * The same image renders in light and dark mode: this deliberately reads no
 * theme signal. The previous version keyed off `prefers-color-scheme`, which is
 * the OS setting — the site's own toggle writes a `.dark` class on <html>, so
 * the background never followed the mode the visitor actually picked.
 */
export default function CaseStudiesBackground({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: "url('/do.jpg')",
        /* Shown while the image loads — matches the artwork's black field. */
        backgroundColor: "#040604",
      }}
    >
      {children}
    </div>
  );
}
