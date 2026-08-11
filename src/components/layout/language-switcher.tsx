import type { Locale } from "@/i18n/types";
import { LOCALES, localeMeta } from "@/i18n/locales";

interface LanguageSwitcherProps {
  current: Locale;
  label: string;
}

/**
 * Plain anchors to the sibling locale routes — no client JS, and each language
 * stays a real, crawlable URL rather than hidden behind a script.
 */
export function LanguageSwitcher({ current, label }: LanguageSwitcherProps) {
  return (
    <nav aria-label={label} data-print="hide">
      <ul className="flex items-center gap-0.5 rounded-lg border border-edge bg-panel/70 p-0.5">
        {LOCALES.map((locale) => {
          const isActive = locale === current;
          return (
            <li key={locale}>
              <a
                href={`/${locale}`}
                hrefLang={localeMeta[locale].htmlLang}
                aria-current={isActive ? "true" : undefined}
                title={localeMeta[locale].endonym}
                className={`block rounded-md px-2.5 py-1.5 font-mono text-[11px] transition-colors duration-200 ${
                  isActive
                    ? "bg-accent/15 text-accent"
                    : "text-fg-dim hover:bg-panel-hi hover:text-fg"
                }`}
              >
                {localeMeta[locale].code}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
