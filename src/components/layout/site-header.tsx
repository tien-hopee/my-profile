"use client";

import { useEffect, useState } from "react";
import { navItems } from "@/content/navigation";
import { Icon } from "@/components/ui/icon";

interface SiteHeaderProps {
  name: string;
  /** Pre-translated nav labels keyed by section id. */
  navLabels: Record<string, string>;
  sectionsNavLabel: string;
  getInTouchLabel: string;
  /** Rendered as-is; built by a Server Component so it ships no extra client JS. */
  languageSwitcher: React.ReactNode;
}

/**
 * Sticky header with scroll-spy nav.
 * Tracks which section owns the viewport so the active link stays accurate
 * during both user scrolling and anchor jumps.
 */
export function SiteHeader({
  name,
  navLabels,
  sectionsNavLabel,
  getInTouchLabel,
  languageSwitcher,
}: SiteHeaderProps) {
  // Empty until a section actually intersects: the visitor starts on the hero
  // (id="top", not a nav item), so defaulting to navItems[0] would mark "About"
  // as current before it has been reached.
  const [activeId, setActiveId] = useState<string>("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const sections = navItems
      .map(({ id }) => document.getElementById(id))
      .filter((node): node is HTMLElement => node !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        // Choose the entry nearest the top of the viewport among those visible.
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-print="hide"
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        isScrolled ? "border-b border-edge/80 bg-canvas/85 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between gap-4 px-6">
        <a href="#top" className="flex items-center gap-2.5 text-sm font-semibold tracking-tight text-fg">
          <Icon name="terminal" className="h-4 w-4 text-accent" />
          <span className="whitespace-nowrap">{name}</span>
        </a>

        <nav aria-label={sectionsNavLabel} className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeId === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={isActive ? "true" : undefined}
                    className={`rounded-md px-3 py-2 text-sm transition-colors duration-200 ${
                      isActive ? "text-accent" : "text-fg-muted hover:text-fg"
                    }`}
                  >
                    {navLabels[item.id]}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          {languageSwitcher}
          <a
            href="#contact"
            className="hidden rounded-md border border-edge-hi bg-panel-hi px-3.5 py-2 text-sm font-medium text-fg transition-colors duration-200 hover:border-accent/50 hover:bg-accent/10 hover:text-accent sm:block"
          >
            {getInTouchLabel}
          </a>
        </div>
      </div>
    </header>
  );
}
