/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  experimental: {
    scrollRestoration: true,
  },
};

module.exports = nextConfig;
