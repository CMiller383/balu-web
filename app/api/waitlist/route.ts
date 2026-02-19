import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

type RateBucket = { count: number; firstAttemptAt: number };

const WINDOW_MS = 15 * 60 * 1000;
const MAX_REQUESTS = 5;
const RATE_MAP = new Map<string, RateBucket>();

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function getClientIp(request: NextRequest): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }

  const realIp = request.headers.get("x-real-ip");
  if (realIp) {
    return realIp;
  }

  return "unknown";
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const existing = RATE_MAP.get(ip);

  if (!existing) {
    RATE_MAP.set(ip, { count: 1, firstAttemptAt: now });
    return false;
  }

  if (now - existing.firstAttemptAt > WINDOW_MS) {
    RATE_MAP.set(ip, { count: 1, firstAttemptAt: now });
    return false;
  }

  if (existing.count >= MAX_REQUESTS) {
    return true;
  }

  RATE_MAP.set(ip, { ...existing, count: existing.count + 1 });
  return false;
}

export async function POST(request: NextRequest) {
  const ip = getClientIp(request);
  if (isRateLimited(ip)) {
    return NextResponse.json({ ok: false, error: "rate_limited" }, { status: 429 });
  }

  let payload: { email?: string; source?: string };

  try {
    payload = (await request.json()) as { email?: string; source?: string };
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_email" }, { status: 400 });
  }

  const normalizedEmail = payload.email?.trim().toLowerCase();
  if (!normalizedEmail || !EMAIL_REGEX.test(normalizedEmail)) {
    return NextResponse.json({ ok: false, error: "invalid_email" }, { status: 400 });
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.WAITLIST_FROM_EMAIL;
  const notifyTo = process.env.WAITLIST_NOTIFY_TO;

  if (!resendApiKey || !fromEmail || !notifyTo) {
    return NextResponse.json({ ok: false, error: "server_error" }, { status: 500 });
  }

  const resend = new Resend(resendApiKey);

  try {
    await resend.emails.send({
      from: fromEmail,
      to: [notifyTo],
      subject: "New Balu waitlist signup",
      text:
        `Email: ${normalizedEmail}\n` +
        `Source: ${payload.source?.trim() || "landing_v1"}\n` +
        `Time: ${new Date().toISOString()}\n` +
        `IP: ${ip}`,
    });

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch {
    return NextResponse.json({ ok: false, error: "server_error" }, { status: 500 });
  }
}
