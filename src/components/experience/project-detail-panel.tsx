import type { Project } from "@/content/types";
import type { Dictionary } from "@/i18n/types";
import { TechTag } from "@/components/ui/tech-tag";
import { ProjectCover } from "./project-cover";

/** Label styling shared by the subsections below. */
const LABEL_CLASS = "mb-3 font-mono text-[11px] uppercase tracking-widest text-fg-dim";
const ITEM_CLASS = "flex gap-3 text-sm leading-relaxed text-fg-muted";

interface ProjectDetailPanelProps {
  project: Project;
  dictionary: Dictionary;
}

/**
 * Expanded body of a timeline entry: cover, summary, responsibilities,
 * engineering notes and stack. Stays a Server Component — collapse is pure CSS,
 * so this markup never needs to ship as client JS.
 */
export function ProjectDetailPanel({ project, dictionary }: ProjectDetailPanelProps) {
  const text = dictionary.projects[project.id];
  const { labels } = dictionary;

  return (
    <>
      {/* Wide cover; hidden on paper where it would waste a third of a page. */}
      <div
        className="mx-5 mb-4 h-32 overflow-hidden rounded-lg border border-edge sm:h-40"
        data-print="hide"
      >
        <ProjectCover
          project={project}
          projectName={text.name}
          fallbackAlt={labels.decorativeCoverAlt}
          variant="wide"
        />
      </div>

      <p className="px-5 pb-1 text-pretty text-sm leading-relaxed text-fg-muted">{text.summary}</p>

      <div className="mt-4 space-y-6 border-t border-edge/70 px-5 py-5">
        <div>
          <h4 className={LABEL_CLASS}>{labels.responsibilities}</h4>
          <ul className="space-y-2">
            {text.responsibilities.map((item) => (
              <li key={item} className={ITEM_CLASS}>
                <span
                  aria-hidden="true"
                  className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/70"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {text.engineering && text.engineering.length > 0 ? (
          <div>
            <h4 className={LABEL_CLASS}>{labels.engineeringNotes}</h4>
            <ul className="space-y-2">
              {text.engineering.map((item) => (
                <li key={item} className={ITEM_CLASS}>
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1 w-1 shrink-0 rounded-full bg-fg-dim"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        <div>
          <h4 className={LABEL_CLASS}>{labels.stack}</h4>
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((tech) => (
              <TechTag key={tech} label={tech} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
