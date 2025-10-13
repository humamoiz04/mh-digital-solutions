"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { X, Send, User, Loader2, Bot } from "lucide-react"
import Image from "next/image"
import ThreeDIcon from "@/components/ui/three-d-icon" // 3D colorful icon

interface Message {
  id: string
  content: string
  sender: "user" | "bot"
  timestamp: Date
}

async function safeJson(res: Response) {
  try {
    return await res.json()
  } catch {
    return {}
  }
}

export function EnhancedChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content:
        "👋 Hi! I'm your AI assistant. I can help you with questions about our services, pricing, or anything else you'd like to know!",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const root = document.documentElement
    const offset = isOpen ? "26rem" : "88px"
    root.style.setProperty("--chat-offset", offset)
    if (!root.style.getPropertyValue("--chat-offset")) {
      root.style.setProperty("--chat-offset", "88px")
    }
    return () => {
      // keep last known offset; no cleanup required
    }
  }, [isOpen])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsLoading(true)

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: inputValue }),
      })

      if (!response.ok) {
        throw new Error(`Chat API error: ${response.status}`)
      }

      const data = await safeJson(response)

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content:
          typeof data.response === "string" && data.response.trim().length > 0
            ? data.response
            : "Thanks for reaching out! Tell me what you need help with (web, SEO, apps, automation, pricing). I’ll provide clear next steps.",
        sender: "bot",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, botMessage])
    } catch {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content:
          "Thanks for reaching out! Tell me what you need help with (web, SEO, apps, automation, pricing). I’ll provide clear next steps.",
        sender: "bot",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Chat Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed z-50 w-16 h-16 rounded-full bg-gradient-to-r from-fuchsia-600 to-pink-600 hover:from-fuchsia-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-fuchsia-300"
        style={{
          right: "1rem",
          bottom: "calc(env(safe-area-inset-bottom, 0px) + 1rem)",
        }}
        aria-label={isOpen ? "Close AI Chat Assistant" : "Open AI Chat Assistant"}
        aria-expanded={isOpen}
        role="button"
        tabIndex={0}
      >
        {isOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <ThreeDIcon icon={Bot} size={22} variant="brand" />}
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <Card
          className="fixed z-50 w-80 h-96 bg-white/95 backdrop-blur-md border border-white/20 shadow-2xl"
          style={{
            right: "1rem",
            bottom: "calc(env(safe-area-inset-bottom, 0px) + 6.5rem)",
          }}
          role="dialog"
          aria-labelledby="chat-header"
          aria-describedby="chat-messages"
        >
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white p-4 rounded-t-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ThreeDIcon icon={Bot} size={16} variant="brand" />
                  <span id="chat-header" className="font-semibold">
                    AI Assistant
                  </span>
                  <div
                    className="w-2 h-2 bg-green-500 rounded-full"
                    title="Online"
                    aria-label="Assistant is online"
                  ></div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50"
                  aria-label="Close chat"
                >
                  <X className="h-4 w-4" aria-hidden="true" />
                </Button>
              </div>
            </div>

            {/* Messages */}
            <div
              id="chat-messages"
              className="flex-1 overflow-y-auto p-4 space-y-4"
              role="log"
              aria-live="polite"
              aria-label="Chat messages"
            >
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                  role="article"
                  aria-label={`${message.sender === "user" ? "Your message" : "Assistant message"} at ${message.timestamp.toLocaleTimeString()}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.sender === "user"
                        ? "bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    <div className="flex items-start gap-2">
                      {message.sender === "bot" && (
                        <Image
                          src="/images/colorful-chatbot-icon.png"
                          alt="AI assistant"
                          width={16}
                          height={16}
                          className="w-4 h-4 mt-0.5"
                          aria-hidden="false"
                        />
                      )}
                      {message.sender === "user" && <User className="h-4 w-4 mt-0.5" aria-hidden="true" />}
                      <div className="text-sm">{message.content}</div>
                    </div>
                    <div className="text-xs opacity-70 mt-1">
                      {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start" aria-live="polite">
                  <div className="bg-gray-100 p-3 rounded-lg flex items-center gap-2">
                    <Image
                      src="/images/colorful-chatbot-icon.png"
                      alt="AI assistant"
                      width={16}
                      height={16}
                      className="w-4 h-4"
                      aria-hidden="false"
                    />
                    <Loader2 className="h-4 w-4 animate-spin text-fuchsia-600" aria-hidden="true" />
                    <span className="text-sm text-gray-600">Thinking...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t">
              <div className="flex gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything..."
                  disabled={isLoading}
                  className="flex-1 focus:ring-2 focus:ring-fuchsia-300"
                  aria-label="Type your message"
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isLoading}
                  className="bg-gradient-to-r from-fuchsia-600 to-pink-600 hover:from-fuchsia-700 hover:to-pink-700 text-white focus:outline-none focus:ring-2 focus:ring-fuchsia-300"
                  aria-label="Send message"
                >
                  <Send className="h-4 w-4" aria-hidden="true" />
                </Button>
              </div>
            </div>
          </div>
        </Card>
      )}
    </>
  )
}
