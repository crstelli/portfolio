export interface Project {
  slug: string;
  stack: "Full Stack" | "Frontend" | "Backend";
  date: number;
  name: string;
  description: string;
  technologies: string[];
  features: string[];
  github: string;
  images: string[];

  overview: string;
  technical_decisions: string;
  challenges: string;

  key_features: {
    title: string;
    content: string;
  }[];

  future_improvements: {
    title: string;
    content: string;
  }[];

  lessons: {
    title: string;
    content: string;
  }[];
}
