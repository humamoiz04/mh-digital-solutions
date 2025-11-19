import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER || "mhdigitalsolutionsus@gmail.com",
    pass: process.env.GMAIL_PASSWORD,
  },
})

export async function sendEmail(to: string, subject: string, html: string): Promise<void> {
  try {
    await transporter.sendMail({
      from: process.env.GMAIL_USER || "mhdigitalsolutionsus@gmail.com",
      to,
      subject,
      html,
    })
    console.log("[v0] Email sent successfully to:", to)
  } catch (error) {
    console.error("[v0] Email sending error:", error)
    throw error
  }
}

export async function sendAppointmentConfirmation(
  email: string,
  details: {
    name: string
    service: string
    date: string
    time: string
    phone: string
    message?: string
  }
): Promise<void> {
  const html = `
    <div style="font-family: Arial, sans-serif; color: #333;">
      <h2>Appointment Confirmation</h2>
      <p>Hi ${details.name},</p>
      <p>Thank you for booking an appointment with MH Digital Solutions!</p>
      
      <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="margin-top: 0;">Appointment Details:</h3>
        <p><strong>Service:</strong> ${details.service}</p>
        <p><strong>Date:</strong> ${details.date}</p>
        <p><strong>Time:</strong> ${details.time}</p>
        <p><strong>Phone:</strong> ${details.phone}</p>
        ${details.message ? `<p><strong>Additional Notes:</strong> ${details.message}</p>` : ""}
      </div>
      
      <p>We look forward to discussing how we can help your business grow!</p>
      <p>If you need to reschedule or have any questions, please call us at <strong>+1 (707) 249-1222</strong> or reply to this email.</p>
      
      <hr style="margin-top: 40px; border: none; border-top: 1px solid #ddd;">
      <p style="color: #666; font-size: 12px;">
        MH Digital Solutions<br>
        Phone: +1 (707) 249-1222<br>
        Email: info@mhdigitalsolution.com
      </p>
    </div>
  `
  await sendEmail(email, "Appointment Confirmation - MH Digital Solutions", html)
}

export async function sendAdminNotification(details: {
  name: string
  email: string
  phone: string
  service: string
  date: string
  time: string
  message?: string
}): Promise<void> {
  const html = `
    <div style="font-family: Arial, sans-serif; color: #333;">
      <h2>New Appointment Booking</h2>
      
      <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px;">
        <p><strong>Client Name:</strong> ${details.name}</p>
        <p><strong>Email:</strong> ${details.email}</p>
        <p><strong>Phone:</strong> ${details.phone}</p>
        <p><strong>Service:</strong> ${details.service}</p>
        <p><strong>Date:</strong> ${details.date}</p>
        <p><strong>Time:</strong> ${details.time}</p>
        ${details.message ? `<p><strong>Additional Notes:</strong> ${details.message}</p>` : ""}
      </div>
      
      <p style="margin-top: 20px;">Please review and confirm this appointment with the client.</p>
    </div>
  `
  await sendEmail(
    process.env.ADMIN_EMAIL || "mhdigitalsolutionsus@gmail.com",
    `New Appointment Booking: ${details.name} - ${details.service}`,
    html
  )
}
