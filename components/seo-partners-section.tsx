import Image from "next/image"
import { Section } from "@/components/Section"

export function SeoPartnersSection() {
  const partners = [
    { name: "Google Partner", logo: "/images/google-partner.webp" },
    { name: "Meta Partner", logo: "/images/meta-partner.webp" },
    { name: "HubSpot Partner", logo: "/images/hubspot-partner.webp" },
    { name: "Clutch Verified", logo: "/images/clutch-verified.webp" },
  ]

  return (
    <Section className="py-12 md:py-20 text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Trusted by Industry Leaders</h2>
      <p className="text-lg text-muted-foreground mb-12">
        Our partnerships and certifications ensure we deliver the highest quality SEO services.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center">
        {partners.map((partner, index) => (
          <div key={index} className="flex justify-center items-center p-4 bg-card rounded-lg shadow-sm glass-card">
            <Image
              src={partner.logo || "/placeholder.svg"}
              alt={partner.name}
              width={150}
              height={80}
              className="grayscale hover:grayscale-0 transition-all duration-300 object-contain"
            />
          </div>
        ))}
      </div>
    </Section>
  )
}
