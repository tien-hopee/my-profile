import type { Project, ProjectCategory } from "../types";
import { projects2025Current } from "./projects-2025-current";
import { projects20232025 } from "./projects-2023-2025";
import { projects20222023 } from "./projects-2022-2023";

/**
 * All projects in reverse-chronological order.
 * Era files are already ordered newest-first, so concatenation preserves that.
 */
export const projects: Project[] = [
  ...projects2025Current,
  ...projects20232025,
  ...projects20222023,
];

export const categoryLabels: Record<ProjectCategory, string> = {
  game: "Game",
  mobile: "Mobile",
  web: "Web",
  backend: "Backend",
};
