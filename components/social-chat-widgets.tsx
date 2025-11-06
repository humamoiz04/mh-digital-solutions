"use client"
import { Button } from "@/components/ui/button"

function MessengerLogo({ size = 20, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M18 3C9.716 3 3 9.206 3 16.8c0 4.21 2.16 7.965 5.54 10.35v5.85l5.064-2.79c1.3.36 2.684.54 4.096.54 8.284 0 15-6.206 15-13.8S26.284 3 18 3Z"
        fill="currentColor"
      />
      <path d="M11 21.2l5.8-3.8 3.2 3.2L25 14.8l-5.8 3.8-3.2-3.2L11 21.2Z" fill="#fff" />
    </svg>
  )
}

function InstagramLogo({ size = 20, className }: { size?: number; className?: string }) {
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
        d="M224 202a54 54 0 1 0 0 108 54 54 0 1 0 0-108zm124-41a27 27 0 1 0 0-54 27 27 0 1 0 0 54zM224 80c60.6 0 67.9.2 91.8 1.3 22.2 1 34.2 4.6 42.3 7.7 10.7 4.2 18.3 9.3 26.3 17.3 8 8 13 15.5 17.3 26.3 3.1 8.1 6.7 20 7.7 42.3 1.1 23.9 1.3 31.2 1.3 91.8s-.2 67.9-1.3 91.8c-1 22.2-4.6 34.2-7.7 42.3-10.7 4.2-18.3 9.3-26.3 17.3-8 8-15.5 13-26.3 17.3-8.1 3.1-20 6.7-42.3 7.7-23.9 1.1-31.2 1.3-91.8 1.3s-67.9-.2-91.8-1.3c-22.2-1-34.2-4.6-42.3-7.7-10.7-4.2-18.3-9.3-26.3-17.3-8-8-13-15.5-17.3-26.3-3.1-8.1-6.7-20-7.7-42.3C80.2 291.9 80 284.6 80 224s.2-67.9 1.3-91.8c1-22.2 4.6-34.2 7.7-42.3 4.2-10.7 9.3-18.3 17.3-26.3 8-8 15.5-13 26.3-17.3 8.1-3.1 20-6.7 42.3-7.7C156.1 80.2 163.4 80 224 80m0-48C162.7 32 154 32.2 129.6 33.4 105 34.6 88.1 38.3 72.3 44.4 55.7 50.7 41.9 59.1 28.7 72.3 15.5 85.5 7.1 99.3.9 115.9c-6.1 15.8-9.8 32.7-11 57.3C-1.3 197.6-1.5 206.3-1.5 268s.2 70.4 1.4 94.8c1.2 24.6 4.9 41.5 11 57.3 6.2 16.6 14.6 30.4 27.8 43.6 13.2 13.2 27 21.6 43.6 27.8 15.8 6.1 32.7 9.8 57.3 11 24.4 1.2 33.1 1.4 94.8 1.4s70.4-.2 94.8-1.4c24.6-1.2 41.5-4.9 57.3-11 16.6-6.2 30.4-14.6 43.6-27.8C406.1 41.9 392.3 33.5 375.7 27.4 359.9 21.3 343 17.6 318.4 16.4 294 15.2 285.3 15 224 15z"
      />
    </svg>
  )
}

function FacebookLogo({ size = 20, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

export function SocialChatWidgets() {
  return (
    <div
      className="fixed z-50 flex flex-col items-center gap-3"
      style={{
        right: "1rem",
        bottom: "calc(env(safe-area-inset-bottom, 0px) + var(--chat-offset, 88px) + 60px + 68px)",
      }}
      aria-label="Social chat shortcuts - Facebook Messenger and Instagram"
      role="group"
    >
      <Button
        onClick={() => window.open("https://m.me/mhdigitalsolution", "_blank", "noopener,noreferrer")}
        className="w-12 h-12 rounded-full text-white shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-blue-300/50"
        style={{
          background: "linear-gradient(135deg, #0099FF 0%, #A033FF 50%, #FF5280 100%)",
          boxShadow: "0 20px 50px rgba(0, 153, 255, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
        }}
        aria-label="Chat on Facebook Messenger"
        title="Facebook Messenger"
      >
        <MessengerLogo size={20} />
      </Button>

      <Button
        onClick={() => window.open("https://www.instagram.com/mh_digitalsolutions/", "_blank", "noopener,noreferrer")}
        className="w-12 h-12 rounded-full text-white shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-pink-300/50"
        style={{
          background: "linear-gradient(135deg, #F58529 0%, #DD2A7B 50%, #8134AF 100%)",
          boxShadow: "0 20px 50px rgba(245, 133, 41, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
        }}
        aria-label="Open Instagram profile @mh_digitalsolutions"
        title="Instagram"
      >
        <InstagramLogo size={20} />
      </Button>

      <Button
        onClick={() =>
          window.open("https://www.facebook.com/profile.php?id=61569037172478", "_blank", "noopener,noreferrer")
        }
        className="w-12 h-12 rounded-full text-white shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-blue-400/50"
        style={{
          background: "linear-gradient(135deg, #1877F2 0%, #0A66C2 100%)",
          boxShadow: "0 20px 50px rgba(24, 119, 242, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
        }}
        aria-label="Visit Facebook profile"
        title="Facebook"
      >
        <FacebookLogo size={20} />
      </Button>
    </div>
  )
}
