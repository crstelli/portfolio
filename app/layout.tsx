import "@/app/globals.css";

import { ClickSound } from "@/components/ClickSound";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/navbar/Navbar";
import { ScrollButton } from "@/components/ScrollButton";
import type { Metadata } from "next";

import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";

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
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="w-full bg-black text-gray-300">
        <div className="min-h-screen w-full justify-items-center flex flex-col">
          <Toaster
            toastOptions={{
              className: "toast",
            }}
          />
          <ClickSound />
          <Navbar />
          {children}
          <ScrollButton />
        </div>
        <Footer />
      </body>
    </html>
  );
}
