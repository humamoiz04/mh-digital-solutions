import { type NextRequest, NextResponse } from "next/server"
import { createClient as createSupabaseServer } from "@/lib/supabase/server"

export async function POST(request: NextRequest) {
  try {
    const {
      name,
      email,
      phone,
      service,
      date, // from form
      time, // from form
      message,
      page_path: pagePathFromBody,
    } = await request.json()

    if (!name || !email || !service || !date || !time) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const supabase = createSupabaseServer()
    const ref = request.headers.get("referer") || ""
    const url = (() => {
      try {
        return ref ? new URL(ref) : null
      } catch {
        return null
      }
    })()
    const page_path = pagePathFromBody || url?.pathname || null

    const { error: dbError } = await supabase.from("appointments").insert([
      {
        name,
        email,
        phone: phone || null,
        service, // added via migration 004
        preferred_date: date,
        preferred_time: time,
        notes: message || null,
        page_path,
      },
    ])

    if (dbError) {
      console.error("[v0] Supabase insert error (appointments):", dbError)
      return NextResponse.json({ error: "Failed to store appointment" }, { status: 500 })
    }

    return NextResponse.json({
      success: true,
      message: "Appointment booked successfully",
    })
  } catch (error) {
    console.error("[v0] Appointment booking error:", error)
    return NextResponse.json({ error: "Failed to book appointment" }, { status: 500 })
  }
}
