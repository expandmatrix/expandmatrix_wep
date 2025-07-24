/** @type {import('next').NextConfig} */
const nextConfig = {
  // Experimental features
  experimental: {
    typedRoutes: true,
    optimizeCss: true,
    serverComponentsExternalPackages: ['sharp'],
  },
  
  // Enhanced headers for security and performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
      {
        source: '/api/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store, max-age=0',
          },
        ],
      },
    ];
  },

  // Performance optimizations
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year cache
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Compression
  compress: true,
  
  // PoweredBy header removal
  poweredByHeader: false,
  
  // Trailing slash handling
  trailingSlash: false,
  
  // Enhanced webpack configuration
  webpack: (config, { dev, isServer }) => {
    // Optimize bundle size
    if (!dev && !isServer) {
      config.optimization.splitChunks.cacheGroups.commons = {
        name: 'commons',
        chunks: 'all',
        minChunks: 2,
        enforce: true,
      };
    }
    
    return config;
  },
  
  // Environment variables validation
  env: {
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL || 'https://expandmatrix.com',
  },
};

export default nextConfig;
