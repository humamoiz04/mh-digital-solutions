import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Website Speed & Security Fix | $75 Service",
  description:
    "Slow website? Got hacked? We'll speed it up and secure it for just $75. Includes caching, image optimization, SSL, and malware protection.",
  openGraph: {
    title: "Website Speed & Security Fix | $75 Service",
    description: "Professional website speed and security optimization for $75.",
  },
}

export default function WebsiteSpeedSecurityPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="section-with-blobs px-4 py-16 md:py-24">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="heading-gradient mb-4 text-5xl font-bold">Speed Up Your Website</h1>
          <p className="mb-8 text-xl text-gray-700">Professional speed & security optimization for just $75</p>
          <div className="glass-card p-8 mb-8">
            <p className="text-4xl font-bold text-gray-900 mb-2">$75</p>
            <p className="text-gray-600">One-time speed & security audit + fixes included</p>
          </div>
          <button className="cta-gradient text-lg px-8 py-4">Get Your Site Speed Tested Now</button>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-6 text-3xl font-bold text-gray-900">Why Site Speed Matters</h2>
          <p className="mb-8 text-gray-700">
            Google confirmed it: a one-second delay in page load time results in 7% fewer conversions. Slow websites
            rank worse and lose customers.
          </p>

          <h3 className="mb-6 text-2xl font-bold text-gray-900">Is Your Website Slow?</h3>
          <div className="space-y-4 mb-12">
            <p className="flex items-start gap-3">
              <span className="text-2xl">❌</span>
              <span>Takes more than 3 seconds to load?</span>
            </p>
            <p className="flex items-start gap-3">
              <span className="text-2xl">❌</span>
              <span>Images are huge and unoptimized?</span>
            </p>
            <p className="flex items-start gap-3">
              <span className="text-2xl">❌</span>
              <span>Getting "Largest Contentful Paint" warnings from Google?</span>
            </p>
            <p className="flex items-start gap-3">
              <span className="text-2xl">❌</span>
              <span>Your mobile score is below 50?</span>
            </p>
            <p className="flex items-start gap-3">
              <span className="text-2xl">❌</span>
              <span>Not sure if you have an SSL certificate?</span>
            </p>
          </div>

          <h3 className="mb-6 text-2xl font-bold text-gray-900">What We Fix For $75:</h3>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="glass-card p-6">
              <h4 className="text-xl font-bold mb-4 flex gap-2">
                <span>⚡</span> Speed Optimization
              </h4>
              <ul className="space-y-2">
                <li>✓ Browser caching setup</li>
                <li>✓ Image compression</li>
                <li>✓ Code minification</li>
                <li>✓ CDN configuration</li>
                <li>✓ Database optimization</li>
              </ul>
            </div>

            <div className="glass-card p-6">
              <h4 className="text-xl font-bold mb-4 flex gap-2">
                <span>🔒</span> Security Setup
              </h4>
              <ul className="space-y-2">
                <li>✓ SSL certificate installed</li>
                <li>✓ Firewall configuration</li>
                <li>✓ Malware scanning</li>
                <li>✓ Security hardening</li>
                <li>✓ Backup automation</li>
              </ul>
            </div>
          </div>

          <h3 className="mb-6 text-2xl font-bold text-gray-900">What Happens During Your $75 Service:</h3>
          <div className="space-y-6 mb-12">
            <div className="glass-card p-6">
              <div className="flex gap-4">
                <span className="text-2xl">1</span>
                <div>
                  <h4 className="text-lg font-bold mb-2">Speed Test</h4>
                  <p className="text-gray-700">
                    We test your site on Google PageSpeed, GTmetrix, and mobile devices. You get a detailed report.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6">
              <div className="flex gap-4">
                <span className="text-2xl">2</span>
                <div>
                  <h4 className="text-lg font-bold mb-2">Identify Issues</h4>
                  <p className="text-gray-700">
                    We find the top 5 reasons your site is slow (usually large images, missing caching, bad plugins)
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6">
              <div className="flex gap-4">
                <span className="text-2xl">3</span>
                <div>
                  <h4 className="text-lg font-bold mb-2">Fix Everything</h4>
                  <p className="text-gray-700">
                    We compress images, enable caching, remove slow plugins, optimize code, and set up an SSL
                    certificate
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6">
              <div className="flex gap-4">
                <span className="text-2xl">4</span>
                <div>
                  <h4 className="text-lg font-bold mb-2">Final Test</h4>
                  <p className="text-gray-700">
                    We retest your site and show you the before/after results. Typical improvement: 40-70% faster.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <h3 className="mb-6 text-2xl font-bold text-gray-900">Bonus: Free 1-Year Monitoring</h3>
          <p className="mb-8 text-gray-700">
            After we optimize your site, we'll monitor it monthly to make sure it stays fast and secure. If performance
            drops, we'll alert you. This usually costs $50-100/month.
          </p>

          <blockquote className="border-l-4 border-purple-400 bg-purple-50 p-6 my-8">
            <p className="mb-4 text-gray-700">
              "Our site was loading in 6 seconds. After the $75 speed fix, it's down to 1.2 seconds. Google Search
              Console showed our rankings improving within two weeks."
            </p>
            <footer className="font-semibold">- Linda T., E-commerce Store</footer>
          </blockquote>

          <h3 className="mb-6 text-2xl font-bold text-gray-900">Speed Impact on Your Business:</h3>
          <div className="space-y-4 mb-12 text-gray-700">
            <p>
              <strong>40% faster site = 7% more conversions</strong> (Google research)
            </p>
            <p>
              <strong>Each second matters:</strong> Users abandon sites that take &gt;3 seconds to load
            </p>
            <p>
              <strong>Mobile matters most:</strong> 50% of users visit on mobile. Slow mobile = lost sales.
            </p>
            <p>
              <strong>Google rewards speed:</strong> Faster sites rank higher and get more clicks
            </p>
          </div>

          <h3 className="mb-6 text-2xl font-bold text-gray-900">FAQ:</h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-bold mb-2">How fast will my site be after?</h4>
              <p className="text-gray-700">
                Most sites improve from 4-6 seconds down to 1-2 seconds. We'll test and show you exact before/after
                metrics.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-2">Will this break my site?</h4>
              <p className="text-gray-700">
                No. We back everything up first and test thoroughly. If any optimization breaks something, we revert it
                immediately.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-2">What if my site is on Wix or Squarespace?</h4>
              <p className="text-gray-700">
                Wix and Squarespace have limited optimization options. We can still help with image compression and CSS
                minification ($30 instead of $75).
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-purple-100 to-pink-100 px-4 py-16">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-4xl font-bold text-gray-900">Is Your Site Fast Enough?</h2>
          <p className="mb-8 text-xl text-gray-700">Get a free speed test. If it's slow, we'll fix it for just $75.</p>
          <button className="cta-gradient text-lg px-8 py-4">Get Your Free Speed Test</button>
        </div>
      </section>
    </main>
  )
}
