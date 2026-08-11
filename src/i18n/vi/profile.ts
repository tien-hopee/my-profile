import type { Dictionary } from "../types";

export const profile: Dictionary["profile"] = {
  roles: ["Game Engineer", "Mobile Engineer", "Fullstack Engineer"],
  positioning:
    "Software engineer với hơn 4 năm cung cấp giải pháp kỹ thuật cho khách hàng Nhật Bản. Tôi đã tham gia hơn 15 dự án trên Web, Android, iOS, macOS, iPadOS và Windows — làm feature từ đầu đến cuối, tư vấn kiến trúc, và trực tiếp đưa sản phẩm lên App Store cùng Google Play.",
  about: [
    "Công việc của tôi chia theo ba hướng. Ở vai trò Game Engineer, tôi xây dựng hệ thống gameplay bằng Unity và dựng môi trường bằng Blender, tập trung vào việc giúp bản đồ quy mô lớn chạy mượt trên thiết bị tầm trung. Ở vai trò Mobile Engineer, tôi đã phát hành ứng dụng Flutter và Swift native — clean architecture, CI/CD, thanh toán, thoại và video real-time. Ở vai trò Fullstack Engineer, tôi xây dựng và duy trì hệ thống Laravel phục vụ cả dashboard web lẫn API phía sau các ứng dụng iPad.",
    "Phần lớn công việc là cho khách Nhật, điều đó định hình cách tôi làm: yêu cầu chi tiết, kỷ luật chặt khi release, và vòng bảo trì dài — nhiều dự án tôi duy trì hơn hai năm. Tôi thường làm trong nhóm 2 đến 5 người và hay đảm nhận vai trò tư vấn kỹ thuật, đề xuất hướng đi trước khi viết code.",
    "Tôi cũng lo những phần quanh code mà dự án thực sự cần: đăng ký tài khoản store, tích hợp In-App Purchase và cổng thanh toán, dựng Sentry cùng DataDog, và tối ưu các truy vấn SQL chậm.",
  ],
  stats: [
    { value: "4+", label: "Năm kinh nghiệm", detail: "Từ 03/2022" },
    { value: "15+", label: "Dự án đã làm", detail: "12 dự án chi tiết bên dưới" },
    { value: "6", label: "Nền tảng đã phát hành", detail: "Web tới desktop" },
    { value: "4", label: "Vai trò kỹ thuật", detail: "Game tới backend" },
  ],
  facts: [
    { term: "Kinh nghiệm", detail: "Hơn 4 năm" },
    { term: "Trọng tâm", detail: "Game, Mobile, Fullstack" },
    { term: "Khách hàng", detail: "Chủ yếu thị trường Nhật" },
    { term: "Quy mô nhóm", detail: "2 – 5 người" },
    { term: "Dự án dài nhất", detail: "Duy trì 28 tháng" },
  ],
  contactLabels: {
    email: "Email",
    phone: "Điện thoại",
    github: "GitHub",
    linkedin: "LinkedIn",
    location: "Địa điểm",
  },
  educationItems: [
    {
      institution: "Trường đại học / cao đẳng của bạn",
      credential: "Bằng cấp — chuyên ngành",
      period: "20XX — 20XX",
    },
  ],
  languages: [
    { name: "Tiếng Việt", level: "Bản ngữ" },
    { name: "Tiếng Anh", level: "Sử dụng tốt trong công việc" },
    { name: "Tiếng Nhật", level: "Bổ sung trình độ JLPT của bạn" },
  ],
};
