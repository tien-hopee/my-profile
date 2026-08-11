import type { Project } from "../types";

/** Long-running hotel-industry systems and backend work (2023/06 → 2025/12). */
export const projects20232025: Project[] = [
  {
    id: "check-in-application",
    category: "mobile",
    period: "2023/08 — 2025/12",
    teamSize: 2,
    durationMonths: 28,
    tech: [
      "Swift",
      "Coiney Payment SDK",
      "WebRTC",
      "WebView",
      "QR",
      "REST API",
      "Firebase",
      "Sentry",
    ],
  },
  {
    id: "hotel-pms-web",
    category: "web",
    period: "2023/08 — 2025/12",
    teamSize: 3,
    durationMonths: 28,
    tech: [
      "Laravel",
      "PHP",
      "HTML",
      "CSS",
      "JavaScript",
      "Apple Wallet",
      "Google Wallet",
      "Coiney Payment",
      "Remote Lock API",
      "Temairazu",
      "AWS",
      "Sentry",
      "DataDog",
      "Firebase",
    ],
  },
  {
    id: "kid-backend",
    category: "backend",
    period: "2023/06 — 2023/08",
    teamSize: 5,
    durationMonths: 2,
    tech: ["Kotlin", "Spring Boot", "OpenAPI", "AWS", "Webhook", "Firebase", "Unit Testing"],
  },
];
