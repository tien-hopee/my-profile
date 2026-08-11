import { profile } from "@/content/profile";

/**
 * Canonical origin for metadata. Vercel injects VERCEL_PROJECT_PRODUCTION_URL at
 * build time; the localhost fallback keeps `next build` working locally.
 */
function resolveSiteUrl(): string {
  const productionUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (productionUrl) return `https://${productionUrl}`;
  return "http://localhost:3000";
}

export const siteConfig = {
  url: resolveSiteUrl(),
  title: `${profile.name} — ${profile.roles.join(" / ")}`,
  shortTitle: profile.name,
  description: profile.positioning,
  keywords: [
    "Dinh Van Tien",
    "Game Engineer",
    "Mobile Engineer",
    "Fullstack Engineer",
    "Unity",
    "Flutter",
    "Swift",
    "Laravel",
    "Kotlin",
    "Vietnam developer",
  ],
} as const;
