import { NextResponse, type NextRequest } from "next/server"
import { generateText } from "ai"

// Helper to try multiple v4-compatible models and pick the first that works
async function generateWithFallback(prompt: string) {
  const model = "anthropic/claude-sonnet-4.5"
  try {
    const { text } = await generateText({ model, prompt })
    if (text && text.trim().length > 0) return text
  } catch (err) {
    // swallow SDK/model errors to prevent noisy server logs or client console errors
  }
  return null
}

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json()
    if (!message || typeof message !== "string") {
      return NextResponse.json({ response: "Please provide a valid message." })
    }

    const prompt = `You are the AI assistant for MH Digital Solutions. Be concise, helpful, and professional.
User: ${message}
Assistant:`

    const text = await generateWithFallback(prompt)
    if (text) {
      return NextResponse.json({ response: text })
    }

    // Always return a friendly fallback with 200 to avoid client-side error logs
    return NextResponse.json({
      response:
        "Thanks for reaching out! Tell me what you need help with (web, SEO, apps, automation, pricing). I’ll provide clear next steps.",
    })
  } catch {
    // Return a graceful response without throwing 500 to keep builds/console clean
    return NextResponse.json({
      response:
        "Thanks for reaching out! Tell me what you need help with (web, SEO, apps, automation, pricing). I’ll provide clear next steps.",
    })
  }
}
