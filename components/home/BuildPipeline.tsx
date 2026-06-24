"use client";

import { useEffect, useState } from "react";

const TABS = ["Write Code", "Cloud Build", "Ship App"] as const;
const TAB_DURATION = 4000;

export default function BuildPipeline() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(0);
    const start = Date.now();
    const interval = setInterval(() => {
      const pct = Math.min(100, ((Date.now() - start) / TAB_DURATION) * 100);
      setProgress(pct);
      if (pct >= 100) {
        setActive((a) => (a + 1) % TABS.length);
      }
    }, 30);
    return () => clearInterval(interval);
  }, [active]);

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      {/* Floating AI badge */}
      <div className="absolute -right-4 -top-4 z-10 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#e9c349] to-[#c9a329] text-[#111415] font-bold shadow-lg shadow-[#e9c349]/20">
        AI
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-6 px-2 mb-2">
        {TABS.map((tab, i) => (
          <button
            key={tab}
            onClick={() => setActive(i)}
            className={`font-['Geist'] text-xs font-medium tracking-widest transition-colors flex items-center gap-1.5 ${
              i === active ? "text-[#e9c349]" : "text-[#cfc4c5]/60"
            }`}
          >
            <span className="text-xs opacity-60">0{i + 1}</span>
            {tab}
            {i === active && (
              <span className="h-1.5 w-1.5 rounded-full bg-[#e9c349] animate-pulse" />
            )}
          </button>
        ))}
      </div>

      {/* Progress bar track */}
      <div className="flex gap-1 mb-4 px-2">
        {TABS.map((_, i) => (
          <div key={i} className="h-[3px] flex-1 rounded-full bg-[#e2e2e4]/20 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#e9c349] to-[#cfc4c5] rounded-full transition-[width] duration-100 ease-linear"
              style={{
                width: i < active ? "100%" : i === active ? `${progress}%` : "0%",
              }}
            />
          </div>
        ))}
      </div>

      {/* Panel */}
      <div className="relative rounded-2xl border border-[#e2e2e4]/10 bg-[#111415] shadow-2xl min-h-[520px] overflow-hidden glass-card">
        <div
          key={active}
          className="animate-[fadeIn_0.4s_ease-out] h-full w-full"
        >
          {active === 0 && <WriteCodePanel />}
          {active === 1 && <CloudBuildPanel />}
          {active === 2 && <ShipAppPanel />}
        </div>
      </div>

      {/* System Active badge */}
      <div className="absolute -bottom-3 left-4 flex items-center gap-2 bg-[#111415] border border-[#e2e2e4]/10 rounded-full px-3 py-1.5 shadow-sm text-xs font-medium text-[#e2e2e4]">
        <span className="h-2 w-2 rounded-full bg-[#e9c349] animate-pulse" />
        System Active
      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

function WriteCodePanel() {
  const lines = [
    { n: 1, content: <>import {"{"} useNode {"}"} from <span className="text-[#e9c349]">'@app/core'</span></> },
    { n: 2, content: "" },
    { n: 3, content: <><span className="text-[#e9c349]">const</span> App = () =&gt; {"{"}</> },
    { n: 4, content: <>&nbsp;&nbsp;<span className="text-[#e9c349]">const</span> {"{"} build, deploy {"}"} = useNode()</> },
    { n: 5, content: <>&nbsp;&nbsp;<span className="text-[#e9c349]">const</span> theme = <span className="text-[#e9c349]">'premium'</span></> },
    { n: 6, content: "" },
    { n: 7, content: <>&nbsp;&nbsp;<span className="text-[#e9c349]">return</span> (</> },
    { n: 8, content: <>&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-[#e9c349]">Layout</span> theme={"{theme}"} /&gt;</> },
  ];

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center gap-2 px-8 py-4 border-b border-[#e2e2e4]/10">
        <div className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-yellow-400" />
          <span className="h-3 w-3 rounded-full bg-green-400" />
        </div>
        <span className="ml-auto font-['Geist'] text-xs text-[#cfc4c5]/60">main · App.tsx</span>
        <span className="ml-auto flex items-center gap-1 font-['Geist'] text-xs text-[#e9c349]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#e9c349]" /> LIVE
        </span>
      </div>
      <div className="flex-1 p-10 font-mono text-sm leading-8">
        {lines.map((l) => (
          <div key={l.n} className="flex gap-4">
            <span className="text-[#cfc4c5]/30 select-none w-4 text-right">{l.n}</span>
            <span className="text-[#e2e2e4]">{l.content}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function CloudBuildPanel() {
  const steps = [
    { label: "Installing dependencies", sub: "847 packages", status: "done" },
    { label: "Compiling TypeScript", sub: "94 files", status: "done" },
    { label: "Bundling & optimizing", sub: "Tree-shaking active", status: "active" },
    { label: "Security audit", sub: "Scanning...", status: "pending" },
    { label: "Deploying to cloud", sub: "3 regions", status: "pending" },
  ];

  return (
    <div className="p-10">
      <div className="flex items-center justify-between mb-1">
        <p className="font-['Geist'] text-xs text-[#cfc4c5]/60 tracking-wide">CLOUD PIPELINE</p>
        <span className="font-['Geist'] text-xs font-medium text-[#e9c349] bg-[#e9c349]/10 px-2 py-0.5 rounded-full">Running</span>
      </div>
      <h3 className="font-['Hanken_Grotesk'] font-semibold text-[#e2e2e4] mb-4">Build #247 · main</h3>

      <div className="flex justify-between font-['Geist'] text-xs text-[#cfc4c5]/60 mb-1">
        <span>Progress</span>
        <span>30%</span>
      </div>
      <div className="h-1.5 rounded-full bg-[#e2e2e4]/20 overflow-hidden mb-6">
        <div className="h-full w-[30%] rounded-full bg-gradient-to-r from-[#e9c349] via-[#cfc4c5] to-[#e9c349]" />
      </div>

      <div className="space-y-4">
        {steps.map((s) => (
          <div key={s.label} className="flex items-center gap-3">
            <span
              className={`h-7 w-7 rounded-full flex items-center justify-center font-['Geist'] text-xs ${
                s.status === "done"
                  ? "bg-[#e9c349]/10 text-[#e9c349]"
                  : s.status === "active"
                  ? "bg-[#e9c349]/10 text-[#e9c349]"
                  : "bg-[#e2e2e4]/10 text-[#cfc4c5]/30"
              }`}
            >
              {s.status === "done" ? "✓" : s.status === "active" ? "⚡" : "○"}
            </span>
            <div>
              <p className={`font-['Inter'] text-sm font-medium ${s.status === "pending" ? "text-[#cfc4c5]/30" : "text-[#e2e2e4]"}`}>
                {s.label}
              </p>
              <p className="font-['Geist'] text-xs text-[#cfc4c5]/60">{s.sub}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-3 mt-6">
        {[["Duration", "1m 34s"], ["Bundle", "284 KB"], ["Score", "99/100"]].map(([k, v]) => (
          <div key={k} className="rounded-lg border border-[#e2e2e4]/10 bg-[#111415] p-3 text-center">
            <p className="font-['Geist'] text-[10px] text-[#cfc4c5]/60 tracking-wide">{(k as string).toUpperCase()}</p>
            <p className="font-['Inter'] text-sm font-semibold text-[#e2e2e4]">{v}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ShipAppPanel() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-10 items-center">
      {/* phone mockup */}
      <div className="mx-auto w-44 rounded-[1.5rem] border border-[#e2e2e4]/20 p-3 shadow-sm bg-[#111415]">
        <div className="flex justify-between font-['Geist'] text-[10px] text-[#cfc4c5]/60 mb-2">
          <span>9:41</span>
          <span>●●●</span>
        </div>
        <p className="font-['Geist'] text-[10px] text-[#cfc4c5]/60">STATUS</p>
        <p className="font-['Inter'] text-sm font-semibold mb-2 text-[#e2e2e4]">Live.</p>
        <div className="rounded-lg bg-gradient-to-br from-[#e9c349]/20 to-[#c9a329]/10 p-2 mb-2">
          <p className="font-['Geist'] text-[10px] text-[#e9c349]">ENGINE</p>
          <p className="font-['Inter'] text-xs font-semibold text-[#e2e2e4]">Optimized</p>
          <div className="h-1 rounded-full bg-[#e2e2e4]/20 mt-1 overflow-hidden">
            <div className="h-full w-[82%] bg-[#e9c349] rounded-full" />
          </div>
        through:
        </div>
        <div className="grid grid-cols-2 gap-1.5">
          {["Global", "Assets", "Speed", "Vault"].map((t) => (
            <div key={t} className="rounded-md bg-[#e2e2e4]/10 font-['Geist'] text-[10px] text-center py-1.5 font-medium text-[#cfc4c5]">
              {t.toUpperCase()}
            </div>
          ))}
        </div>
      </div>

      {/* copy + stats */}
      <div>
        <span className="inline-flex items-center gap-1 font-['Geist'] text-xs font-medium text-[#e9c349] bg-[#e9c349]/10 px-2 py-0.5 rounded-full mb-3">
          <span className="h-1.5 w-1.5 rounded-full bg-[#e9c349]" /> LIVE IN PRODUCTION
        </span>
        <h3 className="font-['Hanken_Grotesk'] text-2xl font-bold text-[#e2e2e4]">
          Vision Made <span className="text-[#e9c349]">Real.</span>
        </h3>
        <p className="font-['Inter'] text-sm text-[#cfc4c5]/70 mt-1 mb-4">
          Engineered for maximum performance, security, and unlimited scale.
        </p>
        <div className="grid grid-cols-2 gap-3">
          {[
            ["Latency", "< 60ms", "text-[#e9c349]"],
            ["Security", "Lvl 10", "text-[#e9c349]"],
            ["Scalability", "Auto", "text-[#e9c349]"],
            ["Uptime", "99.9%", "text-[#e9c349]"],
          ].map(([k, v, color]) => (
            <div key={k} className="rounded-lg border border-[#e2e2e4]/10 bg-[#111415] p-3">
              <p className="font-['Geist'] text-[10px] text-[#cfc4c5]/60 tracking-wide">{(k as string).toUpperCase()}</p>
              <p className={`font-['Inter'] text-sm font-bold ${color}`}>{v}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
