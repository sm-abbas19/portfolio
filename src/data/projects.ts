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
    id: 3,
    year: "2026",
    title: "ilovelanguages",
    description:
      "Built a full-stack AI-powered German language learning webapp showcasing multiagent orchestration, streaming, and LLM evals. Designed a LangGraph pipeline with three specialist agents (conversation partner, grammar coach, vocabulary coach) routing heuristically — no supervisor LLM call. Integrated Gemini Flash Lite for story generation, annotation, writing-coach grading, and spaced-recall audio lessons. Features JWT auth, SQLite persistence, Langfuse observability, and a Next.js frontend with SSE streaming, TTS, and 3D flashcard animations.",
    url: "https://ilovelanguages.vercel.app",
    skills: ["Python", "FastAPI", "LangGraph", "Gemini API", "Next.js", "Tailwind CSS", "SQLite", "LLM Evals", "Langfuse"],
    featured: true,
  },
  {
    id: 1,
    year: "2025",
    title: "SecureVision",
    description:
      "Built a full-stack computer vision and multi-agent threat detection system (FYP). Engineered a real-time inference backend (YOLOv11 + BOTSORT + TCN) running at 25+ FPS with PostgreSQL event persistence. Trained FightNet, a custom TCN + Squeeze-and-Excitation classifier achieving 0.793 F1 on fight detection. Built a 3-agent LangChain pipeline (AlertTriage, IncidentTimeline, OperatorAction) with structured outputs and severity-gated cooldowns that turns detected events into structured incident reports.",
    url: "https://github.com/Wahajk-code/secure-vision",
    skills: ["Python", "YOLOv11", "BOTSORT", "TCN", "LangChain", "PyTorch", "PostgreSQL", "OpenCV"],
    featured: true,
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
