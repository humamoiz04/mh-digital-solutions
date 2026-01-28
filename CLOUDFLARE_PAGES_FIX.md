# Cloudflare Pages 404 Fix Guide

## Issue
The site deployed to Cloudflare but returns 404 on https://www.mhdigitalsolution.com/

## Root Cause
The `wrangler.toml` was configured as a Cloudflare Worker instead of Cloudflare Pages. Cloudflare Pages uses a different deployment model and configuration format.

## Solution

### Step 1: Verify Build Output
The Next.js static export outputs to the `out/` directory. Verify it's being generated:
```bash
npm run build
ls -la out/
```

You should see:
- `out/index.html` (home page)
- `out/404.html` (error page)
- `out/_next/` (static assets)
- Various page directories

### Step 2: Update Cloudflare Pages Settings

1. **Go to Cloudflare Dashboard**
   - Navigate to Pages > Your Project (mhdigitalsolution)

2. **Update Build Settings**
   - Settings > Build and Deployments
   - Build command: `npm run build`
   - Build output directory: `out`
   - Node.js version: 20.x

3. **Verify Environment Variables**
   - Go to Settings > Environment Variables
   - Add `NEXT_PUBLIC_SITE_URL` = `https://www.mhdigitalsolution.com` (Production)

4. **Check Custom Domain**
   - Under Settings > Custom Domain
   - Verify `www.mhdigitalsolution.com` and `mhdigitalsolution.com` are configured
   - Check DNS CNAME points to `<project-name>.pages.dev`

### Step 3: Redeploy on Cloudflare

**Option A: Via GitHub (Recommended)**
1. Push changes to your GitHub repo
2. Cloudflare Pages auto-deploys on push
3. Check deployment status in Pages dashboard

**Option B: Via Wrangler CLI**
```bash
# Install Wrangler if not already installed
npm install -D wrangler

# Deploy to Cloudflare Pages
wrangler pages deploy out
```

### Step 4: DNS Configuration

1. **Verify DNS Records in Cloudflare**
   - Go to Domain > DNS
   - Ensure CNAME record for `www` points to `<project>.pages.dev`
   - Ensure CNAME record for `@` (root domain) also points to `<project>.pages.dev`

2. **Example DNS Setup**
   ```
   Type  | Name | Content
   ------|------|-------------------------------------
   CNAME | www  | mhdigitalsolution.pages.dev
   CNAME | @    | mhdigitalsolution.pages.dev (or use ALIAS if available)
   ```

### Step 5: Verify Deployment

1. **Check Build Status**
   - In Cloudflare Pages dashboard, verify the latest deployment shows "Success"
   - If failed, click to view logs

2. **Test the Site**
   - Visit https://www.mhdigitalsolution.com
   - Check that home page loads correctly
   - Test a few internal pages (e.g., /services/web-design)
   - Verify redirects work (e.g., /services/consultation redirects to /services/business-consulting)

3. **Check Staging URL**
   - If issues persist, test on the staging URL: https://<deployment-hash>.mhdigitalsolution.pages.dev
   - This bypasses DNS and custom domain issues

### Troubleshooting

**Still Getting 404?**
- Verify `out/index.html` exists after build
- Check that build command runs without errors
- Ensure `next.config.mjs` has `output: 'export'` set

**Redirects Not Working?**
- Verify `/public/_redirects` file exists
- Check Cloudflare Pages automatically processes it
- If needed, add rules via Cloudflare Dashboard > Pages > Settings > Post-processing

**Pages Show 404 But Staging URL Works?**
- DNS issue - wait 15-30 minutes for DNS propagation
- Verify DNS records point to correct Pages URL
- Clear browser cache (Ctrl+Shift+Del or Cmd+Shift+Del)

**Build Fails?**
- Check build logs in Cloudflare dashboard
- Verify Node.js version is 20.x
- Ensure all dependencies are installed: `npm install`

## Updated Files
- ✅ `wrangler.toml` - Fixed for Cloudflare Pages (not Workers)
- ✅ `public/_headers` - Cloudflare automatically processes this
- ✅ `public/_redirects` - Cloudflare automatically processes this
- ✅ `next.config.mjs` - Already configured with `output: 'export'`

## Quick Checklist
- [ ] Rebuild locally: `npm run build`
- [ ] Verify `out/index.html` exists
- [ ] Check Cloudflare Pages build settings (command and directory)
- [ ] Verify environment variables are set
- [ ] Confirm DNS CNAME records
- [ ] Wait 15 minutes for DNS propagation
- [ ] Clear browser cache
- [ ] Test on staging URL first: `https://<deployment>.pages.dev`
- [ ] Verify latest deployment in dashboard shows "Success"
- [ ] Visit https://www.mhdigitalsolution.com

## Next Steps

If still experiencing issues after these steps:

1. Check Cloudflare Pages build logs for specific errors
2. Verify `/public` directory exists and contains `_headers` and `_redirects`
3. Test locally with: `npm run build && npx http-server out`
4. Contact Cloudflare support with your project name and deployment logs
