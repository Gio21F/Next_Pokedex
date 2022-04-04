/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['raw.githubusercontent.com', 'localhost', 'miro.medium.com'],
  }
}

module.exports = nextConfig
