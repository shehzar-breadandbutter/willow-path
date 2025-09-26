import { NextResponse } from 'next/server';
import { base } from '@/lib/airtable';

export const POST = async (request: Request) => {
  const { name, email, topics, otherTopic } = await request.json();

  const selected = Array.isArray(topics) ? [...topics] : [];
  const other = (otherTopic ?? '').trim();

  // Add "Other" if user typed something but didn't check it
  if (other && !selected.includes('Other')) selected.push('Other');

  // Validation: if "Other" is selected but no text
  if (selected.includes('Other') && !other) {
    return NextResponse.json({ error: 'Please specify a topic when selecting ‘Other’.' }, { status: 400 });
  }

  const record = {
    Name: name,
    Email: email,
    Topics: selected,
    'Other_Topic': other || null
  };

  try {
    const created = await base('Booking Table').create(record);
    return NextResponse.json({ id: created.id });
  } catch (error) {
    console.error('Airtable error:', error);
    return NextResponse.json({ error: 'Failed to create record in Airtable' }, { status: 500 });
  }
};
