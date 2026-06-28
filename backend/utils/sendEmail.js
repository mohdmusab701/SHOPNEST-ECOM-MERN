const nodemailer = require('nodemailer');

const sendEmail = async ({ email, subject, message, html }) => {
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
        throw new Error('Email credentials are not configured');
    }

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject,
        text: message,
        html: html || message
    };

    return transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
