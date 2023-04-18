/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: false,
    runtime: 'experimental-edge'
  },
  async rewrites() {
    return [
      {
        source: '/democracy_proposal',
        destination: '/democracy_proposal/waiting',
      },
    ]
  }
}

module.exports = nextConfig
