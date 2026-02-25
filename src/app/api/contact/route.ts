import { NextRequest, NextResponse } from "next/server";

// Item #1: Contact form API route
// For production, install and configure a mail provider:
//   npm install resend (or nodemailer)
// Then uncomment the email sending code below.

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  serviceArea?: string;
  message?: string;
  source: "contact" | "quote";
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    // Validate required fields
    if (!body.name || !body.email) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Rate limiting: simple in-memory check (use Redis in production)
    // For now, we just proceed

    // ── Send email (uncomment when Resend is configured) ──
    // import { Resend } from 'resend';
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'Kitchen Installers <noreply@kitchen-installers.com>',
    //   to: ['info@kitchen-installers.com'],
    //   replyTo: body.email,
    //   subject: `New ${body.source === 'quote' ? 'Quote Request' : 'Contact Form'} from ${body.name}`,
    //   html: `
    //     <h2>New ${body.source === 'quote' ? 'Quote Request' : 'Contact Submission'}</h2>
    //     <p><strong>Name:</strong> ${body.name}</p>
    //     <p><strong>Email:</strong> ${body.email}</p>
    //     <p><strong>Phone:</strong> ${body.phone || 'Not provided'}</p>
    //     <p><strong>Service Area:</strong> ${body.serviceArea || 'Not specified'}</p>
    //     <p><strong>Message:</strong></p>
    //     <p>${body.message || 'No message provided'}</p>
    //   `,
    // });

    // ── Log the submission (MVP: write to console, replace with DB) ──
    console.log("[Lead Captured]", {
      timestamp: new Date().toISOString(),
      source: body.source,
      name: body.name,
      email: body.email,
      phone: body.phone,
      serviceArea: body.serviceArea,
      message: body.message?.slice(0, 500),
    });

    return NextResponse.json(
      { success: true, message: "Thank you! We'll be in touch within 24 hours." },
      { status: 200 }
    );
  } catch {
    console.error("[Contact API Error]");
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
