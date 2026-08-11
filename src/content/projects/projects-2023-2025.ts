import type { Project } from "../types";

/** Long-running hotel-industry systems and backend work (2023/06 → 2025/12). */
export const projects20232025: Project[] = [
  {
    id: "check-in-application",
    name: "Check-in Application",
    role: "Mobile Engineer",
    category: "mobile",
    period: "2023/08 — 2025/12",
    teamSize: 2,
    duration: "28 months",
    summary:
      "A check-in / check-out application for hotels supporting automatic check-in via QR code, booking code or phone number. It integrates automatic payment through Coiney, collects visas via terminals, and provisions room cards for guests — reducing hotel staffing needs while making the process faster and more professional.",
    responsibilities: [
      "Acted as developer and maintainer, keeping the system running smoothly over more than two years.",
      "Built new features to meet evolving business and customer needs.",
      "Used Firebase and Sentry to capture device and error telemetry for rapid response.",
      "Integrated WebRTC for clear video and audio calls in the guest-support calling feature.",
    ],
    engineering: [
      "Native Swift implementation for terminal hardware reliability",
      "Coiney Payment SDK for unattended payment capture",
      "Sentry + Firebase for anytime, anywhere error recognition",
    ],
    tech: ["Swift", "Coiney Payment SDK", "WebRTC", "WebView", "QR", "REST API", "Firebase", "Sentry"],
  },
  {
    id: "hotel-pms-web",
    name: "Hotel PMS Web",
    role: "Fullstack Engineer",
    category: "web",
    period: "2023/08 — 2025/12",
    teamSize: 3,
    duration: "28 months",
    summary:
      "A comprehensive hotel property-management system. Guests book, check in and check out; administrators manage rooms, bookings and cleaning services. The platform exposes a RESTful API consumed by iPads and web clients across guest, administrator and super-administrator roles.",
    responsibilities: [
      "Responsible for building and maintaining the system across web and API surfaces.",
      "Built revenue statistics screens and statistics file export.",
      "Continued managing and updating the live production application.",
    ],
    engineering: [
      "Laravel serving both the web app and the REST API for iPad clients",
      "Hotel-domain integrations: Temairazu inventory, Remote Lock automatic locking",
      "Apple Wallet and Google Wallet passes; Coiney payment",
      "Sentry and DataDog for performance monitoring; AWS + CSV for import/export",
    ],
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
    name: "KID",
    role: "Backend Engineer",
    category: "backend",
    period: "2023/06 — 2023/08",
    teamSize: 5,
    duration: "2 months",
    summary:
      "A standalone backend service built in Kotlin with a clean architecture, serving as the core of the API system. It solves image-selling on the web: uploading, pricing, storage, account registration, sorting and image modification.",
    responsibilities: [
      "Built image-management features: sorting, editing, deleting and moving.",
      "Optimized slow queries.",
      "Handled concurrent upload and delete race conditions against the database.",
    ],
    engineering: [
      "Clean Architecture to enforce code quality and separation",
      "OpenAPI specifications so the API is easy to read, understand and consume",
      "Unit tests and feature tests mandatory for every change",
      "AWS integration for storage and validation",
    ],
    tech: ["Kotlin", "Spring Boot", "OpenAPI", "AWS", "Webhook", "Firebase", "Unit Testing"],
  },
];
