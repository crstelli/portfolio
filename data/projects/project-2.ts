import type { Project } from "./type";

export const project2: Project = {
  id: 2,
  slug: "shoppy-dashboard",
  stack: "Full Stack",
  date: { year: 2025, month: "October" },
  worked_for: "8 days",
  hosted_on: "Netlify",
  name: "Shoppy Dashboard",
  description:
    "Shoppy Dashboard is a modern admin dashboard for Shoppy Website owners to manage products, orders, and sales metrics efficiently.",
  technologies: [
    {
      name: "React",
      icon: "/techstack-logos/react.svg",
      description: "desc",
    },
    {
      name: "Vite",
      icon: "/techstack-logos/vite.svg",
      description: "desc",
    },
    {
      name: "TailwindCSS",
      icon: "/techstack-logos/tailwindcss.svg",
      description: "desc",
    },
    {
      name: "Supabase",
      icon: "/techstack-logos/supabase.svg",
      description: "desc",
    },
    {
      name: "Tanstack Query",
      icon: "",
      description: "desc",
    },
    {
      name: "React Router",
      icon: "",
      description: "desc",
    },
    {
      name: "Netlify",
      icon: "/techstack-logos/netlify.svg",
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
      name: "react-hot-toast",
      icon: "",
      description: "desc",
    },
    {
      name: "recharts",
      icon: "",
      description: "desc",
    },
  ],
  features: ["Responsive Design", "Login with Google", "Order Tracking"],
  github: "https://github.com/crstelli/shoppy-dashboard",
  live_view: "https://db-shoppy.netlify.app/",
  images: [
    "/shoppy-dashboard/preview.png",
    "/shoppy-dashboard/image-1.png",
    "/shoppy-dashboard/image-2.png",
    "/shoppy-dashboard/image-3.png",
    "/shoppy-dashboard/image-4.png",
    "/shoppy-dashboard/image-5.png",
  ],
};
