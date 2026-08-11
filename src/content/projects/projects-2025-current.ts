import type { Project } from "../types";

/** Current and most recent engagements (2024/10 → present). */
export const projects2025Current: Project[] = [
  {
    id: "delivery-game",
    name: "Delivery Game",
    role: "Game Engineer",
    category: "game",
    period: "2025/12 — Current",
    isCurrent: true,
    teamSize: 3,
    summary:
      "A localized delivery simulation game that brings iconic cityscapes and authentic street culture to life. Players role-play as delivery drivers, navigating familiar streets and experiencing the humorous reality of daily traffic.",
    responsibilities: [
      "Modeled real-world assets and environments in Blender to create authentic cityscapes.",
      "Programmed and implemented core gameplay mechanics in Unity (C#).",
      "Researched and proposed technical solutions optimized for handling large-scale maps efficiently.",
      "Conducted rigorous testing and optimized the game for smooth performance across all target devices.",
    ],
    engineering: [
      "Clean Architecture with Service Locator and Event Bus for decoupled systems",
      "State Machine, Strategy, Interface Abstraction, Singleton and Object Pooling",
      "World Streaming via chunk loading, LOD, billboarding and texture compression",
      "Auto-rigging pipeline for 3D assets",
    ],
    tech: ["Unity", "C#", "Blender", "Clean Architecture", "Object Pooling", "World Streaming"],
  },
  {
    id: "learning-japanese-career",
    name: "Learning Japanese & Japan Career",
    role: "Mobile Engineer",
    category: "mobile",
    period: "2025/05 — 2025/11",
    teamSize: 3,
    duration: "6 months",
    summary:
      "An all-in-one multilingual application for Southeast Asian and East Asian users. It integrates automated Japanese learning with real-teacher support and a dedicated job-hunting portal for careers in Japan.",
    responsibilities: [
      "Provided expert technical consultation, proposing solutions to improve app architecture and development efficiency.",
      "Collaborated closely with cross-functional teams to build and integrate new features, ensuring on-time delivery.",
      "Ensured consistent user experience by rigorously testing and optimizing across a wide range of mobile devices.",
      "Owned the end-to-end release process on the App Store and Google Play, following store guidelines.",
    ],
    engineering: [
      "Clean Architecture with Riverpod, Flutter Hooks and DI via GetIt + Injectable",
      "Voice Activity Detection and audio recording as core learning features",
    ],
    tech: [
      "Flutter",
      "Dart",
      "Riverpod",
      "Flutter Hooks",
      "GetIt",
      "Injectable",
      "Dio",
      "GoRouter",
      "Firebase",
      "JustAudio",
      "VAD",
      "Adjust SDK",
    ],
  },
  {
    id: "learning-japanese",
    name: "Learning Japanese",
    role: "Mobile Engineer",
    category: "mobile",
    period: "2024/10 — 2025/02",
    teamSize: 2,
    duration: "4 months",
    summary:
      "A comprehensive e-learning application for a Vietnamese Japanese-language center. It provides a structured roadmap from the basic alphabet (Hiragana/Katakana) through to advanced JLPT N1, bridging self-study with direct instructor support.",
    responsibilities: [
      "Provided technical consultation and worked with cross-functional teams to develop and integrate requested features.",
      "Guided the business client through store account registration and set up In-App Purchase and payment gateway systems.",
      "Conducted comprehensive testing and managed end-to-end releases on the App Store and Google Play.",
    ],
    engineering: [
      "Clean Architecture with Provider, Flutter Hooks and DI via GetIt + Injectable",
      "In-App Purchase and payment gateway integration from scratch",
    ],
    tech: [
      "Flutter",
      "Dart",
      "Provider",
      "Flutter Hooks",
      "GetIt",
      "Injectable",
      "Dio",
      "GoRouter",
      "Firebase",
      "In-App Purchase",
      "JustAudio",
      "VAD",
    ],
  },
];
