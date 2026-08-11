import type { Project } from "@/content/types";
import type { UiLabels } from "./types";

/**
 * Formats a project's duration using locale templates, so languages that put the
 * unit or the build/maintain words in a different order stay correct.
 * Returns null when the source CV records no duration.
 */
export function formatDuration(project: Project, labels: UiLabels): string | null {
  const { durationMonths, maintenanceMonths } = project;
  if (durationMonths === undefined) return null;

  if (maintenanceMonths !== undefined) {
    return labels.durationBuildMaintain
      .replace("{build}", String(durationMonths))
      .replace("{maintain}", String(maintenanceMonths));
  }

  return labels.durationSingle.replace("{months}", String(durationMonths));
}
