/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // PWA configuration
  images: {
    domains: ['openweathermap.org'],
  },
  // Enable static exports for better PWA support
  output: 'standalone',
};

module.exports = nextConfig