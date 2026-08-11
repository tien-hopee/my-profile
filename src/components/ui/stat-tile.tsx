interface StatTileProps {
  value: string;
  label: string;
  detail?: string;
}

export function StatTile({ value, label, detail }: StatTileProps) {
  return (
    <div className="rounded-xl border border-edge bg-panel/70 p-5 backdrop-blur-sm">
      <div className="font-mono text-3xl font-semibold tracking-tight text-fg">{value}</div>
      <div className="mt-2 text-sm font-medium text-fg">{label}</div>
      {detail ? <div className="mt-0.5 text-xs text-fg-dim">{detail}</div> : null}
    </div>
  );
}
