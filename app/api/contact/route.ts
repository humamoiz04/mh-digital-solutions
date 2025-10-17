import { type NextRequest, NextResponse } from "next/server"
import { createClient as createSupabaseServer } from "@/lib/supabase/server"

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message, phone, page_path: pagePathFromBody } = await request.json()

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const supabase = createSupabaseServer()
    // Prefer client-provided page_path; else fallback to referer path
    const ref = request.headers.get("referer") || ""
    const url = (() => {
      try {
        return ref ? new URL(ref) : null
      } catch {
        return null
      }
    })()
    const page_path = pagePathFromBody || url?.pathname || null

    const { error: dbError } = await supabase.from("contacts").insert([
      {
        name,
        email,
        subject: subject || null,
        message,
        phone: phone || null,
        page_path,
      },
    ])

    if (dbError) {
      console.error("[v0] Supabase insert error (contacts):", dbError)
      return NextResponse.json({ error: "Failed to store contact" }, { status: 500 })
    }

    // For now, we'll simulate a successful submission
    console.log("Contact form submission:", { name, email, subject, message, phone, page_path })

    // You can integrate with services like:
    // - SendGrid for email
    // - Supabase for database storage
    // - HubSpot for CRM

    return NextResponse.json({
      success: true,
      message: "Contact form submitted successfully",
    })
  } catch (error) {
    console.error("[v0] Contact form error:", error)
    return NextResponse.json({ error: "Failed to process contact form" }, { status: 500 })
  }
}
