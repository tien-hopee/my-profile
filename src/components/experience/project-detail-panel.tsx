import type { Project } from "@/content/types";
import { TechTag } from "@/components/ui/tech-tag";

/** Expanded body of a timeline entry: responsibilities, engineering notes, stack. */
export function ProjectDetailPanel({ project }: { project: Project }) {
  return (
    <div className="space-y-6 border-t border-edge/70 px-5 py-5">
      <div>
        <h4 className="mb-3 font-mono text-[11px] uppercase tracking-widest text-fg-dim">
          Responsibilities
        </h4>
        <ul className="space-y-2">
          {project.responsibilities.map((item) => (
            <li key={item} className="flex gap-3 text-sm leading-relaxed text-fg-muted">
              <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/70" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {project.engineering && project.engineering.length > 0 ? (
        <div>
          <h4 className="mb-3 font-mono text-[11px] uppercase tracking-widest text-fg-dim">
            Engineering notes
          </h4>
          <ul className="space-y-2">
            {project.engineering.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed text-fg-muted">
                <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-fg-dim" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <div>
        <h4 className="mb-3 font-mono text-[11px] uppercase tracking-widest text-fg-dim">Stack</h4>
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((tech) => (
            <TechTag key={tech} label={tech} />
          ))}
        </div>
      </div>
    </div>
  );
}
