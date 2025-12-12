export interface ProjectType {
  id: number;
  slug: string;
  stack: string;

  date: {
    year: number;
    month: string;
  };

  worked_for: string;
  hosted_on: string;
  name: string;
  description: string;

  technologies: technology[];
  features: string[];

  github: string;
  live_view: string;
}

type technology = {
  label: string;
  image: string;
  content: "";
};
