"use client";

import { useState } from "react";

const ecosystemData = [
  {
    title: "Precision Commercials",
    desc: "We produce world-class films that define brand identity. From concept to color grade, every frame is engineered for impact.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBiLmyMG-2YeZXqZgln-YhxSclfsKQrixNTd05Au0ZqNgIuy0zpPGaittoIri2T1v5lOhNQNLc2i_yY2v0xcNAZFmq44zRhG--U_81X9FD45kpUE16D_ZXE7RKqtiD9eXgb5TSBTF4O1LrnTVWsAYTNckaiy8EGQfHjcSHjC1BtoVhpt8_alMBnfd6Oif2AUjBo3SZPCmI2XY0dWQswNCgI5srhnoBGKCAc6e0LRO3EOoOp1jZREf26jm48GDy50Bwkf0BC0RzOX4u4",
  },
  {
    title: "Visual Assets",
    desc: "Still imagery with a narrative pulse. High-end photography for campaigns that demand absolute attention.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCdKJvVlOFupyFlwYGG4Kc0Yvax3uW02Q_B6DftqUtYbOeJmw6ZNviE_WkoeztLE8VBFCvQNU5aRfWynV7kk_3wpVCfl4xTRj58O52v-Cobihpl4yNMVA-C9BrHuzWOrqxwXOCnwEUn_-uTPcfnYQBKE6pOnpJsmBhca4tgnWkd6krWImwBnKFxtaQWuLolk1HvEwK9WLrDMzB9EAb27JHfqelyDlv0pxRcjpg1g9ARvX4EjBzyxqzH5zYgUaUN0dsm7b6Bu2jmxay-",
  },
  {
    title: "Digital Architecture",
    desc: "High-performance websites that bridge the gap between art and utility. Optimized for speed and premium aesthetics.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAl1tkvhHM3qZ4c9A2TEAByFmvBwqY1owqMc-Dst35Fl0eGtCpIP_BvBF0b44hCa4A8s74CkeN_mj5OK1sAHfvLLoDSotxG4agnsILkDT-C0NVgo8a_UFPrtpgmvbnUmCVERUufkGeIIb55vEsFLzvdR3pvIvk9Yl88w7TQI3YDCfM4BmgKEg3BfUzmx4nnrU5KoK8M7slHjvP7r7MUfUbKS1nCkUbwhosIXCHyT2fIqv6wzMF9UE2yZ3Psd9Y1rg0ji2p-6ubWYn-0",
  },
  {
    title: "Software Innovation",
    desc: "Custom CRM and internal tools designed to scale operations without friction. Code that works as hard as you do.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD3it1QuiGvijlsnnY-7_fftXi5S3WWBNW7K9r6_PsNKTs6MkmmSOLUd-P4MZHaTrgk_2fn_RSj4wTYV43zJ0GisLVYluHmqvQCI-YnX1RnzMNrSILdBAvar7_jwv5HhbnAq_7mXmWa8z_GfNrGH2bnP-6rnufgXzDr7gRxiU8FqzxVkqyvjFcLhlnNpBAyU9ydjg4jDiF35ZIgTNTSp96phv8J2DqJbxhtGjErI_2avfr6oKJsAiR42zrV_Gzc-uepU5zMSvX7RKdX",
  },
  {
    title: "App Ecosystems",
    desc: "Mobile experiences that live in the hands of your customers. Design-driven and technically flawless.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAbykJR3JxtE7C2cvcjyeptiMH0D_w6SRHquThIMswiOGDpPRjT3cBr8ePFkcfHH3my0vS1IBSFkBLcJlVoJrZEZLLgDZ-X-zOuoiFbxu8K2WIyhDnyiyOETwa0f__TKhLYZeYZpoOMuJYKGoZnMhjLbHo9TXMD55o788q8BmqRPYZKOI1PUmVbh2HlwWUlXPpe4gz3fyaV17Xd1yiArGDwDyHtapmWLnDB5-c2O944R6z_SfXF5qgBgUiqabqPwD4qoE8ffv8oegmg",
  },
  {
    title: "Intelligent Systems",
    desc: "Leveraging AI to automate the mundane and focus on the strategic. Growth through technical leverage.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuByZ5D5bG3-HI4_hegmUnR64F50mrUVCCX1YO4PpBdu_NABZ_VtpHER1LZJah_ol6cYo45ooY2gDdt69ORlH79paJYUMMeuLltkIVaj9-yqvWOHqXvpqFWJIzlnoGxybM2KiTgj3asj7e-iqqmUSsYwy3LRDPQx6atbDeH7GMMvcrTJptAFk5osvivWREJPWdhkN9r0jSaAluzYW2HqfaArbRMtGVwsQXDTkc0hbNbyODM9QIIpytvlgZB_fQPGQCCEo2JhUTkzVNul",
  },
  {
    title: "Growth Engines",
    desc: "Visibility is not an accident. Data-driven distribution systems to reach and convert your target audience.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCmMejim83uA5ytibxKK8F7VPG-iGEzFo7PKNsIRwHXwqBAaIqVySEJ9x5dWuw2uvgF7OHpB1u4rJYq-lcmqsdDYErjbXE4zML0PZQA_qML_ojNpzrvvM4Z9ISm1ApPhjePHLc8P5tXYGNV24pRZXs8afiLnHy6PcZYIF4rd0BBENq7HS8msrlKdWx1D8zRR30jAum9AjlTdWKkXByL9sdAmbqNF1bhZlL08iwz1n_-iPp1MHA4edHQmpAyU51z2fB6fW4H-elWhUZ4",
  },
];

const tabs = [
  { name: "Commercial Filmmaking", desc: "High-end production for global scale." },
  { name: "Photography & Content", desc: "Visual storytelling with surgical precision." },
  { name: "Website Development", desc: "Bespoke digital experiences built to convert." },
  { name: "Custom Software & CRM", desc: "Operational efficiency through code." },
  { name: "App Development", desc: "Intuitive mobile-first ecosystems." },
  { name: "AI & Automation", desc: "Intelligent growth systems." },
  { name: "SEO & Growth Marketing", desc: "Strategic distribution for dominance." },
];

export default function EcosystemTabs() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="flex flex-col lg:flex-row gap-20">
      {/* Left: Vertical Navigation Tabs */}
      <div className="w-full lg:w-1/3 flex flex-col space-y-2">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`text-left p-6 border-l-2 border-line hover:border-[#4169E1] transition-all group ${
              activeTab === index ? "tab-active" : ""
            }`}
          >
            <h3 className="font-['Hanken_Grotesk'] text-2xl font-medium group-hover:pl-4 transition-all">
              {tab.name}
            </h3>
            <p className="text-fg-2 mt-2 text-sm opacity-60">{tab.desc}</p>
          </button>
        ))}
      </div>

      {/* Right: Large Visual Canvas */}
      <div className="w-full lg:w-2/3 relative h-[600px] overflow-hidden rounded-xl border border-line/30">
        <div
          className="h-full w-full relative transition-all duration-700 ease-in-out"
          key={activeTab}
        >
          {/* Dynamic Content */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${ecosystemData[activeTab].img}')` }}
          />
          <div className="absolute inset-0 bg-[#0a1230]/40" />
          <div className="absolute bottom-0 left-0 p-12 w-full glass-card border-none">
            <h4 className="font-['Hanken_Grotesk'] text-3xl font-medium text-fg mb-4">
              {ecosystemData[activeTab].title}
            </h4>
            <p className="font-['Inter'] text-lg text-fg-2 max-w-xl">
              {ecosystemData[activeTab].desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
