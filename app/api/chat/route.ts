import { NextResponse, type NextRequest } from "next/server"
import { generateText } from "ai"

// Helper to try multiple v4-compatible models and pick the first that works
async function generateWithFallback(prompt: string) {
  const candidates = ["anthropic/claude-3-haiku-20240307", "openai/gpt-4o-mini"] as const
  for (const model of candidates) {
    try {
      const { text } = await generateText({ model, prompt })
      if (text && text.trim().length > 0) return text
    } catch (err) {
      const msg = (err as Error)?.message || ""
      if (msg.includes("Unsupported model version") || msg.includes("specification version")) {
        // quietly try the next model without spamming logs
        continue
      }
      // keep logs minimal to reduce console noise in production
      // console.warn("[AI] generateText error:", msg)
      continue
    }
  }
  return null
}

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json()

    if (!message || typeof message !== "string") {
      return NextResponse.json({ response: "Please provide a valid message." }, { status: 400 })
    }

    // Use the fallback helper with a concise, branded prompt
    const prompt = `You are the AI assistant for MH Digital Solutions. Be concise, helpful, and professional.
User: ${message}
Assistant:`
    try {
      const text = await generateWithFallback(prompt)
      if (text) {
        return NextResponse.json({ response: text })
      }
    } catch (err) {
      const msg = (err as Error)?.message || ""
      if (msg.includes("Unsupported model version") || msg.includes("specification version")) {
        return NextResponse.json({
          response:
            "Thanks for reaching out! Tell me what you need help with (web, SEO, apps, automation, pricing). I’ll provide clear next steps.",
        })
      }
      // console.warn("[AI] generateWithFallback error:", msg)
    }

    // Fallback detailed response (kept short here)
    return NextResponse.json({
      response:
        "Thanks for reaching out! Tell me what you need help with (web, SEO, apps, automation, pricing). I’ll provide clear next steps.",
    })
  } catch (error) {
    console.error("Chat API error:", error)
    return NextResponse.json(
      { response: "We hit an unexpected issue. Please try again in a moment or call +1 (707) 582-2255." },
      { status: 500 },
    )
  }
}
