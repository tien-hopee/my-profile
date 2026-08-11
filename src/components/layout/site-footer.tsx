import { profile } from "@/content/profile";
import { navItems } from "@/content/navigation";

export function SiteFooter() {
  return (
    <footer className="border-t border-edge/70 py-10">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold tracking-tight text-fg">{profile.name}</p>
          <p className="mt-1 font-mono text-[11px] text-fg-dim">
            {profile.roles.join(" / ")}
          </p>
        </div>

        <nav aria-label="Footer" data-print="hide">
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="text-sm text-fg-muted transition-colors duration-200 hover:text-accent"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
