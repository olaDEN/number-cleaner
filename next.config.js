/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/favicon.ico',
          destination: '/public/favicon.ico',
        },
      ];
    },
  };
  
  module.exports = nextConfig;
