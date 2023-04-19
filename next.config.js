/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: false,
    runtime: 'experimental-edge'
  },
  async rewrites() {
    return [
    ]
  }
}

module.exports = nextConfig
