interface SectionHeadingProps {
  /** Machine-style index, e.g. "02" — rendered in mono as a wayfinding cue. */
  index: string;
  title: string;
  description?: string;
}

export function SectionHeading({ index, title, description }: SectionHeadingProps) {
  return (
    <header className="mb-12 max-w-2xl">
      <div className="mb-4 flex items-center gap-3">
        <span className="font-mono text-xs tracking-[0.2em] text-accent">{index}</span>
        <span aria-hidden="true" className="h-px w-10 bg-edge-hi" />
      </div>
      <h2 className="text-balance text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-pretty leading-relaxed text-fg-muted">{description}</p>
      ) : null}
    </header>
  );
}
