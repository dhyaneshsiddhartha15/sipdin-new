/**
 * Case Studies data + helpers.
 *
 * Each case study renders through the shared CaseStudyDetail component, so
 * adding a new one is just a new entry here. Logos live in /public — set `logo`
 * to a path when the asset exists (else a letter placeholder is shown).
 */

export type Stat = { value: string; label: string };

export type ListItem = { label?: string; text?: string; sub?: string[] };

export type Section =
  | { type: "text"; heading: string; body: string[] }
  | { type: "list"; heading: string; intro?: string; items: ListItem[]; note?: string }
  | { type: "table"; heading: string; columns: string[]; rows: string[][] }
  | { type: "quote"; text: string; name: string; role: string };

export type CaseStudy = {
  slug: string;
  product: string;
  tag: string;
  title: string;
  description: string;
  /** Accent used for text/numbers/buttons — pick something readable on cream. */
  accent: string;
  /** Optional banner background (falls back to `accent`). */
  bannerColor?: string;
  productInitial: string;
  logo?: string;
  heroImage?: string;
  watchUrl?: string;
  stats: Stat[];
  sections: Section[];
};

/** Sidpin's own logo — used on the left square of every case-study banner. */
export const SIDPIN_LOGO = "/sid-pin.png";

const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "rudradharma-spiritual-ecommerce",
    product: "Rudradharma",
    tag: "E-Commerce",
    title: "Rudradharma – Building a Transparent Spiritual E-Commerce Brand",
    description:
      "Taking a trusted 1953 Rudraksha store online — 500+ SKUs, macro product photography, and META campaigns hitting 10–12× ROAS.",
    accent: "#E08A34",
    productInitial: "R",
    logo: "/logos/15.png",
    watchUrl: "#",
    stats: [
      { value: "10–12×", label: "ROAS on META" },
      { value: "500+", label: "Product SKUs" },
      { value: "13K+", label: "Tracked Events" },
    ],
    sections: [
      {
        type: "text",
        heading: "Project Overview",
        body: [
          "Rudradharma is a spiritual wellness brand offering authentic Nepali Rudraksha beads. While the physical store has been operating since 1953, the brand had no digital presence until 2024.",
          "The goal was to transform a trusted offline Rudraksha store into a fully functional online spiritual e-commerce brand — reaching customers across India while maintaining transparency and authenticity.",
          "Sidpin Digital partnered with the brand to build the entire digital ecosystem from scratch: website development, product photography, branding, and performance marketing.",
        ],
      },
      {
        type: "list",
        heading: "The Challenge",
        intro: "Before partnering with Sidpin Digital, Rudradharma faced several major challenges:",
        items: [
          { text: "No website or online store." },
          { text: "No online sales channel." },
          { text: "No structured digital marketing strategy." },
          { text: "Poor product presentation and photography." },
          { text: "No experience running META Ads." },
          { text: "No analytics or conversion tracking." },
        ],
        note: "Despite decades of trust offline, the brand had zero visibility in the digital marketplace.",
      },
      {
        type: "list",
        heading: "Strategy",
        intro:
          "Sidpin Digital designed a full-stack digital strategy to bring the brand online and build credibility, focused on three pillars:",
        items: [
          { label: "E-Commerce Infrastructure", text: "A scalable online store capable of handling a large spiritual product catalog." },
          { label: "Transparency & Trust", text: "Customer trust built through detailed product visualization and authentic information." },
          { label: "Performance Marketing", text: "Targeted META advertising to generate qualified leads and online sales." },
        ],
      },
      {
        type: "list",
        heading: "Execution",
        items: [
          {
            label: "E-Commerce Website Development",
            text: "A complete e-commerce website built on Shopify.",
            sub: [
              "Launch of 500+ product SKUs",
              "Secure payment gateway integration",
              "SEO-optimized product pages",
              "Clean, intuitive product navigation",
              "Structured catalog for multiple Rudraksha types",
            ],
          },
          {
            label: "Product Photography & Visual Presentation",
            text: "A high-detail photography strategy to prove authenticity and trust.",
            sub: [
              "Every Rudraksha bead photographed individually",
              "2–3 angles per product",
              "High-resolution macro photography",
              "Exact size and weight clearly displayed",
            ],
          },
          {
            label: "Branding & Content Strategy",
            text: "A spiritual brand identity built around authenticity and knowledge.",
            sub: [
              "Spiritual storytelling content",
              "Rudraksha education posts",
              "High-quality product visuals",
              "Consistent social-media branding",
              "Spiritual symbolism woven into design",
            ],
          },
          {
            label: "SEO Implementation",
            text: "A full SEO structure across the website.",
            sub: [
              "Keyword-optimized product pages",
              "SEO-focused Rudraksha descriptions",
              "Technical SEO setup",
              "Structured product data",
              "Organic discoverability for spiritual searches",
            ],
          },
          {
            label: "META Performance Marketing",
            text: "Paid campaigns on Facebook & Instagram at ~₹500/day.",
            sub: ["Lead generation", "Direct product inquiries", "Conversion campaigns"],
          },
        ],
      },
      {
        type: "list",
        heading: "Results",
        intro: "The results demonstrated strong demand for authentic Rudraksha online:",
        items: [
          { text: "10–12× ROAS via lead-generation META campaigns." },
          { text: "4.2K+ website views in early campaign stages." },
          { text: "13K+ total tracked events." },
          { text: "1.3K+ product views." },
          { text: "1.5K+ new visitors." },
        ],
      },
      {
        type: "list",
        heading: "Unique Differentiator",
        intro:
          "What truly separates Rudradharma from other Rudraksha sellers is complete transparency. Every product page includes:",
        items: [
          { text: "Exact bead photography." },
          { text: "True weight and size of the Rudraksha." },
          { text: "Multiple viewing angles." },
          { text: "Authentic Nepali Rudraksha sourcing." },
        ],
        note: "Customers receive the exact bead displayed on the website — significantly increasing trust in online purchases.",
      },
      {
        type: "text",
        heading: "Launch",
        body: [
          "The brand's online platform officially launched during Diwali 2024, aligning the launch with a spiritually significant shopping period.",
        ],
      },
      {
        type: "list",
        heading: "Future Vision",
        intro: "The long-term vision of Rudradharma is to become:",
        items: [
          { text: "One of the most trusted Rudraksha brands in India." },
          { text: "A leading destination for authentic spiritual beads and malas." },
          { text: "A digital platform for spiritual wellness and Vedic guidance." },
        ],
        note: "Sidpin Digital continues to support the brand with creative content, marketing strategy, and performance campaigns to scale its online growth.",
      },
      {
        type: "quote",
        text: "Sidpin took our 70-year family business online with complete authenticity — customers finally see the exact bead they receive before they buy.",
        name: "Rudradharma",
        role: "Brand Owner",
      },
    ],
  },
  {
    slug: "dohabus-qatar-tourism-platform",
    product: "Dohabus",
    tag: "Tourism & Transport",
    title: "Dohabus – Qatar's Premier Destination Management & Sightseeing Platform",
    description:
      "A conversion-focused digital platform for Qatar's leading sightseeing company — Hop-On Hop-Off tours, desert safaris, and online booking for global travelers.",
    accent: "#0C8A99",
    bannerColor: "#F4C400",
    productInitial: "D",
    logo: "/dohabus_logo.jpg",
    watchUrl: "#",
    stats: [
      { value: "9", label: "Audio Languages" },
      { value: "7+", label: "Tour Services" },
      { value: "2013", label: "Serving Doha Since" },
    ],
    sections: [
      {
        type: "text",
        heading: "Project Overview",
        body: [
          "Dohabus (dohabus.com) is one of Qatar's leading destination management companies, specializing in sightseeing tours, hospitality experiences, and transportation for international visitors. Industry: Tourism & Transport · Location: Doha, Qatar · Founded: 2013.",
          "Founded as a Hop-On Hop-Off sightseeing bus provider in Doha, the company expanded into a full-service tourism brand offering city tours, desert safaris, cruise experiences, and private transportation across Qatar.",
          "Despite a strong offline presence and partnerships with global tourism platforms, Dohabus lacked a centralized digital platform to showcase its services and let international tourists discover and book tours easily.",
          "Sidpin Digital was engaged to design and develop a modern digital platform that reflects Dohabus's premium tourism positioning while enabling seamless tour discovery and booking for global travelers.",
        ],
      },
      {
        type: "list",
        heading: "The Challenge",
        intro:
          "Dohabus serves tourists from across the world, making the digital experience a critical part of the customer journey. The project needed to address several key challenges:",
        items: [
          { label: "No Unified Digital Platform", text: "Visitors had no centralized website to explore all Dohabus tours and services in one place." },
          {
            label: "Diverse Service Offerings",
            text: "A wide range of services that were not properly structured or presented online:",
            sub: [
              "Hop-On Hop-Off sightseeing tours",
              "Desert safaris",
              "City tours",
              "Airport transfers",
              "Corporate transport services",
              "Cruise and night tours",
            ],
          },
          { label: "Strong Global Competition", text: "GetYourGuide, Civitatis, and Tripadvisor already dominated online discovery — a strong brand-owned presence was essential." },
          { label: "Multilingual Audience", text: "Tours are offered in 9 audio languages, requiring a platform that appeals to a global audience." },
          { label: "Mobile-First Tourists", text: "Most tourists search and book tours directly from their smartphones while traveling." },
        ],
        note:
          "Core challenge: how can a tourism brand build a digital platform that converts international tourists into bookings while reflecting the premium tourism experience of Qatar?",
      },
      {
        type: "list",
        heading: "Services Offered by Dohabus",
        items: [
          { label: "Hop-On Hop-Off Sightseeing Tours", text: "Open-top double-decker bus tours with 24-hour passes and multilingual audio guides." },
          { label: "Desert Safari Experiences", text: "Dune-bashing adventures including the Inland Sea (Khor Al Udaid) and the famous Monster Bus off-road safari." },
          { label: "Guided City Tours", text: "Half-day and full-day tours covering Doha's cultural landmarks and modern attractions." },
          { label: "Private Transportation", text: "Luxury coaches, minibuses, and shuttle services for groups, corporate clients, and events." },
          { label: "Airport Transfers", text: "Seamless pickup and drop services from Hamad International Airport." },
          { label: "Cruise & Night Tours", text: "Dhow harbor cruises and evening tours showcasing Doha's illuminated skyline." },
          { label: "Corporate & Diplomatic Transport", text: "Tailored transportation for corporate delegations and diplomatic missions." },
        ],
      },
      {
        type: "list",
        heading: "Our Solution",
        intro:
          "Sidpin Digital designed and developed a conversion-focused website that positions Dohabus as a premium sightseeing brand while simplifying tour discovery and booking. Key deliverables:",
        items: [
          { label: "Tour Discovery Platform", text: "A structured site to browse tours by category — city tours, desert safaris, airport transfers, private transport." },
          { label: "Online Booking Integration", text: "A seamless booking flow to reserve tours directly online, reducing reliance on third-party platforms." },
          { label: "Mobile-Optimized Experience", text: "A fully responsive design for tourists browsing on smartphones and tablets." },
          { label: "Premium Brand Positioning", text: "A modern visual design aligned with Qatar's luxury tourism identity, building trust with travelers." },
          { label: "Multi-Service Showcase", text: "Clear presentation of the fleet and tour portfolio — from double-decker buses to luxury transport." },
          { label: "SEO & Global Discoverability", text: "A search-optimized structure so international tourists find Dohabus through relevant travel searches." },
        ],
      },
      {
        type: "table",
        heading: "Dohabus vs The Competition",
        columns: ["Feature", "Typical Competitors", "Dohabus"],
        rows: [
          ["Sightseeing Tours", "Generic taxi or walking tours", "Structured Hop-On Hop-Off bus tours"],
          ["Audio Commentary", "None or basic guide", "Professional audio guides in 9 languages"],
          ["Desert Experience", "Standard jeep tours", "Exclusive Monster Bus desert safari"],
          ["Fleet Variety", "Limited options", "Minivans, luxury coaches, double-decker buses"],
          ["Booking Experience", "Phone or on-site only", "Online booking + OTA integrations"],
          ["Night Tours", "Rarely offered", "Night tours included with sightseeing passes"],
        ],
      },
      {
        type: "list",
        heading: "Results & Impact",
        intro: "The new website successfully established a strong digital presence for Qatar's leading sightseeing company:",
        items: [
          { label: "Unified Digital Platform", text: "All services now accessible from a single, brand-owned website." },
          { label: "Increased Global Visibility", text: "Complements listings on GetYourGuide, Civitatis, and TripAdvisor." },
          { label: "Improved Brand Credibility", text: "The new website reflects Dohabus's premium market positioning." },
          { label: "Streamlined Booking", text: "Tourists browse and book online instead of relying on third parties or phone reservations." },
          { label: "Mobile-Friendly Travel Experience", text: "Travelers access tours and bookings from their smartphones while exploring Doha." },
        ],
      },
      {
        type: "text",
        heading: "Why This Project Matters",
        body: [
          "Qatar's tourism industry has grown significantly, especially after the global exposure of the 2022 FIFA World Cup. As international travel to Doha rises, local operators must build strong digital identities to compete with global booking platforms.",
          "By building the Dohabus platform, Sidpin Digital helped a leading Qatari tourism brand take ownership of its digital presence and compete effectively on the international stage.",
        ],
      },
      {
        type: "text",
        heading: "Outcome",
        body: [
          "A professional, conversion-focused digital platform that positions Dohabus as Qatar's leading sightseeing brand, giving international tourists a seamless way to explore and book tours across Doha.",
        ],
      },
      {
        type: "quote",
        text: "Sidpin gave our tours a home online — international travelers can now discover and book every Dohabus experience in one place.",
        name: "Dohabus",
        role: "Operations Lead",
      },
    ],
  },
  {
    slug: "anvi-partners-landing-page",
    product: "Anvi Partners",
    tag: "Web Development",
    title: "Anvi Partners – A High-Converting Marketing & Growth Landing Page",
    description:
      "A modern, conversion-focused single-page site (WordPress + Bricks + custom code) with a glassmorphism design system, built to drive free-audit bookings.",
    accent: "#6D5AE6",
    productInitial: "A",
    watchUrl: "#",
    stats: [
      { value: "1-Page", label: "Landing Site" },
      { value: "15 min", label: "Free Audit CTA" },
      { value: "100%", label: "Responsive" },
    ],
    sections: [
      {
        type: "text",
        heading: "Project Overview",
        body: [
          "The objective was to design and develop a modern, conversion-focused landing page that communicates Anvi Partners' services, methodology, and audit-driven approach. Tech stack: WordPress, Bricks Builder, and custom code.",
          "The design direction was inspired by a reference website while ensuring optimized performance, a clean user experience, and full responsiveness across devices.",
        ],
      },
      {
        type: "list",
        heading: "Objectives",
        intro: "The website was crafted to:",
        items: [
          { text: "Clearly present the brand's value proposition." },
          { text: "Guide users through a structured conversion journey." },
          { text: "Encourage users to book a free 15-minute audit session." },
        ],
      },
      {
        type: "list",
        heading: "Page Structure",
        intro: "The landing page follows a strategic conversion flow:",
        items: [
          { label: "Hero Section", text: "Strong headline + supporting subtext, primary CTA: “Auditoría gratuita (15 min)”." },
          {
            label: "Services Section",
            text: "Clearly highlights the core offerings:",
            sub: ["Google Ads", "Meta Ads", "Tracking & Analytics", "Conversion Rate Optimization (CRO)"],
          },
          { label: "Case Studies Section", text: "Showcases past results and success stories to build trust and credibility." },
          { label: "Methodology Section", text: "Step-by-step explanation of the working process." },
          { label: "Contact / Audit Section", text: "A fully functional form for lead capture, designed to drive consultation bookings." },
          { label: "Footer", text: "Company details, navigation links, and a clean, minimal layout." },
        ],
      },
      {
        type: "list",
        heading: "Technical Implementation",
        items: [
          { text: "Major sections built with custom code for complete control over layout, styling, and performance." },
          { text: "Bricks Builder native form used for the contact section for reliable backend handling and stability." },
          { label: "Glassmorphism design system", text: "Blur effects, transparency layers, and soft shadows for visual consistency across devices." },
        ],
      },
      {
        type: "list",
        heading: "Responsiveness & User Experience",
        items: [
          { text: "Fully responsive across desktop, tablet, and mobile devices." },
          { text: "Mobile-specific alignment issues manually optimized." },
          { text: "Clear visual hierarchy guiding user attention." },
          { text: "Strategic CTA placements to improve conversion flow." },
          { text: "Balanced spacing and layout for readability and engagement." },
        ],
      },
      {
        type: "list",
        heading: "Challenges & Solutions",
        items: [
          { label: "Challenge", text: "A dynamic header created rendering and stability issues." },
          {
            label: "Solution",
            text: "The header was integrated directly into the main file, ensuring:",
            sub: ["Stable performance", "Consistent display across devices", "Better control over layout behavior"],
          },
        ],
      },
      {
        type: "list",
        heading: "Final Outcome",
        intro: "The final website is:",
        items: [
          { text: "Visually modern and aligned with industry standards." },
          { text: "Fully responsive across all devices." },
          { text: "Optimized for conversions." },
          { text: "Performance-focused and production-ready." },
        ],
        note: "It balances design precision, usability, and marketing effectiveness — delivering a strong digital presence for Anvi Partners.",
      },
      {
        type: "quote",
        text: "Sidpin turned our positioning into a landing page that actually converts — clean, fast, and built around the free-audit booking.",
        name: "Anvi Partners",
        role: "Founder",
      },
    ],
  },
];

export function getAllCaseStudies(): CaseStudy[] {
  return CASE_STUDIES;
}

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((c) => c.slug === slug);
}
