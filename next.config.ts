import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  
  // Prevent Next.js from spawning too many RAM-heavy workers on Render
  experimental: {
    workerThreads: false,
    cpus: 1,
  },
};

export default nextConfig;
