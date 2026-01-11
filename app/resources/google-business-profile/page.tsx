import { Button } from "@/components/ui/button"
import { CheckCircle, AlertCircle, MapPin, Star, Eye } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Google Business Profile Optimization Guide | MH Digital Solution",
  description:
    "Complete guide to optimizing your Google Business Profile for local search visibility. Get found on Google Maps and increase foot traffic.",
  keywords: ["Google Business Profile", "Google Maps optimization", "local SEO", "GBP setup"],
}

export default function GoogleBusinessProfileGuide() {
  return (
    <main className="min-h-screen bg-background py-12 md:py-20 section-with-blobs">
      <div className="container px-4 md:px-6 max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Google Business Profile Optimization Guide</h1>
          <p className="text-xl text-muted-foreground">
            Your step-by-step guide to getting found on Google Maps and dominating local search results.
          </p>
        </div>

        {/* Why This Matters */}
        <div className="mb-12 glass-card p-8 border border-warm-peach/30 bg-warm-peach/5">
          <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
            <Eye className="h-8 w-8 text-warm-coral" aria-hidden="true" />
            Why Google Business Profile Matters
          </h2>
          <div className="space-y-4">
            <p className="text-lg text-muted-foreground">
              70% of consumers use Google Maps to find local businesses. If your business isn't optimized on Google
              Maps, you're losing customers to competitors.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-warm-coral flex-shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <p className="font-semibold">Appear in Local Search</p>
                  <p className="text-sm text-muted-foreground">Show up when people search for your service near them</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Star className="h-5 w-5 text-warm-coral flex-shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <p className="font-semibold">Build Trust with Reviews</p>
                  <p className="text-sm text-muted-foreground">Customer reviews increase credibility and rankings</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Eye className="h-5 w-5 text-warm-coral flex-shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <p className="font-semibold">Direct Customer Contact</p>
                  <p className="text-sm text-muted-foreground">Phone, directions, website links all in one place</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step 1: Claim Your Profile */}
        <div className="mb-8 glass-card p-8 border border-warm-peach/30">
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="flex items-center justify-center h-8 w-8 rounded-full bg-warm-coral text-white font-semibold">
              1
            </span>
            Claim Your Google Business Profile
          </h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">If Your Profile Exists:</h4>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li>Go to google.com/business</li>
                <li>Search for your business name</li>
                <li>Click "Claim this business"</li>
                <li>Google will send verification by postcard (7-10 days) or phone (instant)</li>
              </ol>
            </div>
            <div>
              <h4 className="font-semibold mb-2">If Your Profile Doesn't Exist:</h4>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li>Go to google.com/business</li>
                <li>Click "Create a business"</li>
                <li>Enter your business name, address, phone, and website</li>
                <li>Complete verification (postcard or phone)</li>
              </ol>
            </div>
            <div className="bg-warm-peach/10 border border-warm-peach/30 p-4 rounded-lg flex gap-3">
              <AlertCircle className="h-5 w-5 text-warm-coral flex-shrink-0 mt-0.5" aria-hidden="true" />
              <p className="text-sm">
                <strong>Pro Tip:</strong> If verification is taking too long, use Google Search Console or Search
                Console for fast verification.
              </p>
            </div>
          </div>
        </div>

        {/* Step 2: Complete Your Profile */}
        <div className="mb-8 glass-card p-8 border border-warm-peach/30">
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="flex items-center justify-center h-8 w-8 rounded-full bg-warm-coral text-white font-semibold">
              2
            </span>
            Complete Your Business Profile (100% Completion)
          </h3>
          <div className="space-y-4">
            <p className="font-semibold">Fill in ALL fields (it improves your ranking):</p>
            <div className="space-y-3">
              {[
                { label: "Business Name", importance: "CRITICAL" },
                { label: "Address & Service Area", importance: "CRITICAL" },
                { label: "Phone Number", importance: "CRITICAL" },
                { label: "Website URL", importance: "High" },
                { label: "Business Hours", importance: "High" },
                { label: "Business Category", importance: "High" },
                { label: "Business Description (200+ words)", importance: "High" },
                { label: "Photo Gallery (10+ photos)", importance: "Medium" },
                { label: "Service Areas", importance: "Medium" },
                { label: "Attributes (Wheelchair accessible, etc.)", importance: "Medium" },
              ].map((field) => (
                <div key={field.label} className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                  <CheckCircle className="h-5 w-5 text-warm-coral flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-semibold">{field.label}</p>
                    <p className="text-sm text-muted-foreground">
                      Importance: <span className="font-semibold text-warm-coral">{field.importance}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Step 3: Optimize for Ranking */}
        <div className="mb-8 glass-card p-8 border border-warm-peach/30">
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="flex items-center justify-center h-8 w-8 rounded-full bg-warm-coral text-white font-semibold">
              3
            </span>
            Optimize for Ranking
          </h3>
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold mb-3">Service Area Targeting</h4>
              <div className="bg-muted p-4 rounded-lg mb-4">
                <p className="text-sm font-mono text-muted-foreground">
                  Example: If you're a plumber in Omaha, set service areas to: Omaha, Bellevue, Millard, Elkhorn
                </p>
              </div>
              <p className="text-muted-foreground">
                This is critical for ranking in specific neighborhoods. The more precise your service area, the better
                you rank locally.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Keywords in Description</h4>
              <p className="text-muted-foreground mb-3">Use local keywords naturally. Example for a restaurant:</p>
              <p className="text-sm font-italic text-muted-foreground bg-muted p-3 rounded-lg">
                "Award-winning Italian restaurant in Portland, Maine. Serving fresh pasta, seafood, and locally-sourced
                ingredients. Perfect for date nights and family dinners in the Old Port."
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Photo Strategy</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• 5-10 photos of your storefront/location</li>
                <li>• 5+ photos of your team/staff</li>
                <li>• 5+ photos of your products/services in action</li>
                <li>• High quality (phone camera is fine, but well-lit)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Step 4: Get Reviews */}
        <div className="mb-8 glass-card p-8 border border-warm-peach/30">
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="flex items-center justify-center h-8 w-8 rounded-full bg-warm-coral text-white font-semibold">
              4
            </span>
            Encourage Customer Reviews (This is Powerful!)
          </h3>
          <div className="space-y-4">
            <p className="font-semibold">Reviews are one of the biggest ranking factors. Here's how to get them:</p>
            <div className="space-y-3">
              <div className="p-4 bg-muted rounded-lg">
                <p className="font-semibold mb-2">After Every Sale/Service:</p>
                <p className="text-sm text-muted-foreground">
                  Email/text customers: "We'd love your feedback! Leave a Google review here: [link]"
                </p>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <p className="font-semibold mb-2">Add Review Link to Website:</p>
                <p className="text-sm text-muted-foreground">
                  "Help others find us. Leave a Google review" with a direct link
                </p>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <p className="font-semibold mb-2">Respond to All Reviews (Good & Bad):</p>
                <p className="text-sm text-muted-foreground">
                  Quick responses show you're active and customer-focused. This improves rankings.
                </p>
              </div>
            </div>
            <div className="bg-warm-peach/10 border border-warm-peach/30 p-4 rounded-lg flex gap-3">
              <AlertCircle className="h-5 w-5 text-warm-coral flex-shrink-0 mt-0.5" aria-hidden="true" />
              <p className="text-sm">
                <strong>DO NOT:</strong> Buy reviews, ask family to leave fake reviews, or harass customers for reviews.
                Google penalizes this.
              </p>
            </div>
          </div>
        </div>

        {/* Step 5: Posts & Updates */}
        <div className="mb-12 glass-card p-8 border border-warm-peach/30">
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="flex items-center justify-center h-8 w-8 rounded-full bg-warm-coral text-white font-semibold">
              5
            </span>
            Post Regular Updates (At Least 2x/Month)
          </h3>
          <div className="space-y-4">
            <p className="font-semibold">Google favors active businesses. Post about:</p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• New services or products</li>
              <li>• Seasonal promotions (like the 70% off packages!)</li>
              <li>• Special events or milestones</li>
              <li>• Customer success stories</li>
            </ul>
            <p className="text-sm text-muted-foreground italic">
              Even a simple post like "Check out our new holiday packages - 70% off through December 31" helps ranking.
            </p>
          </div>
        </div>

        {/* Bonus Tips */}
        <div className="mb-12 glass-card p-8 border border-warm-peach/30 bg-warm-peach/5">
          <h2 className="text-2xl font-bold mb-6">Bonus: Link Your Website to Your Profile</h2>
          <p className="text-muted-foreground mb-4">
            A professional website linked to your Google Business Profile dramatically improves local SEO. We can help:
          </p>
          <div className="space-y-3 mb-6">
            <div className="flex gap-3">
              <CheckCircle className="h-5 w-5 text-warm-coral flex-shrink-0 mt-0.5" aria-hidden="true" />
              <p>Design a professional website optimized for local search</p>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="h-5 w-5 text-warm-coral flex-shrink-0 mt-0.5" aria-hidden="true" />
              <p>Set up proper structured data (schema markup) so Google understands your business</p>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="h-5 w-5 text-warm-coral flex-shrink-0 mt-0.5" aria-hidden="true" />
              <p>Create location-specific pages for better ranking in multiple areas</p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center border-t border-warm-peach/20 pt-12">
          <h2 className="text-3xl font-bold mb-4">Need Help With Google Business Profile?</h2>
          <p className="text-lg text-muted-foreground mb-6">
            We offer Google Business Profile optimization starting at just $50. We'll claim, verify, and optimize your
            listing for maximum visibility.
          </p>
          <Button size="lg" asChild className="bg-warm-coral hover:bg-warm-coral/90">
            <a href="https://formsubmit.co/mhdigitalsolutionsus@gmail.com" target="_blank" rel="noopener noreferrer">
              Get Your Profile Optimized
            </a>
          </Button>
        </div>
      </div>
    </main>
  )
}
