import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, CreditCard, Truck, BarChart3, ArrowRight, CheckCircle, Users, Globe } from "lucide-react"
import ScrollAnimation from "@/components/scroll-animation"
import Image from "next/image"

export default function ECommercePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <ScrollAnimation>
        <section className="py-20 bg-transparent">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="bg-gradient-to-r from-[#00F5FF] to-[#8B5CF6] text-white border-0 mb-6">
                  🛒 E-commerce Solutions
                </Badge>
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-[#00F5FF] to-[#8B5CF6] bg-clip-text text-transparent">
                    Build E-commerce Stores
                  </span>
                  <br />
                  <span className="text-gray-900 dark:text-white">
                    That Convert Visitors Into Customers and Generate $1M+ Revenue
                  </span>
                </h1>
                <div className="flex items-center mb-4">
                  <span className="text-gray-900 dark:text-white font-semibold mr-2">4.9★ Rating</span>
                </div>
                <div className="flex items-center mb-4">
                  <span className="text-gray-900 dark:text-white font-semibold mr-2">
                    $50M+ E-commerce Revenue Generated
                  </span>
                </div>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                  Targeting online retailers and product businesses, we build powerful online stores that maximize sales
                  with seamless shopping experiences, advanced features, and conversion optimization.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://calendly.com/mhdigitalsolutionsus"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="calendly-button pulse-animation"
                  >
                    Start E-commerce Project
                    <ArrowRight className="h-5 w-5" />
                  </a>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-[#00F5FF] text-[#00F5FF] hover:bg-[#00F5FF] hover:text-white rounded-full"
                  >
                    View Store Examples
                  </Button>
                </div>
              </div>
              <ScrollAnimation animation="fadeInRight" delay={200}>
                <div className="relative">
                  <Image
                    src="/images/online-store.png"
                    alt="E-commerce Solutions"
                    width={600}
                    height={500}
                    className="rounded-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#00F5FF]/20 to-transparent rounded-2xl"></div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Is This You? Section */}
      <ScrollAnimation>
        <section className="py-20 bg-transparent">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-gray-900 dark:text-white">Is This</span>{" "}
                <span className="bg-gradient-to-r from-[#00F5FF] to-[#8B5CF6] bg-clip-text text-transparent">You?</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Common e-commerce problems we solve
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              <Card className="glass border-0 text-center hover-lift">
                <CardContent className="p-8">
                  <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Low conversion rates killing profits
                  </div>
                </CardContent>
              </Card>
              <Card className="glass border-0 text-center hover-lift">
                <CardContent className="p-8">
                  <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Cart abandonment eating sales
                  </div>
                </CardContent>
              </Card>
              <Card className="glass border-0 text-center hover-lift">
                <CardContent className="p-8">
                  <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Mobile experience driving customers away
                  </div>
                </CardContent>
              </Card>
              <Card className="glass border-0 text-center hover-lift">
                <CardContent className="p-8">
                  <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    No clear sales funnel strategy
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Our Solution Section */}
      <ScrollAnimation>
        <section className="py-20 bg-transparent">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-gray-900 dark:text-white">Our</span>{" "}
                <span className="bg-gradient-to-r from-[#00F5FF] to-[#8B5CF6] bg-clip-text text-transparent">
                  Solution
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Our proven e-commerce process
              </p>
            </div>

            <div className="grid md:grid-cols-5 lg:grid-cols-5 gap-8">
              <Card className="glass border-0 text-center hover-lift">
                <CardContent className="p-8">
                  <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Store Audit</div>
                </CardContent>
              </Card>
              <Card className="glass border-0 text-center hover-lift">
                <CardContent className="p-8">
                  <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">UX Design</div>
                </CardContent>
              </Card>
              <Card className="glass border-0 text-center hover-lift">
                <CardContent className="p-8">
                  <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Development</div>
                </CardContent>
              </Card>
              <Card className="glass border-0 text-center hover-lift">
                <CardContent className="p-8">
                  <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Optimization</div>
                </CardContent>
              </Card>
              <Card className="glass border-0 text-center hover-lift">
                <CardContent className="p-8">
                  <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Growth Scaling</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* E-commerce Services */}
      <ScrollAnimation>
        <section className="py-20 bg-transparent">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-gray-900 dark:text-white">Complete</span>{" "}
                <span className="bg-gradient-to-r from-[#00F5FF] to-[#8B5CF6] bg-clip-text text-transparent">
                  E-commerce Solutions
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                From store setup to advanced features, we create e-commerce experiences that drive sales and growth
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: ShoppingCart,
                  title: "Custom Store Development",
                  description: "Build unique e-commerce platforms tailored to your brand and business needs",
                  features: [
                    "Custom design and branding",
                    "Mobile-responsive layouts",
                    "Advanced product catalogs",
                    "User-friendly navigation",
                  ],
                  color: "from-[#00F5FF] to-[#8B5CF6]",
                },
                {
                  icon: CreditCard,
                  title: "Payment Integration",
                  description: "Secure payment processing with multiple gateway options for global reach",
                  features: [
                    "Multiple payment gateways",
                    "Secure checkout process",
                    "Subscription management",
                    "International payments",
                  ],
                  color: "from-[#8B5CF6] to-[#F472B6]",
                },
                {
                  icon: Truck,
                  title: "Inventory & Shipping",
                  description: "Comprehensive inventory management and shipping solutions",
                  features: [
                    "Real-time inventory tracking",
                    "Automated shipping calculations",
                    "Multi-warehouse support",
                    "Order fulfillment automation",
                  ],
                  color: "from-[#F472B6] to-[#FF7600]",
                },
                {
                  icon: BarChart3,
                  title: "Analytics & Reporting",
                  description: "Detailed insights into sales performance and customer behavior",
                  features: [
                    "Sales analytics dashboard",
                    "Customer behavior tracking",
                    "Conversion optimization",
                    "Performance reporting",
                  ],
                  color: "from-[#FF7600] to-[#00F5FF]",
                },
                {
                  icon: Users,
                  title: "Customer Management",
                  description: "Advanced customer relationship management and retention tools",
                  features: [
                    "Customer profiles and history",
                    "Loyalty programs",
                    "Email marketing integration",
                    "Customer support tools",
                  ],
                  color: "from-[#00F5FF] to-[#F472B6]",
                },
                {
                  icon: Globe,
                  title: "Multi-channel Selling",
                  description: "Expand your reach across multiple sales channels and marketplaces",
                  features: [
                    "Marketplace integrations",
                    "Social commerce",
                    "POS system integration",
                    "Omnichannel experience",
                  ],
                  color: "from-[#8B5CF6] to-[#00F5FF]",
                },
              ].map((service, index) => (
                <ScrollAnimation key={index} delay={index * 100}>
                  <Card className={`service-card-${(index % 6) + 1} border-0 hover-lift`}>
                    <CardContent className="p-8">
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6`}
                      >
                        <service.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{service.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-6">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm">
                            <CheckCircle className="h-4 w-4 text-[#00F5FF] mr-2 flex-shrink-0" />
                            <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Social Proof Section */}
      <ScrollAnimation>
        <section className="py-20 bg-transparent">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-gray-900 dark:text-white">Social</span>{" "}
                <span className="bg-gradient-to-r from-[#00F5FF] to-[#8B5CF6] bg-clip-text text-transparent">
                  Proof
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">Hear from our satisfied clients</p>
            </div>

            <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8">
              <Card className="glass border-0 text-center hover-lift">
                <CardContent className="p-8">
                  <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Client: Amanda Chen from Premium Home Goods
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Results: 350% increase in online revenue, 65% higher conversion rate
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Results Section */}
      <ScrollAnimation>
        <section className="py-20 bg-transparent">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-gray-900 dark:text-white">E-commerce</span>{" "}
                <span className="bg-gradient-to-r from-[#00F5FF] to-[#8B5CF6] bg-clip-text text-transparent">
                  Results
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">Real metrics from our e-commerce projects</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { metric: "350%", label: "Sales Increase", description: "Average revenue growth" },
                { metric: "65%", label: "Conversion Rate", description: "Higher than industry average" },
                { metric: "40%", label: "Cart Abandonment", description: "Reduction in abandoned carts" },
                { metric: "200%", label: "Mobile Sales", description: "Increase in mobile conversions" },
              ].map((result, index) => (
                <ScrollAnimation key={index} delay={index * 100}>
                  <Card className="glass border-0 text-center hover-lift">
                    <CardContent className="p-8">
                      <div className="text-4xl font-bold bg-gradient-to-r from-[#00F5FF] to-[#8B5CF6] bg-clip-text text-transparent mb-2">
                        {result.metric}
                      </div>
                      <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{result.label}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">{result.description}</div>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* E-commerce Pricing Section */}
      <ScrollAnimation>
        <section className="py-20 bg-transparent">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-gray-900 dark:text-white">E-commerce</span>{" "}
                <span className="bg-gradient-to-r from-[#00F5FF] to-[#8B5CF6] bg-clip-text text-transparent">
                  Pricing
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">Our e-commerce pricing plans</p>
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-8">
              <Card className="glass border-0 text-center hover-lift">
                <CardContent className="p-8">
                  <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Store Optimization</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">$3,997 one-time</div>
                </CardContent>
              </Card>
              <Card className="glass border-0 text-center hover-lift">
                <CardContent className="p-8">
                  <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Complete E-commerce Solution
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">$7,997 one-time - Most Popular</div>
                </CardContent>
              </Card>
              <Card className="glass border-0 text-center hover-lift">
                <CardContent className="p-8">
                  <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Enterprise E-commerce</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">$12,997 one-time</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* E-commerce FAQ Section */}
      <ScrollAnimation>
        <section className="py-20 bg-transparent">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-gray-900 dark:text-white">E-commerce</span>{" "}
                <span className="bg-gradient-to-r from-[#00F5FF] to-[#8B5CF6] bg-clip-text text-transparent">FAQ</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">Frequently Asked Questions</p>
            </div>

            <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8">
              <Card className="glass border-0 text-center hover-lift">
                <CardContent className="p-8">
                  <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Question 1</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Answer 1</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* CTA Section */}
      <ScrollAnimation>
        <section className="py-20 bg-transparent">
          <div className="container mx-auto px-6">
            <div className="glass rounded-3xl p-12 text-center relative overflow-hidden bg-transparent">
              <div className="absolute inset-0 bg-gradient-to-r from-[#00F5FF]/10 via-[#8B5CF6]/10 to-[#F472B6]/10"></div>
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="text-gray-900 dark:text-white">Ready to</span>{" "}
                  <span className="bg-gradient-to-r from-[#00F5FF] to-[#8B5CF6] bg-clip-text text-transparent">
                    Launch
                  </span>
                  <br />
                  <span className="text-gray-900 dark:text-white">Your Online Store?</span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                  Let's create an e-commerce platform that drives sales, engages customers, and grows your business
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://calendly.com/mhdigitalsolutionsus"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="calendly-button"
                  >
                    Start E-commerce Project
                    <ArrowRight className="h-5 w-5" />
                  </a>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-[#00F5FF] text-[#00F5FF] hover:bg-[#00F5FF] hover:text-white rounded-full"
                  >
                    View E-commerce Portfolio
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>
    </div>
  )
}
