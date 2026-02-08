import { Section } from "@/components/Section"
import Image from "next/image" // Added Image import
import { TestimonialCarousel } from "@/components/testimonial-carousel"

export function TestimonialsSection() {
  return (
    <Section className="py-16 md:py-24">
      <h2 className="mb-12 text-center text-4xl font-bold text-foreground">What Our Clients Say</h2>
      <p className="text-lg text-muted-foreground text-center mb-12">
        Hear from businesses that have experienced remarkable growth and success with MH Digital Solution.
      </p>
      <div className="flex justify-center mb-12">
        <Image
          src="/images/design-mode/clutch-verified.webp"
          alt="Clutch Premier Verified Badge"
          width={120}
          height={120}
          className="object-contain"
          unoptimized
        />
      </div>
      <TestimonialCarousel />
    </Section>
  )
}
