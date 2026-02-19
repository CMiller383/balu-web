# Balu Web

Marketing launch site for Balu.

## Setup

1. Install dependencies:
   npm install
2. Add environment variables in `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
RESEND_API_KEY=your_resend_api_key
WAITLIST_NOTIFY_TO=you@example.com
WAITLIST_FROM_EMAIL=Balu <onboarding@yourdomain.com>
```

3. Run the app:
   npm run dev

## Waitlist API

Endpoint: `POST /api/waitlist`

Request JSON:
- `email` (required)
- `source` (optional, defaults to `landing_v1`)

Responses:
- `201` `{ ok: true }`
- `400` `{ ok: false, error: "invalid_email" }`
- `429` `{ ok: false, error: "rate_limited" }`
- `500` `{ ok: false, error: "server_error" }`
