import type { MetadataRoute } from "next";
import { LOCALES } from "@/i18n/locales";
import { siteUrl } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  return LOCALES.map((locale) => ({
    url: `${siteUrl}/${locale}`,
    changeFrequency: "monthly" as const,
    priority: locale === "en" ? 1 : 0.8,
    alternates: {
      languages: Object.fromEntries(LOCALES.map((other) => [other, `${siteUrl}/${other}`])),
    },
  }));
}
