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
      "Final-year project: A real-time AI surveillance system integrating YOLOv11, BoTSORT, Pose Estimation, and Small Language Models to detect weapons, fights, and abandoned luggage with high accuracy on live feeds.",
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
      "A secure, on-premise Natural Language to Shell (NL2SH) agent. Translates English to Bash using a local LLM (Phi-3) and executes commands inside an ephemeral Docker sandbox with strict security guardrails.",
    url: "https://github.com/sm-abbas19/pca_praxis",
    skills: ["Python", "React", "Flask", "Docker", "Ollama", "LLM"],
    featured: true,
  },
  {
    id: 3,
    year: "2025",
    title: "CollisionVision",
    description:
      "A real-time computer vision system using YOLOv8 and ByteTrack to detect objects, track their movement, and estimate collision probability. Features motion trail visualization and configurable parameters.",
    url: "https://github.com/sm-abbas19/CollisionVision",
    skills: ["Python", "YOLOv8", "ByteTrack", "Computer Vision", "Kalman Filter"],
    featured: true,
  },
  {
    id: 4,
    year: "2025",
    title: "Passkey Authentication",
    description:
      "A Flask and Docker-based demo application for secure, passwordless authentication using WebAuthn passkeys. Features CAPTCHA verification, device credential management, and admin dashboard.",
    url: "https://github.com/sm-abbas19/Passkey-Authentication",
    skills: ["Python", "Flask", "Docker", "WebAuthn", "PostgreSQL", "Redis"],
    featured: true,
  },
];
