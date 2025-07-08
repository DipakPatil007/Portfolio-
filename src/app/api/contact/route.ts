import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !subject || !message) {
        return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER || "Dipakpa2018@gmail.com",
            pass: process.env.EMAIL_PASS || "pepw zalt rbcf kypa",
            // This is not the actual password, its a gmail app password
            // You can generate an app password from your Google account settings
        },
    });

    try {
        await transporter.sendMail({
            from: `"${name}" <${email}>`,
            to: process.env.EMAIL_USER || "Dipakpa2018@gmail.com", // Send to your own email
            subject: `[Portfolio] ${subject}`,
            text: message,
            html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong><br/>${message}</p>`,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }
}