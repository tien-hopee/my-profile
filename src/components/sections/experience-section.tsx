import { projects } from "@/content/projects";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { ExperienceTimelineItem } from "@/components/experience/experience-timeline-item";
import { ProjectDetailPanel } from "@/components/experience/project-detail-panel";

export function ExperienceSection() {
  return (
    <Section id="experience" bordered>
      <Reveal>
        <SectionHeading
          index="03"
          title="Experience"
          description={`${projects.length} projects in reverse-chronological order. Select any entry to read the responsibilities, engineering decisions and full stack.`}
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
          {projects.map((project, index) => (
            <Reveal as="li" key={project.id} delay={Math.min(index, 6) * 50}>
              <ExperienceTimelineItem project={project} defaultExpanded={index === 0}>
                <ProjectDetailPanel project={project} />
              </ExperienceTimelineItem>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  );
}
