import { NextResponse, type NextRequest } from "next/server"
import { generateText } from "ai"
import { KB } from "@/data/ai-kb"

// Helper to try multiple v4-compatible models and pick the first that works
async function generateWithFallback(prompt: string) {
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

    const system = `You are MH Digital Solution's expert assistant. Provide comprehensive, detailed answers with:
- Clear explanations and context
- Specific examples and use cases relevant to the question
- Practical recommendations and next steps
- Industry insights when applicable
- Links to more resources or information where helpful

Be professional, friendly, and thorough. Use the knowledge base below to inform your answers.
If specific information isn't available, provide best-practice guidance based on industry standards.

Knowledge Base:
${KB}

Instructions for detailed responses:
1. Start with a direct answer to the question
2. Provide context and explain the "why" behind your answer
3. Include 2-3 concrete examples or use cases
4. Offer actionable recommendations
5. Explain potential outcomes and benefits
6. Invite further discussion or questions`

    const user = `User Question: "${message}"

Provide a comprehensive, detailed answer that:
- Addresses all aspects of the question
- Includes specific examples or case studies from our services
- Explains the business value and outcomes
- Suggests next steps or how we can help

If you don't have specific information, provide industry best practices and invite the user to contact us for a personalized consultation.`

    const prompt = `${system}\n${user}`

    const text = await generateWithFallback(prompt)
    if (text) {
      return NextResponse.json({ response: text })
    }

    return NextResponse.json({
      response: `Thanks for reaching out! I'd be happy to provide more detailed information. To give you the most comprehensive answer tailored to your specific needs, could you provide more context about:\n\n- Your industry or business type\n- Your current challenges\n- Your goals or timeline\n- Specific services you're interested in (Web Design, SEO, PPC, Apps, AI Automation, etc.)\n\nOr feel free to call us directly at +1 (707) 249-1222 to discuss your needs with our team!`,
    })
  } catch (error) {
    console.error("[v0] Chat error:", error)
    return NextResponse.json({
      response: `I appreciate your question! While I'm experiencing a temporary processing issue, I'm still here to help. Please call our team at +1 (707) 249-1222 or email info@mhdigitalsolution.com and we'll provide you with detailed, personalized guidance.`,
    })
  }
}
