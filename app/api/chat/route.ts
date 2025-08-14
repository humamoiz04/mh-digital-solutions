import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json()

    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-goog-api-key": process.env.GEMINI_API_KEY || "",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `You are an AI assistant for MH Digital Solutions, a digital marketing and web development company. 
                
                Company Services:
                - Digital Marketing (SEO, PPC, Social Media Marketing, Content Marketing, Email Marketing)
                - Web Development (Custom websites, E-commerce solutions, Mobile apps)
                - AI & Automation (Business process automation, AI chatbots, Data analytics)
                - Business Consulting (Strategy, Operations, Growth planning)
                - UI/UX Design (User experience design, Interface design)
                - Cloud Solutions (Cloud migration, Infrastructure management)
                - IT Consulting (Technology strategy, System integration)
                
                Portfolio includes:
                - Movie Discovery App (React.js entertainment platform)
                - Climate Data Tracker (Environmental data visualization)
                - Fitness Gym Website (Modern fitness center site)
                - Nebraska Auto Detailing (Automotive service website)
                - Luxury Fin Detail (Premium automotive detailing)
                - Aesthetic Haven Store (E-commerce beauty platform)
                
                Answer the following question professionally and helpfully: ${message}`,
                },
              ],
            },
          ],
        }),
      },
    )

    const data = await response.json()
    const botResponse =
      data.candidates?.[0]?.content?.parts?.[0]?.text ||
      "I apologize, but I encountered an issue. Please try again or contact us directly."

    return NextResponse.json({ response: botResponse })
  } catch (error) {
    console.error("Chat API error:", error)
    return NextResponse.json({ error: "Failed to process your message. Please try again." }, { status: 500 })
  }
}
