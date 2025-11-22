import type { Project } from "./type";

export const project1: Project = {
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
    // "Auth.js",
    // "date-fns",
    // "lucide-react",
    // "react-hot-toast",
    // "react-range",
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

  overview:
    "Shoppy is a fully functional fictional e-commerce platform designed to simulate a real online shopping experience. The website offers a wide range of digital and physical products, allowing users to browse items, filter them, manage their shopping cart, authenticate through Google, place orders, and track their delivery status. The project was built with Next.js, TypeScript, TailwindCSS, and Supabase, and deployed on Vercel with a focus on performance, scalability, and clean UI.",
  technical_decisions:
    "I opted for Next.js to leverage server-side rendering, API routes, and an optimized developer experience that suits e-commerce use cases. TypeScript was used throughout the project to ensure type safety and more maintainable code. The database and authentication layer were implemented using Supabase, chosen for its fast setup, real-time capabilities, and seamless integration with row-level security. Auth.js with Google OAuth was selected to provide a frictionless login flow. For styling, I used TailwindCSS to quickly build a consistent, responsive UI with utility-first classes and custom components. Client and server components were structured to keep the product list, filters, and user data access efficient and organized. Image optimization, dynamic routing, and incremental static regeneration were used to keep the website fast and scalable.",
  challenges:
    "One of the main challenges was structuring the product system to support both digital and physical products with different requirements (e.g., stock handling, delivery information). Managing these variations required a flexible schema and conditional UI logic. Implementing a cart system that updates quantities, persists data, and handles price recalculations introduced edge cases, especially when switching between authenticated and unauthenticated states. Another challenge was integrating order tracking, which required creating a status-based workflow that the user can follow in real time. Ensuring accurate syncing between Supabase and the UI required careful handling of async operations and error states. Finally, building a clean filtering system for price range and product status required optimized queries and debouncing to avoid unnecessary load on the database.",
  key_features: [
    {
      title: "Authentication",
      content:
        "Implemented authentication using Auth.js for handling modern auth flows, along with Google OAuth for seamless login. User accounts are managed through Supabase, which stores additional profile information.",
    },
    {
      title: "Full e-commerce flow",
      content:
        "Implemented the complete e-commerce flow: browsing products, filtering, adding items to the cart, updating quantities, and placing orders, with all data kept in sync through Supabase.",
    },
    {
      title: "Responsive design",
      content:
        "The project is fully responsive, allowing both mobile and desktop users to navigate the platform smoothly and complete purchases.",
    },
    {
      title: "Order Tracking",
      content:
        "Order tracking with real-time status updates is one of the key features of the app. Users can follow all their orders and view the live shipping status.",
    },
    {
      title: "Deployment on Vercel",
      content:
        "The app is deployed on Vercel with optimized performance and fast loading times, thanks to its global CDN architecture.",
    },
  ],
  future_improvements: [
    {
      title: "Real payment integration",
      content:
        "Integrate a real payment system using Stripe to enable secure and seamless checkout.",
    },
    {
      title: "Delivery address auto-suggestion",
      content:
        "Implement an API-based address auto-suggestion feature to streamline the shipping address input during checkout.",
    },
    {
      title: "Wishlist",
      content:
        "Add a wishlist functionality that allows users to save products for future reference.",
    },
    {
      title: "Tracking notifications",
      content:
        "Enable push or email notifications to alert users whenever their order status is updated.",
    },
  ],
  lessons:
    "This project significantly improved my ability to build responsive and consistent interfaces, strengthening both my design skills and my understanding of layout patterns. Working with Next.js helped me refine my approach to structuring full-stack applications, while implementing authentication deepened my knowledge of secure user flows. I also gained solid experience with Supabase as a backend solution, learning how to manage data efficiently and integrate it smoothly into the frontend. Building reusable components proved essential for speeding up development and keeping the codebase maintainable. Handling dates with date-fns and integrating less common libraries such as react-range taught me how to rely on documentation when external resources are limited. This process reinforced how important it is to read, understand, and navigate official docs, which has noticeably improved my overall workflow and problem-solving approach.",
};
