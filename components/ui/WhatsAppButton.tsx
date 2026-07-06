"use client";

import { useState } from "react";
import { X } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/917453869244?text=" +
  encodeURIComponent(
    "Hi SIDPIN Digital! I'm interested in your services. Can we talk?"
  );

const WaIcon = ({ size = 22, color = "#ffffff" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

export default function WhatsAppButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-[95] flex flex-col items-end gap-4">
      {/* Chat panel */}
      {open && (
        <div className="wa-panel-in w-[330px] max-w-[calc(100vw-48px)] rounded-2xl overflow-hidden shadow-[0_24px_70px_rgba(0,0,0,0.4)] bg-white dark:bg-[#0F1626] border border-black/5 dark:border-[#243049]">
          {/* Header */}
          <div className="relative bg-[#4169E1] px-6 py-6 text-center">
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close WhatsApp chat panel"
              className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/20 hover:bg-white/35 flex items-center justify-center text-white cursor-pointer transition-colors"
            >
              <X size={15} />
            </button>
            <p className="font-['Inter'] text-[15px] leading-relaxed text-white font-medium">
              Hello! Our team is available on WhatsApp to answer your questions.
              Feel free to ask anything!
            </p>
          </div>

          {/* Single contact */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 px-5 py-5 hover:bg-black/[0.04] dark:hover:bg-white/[0.05] transition-colors"
          >
            <span className="relative shrink-0">
              <span className="w-[54px] h-[54px] rounded-xl bg-[#4169E1]/10 border border-[#4169E1]/25 flex items-center justify-center overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logo-mark.png"
                  alt="SIDPIN Digital"
                  className="w-9 h-9 object-contain"
                />
              </span>
              <span className="absolute -bottom-0.5 -left-0.5 w-3.5 h-3.5 rounded-full bg-[#22C55E] border-2 border-white dark:border-[#0F1626]" />
            </span>
            <span className="flex flex-col">
              <span className="font-['Hanken_Grotesk'] text-[17px] font-bold text-[#111111] dark:text-[#EEF2FB]">
                SIDPIN Business Head
              </span>
              <span className="font-['Inter'] text-[13px] text-[#666] dark:text-[#AAB4C9]">
                Sales &amp; Support
              </span>
              <span className="font-['Inter'] text-[12px] text-[#22C55E] mt-1">
                Available
              </span>
            </span>
            <span className="ml-auto">
              <WaIcon size={22} color="#25D366" />
            </span>
          </a>
        </div>
      )}

      {/* Pill button */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label="Chat with SIDPIN Digital on WhatsApp"
        aria-expanded={open}
        className="group relative flex items-center gap-3 rounded-full bg-[#25D366] pl-4 pr-6 py-3.5 cursor-pointer shadow-[0_10px_30px_rgba(37,211,102,0.45)] transition-transform duration-300 hover:scale-105"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] wa-pulse -z-10" />
        <WaIcon size={24} />
        <span className="font-['Inter'] text-[15px] font-semibold text-white whitespace-nowrap">
          Hi, how can I help?
        </span>
      </button>

      <style>{`
        .wa-pulse {
          animation: waPulse 2.2s ease-out infinite;
        }
        @keyframes waPulse {
          0% {
            transform: scale(1);
            opacity: 0.55;
          }
          70%, 100% {
            transform: scale(1.35);
            opacity: 0;
          }
        }
        .wa-panel-in {
          animation: waPanelIn 320ms cubic-bezier(0.34, 1.56, 0.64, 1) both;
          transform-origin: bottom right;
        }
        @keyframes waPanelIn {
          from {
            opacity: 0;
            transform: scale(0.85) translateY(12px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
