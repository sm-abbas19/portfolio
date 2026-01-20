export interface Experience {
  id: number;
  dateRange: string;
  title: string;
  company: string;
  companyUrl: string;
  description: string;
  skills: string[];
  location?: string;
  positions?: string[];
}

export const experiences: Experience[] = [
  {
    id: 1,
    dateRange: "JUN — AUG 2025",
    title: "Software Engineer Intern",
    company: "Horizon Tech Services Pvt. Ltd.",
    companyUrl: "#",
    location: "Islamabad, Pakistan",
    description:
      "Deployed on-device AI models for Android using MediaPipe/TFLite, enabling real-time Gesture Recognition with zero network latency. Engineered FastAPI and Flask microservices to handle heavy-duty Collision Detection workloads for desktop clients. Integrated OpenCV and ByteTrack for object tracking, optimizing inference pipelines to achieve near 30 FPS on limited hardware.",
    skills: ["Deep Learning", "Computer Vision", "FastAPI", "Flask", "MediaPipe", "TFLite", "OpenCV", "ByteTrack"],
  },
  {
    id: 2,
    dateRange: "JUL 2019",
    title: "JST Research Scholar",
    company: "Japan Science and Technology Agency (JST)",
    companyUrl: "https://ssp.jst.go.jp/",
    location: "Tokyo, Japan",
    description:
      "Participated in the Sakura Science Exchange Program, engaging in technical workshops at Tokyo Institute of Technology and KEK (High Energy Accelerator Research Organization). Gained exposure to advanced robotics and particle physics workflows while collaborating with students and researchers from Japan, China, Nepal, Turkmenistan, Kazakhstan, and other countries.",
    skills: ["Problem Solving", "International Exchange", "Leadership", "Research"],
  },
];
