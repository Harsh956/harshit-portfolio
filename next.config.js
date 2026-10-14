/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com', 'play-lh.googleusercontent.com'],
  },
  experimental: {
    // Ensures clean external package handling
  },
};

module.exports = nextConfig;
