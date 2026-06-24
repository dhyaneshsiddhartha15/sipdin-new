import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Reveal from "@/components/studio/Reveal";
import ParallaxHero from "@/components/about/ParallaxHero";

export const metadata: Metadata = {
  title: "The Vision Behind SIDPIN | Cinematic Precision",
  description:
    "Beyond the lens: SIDPIN merges cinematic storytelling with technical precision and conversion engineering to help brands become impossible to ignore.",
};

const originImages = [
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDnncFdFhMOEZGq2ya3CpKADdTKxDlduqpTeT6BKjtW_0LY3spqAbuC3o05usaLU5fAyexjBVUk5W7u4F8691AK5KpBMHsoTOSwnu2zBLL2r-fvL30AcxKHko0YUMeWgL659qJtY2KzBQkNh00A01e-R9dJyd5SjrBBBJeHNfpQOJOthJ0ZmccO0f-s022ptmyfr_E7PxJV7E_f0sMg3eJmzMk4gW1MHvK9NaPoXaRMQ0igCCqNAoG4WaTH8nWoy3VmRfo73NZHivHD",
    alt: "Behind-the-scenes film crew operating a camera crane",
    className: "aspect-square",
    delay: 300,
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBr9WpRGrLPThgXtg6OKTbQjAsLjwYzEt8qbqmzDxDBPu3QOJAoiP1gI7OcEHS8UaMrHfdr-Yi832o6OWASIiyAL8_JiCTVnLjDDEUf2yRb7FLtaH53wFX_GQ2WnqZtJzgtO8f7V4wgBxYK0CjnzCXiVl55Ge-tdxKVdgUuvotMn3yp5VnKMQv1g54vTwgQNbhPP5Ju_BuZSCHOQDaD4n68xYLaQhybB_a2C6JUBqtGP2sXbsfNPG3SZo2bwqTVbLxBYPrUfrAVJgin",
    alt: "Modern editing suite with cinematic color grading monitors",
    className: "aspect-[4/5]",
    delay: 500,
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBUKhl7WjZztNPlo39vDQLfq1otJburzZ90ppiA3LrnCLVzHx2r1T91KRU5fc3wGmf5HbNfZ9eiNmBwxSHq4G9QykYQUyMIqI4PXSyICBX1_zr6MtvYP7z7E_Zq4hMILWUqwrdeSC1dFfLj3cKMxlJvcBIwZbFfokG3HgkJ2bZUlbvRWwQhjb6IwVTYAIuaZaobPH1DhRyNlBzG1WAHBkTWBwaUnqylvtPq5MqoW-NdRD5n0bzmcMcGRORIyeHQrfOdpDKaJlfN7pwS",
    alt: "Director's hands on a high-end color grading control surface",
    className: "aspect-[4/5]",
    delay: 400,
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCVjLPsSdZrWHr7o9ckdw-IIh-ageXrOjhUilwK8iVNinUdxiNYwhtADkgFUGFi-i5FVXMQ5ibrNMVzlGQ-Xl7Tq9maeLEso3jEuNzmy1EEMZuySdfL2MtLWedN4B4iBSJkiHJGcg8f3ust3etCtNu5EiHGcwKa5TfmPzW4R_xfP1EOLpuoSCxQ-HWQIkQIxolZnaMcnZmSNjEl4Y21IUxYSvAiRHyxUhRoeE6dcY8fTVbRFdtgatYuA9CRa6smLe6G-MituQBfkmMD",
    alt: "Expansive coastal landscape at dawn captured cinematically",
    className: "aspect-square",
    delay: 600,
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#111415]">
        <ParallaxHero />

        {/* The Problem */}
        <section className="py-40 px-[24px] md:px-[80px] max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-[32px] items-center">
            <div className="md:col-span-8">
              <Reveal>
                <h2 className="font-['Hanken_Grotesk'] text-[32px] md:text-[48px] font-medium tracking-[0.05em] text-[#e2e2e4] mb-12">
                  Most agencies sell services... <br />
                  <span className="text-[#767575]">
                    But businesses don&apos;t grow because they bought a
                    website.
                  </span>
                </h2>
              </Reveal>
              <Reveal delay={100}>
                <div className="w-24 h-px bg-[#e9c349] mb-12" />
              </Reveal>
              <Reveal delay={300}>
                <p className="font-['Hanken_Grotesk'] text-[32px] md:text-[48px] font-medium text-[#e9c349] leading-tight">
                  They grow because they built trust.
                </p>
              </Reveal>
            </div>
            <div className="md:col-span-4 hidden md:block">
              <Reveal delay={200}>
                <div className="aspect-[3/4] glass-panel p-1 relative overflow-hidden">
                  <img
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC25mw_a5_9lpaXYPWzEChUrRaqmTN-mnr_5RXW2FXFb7NJvirUWwzjnUu3qNvFzVTNlXqOlyPFis7jBmN_PQ61tq3spAJwfGhLIHOeYSO0ncp7RQlWxJa4gsAh8U-YCGWsRemUPNVyjCHzpajq3rV0KbMwVCGkC-BT9kb9GISU7rhuYU2oV3neaIda16o0CcHRjhHO_OZxW9U6XsVLnmpfaZL0cicyakIBlLnPvnzN61-5RtaRAhOiE74F1kTb36gQRP8EKX4NtW84"
                    alt="Macro close-up of a camera lens aperture with golden light"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* The Origin */}
        <section className="py-40 bg-[#0c0e10]">
          <div className="px-[24px] md:px-[80px] max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
              <div className="space-y-12">
                <div className="space-y-6">
                  <Reveal>
                    <span className="font-['Geist'] text-xs font-medium tracking-[0.2em] uppercase text-[#e9c349] block">
                      Our Origin
                    </span>
                  </Reveal>
                  <Reveal delay={100}>
                    <h3 className="font-['Hanken_Grotesk'] text-[32px] md:text-[48px] font-medium tracking-[0.05em] text-[#e2e2e4]">
                      Founded by Anand Siddhartha.
                    </h3>
                  </Reveal>
                </div>
                <Reveal delay={200}>
                  <div className="space-y-8 font-['Inter'] text-lg text-[#e2e2e4]/80">
                    <p>
                      It began on the sets of commercial films. Watching how
                      light, sound, and narrative structure could shift human
                      emotion in seconds. But Anand noticed a disconnect: brands
                      had beautiful visuals, yet their business engines were
                      stalling.
                    </p>
                    <p>
                      SIDPIN was born from the realization that cinematic
                      storytelling is the most powerful trust-building tool ever
                      created, but it must be backed by technical precision and
                      conversion engineering.
                    </p>
                    <p>
                      We evolved from a production house into a growth partner,
                      merging the artistry of filmmaking with the data-driven
                      rigor of high-end business intelligence.
                    </p>
                  </div>
                </Reveal>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 pt-12">
                  {originImages.slice(0, 2).map((img) => (
                    <Reveal key={img.src} delay={img.delay}>
                      <div
                        className={`${img.className} glass-panel overflow-hidden`}
                      >
                        <img
                          className="w-full h-full object-cover"
                          src={img.src}
                          alt={img.alt}
                        />
                      </div>
                    </Reveal>
                  ))}
                </div>
                <div className="space-y-4">
                  {originImages.slice(2).map((img) => (
                    <Reveal key={img.src} delay={img.delay}>
                      <div
                        className={`${img.className} glass-panel overflow-hidden`}
                      >
                        <img
                          className="w-full h-full object-cover"
                          src={img.src}
                          alt={img.alt}
                        />
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Philosophy */}
        <section className="relative py-60 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{
              backgroundImage: "url('/stitch-exports/about-screenshot.png')",
            }}
          />
          <div className="relative z-10 px-[24px] md:px-[80px] max-w-4xl mx-auto text-center">
            <Reveal>
              <span className="font-['Geist'] text-xs font-medium tracking-[0.5em] uppercase text-[#e9c349] mb-12 block">
                The Philosophy
              </span>
            </Reveal>
            <Reveal delay={200}>
              <h2 className="font-['Hanken_Grotesk'] text-[48px] md:text-[80px] font-semibold leading-tight text-[#e2e2e4]">
                &ldquo;How can we help this brand become{" "}
                <span className="italic text-[#e9c349]">
                  impossible to ignore?
                </span>
                &rdquo;
              </h2>
            </Reveal>
            <Reveal delay={400}>
              <div className="mt-20 flex justify-center">
                <div className="w-px h-32 bg-gradient-to-b from-[#e9c349] to-transparent" />
              </div>
            </Reveal>
          </div>
        </section>

        {/* The Partner */}
        <section className="py-40 px-[24px] md:px-[80px] max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px] items-stretch">
            <Reveal>
              <div className="glass-panel p-12 md:p-16 flex flex-col justify-between h-full min-h-[400px]">
                <div>
                  <h3 className="font-['Hanken_Grotesk'] text-[32px] md:text-[48px] font-medium tracking-[0.05em] text-[#e2e2e4] mb-8">
                    The Partner
                  </h3>
                  <p className="font-['Inter'] text-lg text-[#e2e2e4]/60 mb-12">
                    Most businesses don&apos;t need another vendor. They need a
                    growth partner who understands that the soul of a brand is
                    its narrative, but the skeleton of a brand is its
                    technology.
                  </p>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-full border border-[#e9c349] flex items-center justify-center">
                    <span className="material-symbols-outlined text-[#e9c349]">
                      handshake
                    </span>
                  </div>
                  <span className="font-['Geist'] text-xs font-medium tracking-widest uppercase text-[#e2e2e4]">
                    Embedded Collaboration
                  </span>
                </div>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="relative overflow-hidden group min-h-[400px]">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQRzMi-0-Ym508N_RJzO-QqtC8tL7zIC5lYcF3BJntsmS_Dz03XxNZI8aO5MlEa1WPwd6EssvpbrdUnSKebATRqkwtnlNIruLx9S987F2m380AVPzP3m79VjP_zIyzvXwi27b38lktRAZKPbiC8r8p68VAC4zOrZU3i19JfQrLu8a6GuvTlKN6q_mE1IuwZY0Rb7XTHwMs1N2AW_UbcM5Hpmbo0F5BujbZaBXgVdui3a1Et6Mbenox3BAX50tq_AXtt7BXsnowGuSV"
                  alt="Two professionals in deep conversation overlooking a city skyline"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500" />
              </div>
            </Reveal>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-60 px-[24px] md:px-[80px] bg-[#111415]">
          <div className="max-w-[1440px] mx-auto text-center">
            <Reveal>
              <h2 className="font-['Hanken_Grotesk'] text-[48px] md:text-[80px] font-semibold leading-tight text-[#e2e2e4] mb-16">
                Great brands create <br />
                lasting impact.
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <a
                href="/contact"
                className="inline-flex items-center gap-4 bg-[#e9c349] text-[#3c2f00] px-12 py-6 font-['Geist'] text-xs font-medium tracking-[0.3em] uppercase gold-glow hover:translate-x-2 transition-all duration-300"
              >
                Start Your Project
                <span className="material-symbols-outlined">arrow_right_alt</span>
              </a>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
