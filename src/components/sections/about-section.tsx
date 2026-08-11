import { profile } from "@/content/profile";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

export function AboutSection() {
  return (
    <Section id="about" bordered>
      <Reveal>
        <SectionHeading index="01" title="About" description={profile.positioning} />
      </Reveal>

      <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr]">
        <div className="space-y-5">
          {/* Static, never-reordered array — index is a stable key here. */}
          {profile.about.map((paragraph, index) => (
            <Reveal key={index} delay={index * 80}>
              <p className="text-pretty leading-relaxed text-fg-muted">{paragraph}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={160}>
          <dl className="divide-y divide-edge/70 rounded-xl border border-edge bg-panel/60 px-5">
            {[
              { term: "Experience", detail: `${profile.yearsOfExperience} years` },
              { term: "Focus", detail: "Game, Mobile, Fullstack" },
              { term: "Clients", detail: "Primarily Japanese market" },
              { term: "Team sizes", detail: "2 – 5 engineers" },
              { term: "Longest project", detail: "28 months maintained" },
            ].map((row) => (
              <div key={row.term} className="flex items-baseline justify-between gap-4 py-3.5">
                <dt className="font-mono text-[11px] uppercase tracking-wider text-fg-dim">
                  {row.term}
                </dt>
                <dd className="text-right text-sm font-medium text-fg">{row.detail}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
