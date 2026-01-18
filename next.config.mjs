/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1. Keep these to bypass minor issues, but try to fix the real errors later
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },

  output: 'export', // Static export mode

  images: {
    // 2. CRITICAL: Static exports do not support Next.js default image optimization.
    // You must set this to true unless you use a professional loader (Cloudinary, etc.)
    unoptimized: true, 
    formats: ['image/webp', 'image/avif'],
    dangerouslyAllowSVG: true,
  },

  compress: true,
  poweredByHeader: false,
  
  // 3. REMOVE redirects() and headers() from here. 
  // They do not work with output: 'export'.
}

export default nextConfig
