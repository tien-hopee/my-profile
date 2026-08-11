import type { Dictionary } from "../types";

/** Theo Project.id trong src/content/projects/. Tên dự án giữ nguyên tiếng Anh. */
export const projects: Dictionary["projects"] = {
  "delivery-game": {
    name: "Delivery Game",
    role: "Game Engineer",
    summary:
      "Game mô phỏng giao hàng bản địa hoá, tái hiện những góc phố quen thuộc và văn hoá đường phố chân thực. Người chơi vào vai tài xế giao hàng, di chuyển qua các con phố quen và trải nghiệm sự hài hước của giao thông thường ngày.",
    responsibilities: [
      "Dựng model tài sản và môi trường theo thực tế bằng Blender để tạo khung cảnh thành phố chân thực.",
      "Lập trình và triển khai các cơ chế gameplay cốt lõi bằng Unity (C#).",
      "Nghiên cứu và đề xuất giải pháp kỹ thuật tối ưu cho việc xử lý bản đồ quy mô lớn.",
      "Kiểm thử kỹ và tối ưu game để chạy mượt trên toàn bộ thiết bị mục tiêu.",
    ],
    engineering: [
      "Clean Architecture cùng Service Locator và Event Bus để tách rời các hệ thống",
      "State Machine, Strategy, Interface Abstraction, Singleton và Object Pooling",
      "World Streaming bằng chunk loading, LOD, billboarding và nén texture",
      "Pipeline auto-rigging cho tài sản 3D",
    ],
  },
  "learning-japanese-career": {
    name: "Learning Japanese & Japan Career",
    role: "Mobile Engineer",
    summary:
      "Ứng dụng đa ngôn ngữ tất-cả-trong-một cho người dùng Đông Nam Á và Đông Á. Ứng dụng kết hợp học tiếng Nhật tự động với hỗ trợ từ giáo viên thật, cùng một cổng tìm việc riêng cho công việc tại Nhật.",
    responsibilities: [
      "Tư vấn kỹ thuật chuyên sâu, đề xuất giải pháp cải thiện kiến trúc ứng dụng và hiệu suất phát triển.",
      "Phối hợp chặt với các nhóm liên chức năng để xây dựng và tích hợp feature mới, đảm bảo đúng tiến độ.",
      "Bảo đảm trải nghiệm nhất quán bằng cách kiểm thử và tối ưu kỹ trên nhiều dòng thiết bị.",
      "Chịu trách nhiệm toàn bộ quy trình release lên App Store và Google Play theo đúng guideline của store.",
    ],
    engineering: [
      "Clean Architecture với Riverpod, Flutter Hooks và DI qua GetIt + Injectable",
      "Voice Activity Detection và ghi âm là các feature học tập cốt lõi",
    ],
  },
  "learning-japanese": {
    name: "Learning Japanese",
    role: "Mobile Engineer",
    summary:
      "Ứng dụng e-learning toàn diện cho một trung tâm tiếng Nhật tại Việt Nam. Ứng dụng cung cấp lộ trình có cấu trúc từ bảng chữ cơ bản (Hiragana/Katakana) đến JLPT N1, kết nối việc tự học với hỗ trợ trực tiếp từ giảng viên.",
    responsibilities: [
      "Tư vấn kỹ thuật và làm việc với các nhóm liên chức năng để phát triển, tích hợp feature theo yêu cầu.",
      "Hướng dẫn khách hàng đăng ký tài khoản store và thiết lập hệ thống In-App Purchase cùng cổng thanh toán.",
      "Kiểm thử toàn diện và quản lý toàn bộ quy trình release lên App Store và Google Play.",
    ],
    engineering: [
      "Clean Architecture với Provider, Flutter Hooks và DI qua GetIt + Injectable",
      "Tích hợp In-App Purchase và cổng thanh toán từ đầu",
    ],
  },
  "check-in-application": {
    name: "Check-in Application",
    role: "Mobile Engineer",
    summary:
      "Ứng dụng check-in / check-out cho khách sạn, hỗ trợ check-in tự động qua mã QR, mã booking hoặc số điện thoại. Ứng dụng tích hợp thanh toán tự động qua Coiney, thu thập visa qua thiết bị đầu cuối và phát thẻ phòng cho khách — giảm nhân sự cho khách sạn, đồng thời giúp quy trình nhanh và chuyên nghiệp hơn.",
    responsibilities: [
      "Đảm nhận vai trò developer và maintainer, giữ hệ thống chạy ổn định trong hơn hai năm.",
      "Xây dựng feature mới đáp ứng nhu cầu thay đổi của doanh nghiệp và khách hàng.",
      "Dùng Firebase và Sentry để thu thập telemetry thiết bị và lỗi nhằm phản hồi nhanh.",
      "Tích hợp WebRTC cho thoại và video rõ ràng ở feature gọi hỗ trợ khách.",
    ],
    engineering: [
      "Triển khai Swift native để đảm bảo độ tin cậy với thiết bị đầu cuối",
      "Coiney Payment SDK cho thanh toán không cần nhân viên",
      "Sentry + Firebase để nhận diện lỗi mọi lúc, mọi nơi",
    ],
  },
  "hotel-pms-web": {
    name: "Hotel PMS Web",
    role: "Fullstack Engineer",
    summary:
      "Hệ thống quản lý khách sạn toàn diện. Khách đặt phòng, check-in và check-out; quản trị viên quản lý phòng, booking và dịch vụ dọn phòng. Nền tảng cung cấp RESTful API cho iPad và web client, phân quyền theo khách, quản trị viên và super admin.",
    responsibilities: [
      "Chịu trách nhiệm xây dựng và duy trì hệ thống ở cả phía web và API.",
      "Xây dựng màn hình thống kê doanh thu và xuất file thống kê.",
      "Tiếp tục quản lý và cập nhật ứng dụng đang chạy production.",
    ],
    engineering: [
      "Laravel phục vụ cả web app và REST API cho client iPad",
      "Tích hợp đặc thù ngành khách sạn: quản lý tồn kho Temairazu, khoá tự động Remote Lock",
      "Thẻ Apple Wallet và Google Wallet; thanh toán Coiney",
      "Sentry và DataDog để theo dõi hiệu năng; AWS + CSV cho import/export",
    ],
  },
  "kid-backend": {
    name: "KID",
    role: "Backend Engineer",
    summary:
      "Service backend độc lập viết bằng Kotlin theo clean architecture, là phần lõi của hệ thống API. Service giải quyết bài toán bán ảnh trên web: upload, đặt giá, lưu trữ, đăng ký tài khoản, sắp xếp và chỉnh sửa ảnh.",
    responsibilities: [
      "Xây dựng các feature quản lý ảnh: sắp xếp, chỉnh sửa, xoá và di chuyển.",
      "Tối ưu các truy vấn chậm.",
      "Xử lý tình huống upload và xoá đồng thời gây tranh chấp trên database.",
    ],
    engineering: [
      "Clean Architecture để đảm bảo chất lượng code và phân tách rõ ràng",
      "Đặc tả OpenAPI giúp API dễ đọc, dễ hiểu và dễ dùng",
      "Unit test và feature test là bắt buộc cho mọi thay đổi",
      "Tích hợp AWS cho lưu trữ và validation",
    ],
  },
  "resort-cloud-ticket-web": {
    name: "Resort Cloud Ticket Web",
    role: "Flutter Engineer",
    summary:
      "Một phần của hệ thống quản lý khách sạn - nhà hàng, giải quyết việc quản lý và sử dụng coupon cùng voucher ăn uống cho người dùng cuối. Sản phẩm tự động hoá và tinh gọn quy trình quản lý khách sạn, nhà hàng.",
    responsibilities: [
      "Xây dựng và kiểm thử các feature của ứng dụng, gồm hiển thị coupon và sử dụng coupon.",
      "Bảo trì ứng dụng suốt sáu tháng hỗ trợ.",
    ],
    engineering: [
      "Chọn Flutter Web để tái sử dụng component sẵn có trong cùng hệ sản phẩm",
      "Dùng barcode để mô hình hoá và tự động hoá việc sử dụng coupon, phiếu ăn",
    ],
  },
  "point-management-app": {
    name: "Point Management App",
    role: "Flutter Engineer",
    summary:
      "Ứng dụng iPad cho khách sạn, hỗ trợ khách đặt phòng và sử dụng coupon, đồng thời cung cấp các feature quản lý cho nhân viên khách sạn.",
    responsibilities: [
      "Bảo trì và vận hành ứng dụng đáp ứng tiêu chuẩn cùng yêu cầu của khách hàng.",
    ],
    engineering: [
      "Dùng Flutter để tái sử dụng component trong cùng hệ sản phẩm khách sạn",
      "Barcode và Pasori Scanner cho tự động hoá khách sạn - nhà hàng",
      "In hoá đơn để lưu chứng từ",
    ],
  },
  "ado-telemedicine": {
    name: "ADO",
    role: "Flutter Engineer",
    summary:
      "Ứng dụng khám bệnh từ xa, rút ngắn khoảng cách giữa bệnh nhân với bác sĩ, nhà thuốc và bệnh viện. Bệnh nhân đặt lịch tư vấn, tham gia cuộc gọi Zoom theo lịch hẹn, nhắn tin xin tư vấn và gửi đơn thuốc trực tiếp tới nhà thuốc trong hệ thống để giao về nhà. Ứng dụng còn có quản lý phòng khám, tìm nhà thuốc và bệnh viện gần đó, xem lịch sử đơn thuốc, cùng thanh toán tích hợp hướng tới quốc tế hoá.",
    responsibilities: [
      "Khai thác yêu cầu và logic nghiệp vụ trực tiếp từ founder của ứng dụng.",
      "Xây dựng các feature cốt lõi: Doctor Profile, Patient Profile, lịch sử đơn thuốc và cuộc họp Zoom.",
    ],
    engineering: [
      "Zoom SDK cho các buổi tư vấn theo lịch",
      "Google Maps để hiển thị trực quan bệnh viện, phòng khám và nhà thuốc",
      "Firebase cho thông báo tức thời; CI/CD cho phát hành",
    ],
  },
  "real-estate-services": {
    name: "Real Estate Services",
    role: "Flutter Engineer",
    summary:
      "Sản phẩm tôi đồng sáng lập và tham gia hình thành ý tưởng, phát triển cho cả web và mobile. Sản phẩm xây dựng cộng đồng người dùng quanh thông tin bất động sản — xem vị trí, số thửa và tên chủ sở hữu qua bản đồ và văn bản — cho phép người dùng đăng tin bất động sản và kết nối qua chat, gọi điện.",
    responsibilities: [
      "Đồng sáng lập và hình thành ý tưởng sản phẩm.",
      "Cùng nhóm brainstorm, thiết kế và chọn công nghệ.",
      "Xây dựng màn hình và feature cho ứng dụng mobile.",
    ],
    engineering: [
      "Flutter để phát triển nhanh đa nền tảng trên Android và iOS",
      "Firebase cho thông báo; Maps để hiển thị bất động sản",
    ],
  },
  "social-network-blockchain": {
    name: "Social Network Blockchain",
    role: "Flutter Engineer",
    summary:
      "Ứng dụng mạng xã hội trong hệ sinh thái một loại tiền mã hoá — kết hợp video, feed và nội dung ngắn trong cùng một ứng dụng, dùng tiền mã hoá để thanh toán và chi tiêu trong ứng dụng.",
    responsibilities: [
      "Xây dựng và kiểm thử các feature quan trọng gồm gọi video, đăng nhập và đăng ký.",
      "Làm việc cùng nhóm và phản hồi nhanh khi yêu cầu thay đổi.",
    ],
    engineering: [
      "Sinh trắc học vân tay và khuôn mặt để bảo mật tài khoản",
      "Socket.IO và WebRTC cho like, share, comment, chat và gọi video",
      "Firebase Messaging cho push notification",
    ],
  },
  "eth-miner-management": {
    name: "ETH Miner Management App",
    role: "Flutter Engineer",
    summary:
      "Ứng dụng mobile giúp quản lý máy đào ETH an toàn từ bất cứ đâu. Người dùng kiểm tra số ETH hiện có và tốc độ đào, theo dõi trạng thái máy, xem thống kê ETH nhận được và chuyển về ví — được bảo vệ bằng sinh trắc học và 2FA.",
    responsibilities: [
      "Xây dựng đăng nhập, kiểm tra ETH hiện tại và thống kê hiệu suất theo thời gian.",
      "Trao đổi với nhóm và hỗ trợ backend cùng designer giải quyết vấn đề.",
    ],
    engineering: [
      "Socket.IO và Firebase cho dữ liệu, thông báo liên tục và tức thời",
      "Sinh trắc học vân tay, khuôn mặt cùng 2FA để tăng bảo mật",
    ],
  },
};
