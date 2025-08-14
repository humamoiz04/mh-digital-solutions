import { Section } from "@/components/Section"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { AlertTriangle, Download, Star, Users, TrendingUp, Monitor, Zap, Clock, CheckCircle } from "lucide-react"
import { FloatingBlobs } from "@/components/floating-blobs"

export default function MobileAppDevelopmentPage() {
  const services = [
    {
      title: "iOS App Development",
      description: "Building high-performance, intuitive applications for Apple's iOS ecosystem.",
      icon: "/images/mobile-app-building-illustration.webp",
    },
    {
      title: "Android App Development",
      description: "Creating robust and scalable applications for the diverse Android platform.",
      icon: "/images/mobile-app-building-illustration.webp",
    },
    {
      title: "Cross-Platform Development",
      description:
        "Developing apps that run seamlessly on both iOS and Android using frameworks like React Native or Flutter.",
      icon: "/images/digital-art-style-illustration-graphic-designer.webp", // Updated with new image
    },
    {
      title: "UI/UX Design for Mobile",
      description: "Crafting engaging and user-friendly interfaces specifically optimized for mobile devices.",
      icon: "/images/ui-ux-design-illustration.webp",
    },
    {
      title: "App Modernization",
      description:
        "Updating and enhancing existing mobile applications to meet current technological standards and user expectations.",
      icon: "/images/business-process-optimization.webp",
    },
    {
      title: "App Maintenance & Support",
      description: "Providing ongoing support, updates, and performance monitoring to ensure your app runs smoothly.",
      icon: "/images/operational-services.webp",
    },
  ]

  const challenges = [
    {
      icon: AlertTriangle,
      title: "Poor User Experience",
      description: "Apps that are difficult to navigate, slow, or crash frequently",
    },
    {
      icon: Monitor,
      title: "Platform Fragmentation",
      description: "Need to develop separate apps for iOS and Android increases costs",
    },
    {
      icon: Clock,
      title: "Long Development Time",
      description: "Extended development cycles delay time-to-market and competitive advantage",
    },
    {
      icon: TrendingUp,
      title: "High Development Costs",
      description: "Building native apps for multiple platforms requires significant investment",
    },
  ]

  const solutions = [
    {
      icon: CheckCircle,
      title: "Native iOS Development",
      description: "High-performance apps built specifically for Apple's ecosystem using Swift",
    },
    {
      icon: CheckCircle,
      title: "Native Android Development",
      description: "Robust applications optimized for Android devices using Kotlin/Java",
    },
    {
      icon: CheckCircle,
      title: "Cross-Platform Development",
      description: "Single codebase apps that work on both iOS and Android using React Native",
    },
    {
      icon: CheckCircle,
      title: "App Security & Testing",
      description: "Comprehensive security implementation and rigorous testing across devices",
    },
  ]

  const benefits = [
    {
      icon: Users,
      title: "Increased User Engagement",
      description: "Mobile apps see 3x higher engagement than mobile websites",
    },
    {
      icon: TrendingUp,
      title: "Revenue Growth",
      description: "Apps generate 6x more conversions than mobile websites",
    },
    {
      icon: Star,
      title: "Brand Loyalty",
      description: "80% of mobile time is spent in apps, building stronger connections",
    },
    {
      icon: Zap,
      title: "Offline Functionality",
      description: "Apps work without internet, providing uninterrupted user experience",
    },
  ]

  const faqs = [
    {
      question: "Should I build a native app or cross-platform app?",
      answer:
        "It depends on your requirements. Native apps offer better performance and platform-specific features, while cross-platform apps are more cost-effective and faster to develop. We'll help you choose the best approach.",
    },
    {
      question: "How long does mobile app development take?",
      answer:
        "Simple apps take 3-4 months, while complex apps with advanced features can take 6-12 months. We provide detailed timelines during the planning phase.",
    },
    {
      question: "Do you help with app store submission?",
      answer:
        "Yes, we handle the entire app store submission process for both Apple App Store and Google Play Store, including compliance with their guidelines.",
    },
    {
      question: "What about app maintenance and updates?",
      answer:
        "We offer comprehensive maintenance packages including bug fixes, OS updates, feature enhancements, and performance monitoring to keep your app running smoothly.",
    },
  ]

  return (
    <div className="relative overflow-hidden min-h-screen bg-background">
      <FloatingBlobs />

      {/* Hero Section */}
      <Section className="py-16 md:py-24 relative z-10" glass>
        <div className="text-center space-y-6 mb-16">
          <Badge
            variant="secondary"
            className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-fuchsia-500/20 to-pink-500/20 text-fuchsia-700 border-fuchsia-200"
          >
            📱 Mobile App Development
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text text-transparent">
            Build Powerful Mobile Apps That Users Love
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform your business with custom mobile applications that engage users, drive conversions, and build
            lasting customer relationships.
          </p>
        </div>

        {/* Challenges Section */}
        <div className="space-y-8 mb-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Common Mobile App Challenges</h2>
            <p className="text-lg text-muted-foreground">Issues that prevent businesses from succeeding in mobile</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {challenges.map((challenge, index) => (
              <Card
                key={index}
                className="glass-card group hover:scale-105 transition-all duration-300 border-fuchsia-100/20"
              >
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-red-500/10">
                      <challenge.icon className="h-6 w-6 text-red-500" />
                    </div>
                    <CardTitle className="text-lg font-semibold text-foreground">{challenge.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{challenge.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Solutions Section */}
        <div className="space-y-8 mb-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Mobile Solutions</h2>
            <p className="text-lg text-muted-foreground">Comprehensive mobile development services for every need</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {solutions.map((solution, index) => (
              <Card
                key={index}
                className="glass-card group hover:scale-105 transition-all duration-300 border-fuchsia-100/20"
              >
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-fuchsia-500/10 to-pink-500/10">
                      <solution.icon className="h-6 w-6 text-fuchsia-600" />
                    </div>
                    <CardTitle className="text-lg font-semibold text-foreground">{solution.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{solution.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="space-y-8 mb-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Benefits You'll Experience</h2>
            <p className="text-lg text-muted-foreground">Why mobile apps are essential for business growth</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="glass-card text-center group hover:scale-105 transition-all duration-300 border-fuchsia-100/20"
              >
                <CardHeader>
                  <benefit.icon className="h-12 w-12 text-fuchsia-600 mx-auto mb-4" />
                  <CardTitle className="text-xl font-bold text-foreground">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Case Study Section */}
        <Section glass className="py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Case Study: Fitness App Success</h2>
              <p className="text-lg text-muted-foreground">
                How we helped a fitness startup reach 100K+ downloads and 4.8-star rating
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
              <div>
                <Image
                  src="/images/3d-shopping-online-app.webp"
                  alt="3D animation of person shopping online with mobile app"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Challenge</h3>
                  <p className="text-muted-foreground">
                    A fitness startup needed a comprehensive mobile app that could track workouts, provide personalized
                    training plans, and build a community of fitness enthusiasts.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Solution</h3>
                  <p className="text-muted-foreground">
                    We developed a cross-platform app with AI-powered workout recommendations, social features, and
                    seamless wearable device integration using React Native.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              <Card className="glass-card text-center">
                <CardHeader>
                  <Download className="h-8 w-8 text-green-500 mx-auto mb-2" />
                  <CardTitle className="text-2xl font-bold text-green-500">100K+</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">App Downloads</p>
                </CardContent>
              </Card>
              <Card className="glass-card text-center">
                <CardHeader>
                  <Star className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                  <CardTitle className="text-2xl font-bold text-blue-500">4.8</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">App Store Rating</p>
                </CardContent>
              </Card>
              <Card className="glass-card text-center">
                <CardHeader>
                  <Users className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                  <CardTitle className="text-2xl font-bold text-purple-500">85%</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">User Retention</p>
                </CardContent>
              </Card>
              <Card className="glass-card text-center">
                <CardHeader>
                  <TrendingUp className="h-8 w-8 text-orange-500 mx-auto mb-2" />
                  <CardTitle className="text-2xl font-bold text-orange-500">8 Months</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Development Time</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </Section>

        {/* FAQ Section */}
        <Section className="py-16">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-muted-foreground">Get answers to common mobile app development questions</p>
            </div>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index} className="glass-card border-fuchsia-100/20">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold text-foreground">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </Section>

        {/* CTA Section */}
        <Section glass className="py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">Ready to Build Your Mobile App?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's create a mobile app that engages users and drives business growth. Get started with a free
              consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-fuchsia-600 to-pink-600 hover:from-fuchsia-700 hover:to-pink-700 text-white"
              >
                Get Free App Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-fuchsia-200 text-fuchsia-600 hover:bg-fuchsia-50 bg-transparent"
              >
                View Our Portfolio
              </Button>
            </div>
          </div>
        </Section>
      </Section>
    </div>
  )
}
