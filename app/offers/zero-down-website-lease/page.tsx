import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "$0 Down Website Lease | Pay Only $49/Month",
  description:
    "Get your professional website with $0 upfront. Pay just $49/month including design, hosting, and maintenance. No hidden fees. Cancel anytime.",
  openGraph: {
    title: "$0 Down Website Lease | Pay Only $49/Month",
    description:
      "Get your professional website with $0 upfront. Pay just $49/month including design, hosting, and maintenance.",
  },
}

export default function ZeroDownWebsitePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="section-with-blobs px-4 py-16 md:py-24">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="heading-gradient mb-4 text-5xl font-bold">$0 Down Website Lease</h1>
          <p className="mb-8 text-2xl text-gray-700">Professional Website Design · Hosting · Maintenance</p>
          <div className="glass-card p-8 mb-8">
            <p className="text-5xl font-bold text-gray-900 mb-2">$49/Month</p>
            <p className="text-gray-600">No upfront cost. No hidden fees. Cancel anytime.</p>
          </div>
          <button className="cta-gradient text-lg px-8 py-4">Start Your Free Trial</button>
        </div>
      </section>

      {/* Content Section */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-6 text-3xl font-bold text-gray-900">What's Included:</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="glass-card p-6">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Website Design</h3>
              <ul className="space-y-2">
                <li>✓ Mobile-responsive design</li>
                <li>✓ 5-10 custom pages</li>
                <li>✓ Professional branding</li>
                <li>✓ Contact forms</li>
                <li>✓ Blog-ready</li>
              </ul>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Hosting & Security</h3>
              <ul className="space-y-2">
                <li>✓ Fast hosting included</li>
                <li>✓ SSL certificate (HTTPS)</li>
                <li>✓ Daily backups</li>
                <li>✓ 99.9% uptime guarantee</li>
                <li>✓ Free domain for 1 year</li>
              </ul>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Maintenance</h3>
              <ul className="space-y-2">
                <li>✓ Software updates</li>
                <li>✓ Security monitoring</li>
                <li>✓ 1 hour support/month</li>
                <li>✓ Malware protection</li>
                <li>✓ Performance optimization</li>
              </ul>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Bonus Gifts</h3>
              <ul className="space-y-2">
                <li>✓ Free logo design (value: $300)</li>
                <li>✓ Free branding kit</li>
                <li>✓ Free email setup (3 addresses)</li>
                <li>✓ 1 free SEO audit</li>
                <li>✓ Business card template</li>
              </ul>
            </div>
          </div>

          <h2 className="mb-6 text-3xl font-bold text-gray-900">Why This Model Works Better:</h2>
          <div className="space-y-4 mb-12">
            <div className="flex gap-4">
              <span className="text-2xl">💰</span>
              <div>
                <strong>Zero Upfront Cost</strong> - Perfect for startups and seasonal businesses with tight cash flow
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-2xl">🔄</span>
              <div>
                <strong>All-in-One Solution</strong> - One bill covers design, hosting, and support. No surprise costs.
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-2xl">🛡️</span>
              <div>
                <strong>We Handle Everything</strong> - You focus on your business. We handle the tech.
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-2xl">📈</span>
              <div>
                <strong>Scale Up Anytime</strong> - Need more pages or features? Add them for a small additional fee.
              </div>
            </div>
          </div>

          <h2 className="mb-6 text-3xl font-bold text-gray-900">Perfect For:</h2>
          <ul className="space-y-3 mb-12 text-gray-700">
            <li>✓ New businesses just starting out</li>
            <li>✓ Seasonal businesses (farms, tourism, retail)</li>
            <li>✓ Service providers (plumbers, electricians, contractors)</li>
            <li>✓ Small retail shops and local services</li>
            <li>✓ Nonprofits and community organizations</li>
            <li>✓ Freelancers and consultants</li>
          </ul>

          <h2 className="mb-6 text-3xl font-bold text-gray-900">Comparison:</h2>
          <div className="overflow-x-auto mb-12">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-3 text-left">Feature</th>
                  <th className="border p-3 text-left">Our Lease</th>
                  <th className="border p-3 text-left">DIY (Wix)</th>
                  <th className="border p-3 text-left">Agency (Upfront)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-3">Upfront Cost</td>
                  <td className="border p-3 font-bold text-green-600">$0</td>
                  <td className="border p-3">$0-200</td>
                  <td className="border p-3 text-red-600">$2,500-10,000</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-3">Monthly Cost</td>
                  <td className="border p-3 font-bold text-green-600">$49</td>
                  <td className="border p-3">$30-50</td>
                  <td className="border p-3">$0 (paid upfront)</td>
                </tr>
                <tr>
                  <td className="border p-3">Professional Design</td>
                  <td className="border p-3 font-bold text-green-600">✓ Yes</td>
                  <td className="border p-3">Limited</td>
                  <td className="border p-3">✓ Yes</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-3">Hosting Included</td>
                  <td className="border p-3 font-bold text-green-600">✓ Yes</td>
                  <td className="border p-3">✓ Yes</td>
                  <td className="border p-3">Usually Extra</td>
                </tr>
                <tr>
                  <td className="border p-3">Support Included</td>
                  <td className="border p-3 font-bold text-green-600">✓ Yes</td>
                  <td className="border p-3">Limited</td>
                  <td className="border p-3">Limited</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-3">Your Time Investment</td>
                  <td className="border p-3 font-bold text-green-600">2-3 hours</td>
                  <td className="border p-3">20-40 hours</td>
                  <td className="border p-3">5-10 hours</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-8 rounded-lg mb-12">
            <h3 className="text-2xl font-bold mb-4">Limited Time Offer:</h3>
            <p className="mb-4 text-gray-700">
              Sign up this month and get <strong>the first 3 months at just $29/month</strong> (save $60). Plus, you'll
              receive a free AI chatbot installation (value: $500) when you refer a friend.
            </p>
            <button className="cta-gradient text-lg px-8 py-4">Claim Your $0 Down Website Now</button>
          </div>

          <h2 className="mb-6 text-3xl font-bold text-gray-900">FAQ:</h2>
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-bold mb-2">Can I cancel anytime?</h4>
              <p className="text-gray-700">Yes, absolutely. No long-term contracts. Cancel with 30 days notice.</p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-2">Do I own my website?</h4>
              <p className="text-gray-700">
                You own your domain and content. The website files belong to us, but you can export everything anytime.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-2">What if I need more pages?</h4>
              <p className="text-gray-700">
                Add additional pages for $25/month each or upgrade to the Pro plan ($99/month) for unlimited pages.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-2">How long does setup take?</h4>
              <p className="text-gray-700">
                Design and launch in 2-4 weeks. We'll keep you updated throughout the process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-100 to-pink-100 px-4 py-16">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-4xl font-bold text-gray-900">Ready to Launch Your Website?</h2>
          <p className="mb-8 text-xl text-gray-700">No upfront cost. No commitment. Start your free trial today.</p>
          <button className="cta-gradient text-lg px-8 py-4">Get Started Now</button>
        </div>
      </section>
    </main>
  )
}
