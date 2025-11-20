import nodemailer from "nodemailer"

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

  if (!process.env.GMAIL_USER || !process.env.GMAIL_PASSWORD) {
    console.error("[v0] Gmail credentials not configured")
    return
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASSWORD,
    },
  })

  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #ec4899 0%, #a855f7 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
          .appointment-details { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; }
          .detail-row { display: flex; padding: 10px 0; border-bottom: 1px solid #eee; }
          .detail-label { font-weight: bold; width: 120px; color: #666; }
          .detail-value { flex: 1; color: #333; }
          .footer { text-align: center; padding: 20px; color: #666; font-size: 14px; }
          .button { display: inline-block; background: linear-gradient(135deg, #ec4899 0%, #a855f7 100%); color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; margin: 20px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Appointment Confirmed! 🎉</h1>
          </div>
          <div class="content">
            <p>Dear ${appointmentData.name},</p>
            <p>Thank you for booking a consultation with MH Digital Solutions. We're excited to help you achieve your digital goals!</p>
            
            <div class="appointment-details">
              <h3 style="color: #ec4899; margin-top: 0;">Your Appointment Details</h3>
              <div class="detail-row">
                <span class="detail-label">Service:</span>
                <span class="detail-value">${appointmentData.service}</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Date:</span>
                <span class="detail-value">${appointmentData.date}</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Time:</span>
                <span class="detail-value">${appointmentData.time}</span>
              </div>
              ${
                appointmentData.phone
                  ? `
              <div class="detail-row">
                <span class="detail-label">Phone:</span>
                <span class="detail-value">${appointmentData.phone}</span>
              </div>
              `
                  : ""
              }
              ${
                appointmentData.message
                  ? `
              <div class="detail-row">
                <span class="detail-label">Message:</span>
                <span class="detail-value">${appointmentData.message}</span>
              </div>
              `
                  : ""
              }
            </div>

            <p>One of our experts will contact you shortly to confirm the details and prepare for our consultation.</p>
            
            <p>In the meantime, feel free to explore our services or reach out if you have any questions:</p>
            <p style="text-align: center;">
              <a href="tel:+17072491222" style="color: #ec4899; text-decoration: none; font-weight: bold;">+1 (707) 249-1222</a>
            </p>
            
            <p>Looking forward to speaking with you!</p>
            <p><strong>MH Digital Solutions Team</strong></p>
          </div>
          <div class="footer">
            <p>MH Digital Solutions | Austin, Texas</p>
            <p>
              <a href="https://www.mhdigitalsolution.com" style="color: #ec4899; text-decoration: none;">www.mhdigitalsolution.com</a>
            </p>
          </div>
        </div>
      </body>
    </html>
  `

  try {
    await transporter.sendMail({
      from: `"MH Digital Solutions" <${process.env.GMAIL_USER}>`,
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

  if (!process.env.GMAIL_USER || !process.env.GMAIL_PASSWORD || !process.env.ADMIN_EMAIL) {
    console.error("[v0] Email credentials not configured")
    return
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASSWORD,
    },
  })

  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #ec4899 0%, #a855f7 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
          .appointment-details { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; }
          .detail-row { display: flex; padding: 10px 0; border-bottom: 1px solid #eee; }
          .detail-label { font-weight: bold; width: 120px; color: #666; }
          .detail-value { flex: 1; color: #333; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🔔 New Appointment Booked</h1>
          </div>
          <div class="content">
            <p><strong>A new appointment has been scheduled!</strong></p>
            
            <div class="appointment-details">
              <h3 style="color: #ec4899; margin-top: 0;">Client Information</h3>
              <div class="detail-row">
                <span class="detail-label">Name:</span>
                <span class="detail-value">${appointmentData.name}</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Email:</span>
                <span class="detail-value"><a href="mailto:${appointmentData.email}">${appointmentData.email}</a></span>
              </div>
              ${
                appointmentData.phone
                  ? `
              <div class="detail-row">
                <span class="detail-label">Phone:</span>
                <span class="detail-value"><a href="tel:${appointmentData.phone}">${appointmentData.phone}</a></span>
              </div>
              `
                  : ""
              }
              <div class="detail-row">
                <span class="detail-label">Service:</span>
                <span class="detail-value">${appointmentData.service}</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Date:</span>
                <span class="detail-value">${appointmentData.date}</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Time:</span>
                <span class="detail-value">${appointmentData.time}</span>
              </div>
              ${
                appointmentData.message
                  ? `
              <div class="detail-row">
                <span class="detail-label">Message:</span>
                <span class="detail-value">${appointmentData.message}</span>
              </div>
              `
                  : ""
              }
            </div>

            <p><strong>Action Required:</strong> Please contact the client to confirm the appointment details.</p>
          </div>
        </div>
      </body>
    </html>
  `

  try {
    await transporter.sendMail({
      from: `"MH Digital Solutions" <${process.env.GMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL,
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

  if (!process.env.GMAIL_USER || !process.env.GMAIL_PASSWORD) {
    console.error("[v0] Gmail credentials not configured")
    return
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASSWORD,
    },
  })

  try {
    await transporter.sendMail({
      from: `"MH Digital Solutions" <${process.env.GMAIL_USER}>`,
      to: options.to,
      subject: options.subject,
      html: options.html,
    })
    console.log("[v0] Email sent successfully")
  } catch (error) {
    console.error("[v0] Error sending email:", error)
  }
}
