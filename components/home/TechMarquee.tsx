"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  PenTool, Image as ImageIcon, Palette, Edit3, Terminal, Rocket, Server,
  Cloud, Database, Atom, Triangle, Globe, FileCode, Container,
} from "lucide-react";

type IconProps = { size?: number; strokeWidth?: number; color?: string };

function OpenAIIcon({ size = 24, color = "currentColor" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M9.205 8.658v-2.26c0-.19.072-.333.238-.428l4.543-2.616c.619-.357 1.356-.523 2.117-.523 2.854 0 4.662 2.212 4.662 4.566 0 .167 0 .357-.024.547l-4.71-2.759a.797.797 0 00-.856 0l-5.97 3.473zm10.609 8.8V12.06c0-.333-.143-.57-.429-.737l-5.97-3.473 1.95-1.118a.433.433 0 01.476 0l4.543 2.617c1.309.76 2.189 2.378 2.189 3.948 0 1.808-1.07 3.473-2.76 4.163zM7.802 12.703l-1.95-1.142c-.167-.095-.239-.238-.239-.428V5.899c0-2.545 1.95-4.472 4.591-4.472 1 0 1.927.333 2.712.928L8.23 5.067c-.285.166-.428.404-.428.737v6.898zM12 15.128l-2.795-1.57v-3.33L12 8.658l2.795 1.57v3.33L12 15.128zm1.796 7.23c-1 0-1.927-.332-2.712-.927l4.686-2.712c.285-.166.428-.404.428-.737v-6.898l1.974 1.142c.167.095.238.238.238.428v5.233c0 2.545-1.974 4.472-4.614 4.472zm-5.637-5.303l-4.544-2.617c-1.308-.761-2.188-2.378-2.188-3.948A4.482 4.482 0 014.21 6.327v5.423c0 .333.143.571.428.738l5.947 3.449-1.95 1.118a.432.432 0 01-.476 0zm-.262 3.9c-2.688 0-4.662-2.021-4.662-4.519 0-.19.024-.38.047-.57l4.686 2.71c.286.167.571.167.856 0l5.97-3.448v2.26c0 .19-.07.333-.237.428l-4.543 2.616c-.619.357-1.356.523-2.117.523zm5.899 2.83a5.947 5.947 0 005.827-4.756C22.287 18.339 24 15.84 24 13.296c0-1.665-.713-3.282-1.998-4.448.119-.5.19-.999.19-1.498 0-3.401-2.759-5.947-5.946-5.947-.642 0-1.26.095-1.88.31A5.962 5.962 0 0010.205 0a5.947 5.947 0 00-5.827 4.757C1.713 5.447 0 7.945 0 10.49c0 1.666.713 3.283 1.998 4.448-.119.5-.19 1-.19 1.499 0 3.401 2.759 5.946 5.946 5.946.642 0 1.26-.095 1.88-.309a5.96 5.96 0 004.162 1.713z" />
    </svg>
  );
}

function ClaudeIcon({ size = 24, color = "currentColor" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M4.709 15.955l4.72-2.647.08-.23-.08-.128H9.2l-.79-.048-2.698-.073-2.339-.097-2.266-.122-.571-.121L0 11.784l.055-.352.48-.321.686.06 1.52.103 2.278.158 1.652.097 2.449.255h.389l.055-.157-.134-.098-.103-.097-2.358-1.596-2.552-1.688-1.336-.972-.724-.491-.364-.462-.158-1.008.656-.722.881.06.225.061.893.686 1.908 1.476 2.491 1.833.365.304.145-.103.019-.073-.164-.274-1.355-2.446-1.446-2.49-.644-1.032-.17-.619a2.97 2.97 0 01-.104-.729L6.283.134 6.696 0l.996.134.42.364.62 1.414 1.002 2.229 1.555 3.03.456.898.243.832.091.255h.158V9.01l.128-1.706.237-2.095.23-2.695.08-.76.376-.91.747-.492.584.28.48.685-.067.444-.286 1.851-.559 2.903-.364 1.942h.212l.243-.242.985-1.306 1.652-2.064.73-.82.85-.904.547-.431h1.033l.76 1.129-.34 1.166-1.064 1.347-.881 1.142-1.264 1.7-.79 1.36.073.11.188-.02 2.856-.606 1.543-.28 1.841-.315.833.388.091.395-.328.807-1.969.486-2.309.462-3.439.813-.042.03.049.061 1.549.146.662.036h1.622l3.02.225.79.522.474.638-.079.485-1.215.62-1.64-.389-3.829-.91-1.312-.329h-.182v.11l1.093 1.068 2.006 1.81 2.509 2.33.127.578-.322.455-.34-.049-2.205-1.657-.851-.747-1.926-1.62h-.128v.17l.444.649 2.345 3.521.122 1.08-.17.353-.608.213-.668-.122-1.374-1.925-1.415-2.167-1.143-1.943-.14.08-.674 7.254-.316.37-.729.28-.607-.461-.322-.747.322-1.476.389-1.924.315-1.53.286-1.9.17-.632-.012-.042-.14.018-1.434 1.967-2.18 2.945-1.726 1.845-.414.164-.717-.37.067-.662.401-.589 2.388-3.036 1.44-1.882.93-1.086-.006-.158h-.055L4.132 18.56l-1.13.146-.487-.456.061-.746.231-.243 1.908-1.312-.006.006z" />
    </svg>
  );
}

function LangChainIcon({ size = 24, color = "currentColor" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M7.531 15.976a7.534 7.534 0 000-10.651L2.206 0A7.537 7.537 0 000 5.326c0 1.996.794 3.913 2.206 5.325l5.325 5.325zM18.674 16.469a7.535 7.535 0 00-10.65 0l5.325 5.325a7.536 7.536 0 0010.651 0l-5.326-5.325zM2.218 21.782a7.536 7.536 0 005.326 2.206v-7.531H.012c0 1.996.795 3.914 2.206 5.325zM20.73 8.595a7.534 7.534 0 00-10.651.001l5.325 5.326 5.326-5.327z" />
    </svg>
  );
}

function HuggingFaceIcon({ size = 24, color = "currentColor" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M16.781 3.277c2.997 1.704 4.844 4.851 4.844 8.258 0 .995-.155 1.955-.443 2.857a1.332 1.332 0 011.125.4 1.41 1.41 0 01.2 1.723c.204.165.352.385.428.632l.017.062c.06.222.12.69-.2 1.166.244.37.279.836.093 1.236-.255.57-.893 1.018-2.128 1.5l-.202.078-.131.048c-.478.173-.89.295-1.061.345l-.086.024c-.89.243-1.808.375-2.732.394-1.32 0-2.3-.36-2.923-1.067a9.852 9.852 0 01-3.18.018C9.778 21.647 8.802 22 7.494 22a11.249 11.249 0 01-2.541-.343l-.221-.06-.273-.08a16.574 16.574 0 01-1.175-.405c-1.237-.483-1.875-.93-2.13-1.501-.186-.4-.151-.867.093-1.236a1.42 1.42 0 01-.2-1.166c.069-.273.226-.516.447-.694a1.41 1.41 0 01.2-1.722c.233-.248.557-.391.917-.407l.078-.001a9.385 9.385 0 01-.44-2.85c0-3.407 1.847-6.554 4.844-8.258a9.822 9.822 0 019.687 0zM4.188 14.758c.125.687 2.357 2.35 2.14 2.707-.19.315-.796-.239-.948-.386l-.041-.04-.168-.147c-.561-.479-2.304-1.9-2.74-1.432-.43.46.119.859 1.055 1.42l.784.467.136.083c1.045.643 1.12.84.95 1.113-.188.295-3.07-2.1-3.34-1.083-.27 1.011 2.942 1.304 2.744 2.006-.2.7-2.265-1.324-2.685-.537-.425.79 2.913 1.718 2.94 1.725l.16.04.175.042c1.227.284 3.565.65 4.435-.604.673-.973.64-1.709-.248-2.61l-.057-.057c-.945-.928-1.495-2.288-1.495-2.288l-.017-.058-.025-.072c-.082-.22-.284-.639-.63-.584-.46.073-.798 1.21.12 1.933l.05.038c.977.721-.195 1.21-.573.534l-.058-.104-.143-.25c-.463-.799-1.282-2.111-1.739-2.397-.532-.332-.907-.148-.782.541zm14.842-.541c-.533.335-1.563 2.074-1.94 2.751a.613.613 0 01-.687.302.436.436 0 01-.176-.098.303.303 0 01-.049-.06l-.014-.028-.008-.02-.007-.019-.003-.013-.003-.017a.289.289 0 01-.004-.048c0-.12.071-.266.25-.427.026-.024.054-.047.084-.07l.047-.036c.022-.016.043-.032.063-.049.883-.71.573-1.81.131-1.917l-.031-.006-.056-.004a.368.368 0 00-.062.006l-.028.005-.042.014-.039.017-.028.015-.028.019-.036.027-.023.02c-.173.158-.273.428-.31.542l-.016.054s-.53 1.309-1.439 2.234l-.054.054c-.365.358-.596.69-.702 1.018-.143.437-.066.868.21 1.353.055.097.117.195.187.296.882 1.275 3.282.876 4.494.59l.286-.07.25-.074c.276-.084.736-.233 1.2-.42l.188-.077.065-.028.064-.028.124-.056.081-.038c.529-.252.964-.543.994-.827l.001-.036a.299.299 0 00-.037-.139c-.094-.176-.271-.212-.491-.168l-.045.01c-.044.01-.09.024-.136.04l-.097.035-.054.022c-.559.23-1.238.705-1.607.745h.006a.452.452 0 01-.05.003h-.024l-.024-.003-.023-.005c-.068-.016-.116-.06-.14-.142a.22.22 0 01-.005-.1c.062-.345.958-.595 1.713-.91l.066-.028c.528-.224.97-.483.985-.832v-.04a.47.47 0 00-.016-.098c-.048-.18-.175-.251-.36-.251-.785 0-2.55 1.36-2.92 1.36-.025 0-.048-.007-.058-.024a.6.6 0 01-.046-.088c-.1-.238.068-.462 1.06-1.066l.209-.126c.538-.32 1.01-.588 1.341-.831.29-.212.475-.406.503-.6l.003-.028c.008-.113-.038-.227-.147-.344a.266.266 0 00-.07-.054l-.034-.015-.013-.005a.403.403 0 00-.13-.02c-.162 0-.369.07-.595.18-.637.313-1.431.952-1.826 1.285l-.249.215-.033.033c-.08.078-.288.27-.493.386l-.071.037-.041.019a.535.535 0 01-.122.036h.005a.346.346 0 01-.031.003l.01-.001-.013.001c-.079.005-.145-.021-.19-.095a.113.113 0 01-.014-.065c.027-.465 2.034-1.991 2.152-2.642l.009-.048c.1-.65-.271-.817-.791-.493zM11.938 2.984c-4.798 0-8.688 3.829-8.688 8.55 0 .692.083 1.364.24 2.008l.008-.009c.252-.298.612-.46 1.017-.46.355.008.699.117.993.312.22.14.465.384.715.694.261-.372.69-.598 1.15-.605.852 0 1.367.728 1.562 1.383l.047.105.06.127c.192.396.595 1.139 1.143 1.68 1.06 1.04 1.324 2.115.8 3.266a8.865 8.865 0 002.024-.014c-.505-1.12-.26-2.17.74-3.186l.066-.066c.695-.684 1.157-1.69 1.252-1.912.195-.655.708-1.383 1.56-1.383.46.007.889.233 1.15.605.25-.31.495-.553.718-.694a1.87 1.87 0 01.99-.312c.357 0 .682.126.925.36.14-.61.215-1.245.215-1.898 0-4.722-3.89-8.55-8.687-8.55zm1.857 8.926l.439-.212c.553-.264.89-.383.89.152 0 1.093-.771 3.208-3.155 3.262h-.184c-2.325-.052-3.116-2.06-3.156-3.175l-.001-.087c0-1.107 1.452.586 3.25.586.716 0 1.379-.272 1.917-.526zm4.017-3.143c.45 0 .813.358.813.8 0 .441-.364.8-.813.8a.806.806 0 01-.812-.8c0-.442.364-.8.812-.8zm-11.624 0c.448 0 .812.358.812.8 0 .441-.364.8-.812.8a.806.806 0 01-.813-.8c0-.442.364-.8.813-.8zm7.79-.841c.32-.384.846-.54 1.33-.394.483.146.83.564.878 1.06.048.495-.212.97-.659 1.203-.322.168-.447-.477-.767-.585l.002-.003c-.287-.098-.772.362-.925.079a1.215 1.215 0 01.14-1.36zm-4.323 0c.322.384.377.92.14 1.36-.152.283-.64-.177-.925-.079l.003.003c-.108.036-.194.134-.273.24l-.118.165c-.11.15-.22.262-.377.18a1.226 1.226 0 01-.658-1.204c.048-.495.395-.913.878-1.059a1.262 1.262 0 011.33.394z" />
    </svg>
  );
}

function PineconeIcon({ size = 24 }: IconProps) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src="/logos/pinecone.png" width={size} height={size} alt="Pinecone" style={{ objectFit: "contain" }} />;
}

const STACK = [
  { name: "OpenAI", tag: "AI", Icon: OpenAIIcon },
  { name: "Claude AI", tag: "AI", Icon: ClaudeIcon },
  { name: "LangChain", tag: "AI", Icon: LangChainIcon },
  { name: "Hugging Face", tag: "AI", Icon: HuggingFaceIcon },
  { name: "Pinecone", tag: "AI", Icon: PineconeIcon },
  { name: "Adobe", tag: "DESIGN", Icon: PenTool },
  { name: "Photoshop", tag: "DESIGN", Icon: ImageIcon },
  { name: "Canva", tag: "DESIGN", Icon: Palette },
  { name: "Figma", tag: "DESIGN", Icon: Edit3 },
  { name: "Node.js", tag: "BACKEND", Icon: Terminal },
  { name: "Go", tag: "BACKEND", Icon: Terminal },
  { name: "Python", tag: "BACKEND", Icon: Terminal },
  { name: "FastAPI", tag: "BACKEND", Icon: Rocket },
  { name: "Express", tag: "BACKEND", Icon: Server },
  { name: "AWS", tag: "CLOUD", Icon: Cloud },
  { name: "Azure", tag: "CLOUD", Icon: Cloud },
  { name: "Google Cloud", tag: "CLOUD", Icon: Cloud },
  { name: "MongoDB", tag: "DATABASE", Icon: Database },
  { name: "Redis", tag: "DATABASE", Icon: Database },
  { name: "React", tag: "FRONTEND", Icon: Atom },
  { name: "Angular", tag: "FRONTEND", Icon: Triangle },
  { name: "Next.js", tag: "FRONTEND", Icon: Globe },
  { name: "TypeScript", tag: "LANGUAGE", Icon: FileCode },
  { name: "Docker", tag: "DEVOPS", Icon: Container },
];

// Category pills are derived from the tags already present on STACK above —
// no items are added, removed, or recategorized.
const CATEGORIES: { label: string; tags: string[] | null }[] = [
  { label: "AI", tags: ["AI"] },
  { label: "Frontend", tags: ["FRONTEND"] },
  { label: "Backend & Cloud", tags: ["BACKEND", "CLOUD"] },
  { label: "Database", tags: ["DATABASE"] },
  { label: "DevOps", tags: ["DEVOPS"] },
  { label: "Design", tags: ["DESIGN"] },
  { label: "Language", tags: ["LANGUAGE"] },
];

// Fixed positions (not random) so server/client markup always matches.
const PARTICLES = [
  { top: "12%", left: "8%", size: 5 },
  { top: "22%", left: "88%", size: 4 },
  { top: "68%", left: "5%", size: 3 },
  { top: "78%", left: "92%", size: 5 },
  { top: "40%", left: "50%", size: 3 },
  { top: "8%", left: "45%", size: 4 },
  { top: "88%", left: "60%", size: 4 },
  { top: "55%", left: "20%", size: 3 },
];

const gridVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.045 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 26, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

export default function TechMarquee() {
  const [activeIndex, setActiveIndex] = useState(0);

  const filtered = useMemo(() => {
    const tags = CATEGORIES[activeIndex].tags;
    return tags ? STACK.filter((item) => tags.includes(item.tag)) : STACK;
  }, [activeIndex]);

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        background: "#000000",
        paddingTop: "120px",
        paddingBottom: "140px",
        fontFamily: "Hanken Grotesk, -apple-system, sans-serif",
      }}
    >
      {/* Faint grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 30%, black 40%, transparent 90%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 30%, black 40%, transparent 90%)",
        }}
      />

      {/* Radial glows */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[560px] w-[900px] -translate-x-1/2 -translate-y-1/3"
        style={{ background: "radial-gradient(closest-side, rgba(77,38,124,0.35), transparent 75%)", filter: "blur(10px)" }}
      />
      <div
        className="pointer-events-none absolute bottom-0 right-[8%] h-[420px] w-[420px]"
        style={{ background: "radial-gradient(closest-side, rgba(201,16,76,0.14), transparent 75%)", filter: "blur(30px)" }}
      />
      <div
        className="pointer-events-none absolute bottom-[10%] left-[6%] h-[320px] w-[320px]"
        style={{ background: "radial-gradient(closest-side, rgba(239,128,16,0.10), transparent 75%)", filter: "blur(30px)" }}
      />

      {/* Noise overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Floating particles */}
      {PARTICLES.map((p, i) => (
        <motion.div
          key={i}
          className="pointer-events-none absolute rounded-full"
          style={{
            top: p.top,
            left: p.left,
            width: p.size,
            height: p.size,
            background: "rgba(255,255,255,0.5)",
            opacity: 0.08,
          }}
          animate={{ y: [0, -16, 0], opacity: [0.06, 0.14, 0.06] }}
          transition={{ duration: 6 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
        />
      ))}

      <div className="relative z-10 mx-auto max-w-[1280px] px-6">
        {/* Heading area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto flex max-w-[820px] flex-col items-center text-center"
          style={{ marginBottom: "80px" }}
        >
          <span
            className="mb-6 inline-block rounded-full px-5 py-2 text-[11px] font-bold uppercase"
            style={{
              letterSpacing: "0.22em",
              color: "rgba(255,255,255,0.85)",
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.14)",
              backdropFilter: "blur(6px)",
            }}
          >
            Technology Stack
          </span>

          <h2
            className="font-bold tracking-tight text-white"
            style={{ fontSize: "clamp(34px, 5.2vw, 64px)", lineHeight: 1.08, letterSpacing: "-0.02em" }}
          >
            <span style={{ color: "#FFFFFF" }}>
              The Technology Core
            </span>
          </h2>

          <p
            className="mt-6 max-w-[640px]"
            style={{ fontSize: "20px", lineHeight: 1.55, color: "rgba(255,255,255,0.75)" }}
          >
            Powering SIDPIN Digital with enterprise-grade technologies across AI, Cloud,
            Frontend, Backend, DevOps and Data.
          </p>
        </motion.div>

        {/* Category navigation */}
        <div className="mb-16 flex flex-wrap items-center justify-center gap-3">
          {CATEGORIES.map((cat, i) => {
            const active = activeIndex === i;
            return (
              <button
                key={cat.label}
                onClick={() => setActiveIndex(i)}
                className="relative rounded-full px-6 py-2.5 transition-colors duration-300"
                style={{
                  fontSize: "16px",
                  fontWeight: 500,
                  border: `1px solid ${active ? "transparent" : "rgba(255,255,255,0.16)"}`,
                  background: active ? "transparent" : "rgba(255,255,255,0.04)",
                }}
                onMouseEnter={(e) => {
                  if (!active) {
                    e.currentTarget.style.background = "rgba(255,255,255,0.09)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.32)";
                    e.currentTarget.style.boxShadow = "0 0 24px rgba(124,92,255,0.25)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!active) {
                    e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.16)";
                    e.currentTarget.style.boxShadow = "none";
                  }
                }}
              >
                {active && (
                  <motion.span
                    layoutId="tech-tab-active-bg"
                    className="absolute inset-0 rounded-full bg-white"
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                  />
                )}
                <span
                  className="relative z-10"
                  style={{ color: active ? "#111C3D" : "rgba(255,255,255,0.75)", fontWeight: active ? 700 : 500 }}
                >
                  {cat.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Technology grid */}
        <AnimatePresence mode="popLayout">
          <motion.div
            key={activeIndex}
            variants={gridVariants}
            initial="hidden"
            animate="show"
            exit={{ opacity: 0 }}
            className="flex flex-wrap justify-center"
            style={{ gap: "28px" }}
          >
            {filtered.map((item) => (
              <motion.div
                key={item.name}
                variants={cardVariants}
                className="group relative flex w-[calc(50%-14px)] flex-col items-center rounded-[22px] bg-white text-center transition-all duration-300 ease-out hover:-translate-y-2 sm:w-[calc(33.3333%-18.6667px)] md:w-[calc(25%-21px)] lg:w-[calc(16.6667%-23.3333px)]"
                style={{
                  padding: "40px 24px",
                  border: "1px solid rgba(17,28,61,0.06)",
                  boxShadow: "0 4px 24px rgba(8,19,39,0.10)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 24px 60px -12px rgba(77,38,124,0.35), 0 0 0 1px rgba(124,92,255,0.25)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 4px 24px rgba(8,19,39,0.10)";
                }}
              >
                {/* subtle gradient wash on hover */}
                <div
                  className="pointer-events-none absolute inset-0 rounded-[22px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ background: "linear-gradient(160deg, rgba(124,92,255,0.05), transparent 60%)" }}
                />

                <div
                  className="relative z-10 mb-6 flex items-center justify-center rounded-2xl transition-transform duration-300 ease-out group-hover:scale-[1.08]"
                  style={{
                    width: "72px",
                    height: "72px",
                    background: "linear-gradient(135deg, rgba(77,38,124,0.08), rgba(59,130,246,0.08))",
                    border: "1px solid rgba(77,38,124,0.12)",
                  }}
                >
                  <item.Icon size={30} strokeWidth={1.6} color="#4D267C" />
                </div>

                <p className="relative z-10 font-bold" style={{ fontSize: "20px", color: "#111C3D" }}>
                  {item.name}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <style>{`
        @media (prefers-reduced-motion: reduce) {
          * { animation: none !important; transition: none !important; }
        }
      `}</style>
    </section>
  );
}
