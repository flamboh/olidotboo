export const email = "hi@oli.boo";

export const socials = [
  { label: "github", href: "https://github.com/flamboh" },
  { label: "twitter", href: "https://x.com/flambohh" },
  { label: "instagram", href: "https://instagram.com/flamb0h" },
  { label: "linkedin", href: "https://linkedin.com/in/oliboo" },
  { label: "resume", href: "/Oliver_Boorstein_Resume.pdf" },
];

export interface Entry {
  title: string;
  subtitle?: string;
  href?: string;
  description: string;
}

export const experience: Entry[] = [
  {
    title: "quackhacks",
    subtitle: "software engineer",
    href: "https://2026.quackhacks.org/",
    description: "bringing oregon hackathons to hundreds of attendees.",
  },
  {
    title: "oregon networking research group",
    subtitle: "undergraduate researcher",
    href: "https://github.com/flamboh/netflow-analysis",
    description: "researching large-scale network telemetry.",
  },
  {
    title: "album listening club",
    subtitle: "co-president",
    href: "https://thestoning.net/alc",
    description: "leading one of oregon's greatest student orgs.",
  },
];

export const projects: Entry[] = [
  {
    title: "tagium",
    href: "https://tagium.oli.boo",
    description: "save tracks you love and update metadata all in the browser.",
  },
  {
    title: "atlantis",
    href: "https://atlantis-landing.oliver-boorstein.workers.dev/",
    description: "processing and visualizing large-scale network telemetry.",
  },
  {
    title: "the stoning",
    href: "https://thestoning.net",
    description: "music publication for album listening club.",
  },
];
