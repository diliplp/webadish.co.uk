import { NextResponse } from 'next/server';
import { runScan, normaliseTarget } from '@/lib/scanner';

export const runtime = 'nodejs';

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const raw = body?.url;

  if (!raw || typeof raw !== 'string') {
    return NextResponse.json({ error: 'Please enter a website address to scan.' }, { status: 400 });
  }

  // Validate / SSRF-guard before doing any work.
  try {
    normaliseTarget(raw);
  } catch (e) {
    return NextResponse.json(
      { error: e instanceof Error ? e.message : 'Invalid website address.' },
      { status: 400 },
    );
  }

  try {
    const result = await runScan(raw, { safeBrowsingKey: process.env.SAFE_BROWSING_API_KEY });
    return NextResponse.json(result);
  } catch (e) {
    console.error('Scan error:', e);
    return NextResponse.json({ error: 'The scan failed unexpectedly. Please try again.' }, { status: 500 });
  }
}
