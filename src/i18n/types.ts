import type { NavId } from "@/content/navigation";

export type Locale = "en" | "vi" | "ja";

/** Section ids that carry a heading + description pair. */
export type SectionKey = "about" | "skills" | "experience" | "platforms" | "education" | "contact";

/**
 * Per-project translatable copy, keyed by project id.
 * Structural facts (dates, team size, duration, tech stack) live in
 * src/content/projects/ because they are identical in every language.
 */
export interface ProjectText {
  name: string;
  role: string;
  summary: string;
  responsibilities: string[];
  engineering?: string[];
}

export interface HeroCopy {
  availability: string;
  tagline: string;
  viewWork: string;
  contactMe: string;
  downloadCv: string;
}

export interface SectionCopy {
  title: string;
  description?: string;
}

export interface UiLabels {
  getInTouch: string;
  skipToContent: string;
  sectionsNavLabel: string;
  footerNavLabel: string;
  languageLabel: string;
  responsibilities: string;
  engineeringNotes: string;
  stack: string;
  core: string;
  /** Rendered as `${teamOf} 3`, so it must read naturally with a trailing number. */
  teamOf: string;
  /** Template with a {months} placeholder. */
  durationSingle: string;
  /** Template with {build} and {maintain} placeholders; word order varies by language. */
  durationBuildMaintain: string;
  educationHeading: string;
  languagesHeading: string;
  expandProject: string;
  collapseProject: string;
  projectCountSuffix: string;
  decorativeCoverAlt: string;
}

export interface PlaceholderCopy {
  contact: string;
  education: string;
  languages: string;
}

export interface ProfileCopy {
  roles: string[];
  positioning: string;
  about: string[];
  stats: { value: string; label: string; detail: string }[];
  /** Left column terms in the About fact table. */
  facts: { term: string; detail: string }[];
  contactLabels: Record<string, string>;
  educationItems: { institution: string; credential: string; period: string }[];
  languages: { name: string; level: string }[];
}

export interface Dictionary {
  locale: Locale;
  /** Value for the html lang attribute. */
  htmlLang: string;
  nav: Record<NavId, string>;
  hero: HeroCopy;
  sections: Record<SectionKey, SectionCopy>;
  labels: UiLabels;
  placeholders: PlaceholderCopy;
  profile: ProfileCopy;
  /** Keyed by SkillGroup.id — only the group label is translated, not skill names. */
  skillGroupLabels: Record<string, string>;
  /** Keyed by Platform.name — the name itself (iOS, Android) is never translated. */
  platformNotes: Record<string, string>;
  /** Keyed by Project.id. */
  projects: Record<string, ProjectText>;
  categoryLabels: Record<"game" | "mobile" | "web" | "backend", string>;
}
