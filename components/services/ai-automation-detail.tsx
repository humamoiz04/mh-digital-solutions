import Image from "next/image"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import { Section } from "@/components/Section"
import {
  Users,
  Megaphone,
  Lightbulb,
  AlertCircle,
  BadgePercent,
  FileText,
  HelpCircle,
  ArrowRight,
  TrendingUp,
  Zap,
  ThumbsUp,
  Layers,
} from "lucide-react"

// --- Data Arrays for the Component ---
const problems = [
  "Manual processes consuming valuable time and resources",
  "Human errors affecting quality and consistency",
  "Difficulty scaling operations without proportional cost increases",
  "Lack of data-driven insights for strategic decision making",
]

const solutions = [
  {
    icon: TrendingUp,
    color: "text-dark-pastel-blue",
    title: "Process Automation",
    description: "Automate repetitive tasks and workflows to increase efficiency and reduce errors.",
  },
  {
    icon: Zap,
    color: "text-dark-pastel-orange",
    title: "Intelligent Analytics",
    description: "AI-powered insights and predictive analytics for better business decisions.",
  },
  {
    icon: ThumbsUp,
    color: "text-dark-pastel-red",
    title: "Quality Assurance",
    description: "Automated quality control systems that ensure consistent standards.",
  },
  {
    icon: Layers,
    color: "text-dark-pastel-purple",
    title: "Custom AI Solutions",
    description: "Tailored AI applications designed specifically for your business needs.",
  },
]

const benefits = [
  "50% reduction in operational costs through automation",
  "95% improvement in quality accuracy and consistency",
  "24/7 automated operations without human intervention",
  "Real-time insights and predictive analytics for strategic planning",
  "Scalable solutions that grow with your business",
]

const faqs = [
  {
    question: "How long does AI implementation take?",
    answer:
      "Implementation typically takes 3-6 months depending on complexity, with initial results visible within the first month.",
  },
  {
    question: "Will AI replace our employees?",
    answer:
      "Our AI solutions are designed to augment human capabilities, not replace them. We focus on automating repetitive tasks so your team can focus on higher-value work.",
  },
  {
    question: "What's the ROI of AI automation?",
    answer:
      "Most clients see ROI within 6-12 months, with typical cost savings of 30-50% in automated processes and significant quality improvements.",
  },
]

export function AiAutomationDetail() {
  return (
    <Section className="py-12 md:py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          {/* Title and intro */}
          <h2 className="text-4xl md:text-5xl font-bold leading-tight gradient-text flex items-center space-x-3">
            <Users className="h-10 w-10 text-dark-pastel-blue" />
            <span>AI & Automation Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-prose">
            Transform your business operations with intelligent automation and AI-powered solutions. Reduce costs,
            improve efficiency, and scale your operations with cutting-edge technology.
          </p>

          {/* Problems Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 flex items-center space-x-2">
              <AlertCircle className="h-6 w-6 text-dark-pastel-red" />
              <span>Challenges You Face</span>
            </h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground max-w-prose">
              {problems.map((problem, idx) => (
                <li key={idx}>{problem}</li>
              ))}
            </ul>
          </div>

          {/* Solutions grid */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center space-x-2">
              <Lightbulb className="h-6 w-6 text-dark-pastel-yellow" />
              <span>Our AI Solutions</span>
            </h3>
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
            <h3 className="text-2xl font-semibold mb-4 flex items-center space-x-2">
              <BadgePercent className="h-6 w-6 text-dark-pastel-green" />
              <span>Benefits You'll Experience</span>
            </h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground max-w-prose">
              {benefits.map((benefit, idx) => (
                <li key={idx}>{benefit}</li>
              ))}
            </ul>
          </div>

          {/* Case Study Snippet */}
          <div className="bg-muted p-6 rounded-lg max-w-prose">
            <h3 className="text-2xl font-semibold mb-2 flex items-center space-x-2">
              <FileText className="h-6 w-6 text-dark-pastel-purple" />
              <span>Case Study Highlight</span>
            </h3>
            <p className="text-muted-foreground">
              A manufacturing client achieved $2M annual savings and 95% quality accuracy improvement through our
              AI-powered automation solutions, reducing manual inspection time by 80%.
            </p>
          </div>

          {/* FAQ Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 flex items-center space-x-2">
              <HelpCircle className="h-6 w-6 text-dark-pastel-blue" />
              <span>Frequently Asked Questions</span>
            </h3>
            <dl className="space-y-4 max-w-prose">
              {faqs.map(({ question, answer }, idx) => (
                <div key={idx}>
                  <dt className="font-semibold flex items-center space-x-2">
                    <ArrowRight className="h-5 w-5 text-dark-pastel-teal" />
                    <span>{question}</span>
                  </dt>
                  <dd className="text-muted-foreground ml-7">{answer}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Call to Action */}
          <div>
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold text-lg shadow-md hover:shadow-lg transition flex items-center space-x-3">
              <span>Transform Your Business with AI</span>
              <Megaphone className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative h-[400px] md:h-[600px] flex items-center justify-center">
          <Image
            src="/images/ai-automation-illustration.webp"
            alt="AI Automation Solutions Illustration"
            layout="fill"
            objectFit="contain"
            className="z-10"
          />
        </div>
      </div>
    </Section>
  )
}
