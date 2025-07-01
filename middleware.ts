import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Security headers
  const response = NextResponse.next()

  // Add security headers
  response.headers.set("X-Frame-Options", "DENY")
  response.headers.set("X-Content-Type-Options", "nosniff")
  response.headers.set("Referrer-Policy", "origin-when-cross-origin")
  response.headers.set("X-XSS-Protection", "1; mode=block")

  // Handle trailing slashes - redirect to non-trailing slash version
  if (pathname !== "/" && pathname.endsWith("/")) {
    const url = request.nextUrl.clone()
    url.pathname = pathname.slice(0, -1)
    return NextResponse.redirect(url, 301)
  }

  // Handle common broken links and redirects
  const redirectMap: { [key: string]: string } = {
    "/home": "/",
    "/index": "/",
    "/main": "/",
    "/services/": "/services",
    "/about/": "/about",
    "/contact/": "/contact",
    "/blog/": "/blog",
    "/case-studies/": "/case-studies",
    "/team/": "/team",
    "/pricing/": "/pricing",
    "/faq/": "/faq",
    // Legacy URLs
    "/digital-marketing": "/services/digital-marketing",
    "/seo-services": "/services/seo",
    "/web-design": "/services/web-development",
    "/ppc-management": "/services/ppc-advertising",
    "/social-media": "/services/social-media-marketing",
    "/automation-services": "/services/ai-automation",
    "/business-consulting-services": "/services/business-consulting",
  }

  if (redirectMap[pathname]) {
    const url = request.nextUrl.clone()
    url.pathname = redirectMap[pathname]
    return NextResponse.redirect(url, 301)
  }

  // Handle case-insensitive URLs
  if (pathname !== pathname.toLowerCase()) {
    const url = request.nextUrl.clone()
    url.pathname = pathname.toLowerCase()
    return NextResponse.redirect(url, 301)
  }

  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - robots.txt
     * - sitemap.xml
     */
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)",
  ],
}
