import { type NextRequest, NextResponse } from "next/server"
import { getDatabase } from "@/lib/mongodb/client"
import { sendAppointmentConfirmation, sendAdminNotification } from "@/lib/nodemailer"

export async function POST(request: NextRequest) {
  try {
    console.log("[v0] Appointment API called")
    const { name, email, phone, service, date, time, message, page_path: pagePathFromBody } = await request.json()

    if (!name || !email || !service || !date || !time) {
      console.log("[v0] Validation failed:", {
        name: !!name,
        email: !!email,
        service: !!service,
        date: !!date,
        time: !!time,
      })
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    console.log("[v0] Connecting to MongoDB...")
    const db = await getDatabase()
    const appointmentsCollection = db.collection("appointments")

    const ref = request.headers.get("referer") || ""
    const url = (() => {
      try {
        return ref ? new URL(ref) : null
      } catch {
        return null
      }
    })()
    const page_path = pagePathFromBody || url?.pathname || null

    console.log("[v0] Inserting appointment into MongoDB...")
    const result = await appointmentsCollection.insertOne({
      name,
      email,
      phone,
      service,
      date,
      time,
      message: message || null,
      page_path,
      created_at: new Date(),
    })

    if (!result.insertedId) {
      console.error("[v0] MongoDB insert error (appointments)")
      return NextResponse.json({ error: "Failed to store appointment" }, { status: 500 })
    }

    console.log("[v0] Appointment stored successfully, sending emails...")

    try {
      await sendAppointmentConfirmation(email, {
        name,
        email,
        phone,
        service,
        date,
        time,
        message,
      })
      console.log("[v0] Confirmation email sent")
    } catch (emailError) {
      console.error("[v0] Failed to send confirmation email:", emailError)
      // Continue even if confirmation email fails
    }

    try {
      await sendAdminNotification({
        name,
        email,
        phone,
        service,
        date,
        time,
        message,
      })
      console.log("[v0] Admin notification sent")
    } catch (emailError) {
      console.error("[v0] Failed to send admin notification:", emailError)
      // Continue even if admin notification fails
    }

    console.log("[v0] Appointment booking successful:", { id: result.insertedId, name, email, service })

    return NextResponse.json({
      success: true,
      message: "Appointment booked successfully",
      appointmentId: result.insertedId,
    })
  } catch (error) {
    console.error("[v0] Appointment booking error:", error)
    const errorMessage = error instanceof Error ? error.message : "Unknown error"
    return NextResponse.json({ error: "Failed to book appointment", details: errorMessage }, { status: 500 })
  }
}
