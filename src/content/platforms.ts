import type { Platform } from "./types";

/** The six platforms the source CV claims shipped work on. */
export const platforms: Platform[] = [
  { name: "iOS", note: "Native Swift & Flutter, published to the App Store" },
  { name: "Android", note: "Flutter, published via Play Console" },
  { name: "Web", note: "Laravel dashboards and Flutter Web" },
  { name: "iPadOS", note: "Hotel management and point-of-sale apps" },
  { name: "macOS", note: "Desktop builds from shared codebases" },
  { name: "Windows", note: "Desktop builds and Unity game targets" },
];
