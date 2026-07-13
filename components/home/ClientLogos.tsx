// Client logo wall — "Trusted by" social proof.
// Two rows of client logos scrolling in opposite directions (CSS marquee, pauses on hover).

// All client logos live in /public/logos. Our own Sidpin marks (6.png, 8.png) are
// intentionally excluded here since this is a *client* wall.
const logoFiles = [
  "2.png",
  "3.png",
  "4.png",
  "5.png",
  "7.png",
  "9.png",
  "10.png",
  "11.png",
  "12.png",
  "13.png",
  "14.png",
  "15.png",
  "16.png",
  "17.png",
  "18.png",
  "19.png",
  "20.png",
  "21.png",
  "22.png",
  "23.png",
  "24.png",
  "25.png",
  "26.png",
  "27.png",
  "Blue and White Illustrated Vacation Logo.png",
];

const half = Math.ceil(logoFiles.length / 2);
const rowTop = logoFiles.slice(0, half);
const rowBottom = logoFiles.slice(half);

function Chip({ file }: { file: string }) {
  return (
    <div className="flex h-24 w-40 shrink-0 items-center justify-center rounded-2xl bg-white ring-1 ring-black/[0.06] shadow-[0_10px_30px_-16px_rgba(15,23,42,0.35)] transition-transform duration-300 hover:-translate-y-1 md:h-28 md:w-48 dark:ring-white/10">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`/logos/${encodeURIComponent(file)}`}
        alt="SIDPIN Digital client logo"
        loading="lazy"
        className="max-h-[68%] max-w-[80%] object-contain"
      />
    </div>
  );
}

function MarqueeRow({
  files,
  direction,
  duration,
}: {
  files: string[];
  direction: "l" | "r";
  duration: number;
}) {
  // Duplicate the set so the -50% translate loops seamlessly.
  const loop = [...files, ...files];
  return (
    <div className="sidpin-marq">
      <div
        className={`sidpin-track ${direction}`}
        style={{ animationDuration: `${duration}s` }}
      >
        {loop.map((file, i) => (
          <Chip key={`${direction}-${i}-${file}`} file={file} />
        ))}
      </div>
    </div>
  );
}

export default function ClientLogos() {
  return (
    <section className="bg-white px-6 py-20 md:py-28 dark:bg-[#070b14]">
      <style>{`
        @keyframes sidpin-track-l { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes sidpin-track-r { from { transform: translateX(-50%); } to { transform: translateX(0); } }
        .sidpin-marq { position: relative; overflow: hidden; }
        .sidpin-track { display: flex; width: max-content; gap: 20px; will-change: transform; }
        .sidpin-track.l { animation-name: sidpin-track-l; animation-timing-function: linear; animation-iteration-count: infinite; }
        .sidpin-track.r { animation-name: sidpin-track-r; animation-timing-function: linear; animation-iteration-count: infinite; }
        .sidpin-marq:hover .sidpin-track { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) {
          .sidpin-track { animation: none !important; }
        }
      `}</style>

      <div className="mx-auto max-w-[1100px] text-center">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#4169E1]/20 bg-[#4169E1]/[0.05] px-5 py-2 font-['Geist'] text-[12px] font-medium uppercase tracking-[0.3em] text-[#4169E1] dark:border-[#6E8CFF]/25 dark:bg-[#6E8CFF]/[0.06] dark:text-[#6E8CFF]">
          Our Clients
        </span>
        <h2 className="mx-auto max-w-[820px] font-['Hanken_Grotesk'] text-[30px] font-semibold leading-[1.15] text-[#111111] md:text-[44px] dark:text-[#eef2fb]">
          Top Digital Marketing Agency Trusted by Startups, Scaleups, and the
          Fortune 500
        </h2>
        <p className="mx-auto mt-6 max-w-[640px] font-['Inter'] text-[16px] leading-relaxed text-[#666666] md:text-[17px] dark:text-[#aab4c9]">
          With clients spanning hundreds of niche industries, SIDPIN Digital is
          the digital marketing company that powers ambitious startups to global
          enterprises through high-impact websites and performance-driven
          marketing.
        </p>
      </div>

      <div className="relative mx-auto mt-16 flex max-w-[1400px] flex-col gap-5">
        <MarqueeRow files={rowTop} direction="l" duration={45} />
        <MarqueeRow files={rowBottom} direction="r" duration={40} />

        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent md:w-32 dark:from-[#070b14]" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent md:w-32 dark:from-[#070b14]" />
      </div>
    </section>
  );
}
