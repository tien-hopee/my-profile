import type { Dictionary, Locale } from "./types";
import { en } from "./en";
import { vi } from "./vi";
import { ja } from "./ja";

/**
 * Dictionaries are imported statically rather than dynamically because every
 * locale is prerendered at build time. They are only read from Server
 * Components, so no dictionary reaches the client bundle — client components
 * receive the specific strings they need as props.
 */
const dictionaries: Record<Locale, Dictionary> = { en, vi, ja };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
