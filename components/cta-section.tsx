import { Section } from "@/components/Section"
import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, Calendar } from "lucide-react"
import Link from "next/link"

export function CtaSection() {
  return (
    <Section className="py-16 md:py-24 text-center">
      <div className="glass-card p-8 md:p-12 rounded-lg shadow-lg max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-foreground mb-4 gradient-text">Ready to Transform Your Business?</h2>
        <p className="text-lg text-muted-foreground mb-8">
          Let's discuss how our expert digital solutions can help you achieve your goals. Contact us today for a free
          consultation.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/contact" aria-label="Go to contact page">
            <Button className="gradient-button px-8 py-4 text-xl hover:scale-105 transition-transform">
              <Calendar className="h-5 w-5 mr-2" />
              Get Free Consultation
            </Button>
          </Link>

          <a href="tel:+17072491222" aria-label="Call us at +17072491222">
            <Button
              variant="outline"
              className="px-8 py-4 text-xl border-2 border-fuchsia-500 text-fuchsia-500 hover:bg-fuchsia-500 hover:text-white transition-all hover:scale-105 bg-transparent"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call Now: +17072491222
            </Button>
          </a>

          <a
            href="https://wa.me/17072491222?text=Hi%20MH%20Digital%20Solutions%2C%20I%27d%20like%20a%20free%20consultation."
            target="_blank"
            rel="nofollow noopener noreferrer"
            aria-label="Open WhatsApp chat with MH Digital Solutions"
          >
            <Button
              variant="outline"
              className="px-8 py-4 text-xl border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition-all hover:scale-105 bg-transparent"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              WhatsApp
            </Button>
          </a>
        </div>

        <div className="mt-6 text-sm text-muted-foreground">
          <p>
            🎉 <span className="text-fuchsia-500 font-semibold">Limited Time:</span> 70% OFF Consultation - Only $15
            (Reg. $50)
          </p>
        </div>
      </div>
    </Section>
  )
}

export { CtaSection as CTASection }
