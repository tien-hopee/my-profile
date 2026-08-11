import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { Inter, JetBrains_Mono, Noto_Sans_JP } from "next/font/google";
import { person } from "@/content/person";
import { getDictionary } from "@/i18n/get-dictionary";
import { LOCALES, isLocale } from "@/i18n/locales";
import type { Locale } from "@/i18n/types";
import {
  buildLanguageAlternates,
  buildSiteMeta,
  siteKeywords,
  siteUrl,
} from "@/lib/site-config";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import "../globals.css";

// Variable fonts, self-hosted by next/font — zero layout shift, no external requests.
const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono-code",
});

// Japanese glyphs are absent from Inter; without this the ja locale falls back to
// whatever the OS provides and renders inconsistently across platforms.
const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jp",
});

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  const dictionary = getDictionary(locale);
  const { title, description } = buildSiteMeta(dictionary);

  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    keywords: siteKeywords,
    authors: [{ name: person.name }],
    creator: person.name,
    alternates: {
      canonical: `/${locale}`,
      languages: buildLanguageAlternates(),
    },
    openGraph: {
      type: "profile",
      title,
      description,
      url: `/${locale}`,
      locale: dictionary.htmlLang,
      siteName: `${person.name} — CV`,
    },
    twitter: { card: "summary_large_image", title, description },
    robots: { index: true, follow: true },
  };
}

export const viewport: Viewport = {
  themeColor: "#08090c",
  colorScheme: "dark",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dictionary = getDictionary(locale as Locale);
  const { labels, nav } = dictionary;

  /** Structured data so search engines read the page as a person, not just text. */
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: person.name,
    jobTitle: dictionary.profile.roles,
    description: dictionary.profile.positioning,
    url: `${siteUrl}/${locale}`,
    knowsAbout: ["Unity", "Flutter", "Swift", "Laravel", "Kotlin", "Game Development"],
  };

  return (
    <html
      lang={dictionary.htmlLang}
      className={`${inter.variable} ${jetBrainsMono.variable} ${notoSansJp.variable}`}
    >
      <head>
        {/*
          Runs before first paint. Marks the document as JS-capable so the
          scroll-reveal styles activate. If JS is unavailable this never runs and
          all content stays visible instead of being permanently transparent.
        */}
        <script dangerouslySetInnerHTML={{ __html: `document.documentElement.dataset.js="on"` }} />
      </head>
      <body>
        <div className="ambient-field" aria-hidden="true" />
        <div className="ambient-grid" aria-hidden="true" />

        {/* Bypasses the repeated header only — must not skip real content. */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-canvas"
        >
          {labels.skipToContent}
        </a>

        <SiteHeader
          name={person.name}
          navLabels={nav}
          sectionsNavLabel={labels.sectionsNavLabel}
          getInTouchLabel={labels.getInTouch}
          languageSwitcher={
            <LanguageSwitcher current={locale as Locale} label={labels.languageLabel} />
          }
        />

        <main id="main-content">{children}</main>
        <SiteFooter dictionary={dictionary} name={person.name} />

        <script
          type="application/ld+json"
          // Static, build-time object — no user input involved.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  );
}
