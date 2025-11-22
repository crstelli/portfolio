import type { Project } from "./type";

export const project2: Project = {
  slug: "shoppy-dashboard",
  stack: "Full Stack",
  date: { year: 2025, month: "October" },
  worked_for: "4 days",
  hosted_on: "Vercel",
  name: "Shoppy Dashboard",
  description:
    "Shoppy is a modern e-commerce platform where users can order a variety of digital and physical products, filter them by price and status, and track their orders.",
  technologies: [
    "Next.js",
    "React",
    "TailwindCSS",
    "Typescript",
    "Supabase",
    "Vercel",
    "Auth.js",
    "date-fns",
    "lucide-react",
    "react-hot-toast",
    "react-range",
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

  overview: "overview",
  technical_decisions: "technical_decisions",
  challenges: "challenges",
  key_features: [{ title: "title1", content: "content" }],
  future_improvements: [{ title: "title2", content: "content" }],
  lessons: "",
};
