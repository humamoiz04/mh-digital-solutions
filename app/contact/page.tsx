import { Section } from "@/components/Section"
import { ContactForm } from "@/components/contact-form"
import { MapPin, Phone, Mail } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export default function ContactPage() {
  return (
    <div className="relative z-10">
      <Section className="py-16 md:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4 gradient-text">Contact Us</h1>
          <p className="text-lg text-muted-foreground">
            We'd love to hear from you! Reach out to us with any questions or inquiries.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactForm />
          <div className="space-y-8">
            <Card className="glass-card p-6">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-3">
                  <MapPin className="h-7 w-7 text-primary gradient-icon" />
                  Our Office
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Visit us at our main office during business hours.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0 text-muted-foreground">
                <p>123 Digital St, Tech City</p>
                <p>TX 78701, USA</p>
              </CardContent>
            </Card>
            <Card className="glass-card p-6">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-3">
                  <Phone className="h-7 w-7 text-primary gradient-icon" />
                  Call Us
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Speak directly with our team for immediate assistance.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0 text-muted-foreground">
                <p>+1 (555) 123-4567</p>
                <p>Mon - Fri: 9:00 AM - 5:00 PM (EST)</p>
              </CardContent>
            </Card>
            <Card className="glass-card p-6">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-3">
                  <Mail className="h-7 w-7 text-primary gradient-icon" />
                  Email Us
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Send us an email and we'll respond as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0 text-muted-foreground">
                <p>info@mhdigitalsolution.com</p>
                <p>We aim to respond within 24 business hours.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>
    </div>
  )
}
