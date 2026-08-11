import { contactLinks } from "@/content/contact-links";
import type { Dictionary } from "@/i18n/types";
import { Icon, type IconName } from "@/components/ui/icon";
import { PlaceholderNote } from "@/components/ui/placeholder-note";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

const ICON_BY_ID: Record<string, IconName> = {
  email: "mail",
  phone: "phone",
  github: "github",
  linkedin: "linkedin",
  location: "map-pin",
};

const hasPlaceholders = contactLinks.some((link) => link.isPlaceholder);

export function ContactSection({ dictionary }: { dictionary: Dictionary }) {
  const { sections, profile, placeholders } = dictionary;

  return (
    <Section id="contact" bordered>
      <Reveal>
        <SectionHeading index="06" title={sections.contact.title} />
      </Reveal>

      <ul className="grid gap-3 sm:grid-cols-2">
        {contactLinks.map((link, index) => {
          const iconName = ICON_BY_ID[link.id] ?? "external";
          const isLink = Boolean(link.href) && !link.isPlaceholder;

          const body = (
            <>
              <Icon
                name={iconName}
                className={`mt-0.5 h-4 w-4 shrink-0 ${
                  link.isPlaceholder ? "text-amber-400/70" : "text-accent"
                }`}
              />
              <span className="min-w-0">
                <span className="block font-mono text-[10px] uppercase tracking-widest text-fg-dim">
                  {profile.contactLabels[link.id]}
                </span>
                <span
                  className={`mt-1 block truncate text-sm font-medium ${
                    link.isPlaceholder ? "text-amber-200/70" : "text-fg"
                  }`}
                >
                  {link.value}
                </span>
              </span>
            </>
          );

          const shell =
            "flex h-full gap-3.5 rounded-xl border border-edge bg-panel/60 p-5 transition-colors duration-200";

          return (
            <Reveal as="li" key={link.id} delay={index * 50}>
              {isLink ? (
                <a href={link.href} className={`${shell} hover:border-accent/45 hover:bg-accent/5`}>
                  {body}
                </a>
              ) : (
                <div className={shell}>{body}</div>
              )}
            </Reveal>
          );
        })}
      </ul>

      {hasPlaceholders ? (
        <Reveal>
          <PlaceholderNote>{placeholders.contact}</PlaceholderNote>
        </Reveal>
      ) : null}
    </Section>
  );
}
