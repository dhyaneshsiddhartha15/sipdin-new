import type { Metadata } from "next";
import { Hanken_Grotesk, Inter, Geist } from "next/font/google";
import Script from "next/script";
import CookieConsent from "@/components/ui/CookieConsent";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import "./globals.css";

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken-grotesk",
  subsets: ["latin"],
  weight: ["500", "600"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  weight: ["500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SIDPIN Digital | Stories That Move Brands Forward",
  description: "We create cinematic content, digital experiences, and growth systems that help modern brands stand out, connect, and grow.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${hankenGrotesk.variable} ${inter.variable} ${geist.variable} h-full antialiased`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap"
          rel="stylesheet"
        />
        {/* No-flash theme: apply saved/system preference before first paint. */}
        <Script id="theme-init" strategy="beforeInteractive">
          {`(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.classList.toggle('dark',d);}catch(e){}})();`}
        </Script>
      </head>
      <body className="min-h-full flex flex-col bg-bg text-fg selection:bg-[#4169E1] selection:text-white">
        {children}
        <CookieConsent />
        <WhatsAppButton />
      </body>
    </html>
  );
}
