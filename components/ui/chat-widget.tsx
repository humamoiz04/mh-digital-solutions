"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle, Phone, X, Send } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("chat")
  const [messages, setMessages] = useState([
    {
      type: "bot",
      message: "Hi! I'm here to help you with M&H Digital Solutions. How can I assist you today?",
    },
  ])
  const [inputMessage, setInputMessage] = useState("")

  const botResponses = {
    services:
      "We offer AI & Automation, Digital Marketing, Web Development, Business Consulting, SEO Services, E-commerce Solutions, HR Solutions, and Business Cost Optimization. Which service interests you?",
    pricing:
      "Our pricing varies by project scope. We offer competitive rates with transparent pricing. Would you like to schedule a free consultation to discuss your specific needs?",
    contact:
      "You can reach us at:\n📧 hello@mhdigitalsolution.com\n📞 +1 (757) 550-4040 (SMS)\n📱 +1 (707) 582-2255 (WhatsApp)\nOr schedule a call: https://calendly.com/mhdigitalsolutionsus",
    ai: "Our AI & Automation services include custom chatbots, process automation, and predictive analytics. We can reduce your operational costs by up to 60%. Learn more: /services/ai-automation",
    marketing:
      "Our Digital Marketing services include SEO, social media marketing, content creation, and paid advertising. We've helped clients increase brand awareness by 300%. Learn more: /services/digital-marketing",
    web: "We create custom websites, e-commerce stores, and web applications using modern technologies like React, Next.js, and Node.js. Learn more: /services/web-development",
    consulting:
      "Our Business Consulting services help optimize operations, reduce costs, and develop growth strategies. Average ROI is 250%. Learn more: /services/business-consulting",
    seo: "Our SEO services improve search rankings and drive organic traffic. We've helped clients achieve 300% increase in organic traffic. Learn more: /services/seo",
    ecommerce:
      "We build powerful e-commerce platforms that maximize sales with seamless shopping experiences. Learn more: /services/e-commerce",
    tools:
      "We offer various business tools including analytics dashboards, CRM systems, automation suites, and marketing tools. Check them out at /tools",
    default:
      "I'd be happy to help! You can ask me about our services, pricing, or contact information. For immediate assistance, you can also call us at +1 (757) 550-4040 or message us on WhatsApp at +1 (707) 582-2255.",
  }

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return

    const newMessages = [...messages, { type: "user", message: inputMessage }]

    // Simple bot response logic
    let botResponse = botResponses.default
    const lowerMessage = inputMessage.toLowerCase()

    if (lowerMessage.includes("service") || lowerMessage.includes("what do you do")) {
      botResponse = botResponses.services
    } else if (lowerMessage.includes("price") || lowerMessage.includes("cost") || lowerMessage.includes("pricing")) {
      botResponse = botResponses.pricing
    } else if (lowerMessage.includes("contact") || lowerMessage.includes("phone") || lowerMessage.includes("email")) {
      botResponse = botResponses.contact
    } else if (lowerMessage.includes("ai") || lowerMessage.includes("automation")) {
      botResponse = botResponses.ai
    } else if (lowerMessage.includes("marketing") || lowerMessage.includes("social media")) {
      botResponse = botResponses.marketing
    } else if (lowerMessage.includes("web") || lowerMessage.includes("website")) {
      botResponse = botResponses.web
    } else if (lowerMessage.includes("consulting") || lowerMessage.includes("business")) {
      botResponse = botResponses.consulting
    } else if (lowerMessage.includes("seo") || lowerMessage.includes("search")) {
      botResponse = botResponses.seo
    } else if (lowerMessage.includes("ecommerce") || lowerMessage.includes("online store")) {
      botResponse = botResponses.ecommerce
    } else if (lowerMessage.includes("tool") || lowerMessage.includes("software")) {
      botResponse = botResponses.tools
    }

    newMessages.push({ type: "bot", message: botResponse })
    setMessages(newMessages)
    setInputMessage("")
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage()
    }
  }

  const handleWhatsApp = () => {
    window.open("https://wa.me/17075822255?text=Hi! I'm interested in M&H Digital Solutions services.", "_blank")
  }

  const handleSMS = () => {
    window.open("sms:+17575504040?body=Hi! I'm interested in M&H Digital Solutions services.", "_blank")
  }

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 rounded-full bg-gradient-to-r from-[#FF7600] to-[#F472B6] hover:opacity-90 shadow-lg"
        >
          {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        </Button>
      </div>

      {/* Chat Widget */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-[500px] z-50">
          <Card className="glass border-0 h-full flex flex-col">
            <CardContent className="p-0 h-full flex flex-col">
              {/* Header */}
              <div className="bg-gradient-to-r from-[#FF7600] to-[#F472B6] p-4 rounded-t-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-semibold">M&H Digital Solutions</h3>
                    <p className="text-white/80 text-sm">How can we help you?</p>
                  </div>
                  <Badge className="bg-green-500 text-white">Online</Badge>
                </div>
              </div>

              {/* Tabs */}
              <div className="flex border-b border-gray-200 dark:border-gray-700">
                <button
                  onClick={() => setActiveTab("chat")}
                  className={`flex-1 p-3 text-sm font-medium ${
                    activeTab === "chat"
                      ? "text-[#FF7600] border-b-2 border-[#FF7600]"
                      : "text-gray-600 dark:text-gray-400"
                  }`}
                >
                  Chat
                </button>
                <button
                  onClick={() => setActiveTab("contact")}
                  className={`flex-1 p-3 text-sm font-medium ${
                    activeTab === "contact"
                      ? "text-[#FF7600] border-b-2 border-[#FF7600]"
                      : "text-gray-600 dark:text-gray-400"
                  }`}
                >
                  Contact
                </button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-hidden">
                {activeTab === "chat" && (
                  <div className="h-full flex flex-col">
                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                      {messages.map((msg, index) => (
                        <div key={index} className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}>
                          <div
                            className={`max-w-[80%] p-3 rounded-lg text-sm ${
                              msg.type === "user"
                                ? "bg-[#FF7600] text-white"
                                : "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
                            }`}
                          >
                            {msg.message.split("\n").map((line, i) => (
                              <div key={i}>{line}</div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Input */}
                    <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                      <div className="flex space-x-2">
                        <input
                          type="text"
                          value={inputMessage}
                          onChange={(e) => setInputMessage(e.target.value)}
                          onKeyPress={handleKeyPress}
                          placeholder="Type your message..."
                          className="flex-1 p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm"
                        />
                        <Button onClick={handleSendMessage} size="sm" className="bg-[#FF7600] hover:bg-[#FF7600]/90">
                          <Send className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "contact" && (
                  <div className="p-4 space-y-4">
                    <div className="text-center">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Get in Touch</h4>
                    </div>

                    <Button onClick={handleWhatsApp} className="w-full bg-green-500 hover:bg-green-600 text-white">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      WhatsApp: +1 (707) 582-2255
                    </Button>

                    <Button onClick={handleSMS} className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                      <Phone className="h-4 w-4 mr-2" />
                      SMS: +1 (757) 550-4040
                    </Button>

                    <div className="text-center space-y-2">
                      <p className="text-sm text-gray-600 dark:text-gray-400">📧 hello@mhdigitalsolution.com</p>
                      <a
                        href="https://calendly.com/mhdigitalsolutionsus"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-sm text-[#FF7600] hover:underline"
                      >
                        📅 Schedule a Call
                      </a>
                    </div>

                    <div className="text-center">
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Response time: Within 2 hours during business hours
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  )
}
