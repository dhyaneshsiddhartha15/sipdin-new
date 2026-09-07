/**
 * Case Studies data + helpers.
 *
 * Each case study renders through the shared CaseStudyDetail component, so
 * adding a new one is just a new entry here. Logos live in /public — set `logo`
 * to a path when the asset exists (else a letter placeholder is shown).
 */

export type Stat = { value: string; label: string };

export type ListItem = { label?: string; text?: string; sub?: string[] };

export type JourneyStep = { number: string; title: string; description: string; icon?: string };

export type Section =
  | { type: "text"; heading: string; body: string[] }
  /** `hideImage` drops the stock photo beside the copy, leaving a text-only section. */
  | { type: "list"; heading: string; intro?: string; items: ListItem[]; note?: string; hideImage?: boolean; solutionHeading?: string; solutionIntro?: string; solutionItems?: ListItem[] }
  | { type: "table"; heading: string; columns: string[]; rows: string[][] }
  | { type: "image"; heading?: string; intro?: string; align?: "left"; sideImage?: { src: string; alt?: string }; images: { src: string; caption?: string }[] }
  /** Full-bleed shot pinned with `background-attachment: fixed` (see FixedImagePanel). */
  | { type: "fixedImage"; src: string; alt: string; grayscaleUntilHover?: boolean; aspectRatio?: number }
  | { type: "quote"; text: string; name: string; role: string }
  | { type: "journey"; heading: string; intro: string; steps: JourneyStep[]; conclusion?: string };

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
        type: "fixedImage",
        src: "/case-study/Doha-bus/1.jpg",
        alt: "Dohabus platform visual",
        aspectRatio: 1280 / 1011,
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
        solutionHeading: "Our Solution",
        solutionIntro: "Sidpin Digital designed and developed a conversion-focused website that positions Dohabus as a premium sightseeing brand while simplifying tour discovery and booking. Key deliverables:",
        solutionItems: [
          { label: "Tour Discovery Platform", text: "A structured site to browse tours by category — city tours, desert safaris, airport transfers, private transport." },
          { label: "Online Booking Integration", text: "A seamless booking flow to reserve tours directly online, reducing reliance on third-party platforms." },
          { label: "Mobile-Optimized Experience", text: "A fully responsive design for tourists browsing on smartphones and tablets." },
          { label: "Premium Brand Positioning", text: "A modern visual design aligned with Qatar's luxury tourism identity, building trust with travelers." },
          { label: "Multi-Service Showcase", text: "Clear presentation of the fleet and tour portfolio — from double-decker buses to luxury transport." },
          { label: "SEO & Global Discoverability", text: "A search-optimized structure so international tourists find Dohabus through relevant travel searches." },
        ],
      },
      {
        type: "list",
        heading: "Services Offered by Dohabus",
        hideImage: true,
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
        hideImage: true,
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
  {
    slug: "cro-fragrance-beauty-retailer",
    product: "Fragrance & Beauty Retailer",
    tag: "Conversion Rate Optimization",
    title: "Make Value Obvious. Reduce Thinking. Increase Clicks.",
    description:
      "A UX and conversion-rate-optimization engagement for a leading online fragrance & beauty retailer — five targeted interface changes across the listing page, homepage, and cart, each grounded in a before/after test and measured against real engagement data.",
    accent: "#D6336C",
    productInitial: "F",
    watchUrl: "#",
    stats: [
      { value: "5", label: "UX Initiatives Shipped" },
      { value: "+21%", label: "Peak Engagement Lift" },
      { value: "+20%", label: "Peak Add-to-Cart Lift" },
      { value: "+15%", label: "Avg. Conversion Lift" },
    ],
    sections: [
      {
        type: "text",
        heading: "Project Overview",
        body: [
          "The client is a large online fragrance and beauty retailer with a catalog spanning hundreds of brands and thousands of SKUs. Their existing site converted reasonably well, but a full CRO audit revealed friction at nearly every stage of the funnel — from how products were scanned on listing pages, to how promotions were surfaced, to how offers were (or weren't) presented at the moment a shopper was closest to checking out.",
          "Rather than a single redesign, we ran five focused, independently tested UX initiatives across the listing page, homepage, and cart. Each change was benchmarked against the existing experience and evaluated on real engagement, click-through, and conversion data.",
        ],
      },
      {
        type: "text",
        heading: "The Challenge",
        body: [
          "Fragrance is a high-consideration, high-SKU-count category: shoppers are comparing price, size, and scent family across dozens of near-identical products. The original experience asked users to do too much of that comparison work themselves — requiring extra clicks, page reloads, and guesswork just to figure out if a product fit their budget or if a deal applied to what they wanted.",
          "The goal across every initiative was the same underlying principle: reduce the cognitive and physical effort between “I'm interested” and “I clicked,” without redesigning the brand or overhauling the platform.",
        ],
      },
      {
        type: "list",
        heading: "1. Product Listing — Price Transparency",
        intro:
          "The original listing page buried pricing until a shopper opened a product. We surfaced price ranges and “up to X% off” discount framing directly on the product card, along with visual cues for bundle-deal eligibility — letting shoppers self-qualify by budget before clicking through.",
        items: [
          { label: "Instant price qualification", text: "Visible price ranges let users instantly decide “this is in my budget,” cutting low-intent clicks and improving qualified traffic." },
          { label: "Discount framing as a scroll-stopper", text: "“Up to X% off” acts as a visual hook that pulls attention and increases interaction." },
          { label: "Bundle eligibility as a value unlock", text: "Tagging products as bundle-eligible created a curiosity trigger — shoppers clicked through to unlock the deal." },
          { label: "Decision compression at the card level", text: "Fewer steps between scanning and clicking reduced cognitive effort and increased high-intent visits." },
        ],
        note: "+10% Engagement Rate · +15% Checkouts · +12% Conversion Rate",
      },
      {
        type: "list",
        heading: "2. Product Listing — Friction Reduction",
        intro:
          "We reduced how often shoppers had to leave the listing page just to compare basic product details. Key attributes — price, size, variant options — became accessible in-line, keeping shoppers in a browsing, comparing state for longer.",
        items: [
          { label: "Reduced navigation friction", text: "Users could access key product details without a full page reload." },
          { label: "Faster decision-making", text: "Quick access to price, size, and variant data helped shoppers shortlist products more quickly." },
          { label: "Improved product comparison", text: "Shoppers could evaluate multiple products in less time." },
          { label: "Stronger shopping momentum", text: "Fewer unnecessary detail-page visits kept shoppers engaged for longer." },
        ],
        note: "+20% Add to Carts · +11% Conversion Rate · +21% Engagement Rate",
      },
      {
        type: "list",
        heading: "3. Homepage — Brand Discovery",
        intro:
          "The original brand-discovery module was a row of text-only logo tiles. We replaced it with image-led tiles built around hero product photography, giving each brand a visual identity shoppers could recognize at a glance.",
        items: [
          { label: "Visual decision-making", text: "Shoppers connect faster with product imagery than plain text." },
          { label: "Stronger brand recall", text: "Product visuals improved brand recognition and trust during browsing." },
          { label: "Improved scannability", text: "Image-led tiles were easier to scan than the original text-heavy layout." },
          { label: "Higher click motivation", text: "Seeing hero products created desire-led clicks and deeper category exploration." },
        ],
        note: "+21% Add Clicks · +10% Sessions · +15% Engagement",
      },
      {
        type: "list",
        heading: "4. Cart — AOV Optimization",
        intro:
          "Promotions previously lived only on the homepage, far from the moment of purchase. We introduced relevant, high-intent offers directly inside the mini-cart — including low-cost add-on suggestions to help shoppers clear free-shipping thresholds.",
        items: [
          { label: "High-intent offer placement", text: "Promotions were introduced at the mini-cart stage, where users are closest to purchase." },
          { label: "Increased basket size", text: "Bundle deals and discounts encouraged shoppers to add more items before checking out." },
          { label: "Stronger purchase motivation", text: "Visible savings nudged shoppers to complete their purchase faster." },
          { label: "Improved offer discovery", text: "Shoppers who missed earlier promotions still encountered relevant offers before checkout." },
        ],
        note: "+15% Checkouts via Promos · +10% Cart Engagement · +12% AOV",
      },
      {
        type: "list",
        heading: "5. Homepage — Promotional Visibility",
        intro:
          "The homepage originally surfaced a single promotional banner. We introduced a multi-banner promotional module highlighting several campaigns — seasonal deals, bundle offers, and discovery sets — in parallel.",
        items: [
          { label: "Expanded promotions", text: "Users were previously exposed to only one deal at a time, limiting discovery." },
          { label: "Multi-deal visibility", text: "Multiple banners highlighted bundle offers and price-led promotions." },
          { label: "Improved value communication", text: "A clearer display of savings-driven campaigns improved purchase motivation." },
          { label: "Higher homepage engagement", text: "Rotating hero banners encouraged shoppers to explore offers rather than bounce." },
        ],
        note: "+15% Overall Clicks · +10% Conversion Rate · +20% Engagement Rate",
      },
      {
        type: "table",
        heading: "Results at a Glance",
        columns: ["Initiative", "Key Metrics"],
        rows: [
          ["Product Listing — Price Transparency", "+10% Engagement · +15% Checkouts · +12% Conversion"],
          ["Product Listing — Friction Reduction", "+20% Add to Carts · +11% Conversion · +21% Engagement"],
          ["Homepage — Brand Discovery", "+21% Add Clicks · +10% Sessions · +15% Engagement"],
          ["Cart — AOV Optimization", "+15% Checkouts via Promos · +10% Cart Engagement · +12% AOV"],
          ["Homepage — Promotional Visibility", "+15% Overall Clicks · +10% Conversion · +20% Engagement"],
        ],
      },
      {
        type: "list",
        heading: "Key Takeaways",
        intro:
          "Across all five initiatives, the pattern was consistent: shoppers respond to reduced friction and clearer value framing far more than to new features. None of these changes required a platform migration or a visual rebrand.",
        items: [
          { label: "Surface value early", text: "Price, discount, and offer information moved earlier in the journey consistently improved qualified engagement." },
          { label: "Meet shoppers at high-intent moments", text: "The cart and mini-cart proved to be some of the highest-leverage places to introduce relevant offers." },
          { label: "Visual context beats text", text: "Image-led design outperformed text-only modules for both discovery and recall." },
          { label: "Test in isolation, learn compounding", text: "Running each change as its own before/after test made it possible to attribute lift accurately." },
        ],
      },
      {
        type: "quote",
        text: "Every change was small, testable, and measurable — and together they moved engagement, add-to-cart, and conversion across the entire funnel.",
        name: "Fragrance & Beauty Retailer",
        role: "CRO Engagement",
      },
    ],
  },
  {
    slug: "ritm-hospitality-institute-website",
    product: "RITM",
    tag: "Website Design & Development",
    title: "RITM Hospitality Institute Website",
    description:
      "How we delivered a globally competitive website for Raboche Institute of Technology & Management (RITM), a hospitality education institute, without a premium budget to match.",
    accent: "#0E8A80",
    productInitial: "R",
    watchUrl: "#",
    stats: [
      { value: "Next.js", label: "Modern React framework" },
      { value: "Tight", label: "Turnaround timeline" },
      { value: "EN / हि", label: "Bilingual experience" },
      { value: "6", label: "Programs launched" },
    ],
    sections: [
      {
        type: "text",
        heading: "Project Overview",
        body: [
          "Raboche Institute of Technology & Management (RITM) is a hospitality and hotel management institute based in Dehradun, Uttarakhand, offering diploma, certificate, and fast-track programs in hospitality, culinary arts, barista training, and bartending. RITM approached us to build a new website that could stand shoulder to shoulder with international hospitality brands — the same industry their graduates go on to work in, from cruise lines to five-star resorts.",
          "The site needed to do three jobs at once: build immediate trust with prospective students and parents, clearly present a fairly complex course catalog, and drive enquiries and applications through simple, persistent calls to action.",
        ],
      },
      {
        type: "list",
        heading: "The Challenge",
        intro:
          "RITM came to us with a modest budget and a tight timeline — typical constraints for an education client competing against institutes with far larger marketing budgets. The brief was clear: the site had to look and feel premium, without the cost of custom photoshoots, bespoke illustration, or a long development runway.",
        items: [
          { text: "Limited budget, no allowance for extensive custom photography or original video." },
          { text: "Tight delivery timeline with no room for lengthy design iteration cycles." },
          { text: "A wide, uneven set of course content that needed to feel structured, not overwhelming." },
          { text: "Need to serve two audiences — English and Hindi-speaking families — without duplicating effort." },
        ],
        note:
          "The core tension: perception versus budget. A hospitality institute lives and dies by the sense of quality it projects — cutting corners visually would have undercut the institute's core pitch.",
      },
      {
        type: "list",
        heading: "Design: Premium Feel Through Discipline",
        intro:
          "Rather than chase a big production budget, we focused on the fundamentals that make a site feel premium: a restrained colour palette, confident typography, generous white space, and consistent visual rhythm. We curated and art-directed the available photography so existing images carried the same weight as a custom shoot.",
        items: [
          { text: "Every homepage section built to tell a single, escalating story — hero, training environments, offerings, career roadmap, placements, alumni, and the course catalog." },
          { text: "A narrative structure that gives the site a sense of intentionality and polish, not dependent on production value alone." },
          { text: "Editorial framing of kitchens, culinary training, and campus life to feel aspirational rather than like generic stock." },
        ],
      },
      {
        type: "fixedImage",
        src: "/case-study/RITM/1.jpg",
        alt: "RITM website design",
        aspectRatio: 1280 / 993,
      },
      {
        type: "list",
        heading: "Technical Build: Fast, Clean, Scalable",
        intro:
          "The site was built on Next.js and React, giving RITM a fast, modern, SEO-friendly foundation that can scale as the institute adds new programs, campuses, or content.",
        items: [
          { text: "A reusable component library (course cards, stat blocks, testimonial cards, CTA bands) so new content could be added fast." },
          { text: "Bilingual (English / Hindi) toggle to serve local families alongside globally-minded applicants." },
          { text: "Direct WhatsApp and click-to-call integration throughout — the primary enquiry channel for this audience." },
          { text: "Optimised image loading (Next.js image pipeline) to keep pages fast despite a photography-heavy design." },
          { text: "Clear, repeated conversion paths (“Apply for Next Intake” / “Get Information”) at every natural decision point." },
        ],
      },
      {
        type: "text",
        heading: "Structuring a Complex Course Catalog",
        body: [
          "RITM offers six distinct programs ranging from a 45-day barista certification to an 18-month advanced diploma. Rather than presenting them as a flat list, we designed a consistent card system — duration, eligibility, placement highlight, and key takeaways — so a prospective student can compare programs at a glance and self-select into the right path within seconds.",
        ],
      },
      {
        type: "list",
        heading: "Outcome & Impact",
        intro:
          "The final site gives RITM a digital presence that reads as premium and internationally credible — deliberately positioned to match the calibre of the hotel brands, cruise lines, and resorts its graduates are placed with.",
        items: [
          { text: "A cohesive, editorial visual identity that elevates the institute's brand well beyond its budget." },
          { text: "A clear, structured presentation of a previously complex six-program catalog." },
          { text: "Multiple, frictionless enquiry paths (WhatsApp, call, contact form) suited to how this audience reaches out." },
          { text: "A bilingual experience that widens the site's reach across RITM's core recruitment regions." },
          { text: "A component-based build that lets RITM's team extend the site without starting from scratch." },
        ],
        note:
          "The project proved that a constrained budget and a tight timeline don't have to mean a compromised result — RITM now has a website that competes visually and structurally with far larger institutions.",
      },
      {
        type: "quote",
        text: "We take a real budget and a real deadline and treat them as design constraints to work within, not excuses for a lesser outcome — a site RITM can point prospective students to with confidence.",
        name: "Raboche Institute of Technology & Management",
        role: "Website Design & Development",
      },
    ],
  },
  {
    slug: "dharohar-dhaagon-ki-brand-identity",
    product: "धरोहर धागों की",
    tag: "Brand Identity & Logo Design",
    title: "धरोहर धागों की – Heritage Woven in Threads",
    description:
      "A complete visual identity for a women's ethnic-wear boutique — a Devanagari 'ध' monogram, an earthy heritage palette and a full type system, delivered in one week and now in active use across the store.",
    accent: "#B58350",
    bannerColor: "#4A452F",
    productInitial: "ध",
    heroImage: "/case-studies/dharohar/final-logo.png",
    watchUrl: "#",
    stats: [
      { value: "1 Week", label: "Full Identity Turnaround" },
      { value: "2 Rounds", label: "Of Revision" },
      { value: "In-Store", label: "Now Live as Signage" },
    ],
    sections: [
      {
        type: "text",
        heading: "Project Overview",
        body: [
          "Client: धरोहर धागों की · Industry: Women's Clothing, Fabrics & Boutique · Scope: Brand Strategy, Logo Design, Colour Palette, Typography System, Packaging & Signage Mockups · Timeline: 1 Week (2 rounds of revision) · Tools: CorelDRAW & Adobe Photoshop.",
          "धरोहर धागों की approached us to build a complete visual identity for their boutique — a label rooted in Indian textile heritage, women's ethnic wear, and handcrafted fabric artistry. The brief called for a mark that felt premium, feminine and timeless, avoiding anything generic, overly literal, or decorative for its own sake.",
          "Deliverables: primary logo, colour system, type system, and label / packaging / signage mockups — final artwork delivered in editable CDR format, now in active use across the client's boutique and in-store display.",
        ],
      },
      {
        type: "list",
        heading: "Brand Strategy",
        intro:
          "Before any visual exploration began, we defined the brand's core territory: heritage, craftsmanship, and the emotional bond between fabric and tradition. The name itself — 'धरोहर धागों की', meaning 'heritage of threads' — set the tone for every decision that followed. We anchored the strategy around three pillars:",
        items: [
          { label: "Heritage", text: "Rooted in traditional Indian textile and craft sensibility, never costume-like or clichéd." },
          { label: "Feminine Elegance", text: "Soft, confident, boutique-luxury, built for a discerning clientele." },
          { label: "Timelessness", text: "A mark designed to outlast trends, working equally well on a woven saree label or a storefront sign." },
        ],
      },
      {
        type: "image",
        images: [{ src: "/case-studies/dharohar/mood.jpg", caption: "Mood direction — heritage textiles, warm craft tones, and quiet feminine detail." }],
      },
      {
        type: "text",
        heading: "Colour Palette",
        body: [
          "The palette was developed to feel earthy, premium and distinctly Indian — deep olive for gravity and heritage, antique brass for warmth and craft, and soft ivory to keep the system light and boutique-appropriate.",
        ],
      },
      {
        type: "image",
        images: [{ src: "/case-studies/dharohar/palette.png", caption: "Final brand colour system, sampled directly from the approved artwork." }],
      },
      {
        type: "text",
        heading: "Typography System",
        body: [
          "The wordmark uses a refined Devanagari display letterform for 'धरोहर धागों की', chosen for its bold, heritage-driven character — confident enough to anchor the mark, warm enough to feel handcrafted rather than corporate.",
          "It is paired with a clean, neutral sans for supporting text — tags, care labels, packaging copy and digital use — to keep everyday communication legible at small sizes.",
        ],
      },
      {
        type: "image",
        images: [{ src: "/case-studies/dharohar/typography.png", caption: "Primary wordmark typeface — bold heritage display." }],
      },
      {
        type: "text",
        heading: "Logo Design Process",
        body: [
          "The design centres on the Devanagari letter 'ध' — the first sound of 'धरोहर' (heritage) — reimagined as a monogram. Rather than pairing the letter with a separate decorative icon, we built the brand's signature motif directly into the letterform's own strokes, so mark and symbolism read as one continuous gesture instead of two elements placed side by side.",
          "Early exploration focused on proportion and weight: how tall the stem should stand, how open the bowl needed to be to stay legible at small sizes, and where a supporting motif could grow naturally out of the letter's own terminals without overwhelming it.",
          "Once the core gesture was approved, we moved to precise construction — aligning the stem, bowl and flourish to a consistent grid so the mark holds its balance at every size, from a woven fabric tag to a full storefront sign.",
        ],
      },
      {
        type: "image",
        images: [{ src: "/case-studies/dharohar/logo-process.png", caption: "From rough construction sketch to the finalised, client-approved mark, on a proportion grid." }],
      },
      {
        type: "text",
        heading: "Final Logo",
        body: [
          "The finished mark balances a bold, heritage-inspired letterform in deep olive with a slender brass thread motif that curls away from the stem — a quiet nod to the brand's craft roots — resting above a soft, abstract fabric fold in warm tan. The result is a symbol that is distinctive on its own, without needing the full name beside it.",
        ],
      },
      {
        type: "image",
        images: [{ src: "/case-studies/dharohar/final-logo.png", caption: "Final, approved logo — delivered to the client in editable CDR format." }],
      },
      {
        type: "text",
        heading: "Brand Applications",
        body: [
          "To make sure the identity held up beyond the screen, we mocked up the logo across the client's real-world touchpoints — fabric and saree labels, product packaging, shopping bags, and storefront signage. The mark has since been put into production and is on display in the client's boutique.",
        ],
      },
      {
        type: "image",
        images: [{ src: "/case-studies/dharohar/applications.png", caption: "Logo applied across fabric labels, packaging, shopping bags and storefront signage." }],
      },
      {
        type: "list",
        heading: "Process & Timeline",
        intro: "The full identity — from first strategy conversation to final, print-ready artwork — was completed in one week across two structured rounds of revision:",
        items: [
          { label: "Day 1–2", text: "Brand strategy, mood direction and colour exploration." },
          { label: "Day 2–4", text: "Logo concept development around the 'ध' letterform." },
          { label: "Day 4–5", text: "Client review (Round 1) and refinement of the selected direction." },
          { label: "Day 5–6", text: "Final revision (Round 2), typography pairing and colour system lock." },
          { label: "Day 6–7", text: "Application mockups, final artwork preparation and CDR handoff." },
        ],
        note: "Using CorelDRAW for vector construction and Adobe Photoshop for texture, mockups and presentation.",
      },
      {
        type: "text",
        heading: "Outcome",
        body: [
          "धरोहर धागों की now has a complete, cohesive brand identity built for longevity — a monogram that is ownable and recognisable on its own, a colour and type system that extends cleanly across packaging and signage, and finished artwork the client can put into production immediately. The logo is currently in active use as in-store display signage at the client's boutique.",
        ],
      },
      {
        type: "quote",
        text: "They turned the meaning behind our name into a mark we're proud to hang in the shop — it feels like heritage, and it's ours.",
        name: "धरोहर धागों की",
        role: "Boutique Owner",
      },
    ],
  },
  {
    slug: "wafeeq-inclusive-digital-learning",
    product: "Wafeeq",
    tag: "EdTech · Accessibility · E-learning · Applied AI",
    title: "Wafeeq – Making Digital Learning More Inclusive",
    description:
      "Wafeeq is an inclusive digital learning platform created to make education, professional training, and career development more accessible to Deaf and Hard-of-Hearing learners.",
    accent: "#2C7DA0",
    bannerColor: "#F4A261",
    productInitial: "W",
    watchUrl: "#",
    stats: [
      { value: "227", label: "Screens Across Platform" },
      { value: "3", label: "Role-Based AI Agents" },
      { value: "Arabic + English", label: "Full Bilingual + RTL" },
      { value: "Applied AI", label: "Sign Practice + Agents" },
    ],
    sections: [
      {
        type: "image",
        align: "left",
        sideImage: {
          src: "/case-study/wafeeq/wafeeq-hero-5.png",
          alt: "Wafeeq Mobile App Screens",
        },
        images: [
          {
            src: "/case-study/wafeeq/hero-wafeeq.png"
          }
        ]
      },
      {
        type: "text",
        heading: "Project Overview",
        body: [
          "Wafeeq is an inclusive digital learning platform created to make education, professional training, and career development more accessible to Deaf and Hard-of-Hearing learners.",
          "Built around sign language and accessible digital learning, Wafeeq brings learners, certified trainers, educational content, and organizations together in one platform — spanning computer science, languages, business, design, photography, and education.",
          "But Wafeeq is not a course catalogue with captions added. It is a full sign-language learning ecosystem: a bilingual dictionary, a school curriculum, camera-based signing practice with real feedback, learning games, live trainer sessions, B2B billing, and an AI layer that runs through all of it.",
          "Industry: EdTech · Accessibility · E-learning · Applied AI | Audience: Deaf & Hard-of-Hearing learners, trainers, organizations, sponsors | Platform: Web & App (Arabic + English, full RTL) | Services: Website & App Development · Admin, Educator & Learner Dashboards · AI Sign Recognition · Role-Based AI Agents · AI Chat & Knowledge Base · Sign Language Dictionary · Digital Curriculum · Learning Games · Trainer Booking & Payments · Billing & Invoicing · Certification · Product Design · UI/UX",
        ],
      },
      {
        type: "text",
        heading: "The Challenge",
        body: [
          "For many Deaf and Hard-of-Hearing learners, access to education is not simply about having information available online. The bigger challenge is how that information is communicated.",
          "Traditional online learning platforms are designed around spoken instruction, audio, and text-heavy experiences. Captions help, but they assume the learner's first language is written text. For many Deaf learners it is not — sign language is.",
          "There is a second, quieter gap. Learning a sign language requires practice with feedback. You can watch a sign a hundred times and still perform it wrong, because nothing tells you what you got wrong. Most accessible-learning tools are one-directional: they show, they don't respond.",
          "And there is a third, on the operations side. A platform serving this community needs educators, approvals, payouts, curriculum, bookings, sponsorships and billing — a large surface that must stay manageable for a small team.",
          "Wafeeq was built to answer all three.",
        ],
      },
      {
        type: "text",
        heading: "The Vision",
        body: [
          "Wafeeq's vision goes beyond another online course platform. It aims to build a digital library of accessible educational content and help integrate Deaf and Hard-of-Hearing individuals into education and employment — through accessible content, professional trainers, practical skill development, certification, organizational training, and a growing ecosystem of educators and learners.",
        ],
      },
      {
        type: "fixedImage",
        src: "/case-study/wafeeq/bg-wafeeq.png",
        alt: "Wafeeq Platform Screens",
        aspectRatio: 1366 / 1060,
      },
      {
        type: "list",
        heading: "Understanding the Ecosystem",
        hideImage: true,
        intro: "Wafeeq is designed around multiple stakeholders, each with a dedicated dashboard, permission model, and — uniquely — their own AI assistant.",
        items: [
          {
            label: "01 · Learners",
            text: "People developing new skills, continuing their education, or strengthening career opportunities.",
          },
          {
            label: "02 · Trainers & Educators",
            text: "Certified sign-language experts who create courses, publish dictionary content, run live sessions, and earn from their work.",
          },
          {
            label: "03 · Organizations & Sponsors",
            text: "Businesses and institutions funding accessible training, for their own employees or as sponsored access for others.",
          },
          {
            label: "04 · Administrators",
            text: "A full operations layer: content approval, curriculum management, payouts, disputes, billing, analytics, and support.",
          },
          {
            label: "05 · The Accessibility Layer",
            text: "Sign language sits at the centre, transforming conventional digital education into an inclusive learning experience.",
          },
        ],
      },
      {
        type: "list",
        heading: "Learning by Doing: AI-Powered Sign Practice",
        hideImage: true,
        intro: "This is where Wafeeq departs most sharply from conventional e-learning.",
        items: [
          {
            label: "From Watching to Doing",
            text: "Watching a sign is not the same as being able to produce one. Wafeeq's AI Practice lets learners practise signing with their camera and receive scored feedback — turning passive viewing into active recall.",
          },
        ],
      },
      {
        type: "list",
        heading: "Two Practice Modes",
        hideImage: true,
        intro: "The system supports both receptive and productive practice:",
        items: [
          {
            label: "Sign Recognition",
            text: "The learner watches a real signed video from the dictionary and identifies its meaning. Receptive skill, scored exactly.",
          },
          {
            label: "Sign Challenge",
            text: "The learner picks a sign, watches the reference, then performs it on camera. The system compares their attempt against reference recordings and returns a similarity score plus structured diagnostics: which phase of the movement drifted, which hand contributed more error, whether the fault was handshape or hand path, and whether the timing was rushed or slow.",
          },
        ],
        note: "That diagnostic breakdown is the point. A score of \"72%\" teaches nothing. \"Your handshape is right but your hand travelled too far left in the second half\" teaches something.",
      },
      {
        type: "list",
        heading: "How It Works",
        hideImage: true,
        intro: "The recognition system is built for real-world conditions:",
        items: [
          {
            label: "Hand Tracking with MediaPipe",
            text: "Hand landmarks are tracked with MediaPipe, then normalised — translated to the wrist and scaled by the hand's own size — so that a learner sitting closer to the camera, or simply with larger hands, isn't penalised for it.",
          },
          {
            label: "Dynamic Time Warping Comparison",
            text: "Attempts are compared using Dynamic Time Warping, which aligns two sequences before measuring, so a correct sign performed slowly scores as correct.",
          },
          {
            label: "Multi-Signal Matching",
            text: "Comparison blends two signals: joint positions for where the hand travels, and bone angles for the shape it holds.",
          },
          {
            label: "Consistent Training Data",
            text: "Reference templates are extracted from the platform's own dictionary videos using the same tracking model the learner runs in their browser — a mismatch between the two would shift the coordinates just enough to poison the metric.",
          },
          {
            label: "Multiple Reference Templates",
            text: "Each sign carries several reference templates rather than one, because a single recording makes the score measure \"how closely do you resemble that specific signer\" as much as \"did you sign this correctly.\" Matching takes the distance to the closest template, so a learner whose style resembles any valid performance is scored on merit.",
          },
        ],
      },
      {
        type: "list",
        heading: "Privacy by Architecture, Not by Policy",
        hideImage: true,
        intro: "Privacy is fundamental to the design:",
        items: [
          {
            label: "Browser-Only Processing",
            text: "Matching runs entirely in the learner's browser. Reference templates are sent to the device; the camera feed never leaves it.",
          },
          {
            label: "No Video Upload",
            text: "Video is never uploaded at all. Only coordinate landmarks can be stored — and only when a learner has both rated the attempt themselves and explicitly opted in to contribute it.",
          },
          {
            label: "Built for This Audience",
            text: "That detail matters for this audience. A platform asking Deaf users to sign into a camera is asking for something personal. Wafeeq is built so the sensitive part never travels.",
          },
        ],
      },
      {
        type: "list",
        heading: "Progress That Reflects Reality",
        hideImage: true,
        intro: "Every attempt feeds a per-sign progress record:",
        items: [
          {
            label: "Comprehensive Tracking",
            text: "Accuracy, mastery level, improvement trend, and streaks are all tracked.",
          },
          {
            label: "Personal Dashboard",
            text: "The learner's progress dashboard shows weakest signs surfaced by name, accuracy by category, a seven-day activity history, and achievements computed from real numbers rather than displayed as decoration.",
          },
        ],
      },
      {
        type: "list",
        heading: "An AI Assistant for Every Role",
        hideImage: true,
        intro: "Most platforms add a chatbot that answers FAQs. Wafeeq built something different: three distinct AI agents that can actually operate the platform, each scoped to what its user is permitted to do.",
        items: [
          {
            label: "Shared Architecture, Different Scopes",
            text: "They share one architecture and one safety model. What differs is what each can see and touch.",
          },
        ],
      },
      {
        type: "list",
        heading: "The Admin Agent — Operations by Conversation",
        hideImage: true,
        intro: "Running a marketplace means constant review work: educator applications, course approvals, payout requests, revenue questions. The admin agent turns that into conversation.",
        items: [
          {
            label: "Dashboard Statistics",
            text: "It can pull dashboard statistics, revenue summaries by month and by course, educator earnings breakdowns, and payout positions.",
          },
          {
            label: "Review and Act",
            text: "It can inspect a pending educator or course and check it against requirements before recommending a decision. And it can act — approving or rejecting educators and courses, requesting changes, scheduling interviews, suspending or reactivating users, and releasing or rejecting withdrawals.",
          },
          {
            label: "Twenty-Five Capabilities",
            text: "Twenty-five capabilities in total, so an administrator can ask \"which courses are waiting on me and do any of them fail requirements?\" and get an answer grounded in live data rather than a dashboard hunt.",
          },
        ],
      },
      {
        type: "list",
        heading: "The Educator Agent — A Business Assistant",
        hideImage: true,
        intro: "Educators are running a small business on the platform, and most of their questions are financial or operational.",
        items: [
          {
            label: "Direct Answers",
            text: "The educator agent answers them directly: earnings summaries, earnings by course, wallet balance, withdrawal history and eligibility, payout details, upcoming bookings, quiz analytics, and which submissions are waiting to be graded.",
          },
          {
            label: "Act on Behalf",
            text: "It can also act on the educator's behalf — requesting or cancelling a withdrawal, creating a course, or submitting one for review.",
          },
          {
            label: "Checks Before Acting",
            text: "Critically, it checks before it acts. Asked to submit a course, it first verifies the course actually meets submission requirements and reports blockers instead of pushing through a rejection.",
          },
        ],
      },
      {
        type: "list",
        heading: "The Learner Agent — A Study Coach",
        hideImage: true,
        intro: "The learner agent is built around one question: what should I practise next?",
        items: [
          {
            label: "Personalized Recommendations",
            text: "It reads the learner's own practice history — weakest signs, strongest signs, signs not yet started — and recommends a next target.",
          },
          {
            label: "Progress and Support",
            text: "It reports streaks, badges, and learning-dashboard progress, searches the course catalogue, checks refund eligibility, and can set a daily practice reminder.",
          },
          {
            label: "Role-Based Access",
            text: "Every one of its tools is pinned to the caller. A learner's agent is structurally incapable of reading another learner's data.",
          },
        ],
      },
      {
        type: "list",
        heading: "The Safety Model Behind the Agents",
        hideImage: true,
        intro: "Giving an AI the ability to approve educators and release payouts is only responsible if the guardrails are real. Four layers make it so.",
        items: [
          {
            label: "Permission-Filtered Toolboxes",
            text: "Admin tools are filtered through the caller's role-based access scopes before the model ever sees them. If an administrator lacks a permission, the corresponding tool isn't hidden — it doesn't exist in that conversation. The model cannot attempt what it was never offered.",
          },
          {
            label: "Ownership Verification",
            text: "Educator tools are filtered by approval state, with ownership verified on every individual call.",
          },
          {
            label: "Staged Execution",
            text: "Nothing that changes data executes immediately. Every mutating action is staged, not run. The agent produces a plain-language summary of exactly what will happen and a confirmation token; the human presses Confirm.",
          },
          {
            label: "Token Security",
            text: "Tokens expire after five minutes and are consumed exactly once, backed by the database so the guarantee holds even across multiple server processes.",
          },
          {
            label: "Comprehensive Logging",
            text: "Each action writes an audit record — who acted, in what role, which tool, against which target, with what arguments, success or failure, the error if any, and the confirmation token that authorised it. Administrators review this in a dedicated Agent Actions view.",
          },
          {
            label: "Grounded Answers",
            text: "The agents answer from tool results, not from memory. Where a question needs platform knowledge rather than live data, retrieval runs over Wafeeq's own knowledge base using semantic search, with a text-search fallback when the active AI provider doesn't support embeddings.",
          },
          {
            label: "Context Injection",
            text: "Live account context is injected per role — and deliberately withheld from the agent path, so it fetches authoritative figures through tools instead of estimating from a summary.",
          },
        ],
      },
      {
        type: "list",
        heading: "AI Chat Across the Platform",
        hideImage: true,
        intro: "Alongside the agents, a general assistant runs site-wide — available to visitors and learners, in Arabic and English, answering questions about courses, pricing, educators, sponsorship, and how the platform works, grounded in the platform's own content.",
        items: [
          {
            label: "Provider-Independent",
            text: "Claude, OpenAI and Gemini sit behind a common interface. The active provider is configurable from the admin dashboard, and the system adapts to what each one supports — falling back gracefully where a capability like embeddings or tool-calling is unavailable.",
          },
          {
            label: "Cost-Controlled",
            text: "Every request is metered against per-role daily token budgets, split by operation type, with spend and cost reported to administrators. Budgets are measured before they are ever enforced, so limits can be calibrated against real traffic rather than guessed at.",
          },
          {
            label: "Resilient by Design",
            text: "When the AI is unavailable, over budget, or timing out, the platform doesn't show an error. A fallback layer detects what the user was asking about, answers from the knowledge base where it can, and returns a helpful bilingual response with relevant links — so an outage in a third-party API degrades the experience instead of breaking it.",
          },
          {
            label: "Observable",
            text: "Conversation volume, token spend and cost by provider, role and feature, latency percentiles, error and fallback rates, and per-tool agent usage all surface in an admin analytics view.",
          },
        ],
      },
      {
        type: "list",
        heading: "The Sign Language Dictionary",
        hideImage: true,
        intro: "A searchable bilingual dictionary sits at the heart of the platform, browsable by word, by letter, and by handshape — the way sign language is actually organised, rather than only alphabetically.",
        items: [
          {
            label: "Comprehensive Content",
            text: "It includes a full fingerspelling alphabet, handshape references, a rotating Sign of the Day, and per-word signed video in both Arabic and English.",
          },
          {
            label: "Personal and Professional",
            text: "Learners favourite words and build personal vocabulary; educators and admins publish and maintain entries from their own dashboards.",
          },
          {
            label: "Content Spine",
            text: "The dictionary is not a silo. It is the content spine feeding the practice engine, the games, and the curriculum.",
          },
        ],
      },
      {
        type: "list",
        heading: "Sign Academy: A Full Curriculum",
        hideImage: true,
        intro: "Beyond individual courses, Wafeeq includes a structured academic layer — grade levels, subjects, and lessons, with access gated by the learner's enrolled grade.",
        items: [
          {
            label: "School Infrastructure",
            text: "This reframes the platform from \"skills marketplace\" to \"school infrastructure\": a Deaf learner can follow a curriculum year by year, not just pick isolated courses.",
          },
        ],
      },
      {
        type: "list",
        heading: "Learning Through Play",
        hideImage: true,
        intro: "Sign language is a motor skill, and motor skills need repetition. Repetition needs motivation.",
        items: [
          {
            label: "Engaging Games",
            text: "Wafeeq includes learning games that drill vocabulary without feeling like drilling: fingerspelling challenges, guess-the-sign, learn-my-name, number and arithmetic practice, country and landmark discovery, monologue comprehension, and foundational modules.",
          },
          {
            label: "Progress Tracking",
            text: "A leaderboard layer tracks progress and competition.",
          },
        ],
      },
      {
        type: "list",
        heading: "Learning Through Expert Instructors",
        hideImage: true,
        intro: "Rather than treating accessibility as a feature, Wafeeq builds its educational experience around people with genuine expertise in sign-language education.",
        items: [
          {
            label: "Expert Instructor Network",
            text: "Instructors span sign-language interpretation, computer education, graphic design, photography, Arabic language, and professional training.",
          },
          {
            label: "Discovery-Based Learning",
            text: "Learners discover not only courses, but the people behind them.",
          },
          {
            label: "A Real Earnings System",
            text: "Educators aren't just contributors. The platform runs a complete earnings ledger, revenue split, withdrawal requests, and admin-managed payouts. Teaching on Wafeeq is a livelihood, not a donation.",
          },
        ],
      },
      {
        type: "list",
        heading: "Live Training: Hire a Trainer",
        hideImage: true,
        intro: "Recorded content cannot answer a question. For that, Wafeeq includes one-to-one live training.",
        items: [
          {
            label: "Seamless Booking",
            text: "Learners browse trainer profiles, book hourly sessions, and pay through the platform.",
          },
          {
            label: "Trainer Tools",
            text: "Trainers manage availability and requests from their dashboard.",
          },
          {
            label: "Admin Oversight",
            text: "Admins oversee bookings, commissions, session completion, and a formal dispute process with a defined resolution window.",
          },
        ],
      },
      {
        type: "list",
        heading: "Designed Around Different Learning Needs",
        hideImage: true,
        intro: "Wafeeq supports multiple levels of learning, from beginner to advanced:",
        items: [
          {
            label: "01 · Video-based learning",
            text: "Structured lessons at the learner's own pace.",
          },
          {
            label: "02 · Sign-language expertise",
            text: "Content built for Deaf learners by default, not adapted afterwards.",
          },
          {
            label: "03 · Assessments",
            text: "Quizzes and evaluations as part of the journey.",
          },
          {
            label: "04 · Certification",
            text: "Verifiable digital certificates with public verification links and QR codes.",
          },
          {
            label: "05 · Feedback",
            text: "Learners rate courses, feeding continuous improvement.",
          },
        ],
      },
      {
        type: "list",
        heading: "Built Bilingual, Not Translated",
        hideImage: true,
        intro: "Wafeeq is fully bilingual in Arabic and English, including complete right-to-left layout — across the marketing site, all dashboards, the dictionary, the AI assistants, and the practice tools.",
        items: [
          {
            label: "Independent Recordings",
            text: "Dictionary entries carry signed video in both languages, meaning each sign has two independent recordings rather than one recording with a translated label.",
          },
          {
            label: "Proper RTL Documents",
            text: "Invoices, receipts and certificates generate as genuine Arabic documents, not mirrored English layouts.",
          },
          {
            label: "Structural Property",
            text: "For a platform targeting the Arab world, this is a structural property of the content model, not a localisation pass added at the end.",
          },
        ],
      },
      {
        type: "list",
        heading: "From Learning to Career Development",
        hideImage: true,
        intro: "Practical skills focus that translates into real opportunities:",
        items: [
          {
            label: "Practical Skills Focus",
            text: "Computer fundamentals, Windows, Adobe Illustrator, photography, Arabic, communication, and business subjects: knowledge usable beyond the platform.",
          },
          {
            label: "Capability Building",
            text: "Less about consuming content, more about building capability — and proving it with certification.",
          },
        ],
      },
      {
        type: "list",
        heading: "A Platform for Organizations Too",
        hideImage: true,
        intro: "Organizations can work with Wafeeq for customized learning paths and training programs, with tailored curricula, priority support, partner resources, and CSR reporting for sponsors who need to demonstrate impact.",
        items: [
          {
            label: "Connected Ecosystem",
            text: "Learners ↔ Trainers ↔ Organizations",
          },
        ],
      },
      {
        type: "text",
        heading: "Billing Built In, Not Bolted On",
        body: [
          "Selling training to an organization is a different transaction from a learner buying a course. It involves quotes, purchase approvals, finance departments, and paperwork that has to look official.",
        ],
      },
      {
        type: "list",
        heading: "Invoice Creation",
        hideImage: true,
        intro: "Administrators build professional invoices with complete control:",
        items: [
          {
            label: "Full Customisation",
            text: "Itemised line items with quantities and rates, custom service titles, currency selection, issue and due dates, and notes.",
          },
          {
            label: "Live Calculation",
            text: "Totals calculate live, and the PDF previews before anything is saved or sent.",
          },
        ],
      },
      {
        type: "list",
        heading: "Signed and Stamped",
        hideImage: true,
        intro: "Each invoice carries the professionalism that finance departments expect:",
        items: [
          {
            label: "Digital Signature",
            text: "Each invoice carries a digital signature drawn in the browser.",
          },
          {
            label: "Company Stamp",
            text: "A company stamp and a named preparer with title.",
          },
          {
            label: "Professional Output",
            text: "The output is a document a finance department will accept, not a styled web page.",
          },
        ],
      },
      {
        type: "list",
        heading: "Bilingual Documents, Properly Typeset",
        hideImage: true,
        intro: "Invoices and receipts generate in English and Arabic, rendered through a headless browser from a data-driven template with embedded fonts:",
        items: [
          {
            label: "Genuine Arabic Documents",
            text: "The Arabic version is a genuine RTL translation with its own wordmark — not the English layout mirrored.",
          },
        ],
      },
      {
        type: "list",
        heading: "Paid by Link, No Account Needed",
        hideImage: true,
        intro: "Organizations can pay without joining the platform:",
        items: [
          {
            label: "Public Token System",
            text: "Every invoice gets a unique public token. The client opens a link, reads the invoice, and pays by card — without registering or being onboarded.",
          },
          {
            label: "Download Access",
            text: "They download the invoice before paying and the receipt after.",
          },
        ],
      },
      {
        type: "list",
        heading: "Reconciliation That Holds Up",
        hideImage: true,
        intro: "An invoice can become paid three independent ways:",
        items: [
          {
            label: "Three Payment Paths",
            text: "The client's inline payment, the payment provider's webhook, or an administrator manually reconciling.",
          },
          {
            label: "Atomic Latch",
            text: "All three converge on a single atomic latch, so whichever arrives first sends notifications and the rest safely do nothing. No duplicate emails, no double-counted revenue.",
          },
        ],
      },
      {
        type: "list",
        heading: "Everyone Hears at Once",
        hideImage: true,
        intro: "When payment lands, everyone gets notified:",
        items: [
          {
            label: "Billing Team",
            text: "The billing team is emailed with amount and transaction reference and the receipt attached.",
          },
          {
            label: "Administrators",
            text: "Every administrator gets an in-app notification deep-linked to the invoice.",
          },
          {
            label: "Client",
            text: "The client receives their receipt in both languages.",
          },
        ],
      },
      {
        type: "list",
        heading: "Learner Receipts Too",
        hideImage: true,
        intro: "Every learner payment produces its own downloadable invoice, accessible from their dashboard.",
        items: [],
      },
      {
        type: "list",
        heading: "Empowerment Beyond the Platform",
        hideImage: true,
        intro: "Sponsors — individual or corporate — fund educational bundles giving beneficiaries access to multiple courses from certified trainers, with certificates on completion.",
        items: [
          {
            label: "Sponsor Tools",
            text: "Sponsors receive redeemable coupon codes, activation flows, and reporting on how their sponsorship was used. Gift cards extend the same idea to individuals.",
          },
          {
            label: "Working Mechanism",
            text: "This creates a working mechanism for organizations and individuals to actively fund access to education — and to see where it went.",
          },
        ],
      },
      {
        type: "list",
        heading: "Under the Hood",
        hideImage: true,
        intro: "The platform is a production system, not a prototype.",
        items: [
          {
            label: "227 Distinct Screens",
            text: "152 across the admin, educator and learner dashboards; 66 across the public experience.",
          },
          {
            label: "Three AI Agents",
            text: "Role-scoped with 55 combined capabilities, permission-filtered toolsets, staged confirmation for every mutation, and a full audit trail.",
          },
          {
            label: "Multi-Provider AI Layer",
            text: "Claude, OpenAI and Gemini behind one interface, with token budgeting, cost analytics, and a layered offline fallback.",
          },
          {
            label: "On-Device Sign Recognition",
            text: "MediaPipe tracking with DTW matching, running entirely in the browser.",
          },
          {
            label: "Role-Based Access Control",
            text: "With granular permissions and a dedicated admin role editor.",
          },
          {
            label: "Dual Payment Gateways",
            text: "PayPal and Sadad Qatar, with refunds, coupons, gift cards, and live transaction monitoring.",
          },
          {
            label: "Full B2B Invoicing",
            text: "Bilingual PDF generation, digital signatures, public pay-by-link, and idempotent reconciliation across three settlement paths.",
          },
          {
            label: "Automated Certificate Generation",
            text: "With public verification.",
          },
          {
            label: "Security Throughout",
            text: "Rate limiting, input sanitisation, injection and XSS protection, JWT authentication.",
          },
          {
            label: "Full Operations Layer",
            text: "Support ticketing, notifications, badges, events, analytics, earnings reconciliation and payout management.",
          },
        ],
      },
      {
        type: "list",
        heading: "Building an Inclusive Digital Ecosystem",
        hideImage: true,
        intro: "Wafeeq's approach combines three ideas:",
        items: [
          {
            label: "01 · Accessibility",
            text: "Education should exist in a format that works for Deaf and Hard-of-Hearing learners from the start.",
          },
          {
            label: "02 · Skill Development",
            text: "Learning should translate into practical capability.",
          },
          {
            label: "03 · Opportunity",
            text: "Better access to education creates stronger pathways into employment.",
          },
        ],
      },
      {
        type: "text",
        heading: "The Impact",
        body: [
          "The real value of Wafeeq is not measured only by the number of courses available. It is measured by the opportunities those courses can create.",
          "Every accessible lesson can represent: A new skill. A new qualification. A new career possibility. A stronger connection to the workforce.",
          "And ultimately, a step toward a more inclusive digital and professional environment.",
        ],
      },
      {
        type: "list",
        heading: "What Makes Wafeeq Different",
        hideImage: true,
        intro: "Most learning platforms optimize for convenience. Wafeeq optimizes for inclusion.",
        items: [
          {
            label: "Accessibility-First Design",
            text: "Instead of asking Deaf learners to adapt to conventional online education, Wafeeq builds the ecosystem around their communication needs.",
          },
          {
            label: "Interactive, Not Just Accessible",
            text: "Most accessible-learning tools present content. Wafeeq responds — watching a learner sign and telling them how they did. That shift, from broadcast to feedback, is the difference between a library and a teacher.",
          },
          {
            label: "AI That Does the Work, Not Just Answers Questions",
            text: "The assistants don't only explain the platform; they operate it, within permissions, behind confirmation, on the record. That is a materially harder thing to build than a chatbot, and it is what keeps a platform this broad manageable by a small team.",
          },
          {
            label: "Built for the Language, Not Retrofitted",
            text: "Browsing by handshape, two independent signed recordings per word, facial expression treated as content rather than decoration: decisions only a platform designed around sign language would make.",
          },
        ],
      },
      {
        type: "text",
        heading: "The Bigger Picture",
        body: [
          "Wafeeq's ambition is to become a leading source of digital sign-language content across the Arab world and globally, while helping Deaf and Hard-of-Hearing individuals integrate into governmental and non-governmental workplaces.",
          "That makes the platform part of a larger movement: making digital education accessible to everyone.",
          "Because accessibility isn't an extra layer of technology. It is part of the experience itself.",
        ],
      },
      {
        type: "text",
        heading: "The Outcome",
        body: [
          "Wafeeq brings together education, accessibility, and opportunity into one digital ecosystem.",
          "From discovering a course, to learning from specialized instructors, to practising signs on camera with real feedback, to asking an AI coach what to work on next — through assessments, verifiable certificates, live training, and career-ready skills — the platform creates a genuinely more inclusive path for Deaf and Hard-of-Hearing learners.",
          "Wafeeq is not simply helping people learn. It is helping make learning — and the opportunities that come with it — more accessible.",
        ],
      },
      {
        type: "quote",
        text: "Accessibility isn't an extra layer of technology — it is part of the experience itself. Wafeeq optimizes for inclusion, not convenience.",
        name: "Wafeeq",
        role: "Inclusive Digital Learning Platform",
      },
    ],
  },
  {
    slug: "camera-market-dehradun-photography-e-commerce",
    product: "Camera Market Dehradun",
    tag: "E-commerce · Photography · Consumer Electronics",
    title: "Camera Market Dehradun – Bringing a Local Camera Store Online",
    description:
      "A photography equipment store built for creators, photographers, filmmakers, and enthusiasts looking for reliable camera gear and accessories.",
    accent: "#1E3A8A",
    bannerColor: "#F59E0B",
    productInitial: "C",
    heroImage: "/ai-card/ai-poster.jpg",
    watchUrl: "#",
    stats: [
      { value: "7+ Years", label: "Retail Experience" },
      { value: "Multiple", label: "Product Categories" },
      { value: "New & Pre-Owned", label: "Equipment Options" },
      { value: "24/7", label: "Online Support" },
    ],
    sections: [
      {
        type: "text",
        heading: "Project Overview",
        body: [
          "Camera Market Dehradun is a photography equipment store built for creators, photographers, filmmakers, and enthusiasts looking for reliable camera gear and accessories.",
          "With a wide product range spanning cameras, lenses, action cameras, drones, gimbals, lighting equipment, audio gear, tripods, bags, and accessories, the business brings a specialized photography retail experience to an online audience.",
          "The digital platform extends the store experience beyond its physical location—allowing customers to discover products, explore specifications, compare options, and purchase photography equipment online.",
          "Industry: E-commerce · Photography · Consumer Electronics | Audience: Photographers · Creators · Filmmakers · Vloggers · Photography Enthusiasts | Platform: E-commerce Website | Services: Digital Experience · UI/UX · E-commerce",
        ],
      },
      {
        type: "text",
        heading: "The Challenge",
        body: [
          "Buying camera equipment is very different from buying everyday products. A camera, lens, microphone, gimbal, or lighting setup can represent a significant investment. Customers often need to understand specifications, compatibility, use cases, pricing, and available alternatives before making a decision.",
          "For a specialized local camera retailer, the challenge was therefore bigger than simply putting products online.",
          "The digital experience needed to communicate: What is the product? Is it right for me? How much does it cost? What alternatives are available? Can I trust the seller?",
          "The goal was to create an online shopping experience that could carry the trust and expertise of a physical camera store into the digital space.",
        ],
      },
      {
        type: "fixedImage",
        src: "/case-study/camera/1.jpg",
        alt: "Camera Market Dehradun storefront design",
        aspectRatio: 1280 / 1011,
      },
      {
        type: "text",
        heading: "The Objective",
        body: [
          "The objective was to establish a strong digital storefront for Camera Market Dehradun that could serve both experienced professionals and customers buying their first piece of camera equipment.",
          "The experience needed to make it easy to discover photography equipment, navigate large product categories, find specific cameras and accessories, understand product information, identify deals and new arrivals, explore pre-owned equipment, make purchasing decisions confidently, and complete purchases online.",
          "The broader goal was simple: Turn a local photography store into an accessible digital shopping destination for creators.",
        ],
      },
      {
        type: "list",
        heading: "Understanding the Product Ecosystem",
        hideImage: true,
        intro: "Camera equipment is rarely purchased as a single category. A photographer might begin with a camera and then need a lens. A filmmaker may need a camera, gimbal, microphone, lights, and tripod. The platform therefore organizes its catalog around a broad photography ecosystem:",
        items: [
          {
            label: "Cameras",
            text: "DSLR, mirrorless, instant cameras, and instant printers.",
          },
          {
            label: "Lenses",
            text: "Different lens types and focal lengths for different photography requirements.",
          },
          {
            label: "Action Cameras",
            text: "Compact cameras designed for travel, sports, outdoor content, and vlogging.",
          },
          {
            label: "Drones",
            text: "Aerial photography and videography equipment.",
          },
          {
            label: "Gimbals",
            text: "Mobile and DSLR stabilization equipment.",
          },
          {
            label: "Accessories",
            text: "Lights, tripods, microphones, softboxes, flashes, camera bags, straps, and other equipment.",
          },
          {
            label: "Pre-Owned",
            text: "Previously owned equipment for customers looking for alternative price points.",
          },
        ],
        note: "The current navigation reflects this category-driven approach, allowing shoppers to move directly into major product groups.",
      },
      {
        type: "text",
        heading: "Creating a Digital Storefront",
        body: [
          "The homepage acts as the starting point for the shopping journey. Instead of overwhelming visitors with the entire catalog, the experience introduces key product categories, promotional offers, brands, and products.",
          "The homepage highlights shopping opportunities such as flash deals, cameras, action cameras, microphones, lenses, lights, gimbals, tripods, and accessories.",
          "This creates multiple entry points depending on what the customer already knows. A customer can start with a product category, a specific product, a deal, or a brand and continue deeper into the catalog.",
        ],
      },
      {
        type: "text",
        heading: "Product Discovery",
        body: [
          "Product discovery is one of the most important parts of the experience. Camera Market's catalog covers a wide range of products, from professional full-frame cameras to compact action cameras and everyday accessories.",
          "The product listing experience provides users with key information such as: Product name → Pricing → Sale information → Availability → Purchase action",
          "For example, the camera category currently includes products from brands and product lines such as Sony, Nikon, Panasonic, Fujifilm, DJI, and Insta360. This allows users to quickly scan the catalog and identify products worth exploring further.",
        ],
      },
      {
        type: "text",
        heading: "Helping Customers Make Better Decisions",
        body: [
          "Photography equipment often requires more consideration than a normal e-commerce purchase. A product page therefore needs to answer more than just 'How much does it cost?' It needs to answer: 'What can I do with it?'",
          "Product pages provide detailed product descriptions and specifications to help customers understand the equipment before purchasing.",
          "For example, product information for the DJI Osmo Nano explains its sensor, 4K recording capability, wide-angle field of view, battery life, portability, and connectivity features. This transforms the product page from a simple sales page into a decision-making tool.",
        ],
      },
      {
        type: "text",
        heading: "Bringing the Physical Store Online",
        body: [
          "One of the strongest aspects of Camera Market is its connection to a physical retail presence. The company describes itself as a photography destination in Dehradun with more than seven years of experience, serving beginners, professional photographers, and photography enthusiasts.",
          "The online experience therefore isn't intended to replace the physical store. Instead, it extends the relationship.",
          "A customer can discover products online, understand what they need, and then make a purchase—or use the digital platform as a starting point for a conversation with the store.",
          "This creates a bridge between: Physical expertise + Digital convenience",
        ],
      },
      {
        type: "text",
        heading: "Designed for Beginners and Professionals",
        body: [
          "Photography communities are diverse. One customer may be buying their first camera. Another may already understand sensor sizes, focal lengths, codecs, stabilization, and lens compatibility.",
          "The platform needs to serve both. For beginners, clear categories and product descriptions help reduce complexity.",
          "For experienced users, detailed product information and brand/product discovery allow them to move quickly toward the equipment they need.",
          "The result is an experience that doesn't assume every customer has the same level of technical knowledge.",
        ],
      },
      {
        type: "text",
        heading: "New & Pre-Owned Equipment",
        body: [
          "Another important part of the ecosystem is the presence of pre-owned equipment. For photography enthusiasts, pre-owned gear can provide access to higher-end equipment at a different price point.",
          "Camera Market includes a dedicated pre-owned section alongside its new product catalog. This broadens the platform's appeal beyond customers who are only looking for brand-new equipment.",
        ],
      },
      {
        type: "journey",
        heading: "THE COMMERCE JOURNEY",
        intro: "The overall shopping journey can be understood as:",
        steps: [
          {
            number: "01",
            title: "Discover",
            description: "Explore categories, deals, brands, and new products.",
            icon: "compass"
          },
          {
            number: "02",
            title: "Explore",
            description: "Browse products and identify relevant equipment.",
            icon: "search"
          },
          {
            number: "03",
            title: "Evaluate",
            description: "Review images, specifications, pricing, availability, and product information.",
            icon: "clipboard-check"
          },
          {
            number: "04",
            title: "Decide",
            description: "Choose the right equipment based on requirements and budget.",
            icon: "check-circle"
          },
          {
            number: "05",
            title: "Purchase",
            description: "Add the product to cart and proceed through checkout.",
            icon: "shopping-cart"
          },
          {
            number: "06",
            title: "Continue",
            description: "Return for accessories, upgrades, or additional equipment as the customer's photography journey evolves.",
            icon: "refresh-cw"
          }
        ],
        conclusion: "This creates an ecosystem rather than a one-time transaction.",
      },
      {
        type: "list",
        heading: "The Business Opportunity",
        hideImage: true,
        intro: "Moving a specialized camera store online creates opportunities beyond geographical reach. The digital storefront can:",
        items: [
          { text: "Expand the customer base beyond Dehradun" },
          { text: "Make the catalog accessible 24/7" },
          { text: "Showcase new arrivals instantly" },
          { text: "Promote deals and offers" },
          { text: "Support product discovery" },
          { text: "Create a searchable product catalog" },
          { text: "Enable direct online purchasing" },
          { text: "Build a stronger digital presence for the brand" },
        ],
        note: "The result is a business that can operate across both local retail and digital commerce.",
      },
      {
        type: "text",
        heading: "The Result",
        body: [
          "Camera Market Dehradun's digital presence transforms a specialized local camera retailer into an online destination for photography equipment.",
          "The platform brings together: Products + Expertise + Discovery + Convenience + Trust",
          "From a first-time creator looking for a compact camera to an experienced photographer searching for a professional lens, the platform provides a digital path to explore and purchase photography equipment.",
        ],
      },
      {
        type: "text",
        heading: "More Than an Online Store",
        body: [
          "Camera Market's story is ultimately about making specialized photography equipment easier to discover and access.",
          "The platform takes the expertise and product range of a local camera store and extends it into a digital environment where customers can browse, evaluate, and purchase equipment from anywhere.",
          "From a local destination for photographers to a digital storefront for creators.",
        ],
      },
      {
        type: "quote",
        text: "From a local destination for photographers to a digital storefront for creators — helping them find the gear to capture their next story.",
        name: "Camera Market Dehradun",
        role: "Photography Equipment Retailer",
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
