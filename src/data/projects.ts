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
      "Architecting a high-throughput surveillance pipeline integrating YOLOv11, BoTSORT, and Pose Estimation. Engineering a custom fusion layer where visual detections trigger Small Language Model (SLM) analysis for context verification. Aiming to optimize inference to process at 25+ FPS on consumer hardware.",
    url: "#",
    skills: ["Python", "YOLOv11", "BoTSORT", "Pose Estimation", "SLM", "PyTorch", "OpenCV"],
    featured: true,
    inProgress: true,
  },
  {
    id: 2,
    year: "2025",
    title: "PCA-Praxis: Secure CLI Agent",
    description:
      "Engineered a local AI Agent that autonomously translates natural language into executable shell commands. Orchestrated Phi-3 (3.8B) within a custom reasoning loop to parse intent, execute tasks inside an ephemeral Docker sandbox, and self-correct syntax errors. Achieved 100% isolation for destructive commands and sub-200ms latency by running entirely on-premise without cloud APIs.",
    url: "https://pcapraxis.netlify.app/",
    skills: ["Python", "React", "Flask", "Docker", "Ollama", "LLM"],
    featured: true,
  }
];
