/** Shared content types for the CV site. All site copy flows from src/content. */

export type ProjectCategory = "game" | "mobile" | "web" | "backend";

export interface Project {
  /** Stable anchor/key — kebab-case. */
  id: string;
  name: string;
  role: string;
  category: ProjectCategory;
  /** Display period exactly as recorded in the source CV. */
  period: string;
  /** True for the currently active engagement. */
  isCurrent?: boolean;
  teamSize?: number;
  duration?: string;
  /** One-paragraph project description. */
  summary: string;
  /** What the owner personally did. */
  responsibilities: string[];
  /** Architecture / patterns / optimisation notes worth calling out. */
  engineering?: string[];
  tech: string[];
}

export interface SkillGroup {
  id: string;
  label: string;
  /** `core` groups render with accent emphasis; `working` render muted. */
  tier: "core" | "working";
  skills: string[];
}

export interface Platform {
  name: string;
  note: string;
}

export interface ContactLink {
  label: string;
  value: string;
  href?: string;
  /** Missing from the source CV — renders as a visible TODO, never as fake data. */
  isPlaceholder?: boolean;
}
