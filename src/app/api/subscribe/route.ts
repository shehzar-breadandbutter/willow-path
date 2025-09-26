import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    const MailchimpKey = process.env.MAILCHIMP_API_KEY;
    const MailchimpServer = process.env.MAILCHIMP_API_SERVER;
    const MailchimpAudience = process.env.MAILCHIMP_LIST_ID;

    if (!MailchimpKey || !MailchimpServer || !MailchimpAudience) {
      throw new Error('Missing Mailchimp environment variables');
    }

    const customUrl = `https://${MailchimpServer}.api.mailchimp.com/3.0/lists/${MailchimpAudience}/members`;

    const response = await fetch(customUrl, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${Buffer.from(`anystring:${MailchimpKey}`).toString('base64')}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email_address: email,
        status: 'subscribed'
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json({ error: errorData.detail }, { status: response.status });
    }

    const received = await response.json();
    return NextResponse.json(received);
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
