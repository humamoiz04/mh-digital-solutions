import Image from "next/image"
import { Section } from "@/components/Section"

export function ClientNetworkSection() {
  const clients = [
    { name: "Platinum City Cleaning (UK)", logo: "/images/client-platinum-cleaning.webp" },
    { name: "Cesar Car Wash", logo: "/images/cesar-car-wash.webp" },
    { name: "Rags2Riches", logo: "/images/client-rags2riches.webp" },
    { name: "Squeaky Clean", logo: "/images/client-squeaky-clean.webp" },
    { name: "Platinum Builders", logo: "/images/client-platinum-builders.webp" },
    { name: "Said's Plumbing", logo: "/images/client-saids-plumbing.webp" },
    { name: "Green Leaf", logo: "/images/logo-green-leaf.webp" },
    { name: "Orange Circle", logo: "/images/logo-orange-circle.webp" },
  ]

  return (
    <Section className="py-12 md:py-20 text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Our Valued Client Network</h2>
      <p className="text-lg text-muted-foreground mb-12">
        We've had the privilege of working with a diverse range of clients, helping them achieve their digital goals.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-8 items-center justify-center">
        {clients.map((client, index) => (
          <div key={index} className="flex justify-center items-center p-4 bg-card rounded-lg shadow-sm glass-card">
            <Image
              src={client.logo || "/placeholder.svg"}
              alt={client.name}
              width={150}
              height={80}
              objectFit="contain"
              className="grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </Section>
  )
}
