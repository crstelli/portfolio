import type { Project } from "./type";

export const project4: Project = {
  id: 4,
  slug: "food-truck",
  stack: "Full Stack",
  date: { year: 2025, month: "November" },
  worked_for: "7 days",
  hosted_on: "Vercel",
  name: "Food Truck",
  description:
    "A modern, responsive web platform designed for a fictional food truck brand, highlighting vibrant branding, intuitive navigation, and a smooth user experience.",
  technologies: [
    {
      name: "Next.js",
      icon: "/techstack-logos/nextjs.svg",
      description: "desc",
    },

    {
      name: "React",
      icon: "/techstack-logos/react.svg",
      description: "desc",
    },

    {
      name: "Supabase",
      icon: "/techstack-logos/supabase.svg",
      description: "desc",
    },

    {
      name: "TailwindCSS",
      icon: "/techstack-logos/tailwindcss.svg",
      description: "desc",
    },

    {
      name: "Typescript",
      icon: "/techstack-logos/typescript.svg",
      description: "desc",
    },

    {
      name: "Vercel",
      icon: "/techstack-logos/vercel.svg",
      description: "desc",
    },

    {
      name: "Shadcn/ui",
      icon: "/techstack-logos/shadcn.svg",
      description: "desc",
    },

    {
      name: "lucide-react",
      icon: "",
      description: "desc",
    },

    {
      name: "react-hot-toasts",
      icon: "",
      description: "desc",
    },

    {
      name: "react-hook-form",
      icon: "",
      description: "desc",
    },

    {
      name: "Leaflet",
      icon: "",
      description: "desc",
    },

    {
      name: "React Leaflet",
      icon: "",
      description: "desc",
    },

    {
      name: "Three.js",
      icon: "",
      description: "desc",
    },
  ],
  features: ["Responsive Design", "Login with Google", "Order Tracking"],
  github: "https://github.com/crstelli/food-truck",
  live_view: "https://crstelli-foodtruck.vercel.app/",
  images: [
    "/food-truck/preview.png",
    "/food-truck/image-1.png",
    "/food-truck/image-2.png",
    "/food-truck/image-3.png",
    "/food-truck/image-4.png",
    "/food-truck/image-5.png",
  ],
};
