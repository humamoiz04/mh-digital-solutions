import { type NextRequest, NextResponse } from "next/server"
import { getDatabase } from "@/lib/mongodb/client"
import { sendEmail } from "@/lib/nodemailer"

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message, phone, page_path: pagePathFromBody } = await request.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const db = await getDatabase()
    const contactsCollection = db.collection("contacts")

    const ref = request.headers.get("referer") || ""
    const url = (() => {
      try {
        return ref ? new URL(ref) : null
      } catch {
        return null
      }
    })()
    const page_path = pagePathFromBody || url?.pathname || null

    const result = await contactsCollection.insertOne({
      name,
      email,
      subject: subject || null,
      message,
      phone: phone || null,
      page_path,
      created_at: new Date(),
    })

    if (!result.insertedId) {
      console.error("[v0] MongoDB insert error (contacts)")
      return NextResponse.json({ error: "Failed to store contact" }, { status: 500 })
    }

    const html = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
      <p><strong>Subject:</strong> ${subject || "No subject"}</p>
      <p><strong>Message:</strong> ${message}</p>
      <p><strong>Page:</strong> ${page_path}</p>
    `

    await sendEmail(
      process.env.ADMIN_EMAIL || "mhdigitalsolutionsus@gmail.com",
      `New Contact Form Submission from ${name}`,
      html
    )

    console.log("[v0] Contact form submission stored:", { id: result.insertedId, name, email })

    return NextResponse.json({
      success: true,
      message: "Contact form submitted successfully",
    })
  } catch (error) {
    console.error("[v0] Contact form error:", error)
    return NextResponse.json({ error: "Failed to process contact form" }, { status: 500 })
  }
}
