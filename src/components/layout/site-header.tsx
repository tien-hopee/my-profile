"use client";

import { useEffect, useState } from "react";
import { navItems } from "@/content/navigation";
import { profile } from "@/content/profile";
import { Icon } from "@/components/ui/icon";

/**
 * Sticky header with scroll-spy nav.
 * Tracks which section owns the viewport so the active link stays accurate
 * during both user scrolling and anchor jumps.
 */
export function SiteHeader() {
  const [activeId, setActiveId] = useState<string>(navItems[0].id);
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
      <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-6">
        <a
          href="#top"
          className="group flex items-center gap-2.5 text-sm font-semibold tracking-tight text-fg"
        >
          <Icon name="terminal" className="h-4 w-4 text-accent" />
          <span>{profile.name}</span>
        </a>

        <nav aria-label="Sections" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeId === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={isActive ? "true" : undefined}
                    className={`rounded-md px-3 py-2 text-sm transition-colors duration-200 ${
                      isActive
                        ? "text-accent"
                        : "text-fg-muted hover:text-fg"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <a
          href="#contact"
          className="rounded-md border border-edge-hi bg-panel-hi px-3.5 py-2 text-sm font-medium text-fg transition-colors duration-200 hover:border-accent/50 hover:bg-accent/10 hover:text-accent"
        >
          Get in touch
        </a>
      </div>
    </header>
  );
}
