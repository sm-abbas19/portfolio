export interface Certification {
  id: number;
  title: string;
  issuer: string;
  issuerUrl: string;
  date?: string;
  credentialUrl?: string;
}

export const certifications: Certification[] = [
  {
    id: 1,
    title: "Deep Learning Specialization",
    issuer: "DeepLearning.AI",
    issuerUrl: "https://www.deeplearning.ai/",
  },
  {
    id: 2,
    title: "Machine Learning Specialization",
    issuer: "DeepLearning.AI",
    issuerUrl: "https://www.deeplearning.ai/",
  },
  {
    id: 3,
    title: "Meta Back-End Developer Professional Certificate",
    issuer: "Meta",
    issuerUrl: "https://www.meta.com/",
  },
  {
    id: 4,
    title: "Generative AI with Large Language Models",
    issuer: "DeepLearning.AI",
    issuerUrl: "https://www.deeplearning.ai/",
  },
];
