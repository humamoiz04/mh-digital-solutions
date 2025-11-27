import nodemailer from "nodemailer"

interface AppointmentData {
  name: string
  email: string
  phone: string
  service: string
  date: string
  time: string
  message?: string
}

function createTransporter() {
  const gmailUser = process.env.GMAIL_USER || "mhdigitalsolutionsus@gmail.com"
  const gmailPassword = process.env.GMAIL_PASSWORD || "humamoiz07@#$"

  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: gmailUser,
      pass: gmailPassword,
    },
  })
}

// Send appointment confirmation email to customer
export async function sendAppointmentConfirmation(
  customerEmail: string,
  appointmentData: AppointmentData,
): Promise<void> {
  try {
    const transporter = createTransporter()

    const html = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
    .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
    .info-box { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #667eea; }
    .info-row { margin: 10px 0; }
    .label { font-weight: bold; color: #667eea; }
    .footer { text-align: center; margin-top: 30px; color: #666; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Appointment Confirmed!</h1>
      <p>We're excited to meet with you</p>
    </div>
    <div class="content">
      <p>Hi ${appointmentData.name},</p>
      <p>Thank you for scheduling an appointment with MH Digital Solutions. We've received your request and confirmed the following details:</p>
      
      <div class="info-box">
        <div class="info-row"><span class="label">Service:</span> ${appointmentData.service}</div>
        <div class="info-row"><span class="label">Date:</span> ${appointmentData.date}</div>
        <div class="info-row"><span class="label">Time:</span> ${appointmentData.time}</div>
        <div class="info-row"><span class="label">Contact:</span> ${appointmentData.phone}</div>
        ${appointmentData.message ? `<div class="info-row"><span class="label">Message:</span> ${appointmentData.message}</div>` : ""}
      </div>
      
      <p>Our team will reach out to you shortly to confirm your appointment. If you need to make any changes or have questions, please don't hesitate to contact us at <strong>+1 (707) 249-1222</strong>.</p>
      
      <p>We look forward to helping you achieve your digital goals!</p>
      
      <p>Best regards,<br><strong>MH Digital Solutions Team</strong></p>
    </div>
    <div class="footer">
      <p>MH Digital Solutions | Digital Marketing & Web Development</p>
      <p>Phone: +1 (707) 249-1222 | Email: mhdigitalsolutionsus@gmail.com</p>
    </div>
  </div>
</body>
</html>
    `

    await transporter.sendMail({
      from: '"MH Digital Solutions" <mhdigitalsolutionsus@gmail.com>',
      to: customerEmail,
      subject: `Appointment Confirmation - ${appointmentData.service}`,
      html,
    })

    console.log("[v0] Appointment confirmation email sent to:", customerEmail)
  } catch (error) {
    console.error("[v0] Error sending appointment confirmation email:", error)
    throw error
  }
}

// Send admin notification email
export async function sendAdminNotification(appointmentData: AppointmentData): Promise<void> {
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
    .header { background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
    .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
    .info-box { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #f5576c; }
    .info-row { margin: 10px 0; }
    .label { font-weight: bold; color: #f5576c; }
    .urgent { background: #fff3cd; padding: 15px; border-radius: 5px; border-left: 4px solid #ffc107; margin: 20px 0; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🔔 New Appointment Booking</h1>
      <p>Action Required</p>
    </div>
    <div class="content">
      <div class="urgent">
        <strong>⚠️ New appointment request received - Please follow up</strong>
      </div>
      
      <div class="info-box">
        <h3>Customer Information</h3>
        <div class="info-row"><span class="label">Name:</span> ${appointmentData.name}</div>
        <div class="info-row"><span class="label">Email:</span> <a href="mailto:${appointmentData.email}">${appointmentData.email}</a></div>
        <div class="info-row"><span class="label">Phone:</span> <a href="tel:${appointmentData.phone}">${appointmentData.phone}</a></div>
      </div>
      
      <div class="info-box">
        <h3>Appointment Details</h3>
        <div class="info-row"><span class="label">Service:</span> ${appointmentData.service}</div>
        <div class="info-row"><span class="label">Requested Date:</span> ${appointmentData.date}</div>
        <div class="info-row"><span class="label">Requested Time:</span> ${appointmentData.time}</div>
        ${appointmentData.message ? `<div class="info-row"><span class="label">Message:</span> ${appointmentData.message}</div>` : ""}
      </div>
      
      <p><strong>Next Steps:</strong></p>
      <ul>
        <li>Contact the customer to confirm availability</li>
        <li>Send calendar invitation</li>
        <li>Prepare relevant materials for the consultation</li>
      </ul>
    </div>
  </div>
</body>
</html>
    `

    await transporter.sendMail({
      from: '"MH Digital Solutions - Appointments" <mhdigitalsolutionsus@gmail.com>',
      to: adminEmail,
      subject: `🔔 New Appointment: ${appointmentData.service} - ${appointmentData.name}`,
      html,
    })

    console.log("[v0] Admin notification email sent to:", adminEmail)
  } catch (error) {
    console.error("[v0] Error sending admin notification email:", error)
    throw error
  }
}

// Generic email sending function for contact forms
export async function sendEmail(to: string, subject: string, html: string): Promise<void> {
  try {
    const transporter = createTransporter()

    await transporter.sendMail({
      from: '"MH Digital Solutions" <mhdigitalsolutionsus@gmail.com>',
      to,
      subject,
      html,
    })

    console.log("[v0] Email sent successfully to:", to)
  } catch (error) {
    console.error("[v0] Error sending email:", error)
    throw error
  }
}
