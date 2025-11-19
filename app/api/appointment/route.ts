import { type NextRequest, NextResponse } from "next/server"
import { getDatabase } from "@/lib/mongodb/client"
import { sendAppointmentConfirmation, sendAdminNotification } from "@/lib/nodemailer"

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, service, date, time, message, page_path: pagePathFromBody } = await request.json()

    if (!name || !email || !service || !date || !time) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

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

    await sendAppointmentConfirmation(email, {
      name,
      email,
      phone,
      service,
      date,
      time,
      message,
    })

    await sendAdminNotification({
      name,
      email,
      phone,
      service,
      date,
      time,
      message,
    })

    console.log("[v0] Appointment booking successful:", { id: result.insertedId, name, email, service })

    return NextResponse.json({
      success: true,
      message: "Appointment booked successfully",
      appointmentId: result.insertedId,
    })
  } catch (error) {
    console.error("[v0] Appointment booking error:", error)
    return NextResponse.json({ error: "Failed to book appointment" }, { status: 500 })
  }
}
