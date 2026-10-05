import type { ImageMetadata } from "astro";
import quackhacks from "@/assets/pretty/quackhacks.png";
import t3CodeOg from "@/assets/pretty/t3-code-og.jpg";
import uoalbum from "@/assets/pretty/uoalbum.png";

export const email = "hi@oli.boo";

export const socials = [
  { label: "github", href: "https://github.com/flamboh" },
  { label: "twitter", href: "https://x.com/flambohh" },
  { label: "instagram", href: "https://instagram.com/flamb0h" },
  { label: "linkedin", href: "https://linkedin.com/in/oliboo" },
];

export interface Entry {
  title: string;
  subtitle?: string;
  href?: string;
  description: string;
}

export const experience: Entry[] = [
  {
    title: "t3 code",
    subtitle: "contributor",
    href: "https://github.com/pingdotgg/t3code",
    description:
      "maximizing comfort for the best agentic development environment.",
  },
  {
    title: "quackhacks",
    subtitle: "software engineer",
    href: "https://quackhacks.org/",
    description: "bringing oregon hackathons to hundreds of attendees.",
  },
  {
    title: "oregon networking research group",
    subtitle: "undergraduate researcher",
    href: "https://onrg.gitlab.io/",
    description: "researching large-scale network telemetry.",
  },
];

export const projects: Entry[] = [
  {
    title: "tagium",
    href: "https://tagium.app/",
    description: "save tracks you love and update metadata all in the browser.",
  },
  {
    title: "atlantis",
    href: "https://atlantis-landing.oliver-boorstein.workers.dev/",
    description: "processing and visualizing large-scale network telemetry.",
  },
  {
    title: "album listening club",
    href: "https://uoalbum.club",
    description: "the hub for a uoregon club for social music discovery.",
  },
  {
    title: "the stoning",
    href: "https://thestoning.net",
    description: "music publication for album listening club.",
  },
];

export interface PrettyThing {
  title: string;
  href: string;
  image: ImageMetadata;
  alt: string;
}

export const prettyThings: PrettyThing[] = [
  {
    title: "t3 code og image",
    href: "https://t3.codes",
    image: t3CodeOg,
    alt: "t3 code social card: the open-source control plane for coding agents",
  },
  {
    title: "quackhacks",
    href: "https://quackhacks.org",
    image: quackhacks,
    alt: "quackhacks landing page with a pixel-art forest and a duck",
  },
  {
    title: "album listening club",
    href: "https://uoalbum.club",
    image: uoalbum,
    alt: "album listening club landing page with a marbled vinyl record",
  },
];
