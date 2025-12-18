/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  output: 'standalone',
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
    optimizeCss: false,
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  async redirects() {
    return [
      // HTTP to HTTPS redirect for all traffic
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
      {
        source: '/mt',
        destination: '/',
        permanent: true,
      },
      
      // These are from broken local service pages that don't match new structure
      {
        source: '/local/jackson/seo',
        destination: '/locations/wyoming/jackson-hole',
        permanent: true,
      },
      {
        source: '/local/jackson/web-design',
        destination: '/locations/wyoming/jackson-hole',
        permanent: true,
      },
      {
        source: '/local/jackson/digital-marketing',
        destination: '/locations/wyoming/jackson-hole',
        permanent: true,
      },
      {
        source: '/local/jackson/near-me',
        destination: '/locations/wyoming/jackson-hole',
        permanent: true,
      },
      {
        source: '/local/cheyenne/seo',
        destination: '/locations/wyoming/cheyenne',
        permanent: true,
      },
      {
        source: '/local/cheyenne/web-design',
        destination: '/locations/wyoming/cheyenne',
        permanent: true,
      },
      {
        source: '/local/cheyenne/digital-marketing',
        destination: '/locations/wyoming/cheyenne',
        permanent: true,
      },
      {
        source: '/local/cheyenne/near-me',
        destination: '/locations/wyoming/cheyenne',
        permanent: true,
      },
      {
        source: '/local/casper/seo',
        destination: '/locations/wyoming/casper',
        permanent: true,
      },
      {
        source: '/local/casper/web-design',
        destination: '/locations/wyoming/casper',
        permanent: true,
      },
      {
        source: '/local/casper/digital-marketing',
        destination: '/locations/wyoming/casper',
        permanent: true,
      },
      {
        source: '/local/casper/near-me',
        destination: '/locations/wyoming/casper',
        permanent: true,
      },
      {
        source: '/local/laramie/web-design',
        destination: '/locations/wyoming/laramie',
        permanent: true,
      },
      {
        source: '/local/laramie/seo',
        destination: '/locations/wyoming/laramie',
        permanent: true,
      },
      {
        source: '/local/laramie/near-me',
        destination: '/locations/wyoming/laramie',
        permanent: true,
      },
      {
        source: '/local/gillette/:service*',
        destination: '/locations/wyoming',
        permanent: true,
      },
      {
        source: '/local/sheridan/:service*',
        destination: '/locations/wyoming',
        permanent: true,
      },
      {
        source: '/local/rock-springs/:service*',
        destination: '/locations/wyoming',
        permanent: true,
      },
      // Montana cities
      {
        source: '/local/bozeman/:service*',
        destination: '/locations',
        permanent: true,
      },
      {
        source: '/local/missoula/:service*',
        destination: '/locations',
        permanent: true,
      },
      {
        source: '/local/helena/:service*',
        destination: '/locations',
        permanent: true,
      },
      {
        source: '/local/billings/:service*',
        destination: '/locations',
        permanent: true,
      },
      {
        source: '/local/butte/:service*',
        destination: '/locations',
        permanent: true,
      },
      {
        source: '/local/great-falls/:service*',
        destination: '/locations',
        permanent: true,
      },
      // West Virginia cities
      {
        source: '/local/morgantown/seo',
        destination: '/locations/west-virginia/morgantown',
        permanent: true,
      },
      {
        source: '/local/morgantown/web-design',
        destination: '/locations/west-virginia/morgantown',
        permanent: true,
      },
      {
        source: '/local/morgantown/digital-marketing',
        destination: '/locations/west-virginia/morgantown',
        permanent: true,
      },
      {
        source: '/local/morgantown/near-me',
        destination: '/locations/west-virginia/morgantown',
        permanent: true,
      },
      {
        source: '/local/charleston/:service*',
        destination: '/locations/west-virginia/charleston',
        permanent: true,
      },
      {
        source: '/local/huntington/:service*',
        destination: '/locations/west-virginia/huntington',
        permanent: true,
      },
      {
        source: '/local/wheeling/:service*',
        destination: '/locations/west-virginia',
        permanent: true,
      },
      {
        source: '/local/fairmont/:service*',
        destination: '/locations/west-virginia',
        permanent: true,
      },
      {
        source: '/local/martinsburg/:service*',
        destination: '/locations/west-virginia',
        permanent: true,
      },
      // Catch-all for any remaining /local/ routes
      {
        source: '/local/:path*',
        destination: '/locations',
        permanent: true,
      },

      // Duplicate blog post redirects to canonical versions
      {
        source: '/blog/ppc-optimization',
        destination: '/blog/ppc-optimization-guide',
        permanent: true,
      },
      {
        source: '/blog/:clutch_profile_url',
        destination: '/blog',
        permanent: true,
      },
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
        source: '/services/strategic-business-consulting',
        destination: '/services/business-consulting',
        permanent: true,
      },
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
      {
        source: '/pricing.html',
        destination: '/pricing',
        permanent: true,
      },
      {
        source: '/case-studies.html',
        destination: '/case-studies',
        permanent: true,
      },
      {
        source: '/services/ai-automation.html',
        destination: '/services/ai-automation',
        permanent: true,
      },
      {
        source: '/services/mobile-app.html',
        destination: '/services/mobile-app-development',
        permanent: true,
      },
      {
        source: '/services/seo.html',
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
