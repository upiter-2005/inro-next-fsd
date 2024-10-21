import nodemailer from 'nodemailer'

export const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.email',
  port: 587,
  secure: false,
  service: 'gmail',
  auth: {
    user: process.env.NEXT_GMAIL_APP_EMAIL,
    pass: process.env.NEXT_GMAIL_APP_PASS,
  },

})



