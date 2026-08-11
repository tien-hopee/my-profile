import { skillGroups } from "@/content/skills";
import type { Dictionary } from "@/i18n/types";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { TechTag } from "@/components/ui/tech-tag";

export function SkillsSection({ dictionary }: { dictionary: Dictionary }) {
  const { sections, labels, skillGroupLabels } = dictionary;

  return (
    <Section id="skills" bordered>
      <Reveal>
        <SectionHeading
          index="02"
          title={sections.skills.title}
          description={sections.skills.description}
        />
      </Reveal>

      <ul className="grid gap-4 sm:grid-cols-2">
        {skillGroups.map((group, index) => (
          <Reveal as="li" key={group.id} delay={index * 50}>
            <div
              className={`h-full rounded-xl border p-5 transition-colors duration-200 ${
                group.tier === "core"
                  ? "border-accent/25 bg-accent/[0.045] hover:border-accent/45"
                  : "border-edge bg-panel/60 hover:border-edge-hi"
              }`}
            >
              <div className="mb-4 flex items-center justify-between gap-3">
                <h3 className="text-sm font-semibold tracking-tight text-fg">
                  {skillGroupLabels[group.id]}
                </h3>
                {group.tier === "core" ? (
                  <span className="font-mono text-[10px] uppercase tracking-widest text-accent">
                    {labels.core}
                  </span>
                ) : null}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {group.skills.map((skill) => (
                  <TechTag
                    key={skill}
                    label={skill}
                    emphasis={group.tier === "core" ? "accent" : "muted"}
                  />
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
