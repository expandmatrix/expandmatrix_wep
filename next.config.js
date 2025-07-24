/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async redirects() {
    return [
      // Czech redirects (existing URLs)
      {
        source: '/sluzby',
        destination: '/cs/sluzby',
        permanent: true,
      },
      {
        source: '/ai-skoleni',
        destination: '/cs/sluzby/ai-skoleni',
        permanent: true,
      },
      {
        source: '/ai-balicky',
        destination: '/cs/sluzby/ai-balicky',
        permanent: true,
      },
      {
        source: '/ai-custom-systemy',
        destination: '/cs/sluzby/ai-custom-systemy',
        permanent: true,
      },
      // English redirects (for future SEO)
      {
        source: '/services',
        destination: '/en/services',
        permanent: true,
      },
      {
        source: '/ai-training',
        destination: '/en/services/ai-training',
        permanent: true,
      },
      {
        source: '/ai-packages',
        destination: '/en/services/ai-packages',
        permanent: true,
      },
      {
        source: '/custom-ai-systems',
        destination: '/en/services/custom-ai-systems',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
