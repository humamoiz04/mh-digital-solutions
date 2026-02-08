# MH Digital Solution - Cloudflare Pages Deployment Guide

## Overview
This guide walks through deploying the MH Digital Solution website from Netlify to Cloudflare Pages with proper redirect handling, caching, and security headers.

## Prerequisites
1. Cloudflare account with a registered domain (mhdigitalsolution.com)
2. Git repository connected to Cloudflare
3. Node.js 20+ installed locally
4. Wrangler CLI installed: `npm install -g @cloudflare/wrangler`

## Step 1: Prepare Cloudflare Account

### Create a Cloudflare Pages Project
1. Log in to Cloudflare Dashboard
2. Go to **Workers & Pages** → **Pages** → **Create application**
3. Select **Connect to Git**
4. Authorize GitHub and select your repository
5. Choose the branch to deploy (usually `main`)

### Configure Build Settings
1. **Framework preset**: None (we're using static export)
2. **Build command**: `npm run build`
3. **Build output directory**: `out` (Next.js static export outputs here)
4. **Root directory**: `/`

## Step 2: Environment Variables

Set these in Cloudflare Pages project settings (**Settings** → **Environment variables**):

\`\`\`
NODE_VERSION=20
NPM_VERSION=10
NEXT_PUBLIC_SITE_URL=https://www.mhdigitalsolution.com
\`\`\`

## Step 3: Redirects and Headers

### Redirects (`_redirects`)
- Already configured in `/public/_redirects`
- Cloudflare automatically processes this file
- Contains 70+ redirect rules for legacy URLs and location pages
- Handles "near-me" routes, service redirects, blog redirects, etc.

### Headers (`_headers`)
- Already configured in `/public/_headers`
- Applies cache-control, security headers, and content-type headers
- Includes HSTS, CSP, and XSS protection headers
- Long-term caching (1 year) for static assets

### Manual Redirect Configuration (Alternative)
If redirects don't work from `_redirects` file:
1. Go to project **Settings** → **Post-processing** → **Redirect rules**
2. Add custom redirects in Cloudflare dashboard
3. Or use Cloudflare Workers for more complex logic

## Step 4: DNS Configuration

Update your domain nameservers to point to Cloudflare:

1. In Cloudflare Dashboard, go to **DNS** → **Nameservers**
2. Get Cloudflare nameservers (typically):
   \`\`\`
   ns1.cloudflare.com
   ns2.cloudflare.com
   \`\`\`
3. Update domain registrar to use these nameservers
4. Wait for DNS propagation (5-48 hours)

### DNS Records
1. Go to **DNS** → **Records**
2. Add CNAME record:
   - **Type**: CNAME
   - **Name**: www
   - **Target**: `<project-name>.pages.dev`
   - **Proxy status**: Proxied (orange cloud)
3. Add root domain redirect (optional):
   - **Type**: CNAME
   - **Name**: @ (or your domain)
   - **Target**: `<project-name>.pages.dev`
   - **Proxy status**: Proxied

## Step 5: SSL/TLS Certificate

1. Go to **SSL/TLS** → **Overview**
2. Select **Flexible** or **Full** SSL/TLS encryption
3. Certificate is auto-provisioned by Cloudflare (no action needed)

## Step 6: Deploy to Cloudflare Pages

### Option A: Git Integration (Automatic)
1. Push code to GitHub on the configured branch
2. Cloudflare automatically triggers build
3. Monitor build progress in **Deployments** tab

### Option B: Manual Deployment
\`\`\`bash
# Install Wrangler if not already installed
npm install -g @cloudflare/wrangler

# Build the project
npm run build

# Deploy to Cloudflare Pages
wrangler pages deploy out --project-name=mhdigitalsolution
\`\`\`

### Monitor Deployment
1. Go to **Deployments** tab
2. Check build logs and status
3. Preview the deployment at `<hash>.<project>.pages.dev`

## Step 7: Verify Deployment

### Test Redirects
\`\`\`bash
# Test service redirects
curl -L https://www.mhdigitalsolution.com/services/consultation

# Test legacy URL redirect
curl -L https://www.mhdigitalsolution.com/home

# Test "near-me" redirects
curl -L https://www.mhdigitalsolution.com/local/jackson/near-me
\`\`\`

### Test Headers
\`\`\`bash
# Check cache headers
curl -i https://www.mhdigitalsolution.com/images/logo.webp | grep Cache-Control

# Check security headers
curl -i https://www.mhdigitalsolution.com | grep "X-Content-Type-Options"
\`\`\`

### Check SSL
Visit https://www.mhdigitalsolution.com and verify:
- SSL certificate is valid
- No mixed content warnings
- HTTPS redirects work properly

## Step 8: Configure Advanced Features (Optional)

### Enable Caching
1. **Caching** → **Cache Rules**
2. Create rules to cache static assets longer:
   \`\`\`
   Path: /images/* → Cache for 1 year
   Path: /_next/static/* → Cache for 1 year
   Path: /fonts/* → Cache for 1 year
   \`\`\`

### Enable Rate Limiting (DDoS Protection)
1. **Security** → **Rate Limiting**
2. Add rules to protect API endpoints and forms
3. Set thresholds (e.g., 100 requests per minute)

### Enable WAF (Web Application Firewall)
1. **Security** → **WAF**
2. Enable managed rulesets
3. Configure rule sensitivity

## Step 9: Update DNS Records (Migration from Netlify)

### Update CNAME Records
Delete Netlify CNAME records:
- Remove: `alias.ash.n.netlify.app`

Add Cloudflare CNAME records:
- Add: `<project-name>.pages.dev`

### Verify DNS Propagation
\`\`\`bash
# Check DNS resolution
nslookup www.mhdigitalsolution.com

# Should resolve to Cloudflare nameservers
# Should have CNAME pointing to pages.dev
\`\`\`

## Step 10: Test Full Site

1. Visit https://www.mhdigitalsolution.com
2. Verify homepage loads correctly
3. Test navigation and internal links
4. Verify all redirects work:
   - `/services/consultation` → `/services/business-consulting`
   - `/home` → `/`
   - `/local/jackson/near-me` → `/local/jackson/digital-marketing`
5. Verify blog and case studies load
6. Test forms and contact information

## Step 11: Delete Netlify Site (After Verification)

Once everything works on Cloudflare:
1. Log in to Netlify
2. Go to **Site settings** → **General** → **Delete site**
3. Confirm deletion

## Troubleshooting

### Redirects Not Working
1. Check that `/public/_redirects` file exists
2. Verify format matches Cloudflare syntax
3. Try adding redirects via Cloudflare dashboard instead
4. Check deployment logs for errors

### Build Failures
1. Review build logs in Cloudflare Pages dashboard
2. Check that Node.js version is 20+
3. Run `npm run build` locally to test
4. Ensure all dependencies are in package.json

### DNS Not Resolving
1. Verify Cloudflare nameservers are set at domain registrar
2. Wait for DNS propagation (up to 48 hours)
3. Use `nslookup` or `dig` to check DNS records
4. Check DNS records in Cloudflare dashboard

### SSL Certificate Issues
1. Ensure DNS is configured correctly
2. Wait for certificate issuance (usually instant)
3. Try setting SSL to "Flexible" if issues persist
4. Clear browser cache and test in incognito mode

### Cache Not Working
1. Check `_headers` file syntax is correct
2. Verify cache headers are being sent (use curl -i)
3. Check Cloudflare cache rules in dashboard
4. Clear cache manually: **Caching** → **Purge Everything**

## Performance Optimization

### Enable Brotli Compression
1. **Speed** → **Optimization**
2. Enable "Brotli compression"

### Enable HTTP/2 and HTTP/3
1. **Network** → **HTTP/2 Grading**
2. Ensure HTTP/2 is enabled (should be automatic)
3. Enable HTTP/3 (QUIC) for faster connections

### Image Optimization
1. **Speed** → **Optimization** → **Image Optimization**
2. Enable "Polish" for automatic image optimization
3. Select "Lossless" or "Lossy" based on preference

## Monitoring and Analytics

### Enable Analytics
1. Cloudflare automatically tracks:
   - Page views
   - Unique visitors
   - Requests by country
   - Cache hit ratio
2. View in **Analytics** → **Overview**

### Set Up Error Monitoring
1. Install Sentry (if using)
2. Configure in your Next.js app
3. Monitor errors and performance

## Maintenance

### Regular Tasks
- Monitor build status after each deployment
- Check analytics for traffic patterns
- Review security logs for threats
- Update dependencies regularly

### Backup and Version Control
- All code is version controlled in Git
- Cloudflare automatically maintains deployment history
- Rollback to previous deployment if needed

## Support and Resources

- Cloudflare Documentation: https://developers.cloudflare.com/pages/
- Next.js Static Export: https://nextjs.org/docs/advanced-features/static-html-export
- Cloudflare Pages Redirects: https://developers.cloudflare.com/pages/platform/redirects/
- Community Support: Cloudflare Discord/Forums

---

**Last Updated**: January 2026
**Project**: MH Digital Solution
**Environment**: Cloudflare Pages (Static Export)
