import type { Platform } from "./types";

/**
 * The six platforms the source CV claims shipped work on.
 * Names are product names and stay untranslated; the descriptions live in
 * Dictionary.platformNotes keyed by these names.
 */
export const platforms: Platform[] = [
  { name: "iOS" },
  { name: "Android" },
  { name: "Web" },
  { name: "iPadOS" },
  { name: "macOS" },
  { name: "Windows" },
];
