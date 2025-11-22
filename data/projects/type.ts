export interface Project {
  id: number;

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

  github: string;
  live_view: string;
  images: string[];

  features: [string, string, string];
}
