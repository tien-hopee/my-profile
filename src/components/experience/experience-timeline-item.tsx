"use client";

import { useId, useState } from "react";
import type { Project } from "@/content/types";
import { Icon } from "@/components/ui/icon";

interface ExperienceTimelineItemProps {
  project: Project;
  /** The most recent entry starts expanded so the page is never fully collapsed. */
  defaultExpanded?: boolean;
  /** Pre-translated header copy — this is a client component, so no dictionary here. */
  header: {
    name: string;
    role: string;
    /** Already-formatted facts, e.g. ["Mobile", "Team of 3", "6 months"]. */
    metaFacts: string[];
    expandLabel: string;
    collapseLabel: string;
  };
  /** Thumbnail element, rendered by the parent Server Component. */
  thumbnail: React.ReactNode;
  /** Panel body, rendered by the parent Server Component. */
  children: React.ReactNode;
}

export function ExperienceTimelineItem({
  project,
  defaultExpanded = false,
  header,
  thumbnail,
  children,
}: ExperienceTimelineItemProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  const panelId = useId();

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
            aria-label={`${header.name} — ${isExpanded ? header.collapseLabel : header.expandLabel}`}
            className="flex w-full cursor-pointer items-start gap-4 px-5 py-5 text-left"
          >
            <span className="h-14 w-14 shrink-0 overflow-hidden rounded-lg border border-edge">
              {thumbnail}
            </span>

            <span className="min-w-0 flex-1">
              {/*
                No "Current" badge: the period text already says Current and the
                green rail marker carries the same signal visually.
              */}
              <span
                className={`font-mono text-xs ${project.isCurrent ? "text-live" : "text-accent"}`}
              >
                {project.period}
              </span>

              <span className="mt-2 block text-lg font-semibold tracking-tight text-fg">
                {header.name}
              </span>
              <span className="mt-0.5 block text-sm font-medium text-fg-muted">{header.role}</span>

              <span className="mt-3 flex flex-wrap items-center gap-x-2.5 gap-y-1 font-mono text-[11px] text-fg-dim">
                {header.metaFacts.map((fact, index) => (
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
          panel collapsed in the printed CV. display:none still removes it from
          the a11y tree.
        */}
        <div id={panelId} data-collapsible data-expanded={isExpanded}>
          {children}
        </div>
      </article>
    </div>
  );
}
