import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProjectTypeSelector from "@/components/contact/ProjectTypeSelector";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact SIDPIN | Let's Build Something Worth Remembering",
  description:
    "Every great project starts with a conversation. Book a discovery call or tell us about your vision.",
};

const serviceCards = [
  {
    title: "Content Production",
    desc: "Elevating narratives through cinematic brand films, commercial visual storytelling, and high-fidelity production.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDIWD9y3RE2OcC8YMhAafwDd4qzqk3_gzwbcIVF6n85b8eKAqyvpmUnpKFugUXrQSHEANdy8xqNrX7b4z6qsZeNPWZlkx0TQBwohVknQJqbraNwp5zHdjA3k1YLdnkcm7dM-prdOI1BsYUszdg5GyWKVZGyJ0-WQoP52k9pGqAYuvOIK0LXq0yIGwJyLMKMndjWnfQ9dUag9yV4eXxlV_BWIPB2qN78tU7bJfnTVChmuDRzKVdZ_SQd4pQDN3TYbQ9xIagS9pZLg-Ts",
    alt: "Professional film production set with premium cameras and studio lighting",
  },
  {
    title: "Digital Experiences",
    desc: "Crafting immersive web environments and mobile applications that prioritize user emotion and technical performance.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA8OqudBHv7v6bmZxccP4Da2aXthBJa0ww5Hyfnjtt6rxA8TL3tbbaTKJKYgO_xHH_PrMEBY0IjEX3J8ctr23o-rWRHeMvGVwUd_7tNl0g0ZC9oDOl9VGBDJ7-UNmIRaea_s-7aoOU-K5Ygg_7A1dcxJ60XUYzLkQ4_2nTQuVGCMeMt23k_o6UaFrOhFe-w8O8KiwMF2_5ZrPeCpundytYmhDwmdw1kYiT3Nr_WqfdL8O8_h6kYguvNzp3joUpiwK3rf3rlxYHCmsy-",
    alt: "Sleek digital interface with glassmorphism design elements",
  },
  {
    title: "Business Systems",
    desc: "Designing custom CRM architectures and internal infrastructures that scale with enterprise-level demands.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAJUT3oiWZ8X03viXqKGOlI_fzT4mQ_7zOzoJPv4Vw0kQtWjpNrOKNX_Gov8iKbp_p3LxBCgbpa-yeXpSy0AkaaXob7jZBdHl65ZdJxKhYIeOu3ZiV6988aeChu_2jrL_EAwziIK9syDUXwMTLSGQBrLJrybaXxyodiHe5tmfuxFisRrk3PNWcOeCrMkNlJgs8assZc5xrpjsBb4l6N0udgpxGDpBFe03UCtJLLVSUBmPOVjmdubcf312DbyiwpiClX1C5dtMTyBHp1",
    alt: "High-end corporate command center with data visualizations",
  },
  {
    title: "Growth Marketing",
    desc: "Strategic distribution and SEO optimization designed to amplify reach and convert viewers into loyal brand advocates.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCkq8BzbOJpdUNNJUyrY0m9AOYRufzqAKrt4tnBPrEC4Yub-6FzjzOFByms58bd3M-Xd8C87eOOSpfjCYV3mFZybnlQhQWQKQEfLgwb_axhSK1NIevvuu975zFWnzD4ViXc3ABlruLy8yJJawozA6SH_0CJ_fMZd0LKTgbKu6Z5W5n6WnkBYyMDkXYCaN0R6fb1S5ZqbIs6zbp7gdeTJyEUI_nVNm3D7vPc61cNG4_XrgVpBDBKpYizOd5ArZzj7qoI9CPkWXcbBZzJ",
    alt: "Abstract visualization of growth and connectivity with golden patterns",
  },
];

const metrics = [
  { value: "500+", label: "Projects Delivered" },
  { value: "100M+", label: "Organic Views Generated" },
  { value: "50+", label: "Global Brands Partnered" },
];

const connectLinks = [
  {
    icon: "phone_iphone",
    title: "+1 (888) SIDPIN-0",
    label: "Call Us",
    href: "tel:+18887437246",
  },
  {
    icon: "alternate_email",
    title: "hello@sidpin.com",
    label: "Email Us",
    href: "mailto:hello@sidpin.com",
  },
  {
    icon: "chat",
    title: "WhatsApp Direct",
    label: "Fast Response",
    href: "#",
  },
  {
    icon: "camera",
    title: "@sidpin_studio",
    label: "Instagram",
    href: "#",
  },
  {
    icon: "play_circle",
    title: "SIDPIN Production",
    label: "YouTube",
    href: "#",
  },
  {
    icon: "hub",
    title: "SIDPIN Enterprise",
    label: "LinkedIn",
    href: "#",
  },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="bg-bg">
        {/* Hero */}
        <header className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{
              backgroundImage:
                "url('/stitch-exports/contact-screenshot.png')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black z-0" />
          <div className="relative z-10 text-center px-[24px] max-w-4xl mx-auto space-y-12">
            <h1 className="font-['Hanken_Grotesk'] text-[48px] md:text-[80px] font-semibold leading-[1.1] tracking-tight text-fg">
              Let&apos;s Build Something Worth Remembering.
            </h1>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <button
                type="button"
                className="w-full md:w-auto bg-[#4169E1] text-[#FFFFFF] px-12 py-5 font-['Geist'] text-xs font-medium tracking-[0.2em] uppercase hover:shadow-[0_0_20px_rgba(65, 105, 225,0.3)] transition-all duration-500"
              >
                Book A Discovery Call
              </button>
              <button
                type="button"
                className="w-full md:w-auto border border-fg/20 text-fg px-12 py-5 font-['Geist'] text-xs font-medium tracking-[0.2em] uppercase hover:bg-fg/5 transition-all duration-500"
              >
                Start A Project
              </button>
            </div>
          </div>
        </header>

        {/* Intro */}
        <section className="py-40 bg-bg">
          <div className="max-w-[1440px] mx-auto px-[24px] md:px-[80px]">
            <div className="max-w-4xl">
              <p className="font-['Geist'] text-xs font-medium text-[#4169E1] tracking-[0.3em] uppercase mb-8">
                Introduction
              </p>
              <h2 className="font-['Hanken_Grotesk'] text-[32px] md:text-[64px] font-semibold leading-tight text-fg">
                Every Great Project Starts With A Conversation.
              </h2>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-40 bg-surface-2">
          <div className="max-w-[1440px] mx-auto px-[24px] md:px-[80px]">
            <h3 className="font-['Geist'] text-xs font-medium text-fg/40 tracking-[0.3em] uppercase mb-16">
              How Can We Help?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px]">
              {serviceCards.map((card) => (
                <div
                  key={card.title}
                  className="group relative aspect-square md:aspect-[4/5] overflow-hidden bg-bg beveled-glass reveal-on-hover"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-60"
                    style={{ backgroundImage: `url('${card.image}')` }}
                    role="img"
                    aria-label={card.alt}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  <div className="absolute bottom-12 left-12 right-12">
                    <h4 className="font-['Hanken_Grotesk'] text-[32px] md:text-[48px] font-medium tracking-[0.05em] text-fg mb-4">
                      {card.title}
                    </h4>
                    <div className="hidden-content font-['Inter'] text-fg/70">
                      {card.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ProjectTypeSelector />
        <ContactForm />

        {/* Metrics */}
        <section className="py-40 bg-bg">
          <div className="max-w-[1440px] mx-auto px-[24px] md:px-[80px]">
            <h3 className="font-['Geist'] text-xs font-medium text-fg/40 tracking-[0.3em] uppercase text-center mb-24">
              Why Brands Work With SIDPIN
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {metrics.map((metric) => (
                <div key={metric.label} className="text-center space-y-4 group">
                  <span className="block font-['Hanken_Grotesk'] text-[80px] md:text-[100px] text-fg leading-none group-hover:text-[#4169E1] transition-colors duration-500">
                    {metric.value}
                  </span>
                  <span className="block font-['Geist'] text-xs font-medium text-fg/60 tracking-widest uppercase">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ways To Connect */}
        <section className="py-40 bg-surface-2">
          <div className="max-w-[1440px] mx-auto px-[24px] md:px-[80px]">
            <h3 className="font-['Geist'] text-xs font-medium text-fg/40 tracking-[0.3em] uppercase mb-16 text-center">
              Ways To Connect
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[32px]">
              {connectLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="glass-card group p-12 text-center hover:bg-fg/5 transition-all"
                >
                  <span className="material-symbols-outlined text-4xl mb-6 block text-[#4169E1]">
                    {link.icon}
                  </span>
                  <span className="block font-['Hanken_Grotesk'] text-[32px] font-medium text-fg mb-2">
                    {link.title}
                  </span>
                  <span className="block font-['Geist'] text-xs font-medium text-fg/40 tracking-widest uppercase">
                    {link.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="relative min-h-[819px] flex items-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-40"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA-y9TXXggvHcNIgp2snrr6VMiCBFmnXcEGau1w2vM78558BHN1lcmAhgMQIW3IeyytcrxcvwtYTXNreILrFn0SPfHTaGyEoSXaFUvTOstVrX9n7iMPI2Cek_KzZnyYVs9IJOrLPnfGeshZofM2PbvazLhRNBKghosA86L1MZYk6kgUIFIhoURYvpm3hebhWmJM99XxZ6fzpD9rbdkhN-P7Qn8VKJ-96i4-ZDZUJctF9Iim4hG3HX2vCHDdRwCeS9uC1mv56IOsmWP5')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
          <div className="relative z-10 max-w-[1440px] mx-auto px-[24px] md:px-[80px]">
            <div className="max-w-2xl space-y-8">
              <p className="font-['Geist'] text-xs font-medium text-[#4169E1] tracking-[0.3em] uppercase">
                The Vision
              </p>
              <h2 className="font-['Hanken_Grotesk'] text-[32px] md:text-[72px] font-semibold leading-tight text-fg">
                Where Creativity Meets Growth.
              </h2>
              <p className="font-['Inter'] text-lg text-fg/70 leading-relaxed max-w-lg">
                We don&apos;t just make content; we engineer legacies. Your brand
                is a story waiting to be told with precision, depth, and
                unwavering quality.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="min-h-screen flex flex-col items-center justify-center bg-bg px-[24px] text-center relative overflow-hidden">
          <div className="relative z-10 space-y-16">
            <h2 className="font-['Hanken_Grotesk'] text-[48px] md:text-[80px] font-semibold leading-[1.1] tracking-tight text-fg">
              Your Next Chapter Starts Here.
            </h2>
            <div className="flex flex-col md:flex-row gap-8 justify-center">
              <button
                type="button"
                className="bg-[#4169E1] text-[#FFFFFF] px-16 py-6 font-['Geist'] text-xs font-medium tracking-[0.2em] uppercase hover:scale-105 transition-all duration-500"
              >
                Book A Discovery Call
              </button>
              <button
                type="button"
                className="border border-fg/40 text-fg px-16 py-6 font-['Geist'] text-xs font-medium tracking-[0.2em] uppercase hover:bg-fg hover:text-bg transition-all duration-500"
              >
                Start Your Project
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
