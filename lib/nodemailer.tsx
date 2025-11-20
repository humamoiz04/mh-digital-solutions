import nodemailer from "nodemailer"

export async function sendAppointmentConfirmation(
  email: string,
  details: {
    name: string
    email: string
    phone?: string
    service: string
    date: string
    time: string
    message?: string
  },
) {
  const gmailUser = process.env.GMAIL_USER
  const gmailPassword = process.env.GMAIL_PASSWORD

  if (!gmailUser || !gmailPassword) {
    console.log("[v0] Email not sent: GMAIL credentials not configured")
    return
  }

  const transporter = nodemailer.createTransporter({
    service: "gmail",
    auth: {
      user: gmailUser,
      pass: gmailPassword,
    },
  })

  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #ec4899, #a855f7); padding: 30px; text-align: center; color: white; }
          .content { background: #f9f9f9; padding: 30px; }
          .details { background: white; padding: 20px; margin: 20px 0; border-radius: 8px; }
          .detail-row { padding: 10px 0; border-bottom: 1px solid #eee; }
          .label { font-weight: bold; color: #666; }
          .footer { text-align: center; padding: 20px; color: #666; font-size: 14px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Appointment Confirmed!</h1>
          </div>
          <div class="content">
            <p>Dear ${details.name},</p>
            <p>Thank you for booking a consultation with MH Digital Solutions. We're excited to discuss your digital needs!</p>
            <div class="details">
              <div class="detail-row"><span class="label">Service:</span> ${details.service}</div>
              <div class="detail-row"><span class="label">Date:</span> ${details.date}</div>
              <div class="detail-row"><span class="label">Time:</span> ${details.time}</div>
              ${details.phone ? `<div class="detail-row"><span class="label">Phone:</span> ${details.phone}</div>` : ""}
              ${details.message ? `<div class="detail-row"><span class="label">Message:</span> ${details.message}</div>` : ""}
            </div>
            <p>We'll call you shortly to confirm the details. If you have any questions, please call us at +1 (707) 249-1222.</p>
          </div>
          <div class="footer">
            <p>MH Digital Solutions</p>
            <p>mhdigitalsolutionsus@gmail.com | +1 (707) 249-1222</p>
          </div>
        </div>
      </body>
    </html>
  `

  try {
    await transporter.sendMail({
      from: `"MH Digital Solutions" <${gmailUser}>`,
      to: email,
      subject: "Appointment Confirmation - MH Digital Solutions",
      html: htmlContent,
    })
    console.log("[v0] Appointment confirmation email sent to:", email)
  } catch (error) {
    console.error("[v0] Error sending appointment confirmation:", error)
  }
}

export async function sendAdminNotification(details: {
  name: string
  email: string
  phone?: string
  service: string
  date: string
  time: string
  message?: string
}) {
  const gmailUser = process.env.GMAIL_USER
  const gmailPassword = process.env.GMAIL_PASSWORD
  const adminEmail = process.env.ADMIN_EMAIL || "mhdigitalsolutionsus@gmail.com"

  if (!gmailUser || !gmailPassword) {
    console.log("[v0] Admin notification not sent: GMAIL credentials not configured")
    return
  }

  const transporter = nodemailer.createTransporter({
    service: "gmail",
    auth: {
      user: gmailUser,
      pass: gmailPassword,
    },
  })

  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #ec4899; padding: 20px; color: white; }
          .content { background: #f9f9f9; padding: 20px; }
          .details { background: white; padding: 20px; margin: 20px 0; border-radius: 8px; }
          .detail-row { padding: 10px 0; border-bottom: 1px solid #eee; }
          .label { font-weight: bold; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>New Appointment Booking</h2>
          </div>
          <div class="content">
            <div class="details">
              <div class="detail-row"><span class="label">Name:</span> ${details.name}</div>
              <div class="detail-row"><span class="label">Email:</span> ${details.email}</div>
              ${details.phone ? `<div class="detail-row"><span class="label">Phone:</span> ${details.phone}</div>` : ""}
              <div class="detail-row"><span class="label">Service:</span> ${details.service}</div>
              <div class="detail-row"><span class="label">Date:</span> ${details.date}</div>
              <div class="detail-row"><span class="label">Time:</span> ${details.time}</div>
              ${details.message ? `<div class="detail-row"><span class="label">Message:</span> ${details.message}</div>` : ""}
            </div>
          </div>
        </div>
      </body>
    </html>
  `

  try {
    await transporter.sendMail({
      from: `"MH Digital Solutions Website" <${gmailUser}>`,
      to: adminEmail,
      subject: `New Appointment: ${details.name} - ${details.service}`,
      html: htmlContent,
    })
    console.log("[v0] Admin notification sent to:", adminEmail)
  } catch (error) {
    console.error("[v0] Error sending admin notification:", error)
  }
}

export async function sendEmail(to: string, subject: string, html: string) {
  const gmailUser = process.env.GMAIL_USER
  const gmailPassword = process.env.GMAIL_PASSWORD

  if (!gmailUser || !gmailPassword) {
    console.log("[v0] Email not sent: GMAIL credentials not configured")
    return
  }

  const transporter = nodemailer.createTransporter({
    service: "gmail",
    auth: {
      user: gmailUser,
      pass: gmailPassword,
    },
  })

  try {
    await transporter.sendMail({
      from: `"MH Digital Solutions" <${gmailUser}>`,
      to,
      subject,
      html,
    })
    console.log("[v0] Email sent successfully to:", to)
  } catch (error) {
    console.error("[v0] Error sending email:", error)
  }
}
