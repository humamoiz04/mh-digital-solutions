import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Zap, Target, Users, Award } from "lucide-react"

export default function TheMHEdgePage() {
  return (
    <div className="min-h-screen pt-20 bg-transparent">
      {/* Hero Section */}
      <section className="py-20 bg-transparent">
        <div className="container mx-auto px-6 text-center">
          <Badge className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white border-0 mb-6">
            ⚡ The MH Edge
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gray-900 dark:text-white">What Makes Us</span>
            <br />
            <span className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent">
              Different
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Discover the unique advantages that set M&H Digital Solutions apart and why leading businesses choose us
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://calendly.com/mhdigitalsolutionsus"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white font-semibold rounded-full hover:opacity-90 transition-opacity"
            >
              Experience The Difference
              <ArrowRight className="h-5 w-5 ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Unique Value Propositions */}
      <section className="py-20 bg-transparent">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-gray-900 dark:text-white">Our</span>{" "}
              <span className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent">
                Competitive Edge
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Zap,
                title: "Lightning-Fast Delivery",
                description: "Rapid implementation without compromising quality",
                metric: "50% Faster",
                color: "from-[#4F46E5] to-[#7C3AED]",
              },
              {
                icon: Target,
                title: "Precision Targeting",
                description: "Laser-focused strategies that hit the mark every time",
                metric: "98% Accuracy",
                color: "from-[#7C3AED] to-[#EC4899]",
              },
              {
                icon: Users,
                title: "Dedicated Team",
                description: "Expert professionals committed to your success",
                metric: "24/7 Support",
                color: "from-[#EC4899] to-[#F59E0B]",
              },
              {
                icon: Award,
                title: "Industry Recognition",
                description: "Award-winning solutions and certified expertise",
                metric: "Top 1% Agency",
                color: "from-[#F59E0B] to-[#4F46E5]",
              },
            ].map((advantage, index) => (
              <Card
                key={index}
                className="border-0 hover:shadow-lg transition-shadow text-center bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm"
              >
                <CardContent className="p-8">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${advantage.color} rounded-full flex items-center justify-center mx-auto mb-6`}
                  >
                    <advantage.icon className="h-8 w-8 text-white" />
                  </div>
                  <div
                    className={`text-2xl font-bold bg-gradient-to-r ${advantage.color} bg-clip-text text-transparent mb-2`}
                  >
                    {advantage.metric}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{advantage.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-transparent">
        <div className="container mx-auto px-6">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gray-900 dark:text-white">Ready to Experience</span>{" "}
              <span className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent">
                The MH Edge?
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of successful businesses that have transformed their operations with our proven methodology
            </p>
            <a
              href="https://calendly.com/mhdigitalsolutionsus"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white font-semibold rounded-full hover:opacity-90 transition-opacity"
            >
              Schedule Strategy Session
              <ArrowRight className="h-5 w-5 ml-2" />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
