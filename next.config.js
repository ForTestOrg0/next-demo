/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: false,
    runtime: 'edge'
  },
  async rewrites() {
    return [
    ]
  }
}

module.exports = nextConfig
