import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle, DollarSign } from "lucide-react"
import type { Metadata } from "next"

const registrationGuides: Record<
  string,
  {
    state: string
    steps: Array<{
      title: string
      description: string
      url?: string
      cost?: string
    }>
    insuranceTypes: string[]
    websiteNeeded: boolean
  }
> = {
  nebraska: {
    state: "Nebraska",
    steps: [
      {
        title: "Choose Your Business Structure",
        description: "Decide between Sole Proprietorship, LLC, S-Corp, or C-Corp",
      },
      {
        title: "Register Your DBA (Doing Business As)",
        description: "File with the Nebraska Secretary of State office. Most counties require local filing.",
        url: "https://sos.nebraska.gov/business/",
        cost: "$10-50",
      },
      {
        title: "Get Your EIN (Employer Identification Number)",
        description: "Free number from IRS. Required for hiring employees or forming an LLC.",
        url: "https://www.irs.gov/ein",
        cost: "Free",
      },
      {
        title: "Obtain Business License",
        description: "Check your city/county for local business licenses and permits.",
        cost: "$50-200",
      },
      {
        title: "Get Business Insurance",
        description: "General Liability and industry-specific insurance (Workers Comp, etc.)",
        cost: "$50-500/month",
      },
      {
        title: "Build Your Web Presence",
        description: "Professional website to establish credibility and get found on Google Maps.",
        cost: "$299+",
      },
    ],
    insuranceTypes: [
      "General Liability Insurance",
      "Professional Liability",
      "Workers Compensation",
      "Commercial Auto Insurance",
      "Property Insurance",
    ],
    websiteNeeded: true,
  },
  wyoming: {
    state: "Wyoming",
    steps: [
      {
        title: "Form Your LLC or Corporation",
        description:
          "Wyoming is famous for privacy. No annual fees for LLCs. Simple formation process. Can be non-resident.",
        url: "https://sos.wyo.gov/",
        cost: "$100",
      },
      {
        title: "Get Your EIN",
        description: "Free Employer Identification Number from the IRS.",
        url: "https://www.irs.gov/ein",
        cost: "Free",
      },
      {
        title: "Register with Wyoming Department of Revenue",
        description: "Sales Tax and Unemployment Insurance registration if applicable.",
        url: "https://revenue.wyo.gov/",
        cost: "Varies",
      },
      {
        title: "Local Business License",
        description: "Check your city/county for local requirements.",
        cost: "$25-100",
      },
      {
        title: "Business Insurance",
        description: "Critical for high-value operations like ranching, mining, and tourism.",
        cost: "$75-1000+/month",
      },
      {
        title: "Professional Website & Google Maps Listing",
        description: "Establish credibility and get found by customers.",
        cost: "$599+",
      },
    ],
    insuranceTypes: [
      "General Liability Insurance",
      "Commercial Property Insurance",
      "Workers Compensation",
      "Farm/Ranch Insurance",
      "Professional Liability",
    ],
    websiteNeeded: true,
  },
  kansas: {
    state: "Kansas",
    steps: [
      {
        title: "File Articles of Organization (LLC) or Certificate of Incorporation",
        description: "With Kansas Secretary of State for LLC or corporate protection.",
        url: "https://sos.kansas.gov/business/",
        cost: "$165 (LLC), $100 (Corp)",
      },
      {
        title: "Obtain EIN",
        description: "Free employer identification number.",
        url: "https://www.irs.gov/ein",
        cost: "Free",
      },
      {
        title: "Sales Tax Permit",
        description: "Register with Kansas Department of Revenue if selling goods/services.",
        url: "https://www.kdor.ks.gov/",
        cost: "Free",
      },
      {
        title: "Local Business License",
        description: "Required in most Kansas cities and counties.",
        cost: "$25-75",
      },
      {
        title: "Agricultural or Trade Insurance",
        description: "Critical for farmers, ranchers, equipment dealers, and service providers.",
        cost: "$100-500/month",
      },
      {
        title: "Website & Lead Generation Platform",
        description: "Get found online and manage customer inquiries.",
        cost: "$399+",
      },
    ],
    insuranceTypes: [
      "General Liability",
      "Farm & Ranch Insurance",
      "Workers Compensation",
      "Commercial Auto",
      "Equipment Rental Insurance",
    ],
    websiteNeeded: true,
  },
}

export function generateStaticParams() {
  return Object.keys(registrationGuides).map((state) => ({
    state,
  }))
}

export function generateMetadata({ params }: { params: { state: string } }): Metadata {
  const guide = registrationGuides[params.state]
  if (!guide) return { title: "Business Registration" }

  return {
    title: `How to Register a Business in ${guide.state} | MH Digital Solution`,
    description: `Step-by-step guide to registering your business in ${guide.state}. Includes LLC formation, insurance, and website setup.`,
  }
}

export default function BusinessRegistrationGuide({ params }: { params: { state: string } }) {
  const guide = registrationGuides[params.state]

  if (!guide) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Guide Not Found</h1>
          <Button asChild>
            <Link href="/resources">View All Resources</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-background py-12 md:py-20 section-with-blobs">
      <div className="container px-4 md:px-6 max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">How to Start a Business in {guide.state}</h1>
          <p className="text-xl text-muted-foreground">
            Complete step-by-step guide for entrepreneurs. From registration to getting found online.
          </p>
        </div>

        {/* Steps Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Registration Steps</h2>
          <div className="space-y-4">
            {guide.steps.map((step, index) => (
              <div key={index} className="glass-card p-6 border border-warm-peach/30">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-warm-coral text-white font-semibold">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                    <p className="text-muted-foreground mb-3">{step.description}</p>
                    <div className="flex gap-4 text-sm">
                      {step.cost && (
                        <div className="flex items-center gap-1 text-warm-coral font-semibold">
                          <DollarSign className="h-4 w-4" aria-hidden="true" />
                          {step.cost}
                        </div>
                      )}
                      {step.url && (
                        <a
                          href={step.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-warm-coral hover:underline"
                        >
                          Official Link →
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Insurance Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Business Insurance Types in {guide.state}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {guide.insuranceTypes.map((type) => (
              <div key={type} className="glass-card p-4 border border-warm-peach/20 flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-warm-coral flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="font-medium">{type}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Website Section */}
        {guide.websiteNeeded && (
          <div className="mb-12 glass-card p-8 border border-warm-peach/30 bg-warm-peach/5">
            <h2 className="text-3xl font-bold mb-4">Do You Need a Website?</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Yes. In 2025, a professional website is essential for credibility and visibility. Customers search for
              businesses online before calling or visiting.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex gap-3">
                <CheckCircle className="h-6 w-6 text-warm-coral flex-shrink-0" aria-hidden="true" />
                <div>
                  <h3 className="font-semibold mb-1">Build Trust</h3>
                  <p className="text-muted-foreground">Professional website signals you're a serious business</p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="h-6 w-6 text-warm-coral flex-shrink-0" aria-hidden="true" />
                <div>
                  <h3 className="font-semibold mb-1">Get Found on Google</h3>
                  <p className="text-muted-foreground">
                    Appear in local search and Google Maps when customers search for your services
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="h-6 w-6 text-warm-coral flex-shrink-0" aria-hidden="true" />
                <div>
                  <h3 className="font-semibold mb-1">Convert More Customers</h3>
                  <p className="text-muted-foreground">Show your services, pricing, and how to contact you 24/7</p>
                </div>
              </div>
            </div>
            <Button size="lg" asChild className="bg-warm-coral hover:bg-warm-coral/90">
              <a href="https://formsubmit.co/mhdigitalsolutionsus@gmail.com" target="_blank" rel="noopener noreferrer">
                Get Your Website Started Today
              </a>
            </Button>
          </div>
        )}

        {/* Final CTA */}
        <div className="text-center border-t border-warm-peach/20 pt-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Launch Your Business?</h2>
          <p className="text-lg text-muted-foreground mb-6">
            We help with the digital part. Get registered, get insured, then get online.
          </p>
          <Button size="lg" asChild className="bg-warm-coral hover:bg-warm-coral/90">
            <a href="https://formsubmit.co/mhdigitalsolutionsus@gmail.com" target="_blank" rel="noopener noreferrer">
              Schedule Free Consultation
            </a>
          </Button>
        </div>
      </div>
    </main>
  )
}
