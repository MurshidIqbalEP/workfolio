/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
    unoptimized: true, 
  },

  reactStrictMode: true,
  trailingSlash: false,
  poweredByHeader: false,
  output: 'standalone',
};

module.exports = nextConfig;