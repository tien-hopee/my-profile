import type { Locale } from "./types";

export const DEFAULT_LOCALE: Locale = "en";

export const LOCALES: readonly Locale[] = ["en", "vi", "ja"] as const;

/** Switcher display: short code plus the language's own endonym. */
export const localeMeta: Record<Locale, { code: string; endonym: string; htmlLang: string }> = {
  en: { code: "EN", endonym: "English", htmlLang: "en" },
  vi: { code: "VI", endonym: "Tiếng Việt", htmlLang: "vi" },
  ja: { code: "JA", endonym: "日本語", htmlLang: "ja" },
};

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}
