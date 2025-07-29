/** @type {import('next').NextConfig} */
const nextConfig = {
  // ... existing config
  async rewrites() {
    return [
      // ... existing rewrites
      {
        source: '/cs/komunita',
        destination: '/cs/community',
      },
      // Community page is already at /en/community for English
    ];
  },
};

module.exports = nextConfig;