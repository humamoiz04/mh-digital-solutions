import { Section } from "@/components/Section"
import { ContactForm } from "@/components/contact-form"
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import type { Metadata } from "next"
import { StructuredData } from "@/components/structured-data"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Contact MH Digital Solutions | Digital Marketing Agency in Austin, TX",
  description:
    "Get in touch with MH Digital Solutions — the leading digital marketing agency in Austin, Texas. Request a free consultation or custom quote today.",
  keywords:
    "Contact digital marketing agency Austin, Marketing consultation Austin Texas, Digital marketing quote Austin, MH Digital Solutions contact",
  alternates: {
    canonical: "https://www.mhdigitalsolution.com/contact",
  },
  openGraph: {
    title: "Contact MH Digital Solutions | Digital Marketing Agency in Austin, TX",
    description:
      "Get in touch with Austin's leading digital marketing agency. Free consultation available for Texas businesses.",
    url: "https://www.mhdigitalsolution.com/contact",
    images: [
      {
        url: "https://www.mhdigitalsolution.com/images/contact-austin-office.webp",
        width: 1200,
        height: 630,
        alt: "Contact MH Digital Solutions Austin office - Digital marketing consultation",
      },
    ],
  },
}

export default function ContactPage() {
  return (
    <div className="relative z-10">
      <StructuredData type="LocalBusiness" />
      <StructuredData
        type="Service"
        data={{
          serviceType: "Digital Marketing Consultation",
          description: "Free digital marketing consultation for Austin businesses",
        }}
      />

      <Section className="py-16 md:py-24">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-fuchsia-100 text-fuchsia-800 hover:bg-fuchsia-200">Get In Touch</Badge>
          <h1 className="text-4xl font-bold text-foreground mb-4 gradient-text">
            Contact MH Digital Solutions in Austin, Texas
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your business with digital marketing excellence? Get in touch with Austin's leading
            digital marketing agency for a free consultation and custom strategy session.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6 text-center gradient-text">
            Request a Free Marketing Consultation
          </h2>
          <p className="text-center text-muted-foreground mb-8 max-w-3xl mx-auto">
            Our Austin-based digital marketing experts are ready to help your Texas business grow. Schedule your
            complimentary strategy session and discover how we can accelerate your online success.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <ContactForm />
          </div>

          <div className="space-y-6">
            <Card className="glass-card p-6">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-3">
                  <MapPin className="h-7 w-7 text-primary" />
                  Our Austin Office
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Visit us at our main Austin office during business hours for in-person consultations.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0 text-muted-foreground">
                <p className="font-semibold">MH Digital Solutions</p>
                <p>Digital Marketing Hub</p>
                <p>Austin, TX 78701, USA</p>
                <p className="mt-2 text-sm text-fuchsia-600">📍 Serving Austin, Texas and surrounding areas</p>
              </CardContent>
            </Card>

            <Card className="glass-card p-6">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-3">
                  <Phone className="h-7 w-7 text-primary" />
                  Call Our Austin Team
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Speak directly with our Austin digital marketing specialists for immediate assistance.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0 text-muted-foreground">
                <p className="text-xl font-bold text-fuchsia-600">+1 (707) 249-1222</p>
                <div className="flex items-center gap-2 mt-2">
                  <Clock className="h-4 w-4 text-fuchsia-600" />
                  <span>Mon - Fri: 9:00 AM - 5:00 PM (CST)</span>
                </div>
                <p className="mt-2 text-sm">🕒 Austin business hours | Emergency support available</p>
              </CardContent>
            </Card>

            <Card className="glass-card p-6">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-3">
                  <Mail className="h-7 w-7 text-primary" />
                  Email Our Experts
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Send us an email and our Austin team will respond within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0 text-muted-foreground">
                <p className="text-lg font-semibold text-fuchsia-600">info@mhdigitalsolution.com</p>
                <p className="mt-2">⚡ We aim to respond within 4 business hours</p>
                <p className="text-sm">📧 For urgent matters, please call our Austin office</p>
              </CardContent>
            </Card>

            <Card className="glass-card p-6">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-3">
                  <MessageCircle className="h-7 w-7 text-primary" />
                  WhatsApp Direct
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Connect instantly with our Austin digital marketing team via WhatsApp.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0 text-muted-foreground">
                <p className="text-lg font-semibold text-green-600">+1 (707) 249-1222</p>
                <p className="mt-2">💬 Instant messaging for quick questions</p>
                <p className="text-sm">🚀 Perfect for Austin businesses on-the-go</p>
              </CardContent>
            </Card>

            <div className="bg-gradient-to-r from-fuchsia-50 to-pink-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-foreground mb-3 gradient-text">
                Why Choose MH Digital Solutions in Austin?
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-fuchsia-600 font-bold">✓</span>
                  <span>Local Austin expertise with deep Texas market knowledge</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-fuchsia-600 font-bold">✓</span>
                  <span>500+ successful client partnerships across Texas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-fuchsia-600 font-bold">✓</span>
                  <span>Free consultation and custom strategy development</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-fuchsia-600 font-bold">✓</span>
                  <span>Proven ROI results for Austin businesses</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Ready to Grow Your Austin Business?</h3>
            <p className="text-lg mb-6">
              Join 500+ successful Texas businesses that trust MH Digital Solutions for their digital marketing needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+17072491222"
                className="bg-white text-fuchsia-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
              >
                📞 Call Now: +1 (707) 249-1222
              </a>
              <a
                href="https://calendly.com/mhdigitalsolutionsus"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-fuchsia-600 transition-colors"
              >
                📅 Schedule Free Consultation
              </a>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}
