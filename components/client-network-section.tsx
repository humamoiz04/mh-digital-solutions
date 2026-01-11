"use client"

import Image from "next/image"
import { Section } from "@/components/Section"

export function ClientNetworkSection() {
  const clients = [
    { name: "Prestige Marine & Auto Care", logo: "/images/prestige-20marine-20logo.webp" },
    { name: "Platinum City Cleaning (UK)", logo: "/images/client-platinum-cleaning.webp" },
    { name: "Cesar Car Wash", logo: "/images/cesar-car-wash.webp" },
    { name: "Rags2Riches", logo: "/images/client-rags2riches.webp" },
    { name: "Squeaky Clean", logo: "/images/client-squeaky-clean.webp" },
    { name: "Platinum Builders", logo: "/images/client-platinum-builders.webp" },
    { name: "Said's Plumbing", logo: "/images/client-saids-plumbing.webp" },
    {
      name: "Nebraska Auto Detailing",
      logo: "/images/nebraska-20auto-20detailing.webp",
    },
    {
      name: "Luxury Finesse Detail",
      logo: "/images/logo-luxury-finesse.webp",
    },
    { name: "Exclusive Detail", logo: "/images/exclusive-auto-detailing.webp" },
  ]

  return (
    <Section className="py-12 md:py-20 text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Our Valued Client Network</h2>
      <p className="text-lg text-slate-300 mb-12">
        We've had the privilege of working with a diverse range of clients, helping them achieve their digital goals.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-8 items-center justify-center">
        {clients.map((client, index) => (
          <div key={index} className="flex justify-center items-center">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-[#e49273] to-[#f1cea7] p-1 flex items-center justify-center shadow-md hover:shadow-lg transition-shadow">
              <div className="w-full h-full rounded-full bg-slate-800 p-3 flex items-center justify-center">
                <Image
                  src={client.logo || "/placeholder.svg"}
                  alt={client.name}
                  width={150}
                  height={80}
                  className="object-contain grayscale hover:grayscale-0 transition-all duration-300 max-w-full max-h-full"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
