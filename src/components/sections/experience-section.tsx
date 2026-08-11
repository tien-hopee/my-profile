import { projects } from "@/content/projects";
import type { Dictionary } from "@/i18n/types";
import { formatDuration } from "@/i18n/format-duration";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { ExperienceTimelineItem } from "@/components/experience/experience-timeline-item";
import { ProjectDetailPanel } from "@/components/experience/project-detail-panel";
import { ProjectCover } from "@/components/experience/project-cover";

export function ExperienceSection({ dictionary }: { dictionary: Dictionary }) {
  const { labels, sections, categoryLabels } = dictionary;

  return (
    <Section id="experience" bordered>
      <Reveal>
        <SectionHeading
          index="03"
          title={sections.experience.title}
          description={`${projects.length} ${labels.projectCountSuffix} ${sections.experience.description ?? ""}`.trim()}
        />
      </Reveal>

      <div className="relative">
        {/* Continuous timeline rail behind the markers */}
        <span
          aria-hidden="true"
          className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-edge-hi via-edge to-transparent"
          data-print="hide"
        />

        <ol className="space-y-4">
          {projects.map((project, index) => {
            const text = dictionary.projects[project.id];
            const metaFacts = [
              categoryLabels[project.category],
              project.teamSize ? `${labels.teamOf} ${project.teamSize}` : null,
              formatDuration(project, labels),
            ].filter((fact): fact is string => Boolean(fact));

            return (
              <Reveal as="li" key={project.id} delay={Math.min(index, 6) * 50}>
                <ExperienceTimelineItem
                  project={project}
                  defaultExpanded={index === 0}
                  header={{
                    name: text.name,
                    role: text.role,
                    metaFacts,
                    expandLabel: labels.expandProject,
                    collapseLabel: labels.collapseProject,
                  }}
                  thumbnail={
                    <ProjectCover
                      project={project}
                      projectName={text.name}
                      fallbackAlt={labels.decorativeCoverAlt}
                      variant="thumb"
                    />
                  }
                >
                  <ProjectDetailPanel project={project} dictionary={dictionary} />
                </ExperienceTimelineItem>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </Section>
  );
}
