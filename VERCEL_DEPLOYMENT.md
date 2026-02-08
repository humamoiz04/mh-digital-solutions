# Vercel Deployment Guide for MH Digital Solution

## Overview
The site has been migrated from Cloudflare Pages static export to Vercel with server-side rendering (SSR) for better performance, SEO, and dynamic capabilities.

## Key Changes Made

### 1. Next.js Configuration (next.config.mjs)
- Removed `output: 'export'` to enable server-side rendering
- Changed `images.unoptimized` from `true` to `false` for Vercel's image optimization
- Added comprehensive `redirects()` function for all URL redirects
- Added `headers()` function for security headers and caching

### 2. Build Configuration
- Updated package.json scripts to use `vercel deploy --prod`
- Created vercel.json with build settings, regions, and GitHub integration
- Removed wrangler.toml (Cloudflare-specific configuration)

## Deployment Steps

### Prerequisites
1. Have a Vercel account at https://vercel.com
2. Install Vercel CLI: `npm i -g vercel`
3. Authenticate: `vercel login`

### Option 1: GitHub Integration (Recommended)
1. Push code to GitHub repository
2. Go to https://vercel.com/new
3. Import your GitHub repository
4. Select "Next.js" as framework
5. Configure environment variables (if needed)
6. Click "Deploy"

### Option 2: CLI Deployment
\`\`\`bash
vercel deploy --prod
\`\`\`

### Option 3: Git Auto-Deploy
1. Connect GitHub repo to Vercel dashboard
2. Every push to main branch automatically deploys

## Environment Variables
The site uses the following environment variable (optional):
- `NEXT_PUBLIC_SITE_URL`: Site URL for canonical tags and metadata (defaults to deployment URL)

To add in Vercel Dashboard:
1. Go to Settings → Environment Variables
2. Add `NEXT_PUBLIC_SITE_URL = https://www.mhdigitalsolution.com`

## Domain Configuration

### Update DNS
1. Go to Vercel Dashboard → Domains
2. Add your domain: `www.mhdigitalsolution.com`
3. Add DNS CNAME record pointing to `cname.vercel-dns.com`
4. For non-www domain (`mhdigitalsolution.com`), add A record to Vercel's IP

### DNS Records
\`\`\`
www.mhdigitalsolution.com  CNAME  cname.vercel-dns.com
mhdigitalsolution.com      A      76.76.19.5 (or latest Vercel IP)
\`\`\`

The site automatically redirects non-www to www, and HTTP to HTTPS.

## Features Enabled on Vercel

### 1. Image Optimization
- Automatic WebP/AVIF format conversion
- Responsive image sizing
- CDN caching with 1-year TTL

### 2. Edge Caching
- Static assets cached globally
- Dynamic pages cached at edge
- Automatic cache invalidation on deploy

### 3. Security Headers
- X-Content-Type-Options: nosniff
- X-Frame-Options: SAMEORIGIN
- Strict-Transport-Security with preload
- Content-Security-Policy configured

### 4. Redirects
- All redirects from next.config.mjs automatically handled
- Public/_redirects file no longer needed
- HTTP→HTTPS redirect enforced
- Non-www→www redirect enforced

## Performance

### Improvements with Vercel
- Server-side rendering provides better SEO
- Edge caching reduces response times
- Image optimization reduces bandwidth
- Automatic code splitting
- Zero-config deployment

### Monitoring
1. Vercel Dashboard shows:
   - Page load times
   - Edge caching hit rates
   - Deployment history
   - Log streaming

2. Access at: https://vercel.com/dashboard

## Troubleshooting

### 404 Error on Root Domain
1. Verify domain is added to Vercel
2. Check DNS records are pointing to Vercel
3. Wait 24-48 hours for DNS propagation
4. Check redirects in next.config.mjs

### Images Not Loading
1. Verify images are in `/public` directory
2. Check image paths are absolute (/images/...)
3. Ensure images support WebP format
4. Check Vercel image optimization settings

### Build Failures
1. Check build logs in Vercel Dashboard
2. Verify Node.js version compatibility (18+ recommended)
3. Ensure all dependencies installed: `npm install`
4. Check for TypeScript errors: `npm run lint`

### Deployment Taking Too Long
- Vercel deployments typically take 1-2 minutes
- Check if builds are queued on Dashboard
- Verify GitHub connection is working
- Check branch deployment rules

## Comparison: Vercel vs Cloudflare Pages

| Feature | Vercel | Cloudflare |
|---------|--------|-----------|
| SSR Support | Yes | No (static only) |
| Image Optimization | Native | Requires workers |
| Edge Caching | Yes | Yes |
| Free Tier | Generous | Limited |
| Deployment Time | 1-2 min | 1-2 min |
| SEO Optimization | Better (SSR) | Good (static) |
| Cost | Free starter | Free starter |
| Scalability | Unlimited | Limited |

## Support

For Vercel support: https://vercel.com/help
For Next.js docs: https://nextjs.org/docs
For questions: Contact your hosting provider or Vercel support team

## Verification Checklist

- [ ] Code pushed to GitHub
- [ ] Project imported to Vercel
- [ ] Build completed successfully
- [ ] Domain DNS configured
- [ ] SSL certificate active (automatic)
- [ ] Site accessible at www.mhdigitalsolution.com
- [ ] Redirects working (test /home → /)
- [ ] Images loading correctly
- [ ] API routes functional
- [ ] Environment variables set (if needed)
