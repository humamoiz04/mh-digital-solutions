"use client"

import { Button } from "@/components/ui/button"

function WhatsAppLogo({ size = 20, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 448 512"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <path
        fill="currentColor"
        d="M380.9 97.1C339 55.1 283.2 32 224.3 32 106.1 32 10.7 127.4 10.7 245.6c0 37.7 9.9 74.5 28.6 107L0 480l129.7-38.1c30.5 16.7 65 25.5 100.3 25.6h.1c118.2 0 213.6-95.4 213.6-213.6 0-58.9-23.1-114.7-65.1-156.8zM224.1 438.7h-.1c-31.8 0-62.9-8.5-90-24.6l-6.4-3.8-77 22.6 23.4-75.1-4.1-6.6c-17.9-28.8-27.3-62.1-27.3-96.6 0-100 81.4-181.4 181.5-181.4 48.5 0 94.1 18.9 128.4 53.2 34.2 34.2 53 79.8 53 128.3 0 100.1-81.5 181.4-181.4 181.4zm101.6-138.6c-5.6-2.8-33.2-16.4-38.3-18.3-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18.3-17.5 22-3.2 3.7-6.4 4.2-12 1.4-5.6-2.8-23.7-8.7-45.2-27.8-16.7-14.9-27.9-33.3-31.2-38.9-3.2-5.6-.3-8.6 2.4-11.3 2.5-2.5 5.6-6.4 8.4-9.6 2.8-3.2 3.7-5.6 5.6-9.3 1.9-3.7.9-7-0.5-9.8-1.4-2.8-12.5-30.1-17.1-41.2-4.7-13.1-9.1-9.4-12.5-9.6-3.2-.2-7-.2-10.8-.2s-9.8 1.4-14.9 7c-5.1 5.6-19.5 19.1-19.5 46.6s20 54 22.8 57.7c2.8 3.7 39.2 59.8 95 83.9 13.3 5.7 23.7 9.1 31.8 11.7 13.4 4.2 25.6 3.6 35.3 2.2 10.8-1.6 33.2-13.5 37.9-26.6 4.7-13.1 4.7-24.3 3.3-26.6-1.4-2.3-5.1-3.7-10.7-6.5z"
      />
    </svg>
  )
}

export function WhatsAppWidget() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "+17072491222"
    const message = "Hi! I'm interested in your digital marketing services. Can you help me?"
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank", "noopener,noreferrer")
  }

  return (
    <div
      className="fixed z-50"
      style={{
        left: "1rem",
        bottom: "calc(env(safe-area-inset-bottom, 0px) + var(--chat-offset, 88px) + 60px + 68px)",
      }}
      role="region"
      aria-label="WhatsApp chat widget"
    >
      <Button
        onClick={handleWhatsAppClick}
        className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-green-300/50"
        style={{
          background: "linear-gradient(135deg, #25d366 0%, #128c7e 100%)",
          boxShadow: "0 20px 50px rgba(37, 211, 102, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
        }}
        title="Chat on WhatsApp"
        aria-label="Chat on WhatsApp - +1 (707) 249-1222"
      >
        <WhatsAppLogo size={20} className="text-white" />
      </Button>
    </div>
  )
}
