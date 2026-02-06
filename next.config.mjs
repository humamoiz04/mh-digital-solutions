/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Use server-side rendering on Vercel for better performance and SEO
  // output: 'export' removed - now using SSR with Vercel
  images: {
    unoptimized: false,
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    qualities: [75, 90],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.mhdigitalsolution.com',
      },
      {
        protocol: 'https',
        hostname: 'www.mhdigitalsolution.com',
      },
      {
        protocol: 'https',
        hostname: 'mhdigitalsolution.com',
      },
    ],
  },
  compress: true,
  poweredByHeader: false,
  experimental: {
    optimizeCss: false,
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Redirects and headers handled by next.config for Vercel
  async redirects() {
    return [
      // HTTP to HTTPS redirects
      {
        source: '/:path*',
        has: [
          {
            type: 'header',
            key: 'x-forwarded-proto',
            value: 'http',
          },
        ],
        destination: 'https://:host/:path*',
        permanent: true,
      },
      // Non-www to www
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'mhdigitalsolution.com',
          },
        ],
        destination: 'https://www.mhdigitalsolution.com/:path*',
        permanent: true,
      },
      // Service redirects
      { source: '/services/digital', destination: '/services/digital-marketing', permanent: true },
      { source: '/services/legal', destination: '/services/business-consulting', permanent: true },
      { source: '/services/consultation', destination: '/services/business-consulting', permanent: true },
      // Legacy redirects
      { source: '/web-design', destination: '/services/web-design', permanent: true },
      { source: '/web-development', destination: '/services/web-development', permanent: true },
      { source: '/digital-marketing', destination: '/services/digital-marketing', permanent: true },
      { source: '/seo', destination: '/services/seo-services', permanent: true },
    ]
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'geolocation=(), microphone=(), camera=()',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' https://analytics.ahrefs.com; style-src 'self' 'unsafe-inline'; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https: blob:; connect-src 'self' https:",
          },
        ],
      },
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/fonts/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
}

export default nextConfig
