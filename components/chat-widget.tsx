"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Send, X, Loader2, MessageCircle, Sparkles } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface Message {
  id: number
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "🤖 **Hi! I'm your AI assistant from MH Digital Solutions!**\n\nI can answer **ANY question** in detail - whether it's about our services, technology, business advice, or general knowledge.\n\n🎉 **Special Offer:** 70% OFF consultation (normally $50, now just **$15**!)\n\n**What would you like to know today?** 🚀",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async () => {
    if (input.trim() && !isLoading) {
      const userMessage: Message = {
        id: Date.now(),
        text: input,
        sender: "user",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, userMessage])
      const currentInput = input
      setInput("")
      setIsLoading(true)
      setError(null)

      try {
        const response = await fetch("/api/chat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message: currentInput }),
        })

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data = await response.json()

        const botMessage: Message = {
          id: Date.now() + 1,
          text: data.response,
          sender: "bot",
          timestamp: new Date(),
        }

        setMessages((prev) => [...prev, botMessage])
      } catch (error) {
        console.error("Chat error:", error)
        setError("Using offline mode")

        const errorMessage: Message = {
          id: Date.now() + 1,
          text: `🤖 **I'm still here to help!** (Offline mode)\n\n**Quick Contact Options:**\n📞 **Call:** +1 (707) 582-2255\n💬 **WhatsApp:** +1 (707) 582-2255\n🌐 **Website:** www.mhdigitalsolution.com\n\n🎉 **70% OFF consultation - Just $15!**\n\n**How can I assist you today?**`,
          sender: "bot",
          timestamp: new Date(),
        }
        setMessages((prev) => [...prev, errorMessage])
      } finally {
        setIsLoading(false)
      }
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen && (
        <Button
          size="icon"
          className="h-16 w-16 rounded-full shadow-lg bg-gradient-to-r from-fuchsia-600 to-pink-600 hover:from-fuchsia-700 hover:to-pink-700 hover-scale"
          onClick={() => setIsOpen(true)}
          aria-label="Open AI Chat Assistant"
        >
          <div className="relative">
            <MessageCircle className="h-8 w-8 text-white" />
            <Sparkles className="h-4 w-4 text-yellow-300 absolute -top-1 -right-1" />
          </div>
        </Button>
      )}

      {isOpen && (
        <Card className="glass-card w-80 h-[500px] flex flex-col shadow-2xl border-fuchsia-200/20">
          <CardHeader className="flex flex-row items-center justify-between p-4 border-b border-fuchsia-200/20 bg-gradient-to-r from-fuchsia-50/50 to-pink-50/50">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-fuchsia-500 to-pink-500 flex items-center justify-center">
                <span className="text-white text-sm">🤖</span>
              </div>
              <div>
                <CardTitle className="text-sm font-semibold text-foreground flex items-center gap-1">
                  MH Digital AI <Sparkles className="h-3 w-3 text-fuchsia-500" />
                </CardTitle>
                <p className="text-xs text-muted-foreground">{error ? "Offline mode" : "Ask me anything!"}</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="hover:bg-fuchsia-100/50 h-8 w-8"
              aria-label="Close chat"
            >
              <X className="h-4 w-4" />
            </Button>
          </CardHeader>

          <CardContent className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-white/50 to-fuchsia-50/30">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div className="flex items-start gap-2 max-w-[85%]">
                  {msg.sender === "bot" && (
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-fuchsia-500 to-pink-500 flex items-center justify-center mt-1 flex-shrink-0">
                      <span className="text-white text-xs">🤖</span>
                    </div>
                  )}
                  <div
                    className={`p-3 rounded-lg text-sm leading-relaxed ${
                      msg.sender === "user"
                        ? "bg-gradient-to-r from-fuchsia-500 to-pink-500 text-white ml-auto shadow-md"
                        : "bg-white/80 text-foreground shadow-sm border border-fuchsia-100/50"
                    }`}
                  >
                    <div className="whitespace-pre-wrap">{msg.text}</div>
                    <div
                      className={`text-xs mt-1 opacity-70 ${
                        msg.sender === "user" ? "text-fuchsia-100" : "text-muted-foreground"
                      }`}
                    >
                      {msg.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="flex items-start gap-2 max-w-[85%]">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-fuchsia-500 to-pink-500 flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-white text-xs">🤖</span>
                  </div>
                  <div className="bg-white/80 text-foreground p-3 rounded-lg flex items-center gap-2 shadow-sm border border-fuchsia-100/50">
                    <Loader2 className="h-4 w-4 animate-spin text-fuchsia-500" />
                    <span className="text-sm">Thinking deeply... 🧠</span>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </CardContent>

          <CardFooter className="p-4 border-t border-fuchsia-200/20 bg-gradient-to-r from-fuchsia-50/30 to-pink-50/30">
            <div className="flex items-end gap-2 w-full">
              <Textarea
                placeholder="Ask me anything - services, tech advice, general questions..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                className="flex-1 resize-none min-h-[40px] max-h-[100px] bg-white/70 border-fuchsia-200/50 focus:border-fuchsia-400 text-sm"
                disabled={isLoading}
                rows={1}
              />
              <Button
                size="icon"
                onClick={handleSendMessage}
                disabled={isLoading || !input.trim()}
                className="bg-gradient-to-r from-fuchsia-500 to-pink-500 hover:from-fuchsia-600 hover:to-pink-600 hover-scale h-10 w-10 flex-shrink-0"
                aria-label="Send message"
              >
                {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
              </Button>
            </div>
          </CardFooter>
        </Card>
      )}
    </div>
  )
}
