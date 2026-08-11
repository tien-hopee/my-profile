import type { Dictionary } from "../types";

export const profile: Dictionary["profile"] = {
  roles: ["Game Engineer", "Mobile Engineer", "Fullstack Engineer"],
  positioning:
    "Software engineer with 4+ years delivering tailored technical solutions for Japanese clients. I have contributed to 15+ projects across Web, Android, iOS, macOS, iPadOS and Windows — owning features end to end, consulting on architecture, and taking releases through the App Store and Google Play.",
  about: [
    "My work splits across three tracks. As a Game Engineer I build gameplay systems in Unity and model environments in Blender, with a focus on making large-scale maps run smoothly on mid-range devices. As a Mobile Engineer I have shipped Flutter and native Swift apps — clean architecture, CI/CD, payments, real-time voice and video. As a Fullstack Engineer I build and maintain Laravel systems serving both web dashboards and the APIs behind iPad apps.",
    "Most of that has been for Japanese clients, which shaped how I work: precise requirements, careful release discipline, and long maintenance horizons — several of my projects I have kept running for over two years. I usually work in teams of 2 to 5 and often act as the technical consultant, proposing the approach before writing the code.",
    "I also handle the parts around the code that projects actually need: registering store accounts, wiring up In-App Purchase and payment gateways, setting up Sentry and DataDog, and optimising slow SQL queries.",
  ],
  stats: [
    { value: "4+", label: "Years experience", detail: "Since 2022/03" },
    { value: "15+", label: "Projects delivered", detail: "12 detailed below" },
    { value: "6", label: "Platforms shipped", detail: "Web to desktop" },
    { value: "4", label: "Engineering roles", detail: "Game to backend" },
  ],
  facts: [
    { term: "Experience", detail: "4+ years" },
    { term: "Focus", detail: "Game, Mobile, Fullstack" },
    { term: "Clients", detail: "Primarily Japanese market" },
    { term: "Team sizes", detail: "2 – 5 engineers" },
    { term: "Longest project", detail: "28 months maintained" },
  ],
  contactLabels: {
    email: "Email",
    phone: "Phone",
    github: "GitHub",
    linkedin: "LinkedIn",
    location: "Location",
  },
  educationItems: [
    {
      institution: "Your university / college",
      credential: "Your degree — field of study",
      period: "20XX — 20XX",
    },
  ],
  languages: [
    { name: "Vietnamese", level: "Native" },
    { name: "English", level: "Professional working proficiency" },
    { name: "Japanese", level: "Add your JLPT level" },
  ],
};
