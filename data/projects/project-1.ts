import type { Project } from "./type";

export const project1: Project = {
  slug: "shoppy-website",
  stack: "Full Stack",
  date: 2025,
  name: "Shoppy Website",
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
  github: "https://github.com/crstelli/shoppy-website",
  features: ["Responsive Design", "Login with Google", "Order Tracking"],
  images: [
    "/shoppy-website/preview.png",
    "/shoppy-website/image-1.png",
    "/shoppy-website/image-2.png",
    "/shoppy-website/image-3.png",
    "/shoppy-website/image-4.png",
    "/shoppy-website/image-5.png",
  ],
};
