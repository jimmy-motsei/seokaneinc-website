import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // All images are served locally from /public — no external domains needed.
    // Next.js Image optimisation is enabled by default for local files.
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },
};

export default nextConfig;
