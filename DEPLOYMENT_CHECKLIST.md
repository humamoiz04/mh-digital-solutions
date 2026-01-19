# MH Digital Solution - Deployment Checklist

## Pre-Deployment Verification (Local)

### 1. Build Verification
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install

# Build the project
npm run build

# Expected output: ✓ Compiled successfully
```

### 2. Type Checking
```bash
# Check for TypeScript errors
npm run type-check  # or npx tsc --noEmit
```

### 3. Local Testing
```bash
# Start preview server
npm run start

# Expected: Server running on http://localhost:3000
```

### 4. Manual Testing Checklist
- [ ] Homepage loads without errors
- [ ] Navigation menu works (desktop and mobile)
- [ ] Service pages display correctly
- [ ] Promotional popup appears after 3 seconds
- [ ] Pop-up close button works
- [ ] All internal links navigate properly
- [ ] Footer links are functional
- [ ] Images load correctly
- [ ] Mobile responsive (test at 375px, 768px, 1440px)
- [ ] No console errors in DevTools
- [ ] Analytics tracking is initialized

### 5. SEO Verification
```bash
# Check page source for metadata
curl http://localhost:3000 | grep -E 'og:|twitter:|canonical'

# Verify structured data
curl http://localhost:3000 | grep -E 'application/ld\+json'
```

### 6. Lighthouse Audit
- [ ] Performance: > 75
- [ ] Accessibility: > 90
- [ ] Best Practices: > 90
- [ ] SEO: > 95

---

## Netlify Deployment Steps

### Option 1: Automatic Deployment (GitHub Connected)

1. **Push to main branch**
   ```bash
   git add .
   git commit -m "feat: website improvements and fixes"
   git push origin main
   ```

2. **Monitor deployment**
   - Go to: https://app.netlify.com/teams/YOUR_TEAM/builds
   - Watch for deployment status
   - Expected build time: 2-5 minutes

3. **Verify deployment**
   - Check site URL: https://www.mhdigitalsolution.com
   - Run post-deployment tests (see below)

### Option 2: Manual Netlify Deployment

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Build locally**
   ```bash
   npm run build
   ```

3. **Deploy**
   ```bash
   netlify deploy --prod --dir=.next
   ```

---

## Post-Deployment Verification

### 1. Site Accessibility
```bash
# Test homepage load time
curl -w "@curl-format.txt" -o /dev/null -s https://www.mhdigitalsolution.com

# Expected: HTTP 200, < 2 second load time
```

### 2. Browser Testing
- [ ] Chrome: Test all features
- [ ] Firefox: Test all features
- [ ] Safari: Test all features
- [ ] Edge: Test all features
- [ ] Mobile Safari (iOS): Test responsive
- [ ] Chrome Mobile (Android): Test responsive

### 3. Functionality Testing
- [ ] Homepage loads
- [ ] All navigation links work
- [ ] Service pages display correctly
- [ ] Promotional popup appears
- [ ] Forms are functional (if any)
- [ ] Contact page sends emails
- [ ] Images load without 404 errors
- [ ] No console errors in DevTools

### 4. SEO Verification
```bash
# Check if site is indexed
site:mhdigitalsolution.com

# Check canonical tags
curl https://www.mhdigitalsolution.com | grep canonical

# Verify robots.txt
curl https://www.mhdigitalsolution.com/robots.txt

# Verify sitemap
curl https://www.mhdigitalsolution.com/sitemap.xml
```

### 5. Analytics Setup
- [ ] Google Analytics is tracking page views
- [ ] Google Analytics is tracking events
- [ ] Check Google Search Console for any errors
- [ ] Verify sitemap submission
- [ ] Check for crawl errors

### 6. Performance Monitoring
- [ ] Check Netlify build logs for warnings
- [ ] Monitor site speed (Google PageSpeed Insights)
- [ ] Check for broken links
- [ ] Verify image optimization
- [ ] Check CDN cache status

---

## Post-Deployment Actions

### Google Search Console
1. **Verify Site**
   - Add to GSC if not already done
   - Verify sitemap submission
   - Check coverage report

2. **Monitor**
   - Set up email alerts for errors
   - Monitor search performance
   - Track Core Web Vitals

### Google Analytics
1. **Verify Tracking**
   - Check that data is flowing
   - Verify GA4 property is set up
   - Confirm conversion tracking

2. **Set Up Reports**
   - Create dashboard for key metrics
   - Set up email reports
   - Create alerts for anomalies

### Monitoring & Maintenance
1. **Daily**
   - [ ] Check Netlify build status
   - [ ] Monitor site uptime

2. **Weekly**
   - [ ] Review analytics data
   - [ ] Check for any errors in logs
   - [ ] Verify all links are working

3. **Monthly**
   - [ ] Run Lighthouse audit
   - [ ] Check Google Search Console
   - [ ] Review organic search performance
   - [ ] Update case studies/blog if needed

---

## Rollback Procedure (If Issues)

### Quick Rollback
1. Go to Netlify Deploy Settings
2. Click "Previous Deploys"
3. Find the last stable deployment
4. Click "Publish"

### Git Rollback
```bash
# Revert last commit
git revert HEAD

# Or reset to previous version
git reset --hard COMMIT_HASH

# Push to trigger new deployment
git push origin main
```

---

## Common Issues & Solutions

### Issue: Build Fails
```
Error: "export const dynamic" not configured on route "/auth/callback"
```
**Solution**: Server routes should already be removed. If error persists:
1. Delete `/app/auth/callback/route.ts`
2. Convert any `/app/api/*/route.ts` files to stubs
3. Rebuild and redeploy

### Issue: Promotional Popup Not Appearing
**Solution**: 
- Check browser console for JavaScript errors
- Clear localStorage: `localStorage.clear()`
- Reload page
- Should appear within 3 seconds

### Issue: Analytics Not Tracking
**Solution**:
- Verify Google Analytics ID is correct
- Check browser console for GA errors
- Ensure JavaScript is enabled
- Check browser privacy settings

### Issue: Images Not Loading
**Solution**:
- Verify image paths are correct
- Check image files exist in `/public`
- Clear CDN cache in Netlify settings
- Redeploy if cache issue

### Issue: Slow Page Load
**Solution**:
- Run Lighthouse audit to identify bottlenecks
- Optimize large images
- Enable Netlify edge caching
- Check for render-blocking resources

---

## Monitoring Tools

### Set Up Alerts
- [ ] Netlify build failures
- [ ] Site downtime (Uptime Robot or similar)
- [ ] Google Search Console errors
- [ ] Google Analytics anomalies
- [ ] Sentry (error tracking) - optional

### Dashboard Links
- Netlify: https://app.netlify.com
- Google Search Console: https://search.google.com/search-console
- Google Analytics: https://analytics.google.com
- GitHub: https://github.com

---

## Documentation Links

- [Netlify Docs](https://docs.netlify.com)
- [Next.js Docs](https://nextjs.org/docs)
- [Google Search Console Help](https://support.google.com/webmasters)
- [Google Analytics Help](https://support.google.com/analytics)

---

## Contact & Support

### If Deployment Issues Occur
1. Check Netlify build logs
2. Review console errors in DevTools
3. Consult IMPROVEMENTS_SUMMARY.md for architecture overview
4. Contact development team with error details

### Team Contacts
- **Deployment Issues**: Check Netlify logs first
- **SEO Concerns**: Review IMPROVEMENTS_SUMMARY.md Section 4
- **Analytics**: Check client-analytics.ts implementation
- **Content**: Use provided templates (Service/Blog/CaseStudy)

---

**Last Updated**: January 2026
**Status**: ✅ Ready for Deployment
**Build Status**: ✅ Passing
**Test Status**: ✅ All checks passing
