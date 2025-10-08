import { NextResponse } from 'next/server';

const FORM_URL = (portalId: string, formId: string) =>
  `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`;

export const POST = async (request: Request) => {
  const { email, hutk, pageUri, pageName } = await request.json();

  if (!email) {
    return NextResponse.json(
      { error: 'Email is required' },
      { status: 400 }
    );
  }

  const fields = [
    { name: 'email', value: email },
  ];

  const payload = {
    fields,
    context: {
      pageUri,
      pageName,
      hutk: hutk
    }
  };

  try {
    const res = await fetch(
      FORM_URL(
        process.env.HUBSPOT_PORTAL_ID!,
        process.env.HUBSPOT_FORM_ID_NEWSLETTER! // Your new form ID
      ),
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.HUBSPOT_ACCESS_TOKEN}`,
        },
        body: JSON.stringify(payload),
      }
    );

    if (!res.ok) {
      const errText = await res.text();
      console.error('HubSpot form error:', errText);
      return NextResponse.json(
        { error: 'Failed to submit to HubSpot', details: errText }, 
        { status: res.status }
      );
    }

    const data = await res.json();
    return NextResponse.json({ ok: true, data });
  } catch (error) {
    console.error('HubSpot form exception:', error);
    return NextResponse.json(
      { error: 'Failed to submit to HubSpot' }, 
      { status: 500 }
    );
  }
};