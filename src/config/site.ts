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
  gameUrl: "https://www.backrooms.game/",
  heroVideoId: "0e-tLJQPe5c", // Escape the Backrooms - official launch trailer (gameplay showcase)
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
