import { type NextRequest, NextResponse } from "next/server"
// import { getDatabase } from "@/lib/mongodb/client"

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message, phone, page_path: pagePathFromBody } = await request.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // const db = await getDatabase()

    // if (!db || !process.env.MONGODB_URI) {
    //   console.warn("[v0] Contact form submission (no database configured):", { name, email, subject })
    //   return NextResponse.json({
    //     success: true,
    //     message: "Contact form submitted successfully",
    //   })
    // }

    const ref = request.headers.get("referer") || ""
    const url = (() => {
      try {
        return ref ? new URL(ref) : null
      } catch {
        return null
      }
    })()
    const page_path = pagePathFromBody || url?.pathname || null

    // const result = await db.collection("contacts").insertOne({
    //   name,
    //   email,
    //   subject: subject || null,
    //   message,
    //   phone: phone || null,
    //   page_path,
    //   created_at: new Date(),
    // })

    // if (!result.insertedId) {
    //   console.error("[v0] MongoDB insert error (contacts)")
    //   return NextResponse.json({ error: "Failed to store contact" }, { status: 500 })
    // }

    console.log("[v0] Contact form submission:", { name, email, subject, message, phone, page_path })

    return NextResponse.json({
      success: true,
      message: "Contact form submitted successfully",
    })
  } catch (error) {
    console.error("[v0] Contact form error:", error)
    return NextResponse.json({ error: "Failed to process contact form" }, { status: 500 })
  }
}
