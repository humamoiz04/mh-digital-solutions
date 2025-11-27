import nodemailer from "nodemailer"

export async function sendAppointmentConfirmation(
  email: string,
  appointmentData: {
    name: string
    email: string
    phone: string
    service: string
    date: string
    time: string
    message?: string
  },
) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASSWORD,
    },
  })

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
          .detail { background: white; padding: 15px; margin: 10px 0; border-left: 4px solid #667eea; }
          .footer { text-align: center; margin-top: 20px; color: #666; font-size: 14px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Appointment Confirmed!</h1>
          </div>
          <div class="content">
            <p>Dear ${appointmentData.name},</p>
            <p>Thank you for booking an appointment with MH Digital Solution. We've received your request and will contact you shortly to confirm.</p>
            
            <div class="detail">
              <strong>Service:</strong> ${appointmentData.service}
            </div>
            <div class="detail">
              <strong>Date:</strong> ${appointmentData.date}
            </div>
            <div class="detail">
              <strong>Time:</strong> ${appointmentData.time}
            </div>
            <div class="detail">
              <strong>Phone:</strong> ${appointmentData.phone}
            </div>
            ${appointmentData.message ? `<div class="detail"><strong>Message:</strong> ${appointmentData.message}</div>` : ""}
            
            <p>If you need to make any changes or have questions, please call us at +1 (707) 249-1222 or reply to this email.</p>
            
            <div class="footer">
              <p>MH Digital Solution<br>Your Partner in Digital Success</p>
            </div>
          </div>
        </div>
      </body>
    </html>
  `

  await transporter.sendMail({
    from: process.env.GMAIL_USER,
    to: email,
    subject: "Appointment Confirmation - MH Digital Solution",
    html,
  })
}

export async function sendAdminNotification(appointmentData: {
  name: string
  email: string
  phone: string
  service: string
  date: string
  time: string
  message?: string
}) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASSWORD,
    },
  })

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
          .detail { background: white; padding: 15px; margin: 10px 0; border-left: 4px solid #f5576c; }
          .urgent { background: #fff3cd; padding: 15px; border-radius: 5px; margin: 20px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Appointment Booking</h1>
          </div>
          <div class="content">
            <div class="urgent">
              <strong>Action Required:</strong> A new appointment has been booked. Please contact the client to confirm.
            </div>
            
            <div class="detail">
              <strong>Client Name:</strong> ${appointmentData.name}
            </div>
            <div class="detail">
              <strong>Email:</strong> ${appointmentData.email}
            </div>
            <div class="detail">
              <strong>Phone:</strong> ${appointmentData.phone}
            </div>
            <div class="detail">
              <strong>Service Requested:</strong> ${appointmentData.service}
            </div>
            <div class="detail">
              <strong>Preferred Date:</strong> ${appointmentData.date}
            </div>
            <div class="detail">
              <strong>Preferred Time:</strong> ${appointmentData.time}
            </div>
            ${appointmentData.message ? `<div class="detail"><strong>Additional Message:</strong> ${appointmentData.message}</div>` : ""}
          </div>
        </div>
      </body>
    </html>
  `

  await transporter.sendMail({
    from: process.env.GMAIL_USER,
    to: process.env.ADMIN_EMAIL || "mhdigitalsolutionsus@gmail.com",
    subject: `New Appointment: ${appointmentData.service} - ${appointmentData.name}`,
    html,
  })
}

export async function sendEmail(to: string, subject: string, html: string) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASSWORD,
    },
  })

  await transporter.sendMail({
    from: process.env.GMAIL_USER,
    to,
    subject,
    html,
  })
}
