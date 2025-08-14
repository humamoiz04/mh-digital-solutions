import { Section } from "@/components/Section"
import { Hero } from "@/components/hero"
import { MarketingAgencySection } from "@/components/marketing-agency-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { BusinessObjectivesSection } from "@/components/business-objectives-section"
import { ProblemsWeSolveSection } from "@/components/problems-we-solve-section"
import { FeaturesSection } from "@/components/features-section"
import { ClientNetworkSection } from "@/components/client-network-section"
import { ServicesSection } from "@/components/services-section"
import { CtaSection } from "@/components/cta-section"
import { PortfolioShowcaseSection } from "@/components/portfolio-showcase-section"
import { PartnerBadges } from "@/components/partner-badges"

export default function Home() {
  return (
    <div className="relative z-10">
      <Section glass>
        <Hero />
      </Section>
      <Section glass>
        <MarketingAgencySection />
      </Section>
      <Section glass>
        <ServicesSection />
      </Section>
      <Section glass>
        <BusinessObjectivesSection />
      </Section>
      <Section glass>
        <ProblemsWeSolveSection />
      </Section>
      <Section glass>
        <FeaturesSection />
      </Section>
      <Section glass>
        <PortfolioShowcaseSection />
      </Section>
      <Section glass>
        <PartnerBadges />
      </Section>
      <Section glass>
        <ClientNetworkSection />
      </Section>
      <Section glass>
        <TestimonialsSection />
      </Section>
      <Section glass>
        <CtaSection />
      </Section>
    </div>
  )
}
