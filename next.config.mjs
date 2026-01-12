/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  output: 'export',
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
      
      // Wyoming location redirects - direct to final URLs
      {
        source: '/local/jackson/:path*',
        destination: '/locations/wyoming/jackson-hole',
        permanent: true,
      },
      {
        source: '/local/cheyenne/:path*',
        destination: '/locations/wyoming/cheyenne',
        permanent: true,
      },
      {
        source: '/local/casper/:path*',
        destination: '/locations/wyoming/casper',
        permanent: true,
      },
      {
        source: '/local/laramie/:path*',
        destination: '/locations/wyoming/laramie',
        permanent: true,
      },
      {
        source: '/local/gillette/:path*',
        destination: '/locations/wyoming',
        permanent: true,
      },
      {
        source: '/local/sheridan/:path*',
        destination: '/locations/wyoming',
        permanent: true,
      },
      {
        source: '/local/rock-springs/:path*',
        destination: '/locations/wyoming',
        permanent: true,
      },
      
      // West Virginia location redirects
      {
        source: '/local/morgantown/:path*',
        destination: '/locations/west-virginia/morgantown',
        permanent: true,
      },
      {
        source: '/local/charleston/:path*',
        destination: '/locations/west-virginia/charleston',
        permanent: true,
      },
      {
        source: '/local/huntington/:path*',
        destination: '/locations/west-virginia/huntington',
        permanent: true,
      },
      {
        source: '/local/wheeling/:path*',
        destination: '/locations/west-virginia',
        permanent: true,
      },
      
      // Other location redirects - direct to locations index
      {
        source: '/local/:path*',
        destination: '/locations',
        permanent: true,
      },

      // Blog and content redirects
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
      
      // Legacy HTML to final pages
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/:page.html',
        destination: '/:page',
        permanent: true,
      },
      {
        source: '/services/:service.html',
        destination: '/services/:service',
        permanent: true,
      },
      
      // Service slug redirects - direct to canonical URLs
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
        destination: '/services/business-consulting',
        permanent: true,
      },
      {
        source: '/services/web-design-consultation',
        destination: '/services/web-design',
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
      
      // Tag redirects
      {
        source: '/tag/:tag/:path*',
        destination: '/blog',
        permanent: true,
      },
      
      // Other legacy redirects
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
        source: '/local/huntington/digital-marketing',
        destination: '/local/huntington/digital-marketing',
        permanent: false,
      },
      {
        source: '/local/rock-springs/near-me',
        destination: '/local/rock-springs/digital-marketing',
        permanent: true,
      },
      {
        source: '/local/wichita/seo',
        destination: '/local/wichita/seo',
        permanent: false,
      },
      {
        source: '/local/huntington/seo',
        destination: '/local/huntington/seo',
        permanent: false,
      },
      {
        source: '/local/sheridan/web-design',
        destination: '/local/sheridan/web-design',
        permanent: false,
      },
      {
        source: '/local/billings/web-design',
        destination: '/local/billings/web-design',
        permanent: false,
      },
      {
        source: '/local/morgantown/seo',
        destination: '/local/morgantown/seo',
        permanent: false,
      },
      {
        source: '/local/glasgow/digital-marketing',
        destination: '/local/glasgow/digital-marketing',
        permanent: false,
      },
      {
        source: '/local/jackson/digital-marketing',
        destination: '/local/jackson/digital-marketing',
        permanent: false,
      },
      {
        source: '/local/jackson/near-me',
        destination: '/local/jackson/digital-marketing',
        permanent: true,
      },
      {
        source: '/local/fairmont/web-design',
        destination: '/local/fairmont/web-design',
        permanent: false,
      },
      {
        source: '/local/laramie/digital-marketing',
        destination: '/local/laramie/digital-marketing',
        permanent: false,
      },
      {
        source: '/local/morgantown/digital-marketing',
        destination: '/local/morgantown/digital-marketing',
        permanent: false,
      },
      {
        source: '/local/lewistown/digital-marketing',
        destination: '/local/lewistown/digital-marketing',
        permanent: false,
      },
      {
        source: '/local/fairmont/seo',
        destination: '/local/fairmont/seo',
        permanent: false,
      },
      {
        source: '/local/great-falls/web-design',
        destination: '/local/great-falls/web-design',
        permanent: false,
      },
      {
        source: '/local/butte/web-design',
        destination: '/local/butte/web-design',
        permanent: false,
      },
      {
        source: '/local/wichita/near-me',
        destination: '/local/wichita/digital-marketing',
        permanent: true,
      },
      {
        source: '/local/fairmont/near-me',
        destination: '/local/fairmont/digital-marketing',
        permanent: true,
      },
      {
        source: '/local/glendive/digital-marketing',
        destination: '/local/glendive/digital-marketing',
        permanent: false,
      },
      {
        source: '/local/martinsburg/digital-marketing',
        destination: '/local/martinsburg/digital-marketing',
        permanent: false,
      },
      {
        source: '/local/martinsburg/seo',
        destination: '/local/martinsburg/seo',
        permanent: false,
      },
      {
        source: '/local/laramie/near-me',
        destination: '/local/laramie/digital-marketing',
        permanent: true,
      },
      {
        source: '/local/rock-springs/web-design',
        destination: '/local/rock-springs/web-design',
        permanent: false,
      },
      {
        source: '/local/wheeling/near-me',
        destination: '/local/wheeling/digital-marketing',
        permanent: true,
      },
      {
        source: '/local/olathe/near-me',
        destination: '/local/olathe/digital-marketing',
        permanent: true,
      },
      {
        source: '/local/big-timber/web-design',
        destination: '/local/big-timber/web-design',
        permanent: false,
      },
      {
        source: '/local/gillette/near-me',
        destination: '/local/gillette/digital-marketing',
        permanent: true,
      },
      {
        source: '/local/missoula/digital-marketing',
        destination: '/local/missoula/digital-marketing',
        permanent: false,
      },
      {
        source: '/local/missoula/web-design',
        destination: '/local/missoula/web-design',
        permanent: false,
      },
      {
        source: '/local/olathe/digital-marketing',
        destination: '/local/olathe/digital-marketing',
        permanent: false,
      },
      {
        source: '/local/charleston/near-me',
        destination: '/local/charleston/digital-marketing',
        permanent: true,
      },
      {
        source: '/local/charleston/seo',
        destination: '/local/charleston/seo',
        permanent: false,
      },
      {
        source: '/local/cheyenne/near-me',
        destination: '/local/cheyenne/digital-marketing',
        permanent: true,
      },
      {
        source: '/local/huntington/near-me',
        destination: '/local/huntington/digital-marketing',
        permanent: true,
      },
      {
        source: '/local/red-lodge/digital-marketing',
        destination: '/local/red-lodge/digital-marketing',
        permanent: false,
      },
      {
        source: '/local/cheyenne/digital-marketing',
        destination: '/local/cheyenne/digital-marketing',
        permanent: false,
      },
      {
        source: '/local/laramie/web-design',
        destination: '/local/laramie/web-design',
        permanent: false,
      },
      {
        source: '/local/martinsburg/near-me',
        destination: '/local/martinsburg/digital-marketing',
        permanent: true,
      },
      {
        source: '/local/casper/near-me',
        destination: '/local/casper/digital-marketing',
        permanent: true,
      },
      {
        source: '/local/cheyenne/seo',
        destination: '/local/cheyenne/seo',
        permanent: false,
      },
      {
        source: '/local/olathe/web-design',
        destination: '/local/olathe/web-design',
        permanent: false,
      },
      {
        source: '/local/casper/seo',
        destination: '/local/casper/seo',
        permanent: false,
      },
      {
        source: '/local/wheeling/digital-marketing',
        destination: '/local/wheeling/digital-marketing',
        permanent: false,
      },
      {
        source: '/local/casper/web-design',
        destination: '/local/casper/web-design',
        permanent: false,
      },
      {
        source: '/local/lewistown/web-design',
        destination: '/local/lewistown/web-design',
        permanent: false,
      },
      {
        source: '/local/round-up/digital-marketing',
        destination: '/local/round-up/digital-marketing',
        permanent: false,
      },
      {
        source: '/local/cheyenne/web-design',
        destination: '/local/cheyenne/web-design',
        permanent: false,
      },
      {
        source: '/local/havre/digital-marketing',
        destination: '/local/havre/digital-marketing',
        permanent: false,
      },
      {
        source: '/local/martinsburg/web-design',
        destination: '/local/martinsburg/web-design',
        permanent: false,
      },
      {
        source: '/local/wichita/digital-marketing',
        destination: '/local/wichita/digital-marketing',
        permanent: false,
      },
      {
        source: '/local/gillette/web-design',
        destination: '/local/gillette/web-design',
        permanent: false,
      },
      {
        source: '/local/miles-city/web-design',
        destination: '/local/miles-city/web-design',
        permanent: false,
      },
      {
        source: '/local/morgantown/near-me',
        destination: '/local/morgantown/digital-marketing',
        permanent: true,
      },
      {
        source: '/local/round-up/web-design',
        destination: '/local/round-up/web-design',
        permanent: false,
      },
      {
        source: '/local/bozeman/web-design',
        destination: '/local/bozeman/web-design',
        permanent: false,
      },
      {
        source: '/local/butte/digital-marketing',
        destination: '/local/butte/digital-marketing',
        permanent: false,
      },
      {
        source: '/local/bozeman/digital-marketing',
        destination: '/local/bozeman/digital-marketing',
        permanent: false,
      },
      {
        source: '/local/wichita/web-design',
        destination: '/local/wichita/web-design',
        permanent: false,
      },
      {
        source: '/local/big-timber/digital-marketing',
        destination: '/local/big-timber/digital-marketing',
        permanent: false,
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
