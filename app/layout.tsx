import "@/app/globals.css";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/navbar/Navbar";
import type { Metadata } from "next";

import { Inter } from "next/font/google";

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
    <html lang="en" className={`${inter.variable}`}>
      <body className="min-h-screen w-full justify-items-center flex flex-col bg-black text-gray-300">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
