// Client-side analytics tracking
// All analytics are stored locally and sent to analytics services client-side

export interface Analytics {
  pageViews: number
  sessionDuration: number
  userActions: {
    timestamp: number
    action: string
    page: string
  }[]
}

declare global {
  interface Window {
    dataLayer?: unknown[]
  }
}

const STORAGE_KEY = 'mh_analytics'

export function initializeAnalytics() {
  // Initialize Google Analytics (client-side)
  if (typeof window !== 'undefined') {
    // Google Analytics 4
    const script = document.createElement('script')
    script.async = true
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-YOUR_GA_ID'
    document.head.appendChild(script)

    window.dataLayer = window.dataLayer || []
    function gtag(...args: (string | Date | Record<string, unknown>)[]): void {
      if (window.dataLayer) {
        window.dataLayer.push(args)
      }
    }
    gtag('js', new Date())
    gtag('config', 'G-YOUR_GA_ID')
  }
}

export function trackPageView(page: string) {
  if (typeof window !== 'undefined') {
    const analytics = getAnalytics()
    analytics.pageViews++
    const action = {
      timestamp: Date.now(),
      action: 'pageView',
      page,
    }
    analytics.userActions.push(action)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(analytics))

    // Send to Google Analytics
    if (window.gtag) {
      window.gtag('event', 'page_view', {
        page_title: document.title,
        page_path: page,
      })
    }
  }
}

export function trackEvent(eventName: string, eventData?: Record<string, any>) {
  if (typeof window !== 'undefined') {
    const analytics = getAnalytics()
    const action = {
      timestamp: Date.now(),
      action: eventName,
      page: window.location.pathname,
      ...eventData,
    }
    analytics.userActions.push(action)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(analytics))

    // Send to Google Analytics
    if (window.gtag) {
      window.gtag('event', eventName, eventData)
    }
  }
}

export function getAnalytics(): Analytics {
  if (typeof window === 'undefined') {
    return { pageViews: 0, sessionDuration: 0, userActions: [] }
  }

  const stored = localStorage.getItem(STORAGE_KEY)
  return stored
    ? JSON.parse(stored)
    : { pageViews: 0, sessionDuration: 0, userActions: [] }
}

export function resetAnalytics() {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(STORAGE_KEY)
  }
}
