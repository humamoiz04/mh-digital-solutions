import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Settings, BarChart3, ArrowRight, CheckCircle } from "lucide-react"
import Image from "next/image"

export default function OperationalServicesPage() {
  return (
    <div className="min-h-screen pt-20 bg-transparent">
      {/* Hero Section */}
      <section className="py-20 bg-transparent">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white border-0 mb-6">
                ⚙️ Operational Excellence
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent">
                  Streamline Operations,
                </span>
                <br />
                <span className="text-gray-900 dark:text-white">Maximize Performance</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Comprehensive operational services that optimize your business processes, reduce costs, and drive
                sustainable growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://calendly.com/mhdigitalsolutionsus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white font-semibold rounded-full hover:opacity-90 transition-opacity"
                >
                  Get Operations Audit
                  <ArrowRight className="h-5 w-5 ml-2" />
                </a>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/operational-services-hero.png"
                alt="Operational Services - Business Process Optimization"
                width={600}
                height={500}
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-transparent">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-gray-900 dark:text-white">Comprehensive</span>{" "}
              <span className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent">
                Operational Solutions
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Settings,
                title: "Process Optimization",
                description:
                  "Streamline your business processes to eliminate waste, reduce costs, and improve efficiency",
                features: ["Workflow analysis", "Automation implementation", "Standard procedures", "Quality control"],
              },
              {
                icon: BarChart3,
                title: "Performance Management",
                description: "Implement comprehensive systems to track, measure, and improve your business performance",
                features: ["KPI dashboards", "Performance benchmarking", "Real-time reporting", "Goal tracking"],
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="border-0 hover:shadow-lg transition-shadow bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] rounded-lg flex items-center justify-center mb-6">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#4F46E5] mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                      </li>
                    ))}
                  </ul>
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
              <span className="text-gray-900 dark:text-white">Ready to</span>{" "}
              <span className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent">
                Optimize Your Operations?
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Get a free operational audit and discover how we can streamline your processes and reduce costs
            </p>
            <a
              href="https://calendly.com/mhdigitalsolutionsus"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white font-semibold rounded-full hover:opacity-90 transition-opacity"
            >
              Get Operations Audit
              <ArrowRight className="h-5 w-5 ml-2" />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
