import nodemailer from "nodemailer"

function createTransporter() {
  if (!process.env.GMAIL_USER || !process.env.GMAIL_PASSWORD) {
    console.warn("[v0] Gmail credentials not configured, email sending disabled")
    return null
  }

  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASSWORD,
    },
  })
}

export async function sendAppointmentConfirmation(
  customerEmail: string,
  appointment: {
    name: string
    email: string
    phone?: string
    service: string
    date: string
    time: string
    message?: string
  },
) {
  const transporter = createTransporter()
  if (!transporter) return

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
          .appointment-details { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; }
          .detail-row { padding: 10px 0; border-bottom: 1px solid #eee; }
          .label { font-weight: bold; color: #667eea; }
          .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Appointment Confirmed!</h1>
          </div>
          <div class="content">
            <p>Dear ${appointment.name},</p>
            <p>Thank you for booking an appointment with MH Digital Solution. We're excited to work with you!</p>
            
            <div class="appointment-details">
              <h2>Appointment Details</h2>
              <div class="detail-row">
                <span class="label">Service:</span> ${appointment.service}
              </div>
              <div class="detail-row">
                <span class="label">Date:</span> ${appointment.date}
              </div>
              <div class="detail-row">
                <span class="label">Time:</span> ${appointment.time}
              </div>
              ${appointment.phone ? `<div class="detail-row"><span class="label">Phone:</span> ${appointment.phone}</div>` : ""}
              ${appointment.message ? `<div class="detail-row"><span class="label">Message:</span> ${appointment.message}</div>` : ""}
            </div>
            
            <p>Our team will contact you shortly to confirm the details. If you need to reschedule or have any questions, please don't hesitate to reach out.</p>
            
            <p>Best regards,<br>MH Digital Solution Team</p>
          </div>
          <div class="footer">
            <p>MH Digital Solution | mhdigitalsolutionsus@gmail.com | +1 (707) 249-1222</p>
          </div>
        </div>
      </body>
    </html>
  `

  try {
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: customerEmail,
      subject: "Appointment Confirmation - MH Digital Solution",
      html,
    })
    console.log("[v0] Appointment confirmation email sent to:", customerEmail)
  } catch (error) {
    console.error("[v0] Failed to send appointment confirmation:", error)
  }
}

export async function sendAdminNotification(appointment: {
  name: string
  email: string
  phone?: string
  service: string
  date: string
  time: string
  message?: string
}) {
  const transporter = createTransporter()
  if (!transporter) return

  const adminEmail = process.env.ADMIN_EMAIL || "mhdigitalsolutionsus@gmail.com"

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #667eea; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
          .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
          .detail { padding: 10px; margin: 5px 0; background: white; border-radius: 4px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>New Appointment Booking</h2>
          </div>
          <div class="content">
            <div class="detail"><strong>Name:</strong> ${appointment.name}</div>
            <div class="detail"><strong>Email:</strong> ${appointment.email}</div>
            <div class="detail"><strong>Phone:</strong> ${appointment.phone || "Not provided"}</div>
            <div class="detail"><strong>Service:</strong> ${appointment.service}</div>
            <div class="detail"><strong>Date:</strong> ${appointment.date}</div>
            <div class="detail"><strong>Time:</strong> ${appointment.time}</div>
            ${appointment.message ? `<div class="detail"><strong>Message:</strong> ${appointment.message}</div>` : ""}
          </div>
        </div>
      </body>
    </html>
  `

  try {
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: adminEmail,
      subject: `New Appointment: ${appointment.service} - ${appointment.name}`,
      html,
    })
    console.log("[v0] Admin notification email sent for appointment:", appointment.name)
  } catch (error) {
    console.error("[v0] Failed to send admin notification:", error)
  }
}

export async function sendEmail(to: string, subject: string, html: string) {
  const transporter = createTransporter()
  if (!transporter) return

  try {
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to,
      subject,
      html,
    })
    console.log("[v0] Email sent successfully to:", to)
  } catch (error) {
    console.error("[v0] Failed to send email:", error)
  }
}
