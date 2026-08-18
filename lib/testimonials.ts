/**
 * Client reviews — single source shared by the service detail pages
 * (ReviewsAndConnect carousel and the service "Reviews" section).
 */

export type ClientReview = {
  quote: string;
  name: string;
  role: string;
  /** Roughly how recent the review is — shown on the Google-style cards. */
  when?: string;
};

export const clientReviews: ClientReview[] = [
  {
    quote:
      "Sidpin took our 70-year Rudraksha legacy online with complete authenticity. Our sales and customer trust have never been stronger.",
    name: "Avish Bansal",
    role: "Rudradharma",
    when: "2 weeks ago",
  },
  {
    quote:
      "Our brand finally looks as strong as our training. Enquiries went up the moment the new site went live — great work team.",
    name: "Ankit Rawat",
    role: "AG Fitness",
    when: "1 month ago",
  },
  {
    quote:
      "They understood our vision instantly and turned it into a calm, beautiful digital experience. Our bookings keep growing month on month.",
    name: "Rohan Rawat",
    role: "Yog Adhyayan",
    when: "1 month ago",
  },
  {
    quote:
      "On a lean budget they delivered a website that competes with global hospitality brands. Prospective students notice the difference immediately.",
    name: "Shubham Rayal",
    role: "Raboche Institute of Technology & Management",
    when: "2 months ago",
  },
  {
    quote:
      "Sidpin captured the spirit of our journeys perfectly. The content and reach they created brought in a whole new audience.",
    name: "Akshat Trivedi",
    role: "Panchbhootyatra",
    when: "3 months ago",
  },
  {
    quote:
      "Professional, transparent, and genuinely invested in our mission. The results spoke for themselves within weeks.",
    name: "Anuj Dhasmana",
    role: "Rescue by Anuj",
    when: "3 months ago",
  },
  {
    quote:
      "Our bookings and online presence transformed completely. Guests now find and trust us before they ever arrive.",
    name: "Krishna Singh Rawat",
    role: "Mazri Grant Resort",
    when: "4 months ago",
  },
];

/** Initials for the avatar circle on review cards. */
export function reviewInitials(name: string): string {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}
