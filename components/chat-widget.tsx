"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Send, X, Loader2 } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

interface Message {
  id: number
  text: string
  sender: "user" | "bot"
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi there! I'm your AI assistant for MH Digital Solutions. How can I help you today?",
      sender: "bot",
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSendMessage = async () => {
    if (input.trim() && !isLoading) {
      const userMessage = { id: messages.length + 1, text: input, sender: "user" as const }
      setMessages((prev) => [...prev, userMessage])
      setInput("")
      setIsLoading(true)

      try {
        const response = await fetch("/api/chat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message: input }),
        })

        const data = await response.json()

        if (response.ok) {
          const botMessage = {
            id: messages.length + 2,
            text: data.response,
            sender: "bot" as const,
          }
          setMessages((prev) => [...prev, botMessage])
        } else {
          throw new Error(data.error || "Failed to get response")
        }
      } catch (error) {
        const errorMessage = {
          id: messages.length + 2,
          text: "I apologize, but I'm having trouble connecting right now. Please try again or contact us directly at info@mhdigitalsolution.com",
          sender: "bot" as const,
        }
        setMessages((prev) => [...prev, errorMessage])
      } finally {
        setIsLoading(false)
      }
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen && (
        <Button
          size="icon"
          className="h-16 w-16 rounded-full shadow-lg gradient-button hover:scale-110 transition-all duration-300 p-2"
          onClick={() => setIsOpen(true)}
        >
          <Image
            src="/images/ai-chatbot-illustration.webp"
            alt="AI Chatbot"
            width={48}
            height={48}
            className="rounded-full"
          />
          <span className="sr-only">Open chat</span>
        </Button>
      )}

      {isOpen && (
        <Card className="glass-card w-80 h-[400px] flex flex-col animate-in slide-in-from-bottom-2 duration-300">
          <CardHeader className="flex flex-row items-center justify-between p-4 border-b">
            <div className="flex items-center gap-3">
              <Image
                src="/images/ai-chatbot-illustration.webp"
                alt="AI Chatbot"
                width={32}
                height={32}
                className="rounded-full"
              />
              <CardTitle className="text-lg font-semibold text-foreground">MH Digital AI Assistant</CardTitle>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="hover:bg-muted/50">
              <X className="h-5 w-5" />
              <span className="sr-only">Close chat</span>
            </Button>
          </CardHeader>
          <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div className="flex items-start gap-2 max-w-[80%]">
                  {msg.sender === "bot" && (
                    <Image
                      src="/images/ai-chatbot-illustration.webp"
                      alt="AI"
                      width={24}
                      height={24}
                      className="rounded-full mt-1 flex-shrink-0"
                    />
                  )}
                  <div
                    className={`p-3 rounded-lg ${
                      msg.sender === "user"
                        ? "bg-gradient-to-r from-fuchsia-500 to-pink-500 text-white ml-auto"
                        : "bg-muted/80 text-foreground"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="flex items-start gap-2 max-w-[80%]">
                  <Image
                    src="/images/ai-chatbot-illustration.webp"
                    alt="AI"
                    width={24}
                    height={24}
                    className="rounded-full mt-1 flex-shrink-0"
                  />
                  <div className="bg-muted/80 text-foreground p-3 rounded-lg flex items-center gap-2">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Thinking...
                  </div>
                </div>
              </div>
            )}
          </CardContent>
          <CardFooter className="p-4 border-t flex items-center gap-2">
            <Textarea
              placeholder="Ask about our services, portfolio, or pricing..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault()
                  handleSendMessage()
                }
              }}
              className="flex-1 resize-none min-h-[40px] max-h-[100px] bg-background/50 border-muted/50"
              disabled={isLoading}
            />
            <Button
              size="icon"
              onClick={handleSendMessage}
              disabled={isLoading || !input.trim()}
              className="gradient-button hover:scale-105 transition-transform"
            >
              {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" />}
              <span className="sr-only">Send message</span>
            </Button>
          </CardFooter>
        </Card>
      )}
    </div>
  )
}
