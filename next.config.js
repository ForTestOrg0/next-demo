/** @type {import('next').NextConfig} */
// const { i18n } = require('./next-i18next.config')
const nextConfig = {
  // i18n,
  experimental: {
    appDir: false,
    runtime: 'experimental-edge',
  },
  async rewrites() {
    return [
    ]
  }
}

module.exports = nextConfig
