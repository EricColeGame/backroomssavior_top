import { routing } from "@/i18n/routing";

export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Backrooms Wiki",
  shortName: "Backrooms",
  logoText: "B",
  tagline: "Levels, Entities & Survival Guides",
  description: "Explore the endless Backrooms universe with survival guides, entity information, level walkthroughs, gameplay tips, and horror exploration strategies.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://backroomssavior.top",
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://backroomssavior.top").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://store.steampowered.com/app/1943950/Escape_the_Backrooms/",
  heroVideoId: "0e-tLJQPe5c", // Escape the Backrooms - official launch trailer (gameplay showcase)
  social: {
    // Backrooms has no single official game Discord/YouTube channel; point at the
    // most authoritative community and media sources and label them accurately.
    discord: "https://www.reddit.com/r/backrooms/",
    youtube: "https://www.youtube.com/@kanepixels",
  },
  // 单一真相源：与 src/i18n/routing.ts 的 locales / defaultLocale 保持同步，避免再次出现 fr 之类的漂移
  locales: routing.locales,
  defaultLocale: routing.defaultLocale,
};
