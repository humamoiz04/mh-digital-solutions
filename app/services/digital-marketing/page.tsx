import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Megaphone,
  Search,
  Mail,
  Share2,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Users,
  Target,
  Rocket,
} from "lucide-react" // Added Rocket for general marketing

export default function DigitalMarketingPage() {
  return (
    <div className="min-h-screen bg-transparent text-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#0D0D0D] via-[#2e0034] to-[#0D0D0D]">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-[#F472B6] text-white hover:bg-[#F472B6]/90">🚀 Your Growth Partner</Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-[#F472B6]">Integrated Digital Marketing</span> for Unmatched Results
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Combine the power of attracting customers organically with targeted campaigns to boost brand awareness,
                drive qualified leads, and achieve sustainable business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-[#F472B6] hover:bg-[#F472B6]/90 text-white">
                  Get a Free Marketing Audit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#FCFBCF] text-[#FCFBCF] hover:bg-[#FCFBCF] hover:text-black"
                >
                  View Our Success Stories
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-[#F472B6]/20 to-[#2e0034] p-8 rounded-lg">
                <Rocket className="h-32 w-32 text-[#F472B6] mx-auto mb-6" /> {/* Changed icon to Rocket */}
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#FCFBCF] mb-2">300%</div>
                  <div className="text-[#F472B6] font-semibold">Brand Recognition</div>
                  <div className="text-sm text-gray-400 mt-2">Average increase with our integrated campaigns</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: Understanding Marketing Strategies */}
      <section className="py-20 bg-transparent">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-[#FCFBCF]">Understanding Your Marketing Growth Path</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We leverage both Inbound and Outbound marketing strategies, meticulously tailored to your unique business
              objectives, ensuring comprehensive reach and sustainable growth.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Inbound Marketing Introduction */}
            <Card className="bg-gradient-to-br from-[#2e0034] to-[#0D0D0D] border-[#F472B6]/30 hover:border-[#F472B6] transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#F472B6]/20 rounded-lg flex items-center justify-center mb-6">
                  <Search className="h-8 w-8 text-[#F472B6]" /> {/* Icon for Inbound */}
                </div>
                <h3 className="text-2xl font-bold text-[#FCFBCF] mb-4">Inbound Marketing: Attract & Engage</h3>
                <p className="text-gray-300 mb-6">
                  Inbound marketing is about **attracting** customers by creating valuable content and experiences
                  tailored to them. It's a "pull" strategy that focuses on building trust and authority, converting
                  strangers into visitors, visitors into leads, and leads into customers.
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#F472B6] mr-2" /> Builds long-term relationships
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#F472B6] mr-2" /> Generates qualified leads organically
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#F472B6] mr-2" /> Establishes brand authority and trust
                  </li>
                </ul>
                <Button variant="link" className="text-[#F472B6] mt-4 pl-0">
                  Learn More About Inbound <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Outbound Marketing Introduction */}
            <Card className="bg-gradient-to-br from-[#2e0034] to-[#0D0D0D] border-[#F472B6]/30 hover:border-[#F472B6] transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#F472B6]/20 rounded-lg flex items-center justify-center mb-6">
                  <Megaphone className="h-8 w-8 text-[#F472B6]" /> {/* Icon for Outbound */}
                </div>
                <h3 className="text-2xl font-bold text-[#FCFBCF] mb-4">Outbound Marketing: Reach & Convert</h3>
                <p className="text-gray-300 mb-6">
                  Outbound marketing is about **proactively reaching out** to your target audience. It's a "push"
                  strategy designed for immediate visibility and rapid lead generation, putting your message directly in
                  front of potential customers.
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#F472B6] mr-2" /> Delivers immediate results and awareness
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#F472B6] mr-2" /> Highly targeted audience reach
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#F472B6] mr-2" /> Accelerates market entry and lead volume
                  </li>
                </ul>
                <Button variant="link" className="text-[#F472B6] mt-4 pl-0">
                  Learn More About Outbound <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Overview - Now Categorized */}
      <section className="py-20 bg-transparent">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-[#FCFBCF]">Our Comprehensive Digital Marketing Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From attracting qualified leads organically to executing targeted campaigns that convert instantly, we
              offer a full suite of solutions.
            </p>
          </div>

          {/* Inbound Marketing Services */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-[#F472B6] mb-8 text-center">Our Inbound Marketing Solutions</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Search,
                  title: "SEO Optimization",
                  description: "Improve your search rankings and drive organic traffic with proven SEO strategies.",
                  features: [
                    "Keyword research",
                    "On-page optimization",
                    "Technical SEO",
                    "Link building",
                    "Local SEO",
                    "Performance tracking",
                  ],
                },
                {
                  icon: TrendingUp, // Changed from Target to TrendingUp for content growth
                  title: "Content Marketing",
                  description: "Create compelling content that educates, engages, and converts your target audience.",
                  features: [
                    "Content strategy",
                    "Blog writing",
                    "Video production",
                    "Infographics",
                    "eBooks",
                    "Content distribution",
                  ],
                },
                {
                  icon: Share2,
                  title: "Organic Social Media", // Clarified as Organic
                  description:
                    "Build brand awareness and engage your audience across all social media platforms through organic strategies.",
                  features: [
                    "Content strategy",
                    "Community management",
                    "Influencer partnerships (organic)",
                    "Analytics",
                    "Brand monitoring",
                  ],
                },
                {
                  icon: Mail,
                  title: "Email Marketing (Nurturing)", // Clarified for nurturing
                  description:
                    "Nurture prospects and retain customers with personalized email marketing campaigns focused on building relationships.",
                  features: [
                    "Email automation",
                    "Segmentation",
                    "Personalization",
                    "A/B testing",
                    "Analytics",
                    "List management",
                  ],
                },
                // Lead Generation can be both, but emphasize its inbound aspects here or move to a separate section if it's primarily paid
                // Keeping Lead Generation here for now as it includes conversion optimization often linked to inbound assets.
                {
                  icon: Target,
                  title: "Conversion Rate Optimization (CRO)", // New service to emphasize inbound lead quality
                  description:
                    "Optimize your website and landing pages to convert more visitors into qualified leads and customers.",
                  features: [
                    "A/B testing",
                    "User experience (UX) analysis",
                    "Funnel optimization",
                    "Call-to-action (CTA) strategy",
                    "Form optimization",
                    "Performance insights",
                  ],
                },
              ].map((service, index) => (
                <Card
                  key={index}
                  className="bg-gradient-to-br from-[#2e0034] to-[#0D0D0D] border-[#F472B6]/30 hover:border-[#F472B6] transition-all duration-300"
                >
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-[#F472B6]/20 rounded-lg flex items-center justify-center mb-6">
                      <service.icon className="h-8 w-8 text-[#F472B6]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#FCFBCF] mb-4">{service.title}</h3>
                    <p className="text-gray-300 mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-[#F472B6] mr-2 flex-shrink-0" />
                          <span className="text-gray-400">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Outbound Marketing Services */}
          <div>
            <h3 className="text-3xl font-bold text-[#F472B6] mb-8 text-center">Our Outbound Marketing Solutions</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Users, // Represents reaching out to users
                  title: "Strategic Paid Advertising",
                  description:
                    "Maximize ROI with targeted paid advertising campaigns across Google, social media, and other platforms.",
                  features: [
                    "Campaign strategy",
                    "Ad creation & optimization",
                    "Audience targeting",
                    "Budget management",
                    "A/B testing",
                    "ROI analysis",
                  ],
                },
                {
                  icon: Megaphone, // Original Megaphone icon for broadcasting
                  title: "Direct Lead Generation",
                  description:
                    "Proactively generate high-quality leads through targeted outreach and direct response campaigns.",
                  features: [
                    "Cold email campaigns",
                    "LinkedIn outreach",
                    "Webinar promotion",
                    "List acquisition & management",
                    "CRM integration",
                    "Lead nurturing",
                  ],
                },
                {
                  icon: Mail, // Could represent direct mail or cold email campaigns
                  title: "Email Marketing (Outreach)", // Clarified for outreach
                  description: "Execute targeted email campaigns to reach new prospects and announce offers directly.",
                  features: [
                    "List building",
                    "Campaign design",
                    "A/B testing",
                    "Performance tracking",
                    "Personalized messaging",
                    "Compliance (GDPR, CAN-SPAM)",
                  ],
                },
                // You can add more outbound services here if relevant, e.g., Display Advertising, Video Ads, etc.
              ].map((service, index) => (
                <Card
                  key={index}
                  className="bg-gradient-to-br from-[#2e0034] to-[#0D0D0D] border-[#F472B6]/30 hover:border-[#F472B6] transition-all duration-300"
                >
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-[#F472B6]/20 rounded-lg flex items-center justify-center mb-6">
                      <service.icon className="h-8 w-8 text-[#F472B6]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#FCFBCF] mb-4">{service.title}</h3>
                    <p className="text-gray-300 mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-[#F472B6] mr-2 flex-shrink-0" />
                          <span className="text-gray-400">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Marketing Automation Section (Still relevant for both, but more tied to inbound nurturing) */}
      <section className="py-20 bg-gradient-to-r from-[#0D0D0D] via-[#2e0034] to-[#0D0D0D]">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-[#F472B6]">Marketing Automation</span> That Works 24/7
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Streamline your marketing efforts with intelligent automation that nurtures leads, personalizes
                experiences, and drives conversions while you sleep. Essential for both inbound follow-up and outbound
                efficiency.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "Automated Email Sequences",
                    description:
                      "Welcome series, nurture campaigns, and re-engagement flows that convert prospects into customers",
                  },
                  {
                    title: "Lead Scoring & Qualification",
                    description:
                      "Automatically identify and prioritize your hottest prospects based on behavior and engagement",
                  },
                  {
                    title: "Personalized Customer Journeys",
                    description: "Create unique experiences for each customer based on their preferences and actions",
                  },
                  {
                    title: "Performance Analytics",
                    description:
                      "Real-time insights into campaign performance with actionable recommendations for improvement",
                  },
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-[#F472B6]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="h-5 w-5 text-[#F472B6]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#FCFBCF] mb-2">{feature.title}</h4>
                      <p className="text-gray-400">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { metric: "400%", label: "Lead Increase", description: "Average lead generation improvement" },
                { metric: "65%", label: "Conversion Rate", description: "Higher than industry average" },
                { metric: "50%", label: "Time Saved", description: "Marketing automation efficiency" },
                { metric: "8x", label: "ROI", description: "Return on marketing investment" },
              ].map((stat, index) => (
                <Card key={index} className="bg-transparent border-[#F472B6]/30 text-center">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-[#F472B6] mb-2">{stat.metric}</div>
                    <div className="text-sm font-semibold text-[#FCFBCF] mb-1">{stat.label}</div>
                    <div className="text-xs text-gray-400">{stat.description}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-transparent">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-[#FCFBCF]">Marketing Results That Matter</h2>
            <p className="text-xl text-gray-300">Real metrics from our digital marketing campaigns</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { metric: "300%", label: "Brand Awareness", description: "Average increase in brand recognition" },
              { metric: "250%", label: "Website Traffic", description: "Organic traffic growth" },
              { metric: "180%", label: "Lead Quality", description: "Improvement in qualified leads" },
              { metric: "400%", label: "Social Engagement", description: "Increase in social media engagement" },
            ].map((result, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-[#F472B6]/10 to-[#2e0034] border-[#F472B6]/30 text-center"
              >
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-[#F472B6] mb-2">{result.metric}</div>
                  <div className="text-lg font-semibold text-[#FCFBCF] mb-2">{result.label}</div>
                  <div className="text-sm text-gray-400">{result.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#0D0D0D] via-[#2e0034] to-[#0D0D0D]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to <span className="text-[#F472B6]">Accelerate</span> Your Growth?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's create a comprehensive digital marketing strategy that drives real results for your business
          </p>
          <Button size="lg" className="bg-[#F472B6] hover:bg-[#F472B6]/90 text-white font-semibold">
            Get Marketing Strategy
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  )
}
