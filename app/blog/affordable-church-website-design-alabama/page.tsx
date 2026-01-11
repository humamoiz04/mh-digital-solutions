import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Affordable Church Website Design Alabama | Starting at $199",
  description:
    "Professional church website design in Alabama with donation setup, event streaming, and community engagement tools. Starting at just $199.",
  openGraph: {
    title: "Affordable Church Website Design Alabama | Starting at $199",
    description:
      "Professional church website design in Alabama with donation setup, event streaming, and community engagement tools.",
  },
}

export default function ChurchWebsiteDesignPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="section-with-blobs px-4 py-16 md:py-24">
        <div className="container mx-auto max-w-4xl">
          <h1 className="heading-gradient mb-4 text-4xl font-bold md:text-5xl">
            Affordable Church Website Design in Alabama
          </h1>
          <p className="mb-8 text-lg text-gray-700">
            Help your congregation connect, give, and grow with a professional church website starting at just{" "}
            <strong>$199</strong>.
          </p>
          <button className="cta-gradient">Get Your Church Online Today</button>
        </div>
      </section>

      {/* Content Section */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-6 text-3xl font-bold text-gray-900">Why Churches Need Websites</h2>
          <p className="mb-4 text-gray-700">
            In 2024, <strong>70% of people search online before visiting a church</strong>. If your congregation doesn't
            have a website, you're missing potential members and limiting your reach.
          </p>

          <h3 className="mb-4 mt-8 text-2xl font-bold text-gray-900">What's Included in Your Church Website:</h3>
          <ul className="space-y-4 mb-8">
            <li className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <div>
                <strong>Service Times & Location Map</strong> - Make it easy for visitors to find you
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <div>
                <strong>Online Giving Platform</strong> - Accept tithes and donations 24/7
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <div>
                <strong>Event Calendar</strong> - Announce Bible studies, prayer meetings, and events
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <div>
                <strong>Mobile-Friendly Design</strong> - Works perfectly on phones and tablets
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <div>
                <strong>Google Maps Integration</strong> - Get found in local searches
              </div>
            </li>
          </ul>

          <h3 className="mb-4 text-2xl font-bold text-gray-900">Why Alabama Churches Choose Us:</h3>
          <p className="mb-4 text-gray-700">
            We understand the needs of faith communities. Whether you're in Tuskegee, Eutaw, Greensboro, or any Alabama
            town, we've helped churches like yours build stronger digital communities.
          </p>

          <h3 className="mb-4 text-2xl font-bold text-gray-900">Real Results:</h3>
          <blockquote className="border-l-4 border-blue-400 bg-blue-50 p-4 my-6 italic text-gray-700">
            "Our new website increased our first-time visitor inquiries by 40% in the first month. Thank you for making
            it so affordable!" - Rev. James, Macon County
          </blockquote>

          <h3 className="mb-4 text-2xl font-bold text-gray-900">Pricing & Plans:</h3>
          <div className="glass-card p-6 mb-8">
            <h4 className="text-xl font-bold mb-4">Starter Plan - $199/Month</h4>
            <ul className="space-y-2 mb-6">
              <li>✓ 5 Pages (Home, About, Services, Events, Contact)</li>
              <li>✓ Online Giving Platform</li>
              <li>✓ Mobile-Responsive Design</li>
              <li>✓ Email Support</li>
              <li>✓ 1 Month Free Hosting</li>
            </ul>
            <button className="cta-gradient w-full">Start with Starter Plan</button>
          </div>

          <h3 className="mb-4 text-2xl font-bold text-gray-900">Next Steps:</h3>
          <ol className="space-y-4 list-decimal list-inside">
            <li>
              <strong>Schedule a Free Consultation</strong> - We'll discuss your church's goals and timeline (15 min
              call)
            </li>
            <li>
              <strong>Get a Proposal</strong> - We'll send a detailed plan with pricing and timeline
            </li>
            <li>
              <strong>Launch Your Site</strong> - We'll build, test, and go live within 2-4 weeks
            </li>
            <li>
              <strong>Get Trained</strong> - We'll train your team to manage the site independently
            </li>
          </ol>

          <h3 className="mb-4 mt-8 text-2xl font-bold text-gray-900">
            Learn More About Church Website Best Practices:
          </h3>
          <p className="mb-4 text-gray-700">
            For comprehensive guidance on building a faith-based digital presence, check out{" "}
            <a
              href="https://developers.google.com/search/docs/crawling-indexing/links-crawlable"
              target="_blank"
              rel="noreferrer nofollow"
              className="text-blue-600 hover:underline"
            >
              Google's church website optimization guidelines
            </a>{" "}
            and{" "}
            <a
              href="https://yoast.com/internal-linking-for-seo-why-and-how/"
              target="_blank"
              rel="noreferrer nofollow"
              className="text-blue-600 hover:underline"
            >
              Yoast's guide on church site organization
            </a>
            .
          </p>

          <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg my-8">
            <h3 className="text-xl font-bold mb-4">Ready to Connect Your Congregation?</h3>
            <p className="mb-4 text-gray-700">
              Don't let another Sunday pass without your church being found online. Schedule your free consultation
              today and let's build a website that serves your community.
            </p>
            <button className="cta-gradient">Book Your Free Consultation</button>
          </div>
        </div>
      </section>
    </main>
  )
}
