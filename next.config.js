/** @type {import('next').NextConfig} */
const nextConfig = {
  // Dočasně vypnout SSR pro debugging
  experimental: {
    ssr: false
  }
}

module.exports = nextConfig