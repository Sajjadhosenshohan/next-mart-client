import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    turbo: {
      rules: { "*.mdx": ["mdx-loader"] }, // Default loaders (এটা দিলে Turbo Pack ঠিকমতো কাজ করবে)
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**'
      },
    ],
  },
};

export default nextConfig;
