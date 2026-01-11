import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Web Design Macon County Alabama | Starting at $199/Month",
  description:
    "Professional web design for Tuskegee and Macon County businesses. Starting at $199/month with no upfront cost. Google Maps optimization included.",
  openGraph: {
    title: "Web Design Macon County Alabama | Starting at $199/Month",
    description: "Affordable web design for Tuskegee and Macon County small businesses.",
  },
}

export default function MaconCountyWebDesignPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="section-with-blobs px-4 py-16 md:py-24">
        <div className="container mx-auto max-w-4xl">
          <h1 className="heading-gradient mb-4 text-4xl font-bold md:text-5xl">
            Web Design for Tuskegee & Macon County Businesses
          </h1>
          <p className="mb-8 text-lg text-gray-700">
            Get your local business found online. Starting at just <strong>$199/month</strong> with no upfront cost.
          </p>
          <button className="cta-gradient">Schedule Your Free Consultation</button>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-6 text-3xl font-bold text-gray-900">Why Tuskegee Businesses Need a Website</h2>
          <p className="mb-8 text-gray-700">
            70% of customers search online before visiting a business. If you don't have a website, you're losing
            customers every single day to competitors who do.
          </p>

          <div className="glass-card p-6 mb-8">
            <h3 className="text-xl font-bold mb-4">What You Get:</h3>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span>✓</span>
                <span>Mobile-friendly website (works on phones & tablets)</span>
              </li>
              <li className="flex gap-3">
                <span>✓</span>
                <span>Google Business Profile optimization</span>
              </li>
              <li className="flex gap-3">
                <span>✓</span>
                <span>Local SEO (get found when people search near you)</span>
              </li>
              <li className="flex gap-3">
                <span>✓</span>
                <span>Contact form & appointment booking</span>
              </li>
              <li className="flex gap-3">
                <span>✓</span>
                <span>Fast hosting & security included</span>
              </li>
            </ul>
          </div>

          <button className="cta-gradient">Get Started Today - $199/Month</button>
        </div>
      </section>
    </main>
  )
}
