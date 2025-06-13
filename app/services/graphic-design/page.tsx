import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Palette, ImageIcon, FileText, Layers, ArrowRight, CheckCircle, Sparkles, Eye } from "lucide-react"
import { Star } from "lucide-react"

export default function GraphicDesignPage() {
  return (
    <div className="min-h-screen bg-transparent text-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#0D0D0D] via-[#2e0034] to-[#0D0D0D]">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-[#F472B6] text-white hover:bg-[#F472B6]/90">🎨 Creative Design</Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Professional Design That <span className="text-[#F472B6]">Builds Trust</span>, Drives Sales, and Grows
                Your Brand
              </h1>
              <div className="flex items-center mb-4">
                <Star className="h-5 w-5 text-yellow-500 mr-1" />
                <Star className="h-5 w-5 text-yellow-500 mr-1" />
                <Star className="h-5 w-5 text-yellow-500 mr-1" />
                <Star className="h-5 w-5 text-yellow-500 mr-1" />
                <Star className="h-5 w-5 text-yellow-500 mr-1" />
                <span className="text-gray-300 ml-2">4.9★ Client Rating</span>
              </div>
              <p className="text-xl text-gray-300 mb-4">
                High-quality graphic design services for small businesses and e-commerce brands.
              </p>
              <p className="text-xl text-gray-300 mb-8">
                We create designs that capture attention, communicate your message, and drive engagement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-[#F472B6] hover:bg-[#F472B6]/90 text-white">
                  Start Design Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#FCFBCF] text-[#FCFBCF] hover:bg-[#FCFBCF] hover:text-black"
                >
                  View Design Portfolio
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-[#F472B6]/20 to-[#2e0034] p-8 rounded-lg">
                <Palette className="h-32 w-32 text-[#F472B6] mx-auto mb-6" />
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#FCFBCF] mb-2">500+</div>
                  <div className="text-[#F472B6] font-semibold">Designs Created</div>
                  <div className="text-sm text-gray-400 mt-2">Across all industries and formats</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Is This You? Problem Section */}
      <section className="py-20 bg-transparent">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-[#FCFBCF]">Is This You?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Common design problems faced by small businesses and e-commerce brands
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-transparent border-[#F472B6]/30 text-center">
              <CardContent className="p-8">
                <div className="text-2xl font-bold text-[#F472B6] mb-4">DIY Designs</div>
                <p className="text-gray-400">
                  Your DIY designs look unprofessional and don't reflect your brand's quality.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-transparent border-[#F472B6]/30 text-center">
              <CardContent className="p-8">
                <div className="text-2xl font-bold text-[#F472B6] mb-4">Inconsistent Branding</div>
                <p className="text-gray-400">You have inconsistent branding across your marketing materials.</p>
              </CardContent>
            </Card>
            <Card className="bg-transparent border-[#F472B6]/30 text-center">
              <CardContent className="p-8">
                <div className="text-2xl font-bold text-[#F472B6] mb-4">Poor Conversion</div>
                <p className="text-gray-400">Your marketing materials don't convert prospects into customers.</p>
              </CardContent>
            </Card>
            <Card className="bg-transparent border-[#F472B6]/30 text-center">
              <CardContent className="p-8">
                <div className="text-2xl font-bold text-[#F472B6] mb-4">Lack of Time</div>
                <p className="text-gray-400">You don't have the time to create quality graphics.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Solution Process */}
      <section className="py-20 bg-gradient-to-r from-[#0D0D0D] via-[#2e0034] to-[#0D0D0D]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-[#FCFBCF]">Our Solution</h2>
            <p className="text-xl text-gray-300">Our streamlined design process</p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {[
              {
                step: "01",
                title: "Brand Discovery",
                description: "We dive deep into your brand, understanding your values, target audience, and goals.",
              },
              {
                step: "02",
                title: "Creative Strategy",
                description: "We develop a creative strategy that aligns with your brand and marketing objectives.",
              },
              {
                step: "03",
                title: "Design Creation",
                description: "Our talented designers bring your vision to life with stunning visuals.",
              },
              {
                step: "04",
                title: "Revisions",
                description: "We refine the designs based on your feedback, ensuring your complete satisfaction.",
              },
              {
                step: "05",
                title: "Final Delivery",
                description: "We deliver the final artwork in all necessary formats for seamless implementation.",
              },
            ].map((phase, index) => (
              <Card key={index} className="bg-transparent border-[#F472B6]/30 text-center">
                <CardContent className="p-8">
                  <div className="text-3xl font-bold text-[#F472B6] mb-4">{phase.step}</div>
                  <h3 className="text-xl font-semibold text-[#FCFBCF] mb-4">{phase.title}</h3>
                  <p className="text-gray-400">{phase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-transparent">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-[#FCFBCF]">Complete Graphic Design Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From brand identity to marketing materials, we create designs that tell your story and drive results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Sparkles,
                title: "Brand Identity Design",
                description: "Create memorable brand identities that establish trust and recognition in your market",
                features: [
                  "Logo design",
                  "Brand guidelines",
                  "Color palettes",
                  "Typography systems",
                  "Brand applications",
                  "Style guides",
                ],
              },
              {
                icon: FileText,
                title: "Marketing Materials",
                description: "Design compelling marketing collateral that converts prospects into customers",
                features: [
                  "Brochures & flyers",
                  "Business cards",
                  "Presentations",
                  "Trade show displays",
                  "Digital ads",
                  "Social media graphics",
                ],
              },
              {
                icon: ImageIcon,
                title: "Digital Graphics",
                description: "Eye-catching digital designs optimized for web, social media, and online platforms",
                features: [
                  "Website graphics",
                  "Social media posts",
                  "Banner ads",
                  "Email templates",
                  "Infographics",
                  "Digital illustrations",
                ],
              },
              {
                icon: Layers,
                title: "Print Design",
                description: "Professional print materials that make a lasting impression in the physical world",
                features: [
                  "Annual reports",
                  "Catalogs",
                  "Packaging design",
                  "Signage",
                  "Posters",
                  "Direct mail pieces",
                ],
              },
              {
                icon: Eye,
                title: "UI/UX Graphics",
                description: "User interface elements and graphics that enhance digital experiences",
                features: [
                  "Icon design",
                  "UI elements",
                  "App graphics",
                  "Web illustrations",
                  "Interactive graphics",
                  "User interface kits",
                ],
              },
              {
                icon: Palette,
                title: "Creative Consulting",
                description: "Strategic creative guidance to ensure your visual communications achieve maximum impact",
                features: [
                  "Creative strategy",
                  "Brand positioning",
                  "Visual storytelling",
                  "Design audits",
                  "Creative direction",
                  "Brand evolution",
                ],
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-[#2e0034] to-[#0D0D0D] border-[#F472B6]/30 hover:border-[#F472B6] transition-all duration-300"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-[#F472B6]/20 rounded-lg flex items-center justify-center mb-6">
                    <service.icon className="h-8 w-8 text-[#F472B6]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#FCFBCF] mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-[#F472B6] mr-2 flex-shrink-0" />
                        <span className="text-gray-400">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-transparent">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-[#FCFBCF]">Real Results</h2>
            <p className="text-xl text-gray-300">See how our design services have helped other businesses</p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8">
            <Card className="bg-transparent border-[#F472B6]/30 text-center">
              <CardContent className="p-8">
                <div className="text-2xl font-bold text-[#FCFBCF] mb-4">Lisa Rodriguez</div>
                <div className="text-xl font-semibold text-[#F472B6] mb-2">Boutique Fashion</div>
                <p className="text-gray-400 mb-4">
                  "Their designs completely transformed our brand. We saw a 200% increase in social media engagement and
                  a 150% boost in sales conversions!"
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Design Pricing Packages */}
      <section className="py-20 bg-gradient-to-r from-[#0D0D0D] via-[#2e0034] to-[#0D0D0D]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-[#FCFBCF]">Design Pricing Packages</h2>
            <p className="text-xl text-gray-300">Choose the package that best suits your needs</p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="bg-transparent border-[#F472B6]/30 text-center">
              <CardContent className="p-8">
                <div className="text-2xl font-bold text-[#FCFBCF] mb-4">Brand Starter</div>
                <div className="text-xl font-semibold text-[#F472B6] mb-2">$1,997 one-time</div>
                <p className="text-gray-400">
                  Perfect for new businesses looking to establish a strong brand identity.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-transparent border-[#F472B6]/30 text-center">
              <CardContent className="p-8">
                <div className="text-2xl font-bold text-[#FCFBCF] mb-4">Marketing Package</div>
                <div className="text-xl font-semibold text-[#F472B6] mb-2">$2,997/mo</div>
                <p className="text-gray-400">
                  Our most popular package, designed to boost your marketing efforts and drive sales.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-transparent border-[#F472B6]/30 text-center">
              <CardContent className="p-8">
                <div className="text-2xl font-bold text-[#FCFBCF] mb-4">Complete Brand System</div>
                <div className="text-xl font-semibold text-[#F472B6] mb-2">$4,997 one-time</div>
                <p className="text-gray-400">
                  A comprehensive solution for businesses seeking a complete brand overhaul and consistent visual
                  identity.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-20 bg-gradient-to-r from-[#0D0D0D] via-[#2e0034] to-[#0D0D0D]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-[#FCFBCF]">Our Creative Process</h2>
            <p className="text-xl text-gray-300">A systematic approach that ensures exceptional design outcomes</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "Understanding your brand, audience, and objectives to inform our creative direction",
              },
              {
                step: "02",
                title: "Concept",
                description: "Developing initial design concepts and exploring creative possibilities",
              },
              {
                step: "03",
                title: "Design",
                description: "Creating polished designs with attention to detail and brand consistency",
              },
              {
                step: "04",
                title: "Delivery",
                description: "Final artwork delivery with all necessary files and formats for implementation",
              },
            ].map((phase, index) => (
              <Card key={index} className="bg-transparent border-[#F472B6]/30 text-center">
                <CardContent className="p-8">
                  <div className="text-3xl font-bold text-[#F472B6] mb-4">{phase.step}</div>
                  <h3 className="text-xl font-semibold text-[#FCFBCF] mb-4">{phase.title}</h3>
                  <p className="text-gray-400">{phase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-transparent">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-[#FCFBCF]">Design Impact</h2>
            <p className="text-xl text-gray-300">Measurable results from our graphic design projects</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { metric: "300%", label: "Brand Recognition", description: "Average increase in brand awareness" },
              {
                metric: "85%",
                label: "Engagement Boost",
                description: "Improvement in marketing material performance",
              },
              { metric: "500+", label: "Projects Completed", description: "Successful design deliveries" },
              { metric: "48hr", label: "Turnaround", description: "Average project completion time" },
            ].map((result, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-[#F472B6]/10 to-[#2e0034] border-[#F472B6]/30 text-center"
              >
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-[#F472B6] mb-2">{result.metric}</div>
                  <div className="text-lg font-semibold text-[#FCFBCF] mb-2">{result.label}</div>
                  <div className="text-sm text-gray-400">{result.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Design-Specific FAQ Section */}
      <section className="py-20 bg-gradient-to-r from-[#0D0D0D] via-[#2e0034] to-[#0D0D0D]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-[#FCFBCF]">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-300">Answers to common questions about our design services</p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8">
            <Card className="bg-transparent border-[#F472B6]/30">
              <CardContent className="p-8">
                <div className="text-xl font-bold text-[#FCFBCF] mb-4">What types of design services do you offer?</div>
                <p className="text-gray-400">
                  We offer a wide range of design services, including brand identity design, marketing materials,
                  digital graphics, print design, UI/UX graphics, and creative consulting.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-transparent border-[#F472B6]/30">
              <CardContent className="p-8">
                <div className="text-xl font-bold text-[#FCFBCF] mb-4">
                  How long does a design project typically take?
                </div>
                <p className="text-gray-400">
                  The timeline for a design project varies depending on the scope and complexity of the project. We will
                  provide you with a detailed timeline during the initial consultation.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-transparent border-[#F472B6]/30">
              <CardContent className="p-8">
                <div className="text-xl font-bold text-[#FCFBCF] mb-4">What is your design process?</div>
                <p className="text-gray-400">
                  Our design process involves brand discovery, creative strategy, design creation, revisions, and final
                  delivery. We work closely with you throughout the process to ensure your complete satisfaction.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#0D0D0D] via-[#2e0034] to-[#0D0D0D]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to <span className="text-[#F472B6]">Elevate</span> Your Visual Identity?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's create stunning designs that capture attention, communicate your message, and drive business results
          </p>
          <Button size="lg" className="bg-[#F472B6] hover:bg-[#F472B6]/90 text-white font-semibold">
            Start Your Design Project
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  )
}
