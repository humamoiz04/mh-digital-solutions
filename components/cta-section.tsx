import { Section } from "@/components/Section"
import { Button } from "@/components/ui/button"
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
        <Link href="/contact">
          <Button className="gradient-button px-8 py-4 text-xl">Get a Free Consultation</Button>
        </Link>
      </div>
    </Section>
  )
}

export { CtaSection as CTASection }
