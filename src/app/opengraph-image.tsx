import { ImageResponse } from "next/og";
import { profile } from "@/content/profile";

export const alt = `${profile.name} — ${profile.roles.join(" / ")}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Build-time generated social preview card, matching the site's dark palette. */
export default function OpengraphImage() {
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
          Curriculum Vitae
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
          {profile.name}
        </div>

        <div style={{ display: "flex", marginTop: 20, fontSize: 34, color: "#94a3b8" }}>
          {profile.roles.join("  /  ")}
        </div>

        <div style={{ display: "flex", marginTop: 48, gap: 16 }}>
          {profile.headlineStacks.slice(0, 4).map((stack) => (
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
          {profile.yearsOfExperience} years · 15+ projects · 6 platforms
        </div>
      </div>
    ),
    size,
  );
}
