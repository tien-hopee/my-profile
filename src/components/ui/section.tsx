interface SectionProps {
  id: string;
  children: React.ReactNode;
  /** Adds a hairline top border to separate adjacent bands. */
  bordered?: boolean;
  className?: string;
}

/** Consistent section rhythm and container width across the whole page. */
export function Section({ id, children, bordered = false, className = "" }: SectionProps) {
  return (
    <section
      id={id}
      className={`${bordered ? "border-t border-edge/70" : ""} py-20 sm:py-28 ${className}`}
    >
      <div className="mx-auto w-full max-w-5xl px-6">{children}</div>
    </section>
  );
}
