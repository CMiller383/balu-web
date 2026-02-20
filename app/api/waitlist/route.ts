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

  const confirmationHtml = `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f8fafd;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafd;padding:48px 16px;">
    <tr><td align="center">
      <table width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;">

        <!-- Logo -->
        <tr><td align="center" style="padding-bottom:32px;">
          <img src="https://balu.live/logo-full.png" alt="Balu" width="120" style="display:block;height:auto;border:0;" />
        </td></tr>

        <!-- Card -->
        <tr><td style="background:rgba(255,255,255,0.92);border-radius:20px;padding:48px 40px;box-shadow:0 4px 32px rgba(74,159,212,0.10);border:1px solid rgba(74,159,212,0.12);">

          <!-- Accent line -->
          <table width="100%" cellpadding="0" cellspacing="0"><tr>
            <td style="height:3px;background:linear-gradient(90deg,#4a9fd4,#c87d5e);border-radius:2px;margin-bottom:36px;display:block;"></td>
          </tr></table>

          <p style="margin:0 0 8px;font-size:13px;letter-spacing:2.5px;text-transform:uppercase;color:#4a9fd4;font-weight:600;">You're on the list</p>
          <h1 style="margin:0 0 20px;font-size:30px;font-weight:700;color:#10243f;line-height:1.2;">Something good<br>is coming your way.</h1>

          <p style="margin:0 0 24px;font-size:16px;line-height:1.7;color:#5d6d82;">
            Thanks for joining the Balu waitlist. We're building something that helps you
            feel genuinely well — not just tracked. You'll be among the first to know when
            we open the doors.
          </p>

          <table cellpadding="0" cellspacing="0" style="margin:0 0 32px;">
            <tr>
              <td style="background:linear-gradient(135deg,#4a9fd4,#2d7fb5);border-radius:12px;padding:14px 28px;">
                <span style="color:#ffffff;font-size:15px;font-weight:600;letter-spacing:0.3px;">Early access · No spam · Unsubscribe anytime</span>
              </td>
            </tr>
          </table>

          <p style="margin:0;font-size:14px;color:#8fa3b8;line-height:1.6;">
            In the meantime, take a breath. You've got this.<br>
            — The Balu team
          </p>

        </td></tr>

        <!-- Footer -->
        <tr><td align="center" style="padding-top:28px;">
          <p style="margin:0;font-size:12px;color:#8fa3b8;line-height:1.8;">
            You're receiving this because you signed up at <strong style="color:#5d6d82;">balu.live</strong><br>
            This is a one-time confirmation — we won't email you until we launch.
          </p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;

  try {
    await Promise.all([
      resend.emails.send({
        from: fromEmail,
        to: [notifyTo],
        subject: "New Balu waitlist signup",
        text:
          `Email: ${normalizedEmail}\n` +
          `Source: ${payload.source?.trim() || "landing_v1"}\n` +
          `Time: ${new Date().toISOString()}\n` +
          `IP: ${ip}`,
      }),
      resend.emails.send({
        from: fromEmail,
        to: [normalizedEmail],
        subject: "You're on the Balu waitlist 🌿",
        html: confirmationHtml,
        text:
          `You're on the list.\n\n` +
          `Thanks for joining the Balu waitlist. We're building something that helps you feel genuinely well — not just tracked. You'll be among the first to know when we open the doors.\n\n` +
          `Early access · No spam · Unsubscribe anytime\n\n` +
          `In the meantime, take a breath. You've got this.\n— The Balu team`,
      }),
    ]);

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch {
    return NextResponse.json({ ok: false, error: "server_error" }, { status: 500 });
  }
}
