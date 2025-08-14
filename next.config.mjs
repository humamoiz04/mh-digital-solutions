/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: false,
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    loader: 'default',
    path: '/_next/image/',
    domains: ['www.mhdigitalsolution.com', 'mhdigitalsolution.com'],
  },
  compress: true,
  poweredByHeader: false,
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  async redirects() {
    return [
      // Legacy HTML redirects
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/services.html',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/contact.html',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/about.html',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/blog.html',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/portfolio.html',
        destination: '/portfolio',
        permanent: true,
      },
      {
        source: '/services/digital',
        destination: '/services/digital-marketing',
        permanent: true,
      },
      {
        source: '/services/legal',
        destination: '/services/business-consulting',
        permanent: true,
      },
      {
        source: '/services/premium',
        destination: '/pricing',
        permanent: true,
      },
      {
        source: '/services/business-plan-development',
        destination: '/services/business-consulting',
        permanent: true,
      },
      {
        source: '/services/strategic-business-consulting',
        destination: '/services/business-consulting',
        permanent: true,
      },
      // Service redirects to fix 404 errors
      {
        source: '/services/consultation',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/services/operational-efficiency',
        destination: '/services/business-consulting',
        permanent: true,
      },
      {
        source: '/services/sales-process-optimization',
        destination: '/services/business-consulting',
        permanent: true,
      },
      {
        source: '/services/business-process-reengineering',
        destination: '/services/business-consulting',
        permanent: true,
      },
      {
        source: '/tag/optimization/:path*',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/tag/analytics/:path*',
        destination: '/blog',
        permanent: true,
      },
      // Tag and developer redirects
      {
        source: '/tag/planning/:path*',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/find-developers/:path*',
        destination: '/services/web-development',
        permanent: true,
      },
      // Blog profile redirects - fix clutch profile URL issue
      {
        source: '/blog/:clutch_profile_url*',
        destination: '/about',
        permanent: true,
      },
      // Canonical URL enforcement (www vs non-www)
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
      // Additional service redirects for common variations
      {
        source: '/web-design',
        destination: '/services/web-design',
        permanent: true,
      },
      {
        source: '/web-development',
        destination: '/services/web-development',
        permanent: true,
      },
      {
        source: '/digital-marketing',
        destination: '/services/digital-marketing',
        permanent: true,
      },
      {
        source: '/seo',
        destination: '/services/seo-services',
        permanent: true,
      },
    ]
  },
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
            value: 'origin-when-cross-origin',
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://fonts.googleapis.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https: blob:; connect-src 'self' https:; frame-src 'self' https:;",
          },
        ],
      },
      {
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'Vary',
            value: 'Accept',
          },
        ],
      },
      {
        source: '/fonts/(.*)',
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
