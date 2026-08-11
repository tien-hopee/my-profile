import type { Dictionary } from "../types";

export const nav: Dictionary["nav"] = {
  about: "About",
  skills: "Skills",
  experience: "Experience",
  platforms: "Platforms",
  contact: "Contact",
};

export const hero: Dictionary["hero"] = {
  availability: "OPEN TO OPPORTUNITIES",
  tagline:
    "I build and ship products across six platforms — from Unity worlds and Flutter apps to Laravel back ends.",
  viewWork: "View my work",
  contactMe: "Contact me",
  downloadCv: "Download CV",
};

export const sections: Dictionary["sections"] = {
  about: { title: "About" },
  skills: {
    title: "Technical skills",
    description:
      "Grouped by discipline. Highlighted groups are where I work day to day; the rest are tools I use as projects require.",
  },
  experience: {
    title: "Experience",
    description:
      "Select any entry to read the responsibilities, engineering decisions and full stack.",
  },
  platforms: {
    title: "Platforms shipped",
    description:
      "Production work delivered across six platforms, including apps I registered, submitted and published to the App Store and Google Play myself.",
  },
  education: { title: "Education & languages" },
  contact: { title: "Get in touch" },
};

export const labels: Dictionary["labels"] = {
  getInTouch: "Get in touch",
  skipToContent: "Skip to content",
  sectionsNavLabel: "Sections",
  footerNavLabel: "Footer",
  languageLabel: "Language",
  responsibilities: "Responsibilities",
  engineeringNotes: "Engineering notes",
  stack: "Stack",
  core: "Core",
  teamOf: "Team of",
  durationSingle: "{months} months",
  durationBuildMaintain: "{build} months build + {maintain} months maintenance",
  educationHeading: "Education",
  languagesHeading: "Languages",
  expandProject: "Show project details",
  collapseProject: "Hide project details",
  projectCountSuffix: "projects in reverse-chronological order.",
  decorativeCoverAlt: "Decorative cover artwork",
};

export const placeholders: Dictionary["placeholders"] = {
  contact:
    "The source CV contains no contact details, so these are placeholders. Fill in contactLinks in src/i18n/<locale>/profile.ts — add an href and remove isPlaceholder to make each one a live link.",
  education:
    "Education is not recorded in the source CV. Update educationItems in src/i18n/<locale>/profile.ts.",
  languages:
    "Confirm your English level and add your JLPT level — worth stating explicitly given your Japanese-client experience.",
};

export const categoryLabels: Dictionary["categoryLabels"] = {
  game: "Game",
  mobile: "Mobile",
  web: "Web",
  backend: "Backend",
};
