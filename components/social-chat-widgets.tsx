"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle, Camera } from "lucide-react"
import ThreeDIcon from "@/components/ui/three-d-icon"

export function SocialChatWidgets() {
  const [showWidgets, setShowWidgets] = useState(false)

  return (
    <div
      className="fixed z-50 flex flex-col gap-2"
      style={{
        right: "5.5rem",
        bottom: "calc(env(safe-area-inset-bottom, 0px) + var(--chat-offset, 88px))",
      }}
      aria-label="Social chat shortcuts"
    >
      <Button
        onClick={() => window.open("https://m.me/mhdigitalsolution", "_blank", "noopener,noreferrer")}
        className="w-12 h-12 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-lg"
        aria-label="Chat on Facebook Messenger"
        title="Facebook Messenger"
      >
        {/* simple messenger glyph -> 3D icon */}
        <ThreeDIcon icon={MessageCircle} size={20} variant="blue" />
      </Button>

      <Button
        onClick={() => window.open("https://instagram.com/mhdigitalsolutions", "_blank", "noopener,noreferrer")}
        className="w-12 h-12 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-lg"
        aria-label="Open Instagram profile"
        title="Instagram"
      >
        <ThreeDIcon icon={Camera} size={20} variant="teal" />
      </Button>
    </div>
  )
}
