"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import ThreeDIcon from "@/components/ui/three-d-icon"

export function WhatsAppWidget() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "+17075822255"
    const message = "Hi! I'm interested in your digital marketing services. Can you help me?"
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div
      className="fixed z-50"
      style={{
        left: "1rem",
        bottom: "calc(env(safe-area-inset-bottom, 0px) + var(--chat-offset, 88px))",
      }}
    >
      <Button
        onClick={handleWhatsAppClick}
        className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
        title="Chat on WhatsApp"
        aria-label="Chat on WhatsApp"
      >
        <ThreeDIcon icon={MessageCircle} size={22} variant="teal" />
      </Button>
    </div>
  )
}
