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
  name: "Well Dweller Wiki",
  shortName: "Well Dweller",
  logoText: "W",
  tagline: "Dark Fairy-Tale Metroidvania Guides",
  description: "Complete Well Dweller wiki with bosses, trinkets, spirits, abilities, maps, walkthroughs, achievements, collectibles and beginner tips for every player.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://welldweller.top",
  supportEmail: "support@welldweller.top",
  gameUrl: "https://store.steampowered.com/app/3699590/Well_Dweller/",
  heroVideoId: "fFnYryNgaEQ", // Well Dweller - Official Launch Trailer
  social: {
    discord: "https://discord.gg/gamesbykylethompson",
    youtube: "https://www.youtube.com/watch?v=fFnYryNgaEQ",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
