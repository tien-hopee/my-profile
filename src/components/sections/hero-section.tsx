import { profile } from "@/content/profile";
import { Icon } from "@/components/ui/icon";
import { PrintCvButton } from "@/components/ui/print-cv-button";
import { Reveal } from "@/components/ui/reveal";
import { StatTile } from "@/components/ui/stat-tile";
import { TechTag } from "@/components/ui/tech-tag";

export function HeroSection() {
  return (
    <section id="top" className="relative pt-20 pb-16 sm:pt-28 sm:pb-24">
      <div className="mx-auto w-full max-w-5xl px-6">
        <Reveal>
          <p className="flex items-center gap-2.5 font-mono text-xs tracking-[0.18em] text-accent">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-live opacity-70" />
            </span>
            OPEN TO OPPORTUNITIES
          </p>
        </Reveal>

        <Reveal delay={60}>
          <h1 className="mt-6 text-balance text-5xl font-semibold tracking-tight text-fg sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
        </Reveal>

        <Reveal delay={120}>
          {/*
            Separators trail their role so a line break never starts with "/".
            Each role is nowrap to keep two-word titles intact.
          */}
          <p className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-sm text-fg-muted">
            {profile.roles.map((role, index) => (
              <span key={role} className="whitespace-nowrap">
                {role}
                {index < profile.roles.length - 1 ? (
                  <span aria-hidden="true" className="pl-2 text-fg-dim">
                    /
                  </span>
                ) : null}
              </span>
            ))}
          </p>
        </Reveal>

        <Reveal delay={180}>
          <p className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-fg-muted sm:text-xl">
            {profile.tagline}
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-8 flex flex-wrap gap-2">
            {profile.headlineStacks.map((stack) => (
              <TechTag key={stack} label={stack} emphasis="accent" />
            ))}
          </div>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-10 flex flex-wrap items-center gap-3" data-print="hide">
            <a
              href="#experience"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-canvas transition-colors duration-200 hover:bg-accent/85"
            >
              View my work
              <Icon name="arrow-down" className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-edge-hi px-5 py-3 text-sm font-semibold text-fg transition-colors duration-200 hover:border-accent/50 hover:text-accent"
            >
              <Icon name="mail" className="h-4 w-4" />
              Contact me
            </a>
            <PrintCvButton />
          </div>
        </Reveal>

        <Reveal delay={360}>
          <ul className="mt-16 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {profile.stats.map((stat) => (
              <li key={stat.label}>
                <StatTile value={stat.value} label={stat.label} detail={stat.detail} />
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
