export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';
import nodemailer from 'nodemailer';

// firstName: '',
// lastName: '',
// email: '',
// message

export const POST = async (request: Request) => {
    try {
        const form = await request.json();

        console.log('form:', form);

        const msg = {
            to: `"${process.env.MAIL_NAME}" <${process.env.MAIL_EMAIL}>`,
            from: `"${form.name}" <${process.env.MAIL_USERNAME}>`,
            subject: 'Message from Website',
            replyTo: form.email,
            html: `<html>
            <head>
            <title>Contact</title>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
            </head>
            <body style="font-size: 1.2rem;">
            <br>Name: ${form.name}<br><br>

            Email: ${form.email}<br><br>

            Message: ${form.message}<br><br>

            </body>
            </html>
            `
        };

        // See https://nodemailer.com/ for more
        const transporter = nodemailer.createTransport({
            // Follow the instructions from your mail provider.
            host: process.env.MAIL_HOST,
            port: 587,
            secure: false,
            auth: {
                user: process.env.MAIL_USERNAME,
                pass: process.env.MAIL_PASSWORD
            }
        });

        // Send
        const info = await transporter.sendMail(msg);

        // Check response
        if (info.messageId) {
            // Success
            return new Response('success', {
                status: 200,
            });
        }
    } catch (err) {
        // Return message
        return new Response('error', {
            status: 500,
        });
    }
};
