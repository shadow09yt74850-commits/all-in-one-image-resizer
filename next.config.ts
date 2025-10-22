import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "standalone", // ✅ best for Vercel build
};

export default nextConfig;
