import { Section } from "@/components/Section"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle } from "lucide-react"
import { FloatingBlobs } from "@/components/floating-blobs"
import { LeadGenerationDetail } from "@/components/services/lead-generation-detail"
import { CTASection } from "@/components/cta-section"

export default function LeadGenerationPage() {
  const services = [
    {
      title: "Content Marketing for Leads",
      description: "Creating valuable content (blogs, e-books, webinars) to attract and capture leads.",
      icon: "/images/content-marketing.webp",
    },
    {
      title: "SEO for Lead Generation",
      description: "Optimizing your website to rank higher in search results and attract qualified organic leads.",
      icon: "/images/seo-roi-illustration.webp",
    },
    {
      title: "Paid Advertising (PPC) for Leads",
      description:
        "Running targeted ad campaigns on Google, social media, and other platforms to generate immediate leads.",
      icon: "/images/ppc-advertising.webp",
    },
    {
      title: "Social Media Lead Generation",
      description: "Leveraging social platforms with engaging content and targeted ads to capture leads.",
      icon: "/images/social-media-engagement.webp",
    },
    {
      title: "Email Marketing for Leads",
      description: "Developing email campaigns to nurture prospects and convert them into customers.",
      icon: "/images/email-marketing-campaign.webp",
    },
    {
      title: "Landing Page Optimization",
      description: "Designing high-converting landing pages that effectively capture visitor information.",
      icon: "/images/ui-ux-design-process.webp",
    },
  ]

  const benefits = [
    "Increased Sales Opportunities",
    "Higher Conversion Rates",
    "Improved ROI on Marketing Spend",
    "Targeted Audience Reach",
    "Sustainable Business Growth",
    "Enhanced Brand Reputation",
  ]

  return (
    <div className="relative overflow-hidden min-h-screen bg-background">
      <FloatingBlobs />
      <Section className="py-16 md:py-24 relative z-10" glass>
        {" "}
        {/* Apply glass effect */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4 gradient-text">Lead Generation Services</h1>
          <p className="text-lg text-muted-foreground">
            Attract, engage, and convert high-quality leads into loyal customers with our comprehensive lead generation
            strategies.
          </p>
        </div>
        <LeadGenerationDetail />
      </Section>
      <Section className="py-16 md:py-24" glass>
        {" "}
        {/* Apply glass effect */}
        <div className="flex flex-col items-center gap-8 md:flex-row md:gap-16">
          <div className="w-full md:w-1/2">
            <Image
              src="/images/lead-generation-funnel (2).webp" // Updated image path
              alt="Benefits of Lead Generation"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full space-y-6 text-center md:w-1/2 md:text-left">
            <h2 className="text-4xl font-bold text-foreground">Why Effective Lead Generation is Crucial</h2>
            <ul className="space-y-2 text-muted-foreground">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary gradient-icon" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
            <Link href="/contact">
              <Button className="gradient-button px-6 py-3 text-lg">Generate More Leads Today</Button>
            </Link>
          </div>
        </div>
      </Section>
      <Section glass>
        {" "}
        {/* Apply glass effect */}
        <CTASection />
      </Section>
    </div>
  )
}
