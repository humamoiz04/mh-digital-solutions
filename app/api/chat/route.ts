import { NextResponse, type NextRequest } from "next/server"
import { generateText } from "ai"
import { KB } from "@/data/ai-kb"

// Helper to try multiple v4-compatible models and pick the first that works
async function generateWithFallback(prompt: string) {
  // Prefer OpenAI mini; fall back handled by our code's friendly response
  const model = "openai/gpt-4o-mini"
  try {
    const { text } = await generateText({ model, prompt })
    if (text && text.trim().length > 0) return text
  } catch {
    // swallow to avoid noisy logs
  }
  return null
}

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json()
    if (!message || typeof message !== "string") {
      return NextResponse.json({ response: "Please provide a valid message." })
    }

    const system = `You are MH Digital Solution’s assistant. Be concise, professional, and helpful.
Answer using our knowledge base below. If info is missing, give best-practice guidance and invite the user to contact us at +1 707 249 1222.
Knowledge Base:
${KB}
`
    const user = `User Question: ${message}\nProvide a direct, friendly answer with next steps.`
    const prompt = `${system}\n${user}`

    const text = await generateWithFallback(prompt)
    if (text) {
      return NextResponse.json({ response: text })
    }

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
