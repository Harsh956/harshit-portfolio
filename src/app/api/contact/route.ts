import { NextResponse } from 'next/server';

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

    // Log the message for server telemetry
    console.log(`[Contact Form Submission] From: ${name} (${email}) | Subject: ${subject}`);
    console.log(`Message: ${message}`);

    return NextResponse.json({
      success: true,
      message: 'Transmission received. Opening email client...',
      recipient: 'saxenah003@gmail.com',
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to process inquiry' },
      { status: 500 }
    );
  }
}
