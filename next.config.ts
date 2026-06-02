import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Assets are served from /public; no remote optimization needed.
    unoptimized: true,
  },
};

export default nextConfig;
