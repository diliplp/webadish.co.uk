import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface ContactPayload {
  name?: string;
  email?: string;
  website?: string;
  message?: string;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;
    const name = body.name?.trim();
    const email = body.email?.trim();
    const website = body.website?.trim() || 'Not provided';
    const message = body.message?.trim();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }

    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT || 587);
    const secure = process.env.SMTP_SECURE === 'true';
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const to = process.env.SMTP_TO || process.env.SMTP_FROM_EMAIL;
    const fromName = process.env.SMTP_FROM_NAME || 'WebAdish Website';
    const fromEmail = process.env.SMTP_FROM_EMAIL;

    if (!host || !user || !pass || !fromEmail || !to) {
      return NextResponse.json({ error: 'SMTP is not fully configured.' }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
    });

    await transporter.sendMail({
      from: `"${fromName}" <${fromEmail}>`,
      to,
      replyTo: email,
      subject: `New contact form enquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nWebsite: ${website}\n\nMessage:\n${message}`,
      html: `
        <h2>New contact form enquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Website:</strong> ${website}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form mail error:', error);
    return NextResponse.json({ error: 'Failed to send message.' }, { status: 500 });
  }
}
