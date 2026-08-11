import type { Dictionary } from "../types";

/** Keyed by SkillGroup.id. Individual skill names are never translated. */
export const skillGroupLabels: Dictionary["skillGroupLabels"] = {
  game: "Game Development",
  mobile: "Mobile",
  backend: "Backend",
  architecture: "Architecture & Patterns",
  frontend: "Frontend",
  data: "Databases",
  cloud: "Cloud & DevOps",
  quality: "Testing & Release",
  integrations: "Integrations",
  ai: "AI-Assisted Development",
};

/** Keyed by Platform.name. */
export const platformNotes: Dictionary["platformNotes"] = {
  iOS: "Native Swift & Flutter, published to the App Store",
  Android: "Flutter, published via Play Console",
  Web: "Laravel dashboards and Flutter Web",
  iPadOS: "Hotel management and point-of-sale apps",
  macOS: "Desktop builds from shared codebases",
  Windows: "Desktop builds and Unity game targets",
};
