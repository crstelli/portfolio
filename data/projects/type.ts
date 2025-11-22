export interface Project {
  slug: string;
  stack: "Full Stack" | "Frontend" | "Backend";
  date: {
    year: number;
    month: string;
  };
  worked_for: string;
  hosted_on: "Vercel" | "Netlify" | "Custom";
  name: string;
  description: string;
  technologies: {
    icon: string;
    name: string;
    description: string;
  }[];
  features: string[];
  github: string;
  live_view: string;
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

  lessons: string;
}
