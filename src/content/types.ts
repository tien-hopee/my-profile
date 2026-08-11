/**
 * Language-neutral content types.
 *
 * Anything a reader sees as prose (summaries, responsibilities, labels) lives in
 * src/i18n/<locale>/ instead. What stays here is identical in every language:
 * ids, dates, team sizes, technology names, image paths.
 */

export type ProjectCategory = "game" | "mobile" | "web" | "backend";

export interface Project {
  /** Stable key — also the lookup key into Dictionary.projects. */
  id: string;
  category: ProjectCategory;
  /** Display period exactly as recorded in the source CV. */
  period: string;
  /** True for the currently active engagement. */
  isCurrent?: boolean;
  teamSize?: number;
  /** Duration in months; rendered per locale so the unit can be translated. */
  durationMonths?: number;
  /** Additional maintenance months beyond the build phase, when the CV lists both. */
  maintenanceMonths?: number;
  tech: string[];
  /**
   * Real screenshot or product image, relative to /public.
   * When absent, <ProjectCover/> renders generated abstract artwork instead —
   * deliberately decorative, never a fabricated screenshot of client software.
   */
  imageSrc?: string;
}

export interface SkillGroup {
  /** Lookup key into Dictionary.skillGroupLabels. */
  id: string;
  /** `core` groups render with accent emphasis; `working` render muted. */
  tier: "core" | "working";
  /** Technology names — never translated. */
  skills: string[];
}

export interface Platform {
  /** Also the lookup key into Dictionary.platformNotes. */
  name: string;
}

export interface ContactLink {
  /** Lookup key into Dictionary.profile.contactLabels. */
  id: string;
  value: string;
  href?: string;
  /** Missing from the source CV — renders as a visible TODO, never as fake data. */
  isPlaceholder?: boolean;
}
