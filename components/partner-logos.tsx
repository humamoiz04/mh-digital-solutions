import { Card } from "@/components/ui/card"

export function PartnerLogos() {
  const partners = [
    {
      name: "Web Development Solutions",
      logo: "/images/web-development-3d.webp",
      category: "Development Services",
    },
    {
      name: "Digital Marketing Excellence",
      logo: "/images/social-media-engagement.webp",
      category: "Marketing Services",
    },
    {
      name: "Business Analytics Platform",
      logo: "/images/business-analytics-dashboard.webp",
      category: "Analytics Solutions",
    },
    {
      name: "AI Automation Systems",
      logo: "/images/ai-chatbot-automation.webp",
      category: "AI Technology",
    },
    {
      name: "E-commerce Solutions",
      logo: "/images/ecommerce-shopping.webp",
      category: "E-commerce Platform",
    },
    {
      name: "UI/UX Design Studio",
      logo: "/images/ui-ux-design-3d.webp",
      category: "Design Services",
    },
    {
      name: "Content Marketing Hub",
      logo: "/images/content-marketing-blog.webp",
      category: "Content Strategy",
    },
    {
      name: "Business Growth Solutions",
      logo: "/images/business-growth-cta.webp",
      category: "Business Consulting",
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-slate-700 via-blue-600 to-purple-600 bg-clip-text text-transparent">
            Our Service Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital solutions across multiple industries and business functions
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <Card key={index} className="glass-card p-6 hover:shadow-lg transition-all duration-300 group">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 mb-4 rounded-full bg-white p-2 shadow-md group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                  <img
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <h3 className="font-semibold text-sm text-gray-800 mb-1">{partner.name}</h3>
                <p className="text-xs text-gray-500">{partner.category}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
