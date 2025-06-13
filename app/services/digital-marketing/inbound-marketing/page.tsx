import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, Lightbulb, MessageSquare, Mail, Users, CheckCircle, TrendingUp, Sparkles, LayoutDashboard, Target, BarChart2 } from "lucide-react"

export default function InboundMarketingPage() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#0D0D0D] via-[#2e0034] to-[#0D0D0D]">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-[#F472B6] text-white hover:bg-[#F472B6]/90">🌱 Inbound Marketing</Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-[#FCFBCF]">Attract, Engage, Delight:</span> Your Inbound Growth Engine
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Build lasting relationships and drive organic growth by creating valuable experiences that pull your ideal customers directly to you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-[#F472B6] hover:bg-[#F472B6]/90 text-white">
                  Get a Free Inbound Strategy Call
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#FCFBCF] text-[#FCFBCF] hover:bg-[#FCFBCF] hover:text-black"
                >
                  Download Our Content Guide
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-[#F472B6]/20 to-[#2e0034] p-8 rounded-lg">
                <Lightbulb className="h-32 w-32 text-[#F472B6] mx-auto mb-6" /> {/* Icon for Inbound */}
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#FCFBCF] mb-2">250%+</div>
                  <div className="text-[#F472B6] font-semibold">Average Organic Traffic Growth</div>
                  <div className="text-sm text-gray-400 mt-2">Driven by our inbound strategies</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Inbound Marketing? Section */}
      <section className="py-20 bg-[#0D0D0D]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-[#FCFBCF]">What is Inbound Marketing?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Inbound marketing is a methodology that attracts customers by creating valuable content and experiences tailored to them. Instead of pushing ads, it pulls customers in by solving their problems and providing relevant information.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-[#2e0034] to-[#0D0D0D] border-[#F472B6]/30">
              <CardContent className="p-8 text-center">
                <Sparkles className="h-16 w-16 text-[#F472B6] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-[#FCFBCF] mb-3">Attract</h3>
                <p className="text-gray-300">
                  Draw in your ideal customers with valuable content and relevant solutions.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-[#2e0034] to-[#0D0D0D] border-[#F472B6]/30">
              <CardContent className="p-8 text-center">
                <MessageSquare className="h-16 w-16 text-[#F472B6] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-[#FCFBCF] mb-3">Engage</h3>
                <p className="text-gray-300">
                  Build lasting relationships by providing insights and solutions that align with their needs.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-[#2e0034] to-[#0D0D0D] border-[#F472B6]/30">
              <CardContent className="p-8 text-center">
                <Users className="h-16 w-16 text-[#F472B6] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-[#FCFBCF] mb-3">Delight</h3>
                <p className="text-gray-300">
                  Continue to support and help customers even after they've converted.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Inbound Marketing Services */}
      <section className="py-20 bg-[#0D0D0D]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-[#FCFBCF]">Our Core Inbound Marketing Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We empower your brand to become a magnet for high-quality leads, building authority and trust.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Search,
                title: "Search Engine Optimization (SEO)",
                description: "Boost your organic visibility and drive qualified traffic by ranking higher on Google and other search engines.",
                features: ["Keyword Research & Strategy", "On-Page & Technical SEO", "Local SEO Optimization", "Link Building", "Performance Monitoring"],
              },
              {
                icon: TrendingUp,
                title: "Content Marketing Strategy",
                description: "Create compelling, value-driven content that attracts, engages, and converts your target audience.",
                features: ["Blog Post & Article Writing", "eBooks & Whitepapers", "Video Content Production", "Infographics & Visuals", "Content Distribution"],
              },
              {
                icon: MessageSquare,
                title: "Organic Social Media Marketing",
                description: "Cultivate an engaged community and amplify your brand's voice through authentic social media presence.",
                features: ["Platform Strategy", "Content Calendars", "Community Management", "Audience Engagement", "Influencer Collaboration (Organic)"],
              },
              {
                icon: Mail,
                title: "Email Nurturing & Automation",
                description: "Build lasting relationships and guide leads through personalized email sequences that drive conversions.",
                features: ["Automated Workflows", "Lead Segmentation", "Personalized Campaigns", "Re-engagement Flows", "Email List Management"],
              },
              {
                icon: LayoutDashboard, // Icon for automation/CRM
                title: "Marketing Automation Setup",
                description: "Streamline your marketing efforts with intelligent automation that nurtures leads 24/7.",
                features: ["CRM Integration", "Lead Scoring & Qualification", "Personalized Journeys", "Automated Follow-ups", "Reporting Dashboards"],
              },
              {
                icon: Target,
                title: "Conversion Rate Optimization (CRO)",
                description: "Transform website visitors into valuable leads and customers by optimizing your online presence.",
                features: ["Landing Page Optimization", "A/B Testing & Multivariate Testing", "User Experience (UX) Analysis", "Call-to-Action (CTA) Strategy", "Funnel Analysis"],
              },
              {
                icon: BarChart2, // Icon for data
                title: "Inbound Analytics & Reporting",
                description: "Gain clear insights into your inbound performance with detailed analytics and actionable recommendations.",
                features: ["Traffic & Engagement Tracking", "Lead Conversion Analysis", "Content Performance Reports", "SEO Ranking Monitoring", "ROI Measurement"],
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
      </section>

      {/* Why Choose MH Digital Solution for Inbound? */}
      <section className="py-20 bg-gradient-to-r from-[#0D0D0D] via-[#2e0034] to-[#0D0D0D]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-[#FCFBCF]">Why Partner with MH Digital Solution for Inbound?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We specialize in creating sustainable, results-driven inbound strategies that resonate with your audience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6 rounded-lg bg-black/20 border border-[#F472B6]/30">
              <Sparkles className="h-12 w-12 text-[#F472B6] mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-[#FCFBCF] mb-2">Content That Converts</h3>
              <p className="text-gray-400">Crafting engaging, SEO-optimized content that attracts and nurtures leads.</p>
            </div>
            <div className="p-6 rounded-lg bg-black/20 border border-[#F472B6]/30">
              <TrendingUp className="h-12 w-12 text-[#F472B6] mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-[#FCFBCF] mb-2">Sustainable Growth</h3>
              <p className="text-gray-400">Building long-term organic visibility and relationships for lasting success.</p>
            </div>
            <div className="p-6 rounded-lg bg-black/20 border border-[#F472B6]/30">
              <BarChart2 className="h-12 w-12 text-[#F472B6] mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-[#FCFBCF] mb-2">Data-Driven Optimization</h3>
              <p className="text-gray-400">Continuous analysis and refinement for maximum inbound ROI.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials/Mini Case Study Section (Inbound specific) */}
      <section className="py-20 bg-[#0D0D0D]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-[#FCFBCF]">Inbound Success Stories</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how our inbound strategies have transformed businesses like yours.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-[#2e0034] to-[#0D0D0D] border-[#FCFBCF]/30">
              <CardContent className="p-8">
                <p className="text-lg italic text-gray-300 mb-6">
                  "MH Digital Solution helped us achieve a 200% increase in organic traffic within 8 months! Their content marketing and SEO expertise are truly unmatched."
                </p>
                <div className="flex items-center">
                  {/* <img src="/placeholder-avatar.jpg" alt="Client Avatar" className="w-12 h-12 rounded-full mr-4" /> */}
                  <div>
                    <p className="font-semibold text-[#F472B6]">Jane Doe</p>
                    <p className="text-gray-400 text-sm">Marketing Director, InnovateTech</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-[#2e0034] to-[#0D0D0D] border-[#FCFBCF]/30">
              <CardContent className="p-8">
                <p className="text-lg italic text-gray-300 mb-6">
                  "Our lead quality from content downloads improved drastically. Their lead nurturing automation is now a core part of our sales process."
                </p>
                <div className="flex items-center">
                  {/* <img src="/placeholder-avatar-2.jpg" alt="Client Avatar" className="w-12 h-12 rounded-full mr-4" /> */}
                  <div>
                    <p className="font-semibold text-[#F472B6]">John Smith</p>
                    <p className="text-gray-400 text-sm">CEO, Global SaaS Solutions</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-[#FCFBCF] text-[#FCFBCF] hover:bg-[#FCFBCF] hover:text-black">
              View All Case Studies
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section (Inbound specific) */}
      <section className="py-20 bg-gradient-to-r from-[#0D0D0D] via-[#2e0034] to-[#0D0D0D]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-[#FCFBCF]">Inbound Marketing FAQs</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Answers to common questions about attracting and engaging your audience.
            </p>
          </div>

          <div className="space-y-6 max-w-3xl mx-auto">
            {[
              {
                question: "How long does it take to see results from inbound marketing?",
                answer: "Inbound marketing, especially SEO and content marketing, typically yields significant results over 6-12 months as authority and organic rankings build. However, you'll start seeing initial traffic and engagement increases much sooner.",
              },
              {
                question: "Is inbound marketing suitable for all businesses?",
                answer: "Yes, inbound marketing is highly effective for almost all businesses, regardless of size or industry. It focuses on solving customer problems, which is universal. The specific tactics may vary, but the methodology applies broadly.",
              },
              {
                question: "How do you measure inbound marketing ROI?",
                answer: "We track key metrics such as organic traffic growth, lead generation volume and quality, conversion rates, cost per lead (CPL) for organic leads, and customer lifetime value (CLTV) derived from inbound channels to demonstrate ROI.",
              },
              {
                question: "What's the difference between inbound and content marketing?",
                answer: "Content marketing is a core component and tactic within the broader inbound marketing methodology. Inbound uses content (blogs, videos, etc.) to attract, but also includes SEO, social media (organic), email nurturing, and automation to engage and delight.",
              },
            ].map((faq, index) => (
              <Card key={index} className="bg-[#0D0D0D] border-[#F472B6]/30">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-[#FCFBCF] mb-3 text-lg">{faq.question}</h3>
                  <p className="text-gray-400">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#0D0D0D] via-[#2e0034] to-[#0D0D0D]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to <span className="text-[#F472B6]">Magnetize</span> Your Audience?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's build an inbound marketing strategy that attracts your ideal customers and drives sustainable growth.
          </p>
          <Button size="lg" className="bg-[#F472B6] hover:bg-[#F472B6]/90 text-white font-semibold">
            Start Your Inbound Journey
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  )
}
