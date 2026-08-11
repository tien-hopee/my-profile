import type { ContactLink } from "./types";

export const profile = {
  name: "Dinh Van Tien",
  /** Role triad, ordered by recency of engagement. */
  roles: ["Game Engineer", "Mobile Engineer", "Fullstack Engineer"],
  tagline:
    "I build and ship products across six platforms — from Unity worlds and Flutter apps to Laravel back ends.",
  /*
    NOTE: source CV states "3+ years", but its own timeline runs 2022/03 → present
    (~4 yr 5 mo). Corrected upward to 4+. Change back here if 3+ was intentional.
  */
  yearsOfExperience: "4+",
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
  /** Primary stacks, surfaced in the hero as proof-at-a-glance. */
  headlineStacks: ["Unity / C#", "Flutter / Dart", "Swift", "Laravel / PHP", "Kotlin"],
} as const;

/*
  Contact details are NOT present in the source CV. They render as visible
  placeholders so the site never publishes invented contact information.
  → Fill these in and delete `isPlaceholder`.
*/
export const contactLinks: ContactLink[] = [
  { label: "Email", value: "your.email@example.com", isPlaceholder: true },
  { label: "Phone", value: "+84 000 000 000", isPlaceholder: true },
  { label: "GitHub", value: "github.com/your-handle", isPlaceholder: true },
  { label: "LinkedIn", value: "linkedin.com/in/your-handle", isPlaceholder: true },
  { label: "Location", value: "City, Vietnam", isPlaceholder: true },
];

export const education = {
  isPlaceholder: true,
  items: [
    {
      institution: "Your university / college",
      credential: "Your degree — field of study",
      period: "20XX — 20XX",
    },
  ],
};

export const languages = [
  { name: "Vietnamese", level: "Native", isPlaceholder: false },
  { name: "English", level: "Professional working proficiency", isPlaceholder: true },
  { name: "Japanese", level: "Add your JLPT level", isPlaceholder: true },
];
