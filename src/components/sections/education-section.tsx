import { hasEducationPlaceholder, hasLanguagePlaceholder } from "@/content/contact-links";
import type { Dictionary } from "@/i18n/types";
import { PlaceholderNote } from "@/components/ui/placeholder-note";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

export function EducationSection({ dictionary }: { dictionary: Dictionary }) {
  const { sections, labels, profile, placeholders } = dictionary;

  return (
    <Section id="education" bordered>
      <Reveal>
        <SectionHeading index="05" title={sections.education.title} />
      </Reveal>

      <div className="grid gap-10 lg:grid-cols-2">
        <Reveal>
          <h3 className="mb-4 font-mono text-[11px] uppercase tracking-widest text-fg-dim">
            {labels.educationHeading}
          </h3>
          <ul className="space-y-3">
            {profile.educationItems.map((item) => (
              <li key={item.institution} className="rounded-xl border border-edge bg-panel/60 p-5">
                <p className="text-sm font-semibold text-fg">{item.institution}</p>
                <p className="mt-1 text-sm text-fg-muted">{item.credential}</p>
                <p className="mt-2 font-mono text-[11px] text-fg-dim">{item.period}</p>
              </li>
            ))}
          </ul>
          {hasEducationPlaceholder ? (
            <PlaceholderNote>{placeholders.education}</PlaceholderNote>
          ) : null}
        </Reveal>

        <Reveal delay={80}>
          <h3 className="mb-4 font-mono text-[11px] uppercase tracking-widest text-fg-dim">
            {labels.languagesHeading}
          </h3>
          <dl className="divide-y divide-edge/70 rounded-xl border border-edge bg-panel/60 px-5">
            {profile.languages.map((language) => (
              <div key={language.name} className="flex items-baseline justify-between gap-4 py-3.5">
                <dt className="text-sm font-medium text-fg">{language.name}</dt>
                <dd className="text-right text-sm text-fg-muted">{language.level}</dd>
              </div>
            ))}
          </dl>
          {hasLanguagePlaceholder ? (
            <PlaceholderNote>{placeholders.languages}</PlaceholderNote>
          ) : null}
        </Reveal>
      </div>
    </Section>
  );
}
