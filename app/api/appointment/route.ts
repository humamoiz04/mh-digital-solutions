import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, service, date, time, message, page_path: pagePathFromBody } = await request.json()

    if (!name || !email || !service || !date || !time) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const ref = request.headers.get("referer") || ""
    const url = (() => {
      try {
        return ref ? new URL(ref) : null
      } catch {
        return null
      }
    })()
    const page_path = pagePathFromBody || url?.pathname || null

    console.log("[v0] Appointment booking:", { name, email, phone, service, date, time, message, page_path })

    return NextResponse.json({
      success: true,
      message: "Appointment booked successfully",
    })
  } catch (error) {
    console.error("[v0] Appointment booking error:", error)
    return NextResponse.json({ error: "Failed to book appointment" }, { status: 500 })
  }
}
