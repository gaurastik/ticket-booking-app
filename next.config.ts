import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "kindhearted-cassowary-899.convex.cloud",
      },
    ],
  },
};

export default nextConfig;
