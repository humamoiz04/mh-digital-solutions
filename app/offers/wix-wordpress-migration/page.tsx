import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Wix to WordPress Migration | Just $99 + Free Month Hosting",
  description:
    "Frustrated with your Wix or Squarespace site? We'll migrate it to WordPress for just $99 plus a free month of hosting. Includes free 30-day SEO jumpstart.",
  openGraph: {
    title: "Wix to WordPress Migration | Just $99 + Free Month Hosting",
    description: "Professional migration service from Wix/Squarespace to WordPress with free SEO setup.",
  },
}

export default function WixMigrationPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="section-with-blobs px-4 py-16 md:py-24">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="heading-gradient mb-4 text-5xl font-bold">Break Free from Wix</h1>
          <p className="mb-8 text-2xl text-gray-700">
            Escape your overpriced DIY website. Migrate to WordPress for just <strong>$99</strong>
          </p>
          <div className="glass-card p-8 mb-8">
            <p className="text-4xl font-bold text-gray-900 mb-2">$99 Migration</p>
            <p className="text-gray-600">+ Free 30-Day SEO Setup + Free 1 Month Hosting</p>
          </div>
          <button className="cta-gradient text-lg px-8 py-4">Start Your Migration Today</button>
        </div>
      </section>

      {/* Problem Section */}
      <section className="px-4 py-16 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-6 text-3xl font-bold text-gray-900">Are You Stuck with a Wix Website?</h2>
          <div className="space-y-4 mb-8">
            <p className="flex items-start gap-3">
              <span className="text-2xl">❌</span>
              <span>Paying $15-50/month for a site you don't really control?</span>
            </p>
            <p className="flex items-start gap-3">
              <span className="text-2xl">❌</span>
              <span>Stuck with Wix's poor SEO tools and limited customization?</span>
            </p>
            <p className="flex items-start gap-3">
              <span className="text-2xl">❌</span>
              <span>Can't integrate the tools you need (CRM, email, booking)?</span>
            </p>
            <p className="flex items-start gap-3">
              <span className="text-2xl">❌</span>
              <span>Tired of slow load times hurting your rankings?</span>
            </p>
            <p className="flex items-start gap-3">
              <span className="text-2xl">❌</span>
              <span>Want to own your site data instead of renting it?</span>
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-6 text-3xl font-bold text-gray-900">The Solution: WordPress</h2>
          <p className="mb-8 text-gray-700">
            WordPress powers 43% of the web for a reason. It's more flexible, faster, and cheaper than Wix. And we'll
            handle the migration for you.
          </p>

          <h3 className="mb-6 text-2xl font-bold text-gray-900">What's Included in Your $99 Migration:</h3>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="glass-card p-6">
              <h4 className="text-lg font-bold mb-3">Migration Service</h4>
              <ul className="space-y-2">
                <li>✓ Export all your content</li>
                <li>✓ Set up WordPress</li>
                <li>✓ Migrate pages and posts</li>
                <li>✓ Preserve SEO structure</li>
                <li>✓ Fix broken links</li>
              </ul>
            </div>

            <div className="glass-card p-6">
              <h4 className="text-lg font-bold mb-3">Free Bonuses</h4>
              <ul className="space-y-2">
                <li>✓ 30-day SEO jumpstart</li>
                <li>✓ 1 month free hosting</li>
                <li>✓ SSL certificate installed</li>
                <li>✓ Performance optimization</li>
                <li>✓ Training on new site</li>
              </ul>
            </div>
          </div>

          <h3 className="mb-6 text-2xl font-bold text-gray-900">Why WordPress is Better than Wix:</h3>
          <div className="space-y-4 mb-12">
            <div className="flex gap-4">
              <span className="text-2xl">⚡</span>
              <div>
                <strong>Speed</strong> - WordPress sites load 40% faster than Wix, helping with SEO rankings
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-2xl">🔧</span>
              <div>
                <strong>Flexibility</strong> - Integrate with any tool: CRM, email, booking, social media, analytics
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-2xl">📊</span>
              <div>
                <strong>SEO Control</strong> - Full control over metadata, keywords, sitemaps, and structure
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-2xl">💰</span>
              <div>
                <strong>Lower Costs</strong> - WordPress hosting: $5-20/month (vs Wix: $15-50/month)
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-2xl">🏠</span>
              <div>
                <strong>You Own It</strong> - Your site is yours. Switch hosts anytime. Take all your data.
              </div>
            </div>
          </div>

          <h3 className="mb-6 text-2xl font-bold text-gray-900">The 4-Step Migration Process:</h3>
          <div className="space-y-6">
            <div className="glass-card p-6">
              <div className="flex items-start gap-4">
                <span className="text-3xl font-bold text-orange-500">1</span>
                <div>
                  <h4 className="text-lg font-bold mb-2">Schedule & Plan</h4>
                  <p className="text-gray-700">
                    30-minute call to discuss your site, timeline, and any custom features you need
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6">
              <div className="flex items-start gap-4">
                <span className="text-3xl font-bold text-orange-500">2</span>
                <div>
                  <h4 className="text-lg font-bold mb-2">Backup & Setup</h4>
                  <p className="text-gray-700">
                    We backup your Wix site and set up a fresh WordPress installation with your chosen theme
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6">
              <div className="flex items-start gap-4">
                <span className="text-3xl font-bold text-orange-500">3</span>
                <div>
                  <h4 className="text-lg font-bold mb-2">Migrate & Optimize</h4>
                  <p className="text-gray-700">
                    Transfer all content, set up redirects, optimize images, and perform SEO checks
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6">
              <div className="flex items-start gap-4">
                <span className="text-3xl font-bold text-orange-500">4</span>
                <div>
                  <h4 className="text-lg font-bold mb-2">Launch & Train</h4>
                  <p className="text-gray-700">
                    Test everything, go live, and we'll train you on managing your new WordPress site
                  </p>
                </div>
              </div>
            </div>
          </div>

          <h3 className="mb-6 mt-12 text-2xl font-bold text-gray-900">Real Customer Results:</h3>
          <blockquote className="border-l-4 border-orange-400 bg-orange-50 p-6 my-8">
            <p className="mb-4 text-gray-700">
              "We switched from Wix to WordPress with v0's help. Our site is now 3x faster, my monthly costs dropped
              from $40 to $10, and we finally got an AI chatbot working. Best $99 we've spent."
            </p>
            <footer className="text-gray-600 font-semibold">- Sarah M., eCommerce Business</footer>
          </blockquote>

          <h3 className="mb-6 text-2xl font-bold text-gray-900">Pricing Breakdown:</h3>
          <div className="overflow-x-auto mb-12">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-orange-100">
                  <th className="border p-3 text-left">Item</th>
                  <th className="border p-3 text-left">Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-3">Wix to WordPress Migration</td>
                  <td className="border p-3 font-bold">$99</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-3">Free Month WordPress Hosting</td>
                  <td className="border p-3 font-bold text-green-600">-$15 (Free)</td>
                </tr>
                <tr>
                  <td className="border p-3">30-Day SEO Jumpstart</td>
                  <td className="border p-3 font-bold text-green-600">-$200 (Free)</td>
                </tr>
                <tr className="bg-orange-50">
                  <td className="border p-3 font-bold">Your Total Investment</td>
                  <td className="border p-3 font-bold text-lg">$99</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="mb-6 text-2xl font-bold text-gray-900">Then You'll Pay:</h3>
          <div className="glass-card p-6 mb-12">
            <p className="mb-4 text-gray-700">After the first month (free), your ongoing costs are:</p>
            <ul className="space-y-2 text-gray-700">
              <li>
                ✓ <strong>WordPress Hosting:</strong> $10-20/month (vs Wix: $15-50)
              </li>
              <li>
                ✓ <strong>Domain:</strong> ~$10/year
              </li>
              <li>
                ✓ <strong>Optional Support:</strong> $50-100/month (includes updates, backups, security)
              </li>
            </ul>
            <p className="mt-4 font-bold text-green-600">Total Monthly Savings: $20-40/month vs Wix!</p>
          </div>

          <div className="bg-gradient-to-r from-orange-100 to-pink-100 p-8 rounded-lg mb-12">
            <h3 className="text-2xl font-bold mb-4">What If I'm Not Happy?</h3>
            <p className="mb-4 text-gray-700">
              We offer a 30-day money-back guarantee. If you're not completely satisfied with your WordPress site, we'll
              refund the $99 migration fee, no questions asked.
            </p>
          </div>

          <h3 className="mb-6 text-2xl font-bold text-gray-900">FAQ:</h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-bold mb-2">Will I lose my SEO rankings?</h4>
              <p className="text-gray-700">
                No. We set up 301 redirects from your old Wix URLs to your new WordPress pages, which preserves your
                search rankings.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-2">How long does migration take?</h4>
              <p className="text-gray-700">
                Usually 1-2 weeks from start to finish, depending on your site's complexity.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-2">Can you migrate e-commerce data?</h4>
              <p className="text-gray-700">
                Yes, we can migrate WooCommerce products, but you'll need to set up a new payment processor (Stripe,
                PayPal, etc.).
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-2">Do I have to cancel my Wix subscription?</h4>
              <p className="text-gray-700">
                Yes, once your WordPress site is live, you can cancel Wix and stop paying their monthly fees.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-500 to-pink-500 px-4 py-16">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-4xl font-bold text-white">Ready to Escape Wix?</h2>
          <p className="mb-8 text-xl text-white">For just $99, get a faster, cheaper, more flexible website.</p>
          <button className="bg-white text-orange-500 font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition">
            Start Your Migration Now
          </button>
        </div>
      </section>
    </main>
  )
}
