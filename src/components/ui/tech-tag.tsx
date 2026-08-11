interface TechTagProps {
  label: string;
  /** Accent styling for primary stacks; muted for supporting tools. */
  emphasis?: "accent" | "muted";
}

export function TechTag({ label, emphasis = "muted" }: TechTagProps) {
  const tone =
    emphasis === "accent"
      ? "border-accent/35 bg-accent/10 text-accent"
      : "border-edge bg-panel-hi/70 text-fg-muted";

  return (
    <span
      className={`inline-flex items-center rounded-md border px-2.5 py-1 font-mono text-[11px] leading-none tracking-tight ${tone}`}
    >
      {label}
    </span>
  );
}
