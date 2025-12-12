import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  transpilePackages: ["next-mdx-remote"],
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  images: {
    qualities: [50, 75],
  },
};

const withMdx = createMDX();

export default withMdx(nextConfig);
