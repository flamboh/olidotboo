import type { ImageMetadata } from "astro";
import albumListeningClubMp4 from "@/assets/design/album-listening-club.mp4";
import albumListeningClub from "@/assets/design/album-listening-club.png";
import albumListeningClubWebm from "@/assets/design/album-listening-club.webm";
import quackhacksMp4 from "@/assets/design/quackhacks.mp4";
import quackhacks from "@/assets/design/quackhacks.png";
import quackhacksWebm from "@/assets/design/quackhacks.webm";
import t3CodeOg from "@/assets/design/t3-code-og.jpg";
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
  letterbox?: string;
  alt: string;
}

export const design: DesignWork[] = [
  {
    title: "t3 code og image",
    href: "https://t3.codes",
    image: t3CodeOg,
    letterbox: "#0a090b",
    alt: "t3 code social card: the open-source control plane for coding agents, over the agent logos and the app",
  },
  {
    title: "album listening club",
    href: "https://uoalbum.club",
    image: albumListeningClub,
    video: { webm: albumListeningClubWebm, mp4: albumListeningClubMp4 },
    alt: "album listening club homepage with a marbled vinyl record spinning in 3d, scrolling down to this week's album",
  },
  {
    title: "quackhacks",
    href: "https://quackhacks.org",
    image: quackhacks,
    video: { webm: quackhacksWebm, mp4: quackhacksMp4 },
    alt: "quackhacks landing page with a shifting gradient wordmark and a pixel-art duck flung across the forest",
  },
  {
    title: "the stoning",
    href: "https://thestoning.net",
    image: theStoning,
    video: { webm: theStoningWebm, mp4: theStoningMp4 },
    alt: "the stoning's red and black collage front page, scrolling down to page through the latest reviews",
  },
];
