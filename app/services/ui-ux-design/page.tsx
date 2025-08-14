import { Section } from "@/components/Section"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle } from "lucide-react"
import { FloatingBlobs } from "@/components/floating-blobs"
import { UIUXDesignDetail } from "@/components/services/ui-ux-design-detail"
import { CTASection } from "@/components/cta-section"

export default function UIUXDesignPage() {
  const services = [
    {
      title: "User Research & Analysis",
      description: "Conducting in-depth research to understand user needs, behaviors, and pain points.",
      icon: "/images/user-feedback-ui-ux.webp",
    },
    {
      title: "Wireframing & Prototyping",
      description:
        "Creating low-fidelity wireframes and interactive prototypes to visualize user flows and interfaces.",
      icon: "/images/design-development.webp",
    },
    {
      title: "User Interface (UI) Design",
      description: "Designing intuitive, aesthetically pleasing, and consistent visual interfaces.",
      icon: "/images/ui-ux-design-illustration-2.webp",
    },
    {
      title: "User Experience (UX) Design",
      description: "Focusing on the overall user journey to ensure a seamless, efficient, and enjoyable experience.",
      icon: "/images/ui-ux-design-process.webp",
    },
    {
      title: "Usability Testing",
      description: "Conducting tests to identify usability issues and gather feedback for iterative improvements.",
      icon: "/images/business-analytics-growth.webp",
    },
    {
      title: "Accessibility Design",
      description: "Ensuring your digital products are usable by people with diverse abilities.",
      icon: "/images/digital-collaboration-workspace.webp",
    },
  ]

  const benefits = [
    "Enhanced User Satisfaction",
    "Increased Conversion Rates",
    "Improved Brand Loyalty",
    "Reduced Development Costs",
    "Faster User Adoption",
    "Competitive Differentiation",
  ]

  return (
    <div className="relative overflow-hidden min-h-screen bg-background">
      <FloatingBlobs />
      <Section className="py-16 md:py-24 relative z-10" glass>
        {" "}
        {/* Apply glass effect */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4 gradient-text">UI/UX Design Services</h1>
          <p className="text-lg text-muted-foreground">
            Craft intuitive, engaging, and visually stunning user experiences that captivate your audience and drive
            results.
          </p>
        </div>
        <UIUXDesignDetail />
      </Section>
      <Section className="py-16 md:py-24" glass>
        {" "}
        {/* Apply glass effect */}
        <div className="flex flex-col items-center gap-8 md:flex-row md:gap-16">
          <div className="w-full md:w-1/2">
            <Image
              src="/images/ui-ux-design-word.webp"
              alt="Benefits of UI/UX Design"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full space-y-6 text-center md:w-1/2 md:text-left">
            <h2 className="text-4xl font-bold text-foreground">Why UI/UX Design is Critical for Digital Success</h2>
            <ul className="space-y-2 text-muted-foreground">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary gradient-icon" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
            <Link href="/case-studies">
              <Button className="gradient-button px-6 py-3 text-lg">View Our Design Portfolio</Button>
            </Link>
          </div>
        </div>
      </Section>
      <Section glass>
        {" "}
        {/* Apply glass effect */}
        <CTASection />
      </Section>
    </div>
  )
}
