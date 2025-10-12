import { Section } from "@/components/Section"
import { ServicesSection } from "@/components/services-section"
import { CtaSection } from "@/components/cta-section"
import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"

export const metadata: Metadata = generatePageMetadata({
  title: "All Services",
  description:
    "Explore our full suite of services including SEO, PPC, social media, web development, cloud, and IT consulting.",
  path: "/services",
})

export default function ServicesPage() {
  return (
    <div className="relative z-10">
      <Section className="py-16 md:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4 gradient-text">Our Services</h1>
          <p className="text-lg text-muted-foreground">
            Explore our comprehensive range of digital solutions designed to elevate your business.
          </p>
        </div>
        <ServicesSection />
      </Section>
      <Section glass>
        <CtaSection />
      </Section>
    </div>
  )
}
