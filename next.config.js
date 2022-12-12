/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
      domains: ['branson.infura-ipfs.io'],
  },
};

module.exports = nextConfig;