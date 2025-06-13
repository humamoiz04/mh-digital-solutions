import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  BarChart3,
  Users,
  Zap,
  Target,
  Brain,
  Settings,
  Search,
  Globe,
  ShoppingCart,
  Mail,
  FileText,
  PieChart,
  MessageSquare,
  Layers,
  Database,
  Shield,
  Code,
} from "lucide-react"
import SEOHead from "@/components/ui/seo-head"

export default function ToolsPage() {
  const tools = [
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Comprehensive analytics and reporting tools to track your business performance",
      features: ["Real-time data", "Custom reports", "Performance metrics", "ROI tracking"],
      color: "from-blue-500 to-cyan-500",
      price: "Free",
    },
    {
      icon: Users,
      title: "CRM System",
      description: "Manage customer relationships and streamline your sales process",
      features: ["Contact management", "Sales pipeline", "Email integration", "Task automation"],
      color: "from-purple-500 to-pink-500",
      price: "$29/month",
    },
    {
      icon: Zap,
      title: "Automation Suite",
      description: "Automate repetitive tasks and workflows to boost productivity",
      features: ["Workflow automation", "Email sequences", "Task scheduling", "Integration hub"],
      color: "from-orange-500 to-red-500",
      price: "$49/month",
    },
    {
      icon: Target,
      title: "Marketing Tools",
      description: "Complete marketing toolkit for campaigns and lead generation",
      features: ["Campaign management", "Lead tracking", "A/B testing", "Social media tools"],
      color: "from-green-500 to-blue-500",
      price: "$39/month",
    },
    {
      icon: Brain,
      title: "AI Assistant",
      description: "AI-powered assistant to help with content creation and decision making",
      features: ["Content generation", "Data analysis", "Predictive insights", "Smart recommendations"],
      color: "from-purple-600 to-blue-600",
      price: "$79/month",
    },
    {
      icon: Settings,
      title: "Project Management",
      description: "Organize projects, track progress, and collaborate with your team",
      features: ["Task management", "Team collaboration", "Time tracking", "Progress reports"],
      color: "from-gray-600 to-gray-800",
      price: "$19/month",
    },
    {
      icon: Search,
      title: "SEO Analyzer",
      description: "Analyze and optimize your website for better search engine rankings",
      features: ["Keyword research", "Competitor analysis", "On-page SEO", "Backlink monitoring"],
      color: "from-green-600 to-teal-600",
      price: "$49/month",
    },
    {
      icon: Globe,
      title: "Website Builder",
      description: "Create professional websites without coding knowledge",
      features: ["Drag-and-drop editor", "Responsive templates", "Custom domains", "SEO optimization"],
      color: "from-blue-600 to-indigo-600",
      price: "$24/month",
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Platform",
      description: "Build and manage your online store with powerful e-commerce tools",
      features: ["Product management", "Payment processing", "Inventory tracking", "Order fulfillment"],
      color: "from-red-500 to-pink-500",
      price: "$59/month",
    },
    {
      icon: Mail,
      title: "Email Marketing",
      description: "Create, send, and track email campaigns to engage your audience",
      features: ["Email templates", "Audience segmentation", "A/B testing", "Analytics"],
      color: "from-yellow-500 to-orange-500",
      price: "$29/month",
    },
    {
      icon: FileText,
      title: "Document Management",
      description: "Store, organize, and collaborate on documents securely",
      features: ["Cloud storage", "Version control", "Collaboration tools", "Document sharing"],
      color: "from-cyan-500 to-blue-500",
      price: "$19/month",
    },
    {
      icon: PieChart,
      title: "Financial Dashboard",
      description: "Track and analyze your business finances with comprehensive tools",
      features: ["Expense tracking", "Revenue analysis", "Financial forecasting", "Budget planning"],
      color: "from-emerald-500 to-green-500",
      price: "$39/month",
    },
    {
      icon: MessageSquare,
      title: "Team Communication",
      description: "Streamline team communication and collaboration",
      features: ["Chat channels", "Video meetings", "File sharing", "Task assignment"],
      color: "from-violet-500 to-purple-500",
      price: "$15/month",
    },
    {
      icon: Layers,
      title: "Content Management",
      description: "Manage and publish content across multiple channels",
      features: ["Content calendar", "Publishing workflow", "Asset management", "Analytics"],
      color: "from-amber-500 to-orange-500",
      price: "$34/month",
    },
    {
      icon: Database,
      title: "Data Management",
      description: "Collect, store, and analyze data for business insights",
      features: ["Data collection", "Custom databases", "Data visualization", "Export options"],
      color: "from-sky-500 to-blue-500",
      price: "$49/month",
    },
    {
      icon: Shield,
      title: "Security Suite",
      description: "Protect your business data and digital assets",
      features: ["Data encryption", "Access control", "Threat detection", "Compliance tools"],
      color: "from-red-600 to-rose-600",
      price: "$59/month",
    },
    {
      icon: Code,
      title: "Developer Tools",
      description: "Tools and resources for web and app development",
      features: ["Code repository", "Testing tools", "Deployment automation", "API management"],
      color: "from-slate-600 to-gray-800",
      price: "$39/month",
    },
  ]

  return (
    <>
      <SEOHead
        title="Business Tools & Software | M&H Digital Solutions"
        description="Explore our suite of business tools and software solutions designed to streamline operations, boost productivity, and drive growth for your business."
        keywords="business tools, software solutions, productivity tools, business software, analytics dashboard, CRM system, automation tools"
        canonicalUrl="https://www.mhdigitalsolution.com/tools"
      />

      <div className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
          <div className="container mx-auto px-6 text-center">
            <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0 mb-6">
              🛠️ Business Tools
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gray-900 dark:text-white">Powerful</span>{" "}
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Tools</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Streamline your business operations with our comprehensive suite of professional tools and platforms
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90 text-white">
                Explore All Tools
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-500 text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20"
              >
                Schedule Demo
              </Button>
            </div>
          </div>
        </section>

        {/* Tools Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">All-in-One Business Solution</h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Our comprehensive suite of tools is designed to help businesses of all sizes streamline operations,
                increase productivity, and drive growth.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tools.map((tool, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${tool.color} rounded-full flex items-center justify-center mb-6`}
                    >
                      <tool.icon className="h-8 w-8 text-white" />
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{tool.title}</h3>
                      <Badge className={`bg-gradient-to-r ${tool.color} text-white border-0`}>{tool.price}</Badge>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-6">{tool.description}</p>

                    <div className="space-y-2 mb-8">
                      {tool.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${tool.color}`}></div>
                          <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button className={`w-full bg-gradient-to-r ${tool.color} hover:opacity-90 text-white border-0`}>
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <Badge className="bg-gradient-to-r from-green-500 to-blue-500 text-white border-0 mb-4">
                Flexible Pricing
              </Badge>
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                Choose the Right Plan for Your Business
              </h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                We offer flexible pricing options to fit businesses of all sizes. All plans include access to our core
                features.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Starter Plan */}
              <Card className="border-0 shadow-lg relative">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Starter</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">Perfect for small businesses</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900 dark:text-white">$99</span>
                    <span className="text-gray-600 dark:text-gray-300">/month</span>
                  </div>
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                      <span className="text-gray-600 dark:text-gray-300">5 tools included</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                      <span className="text-gray-600 dark:text-gray-300">Up to 3 users</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                      <span className="text-gray-600 dark:text-gray-300">5GB storage</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                      <span className="text-gray-600 dark:text-gray-300">Email support</span>
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:opacity-90 text-white">
                    Get Started
                  </Button>
                </CardContent>
              </Card>

              {/* Professional Plan */}
              <Card className="border-0 shadow-xl relative transform scale-105 z-10">
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center py-1 text-sm font-medium">
                  Most Popular
                </div>
                <CardContent className="p-8 pt-12">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Professional</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">For growing businesses</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900 dark:text-white">$199</span>
                    <span className="text-gray-600 dark:text-gray-300">/month</span>
                  </div>
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-purple-500 mr-2"></div>
                      <span className="text-gray-600 dark:text-gray-300">All tools included</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-purple-500 mr-2"></div>
                      <span className="text-gray-600 dark:text-gray-300">Up to 10 users</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-purple-500 mr-2"></div>
                      <span className="text-gray-600 dark:text-gray-300">50GB storage</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-purple-500 mr-2"></div>
                      <span className="text-gray-600 dark:text-gray-300">Priority support</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-purple-500 mr-2"></div>
                      <span className="text-gray-600 dark:text-gray-300">Advanced analytics</span>
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 text-white">
                    Get Started
                  </Button>
                </CardContent>
              </Card>

              {/* Enterprise Plan */}
              <Card className="border-0 shadow-lg relative">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Enterprise</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">For large organizations</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900 dark:text-white">$399</span>
                    <span className="text-gray-600 dark:text-gray-300">/month</span>
                  </div>
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-orange-500 mr-2"></div>
                      <span className="text-gray-600 dark:text-gray-300">All tools included</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-orange-500 mr-2"></div>
                      <span className="text-gray-600 dark:text-gray-300">Unlimited users</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-orange-500 mr-2"></div>
                      <span className="text-gray-600 dark:text-gray-300">500GB storage</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-orange-500 mr-2"></div>
                      <span className="text-gray-600 dark:text-gray-300">24/7 dedicated support</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-orange-500 mr-2"></div>
                      <span className="text-gray-600 dark:text-gray-300">Custom integrations</span>
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:opacity-90 text-white">
                    Contact Sales
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Need a{" "}
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Custom Solution
              </span>
              ?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              We can build custom tools and integrations tailored specifically to your business needs
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90 text-white">
                Contact Our Team
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-500 text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20"
              >
                View Case Studies
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Frequently Asked Questions</h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Find answers to common questions about our business tools and software solutions.
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  question: "Can I try the tools before purchasing?",
                  answer:
                    "Yes, we offer a 14-day free trial on all our tools with no credit card required. You can test all features during the trial period.",
                },
                {
                  question: "Do you offer discounts for bundled tools?",
                  answer:
                    "Yes, we offer significant discounts when you subscribe to multiple tools. Our Professional and Enterprise plans include all tools at a discounted rate.",
                },
                {
                  question: "How secure is my business data?",
                  answer:
                    "We implement enterprise-grade security measures including encryption, regular security audits, and compliance with industry standards to ensure your data is always protected.",
                },
                {
                  question: "Can I integrate these tools with my existing systems?",
                  answer:
                    "Yes, our tools offer API access and pre-built integrations with popular business software. Custom integrations are available on the Enterprise plan.",
                },
                {
                  question: "What kind of support do you provide?",
                  answer:
                    "We offer email support for all plans, with priority support for Professional plans and 24/7 dedicated support for Enterprise customers. We also provide comprehensive documentation and video tutorials.",
                },
              ].map((faq, index) => (
                <Card key={index} className="border-0 shadow-md">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">{faq.question}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
