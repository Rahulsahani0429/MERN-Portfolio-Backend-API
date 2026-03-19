import ContactMessage from '../models/ContactMessage.js';
import nodemailer from 'nodemailer';

export const sendMessage = async (req, res, next) => {
    try {
        const { name, email, message } = req.body;
        if (!name || !email || !message) {
            res.status(400);
            throw new Error('Please fill all fields');
        }

        // Save to Database
        const contactMessage = new ContactMessage({ name, email, message });
        await contactMessage.save();

        // Send Email via Nodemailer
        try {
            if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
                res.status(500);
                throw new Error('Server email configuration is missing. Please check .env file.');
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
                to: 'rahulsahani3348@gmail.com',
                replyTo: email,
                subject: `New Portfolio Message from ${name}`,
                text: `You have received a new message from your portfolio website.\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
            };

            await transporter.sendMail(mailOptions);
            res.status(201).json({ message: 'Message sent successfully' });
        } catch (emailError) {
            console.error('Real Server Email Error:', emailError);
            res.status(500);
            
            if (emailError.message.includes('535-5.7.8') || emailError.message.includes('Username and Password not accepted')) {
                throw new Error('Email authentication failed. Check Gmail app password.');
            }
            throw new Error('Failed to send email. Please try again later.');
        }

    } catch (error) {
        next(error);
    }
};
