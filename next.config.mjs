/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['placeholder.svg'],
    unoptimized: true,
    formats: ['image/webp', 'image/avif'],
  },
  trailingSlash: false,
  output: 'standalone',
  
  // Redirects for SEO and user experience
  async redirects() {
    return [
      // Old URL patterns to new structure
      {
        source: '/service/:slug',
        destination: '/services/:slug',
        permanent: true,
      },
      {
        source: '/about-us',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/contact-us',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/our-team',
        destination: '/team',
        permanent: true,
      },
      {
        source: '/portfolio',
        destination: '/case-studies',
        permanent: true,
      },
      {
        source: '/work',
        destination: '/case-studies',
        permanent: true,
      },
      {
        source: '/projects',
        destination: '/case-studies',
        permanent: true,
      },
      // Service-specific redirects
      {
        source: '/seo',
        destination: '/services/seo',
        permanent: true,
      },
      {
        source: '/web-design',
        destination: '/services/web-development',
        permanent: true,
      },
      {
        source: '/website-development',
        destination: '/services/web-development',
        permanent: true,
      },
      {
        source: '/ppc',
        destination: '/services/ppc-advertising',
        permanent: true,
      },
      {
        source: '/google-ads',
        destination: '/services/ppc-advertising',
        permanent: true,
      },
      {
        source: '/social-media',
        destination: '/services/social-media-marketing',
        permanent: true,
      },
      {
        source: '/automation',
        destination: '/services/ai-automation',
        permanent: true,
      },
      {
        source: '/consulting',
        destination: '/services/business-consulting',
        permanent: true,
      },
      // Blog redirects
      {
        source: '/news/:slug',
        destination: '/blog/:slug',
        permanent: true,
      },
      {
        source: '/articles/:slug',
        destination: '/blog/:slug',
        permanent: true,
      },
      // Common misspellings and variations
      {
        source: '/digitial-marketing',
        destination: '/services/digital-marketing',
        permanent: true,
      },
      {
        source: '/seo-services',
        destination: '/services/seo',
        permanent: true,
      },
      {
        source: '/web-development-services',
        destination: '/services/web-development',
        permanent: true,
      },
    ]
  },

  // Headers for security and performance
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
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
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
        ],
      },
      {
        source: '/_next/static/(.*)',
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
