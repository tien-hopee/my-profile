import type { Project } from "../types";

/** Early Flutter-focused engagements (2022/03 → 2023/06). */
export const projects20222023: Project[] = [
  {
    id: "resort-cloud-ticket-web",
    name: "Resort Cloud Ticket Web",
    role: "Flutter Engineer",
    category: "web",
    period: "2022/10 — 2023/06",
    teamSize: 2,
    duration: "2 months build + 6 months maintenance",
    summary:
      "Part of a hotel-restaurant management system, solving the management and redemption of coupons and meal vouchers for end users. It automates and streamlines the hotel and restaurant management process.",
    responsibilities: [
      "Built and tested the application's features, including coupon display and coupon redemption.",
      "Maintained the application through the six-month support window.",
    ],
    engineering: [
      "Flutter Web chosen to reuse existing components across the same product family",
      "Barcode used to model and automate coupon and meal-ticket redemption",
    ],
    tech: ["Flutter Web", "Dart", "Barcode"],
  },
  {
    id: "point-management-app",
    name: "Point Management App",
    role: "Flutter Engineer",
    category: "mobile",
    period: "2022/10 — 2023/06",
    teamSize: 2,
    duration: "3 months build + 6 months maintenance",
    summary:
      "An iPad application for hotels supporting guests who book rooms and redeem their coupons, alongside management features for hotel staff.",
    responsibilities: [
      "Maintained and serviced the application to meet customer standards and requirements.",
    ],
    engineering: [
      "Flutter used to reuse components across the hotel product family",
      "Barcode and Pasori Scanner for hotel-restaurant automation",
      "Receipt printing for record keeping",
    ],
    tech: ["Flutter", "Dart", "Barcode", "Pasori Scanner", "Printer"],
  },
  {
    id: "ado-telemedicine",
    name: "ADO",
    role: "Flutter Engineer",
    category: "mobile",
    period: "2022/08 — 2022/12",
    teamSize: 4,
    duration: "3 months",
    summary:
      "A telemedicine application closing the distance between patients and doctors, pharmacies and hospitals. Patients schedule consultations, join Zoom calls for appointments, message for advice, and send prescriptions directly to pharmacies in the network for home delivery. It also covers clinic management, pharmacy and hospital discovery, and prescription history, with integrated payment for internationalization.",
    responsibilities: [
      "Gathered requirements and business logic directly from the app founder.",
      "Built core features: Doctor Profile, Patient Profile, Prescription History and Zoom meetings.",
    ],
    engineering: [
      "Zoom SDK for scheduled consultations",
      "Google Maps for visualising hospitals, clinics and pharmacies",
      "Firebase for instant notifications; CI/CD for delivery",
    ],
    tech: ["Flutter", "Dart", "Zoom SDK", "Google Maps", "Firebase", "CI/CD"],
  },
  {
    id: "real-estate-services",
    name: "Real Estate Services",
    role: "Flutter Engineer",
    category: "mobile",
    period: "2022/08 — 2023/02",
    teamSize: 3,
    duration: "6 months",
    summary:
      "A co-founded product I helped conceptualize, built for web and mobile. It builds a user community around real-estate information — viewing location, plot number and owner name via maps and text — letting users list properties as newsletters and connect through chat and calling.",
    responsibilities: [
      "Co-founded and conceptualized the product.",
      "Worked with the team on ideation, design and technology selection.",
      "Built screens and features for the mobile application.",
    ],
    engineering: [
      "Flutter for rapid cross-platform delivery on Android and iOS",
      "Firebase for notifications; Maps for property visualisation",
    ],
    tech: ["Flutter", "Dart", "Firebase", "Google Maps"],
  },
  {
    id: "social-network-blockchain",
    name: "Social Network Blockchain",
    role: "Flutter Engineer",
    category: "mobile",
    period: "2022/03 — 2022/07",
    duration: "3 months",
    summary:
      "A social networking application inside a cryptocurrency ecosystem — combining video, feed and short-form content in one app, with cryptocurrency used for in-app payment and consumption.",
    responsibilities: [
      "Built and tested critical features including video calling, login and registration.",
      "Worked with the team and responded quickly to changing requirements.",
    ],
    engineering: [
      "Fingerprint and facial biometrics for account security",
      "Socket.IO and WebRTC powering like, share, comment, chat and video call",
      "Firebase Messaging for push notifications",
    ],
    tech: ["Flutter", "Dart", "WebRTC", "Socket.IO", "Firebase Messaging", "Biometrics"],
  },
  {
    id: "eth-miner-management",
    name: "ETH Miner Management App",
    role: "Flutter Engineer",
    category: "mobile",
    period: "2022/03 — 2022/07",
    teamSize: 3,
    duration: "3 months",
    summary:
      "A mobile application for managing ETH miners securely from anywhere. Users check current ETH balance and hash rate, monitor miner status, view statistics on ETH received, and transfer to their wallet — protected by biometrics and 2FA.",
    responsibilities: [
      "Built login, current-ETH checking and productivity statistics over time.",
      "Communicated with the team and supported backend and design in solving problems.",
    ],
    engineering: [
      "Socket.IO and Firebase for continuous, instant data and notifications",
      "Fingerprint and face biometrics plus 2FA for security",
    ],
    tech: ["Flutter", "Dart", "Socket.IO", "Firebase", "Biometrics", "2FA"],
  },
];
