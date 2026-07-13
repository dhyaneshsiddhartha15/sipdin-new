/**
 * "Our Recent Work" — social-media campaign case studies shown as a poster
 * gallery on the homepage, each linking to a detailed campaign page.
 * Content is based on real Sidpin client Instagram pages.
 */

export type PlatformPerf = {
  platform: string; // Instagram, Facebook, YouTube...
  rows: { label: string; value: string; delta: string }[];
};

export type RecentWork = {
  slug: string;
  brand: string;
  handle: string; // @handle
  instagramUrl: string;
  category: string; // shown on the poster card
  industry: string;
  duration: string;
  platforms: string[];
  heroTitle: string;
  heroTitleAccent: string; // second line, coloured
  intro: string;
  productLine: string; // small tagline on the highlight card
  accent: string; // lime/brand accent for this campaign
  gradient: [string, string]; // poster + highlight gradient
  heroStat: { value: string; label: string };
  results: { value: string; label: string }[]; // 5
  platformPerf: PlatformPerf[];
  clientQuote: { text: string; name: string; role: string };
  logo?: string; // optional logo path
};

const RECENT_WORK: RecentWork[] = [
  {
    slug: "raga-rishikesh",
    brand: "Raga Rishikesh",
    handle: "@ragarishikesh",
    instagramUrl: "https://www.instagram.com/ragarishikesh",
    category: "WELLNESS",
    logo: "/work/raga-rishikesh.jpg",
    industry: "Wellness & Retreats",
    duration: "90 Days",
    platforms: ["Instagram", "Facebook", "YouTube"],
    heroTitle: "Boosting Brand Presence.",
    heroTitleAccent: "Driving Real Results.",
    intro:
      "A 90-day social media campaign for a Rishikesh wellness retreat that grew followers, deepened engagement, and turned attention into real retreat bookings.",
    productLine: "Wellness experiences on the banks of the Ganga.",
    accent: "#C6F24E",
    gradient: ["#1f3d2b", "#0c1a12"],
    heroStat: { value: "298%", label: "Engagement Growth" },
    results: [
      { value: "+298%", label: "Engagement" },
      { value: "+172%", label: "Follower Growth" },
      { value: "+210%", label: "Website Traffic" },
      { value: "+164%", label: "Leads Generated" },
      { value: "+140%", label: "Bookings Increase" },
    ],
    platformPerf: [
      { platform: "Instagram", rows: [{ label: "Followers", value: "11.4K", delta: "+220%" }, { label: "Engagement", value: "8.2%", delta: "+180%" }, { label: "Reach", value: "210K", delta: "+300%" }] },
      { platform: "Facebook", rows: [{ label: "Followers", value: "7.1K", delta: "+140%" }, { label: "Engagement", value: "5.8%", delta: "+120%" }, { label: "Reach", value: "150K", delta: "+190%" }] },
      { platform: "YouTube", rows: [{ label: "Subscribers", value: "2.6K", delta: "+150%" }, { label: "Views", value: "64K", delta: "+210%" }, { label: "Watch Time", value: "9K hrs", delta: "+170%" }] },
    ],
    clientQuote: {
      text: "Sidpin captured the calm and energy of our retreats perfectly. Our bookings and reach grew faster than we imagined.",
      name: "Raga Rishikesh",
      role: "Wellness Retreat",
    },
  },
  {
    slug: "hith-yoga",
    brand: "Hith Yoga",
    handle: "@hithyoga",
    instagramUrl: "https://www.instagram.com/hithyoga",
    category: "YOGA",
    logo: "/work/hith-yoga.jpg",
    industry: "Yoga & Lifestyle",
    duration: "90 Days",
    platforms: ["Instagram", "Facebook", "YouTube"],
    heroTitle: "Building a Practice.",
    heroTitleAccent: "Growing a Community.",
    intro:
      "A content-led campaign for a modern yoga studio — reels, education, and consistency that turned a quiet page into a growing, engaged community.",
    productLine: "Yoga for a stronger, calmer everyday.",
    accent: "#8BE9FD",
    gradient: ["#12303a", "#0a1620"],
    heroStat: { value: "265%", label: "Engagement Growth" },
    results: [
      { value: "+265%", label: "Engagement" },
      { value: "+188%", label: "Follower Growth" },
      { value: "+205%", label: "Website Traffic" },
      { value: "+150%", label: "Leads Generated" },
      { value: "+132%", label: "Enrollment Increase" },
    ],
    platformPerf: [
      { platform: "Instagram", rows: [{ label: "Followers", value: "13.2K", delta: "+240%" }, { label: "Engagement", value: "9.1%", delta: "+200%" }, { label: "Reach", value: "245K", delta: "+310%" }] },
      { platform: "Facebook", rows: [{ label: "Followers", value: "6.4K", delta: "+130%" }, { label: "Engagement", value: "6.0%", delta: "+120%" }, { label: "Reach", value: "165K", delta: "+200%" }] },
      { platform: "YouTube", rows: [{ label: "Subscribers", value: "3.1K", delta: "+160%" }, { label: "Views", value: "78K", delta: "+220%" }, { label: "Watch Time", value: "12K hrs", delta: "+180%" }] },
    ],
    clientQuote: {
      text: "They understood our vision instantly and turned it into a calm, beautiful digital experience. Our bookings keep growing.",
      name: "Rohan Rawat",
      role: "Hith Yoga",
    },
  },
  {
    slug: "camera-market-dehradun",
    brand: "Camera Market Dehradun",
    handle: "@cameramarketdehradun",
    instagramUrl: "https://www.instagram.com/cameramarketdehradun",
    category: "RETAIL",
    industry: "Electronics Retail",
    duration: "90 Days",
    platforms: ["Instagram", "Facebook"],
    heroTitle: "Turning Gear Into",
    heroTitleAccent: "Footfall & Sales.",
    intro:
      "A product-led social campaign for a camera & electronics retailer — deal-driven reels and local targeting that pulled buyers off the feed and into the store.",
    productLine: "Cameras, lenses & gear for every creator.",
    accent: "#FFB020",
    gradient: ["#3a2a12", "#1a1206"],
    heroStat: { value: "240%", label: "Engagement Growth" },
    results: [
      { value: "+240%", label: "Engagement" },
      { value: "+160%", label: "Follower Growth" },
      { value: "+230%", label: "Store Enquiries" },
      { value: "+185%", label: "Leads Generated" },
      { value: "+150%", label: "Sales Increase" },
    ],
    platformPerf: [
      { platform: "Instagram", rows: [{ label: "Followers", value: "9.8K", delta: "+210%" }, { label: "Engagement", value: "7.6%", delta: "+170%" }, { label: "Reach", value: "190K", delta: "+280%" }] },
      { platform: "Facebook", rows: [{ label: "Followers", value: "8.9K", delta: "+150%" }, { label: "Engagement", value: "6.4%", delta: "+130%" }, { label: "Reach", value: "175K", delta: "+210%" }] },
    ],
    clientQuote: {
      text: "Our reels started pulling real buyers into the store. The team knew exactly how to turn attention into sales.",
      name: "Camera Market Dehradun",
      role: "Electronics Retailer",
    },
  },
  {
    slug: "panchbhoot-yog",
    brand: "Panchbhoot Yog",
    handle: "@panchbhootyog",
    instagramUrl: "https://www.instagram.com/panchbhootyog",
    category: "YOGA",
    industry: "Yoga & Wellness",
    duration: "90 Days",
    platforms: ["Instagram", "Facebook", "YouTube"],
    heroTitle: "Ancient Wisdom.",
    heroTitleAccent: "Modern Reach.",
    intro:
      "A storytelling-first campaign for a traditional yoga brand — rooting content in the five elements while making it feel current, shareable, and discoverable.",
    productLine: "Yoga rooted in the five elements of nature.",
    accent: "#B794F6",
    gradient: ["#2a1f45", "#140f24"],
    heroStat: { value: "252%", label: "Engagement Growth" },
    results: [
      { value: "+252%", label: "Engagement" },
      { value: "+176%", label: "Follower Growth" },
      { value: "+198%", label: "Website Traffic" },
      { value: "+158%", label: "Leads Generated" },
      { value: "+138%", label: "Program Signups" },
    ],
    platformPerf: [
      { platform: "Instagram", rows: [{ label: "Followers", value: "10.6K", delta: "+215%" }, { label: "Engagement", value: "8.4%", delta: "+185%" }, { label: "Reach", value: "205K", delta: "+295%" }] },
      { platform: "Facebook", rows: [{ label: "Followers", value: "5.9K", delta: "+125%" }, { label: "Engagement", value: "5.6%", delta: "+115%" }, { label: "Reach", value: "145K", delta: "+185%" }] },
      { platform: "YouTube", rows: [{ label: "Subscribers", value: "2.9K", delta: "+155%" }, { label: "Views", value: "71K", delta: "+205%" }, { label: "Watch Time", value: "10K hrs", delta: "+175%" }] },
    ],
    clientQuote: {
      text: "Sidpin captured the spirit of our practice and brought it to a whole new audience — beautifully and authentically.",
      name: "Akshat Trivedi",
      role: "Panchbhoot Yog",
    },
  },
  {
    slug: "himalayan-yogi",
    brand: "A Himalayan Yogi",
    handle: "@ahimalayanyogi",
    instagramUrl: "https://www.instagram.com/ahimalayanyogi",
    category: "WELLNESS",
    industry: "Yoga & Spirituality",
    duration: "90 Days",
    platforms: ["Instagram", "YouTube"],
    heroTitle: "From the Himalayas.",
    heroTitleAccent: "To the World.",
    intro:
      "A personal-brand campaign for a Himalayan yoga teacher — cinematic reels and consistent storytelling that built authority and a global following.",
    productLine: "Authentic Himalayan yoga & meditation.",
    accent: "#68D391",
    gradient: ["#173a2c", "#0b1a13"],
    heroStat: { value: "274%", label: "Engagement Growth" },
    results: [
      { value: "+274%", label: "Engagement" },
      { value: "+192%", label: "Follower Growth" },
      { value: "+216%", label: "Profile Visits" },
      { value: "+168%", label: "Leads Generated" },
      { value: "+145%", label: "Course Interest" },
    ],
    platformPerf: [
      { platform: "Instagram", rows: [{ label: "Followers", value: "14.1K", delta: "+250%" }, { label: "Engagement", value: "9.4%", delta: "+205%" }, { label: "Reach", value: "260K", delta: "+320%" }] },
      { platform: "YouTube", rows: [{ label: "Subscribers", value: "3.4K", delta: "+170%" }, { label: "Views", value: "84K", delta: "+230%" }, { label: "Watch Time", value: "13K hrs", delta: "+190%" }] },
    ],
    clientQuote: {
      text: "Their creativity, strategy, and consistency helped me reach people across the world. My presence has never been stronger.",
      name: "A Himalayan Yogi",
      role: "Yoga Teacher",
    },
  },
];

export function getAllRecentWork(): RecentWork[] {
  return RECENT_WORK;
}

export function getRecentWorkBySlug(slug: string): RecentWork | undefined {
  return RECENT_WORK.find((w) => w.slug === slug);
}
