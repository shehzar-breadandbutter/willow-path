import { NextResponse } from 'next/server';

const FORM_URL = (portalId: string, formId: string) =>
  `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`;

export const POST = async (request: Request) => {
  const { name, email, topics, otherTopic, hutk, pageUri, pageName } = await request.json();

  const selected: string[] = Array.isArray(topics) ? [...topics] : [];
  const other = (otherTopic ?? '').trim();

  if (other && !selected.includes('Other')) selected.push('Other');
  if (selected.includes('Other') && !other) {
    return NextResponse.json(
      { error: "Please specify a topic when selecting 'Other'." },
      { status: 400 }
    );
  }

  const fields = [
    { name: 'email', value: email },
    { name: 'firstname', value: name },
    { name: 'discussed_topics', value: selected.join(';') },
    { name: 'other_topic', value: other || '' },
  ];

  // Add context for better tracking in HubSpot
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
        process.env.HUBSPOT_FORM_ID!
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