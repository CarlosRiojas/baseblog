import type { NextConfig } from "next";
  

const nextConfig: NextConfig = {
  output: 'standalone',


 typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
}
export default nextConfig;
