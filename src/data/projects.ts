export interface Project {
  id: number;
  year: string;
  title: string;
  description?: string;
  url: string;
  image?: string;
  stars?: number;
  skills: string[];
  featured: boolean;
  inProgress?: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    year: "2025",
    title: "SecureVision",
    description:
      "Architecting a high-throughput real-time threat detection pipeline integrating YOLOv11, BoTSORT, and Pose Estimation. Engineering a custom fusion layer where visual detections trigger Small Language Model (SLM) analysis for context verification, reducing false positives by 40%. Aiming to optimize inference to process at 25+ FPS on consumer hardware.",
    url: "https://github.com/Wahajk-code/secure-vision",
    skills: ["Python", "YOLOv11", "BoTSORT", "Pose Estimation", "SLM", "PyTorch", "OpenCV"],
    featured: true,
    inProgress: true,
  },
  {
    id: 2,
    year: "2026",
    title: "Gasthaus",
    description:
      "Built an enterprise-grade restaurant management platform with a Java and Spring Boot backend, applying SOLID principles, layered REST API architecture, and JPA/Hibernate-backed PostgreSQL persistence. Implemented real-time WebSocket communication achieving sub-50ms state synchronisation across role-based clients. Integrated Gemini API for automated business analytics, with Flutter and Next.js frontends.",
    url: "https://github.com/sm-abbas19/Gasthaus",
    skills: ["Java", "Spring Boot", "PostgreSQL", "WebSocket", "Next.js", "Flutter", "Gemini API"],
    featured: true,
  },
  {
    id: 4,
    year: "2025",
    title: "PCA-Praxis: Secure CLI Agent",
    description:
      "Engineered a local AI Agent that autonomously translates natural language into executable shell commands. Orchestrated Phi-3 (3.8B) within a custom reasoning loop to parse intent, execute tasks inside an ephemeral Docker sandbox, and self-correct syntax errors. Achieved 100% isolation for destructive commands and sub-200ms latency by running entirely on-premise without cloud APIs.",
    url: "https://pcapraxis.netlify.app/",
    skills: ["Python", "React", "Flask", "Docker", "Ollama", "LLM"],
    featured: true,
  }
];
