"use client";

import { Icon } from "@/components/ui/icon";

/**
 * Opens the browser print dialog. The print stylesheet in globals.css converts
 * the page into a clean paper CV (light background, all panels expanded), so
 * "Save as PDF" produces a downloadable document without shipping a static file.
 */
export function PrintCvButton({ className = "" }: { className?: string }) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className={`inline-flex cursor-pointer items-center gap-2 rounded-lg border border-edge-hi px-5 py-3 text-sm font-semibold text-fg transition-colors duration-200 hover:border-accent/50 hover:text-accent ${className}`}
    >
      <Icon name="download" className="h-4 w-4" />
      Download CV
    </button>
  );
}
