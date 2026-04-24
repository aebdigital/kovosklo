/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      { source: '/o-nas', destination: '/o-nas' },
      { source: '/kontakt', destination: '/kontakt' },
      { source: '/referencie', destination: '/referencie' },
    ];
  },
};

module.exports = nextConfig;
