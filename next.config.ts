import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;

module.exports = {
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
  env: {
    BASE_URL: process.env.BASE_URL,
  },
};

