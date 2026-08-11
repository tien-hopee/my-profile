import { ImageResponse } from "next/og";
import { person } from "@/content/person";
import { getDictionary } from "@/i18n/get-dictionary";
import { LOCALES, isLocale } from "@/i18n/locales";

export const alt = `${person.name} — CV`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Without this the image route is rendered on demand instead of prerendered. */
export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

const HEADLINE_STACKS = ["Unity / C#", "Flutter / Dart", "Swift", "Laravel / PHP"];

/**
 * Build-time social preview card per locale.
 * Uses only Latin text so no CJK font has to be fetched and embedded at build time.
 */
export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dictionary = getDictionary(isLocale(locale) ? locale : "en");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#08090c",
          backgroundImage:
            "radial-gradient(900px 500px at 15% 0%, rgba(91,156,255,0.20), transparent 60%)",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: 4,
            color: "#5b9cff",
            textTransform: "uppercase",
          }}
        >
          {`Curriculum Vitae · ${dictionary.locale.toUpperCase()}`}
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 24,
            fontSize: 92,
            fontWeight: 700,
            color: "#f1f5f9",
            letterSpacing: -2,
          }}
        >
          {person.name}
        </div>

        <div style={{ display: "flex", marginTop: 20, fontSize: 34, color: "#94a3b8" }}>
          Game / Mobile / Fullstack Engineer
        </div>

        <div style={{ display: "flex", marginTop: 48, gap: 16 }}>
          {HEADLINE_STACKS.map((stack) => (
            <div
              key={stack}
              style={{
                display: "flex",
                border: "1px solid #2c3644",
                borderRadius: 10,
                padding: "10px 18px",
                fontSize: 22,
                color: "#94a3b8",
              }}
            >
              {stack}
            </div>
          ))}
        </div>

        <div style={{ display: "flex", marginTop: 44, fontSize: 26, color: "#64748b" }}>
          4+ years · 15+ projects · 6 platforms
        </div>
      </div>
    ),
    size,
  );
}
