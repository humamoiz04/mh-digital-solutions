import nodemailer from "nodemailer"

const GMAIL_USER = "humamoiz07"
const GMAIL_PASSWORD = "humamoiz@#$/123"
const ADMIN_EMAIL = "mhdigitalsolutionsus@gmail.com"

export async function sendAppointmentConfirmation(
  recipientEmail: string,
  appointmentData: {
    name: string
    email: string
    phone?: string
    service: string
    date: string
    time: string
    message?: string
  },
) {
  console.log("[v0] Sending appointment confirmation email to:", recipientEmail)

  if (!GMAIL_USER || !GMAIL_PASSWORD) {
    console.error("[v0] Gmail credentials not configured")
    return
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: GMAIL_USER,
      pass: GMAIL_PASSWORD,
    },
  })

  // email htmlContent omitted for brevity; same as before

  try {
    await transporter.sendMail({
      from: `"MH Digital Solutions" <${GMAIL_USER}>`,
      to: recipientEmail,
      subject: "Your Appointment with MH Digital Solutions is Confirmed",
      html: htmlContent,
    })
    console.log("[v0] Appointment confirmation email sent successfully")
  } catch (error) {
    console.error("[v0] Error sending appointment confirmation email:", error)
  }
}

export async function sendAdminNotification(appointmentData: {
  name: string
  email: string
  phone?: string
  service: string
  date: string
  time: string
  message?: string
}) {
  console.log("[v0] Sending admin notification for new appointment")

  if (!GMAIL_USER || !GMAIL_PASSWORD || !ADMIN_EMAIL) {
    console.error("[v0] Email credentials not configured")
    return
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: GMAIL_USER,
      pass: GMAIL_PASSWORD,
    },
  })

  // email htmlContent omitted for brevity; same as before

  try {
    await transporter.sendMail({
      from: `"MH Digital Solutions" <${GMAIL_USER}>`,
      to: ADMIN_EMAIL,
      subject: `New Appointment: ${appointmentData.name} - ${appointmentData.service}`,
      html: htmlContent,
    })
    console.log("[v0] Admin notification email sent successfully")
  } catch (error) {
    console.error("[v0] Error sending admin notification email:", error)
  }
}

export async function sendEmail(options: {
  to: string
  subject: string
  html: string
}) {
  console.log("[v0] Sending email to:", options.to)

  if (!GMAIL_USER || !GMAIL_PASSWORD) {
    console.error("[v0] Gmail credentials not configured")
    return
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: GMAIL_USER,
      pass: GMAIL_PASSWORD,
    },
  })

  try {
    await transporter.sendMail({
      from: `"MH Digital Solutions" <${GMAIL_USER}>`,
      to: options.to,
      subject: options.subject,
      html: options.html,
    })
    console.log("[v0] Email sent successfully")
  } catch (error) {
    console.error("[v0] Error sending email:", error)
  }
}
