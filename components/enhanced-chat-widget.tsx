"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { X, Send, User, Loader2, Bot } from "lucide-react"
import Image from "next/image"

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
        "👋 Hi! I'm your AI assistant. Ask me about our services (web, SEO, PPC, apps, automation), pricing & packages, process & timelines, industries we serve in the USA and Malta, or local SEO strategies. I'll give you clear, helpful answers.",
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
    if (!isOpen) return
    const id = requestAnimationFrame(scrollToBottom)
    return () => cancelAnimationFrame(id)
  }, [messages, isOpen])

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
            : "👋 Hi! I'm your AI assistant. Ask me about our services (web, SEO, PPC, apps, automation), pricing & packages, process & timelines, industries we serve in the USA and Malta, or local SEO strategies. I'll give you clear, helpful answers.",
        sender: "bot",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, botMessage])
    } catch {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content:
          "👋 Hi! I'm your AI assistant. Ask me about our services (web, SEO, PPC, apps, automation), pricing & packages, process & timelines, industries we serve in the USA and Malta, or local SEO strategies. I'll give you clear, helpful answers.",
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
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed z-50 w-16 h-16 rounded-full bg-gradient-to-br from-fuchsia-500 via-pink-500 to-rose-500 hover:from-fuchsia-600 hover:via-pink-600 hover:to-rose-600 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-fuchsia-300/50 active:scale-95"
        style={{
          right: "1rem",
          bottom: "calc(env(safe-area-inset-bottom, 0px) + 1rem)",
          background: "linear-gradient(135deg, #ec4899 0%, #f43f5e 50%, #8b5cf6 100%)",
          boxShadow: isOpen
            ? "0 20px 50px rgba(236, 72, 153, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)"
            : "0 10px 30px rgba(236, 72, 153, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
        }}
        aria-label={isOpen ? "Close AI Chat Assistant" : "Open AI Chat Assistant"}
        aria-expanded={isOpen}
        role="button"
        tabIndex={0}
      >
        {isOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Bot className="h-6 w-6" aria-hidden="true" />}
      </Button>

      {isOpen && (
        <Card
          className="fixed z-50 w-80 h-96 bg-gradient-to-br from-white/98 to-gray-50/98 backdrop-blur-xl border border-white/30 shadow-3xl rounded-2xl overflow-hidden"
          style={{
            right: "1rem",
            bottom: "calc(env(safe-area-inset-bottom, 0px) + 6.5rem)",
            boxShadow: "0 25px 50px rgba(236, 72, 153, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.4)",
          }}
          role="dialog"
          aria-labelledby="chat-header"
          aria-describedby="chat-messages"
        >
          <div className="flex flex-col h-full">
            <div className="bg-gradient-to-r from-fuchsia-500 via-pink-500 to-rose-500 text-white p-4 shadow-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                    <Bot className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <span id="chat-header" className="font-semibold">
                    AI Assistant
                  </span>
                  <div
                    className="w-2 h-2 bg-green-300 rounded-full animate-pulse"
                    title="Online"
                    aria-label="Assistant is online"
                  ></div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 rounded-lg"
                  aria-label="Close chat"
                >
                  <X className="h-4 w-4" aria-hidden="true" />
                </Button>
              </div>
            </div>

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
                  aria-label={`${message.sender === "user" ? "Your message" : "Assistant message"}: ${message.content} at ${message.timestamp.toLocaleTimeString()}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-xl shadow-md ${
                      message.sender === "user"
                        ? "bg-gradient-to-br from-fuchsia-500 to-pink-500 text-white rounded-br-none"
                        : "bg-white text-gray-800 border border-gray-200 rounded-bl-none"
                    }`}
                  >
                    <div className="flex items-start gap-2">
                      {message.sender === "bot" && (
                        <Image
                          src="/images/colorful-chatbot-icon.png"
                          alt="AI assistant icon"
                          width={16}
                          height={16}
                          className="w-4 h-4 mt-0.5 flex-shrink-0"
                        />
                      )}
                      {message.sender === "user" && (
                        <User className="h-4 w-4 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      )}
                      <div className="text-sm leading-relaxed break-words">{message.content}</div>
                    </div>
                    <div className="text-xs opacity-70 mt-1">
                      {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start" aria-live="polite">
                  <div className="bg-white text-gray-800 border border-gray-200 p-3 rounded-xl rounded-bl-none flex items-center gap-2 shadow-md">
                    <Image
                      src="/images/colorful-chatbot-icon.png"
                      alt="AI assistant thinking"
                      width={16}
                      height={16}
                      className="w-4 h-4"
                    />
                    <Loader2 className="h-4 w-4 animate-spin text-fuchsia-600" aria-hidden="true" />
                    <span className="text-sm text-gray-600">Thinking...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="p-4 border-t border-gray-200 bg-white/50">
              <div className="flex gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask a question..."
                  disabled={isLoading}
                  className="flex-1 focus:ring-2 focus:ring-fuchsia-400 border-gray-300 rounded-lg"
                  aria-label="Type your message"
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isLoading}
                  className="bg-gradient-to-r from-fuchsia-500 to-pink-500 hover:from-fuchsia-600 hover:to-pink-600 text-white focus:outline-none focus:ring-2 focus:ring-fuchsia-300 rounded-lg shadow-md hover:shadow-lg transition-all"
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
