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
  { label: "GitHub", href: "https://github.com/flamboh" },
  { label: "Twitter", href: "https://x.com/flambohh" },
  { label: "Instagram", href: "https://instagram.com/flamb0h" },
  { label: "LinkedIn", href: "https://linkedin.com/in/oliboo" },
];

export interface Entry {
  title: string;
  subtitle?: string;
  href?: string;
  description: string;
}

export const experience: Entry[] = [
  {
    title: "T3 Code",
    subtitle: "Contributor",
    href: "https://github.com/pingdotgg/t3code",
    description:
      "Maximizing comfort for the best agentic development environment.",
  },
  {
    title: "QuackHacks",
    subtitle: "Software Engineer",
    href: "https://quackhacks.org/",
    description: "Bringing Oregon hackathons to hundreds of attendees.",
  },
  {
    title: "Oregon Networking Research Group",
    subtitle: "Undergraduate Researcher",
    href: "https://onrg.gitlab.io/",
    description: "Researching large-scale network telemetry.",
  },
];

export const projects: Entry[] = [
  {
    title: "tagium",
    href: "https://tagium.app/",
    description: "Save tracks you love and update metadata all in the browser.",
  },
  {
    title: "ATLANTIS",
    href: "https://atlantis-landing.oliver-boorstein.workers.dev/",
    description:
      "Process and explore network telemetry, built under NSF REU support.",
  },
  {
    title: "Album Listening Club",
    href: "https://uoalbum.club",
    description:
      "Social music discovery and live events at the University of Oregon.",
  },
  {
    title: "The Stoning",
    href: "https://thestoning.net",
    description: "Alternative music publication for Album Listening Club.",
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
    title: "T3 Code Embed Image",
    href: "https://t3.codes",
    image: t3CodeOg,
    description: "A custom Open Graph image contributed to T3 Code.",
  },
  {
    title: "Album Listening Club",
    href: "https://uoalbum.club",
    image: albumListeningClub,
    video: { webm: albumListeningClubWebm, mp4: albumListeningClubMp4 },
    description:
      "Homepage for Album Listening Club with a 3D vinyl matching the weekly album.",
  },
  {
    title: "QuackHacks",
    href: "https://quackhacks.org",
    image: quackhacks,
    video: { webm: quackhacksWebm, mp4: quackhacksMp4 },
    description:
      "Landing page for QuackHacks with a cute physics duck on the water.",
  },
  {
    title: "The Stoning",
    href: "https://thestoning.net",
    image: theStoning,
    video: { webm: theStoningWebm, mp4: theStoningMp4 },
    description:
      "Bold Constructivist-inspired hero section showing off students' articles at The Stoning.",
  },
];
