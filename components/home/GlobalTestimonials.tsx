// GlobalTestimonials — "What Clients Say" video-style testimonial wall.
// A single auto-scrolling marquee of portrait cards (name · role · quote, play badge)
// with a "690+ Happy Clients" stat card mixed in. Pauses on hover.
// Images are placeholder portraits for now — swap for real client photos/videos later.

import { Play } from "lucide-react";

type Testimonial = {
  name: string;
  role: string;
  quote: string;
  image: string;
};

const P = (id: string) =>
  `https://images.unsplash.com/photo-${id}?w=520&h=720&fit=crop&crop=faces&q=80`;

const A = (id: string) =>
  `https://images.unsplash.com/photo-${id}?w=120&h=120&fit=crop&crop=faces&q=80`;

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Avish Bansal",
    role: "Rudradharma",
    quote:
      "Sidpin took our 70-year Rudraksha legacy online with complete authenticity. Our sales and customer trust have never been stronger.",
    image: P("1500648767791-00dcc994a43e"),
  },
  {
    name: "Ankit Rawat",
    role: "AG Fitness",
    quote:
      "Our brand finally looks as strong as our training. Enquiries went up the moment the new site went live.",
    image: P("1507003211169-0a1dd7228f2d"),
  },
  {
    name: "Rohan Rawat",
    role: "Yog Adhyayan",
    quote:
      "They understood our vision instantly and turned it into a calm, beautiful digital experience. Bookings keep growing.",
    image: P("1633332755192-727a05c4013d"),
  },
  {
    name: "Shubham Rayal",
    role: "Raboche Institute of Technology & Management",
    quote:
      "On a lean budget they delivered a website that competes with global hospitality brands. Prospective students notice the difference.",
    image: P("1519085360753-af0119f7cbe7"),
  },
  {
    name: "Akshat Trivedi",
    role: "Panchbhootyatra",
    quote:
      "Sidpin captured the spirit of our journeys perfectly. The content and reach they created brought in a whole new audience.",
    image: P("1506794778202-cad84cf45f1d"),
  },
  {
    name: "Anuj Dhasmana",
    role: "Rescue by Anuj",
    quote:
      "Professional, fast, and genuinely invested in our mission. The results spoke for themselves within weeks.",
    image: P("1494790108377-be9c29b29330"),
  },
  {
    name: "Krishna Singh Rawat",
    role: "Mazri Grant Resort",
    quote:
      "Our bookings and online presence transformed completely. Guests now find and trust us before they ever arrive.",
    image: P("1544005313-94ddf0286df2"),
  },
];

const STAT_AVATARS = [
  A("1500648767791-00dcc994a43e"),
  A("1494790108377-be9c29b29330"),
  A("1507003211169-0a1dd7228f2d"),
  A("1633332755192-727a05c4013d"),
  A("1544005313-94ddf0286df2"),
  A("1506794778202-cad84cf45f1d"),
];

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <article className="relative h-[400px] w-[268px] shrink-0 overflow-hidden rounded-[20px] shadow-[0_18px_50px_-24px_rgba(15,23,42,0.5)]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={t.image} alt={t.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
      {/* Play badge */}
      <span className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-white/25 text-white backdrop-blur-md ring-1 ring-white/40">
        <Play className="h-4 w-4 translate-x-[1px] fill-white" aria-hidden />
      </span>
      {/* Bottom gradient + copy */}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent px-5 pb-5 pt-16">
        <p className="font-['Hanken_Grotesk'] text-[16px] font-bold text-white">{t.name}</p>
        <p className="mb-2 text-[11px] font-medium text-white/70">{t.role}</p>
        <p className="line-clamp-2 font-['Inter'] text-[12.5px] leading-snug text-white/85">{t.quote}</p>
      </div>
    </article>
  );
}

function StatCard() {
  return (
    <div className="relative flex h-[400px] w-[268px] shrink-0 flex-col overflow-hidden rounded-[20px] bg-white p-6 shadow-[0_18px_50px_-24px_rgba(15,23,42,0.5)] dark:bg-[#111827]">
      {/* Avatar cluster */}
      <div className="relative flex-1">
        {[
          { t: "8%", l: "14%", s: 46 },
          { t: "4%", l: "58%", s: 40 },
          { t: "30%", l: "38%", s: 52 },
          { t: "26%", l: "76%", s: 36 },
          { t: "54%", l: "10%", s: 42 },
          { t: "58%", l: "60%", s: 48 },
        ].map((pos, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={i}
            src={STAT_AVATARS[i % STAT_AVATARS.length]}
            alt=""
            loading="lazy"
            className="absolute rounded-full object-cover ring-2 ring-white dark:ring-[#111827]"
            style={{ top: pos.t, left: pos.l, width: pos.s, height: pos.s }}
          />
        ))}
      </div>
      <div>
        <p className="font-['Hanken_Grotesk'] text-[40px] font-bold leading-none text-[#111111] dark:text-white">
          30 <span className="text-[#4169E1]">+</span>
        </p>
        <p className="mt-2 font-['Inter'] text-[13px] font-medium text-[#666666] dark:text-white/60">Happy Clients</p>
      </div>
    </div>
  );
}

export default function GlobalTestimonials() {
  // Insert the stat card into the middle of the set, then duplicate for a seamless loop.
  const withStat: (Testimonial | "stat")[] = [
    ...TESTIMONIALS.slice(0, 3),
    "stat",
    ...TESTIMONIALS.slice(3),
  ];
  const loop = [...withStat, ...withStat];

  return (
    <section className="overflow-hidden bg-[#F5F0EE] py-[72px] md:py-[96px] dark:bg-[#070b14]">
      <style>{`
        @keyframes gt-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .gt-track { display: flex; gap: 20px; width: max-content; animation: gt-scroll 55s linear infinite; will-change: transform; }
        .gt-marq:hover .gt-track { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) { .gt-track { animation: none !important; } }
      `}</style>

      <div className="mx-auto max-w-[1000px] px-6 text-center">
        <h2 className="font-['Hanken_Grotesk'] text-[30px] font-bold leading-[1.15] tracking-tight text-[#111111] md:text-[46px] dark:text-[#eef2fb]">
          What Clients Say About Our Services
        </h2>
        <p className="mx-auto mt-5 max-w-[680px] font-['Inter'] text-[15px] leading-relaxed text-[#666666] md:text-[16px] dark:text-[#aab4c9]">
          Don&apos;t take our word for it. These are verified reviews from real clients who have
          worked with our development team.
        </p>
      </div>

      <div className="gt-marq relative mt-14">
        <div className="gt-track px-6">
          {loop.map((item, i) =>
            item === "stat" ? (
              <StatCard key={`stat-${i}`} />
            ) : (
              <TestimonialCard key={`${item.name}-${i}`} t={item} />
            )
          )}
        </div>

        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#F5F0EE] to-transparent md:w-28 dark:from-[#070b14]" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#F5F0EE] to-transparent md:w-28 dark:from-[#070b14]" />
      </div>
    </section>
  );
}
