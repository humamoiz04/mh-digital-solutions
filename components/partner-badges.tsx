"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, CheckCircle } from "lucide-react"

export function PartnerBadges() {
  const partners = [
    {
      name: "Google Partner",
      icon: (
        <img
          src="/images/partners/partner-google.webp"
          alt="Google Partner logo"
          width={32}
          height={32}
          loading="lazy"
          className="w-8 h-8 object-contain"
        />
      ),
      description: "Certified Google Ads & Analytics Partner",
      verified: true,
    },
    {
      name: "Meta Business Partner",
      icon: (
        <img
          src="/images/partners/partner-meta.webp"
          alt="Meta Business Partner logo"
          width={32}
          height={32}
          loading="lazy"
          className="w-8 h-8 object-contain"
        />
      ),
      description: "Official Meta Marketing Partner",
      verified: true,
    },
    {
      name: "HubSpot Partner",
      icon: (
        <img
          src="/images/partners/partner-hubspot.webp"
          alt="HubSpot Partner logo"
          width={32}
          height={32}
          loading="lazy"
          className="w-8 h-8 object-contain"
        />
      ),
      description: "Certified HubSpot Solutions Partner",
      verified: true,
    },
    {
      name: "Clutch Verified",
      icon: (
        <img
          src="/images/partners/clutch-verified-badge.webp"
          alt="Clutch Verified badge"
          width={32}
          height={32}
          loading="lazy"
          className="w-8 h-8 object-contain"
        />
      ),
      description: "Top-Rated Digital Agency",
      verified: true,
    },
  ]

  return (
    <div className="py-12 bg-background/50 backdrop-blur-sm rounded-lg border border-border/50">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text text-transparent mb-2">
          Trusted Partners & Certifications
        </h3>
        <p className="text-muted-foreground">Recognized expertise by industry leaders</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto px-6">
        {partners.map((partner, index) => (
          <Card
            key={index}
            className="glass-card text-center group hover:scale-105 transition-all duration-300 border-fuchsia-200/20"
          >
            <CardContent className="p-6">
              <div className="flex justify-center mb-3">{partner.icon}</div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <h4 className="font-semibold text-sm text-foreground">{partner.name}</h4>
                {partner.verified && <CheckCircle className="w-4 h-4 text-fuchsia-600" />}
              </div>
              <p className="text-xs text-muted-foreground">{partner.description}</p>
              {partner.verified && (
                <Badge
                  variant="secondary"
                  className="mt-2 text-xs bg-gradient-to-r from-fuchsia-100 to-pink-100 text-fuchsia-700 border-fuchsia-200"
                >
                  <Star className="w-3 h-3 mr-1" />
                  Verified
                </Badge>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
