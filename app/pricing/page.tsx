import { Section } from "@/components/Section"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Award, Star } from "lucide-react"
import Link from "next/link"

export default function PricingPage() {
  const pricingPlans = [
    {
      name: "Launchpad",
      tagline: "Get Found Fast – No Tech Skills Needed",
      price: "$150",
      frequency: "per week",
      features: [
        "5-page SEO-optimized website (mobile-friendly)",
        "Free hosting for life with annual contract",
        "1-month complimentary basic SEO",
        "Google Business Profile Setup & Optimization",
        "4 social media posts/month (platform of choice)",
        "Social media content creation (images, flyers, videos)",
        "Collaborative marketing efforts with local businesses",
        "Monthly analytics reports & basic lead gen strategy",
      ],
      buttonText: "Choose Launchpad",
      highlight: false,
      promoBadge: { text: "Starter Kit", icon: <Star className="h-4 w-4" /> },
      targetAudience: {
        title: "Who's This For?",
        description:
          "Ideal for new businesses, startups, and local ventures that need to establish a strong foundational online presence without a large budget.",
        why: "This package provides everything you need to get discovered by local customers and build a professional digital footprint from scratch.",
      },
      successMetrics: {
        avgIncrease: "150% increase in online visibility",
        timeToResults: "Results within 30 days",
        clientSatisfaction: "95% client satisfaction rate",
      },
      testimonial: {
        text: "MH Digital Solution helped us launch our bakery online. We went from zero web presence to 50+ weekly inquiries!",
        author: "Sarah M., Local Bakery Owner",
      },
    },
    {
      name: "Reignite",
      tagline: "Fix What's Broken, Grow What Works",
      price: "$250",
      frequency: "per week",
      features: [
        "Website Redesign (UX/UI overhaul, faster load times)",
        "SEO migration to preserve rankings",
        "Technical SEO audit + backlink strategy",
        "Monthly rank tracking (5 keywords)",
        "Automated review requests (SMS/email)",
        "Social media bio & link optimization",
        "Local SEO & GMB optimization",
        "Free 60-minute 'Growth Roadmap' call",
      ],
      buttonText: "Choose Reignite",
      highlight: true,
      promoBadge: { text: "Most Popular", icon: <Award className="h-4 w-4" /> },
      targetAudience: {
        title: "Who's This For?",
        description:
          "Perfect for businesses with an existing but outdated website that's no longer driving results. For businesses that feel stagnant and need a digital reboot.",
        why: "This plan is designed to fix underlying issues and breathe new life into your online presence, converting existing traffic into new leads and sales.",
      },
      successMetrics: {
        avgIncrease: "300% increase in lead generation",
        timeToResults: "Results within 60 days",
        clientSatisfaction: "98% client satisfaction rate",
      },
      testimonial: {
        text: "Our outdated website was costing us customers. After the redesign, our conversion rate tripled and we're booking 40% more appointments.",
        author: "Mike R., HVAC Company Owner",
      },
    },
    {
      name: "ScaleUp",
      tagline: "Hands-Free Growth with Expert Guidance",
      price: "$999",
      frequency: "per week",
      features: [
        "Includes all Launchpad features",
        "Advanced SEO: Competitor gap analysis & content clusters",
        "Local SEO citations (50+ directories)",
        "Social Media Management: 1 post/day + 2 reels/shorts/month",
        "Community engagement (comments/DMs)",
        "Monthly performance report (traffic, leads, ROI)",
        "Dedicated account manager (Slack/WhatsApp)",
        "Quarterly strategy sessions",
      ],
      buttonText: "Choose ScaleUp",
      highlight: false,
      promoBadge: { text: "Best Value", icon: <Star className="h-4 w-4" /> },
      targetAudience: {
        title: "Who's This For?",
        description:
          "For established businesses ready to aggressively grow their market share and are looking for a comprehensive, hands-off digital marketing solution.",
        why: "This package provides a full-service team that handles everything from content creation to strategy, allowing you to focus on running your business.",
      },
      successMetrics: {
        avgIncrease: "500% increase in organic traffic",
        timeToResults: "Results within 90 days",
        clientSatisfaction: "99% client satisfaction rate",
      },
      testimonial: {
        text: "ScaleUp transformed our business. We've gone from 10 to 100+ leads per month and our revenue has doubled in just 6 months.",
        author: "Jennifer L., Marketing Agency Owner",
      },
    },
    {
      name: "E-Commerce Pro",
      tagline: "Turn Browsers Into Buyers",
      price: "$1299",
      frequency: "per week",
      features: [
        "Includes all ScaleUp features",
        "Shopify/WooCommerce setup with 10 products",
        "Checkout optimization (1-click upsells, trust badges)",
        "2 product videos/month (TikTok/YouTube Shorts)",
        "Influencer outreach to 5 micro-influencers/month",
        "AI Automation: Chatbots for abandoned carts",
        "Personalized email sequences",
      ],
      buttonText: "Choose E-Commerce Pro",
      highlight: false,
      promoBadge: { text: "Top Tier", icon: <Star className="h-4 w-4" /> },
      targetAudience: {
        title: "Who's This For?",
        description:
          "Designed for online stores and businesses that are serious about increasing their sales and optimizing their entire digital storefront.",
        why: "This plan is a complete solution for e-commerce, combining advanced marketing with technical optimizations to drive revenue and customer loyalty.",
      },
      successMetrics: {
        avgIncrease: "400% increase in online sales",
        timeToResults: "Results within 120 days",
        clientSatisfaction: "97% client satisfaction rate",
      },
      testimonial: {
        text: "Our e-commerce store was struggling. Now we're doing $50K+ monthly revenue with optimized funnels and automated marketing.",
        author: "David K., E-commerce Store Owner",
      },
    },
    {
      name: "Marketing Automation Suite",
      tagline: "Automate Your Success, Scale Your Leads",
      price: "$1500",
      frequency: "per month",
      features: [
        "Advanced email marketing automation",
        "Custom CRM integration & management",
        "Sales funnel design and implementation",
        "Automated lead nurturing campaigns",
        "Chatbot & AI integration for customer service",
        "Monthly strategy & performance review",
        "Onboarding and training for your team",
      ],
      buttonText: "Choose Automation Suite",
      highlight: false,
      promoBadge: { text: "For Modern Teams", icon: <Star className="h-4 w-4" /> },
      targetAudience: {
        title: "Who's This For?",
        description:
          "For businesses with an established sales team that needs to streamline their lead flow and automate their customer journey. Ideal for B2B services and SaaS companies.",
        why: "This package turns your website into a 24/7 lead machine, freeing up your team's time while ensuring every lead is properly nurtured and followed up on.",
      },
      successMetrics: {
        avgIncrease: "600% increase in qualified leads",
        timeToResults: "Results within 45 days",
        clientSatisfaction: "100% client satisfaction rate",
      },
      testimonial: {
        text: "The automation suite saved us 30 hours per week and increased our lead quality by 400%. Our sales team is finally focused on closing deals.",
        author: "Amanda T., SaaS Company CEO",
      },
    },
    {
      name: "Enterprise Partnership",
      tagline: "Your Dedicated Digital Department",
      price: "Custom",
      frequency: "per month",
      features: [
        "Full-scope digital strategy & execution",
        "Dedicated in-house team (SEO, PPC, Content, Dev)",
        "Brand management and reputation monitoring",
        "Comprehensive analytics and data modeling",
        "Quarterly business reviews & roadmap planning",
        "White-label services for internal use",
        "24/7 priority support & on-demand consultations",
      ],
      buttonText: "Contact for Quote",
      highlight: false,
      promoBadge: { text: "Elite Service", icon: <Award className="h-4 w-4" /> },
      targetAudience: {
        title: "Who's This For?",
        description:
          "For large corporations and enterprise-level businesses seeking a long-term, strategic partner to manage all aspects of their digital presence.",
        why: "This is a complete, custom-tailored solution that acts as your company's digital marketing department, providing unparalleled support and strategic oversight.",
      },
      successMetrics: {
        avgIncrease: "Custom ROI based on goals",
        timeToResults: "Strategic results within 6 months",
        clientSatisfaction: "100% client retention rate",
      },
      testimonial: {
        text: "Having MH Digital as our digital department has been game-changing. They've helped us scale from $1M to $10M in annual revenue.",
        author: "Robert S., Fortune 500 Executive",
      },
    },
  ]

  return (
    <div className="relative z-10">
      <Section className="py-16 md:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4 gradient-text">Packages & Plans</h1>
          <p className="text-lg text-muted-foreground">
            Find the perfect plan to boost your digital presence and achieve your business goals.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            "Organic Growth Engine: Where Your Business Scales Without the Ad Spend."
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`glass-card flex flex-col relative ${plan.highlight ? "border-primary shadow-lg scale-105" : ""}`}
            >
              {plan.promoBadge && (
                <div
                  className={`absolute top-0 right-0 -mt-3 -mr-3 px-4 py-1 text-xs font-bold text-white rounded-full flex items-center gap-1 ${plan.highlight ? "bg-primary" : "bg-secondary"}`}
                >
                  {plan.promoBadge.icon}
                  {plan.promoBadge.text}
                </div>
              )}
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-3xl font-bold text-foreground">{plan.name}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground mb-2">{plan.tagline}</CardDescription>
                <CardDescription className="text-muted-foreground">
                  <span className="text-5xl font-extrabold text-foreground">{plan.price}</span>
                  <span className="text-lg text-muted-foreground"> {plan.frequency}</span>
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 space-y-4">
                <div className="border-t pt-4">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{plan.targetAudience.title}</h3>
                  <p className="text-sm text-muted-foreground">{plan.targetAudience.description}</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    <strong>Why:</strong> {plan.targetAudience.why}
                  </p>
                </div>

                <div className="border-t pt-4">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Success Metrics:</h3>
                  <div className="space-y-1 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-muted-foreground">{plan.successMetrics.avgIncrease}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-muted-foreground">{plan.successMetrics.timeToResults}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-muted-foreground">{plan.successMetrics.clientSatisfaction}</span>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h3 className="text-lg font-semibold text-foreground mb-2">What's Included:</h3>
                  <ul className="space-y-2">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle className="h-5 w-5 text-primary gradient-icon" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t pt-4">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Client Success:</h3>
                  <blockquote className="text-sm text-muted-foreground italic">"{plan.testimonial.text}"</blockquote>
                  <p className="text-xs text-muted-foreground mt-2">— {plan.testimonial.author}</p>
                </div>
              </CardContent>
              <CardFooter className="pt-4">
                <Link href="/contact" className="w-full">
                  <Button className="gradient-button w-full text-lg py-3">{plan.buttonText}</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16">
          <Card className="glass-card p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6 text-center gradient-text">
              Transparent Pricing, No Hidden Fees
            </h2>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">No Setup Fees</h3>
                <p className="text-sm text-muted-foreground">Get started immediately without any upfront costs</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Cancel Anytime</h3>
                <p className="text-sm text-muted-foreground">No long-term contracts or cancellation penalties</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Money-Back Guarantee</h3>
                <p className="text-sm text-muted-foreground">30-day satisfaction guarantee on all packages</p>
              </div>
            </div>
          </Card>
        </div>
      </Section>
    </div>
  )
}
