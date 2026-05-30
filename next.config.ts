import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [],
    unoptimized: true,
  },
  output:"export",
  trailingSlash:true
};

export default nextConfig;
