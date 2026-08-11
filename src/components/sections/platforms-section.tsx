import { platforms } from "@/content/platforms";
import type { Dictionary } from "@/i18n/types";
import { Icon } from "@/components/ui/icon";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

export function PlatformsSection({ dictionary }: { dictionary: Dictionary }) {
  const { sections, platformNotes } = dictionary;

  return (
    <Section id="platforms" bordered>
      <Reveal>
        <SectionHeading
          index="04"
          title={sections.platforms.title}
          description={sections.platforms.description}
        />
      </Reveal>

      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {platforms.map((platform, index) => (
          <Reveal as="li" key={platform.name} delay={index * 50}>
            <div className="flex h-full gap-3.5 rounded-xl border border-edge bg-panel/60 p-5 transition-colors duration-200 hover:border-edge-hi">
              <Icon name="layers" className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <div>
                <h3 className="text-sm font-semibold tracking-tight text-fg">{platform.name}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-fg-muted">
                  {platformNotes[platform.name]}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
