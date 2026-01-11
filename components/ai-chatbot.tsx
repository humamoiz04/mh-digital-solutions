"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X, Send, MessageCircle } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

interface Message {
  id: string
  text: string
  sender: "user" | "ai"
  timestamp: Date
}

export function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! I'm MH Digital Solution's AI Assistant. How can I help you today? I can answer questions about our services, pricing, how we work, and more!",
      sender: "ai",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const faqResponses: Record<string, string> = {
    "how do you work": `We work in a simple 4-step process:
1. Strategy & Discovery - We understand your business goals and current digital presence
2. Planning & Proposal - We create a comprehensive plan tailored to your needs
3. Implementation - Our expert team executes the strategy with precision
4. Optimization & Reporting - We continuously improve and provide detailed analytics

Each client gets a dedicated account manager and weekly progress updates.`,

    "what services do you offer": `We offer comprehensive digital marketing and web development services:

Marketing Services:
- Digital Marketing & SEO
- PPC Advertising & Social Media Marketing
- Content & Email Marketing
- Lead Generation

Development Services:
- Web Design & Development
- Mobile App Development
- E-commerce Solutions

Technology Services:
- AI & Automation
- Cloud Solutions
- Business Analytics & Consulting

What service interests you the most?`,

    "how much does it cost": `Our pricing is transparent and flexible:

Starter Package: $299/month - Perfect for small businesses
- Website, basic SEO, GMB optimization

Growth Package: $799/month - Ideal for scaling businesses
- All Starter features + PPC, Social Media Management

Premium Package: $1,999/month - Comprehensive solution
- Full digital transformation with AI automation

Zero to Hero Package: $599/month - Complete startup solution
- Website, logo, business cards, SMM, SEO, GMB, PPC, AI chatbot

All packages include free strategy consultation. Want more details?`,

    "why choose mh digital": `Here's why 500+ clients trust us:

✓ 5-star rated service with proven results
✓ Dedicated account managers (not just support tickets)
✓ Transparent pricing - no hidden fees
✓ ROI-focused strategies
✓ 25+ years of combined experience
✓ Serving businesses nationwide since 2024
✓ AI-powered solutions for maximum efficiency

We don't just take your money - we make you money!`,

    "do you offer free consultation": `We offer a FREE 30-minute strategy call where we:
- Review your current digital presence
- Identify your biggest opportunities
- Discuss your business goals
- Recommend a custom solution

No pressure, no cost - just honest advice.

Ready to schedule? Click "Contact Us" in the navigation or reply with "schedule call"!`,

    "what about support": `We provide world-class support:
- Dedicated account manager for your success
- Weekly performance reports
- 24/7 chatbot assistance (that's me!)
- Email & phone support
- Monthly strategy reviews

You're not just getting a service - you're getting a trusted partner invested in your success!`,

    "how do we work": `We follow a simple, transparent process designed for your success:

**Phase 1: Strategy & Discovery (Week 1)**
We dive deep into understanding your business, competition, and goals. This includes competitor analysis and market research specific to your location and industry.

**Phase 2: Custom Plan & Proposal (Week 2)**
Based on our discovery, we create a detailed roadmap with specific strategies, timelines, and expected outcomes. You'll see exactly what we'll do and why.

**Phase 3: Implementation (Weeks 3-8)**
Our expert team executes flawlessly. You get weekly progress updates and full transparency on what's being done.

**Phase 4: Optimization & Growth (Ongoing)**
We continuously test, measure, and improve. Your dedicated account manager provides monthly reports with real ROI metrics.

Every step is designed to get you results, not just take your money. Want to start a free strategy call?`,

    "performance marketing": `Performance Marketing is results-based digital advertising where you only pay for actual conversions—not just clicks or impressions.

**How It Works:**
- We target high-intent customers actively searching for your services
- Ads appear on Google, Facebook, or other platforms where your customers live
- You pay only when someone calls, fills out a form, or makes a purchase
- Every dollar spent is tracked and measured

**Our Approach:**
✓ Daily optimization of ad spend
✓ A/B testing for maximum ROI
✓ Real-time adjustments based on performance
✓ Transparent dashboards showing exactly where money is spent

**Why It Works for Rural Businesses:**
Budget-friendly because there's less competition in your market. Your $500/month goes much further than in big cities.

Interested in maximizing your ad spend?`,

    "zero to hero": `The Zero to Hero package is our most comprehensive offering for businesses starting from scratch. Perfect for new ventures, startups, or established businesses needing a complete digital overhaul.

**What You Get ($599/month):**
✓ Professional website design & development
✓ Logo & brand identity design
✓ Business cards & stationery
✓ Social Media Management (SMM)
✓ SEO optimization & rankings
✓ Google My Business optimization
✓ PPC advertising setup
✓ AI-powered chatbot
✓ Business plan development
✓ Monthly strategy consultation

**Timeline:** 30-60 days to launch
**Perfect for:** New businesses, startups, complete rebrands

This is our most affordable complete solution. Many clients see ROI within 60 days. Ready to transform your business?`,

    default: `I'm here to help! You can ask me about:
- Our services and pricing
- How we work
- Why choose us
- Free consultation
- Support & maintenance
- Your business challenges

What would you like to know?`,
  }

  const getAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase()

    for (const [key, response] of Object.entries(faqResponses)) {
      if (key !== "default" && lowerMessage.includes(key)) {
        return response
      }
    }

    return faqResponses["default"]
  }

  const handleSendMessage = async () => {
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    // Simulate AI response delay
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getAIResponse(input),
        sender: "ai",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, aiResponse])
      setIsLoading(false)
    }, 500)
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <Card className="w-96 max-h-[600px] glass-card shadow-2xl">
          <CardHeader className="flex flex-row items-center justify-between pb-4 border-b border-slate-700">
            <h3 className="font-bold text-white flex items-center gap-2">
              <MessageCircle className="h-5 w-5 text-[#00f0ff]" />
              AI Assistant
            </h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="h-6 w-6 p-0 hover:bg-slate-800"
            >
              <X className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent className="p-0 flex flex-col h-[480px]">
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-xs px-4 py-2 rounded-lg ${
                      msg.sender === "user"
                        ? "bg-gradient-to-r from-[#00f0ff] to-[#ff00ff] text-black"
                        : "bg-slate-800 text-white border border-slate-700"
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-slate-800 px-4 py-2 rounded-lg text-white">
                    <div className="flex gap-2">
                      <div className="w-2 h-2 bg-[#00f0ff] rounded-full animate-bounce"></div>
                      <div
                        className="w-2 h-2 bg-[#ff00ff] rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-[#00f0ff] rounded-full animate-bounce"
                        style={{ animationDelay: "0.4s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
            <div className="border-t border-slate-700 p-4 flex gap-2">
              <input
                type="text"
                placeholder="Ask me anything..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                className="flex-1 bg-slate-800 border border-slate-700 rounded px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-[#00f0ff] focus:ring-1 focus:ring-[#00f0ff]"
              />
              <Button onClick={handleSendMessage} disabled={isLoading} className="gradient-button h-10 w-10 p-0">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      ) : (
        <Button
          onClick={() => setIsOpen(true)}
          className="rounded-full w-16 h-16 p-0 gradient-button shadow-lg hover:shadow-xl"
          aria-label="Open AI assistant chat"
        >
          <MessageCircle className="h-8 w-8" />
        </Button>
      )}
    </div>
  )
}
