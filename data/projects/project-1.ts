import type { Project } from "./type";

export const project1: Project = {
  id: 1,
  slug: "shoppy-website",
  stack: "Full Stack",
  date: { year: 2025, month: "November" },
  worked_for: "5 days",
  hosted_on: "Vercel",
  name: "Shoppy Website",
  description:
    "Shoppy is a modern e-commerce platform where users can order a variety of digital and physical products, filter them by price and status, and track their orders.",
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
      name: "Auth.js",
      icon: "",
      description: "desc",
    },

    {
      name: "date-fns",
      icon: "",
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
      name: "react-range",
      icon: "",
      description: "desc",
    },
  ],
  features: ["Responsive Design", "Login with Google", "Order Tracking"],
  github: "https://github.com/crstelli/shoppy-website",
  live_view: "https://shoppy-online-store.vercel.app/",
  images: [
    "/shoppy-website/preview.png",
    "/shoppy-website/image-1.png",
    "/shoppy-website/image-2.png",
    "/shoppy-website/image-3.png",
    "/shoppy-website/image-4.png",
    "/shoppy-website/image-5.png",
  ],
};
