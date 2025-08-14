import { Section } from "@/components/Section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle, TrendingUp, Users, Award, Zap, Target } from "lucide-react"

export default function MHEdgePage() {
  const problems = [
    {
      problem: "Fragmented digital presence across multiple platforms",
      solution:
        "Our integrated approach unifies all your digital touchpoints for consistent brand messaging and seamless user experience.",
      icon: Target,
    },
    {
      problem: "Lack of measurable ROI from marketing investments",
      solution:
        "We implement comprehensive analytics and reporting systems that track every dollar spent and its direct impact on revenue.",
      icon: TrendingUp,
    },
    {
      problem: "Outdated technology holding back business growth",
      solution:
        "Our modernization strategies leverage cutting-edge technologies while ensuring smooth transitions and minimal disruption.",
      icon: Zap,
    },
    {
      problem: "Difficulty scaling operations efficiently",
      solution:
        "We design scalable systems and processes that grow with your business, from startup to enterprise level.",
      icon: Users,
    },
  ]

  const methodology = [
    {
      step: "01",
      title: "Discovery & Analysis",
      description: "Deep dive into your business, market, and competition to identify opportunities and challenges.",
      image: "/images/business-analytics-meeting.webp",
    },
    {
      step: "02",
      title: "Strategic Planning",
      description: "Develop a comprehensive roadmap with clear milestones, timelines, and success metrics.",
      image: "/images/project-management-checklist.webp",
    },
    {
      step: "03",
      title: "Implementation",
      description: "Execute the strategy with precision, maintaining constant communication and quality control.",
      image: "/images/developer-workspace-3d.webp",
    },
    {
      step: "04",
      title: "Optimization",
      description: "Continuously monitor, analyze, and refine to ensure maximum performance and ROI.",
      image: "/images/team-analytics-dashboard.webp",
    },
  ]

  const achievements = [
    { metric: "500+", label: "Projects Completed" },
    { metric: "98%", label: "Client Satisfaction" },
    { metric: "$50M+", label: "Revenue Generated" },
    { metric: "15+", label: "Industry Awards" },
  ]

  return (
    <div className="relative z-10">
      <Section className="py-16 md:py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 gradient-text">The MH Edge</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            What sets us apart isn't just what we do—it's how we do it. Our unique approach combines deep industry
            expertise with innovative technology to deliver results that exceed expectations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Unique Value Proposition</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground">Data-Driven Decision Making</h3>
                  <p className="text-muted-foreground">
                    Every strategy is backed by comprehensive data analysis and market research.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground">Agile Implementation</h3>
                  <p className="text-muted-foreground">
                    Rapid deployment with iterative improvements based on real-world performance.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground">Full-Stack Expertise</h3>
                  <p className="text-muted-foreground">
                    From strategy to execution, we handle every aspect of your digital transformation.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground">Transparent Communication</h3>
                  <p className="text-muted-foreground">
                    Regular updates, detailed reporting, and direct access to your project team.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/images/business-growth-celebration.webp"
              alt="Business growth and success"
              width={600}
              height={400}
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </Section>

      <Section glass className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Problems We Solve</h2>
          <p className="text-lg text-muted-foreground">Common business challenges and our proven solutions</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {problems.map((item, index) => (
            <Card key={index} className="glass-card">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <item.icon className="h-6 w-6 text-red-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">Problem:</h3>
                    <p className="text-sm text-muted-foreground">{item.problem}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-2">Our Solution:</h3>
                    <p className="text-muted-foreground">{item.solution}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Our Proven Methodology</h2>
          <p className="text-lg text-muted-foreground">The MH Framework for Digital Success</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {methodology.map((step, index) => (
            <Card key={index} className="glass-card text-center group hover:scale-105 transition-all duration-300">
              <CardHeader>
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">{step.step}</span>
                </div>
                <CardTitle className="text-xl font-bold text-foreground">{step.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Image
                  src={step.image || "/placeholder.svg"}
                  alt={step.title}
                  width={200}
                  height={150}
                  className="rounded-lg mx-auto"
                />
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section glass className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Awards & Recognition</h2>
          <p className="text-lg text-muted-foreground">Industry recognition for our exceptional work</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {achievements.map((achievement, index) => (
            <Card key={index} className="glass-card text-center">
              <CardHeader>
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-3xl font-bold text-primary">{achievement.metric}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-semibold">{achievement.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">Ready to Experience The MH Edge?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of successful businesses who have transformed their digital presence with our proven
            methodology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="gradient-button">
                Schedule Free Consultation
              </Button>
            </Link>
            <Link href="/case-studies">
              <Button size="lg" variant="outline" className="gradient-button bg-transparent">
                View Success Stories
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </div>
  )
}
