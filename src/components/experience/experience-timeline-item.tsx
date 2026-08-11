"use client";

import { useId, useState } from "react";
import type { Project } from "@/content/types";
import { categoryLabels } from "@/content/projects";
import { Icon } from "@/components/ui/icon";

interface ExperienceTimelineItemProps {
  project: Project;
  /** The most recent entry starts expanded so the page is never fully collapsed. */
  defaultExpanded?: boolean;
  /**
   * Panel body, rendered by the parent Server Component. Passing it as children
   * keeps the detail markup out of the client bundle — only the toggle needs
   * client behaviour.
   */
  children: React.ReactNode;
}

export function ExperienceTimelineItem({
  project,
  defaultExpanded = false,
  children,
}: ExperienceTimelineItemProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  const panelId = useId();

  const metaFacts = [
    categoryLabels[project.category],
    project.teamSize ? `Team of ${project.teamSize}` : null,
    project.duration,
  ].filter((fact): fact is string => Boolean(fact));

  // The parent <ol> supplies the <li>; this component owns only the row body.
  return (
    <div className="relative pl-8 sm:pl-10">
      {/* Timeline rail marker */}
      <span
        aria-hidden="true"
        className={`absolute left-0 top-6 h-2.5 w-2.5 -translate-x-[4.5px] rounded-full ring-4 ring-canvas ${
          project.isCurrent ? "bg-live" : "bg-edge-hi"
        }`}
      />

      <article className="overflow-hidden rounded-xl border border-edge bg-panel/60 transition-colors duration-200 hover:border-edge-hi">
        <h3>
          <button
            type="button"
            onClick={() => setIsExpanded((previous) => !previous)}
            aria-expanded={isExpanded}
            aria-controls={panelId}
            className="flex w-full cursor-pointer items-start justify-between gap-4 px-5 py-5 text-left"
          >
            <span className="min-w-0">
              {/*
                No "Current" badge here: the period text already says Current and
                the green rail marker carries the same signal visually.
              */}
              <span
                className={`font-mono text-xs ${project.isCurrent ? "text-live" : "text-accent"}`}
              >
                {project.period}
              </span>

              <span className="mt-2 block text-lg font-semibold tracking-tight text-fg">
                {project.name}
              </span>
              <span className="mt-0.5 block text-sm font-medium text-fg-muted">{project.role}</span>

              <span className="mt-3 flex flex-wrap items-center gap-x-2.5 gap-y-1 font-mono text-[11px] text-fg-dim">
                {metaFacts.map((fact, index) => (
                  <span key={fact} className="flex items-center gap-2.5">
                    {index > 0 ? <span aria-hidden="true">·</span> : null}
                    {fact}
                  </span>
                ))}
              </span>
            </span>

            <span
              aria-hidden="true"
              className="mt-1 shrink-0 rounded-md border border-edge p-1.5 text-fg-muted"
              data-print="hide"
            >
              <Icon
                name="chevron-down"
                className={`h-4 w-4 transition-transform duration-300 ${
                  isExpanded ? "rotate-180" : ""
                }`}
              />
            </span>
          </button>
        </h3>

        {/*
          Collapse is driven by data-expanded rather than the `hidden` attribute:
          Chrome's UA rule for [hidden] resists author overrides, which left every
          panel collapsed in the printed CV. A plain author rule can be flipped by
          the print stylesheet. display:none still removes it from the a11y tree.
        */}
        <div id={panelId} data-collapsible data-expanded={isExpanded}>
          {children}
        </div>
      </article>
    </div>
  );
}
