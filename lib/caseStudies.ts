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
  | { type: "image"; heading?: string; intro?: string; images: { src: string; caption?: string }[] }
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
    title: "Building a Premium Digital Presence on a Lean Budget",
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
];

export function getAllCaseStudies(): CaseStudy[] {
  return CASE_STUDIES;
}

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((c) => c.slug === slug);
}
