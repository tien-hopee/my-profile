import type { Dictionary } from "../types";

/** Keyed by Project.id from src/content/projects/. */
export const projects: Dictionary["projects"] = {
  "delivery-game": {
    name: "Delivery Game",
    role: "Game Engineer",
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
  },
  "learning-japanese-career": {
    name: "Learning Japanese & Japan Career",
    role: "Mobile Engineer",
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
  },
  "learning-japanese": {
    name: "Learning Japanese",
    role: "Mobile Engineer",
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
  },
  "check-in-application": {
    name: "Check-in Application",
    role: "Mobile Engineer",
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
  },
  "hotel-pms-web": {
    name: "Hotel PMS Web",
    role: "Fullstack Engineer",
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
  },
  "kid-backend": {
    name: "KID",
    role: "Backend Engineer",
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
  },
  "resort-cloud-ticket-web": {
    name: "Resort Cloud Ticket Web",
    role: "Flutter Engineer",
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
  },
  "point-management-app": {
    name: "Point Management App",
    role: "Flutter Engineer",
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
  },
  "ado-telemedicine": {
    name: "ADO",
    role: "Flutter Engineer",
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
  },
  "real-estate-services": {
    name: "Real Estate Services",
    role: "Flutter Engineer",
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
  },
  "social-network-blockchain": {
    name: "Social Network Blockchain",
    role: "Flutter Engineer",
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
  },
  "eth-miner-management": {
    name: "ETH Miner Management App",
    role: "Flutter Engineer",
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
  },
};
