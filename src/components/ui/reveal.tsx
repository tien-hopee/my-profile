"use client";

import { useEffect, useRef, useState } from "react";

interface RevealProps {
  children: React.ReactNode;
  /** Stagger in milliseconds, applied via CSS custom property. */
  delay?: number;
  className?: string;
  as?: "div" | "li" | "section";
}

/**
 * Reveals children once they scroll into view.
 * Uses IntersectionObserver instead of an animation library to keep the bundle
 * near-zero. The `.reveal` class in globals.css disables itself entirely under
 * `prefers-reduced-motion`, so no JS branch is needed for that case.
 */
export function Reveal({ children, delay = 0, className = "", as = "div" }: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Guard for older browsers: show content rather than hiding it forever.
    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Reveal is one-way; stop observing immediately.
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const Tag = as;

  return (
    <Tag
      // One shared ref type across the three allowed tags.
      ref={ref as React.Ref<HTMLDivElement & HTMLLIElement>}
      className={`reveal ${className}`}
      data-visible={isVisible}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </Tag>
  );
}
