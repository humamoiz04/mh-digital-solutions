import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json()

    // Check if OpenAI API key is available and valid
    const apiKey = process.env.OPENAI_API_KEY || process.env.open_AI_API_KEY

    if (!apiKey || !apiKey.startsWith("sk-") || apiKey.includes("http")) {
      console.warn("OpenAI API key not found or invalid format, using fallback response")
      return NextResponse.json({
        response: getFallbackResponse(message),
      })
    }

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini", // Using more capable model for detailed responses
        messages: [
          {
            role: "system",
            content: `You are an intelligent AI assistant for MH Digital Solutions, a comprehensive digital agency. You can answer ANY question in detail, not just business-related ones. Be helpful, informative, and engaging.

            When discussing MH Digital Solutions:
            
            🏢 **Company Services:**
            - Digital Marketing (SEO, PPC, Social Media Marketing, Content Marketing, Email Marketing)
            - Web Development (Custom websites, E-commerce solutions, Mobile apps, Progressive Web Apps)
            - AI & Automation (Business process automation, AI chatbots, Machine learning solutions, Data analytics)
            - Business Consulting (Strategy, Operations, Growth planning, Digital transformation)
            - UI/UX Design (User experience design, Interface design, Prototyping)
            - Cloud Solutions (AWS, Azure, Google Cloud migration, Infrastructure management)
            - IT Consulting (Technology strategy, System integration, Cybersecurity)
            - Business Registration & Legal Services
            - Business Insurance Solutions
            
            🎯 **Portfolio Highlights:**
            - Movie Discovery App (React.js entertainment platform with AI recommendations)
            - Climate Data Tracker (Real-time environmental data visualization)
            - Fitness Gym Website (Modern responsive fitness center platform)
            - Nebraska Auto Detailing (Automotive service website with booking system)
            - Luxury Fin Detail (Premium automotive detailing with e-commerce)
            - Aesthetic Haven Store (Full-stack e-commerce beauty platform)
            
            📞 **Contact:** +1 (707) 582-2255 | 💬 WhatsApp: +1 (707) 582-2255
            🌐 **Website:** www.mhdigitalsolution.com
            📧 **Email:** info@mhdigitalsolution.com
            
            🎉 **Current Promotion:** 70% OFF consultation (normally $50, now just $15)
            
            For ANY topic - technology, business, general knowledge, creative projects, problem-solving - provide detailed, helpful responses. Use emojis appropriately and maintain a professional yet friendly tone.`,
          },
          {
            role: "user",
            content: message,
          },
        ],
        max_tokens: 1000, // Increased for more detailed responses
        temperature: 0.8, // Slightly higher for more creative responses
        presence_penalty: 0.1,
        frequency_penalty: 0.1,
      }),
    })

    if (!response.ok) {
      const errorData = await response.text()
      console.error(`OpenAI API error: ${response.status} - ${errorData}`)

      if (response.status === 401) {
        console.error("Invalid OpenAI API key - falling back to local responses")
      }

      // Return fallback response for API errors
      return NextResponse.json({
        response: getFallbackResponse(message),
      })
    }

    const data = await response.json()
    const botResponse = data.choices?.[0]?.message?.content || getFallbackResponse(message)

    return NextResponse.json({ response: botResponse })
  } catch (error) {
    console.error("Chat API error:", error)
    return NextResponse.json({
      response: getFallbackResponse(undefined),
    })
  }
}

function getFallbackResponse(userMessage?: string): string {
  const message = userMessage?.toLowerCase() || ""

  if (message.includes("price") || message.includes("cost") || message.includes("pricing")) {
    return `💰 **Detailed Pricing Information**

🎉 **LIMITED TIME: 70% OFF Consultation!**
• Regular Price: $50
• **Your Price: Just $15** ⚡

📊 **Service Pricing Breakdown:**

**🚀 Digital Marketing:**
• SEO Optimization: $800-2,500/month
• PPC Management: $500-2,000/month + ad spend
• Social Media Marketing: $600-1,800/month
• Content Marketing: $400-1,200/month

**💻 Web Development:**
• Business Website: $1,500-5,000
• E-commerce Store: $2,500-8,000
• Custom Web App: $5,000-15,000
• Mobile App: $8,000-25,000

**🤖 AI & Automation:**
• Chatbot Development: $1,000-3,500
• Process Automation: $2,000-8,000
• Data Analytics Dashboard: $3,000-10,000

**☁️ Cloud & IT Services:**
• Cloud Migration: $2,000-10,000
• IT Consulting: $150-250/hour
• System Integration: $3,000-12,000

📞 **Call +1 (707) 582-2255** for your $15 consultation!
💬 **WhatsApp:** +1 (707) 582-2255`
  }

  if (message.includes("service") || message.includes("what do you do") || message.includes("help")) {
    return `🏢 **MH Digital Solutions - Complete Digital Agency**

**🎯 Core Services:**

**📈 Digital Marketing Excellence**
• Search Engine Optimization (SEO)
• Pay-Per-Click Advertising (Google Ads, Facebook Ads)
• Social Media Marketing & Management
• Content Marketing & Copywriting
• Email Marketing Automation
• Conversion Rate Optimization

**💻 Web & Mobile Development**
• Custom Website Development (React, Next.js, WordPress)
• E-commerce Solutions (Shopify, WooCommerce, Custom)
• Mobile App Development (iOS, Android, React Native)
• Progressive Web Apps (PWAs)
• API Development & Integration

**🤖 AI & Automation Solutions**
• AI Chatbots & Virtual Assistants
• Business Process Automation
• Machine Learning Solutions
• Data Analytics & Visualization
• CRM Integration & Automation

**☁️ Cloud & IT Services**
• Cloud Migration (AWS, Azure, Google Cloud)
• Infrastructure Management
• Cybersecurity Solutions
• IT Strategy & Consulting
• System Integration

**🎨 Design & User Experience**
• UI/UX Design & Prototyping
• Brand Identity & Logo Design
• Graphic Design & Marketing Materials

**📋 Business Services**
• Business Registration & Legal Setup
• Business Insurance Solutions
• Strategic Business Consulting
• Digital Transformation Planning

📞 **Ready to transform your business?**
Call: +1 (707) 582-2255 | WhatsApp: +1 (707) 582-2255
🎉 **70% OFF consultation - Just $15!**`
  }

  if (
    message.includes("portfolio") ||
    message.includes("work") ||
    message.includes("example") ||
    message.includes("case study")
  ) {
    return `🎯 **Our Success Stories & Portfolio**

**🎬 Movie Discovery App**
• Technology: React.js, Node.js, MongoDB
• Features: AI-powered recommendations, user reviews, watchlists
• Result: 50,000+ active users, 4.8★ rating

**🌍 Climate Data Tracker**
• Technology: Python, D3.js, Real-time APIs
• Features: Interactive data visualization, predictive analytics
• Result: Used by 200+ environmental organizations

**💪 Modern Fitness Center Platform**
• Technology: Next.js, Stripe, CMS integration
• Features: Class booking, membership management, mobile-responsive
• Result: 300% increase in online bookings

**🚗 Auto Detailing Websites**
• Nebraska Auto Detailing & Luxury Fin Detail
• Technology: WordPress, WooCommerce, booking system
• Features: Online scheduling, payment processing, gallery
• Result: 250% increase in online bookings

**🛍️ Aesthetic Haven E-commerce Store**
• Technology: Shopify Plus, custom integrations
• Features: Product customization, subscription boxes, loyalty program
• Result: $500K+ in first-year revenue

**📊 Business Analytics Dashboard**
• Technology: React, Python, PostgreSQL
• Features: Real-time reporting, predictive analytics, automated insights
• Result: 40% improvement in decision-making speed

**🤖 AI Customer Service Chatbot**
• Technology: OpenAI GPT, custom training
• Features: 24/7 support, multilingual, CRM integration
• Result: 80% reduction in support tickets

📞 **Want to see your project here?**
Call: +1 (707) 582-2255 | WhatsApp: +1 (707) 582-2255
🎉 **70% OFF consultation - Just $15!**`
  }

  return `🤖 **Hi! I'm your AI assistant from MH Digital Solutions!**

I can help you with **ANY question** - whether it's about:

**🏢 Business & Services:**
• Our digital marketing & web development services
• Pricing and consultation booking
• Portfolio examples and case studies
• Technology recommendations

**💡 General Knowledge:**
• Technology trends and advice
• Business strategy and growth tips
• Creative problem-solving
• Industry insights and best practices

**🎯 Quick Actions:**
📞 **Call:** +1 (707) 582-2255
💬 **WhatsApp:** +1 (707) 582-2255
🌐 **Website:** www.mhdigitalsolution.com
📧 **Email:** info@mhdigitalsolution.com

**🎉 Special Offer:** 70% OFF consultation!
• Regular: $50 → **Your Price: $15** ⚡

**What would you like to know or discuss today?** 
Ask me anything - I'm here to provide detailed, helpful answers! 🚀`
}
