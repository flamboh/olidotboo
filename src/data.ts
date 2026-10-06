import type { ImageMetadata } from "astro";
import albumListeningClubMp4 from "@/assets/design/album-listening-club.mp4";
import albumListeningClub from "@/assets/design/album-listening-club.png";
import albumListeningClubWebm from "@/assets/design/album-listening-club.webm";
import quackhacksMp4 from "@/assets/design/quackhacks.mp4";
import quackhacks from "@/assets/design/quackhacks.png";
import quackhacksWebm from "@/assets/design/quackhacks.webm";
import t3CodeOg from "@/assets/design/t3-code-og.png";
import theStoningMp4 from "@/assets/design/the-stoning.mp4";
import theStoning from "@/assets/design/the-stoning.png";
import theStoningWebm from "@/assets/design/the-stoning.webm";

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

export interface DesignWork {
  title: string;
  href: string;
  image: ImageMetadata;
  video?: { webm: string; mp4: string };
  description: string;
}

export const design: DesignWork[] = [
  {
    title: "t3 code embed image",
    href: "https://t3.codes",
    image: t3CodeOg,
    description: "a custom open graph image contributed to t3 code.",
  },
  {
    title: "album listening club",
    href: "https://uoalbum.club",
    image: albumListeningClub,
    video: { webm: albumListeningClubWebm, mp4: albumListeningClubMp4 },
    description:
      "homepage for album listening club with a 3d vinyl matching the weekly album.",
  },
  {
    title: "quackhacks",
    href: "https://quackhacks.org",
    image: quackhacks,
    video: { webm: quackhacksWebm, mp4: quackhacksMp4 },
    description:
      "landing page for quackhacks with a cute physics duck on the water.",
  },
  {
    title: "the stoning",
    href: "https://thestoning.net",
    image: theStoning,
    video: { webm: theStoningWebm, mp4: theStoningMp4 },
    description:
      "bold constructivist-inspired hero section showing off student's articles at the stoning.",
  },
];
