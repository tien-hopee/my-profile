import { person } from "@/content/person";
import { LOCALES } from "@/i18n/locales";
import type { Dictionary, Locale } from "@/i18n/types";

/**
 * Canonical origin for metadata. Vercel injects VERCEL_PROJECT_PRODUCTION_URL at
 * build time; the localhost fallback keeps `next build` working locally.
 */
function resolveSiteUrl(): string {
  const productionUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (productionUrl) return `https://${productionUrl}`;
  return "http://localhost:3000";
}

export const siteUrl = resolveSiteUrl();

export const siteKeywords = [
  person.name,
  "Game Engineer",
  "Mobile Engineer",
  "Fullstack Engineer",
  "Unity",
  "Flutter",
  "Swift",
  "Laravel",
  "Kotlin",
  "Vietnam developer",
];

/** Locale-aware page title and description, derived from that locale's copy. */
export function buildSiteMeta(dictionary: Dictionary) {
  return {
    title: `${person.name} — ${dictionary.profile.roles.join(" / ")}`,
    description: dictionary.profile.positioning,
  };
}

/** hreflang map so search engines connect the three language versions. */
export function buildLanguageAlternates(): Record<string, string> {
  return Object.fromEntries(LOCALES.map((locale: Locale) => [locale, `/${locale}`]));
}
