// Dữ liệu của CV
export const profile = {
  name: "Phạm Duy Thịnh",
  title: "Sinh viên năm 2 ngành AIoT – Học viện Công nghệ Bưu chính Viễn thông (PTIT)",
  email: "thinhpd.b25tv072@stu.ptit.edu.vn",
  phone: "0869 274 529",
  github: "https://github.com/B25DCTV072-PhamDuyThinh",
  about:
    "Sinh viên năm 2 ngành Trí tuệ nhân tạo vạn vật (AIoT) tại PTIT. " +
    "Quan tâm đến IoT và bảo mật cho hệ thống IoT. " +
    "Đang học React để xây dựng giao diện web giám sát và điều khiển cho các hệ thống AIoT.",
};

export const education = [
  {
    id: 1,
    school: "Học viện Công nghệ Bưu chính Viễn thông (PTIT)",
    time: "2025 – nay",
    detail: "Ngành Trí tuệ nhân tạo vạn vật (AIoT) · Mã sinh viên B25DCTV072",
  },
];

export const skills = [
  { id: 1, name: "HTML & CSS", level: 80 },
  { id: 2, name: "JavaScript (ES6+)", level: 70 },
  { id: 3, name: "React", level: 40 },
  { id: 4, name: "TypeScript", level: 35 },
  { id: 5, name: "Git & GitHub", level: 60 },
  { id: 6, name: "Python", level: 30 },
];

export const projects = [
  {
    id: 1,
    name: "Nghiên cứu khoa học: Bảo mật cho thiết bị IoT",
    time: "2026",
    description:
      "Cùng nhóm nghiên cứu khung bảo mật cho các thiết bị IoT có tài nguyên hạn chế, " +
      "thử nghiệm bằng cách phân tích firmware của router và camera để tìm lỗ hổng. " +
      "Kết quả được viết thành bài báo và được nhận đăng tại hội nghị ICICNIS 2026.",
    tech: ["IoT Security", "Firmware", "NCKH"],
  },
  {
    id: 2,
    name: "Shop – Thực hành 1",
    time: "2026",
    description: "Trang cửa hàng SPA viết bằng JavaScript thuần: danh sách sản phẩm, giỏ hàng, gọi API.",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 3,
    name: "Virtual Calculator",
    time: "2026",
    description: "Máy tính ảo bằng React: component Display, Button, state lưu biểu thức.",
    tech: ["React", "Vite"],
  },
];
