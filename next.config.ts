import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  
  // Disable memory-heavy checks during Render builds
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  
  // Prevent Next.js from spawning too many RAM-heavy workers
  experimental: {
    workerThreads: false,
    cpus: 1,
  },
  
  webpack: (config, context) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    };
    return config;
  },
};

export default nextConfig;
