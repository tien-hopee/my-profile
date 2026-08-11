import type { ProjectCategory } from "@/content/types";

/**
 * Deterministic geometry for a project's generated cover.
 *
 * Everything derives from the project id, so a given project always renders the
 * same artwork across locales, reloads and builds — no Math.random, which would
 * also break server/client hydration.
 */

export interface CoverArt {
  hueA: number;
  hueB: number;
  /** Normalised 0..1 positions driving the composition. */
  blobs: { cx: number; cy: number; r: number; opacity: number }[];
  /** Category-specific motif drawn over the gradient. */
  motif: ProjectCategory;
  rotation: number;
}

/** FNV-1a — small, stable, and dependency-free. */
function hash(seed: string): number {
  let value = 0x811c9dc5;
  for (let index = 0; index < seed.length; index += 1) {
    value ^= seed.charCodeAt(index);
    value = Math.imul(value, 0x01000193);
  }
  return value >>> 0;
}

/** Deterministic pseudo-random sequence from a numeric seed. */
function sequence(seed: number): () => number {
  let state = seed || 1;
  return () => {
    state ^= state << 13;
    state ^= state >>> 17;
    state ^= state << 5;
    state >>>= 0;
    return state / 0xffffffff;
  };
}

/** Base hue per category so each discipline reads as a colour family. */
const CATEGORY_HUE: Record<ProjectCategory, number> = {
  game: 275, // violet
  mobile: 212, // blue
  web: 190, // cyan
  backend: 158, // teal-green
};

export function buildCoverArt(projectId: string, category: ProjectCategory): CoverArt {
  const next = sequence(hash(projectId));
  const baseHue = CATEGORY_HUE[category];

  // Keep the pair within a narrow band so covers stay in the site's palette.
  const hueA = baseHue + Math.round((next() - 0.5) * 24);
  const hueB = baseHue + 32 + Math.round((next() - 0.5) * 24);

  const blobs = Array.from({ length: 3 }, () => ({
    cx: 0.12 + next() * 0.78,
    cy: 0.15 + next() * 0.7,
    r: 0.22 + next() * 0.3,
    opacity: 0.2 + next() * 0.3,
  }));

  return { hueA, hueB, blobs, motif: category, rotation: Math.round(next() * 40 - 20) };
}
