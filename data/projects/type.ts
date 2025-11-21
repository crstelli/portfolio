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
}
