import Image from "next/image"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import { Section } from "@/components/Section"
import { Users, Megaphone, BarChart, Lightbulb, MessageSquare, ImageIcon } from "lucide-react"

export function SocialMediaMarketingDetail() {
  const solutions = [
    {
      icon: Users,
      title: "Social Media Strategy",
      description: "Developing tailored strategies to maximize your social media presence.",
      color: "text-dark-pastel-blue",
    },
    {
      icon: Megaphone,
      title: "Content Creation & Curation",
      description: "Crafting engaging posts, visuals, and videos for your target audience.",
      color: "text-dark-pastel-green",
    },
    {
      icon: BarChart,
      title: "Audience Engagement & Growth",
      description: "Building a loyal community and expanding your reach.",
      color: "text-dark-pastel-purple",
    },
    {
      icon: Lightbulb,
      title: "Paid Social Advertising",
      description: "Running targeted ad campaigns on platforms like Facebook, Instagram, and LinkedIn.",
      color: "text-dark-pastel-red",
    },
    {
      icon: MessageSquare,
      title: "Community Management",
      description: "Actively managing comments, messages, and reviews.",
      color: "text-dark-pastel-yellow",
    },
    {
      icon: ImageIcon,
      title: "Performance Analytics & Reporting",
      description: "Tracking key metrics and providing insights for continuous improvement.",
      color: "text-dark-pastel-teal",
    },
  ]

  const problems = [
    "Low engagement rates limiting brand growth.",
    "Inconsistent brand messaging across platforms.",
    "Limited follower growth affecting reach.",
  ]

  const benefits = [
    "Stronger brand community and loyalty.",
    "Increased shares, comments, and followers.",
    "Enhanced visibility and market positioning.",
  ]

  const faqs = [
    {
      question: "Which social platforms suit my business?",
      answer: "We analyze your target audience and industry to focus efforts on the platforms where your customers are most active.",
    },
    {
      question: "How often should I post?",
      answer: "We recommend a consistent posting schedule tailored to your audience’s habits, typically 3-5 times per week for optimal engagement.",
    },
  ]

  return (
    <Section className="py-12 md:py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          {/* Title and intro */}
          <h2 className="text-4xl md:text-5xl font-bold leading-tight gradient-text">
            Engaging Social Media Marketing
          </h2>
          <p className="text-lg text-muted-foreground max-w-prose">
            Connect with your audience, build brand loyalty, and drive conversions with our comprehensive social media marketing services. We help you tell your story and amplify your message.
          </p>

          {/* Problems Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Challenges You Face</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground max-w-prose">
              {problems.map((problem, idx) => (
                <li key={idx}>{problem}</li>
              ))}
            </ul>
          </div>

          {/* Solutions grid */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Our Solutions</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {solutions.map((solution, index) => (
                <Card key={index} className="glass-card p-4 flex items-start space-x-4">
                  <solution.icon className={`h-8 w-8 ${solution.color} shrink-0`} />
                  <div>
                    <CardTitle className="text-xl font-semibold mb-1">{solution.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">{solution.description}</CardDescription>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Benefits You Can Expect</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground max-w-prose">
              {benefits.map((benefit, idx) => (
                <li key={idx}>{benefit}</li>
              ))}
            </ul>
          </div>

          {/* Case Study Snippet */}
          <div className="bg-muted p-6 rounded-lg max-w-prose">
            <h3 className="text-2xl font-semibold mb-2">Case Study Highlight</h3>
            <p className="text-muted-foreground">
              A B2B client doubled their LinkedIn engagement within 3 months through targeted content and ad campaigns crafted and managed by our expert team.
            </p>
          </div>

          {/* FAQ Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h3>
            <dl className="space-y-4 max-w-prose">
              {faqs.map(({ question, answer }, idx) => (
                <div key={idx}>
                  <dt className="font-semibold">{question}</dt>
                  <dd className="text-muted-foreground ml-4">{answer}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Call to Action */}
          <div>
            <button className="btn btn-primary px-6 py-3 rounded-lg font-semibold text-lg hover:shadow-lg transition">
              Start growing your social presence now
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative h-[400px] md:h-[600px] flex items-center justify-center">
          <Image
            src="/images/social-media-engagement.webp"
            alt="Social Media Engagement Illustration"
            layout="fill"
            objectFit="contain"
            className="z-10"
          />
        </div>
      </div>
    </Section>
  )
}
