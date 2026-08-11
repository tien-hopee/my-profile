/**
 * Renders an explicit "needs your input" marker.
 * The source CV omits contact details, education and language levels; showing a
 * visible TODO is deliberate so the published site never presents invented data.
 */
export function PlaceholderNote({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="mt-6 flex items-start gap-2.5 rounded-lg border border-dashed border-amber-500/35 bg-amber-500/5 px-4 py-3 text-xs leading-relaxed text-amber-200/80"
      data-print="hide"
    >
      <span className="mt-px font-mono text-[10px] tracking-widest text-amber-400/90">TODO</span>
      <span>{children}</span>
    </p>
  );
}
