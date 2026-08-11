import type { Dictionary } from "../types";

/** Theo SkillGroup.id. Tên từng công nghệ giữ nguyên, không dịch. */
export const skillGroupLabels: Dictionary["skillGroupLabels"] = {
  game: "Phát triển Game",
  mobile: "Mobile",
  backend: "Backend",
  architecture: "Kiến trúc & Design Pattern",
  frontend: "Frontend",
  data: "Cơ sở dữ liệu",
  cloud: "Cloud & DevOps",
  quality: "Kiểm thử & Phát hành",
  integrations: "Tích hợp",
  ai: "Phát triển với AI",
};

/** Theo Platform.name. */
export const platformNotes: Dictionary["platformNotes"] = {
  iOS: "Swift native & Flutter, đã phát hành lên App Store",
  Android: "Flutter, phát hành qua Play Console",
  Web: "Dashboard Laravel và Flutter Web",
  iPadOS: "Ứng dụng quản lý khách sạn và bán hàng tại quầy",
  macOS: "Bản desktop dùng chung codebase",
  Windows: "Bản desktop và target game Unity",
};
