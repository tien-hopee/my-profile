import type { Dictionary } from "../types";

export const nav: Dictionary["nav"] = {
  about: "Giới thiệu",
  skills: "Kỹ năng",
  experience: "Kinh nghiệm",
  platforms: "Nền tảng",
  contact: "Liên hệ",
};

export const hero: Dictionary["hero"] = {
  availability: "ĐANG TÌM CƠ HỘI MỚI",
  tagline:
    "Tôi xây dựng và phát hành sản phẩm trên sáu nền tảng — từ thế giới Unity, ứng dụng Flutter đến back end Laravel.",
  viewWork: "Xem dự án",
  contactMe: "Liên hệ tôi",
  downloadCv: "Tải CV",
};

export const sections: Dictionary["sections"] = {
  about: { title: "Giới thiệu" },
  skills: {
    title: "Kỹ năng chuyên môn",
    description:
      "Phân theo lĩnh vực. Nhóm được làm nổi bật là nơi tôi làm việc hằng ngày; phần còn lại là công cụ tôi dùng tuỳ theo yêu cầu dự án.",
  },
  experience: {
    title: "Kinh nghiệm",
    description: "Chọn một dự án để xem trách nhiệm, quyết định kỹ thuật và toàn bộ stack.",
  },
  platforms: {
    title: "Nền tảng đã phát hành",
    description:
      "Sản phẩm chạy thật trên sáu nền tảng, bao gồm những ứng dụng do tôi tự đăng ký, submit và phát hành lên App Store và Google Play.",
  },
  education: { title: "Học vấn & ngôn ngữ" },
  contact: { title: "Liên hệ" },
};

export const labels: Dictionary["labels"] = {
  // Deliberately different from nav.contact so the header does not repeat itself.
  getInTouch: "Liên hệ ngay",
  skipToContent: "Tới nội dung chính",
  sectionsNavLabel: "Các mục",
  footerNavLabel: "Chân trang",
  languageLabel: "Ngôn ngữ",
  responsibilities: "Trách nhiệm",
  engineeringNotes: "Ghi chú kỹ thuật",
  stack: "Công nghệ",
  core: "Chính",
  teamOf: "Nhóm",
  durationSingle: "{months} tháng",
  durationBuildMaintain: "{build} tháng phát triển + {maintain} tháng bảo trì",
  educationHeading: "Học vấn",
  languagesHeading: "Ngôn ngữ",
  expandProject: "Xem chi tiết dự án",
  collapseProject: "Ẩn chi tiết dự án",
  projectCountSuffix: "dự án, xếp từ mới nhất.",
  decorativeCoverAlt: "Ảnh bìa trang trí",
};

export const placeholders: Dictionary["placeholders"] = {
  contact:
    "CV gốc không có thông tin liên hệ nên đây là nội dung tạm. Điền vào contactLinks trong src/content/contact-links.ts — thêm href và bỏ isPlaceholder để mỗi thẻ thành liên kết thật.",
  education:
    "CV gốc không ghi học vấn. Cập nhật educationItems trong src/i18n/<locale>/profile.ts.",
  languages:
    "Xác nhận trình độ tiếng Anh và bổ sung trình độ JLPT — nên ghi rõ vì bạn có kinh nghiệm làm việc với khách Nhật.",
};

export const categoryLabels: Dictionary["categoryLabels"] = {
  game: "Game",
  mobile: "Mobile",
  web: "Web",
  backend: "Backend",
};
