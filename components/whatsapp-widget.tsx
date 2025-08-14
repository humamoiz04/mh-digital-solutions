"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function WhatsAppWidget() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "+17075822255"
    const message = "Hi! I'm interested in your digital marketing services. Can you help me?"
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <Button
        onClick={handleWhatsAppClick}
        className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="h-6 w-6 text-white" />
      </Button>
    </div>
  )
}
