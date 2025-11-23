import type { Project } from "./type";

export const project3: Project = {
  id: 3,
  slug: "lumina-tech",
  stack: "Frontend",
  date: { year: 2025, month: "November" },
  worked_for: "3 days",
  hosted_on: "Vercel",
  name: "Lumina Tech",
  description:
    "LuminaTech is a fully static, design-focused website built with Next.js and TailwindCSS, showcasing a fictional tech company through clean layouts, modern UI, and smooth responsive components.",
  technologies: [
    {
      name: "Next.js",
      icon: "/techstack-logos/nextjs.svg",
      description: "",
    },

    {
      name: "React",
      icon: "/techstack-logos/react.svg",
      description: "",
    },

    {
      name: "TailwindCSS",
      icon: "/techstack-logos/tailwindcss.svg",
      description: "",
    },

    {
      name: "Typescript",
      icon: "/techstack-logos/typescript.svg",
      description: "",
    },

    {
      name: "Vercel",
      icon: "/techstack-logos/vercel.svg",
      description: "",
    },

    {
      name: "Embla Carousel",
      icon: "/techstack-logos/emblacarousel.svg",
      description: "",
    },

    {
      name: "Lucide React",
      icon: "/techstack-logos/lucidereact.svg",
      description: "",
    },
  ],
  features: ["Responsive Design", "Modern Carousel", "Google Maps Integration"],
  github: "https://github.com/crstelli/lumina-tech",
  live_view: "https://lumina-tech.netlify.app/",
  images: [
    "/lumina-tech/preview.png",
    "/lumina-tech/image-1.png",
    "/lumina-tech/image-2.png",
    "/lumina-tech/image-3.png",
    "/lumina-tech/image-4.png",
    "/lumina-tech/image-5.png",
  ],
};
