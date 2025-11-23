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
      description: "",
    },

    {
      name: "React",
      icon: "/techstack-logos/react.svg",
      description: "",
    },

    {
      name: "Supabase",
      icon: "/techstack-logos/supabase.svg",
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
      name: "Auth.js",
      icon: "/techstack-logos/authjs.png",
      description: "",
    },

    {
      name: "date-fns",
      icon: "/techstack-logos/datefns.png",
      description: "",
    },

    {
      name: "lucide-react",
      icon: "/techstack-logos/lucidereact.svg",
      description: "",
    },

    {
      name: "react-hot-toasts",
      icon: "/techstack-logos/reacthottoast.png",
      description: "",
    },

    {
      name: "react-range",
      icon: "",
      description: "",
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
