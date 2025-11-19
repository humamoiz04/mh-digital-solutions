import nodemailer from "nodemailer"

// Create reusable transporter
const transporter = nodemailer.createTransporter({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER || "mhdigitalsolutionsus@gmail.com",
    pass: process.env.GMAIL_PASSWORD,
  },
})

export async function sendAppointmentConfirmation(
  email: string,
  data: {
    name: string
    email: string
    phone: string
    service: string
    date: string
    time: string
    message?: string
  }
) {
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #ec4899, #a855f7); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
          .details { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; }
          .detail-row { padding: 10px 0; border-bottom: 1px solid #e5e7eb; }
          .detail-label { font-weight: bold; color: #6b7280; }
          .button { background: #ec4899; color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; display: inline-block; margin: 20px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Appointment Confirmed!</h1>
            <p>Thank you for choosing MH Digital Solutions</p>
          </div>
          <div class="content">
            <p>Dear ${data.name},</p>
            <p>Your appointment has been successfully scheduled. We're excited to help your business grow!</p>
            
            <div class="details">
              <div class="detail-row">
                <span class="detail-label">Service:</span> ${data.service}
              </div>
              <div class="detail-row">
                <span class="detail-label">Date:</span> ${data.date}
              </div>
              <div class="detail-row">
                <span class="detail-label">Time:</span> ${data.time}
              </div>
              <div class="detail-row">
                <span class="detail-label">Contact:</span> ${data.phone}
              </div>
              ${data.message ? `<div class="detail-row"><span class="detail-label">Message:</span> ${data.message}</div>` : ""}
            </div>

            <p>Our team will contact you shortly to confirm the details and answer any questions you might have.</p>
            
            <a href="tel:+17072491222" class="button">Call Us: +1 (707) 249-1222</a>
            
            <p style="color: #6b7280; font-size: 14px; margin-top: 30px;">
              If you need to reschedule or have any questions, please don't hesitate to contact us at +1 (707) 249-1222 or reply to this email.
            </p>
          </div>
        </div>
      </body>
    </html>
  `

  await transporter.sendMail({
    from: `"MH Digital Solutions" <${process.env.GMAIL_USER}>`,
    to: email,
    subject: "Appointment Confirmation - MH Digital Solutions",
    html,
  })
}

export async function sendAdminNotification(data: {
  name: string
  email: string
  phone: string
  service: string
  date: string
  time: string
  message?: string
}) {
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #1f2937; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
          .content { background: #f9fafb; padding: 20px; border-radius: 0 0 8px 8px; }
          .detail-box { background: white; padding: 15px; margin: 10px 0; border-left: 4px solid #ec4899; }
          .urgent { background: #fef2f2; border-color: #ef4444; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>🔔 New Appointment Booking</h2>
          </div>
          <div class="content">
            <div class="detail-box urgent">
              <strong>Client Name:</strong> ${data.name}
            </div>
            <div class="detail-box">
              <strong>Email:</strong> ${data.email}
            </div>
            <div class="detail-box">
              <strong>Phone:</strong> ${data.phone}
            </div>
            <div class="detail-box">
              <strong>Service Requested:</strong> ${data.service}
            </div>
            <div class="detail-box">
              <strong>Preferred Date:</strong> ${data.date}
            </div>
            <div class="detail-box">
              <strong>Preferred Time:</strong> ${data.time}
            </div>
            ${data.message ? `<div class="detail-box"><strong>Additional Message:</strong><br>${data.message}</div>` : ""}
            <p style="margin-top: 20px; color: #6b7280;">
              Please follow up with this client within 24 hours to confirm the appointment details.
            </p>
          </div>
        </div>
      </body>
    </html>
  `

  const adminEmail = process.env.ADMIN_EMAIL || "mhdigitalsolutionsus@gmail.com"

  await transporter.sendMail({
    from: `"MH Digital Solutions - Bookings" <${process.env.GMAIL_USER}>`,
    to: adminEmail,
    subject: `🔔 New Appointment: ${data.service} - ${data.name}`,
    html,
  })
}

export async function sendEmail(to: string, subject: string, html: string) {
  await transporter.sendMail({
    from: `"MH Digital Solutions" <${process.env.GMAIL_USER}>`,
    to,
    subject,
    html,
  })
}
