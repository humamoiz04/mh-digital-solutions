import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Megaphone, Rocket, Target, Send, Users, TrendingUp, CheckCircle, ArrowRight, BarChart2, DollarSign } from "lucide-react"

export default function OutboundMarketingPage() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#0D0D0D] via-[#2e0034] to-[#0D0D0D]">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-[#F472B6] text-white hover:bg-[#F472B6]/90">⚡ Outbound Marketing</Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-[#FCFBCF]">Reach & Convert:</span> High-Impact Outbound Strategies
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Accelerate your growth and drive immediate results with targeted, proactive marketing campaigns that put your brand directly in front of your ideal customers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-[#F472B6] hover:bg-[#F472B6]/90 text-white">
                  Get a Free Paid Ads Audit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#FCFBCF] text-[#FCFBCF] hover:bg-[#FCFBCF] hover:text-black"
                >
                  View Outbound Case Studies
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-[#F472B6]/20 to-[#2e0034] p-8 rounded-lg">
                <Megaphone className="h-32 w-32 text-[#F472B6] mx-auto mb-6" /> {/* Icon for Outbound */}
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#FCFBCF] mb-2">500%+</div>
                  <div className="text-[#F472B6] font-semibold">Average ROI on Ad Spend</div>
                  <div className="text-sm text-gray-400 mt-2">Achieved through our optimized campaigns</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Outbound Marketing? Section */}
      <section className="py-20 bg-[#0D0D0D]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-[#FCFBCF]">What is Outbound Marketing?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Outbound marketing is a traditional approach that involves proactively reaching out to customers. It's a "push" strategy designed to immediately get your message in front of a broad or highly targeted audience, driving awareness and rapid conversions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-[#2e0034] to-[#0D0D0D] border-[#F472B6]/30">
              <CardContent className="p-8 text-center">
                <Rocket className="h-16 w-16 text-[#F472B6] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-[#FCFBCF] mb-3">Reach Broadly</h3>
                <p className="text-gray-300">
                  Quickly extend your brand's message to a wide audience or highly specific segments.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-[#2e0034] to-[#0D0D0D] border-[#F472B6]/30">
              <CardContent className="p-8 text-center">
                <Target className="h-16 w-16 text-[#F472B6] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-[#FCFBCF] mb-3">Convert Quickly</h3>
                <p className="text-gray-300">
                  Drive immediate traffic, leads, and sales through direct and impactful campaigns.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-[#2e0034] to-[#0D0D0D] border-[#F472B6]/30">
              <CardContent className="p-8 text-center">
                <DollarSign className="h-16 w-16 text-[#F472B6] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-[#FCFBCF] mb-3">Maximize ROI</h3>
                <p className="text-gray-300">
                  Optimize ad spend for maximum returns and cost-effective lead generation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Outbound Marketing Services */}
      <section className="py-20 bg-[#0D0D0D]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-[#FCFBCF]">Our High-Impact Outbound Marketing Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We design and execute aggressive, results-driven campaigns that rapidly expand your market reach and accelerate sales.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Strategic Paid Advertising",
                description: "Dominate search results and social feeds with highly targeted, ROI-focused ad campaigns.",
                features: ["Google Ads (PPC)", "Social Media Advertising (Meta, LinkedIn, X)", "Display & Video Ads", "Retargeting Campaigns", "Ad Copy & Creative Development", "Budget Optimization & Scaling"],
              },
              {
                icon: Target,
                title: "Direct Lead Generation",
                description: "Proactively identify and engage high-potential prospects to rapidly fill your sales pipeline.",
                features: ["Cold Email Campaigns", "LinkedIn Outreach Strategies", "Targeted List Building", "Webinar & Event Promotion", "Outbound Call Scripting (Consultation)"],
              },
              {
                icon: Send, // Icon for direct sending/outreach
                title: "Email Marketing (Outreach)",
                description: "Launch impactful email campaigns to introduce your offerings directly to new audiences and partners.",
                features: ["Targeted Email Lists", "Compelling Subject Lines & Copy", "A/B Testing for Open & Click Rates", "Automated Outreach Sequences", "Performance Tracking & Optimization"],
              },
              {
                icon: Megaphone,
                title: "Public Relations & Media Outreach", // If you offer this
                description: "Amplify your brand's message through strategic media placements and public announcements.",
                features: ["Press Release Distribution", "Media Relations", "Influencer Outreach (Paid/Partnership)", "Brand Storytelling", "Crisis Management"],
              },
              {
                icon: TrendingUp, // Icon for growth/impact
                title: "Affiliate & Partnership Marketing",
                description: "Expand your reach and sales channels through strategic collaborations with industry partners.",
                features: ["Partner Identification & Vetting", "Commission Structure Development", "Campaign Management", "Performance Tracking & Reporting"],
              },
              // Add other outbound services here if relevant to your offerings, e.g., print ads, TV/Radio (if applicable)
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

      {/* Why Choose MH Digital Solution for Outbound? */}
      <section className="py-20 bg-gradient-to-r from-[#0D0D0D] via-[#2e0034] to-[#0D0D0D]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-[#FCFBCF]">Why Accelerate with MH Digital Solution's Outbound?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We focus on precision, performance, and maximizing your return on advertising investment.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6 rounded-lg bg-black/20 border border-[#F472B6]/30">
              <Target className="h-12 w-12 text-[#F472B6] mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-[#FCFBCF] mb-2">Precision Targeting</h3>
              <p className="text-gray-400">Reaching the exact audience most likely to convert, efficiently.</p>
            </div>
            <div className="p-6 rounded-lg bg-black/20 border border-[#F472B6]/30">
              <DollarSign className="h-12 w-12 text-[#F472B6] mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-[#FCFBCF] mb-2">Maximized ROI</h3>
              <p className="text-gray-400">Optimizing every dollar for maximum returns on your ad spend.</p>
            </div>
            <div className="p-6 rounded-lg bg-black/20 border border-[#F472B6]/30">
              <BarChart2 className="h-12 w-12 text-[#F472B6] mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-[#FCFBCF] mb-2">Rapid, Measurable Results</h3>
              <p className="text-gray-400">Driving immediate traffic, leads, and sales with clear analytics.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials/Mini Case Study Section (Outbound specific) */}
      <section className="py-20 bg-[#0D0D0D]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-[#FCFBCF]">Outbound Marketing Success Stories</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real-world results from our strategic outbound campaigns.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-[#2e0034] to-[#0D0D0D] border-[#FCFBCF]/30">
              <CardContent className="p-8">
                <p className="text-lg italic text-gray-300 mb-6">
                  "Our lead volume surged by 400% in the first month with their paid advertising campaigns. MH Digital Solution truly understands aggressive growth!"
                </p>
                <div className="flex items-center">
                  {/* <img src="/placeholder-avatar-3.jpg" alt="Client Avatar" className="w-12 h-12 rounded-full mr-4" /> */}
                  <div>
                    <p className="font-semibold text-[#F472B6]">Michael Brown</p>
                    <p className="text-gray-400 text-sm">Sales Director, RapidScale SaaS</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-[#2e0034] to-[#0D0D0D] border-[#FCFBCF]/30">
              <CardContent className="p-8">
                <p className="text-lg italic text-gray-300 mb-6">
                  "Their direct lead generation strategies opened up entirely new markets for us. We're now consistently hitting our sales targets thanks to their outreach expertise."
                </p>
                <div className="flex items-center">
                  {/* <img src="/placeholder-avatar-4.jpg" alt="Client Avatar" className="w-12 h-12 rounded-full mr-4" /> */}
                  <div>
                    <p className="font-semibold text-[#F472B6]">Sarah Lee</p>
                    <p className="text-gray-400 text-sm">Founder, E-commerce Innovators</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-[#FCFBCF] text-[#FCFBCF] hover:bg-[#FCFBCF] hover:text-black">
              View All Campaign Results
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section (Outbound specific) */}
      <section className="py-20 bg-gradient-to-r from-[#0D0D0D] via-[#2e0034] to-[#0D0D0D]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-[#FCFBCF]">Outbound Marketing FAQs</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Answers to common questions about proactive marketing strategies.
            </p>
          </div>

          <div className="space-y-6 max-w-3xl mx-auto">
            {[
              {
                question: "How quickly can I see results from outbound marketing?",
                answer: "Outbound campaigns, especially paid advertising, can deliver immediate results in terms of traffic and leads, often within days or weeks of launch. Lead generation campaigns might take a few weeks to ramp up.",
              },
              {
                question: "Is outbound marketing expensive?",
                answer: "The cost of outbound marketing varies widely depending on channels, targeting, and scale. We work with your budget to maximize ROI, focusing on cost-effective strategies that deliver measurable returns.",
              },
              {
                question: "How do you ensure my ads reach the right audience?",
                answer: "We use advanced audience research, demographic and psychographic targeting, lookalike audiences, and precise platform settings to ensure your ads are seen by the most relevant potential customers, minimizing wasted spend.",
              },
              {
                question: "Can outbound marketing integrate with my sales process?",
                answer: "Absolutely. We design outbound campaigns to feed directly into your sales pipeline, often integrating with CRM systems and setting up lead nurturing processes to ensure smooth handoffs and improved conversion rates.",
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
            Ready for <span className="text-[#F472B6]">Accelerated</span> Growth?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's launch a high-impact outbound marketing strategy that drives immediate results for your business.
          </p>
          <Button size="lg" className="bg-[#F472B6] hover:bg-[#F472B6]/90 text-white font-semibold">
            Launch Your Campaign Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  )
}
