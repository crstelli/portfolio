import "@/app/globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";

import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";

import { ClickSound } from "@/components/ClickSound";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/navbar/Navbar";
import { ScrollTopButton } from "@/components/section/ScrollTopButton";
import { ParticlesBackground } from "@/components/ParticlesBackground";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: {
    template: "%s - crescitelli.dev",
    default: "Welcome - crescitelli.dev",
  },
};

interface Props {
  readonly children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${inter.variable} scroll-smooth`}>
      <body className="w-full bg-black text-gray-300">
        <div className="min-h-screen w-full max-sm:mt-20 justify-items-center flex flex-col">
          <Toaster
            toastOptions={{
              className: "toast",
            }}
          />
          <ClickSound />
          <Navbar />
          {children}
          <ScrollTopButton />
          <ParticlesBackground />
        </div>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
