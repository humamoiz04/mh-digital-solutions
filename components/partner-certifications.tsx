import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export function PartnerCertifications() {
  const certifications = [
    {
      name: "Google Partner",
      image: "/images/google-partner.webp",
      description: "Certified Google Ads and Analytics expertise with proven track record",
      verified: true,
    },
    {
      name: "Meta Business Partner",
      image: "/images/meta-partner.webp",
      description: "Official Meta Marketing Partner for Facebook and Instagram advertising",
      verified: true,
    },
    {
      name: "HubSpot Certified Partner",
      image: "/images/hubspot-partne.webp",
      description: "Certified in inbound marketing, sales automation, and CRM solutions",
      verified: true,
    },
    {
      name: "Clutch Verified",
      image: "/images/clutch-verified.webp",
      description: "Top-rated digital agency with verified client reviews and results",
      verified: true,
    },
  ]

  return (
    <div className="py-12 section-with-blobs">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text text-transparent mb-4">
          Our Certifications & Partnerships
        </h3>
        <p className="text-muted-foreground">Trusted by leading technology platforms worldwide</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {certifications.map((cert, index) => (
          <Card
            key={index}
            className="glass-card text-center group hover:scale-105 transition-all duration-300 border-fuchsia-200/20"
          >
            <CardContent className="p-6">
              <div className="relative w-full h-24 mx-auto mb-4">
                <Image
                  src={cert.image || "/placeholder.svg"}
                  alt={cert.name}
                  fill
                  className="object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              {cert.verified && (
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className="icon-gradient-bg w-6 h-6">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-medium text-fuchsia-600">Verified Partner</span>
                </div>
              )}
              <h4 className="font-semibold text-foreground mb-2">{cert.name}</h4>
              <p className="text-sm text-muted-foreground">{cert.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
