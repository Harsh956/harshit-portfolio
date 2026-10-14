import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    console.log(`[Contact Form Submission] From: ${name} (${email}) | Subject: ${subject}`);
    console.log(`Message: ${message}`);

    // Forward silently to Harshit's email inbox without exposing email client to visitor
    try {
      await fetch('https://formsubmit.co/ajax/saxenah003@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Referer': 'https://harshit-portfolio.vercel.app'
        },
        body: JSON.stringify({
          name,
          email,
          _subject: subject || `New Portfolio Inquiry from ${name}`,
          message: `Sender: ${name} (${email})\nSubject: ${subject}\n\nMessage:\n${message}`,
        })
      });
    } catch (forwardErr) {
      console.error('Error forwarding email:', forwardErr);
    }

    return NextResponse.json({
      success: true,
      message: 'Message delivered successfully',
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to process inquiry' },
      { status: 500 }
    );
  }
}
