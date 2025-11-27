import nodemailer from "nodemailer"

interface AppointmentData {
  name: string
  email: string
  phone?: string
  service: string
  date: string
  time: string
  message?: string
}

function createTransporter() {
  const gmailUser = process.env.GMAIL_USER || "mhdigitalsolutionsus@gmail.com"
  const gmailPassword = process.env.GMAIL_PASSWORD

  if (!gmailPassword) {
    console.error("[v0] GMAIL_PASSWORD not set in environment")
    throw new Error("Email configuration is incomplete")
  }

  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: gmailUser,
      pass: gmailPassword,
    },
  })
}

export async function sendAppointmentConfirmation(email: string, data: AppointmentData) {
  try {
    const transporter = createTransporter()

    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #d946ef 0%, #ec4899 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .details { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; }
            .detail-row { padding: 10px 0; border-bottom: 1px solid #eee; }
            .detail-row:last-child { border-bottom: none; }
            .label { font-weight: bold; color: #d946ef; }
            .footer { text-align: center; padding: 20px; color: #666; font-size: 14px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Appointment Confirmed!</h1>
            </div>
            <div class="content">
              <p>Hi ${data.name},</p>
              <p>Thank you for booking a consultation with MH Digital Solution! We're excited to help you achieve your digital goals.</p>
              
              <div class="details">
                <h3 style="margin-top: 0; color: #d946ef;">Appointment Details</h3>
                <div class="detail-row">
                  <span class="label">Service:</span> ${data.service}
                </div>
                <div class="detail-row">
                  <span class="label">Date:</span> ${data.date}
                </div>
                <div class="detail-row">
                  <span class="label">Time:</span> ${data.time}
                </div>
                ${data.phone ? `<div class="detail-row"><span class="label">Phone:</span> ${data.phone}</div>` : ""}
                ${data.message ? `<div class="detail-row"><span class="label">Your Message:</span> ${data.message}</div>` : ""}
              </div>
              
              <p>We'll call you shortly to confirm the details. If you need to reschedule or have any questions, feel free to contact us at <a href="tel:+17072491222">+1 (707) 249-1222</a> or reply to this email.</p>
              
              <p>Best regards,<br>The MH Digital Solution Team</p>
            </div>
            <div class="footer">
              <p>MH Digital Solution | +1 (707) 249-1222 | mhdigitalsolutionsus@gmail.com</p>
              <p><a href="https://www.mhdigitalsolution.com">www.mhdigitalsolution.com</a></p>
            </div>
          </div>
        </body>
      </html>
    `

    await transporter.sendMail({
      from: `"MH Digital Solution" <${process.env.GMAIL_USER || "mhdigitalsolutionsus@gmail.com"}>`,
      to: email,
      subject: `Appointment Confirmation - ${data.date} at ${data.time}`,
      html,
    })

    console.log("[v0] Appointment confirmation sent to:", email)
  } catch (error) {
    console.error("[v0] Error sending appointment confirmation:", error)
    throw error
  }
}

export async function sendAdminNotification(data: AppointmentData) {
  try {
    const transporter = createTransporter()
    const adminEmail = process.env.ADMIN_EMAIL || "mhdigitalsolutionsus@gmail.com"

    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #d946ef 0%, #ec4899 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .details { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; }
            .detail-row { padding: 10px 0; border-bottom: 1px solid #eee; }
            .detail-row:last-child { border-bottom: none; }
            .label { font-weight: bold; color: #d946ef; }
            .urgent { background: #fee; border-left: 4px solid #f00; padding: 15px; margin: 20px 0; border-radius: 4px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🔔 New Appointment Booked</h1>
            </div>
            <div class="content">
              <div class="urgent">
                <strong>Action Required:</strong> Please contact the client to confirm the appointment.
              </div>
              
              <div class="details">
                <h3 style="margin-top: 0; color: #d946ef;">Client Information</h3>
                <div class="detail-row">
                  <span class="label">Name:</span> ${data.name}
                </div>
                <div class="detail-row">
                  <span class="label">Email:</span> <a href="mailto:${data.email}">${data.email}</a>
                </div>
                <div class="detail-row">
                  <span class="label">Phone:</span> <a href="tel:${data.phone}">${data.phone || "Not provided"}</a>
                </div>
                <div class="detail-row">
                  <span class="label">Service:</span> ${data.service}
                </div>
                <div class="detail-row">
                  <span class="label">Preferred Date:</span> ${data.date}
                </div>
                <div class="detail-row">
                  <span class="label">Preferred Time:</span> ${data.time}
                </div>
                ${data.message ? `<div class="detail-row"><span class="label">Message:</span> ${data.message}</div>` : ""}
              </div>
              
              <p><strong>Next Steps:</strong></p>
              <ol>
                <li>Call the client at ${data.phone || data.email} to confirm</li>
                <li>Add to calendar: ${data.date} at ${data.time}</li>
                <li>Prepare consultation materials for ${data.service}</li>
              </ol>
            </div>
          </div>
        </body>
      </html>
    `

    await transporter.sendMail({
      from: `"MH Digital Solution Appointments" <${process.env.GMAIL_USER || "mhdigitalsolutionsus@gmail.com"}>`,
      to: adminEmail,
      subject: `🔔 New Appointment: ${data.name} - ${data.service} on ${data.date}`,
      html,
    })

    console.log("[v0] Admin notification sent to:", adminEmail)
  } catch (error) {
    console.error("[v0] Error sending admin notification:", error)
    throw error
  }
}

export async function sendEmail(to: string, subject: string, html: string) {
  try {
    const transporter = createTransporter()

    await transporter.sendMail({
      from: `"MH Digital Solution" <${process.env.GMAIL_USER || "mhdigitalsolutionsus@gmail.com"}>`,
      to,
      subject,
      html,
    })

    console.log("[v0] Email sent to:", to)
  } catch (error) {
    console.error("[v0] Error sending email:", error)
    throw error
  }
}
