/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
      domains: ['pabloacebedo.infura-ipfs.io'],
  },
};

module.exports = nextConfig;