"use client";

import { useEffect, useState } from "react";

const TABS = ["Write Code", "Cloud Build", "Deployment", "Ship App"] as const;
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
      <div className="absolute -right-4 -top-4 z-10 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#4169E1] to-[#2E4FB8] text-[#FFFFFF] font-bold shadow-lg shadow-[#4169E1]/20">
        AI
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-6 px-2 mb-2">
        {TABS.map((tab, i) => (
          <button
            key={tab}
            onClick={() => setActive(i)}
            className={`font-['Geist'] text-xs tracking-widest transition-colors flex items-center gap-1.5 ${
              i === active ? "text-[#4169E1] font-bold" : "text-fg-2 font-medium"
            }`}
          >
            <span className="text-xs opacity-60">0{i + 1}</span>
            {tab}
            {i === active && (
              <span className="h-1.5 w-1.5 rounded-full bg-[#4169E1] animate-pulse" />
            )}
          </button>
        ))}
      </div>

      {/* Progress bar track */}
      <div className="flex gap-1 mb-4 px-2">
        {TABS.map((_, i) => (
          <div key={i} className="h-[5px] flex-1 rounded-full bg-fg/10 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#4169E1] to-[#6E8CFF] rounded-full shadow-[0_0_10px_rgba(65,105,225,0.6)] transition-[width] duration-100 ease-linear"
              style={{
                width: i < active ? "100%" : i === active ? `${progress}%` : "0%",
              }}
            />
          </div>
        ))}
      </div>

      {/* Panel */}
      <div className="relative rounded-2xl border border-[#4169E1]/20 bg-surface shadow-2xl min-h-[520px] overflow-hidden glass-card">
        <div
          key={active}
          className="animate-[fadeIn_0.4s_ease-out] h-full w-full"
        >
          {active === 0 && <WriteCodePanel />}
          {active === 1 && <CloudBuildPanel />}
          {active === 2 && <DeploymentPanel />}
          {active === 3 && <ShipAppPanel />}
        </div>
      </div>

      {/* System Active badge */}
      <div className="absolute -bottom-3 left-4 flex items-center gap-2 bg-surface border border-fg/10 rounded-full px-3 py-1.5 shadow-sm text-xs font-medium text-fg">
        <span className="h-2 w-2 rounded-full bg-[#4169E1] animate-pulse" />
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
    { n: 1, content: <>import {"{"} useNode {"}"} from <span className="text-[#4169E1]">'@app/core'</span></> },
    { n: 2, content: "" },
    { n: 3, content: <><span className="text-[#4169E1]">const</span> App = () =&gt; {"{"}</> },
    { n: 4, content: <>&nbsp;&nbsp;<span className="text-[#4169E1]">const</span> {"{"} build, deploy {"}"} = useNode()</> },
    { n: 5, content: <>&nbsp;&nbsp;<span className="text-[#4169E1]">const</span> theme = <span className="text-[#4169E1]">'premium'</span></> },
    { n: 6, content: "" },
    { n: 7, content: <>&nbsp;&nbsp;<span className="text-[#4169E1]">return</span> (</> },
    { n: 8, content: <>&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-[#4169E1]">Layout</span> theme={"{theme}"} /&gt;</> },
  ];

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center gap-2 px-8 py-4 border-b border-fg/10">
        <div className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-[#4169E1]" />
          <span className="h-3 w-3 rounded-full bg-green-400" />
        </div>
        <span className="ml-auto font-['Geist'] text-xs text-fg-2/60">main · App.tsx</span>
        <span className="ml-auto flex items-center gap-1 font-['Geist'] text-xs text-[#4169E1]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#4169E1]" /> LIVE
        </span>
      </div>
      <div className="flex-1 p-10 font-mono text-sm leading-8">
        {lines.map((l) => (
          <div key={l.n} className="flex gap-4">
            <span className="text-fg-2/30 select-none w-4 text-right">{l.n}</span>
            <span className="text-fg">{l.content}</span>
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
        <p className="font-['Geist'] text-xs text-fg-2/60 tracking-wide">CLOUD PIPELINE</p>
        <span className="font-['Geist'] text-xs font-medium text-[#4169E1] bg-[#4169E1]/10 px-2 py-0.5 rounded-full">Running</span>
      </div>
      <h3 className="font-['Hanken_Grotesk'] font-semibold text-fg mb-4">Build #247 · main</h3>

      <div className="flex justify-between font-['Geist'] text-xs text-fg-2/60 mb-1">
        <span>Progress</span>
        <span>30%</span>
      </div>
      <div className="h-1.5 rounded-full bg-fg/15 overflow-hidden mb-6">
        <div className="h-full w-[30%] rounded-full bg-gradient-to-r from-[#4169E1] via-[#5A6473] to-[#4169E1]" />
      </div>

      <div className="space-y-4">
        {steps.map((s) => (
          <div key={s.label} className="flex items-center gap-3">
            <span
              className={`h-7 w-7 rounded-full flex items-center justify-center font-['Geist'] text-xs ${
                s.status === "done"
                  ? "bg-[#4169E1]/10 text-[#4169E1]"
                  : s.status === "active"
                  ? "bg-[#4169E1]/10 text-[#4169E1]"
                  : "bg-fg/10 text-fg-2/30"
              }`}
            >
              {s.status === "done" ? "✓" : s.status === "active" ? "⚡" : "○"}
            </span>
            <div>
              <p className={`font-['Inter'] text-sm font-medium ${s.status === "pending" ? "text-fg-2/30" : "text-fg"}`}>
                {s.label}
              </p>
              <p className="font-['Geist'] text-xs text-fg-2/60">{s.sub}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-3 mt-6">
        {[["Duration", "1m 34s"], ["Bundle", "284 KB"], ["Score", "99/100"]].map(([k, v]) => (
          <div key={k} className="rounded-xl border border-line bg-surface-2 p-3 text-center">
            <p className="font-['Geist'] text-[10px] font-semibold text-fg-2 tracking-[0.12em]">{(k as string).toUpperCase()}</p>
            <p className="font-['Inter'] text-base font-bold text-fg mt-0.5">{v}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function DeploymentPanel() {
  const nodes = [
    { name: "node-01", region: "US-East", pods: 4 },
    { name: "node-02", region: "EU-West", pods: 4 },
    { name: "node-03", region: "AP-South", pods: 4 },
  ];

  return (
    <div className="p-10">
      <div className="flex items-center justify-between mb-1">
        <p className="font-['Geist'] text-xs text-fg-2 tracking-wide">CLUSTER ROLLOUT</p>
        <span className="flex items-center gap-1.5 font-['Geist'] text-xs font-medium text-green-500 bg-green-500/10 px-2.5 py-0.5 rounded-full">
          <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
          LIVE
        </span>
      </div>
      <h3 className="font-['Hanken_Grotesk'] text-2xl font-bold text-fg mb-5">
        Deploying to <span className="gradient-text">Production Cluster</span>
      </h3>

      {/* Deploy terminal */}
      <div className="rounded-xl border border-line bg-fg/[0.03] px-5 py-4 font-mono text-xs leading-6 mb-6">
        <p>
          <span className="text-[#4169E1]">$</span> sidpin deploy{" "}
          <span className="text-fg-2">--target</span>{" "}
          <span className="text-green-500">cluster</span>
        </p>
        <p className="text-fg-2">→ building image · pushing to registry <span className="text-green-500">✓ done</span></p>
        <p className="text-fg-2">→ rolling out to <span className="text-fg">production cluster</span> <span className="text-green-500">✓ healthy</span></p>
        <p className="flex items-center gap-2 text-fg">
          ✓ Deployed · <span className="text-[#4169E1]">https://app.sidpin.io</span>
          <span className="inline-block h-3.5 w-1.5 animate-pulse bg-[#4169E1] align-middle" />
        </p>
      </div>

      {/* Cluster nodes */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
        {nodes.map((nd) => (
          <div key={nd.name} className="rounded-xl border border-line bg-surface-2 p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-xs font-semibold text-fg">{nd.name}</span>
              <span className="flex items-center gap-1 text-[10px] font-medium text-green-500">
                <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                Healthy
              </span>
            </div>
            <p className="font-['Geist'] text-[10px] text-fg-2 tracking-wide">{nd.region.toUpperCase()}</p>
            <p className="font-['Inter'] text-sm font-bold text-[#4169E1] mt-0.5">{nd.pods} pods running</p>
          </div>
        ))}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-3">
        {[["Regions", "3"], ["Pods", "12"], ["Replicas", "x3"], ["Health", "100%"]].map(([k, v]) => (
          <div key={k} className="rounded-xl border border-line bg-surface-2 p-3 text-center">
            <p className="font-['Geist'] text-[10px] font-semibold text-fg-2 tracking-[0.12em]">{(k as string).toUpperCase()}</p>
            <p className="font-['Inter'] text-base font-bold text-fg mt-0.5">{v}</p>
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
      <div className="mx-auto w-44 rounded-[1.5rem] border border-fg/20 p-3 shadow-sm bg-surface">
        <div className="flex justify-between font-['Geist'] text-[10px] text-fg-2/60 mb-2">
          <span>9:41</span>
          <span>●●●</span>
        </div>
        <p className="font-['Geist'] text-[10px] text-fg-2/60">STATUS</p>
        <p className="font-['Inter'] text-sm font-semibold mb-2 text-fg">Live.</p>
        <div className="rounded-lg bg-gradient-to-br from-[#4169E1]/25 to-[#2E4FB8]/15 border border-[#4169E1]/20 p-2.5 mb-2">
          <p className="font-['Geist'] text-[10px] font-semibold text-[#4169E1]">ENGINE</p>
          <p className="font-['Inter'] text-xs font-bold text-fg">Optimized</p>
          <div className="h-1.5 rounded-full bg-fg/10 mt-1.5 overflow-hidden">
            <div className="h-full w-[82%] bg-gradient-to-r from-[#4169E1] to-[#6E8CFF] rounded-full" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-1.5">
          {["Global", "Assets", "Speed", "Vault"].map((t) => (
            <div key={t} className="rounded-md bg-fg/10 font-['Geist'] text-[10px] text-center py-1.5 font-medium text-fg-2">
              {t.toUpperCase()}
            </div>
          ))}
        </div>
      </div>

      {/* copy + stats */}
      <div>
        <span className="inline-flex items-center gap-1 font-['Geist'] text-xs font-medium text-[#4169E1] bg-[#4169E1]/10 px-2 py-0.5 rounded-full mb-3">
          <span className="h-1.5 w-1.5 rounded-full bg-[#4169E1]" /> LIVE IN PRODUCTION
        </span>
        <h3 className="font-['Hanken_Grotesk'] text-3xl md:text-4xl font-bold text-fg">
          Vision Made <span className="gradient-text">Real.</span>
        </h3>
        <p className="font-['Inter'] text-base text-fg-2 mt-2 mb-5">
          Engineered for maximum performance, security, and unlimited scale.
        </p>
        <div className="grid grid-cols-2 gap-3">
          {[
            ["Latency", "< 60ms"],
            ["Security", "Lvl 10"],
            ["Scalability", "Auto"],
            ["Uptime", "99.9%"],
          ].map(([k, v]) => (
            <div
              key={k}
              className="rounded-xl border border-line bg-surface-2 p-4 transition-all hover:border-[#4169E1]/40 hover:shadow-[0_10px_24px_-12px_rgba(65,105,225,0.5)]"
            >
              <p className="font-['Geist'] text-[10px] font-semibold text-fg-2 tracking-[0.15em]">{(k as string).toUpperCase()}</p>
              <p className="font-['Inter'] text-xl font-bold text-[#4169E1] mt-0.5">{v}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
