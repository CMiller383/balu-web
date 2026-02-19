# Balu — Product & Design Reference

A living reference doc for building the Balu app and any future marketing work.
Not a strict spec — use it as a north star.

---

## What Balu Is

Balu is a **daily private video check-in app**. Think BeReal, but for self-reflection instead of social performance. Once or twice a day, Balu prompts you with a thoughtful question. You record a short video (1–2 min), answer honestly, and stop. No audience. No feed. Just you.

Over time, your check-ins build a private, searchable archive of your own growth — a personal timeline of thoughts, feelings, and lessons you can revisit.

**The core tension Balu resolves:** people want to reflect and grow, but blank-page journaling is intimidating, social journaling creates performance anxiety, and habit apps feel like chores. Balu removes all three blockers.

---

## The Person We're Building For

- Wants to be more intentional about their days, but doesn't know where to start
- Tried journaling and abandoned it (blank page, no structure)
- Dislikes the performance aspect of public social apps
- Values their privacy — wouldn't want their inner life on a server they don't trust
- Probably 22–40, curious, growth-oriented, somewhat introspective
- Not necessarily into "wellness" as a brand identity — just wants to feel more grounded

---

## Core Product Pillars

1. **Prompted** — never a blank page. Balu provides the question, you provide the answer.
2. **Private by default** — no social graph, no sharing, no audience. Ever.
3. **Short** — 1–2 minutes max. Low friction, high habit formation.
4. **Timeline** — every check-in adds to a personal archive you can scroll back through.
5. **Calm** — no streaks that guilt you, no notifications that pressure you. Gentle reminders only.

---

## Features — Current Thinking

### In Development
- **Daily guided prompts** — morning focus mode + evening wind-down, rotating question library
- **Private video recording** — local-first where possible, encrypted storage
- **Personal timeline** — scrollable archive by date, searchable by keyword/transcript

### Planned
- **Streaks & consistency** — lightweight streak tracking, no punishment for missing days
- **Mood tagging** — quick emoji/mood tag at the start of each check-in
- **Mood trend insights** — visual chart of how you've felt across weeks and months

### Future / Ideas
- **AI reflection assistant** — reads your transcripts, surfaces themes, asks follow-up questions
- **"This day last year"** — resurface old check-ins on their anniversary
- **Themed prompt packs** — gratitude week, career clarity, relationship check-ins, etc.
- **Weekly summary digest** — email or in-app recap of your week's themes
- **Transcript search** — find any check-in by keyword from what you said
- **Highlight reel** — pin your best check-ins, export as a personal year-in-review
- **Partner mode** — optional, private prompt-sharing with one trusted person (not a feed)
- **Apple Watch prompt** — tap to start a check-in from your wrist

---

## Design Language

### Vibe
Calm, premium, minimal. The emotional references are **Calm** and **Headspace** — not sterile, but clean and considered. The interface should feel like opening a nice notebook, not opening an app.

Avoid: pressure, bright attention-grabbing colours, notification badges, dark patterns.

### Colour Palette

| Token | Hex | Use |
|---|---|---|
| Brand blue | `#4a9fd4` | Primary actions, links, highlights |
| Brand blue dark | `#2d7fb5` | Pressed states, strong accents |
| Brand blue light | `#7ec2e8` | Subtle tints, backgrounds |
| Terracotta | `#c87d5e` | Warm accents, secondary highlights |
| Terracotta light | `#e0a48a` | Soft warm backgrounds |
| Text primary | `#10243f` | Headings, body, dark navy |
| Text muted | `#5d6d82` | Descriptions, secondary text |
| Text subtle | `#8fa3b8` | Captions, timestamps, hints |
| Background | `#f8fafd` | Page/screen base |
| Surface | `#ffffff` | Cards, modals |
| Border | `#dce4ef` | Dividers, input borders |

The blue + terracotta combination is the brand signature. Blue = calm clarity. Terracotta = warmth, humanity. Together they feel both professional and personal.

### Typography

- **Serif: Cormorant Garamond** — used for headings, the wordmark, display text, section titles. Communicates thoughtfulness, craft, a sense of depth.
- **Sans: Manrope** — used for all UI, body copy, labels, buttons, inputs. Clean and highly legible.

Font size scale guidance:
- Display / hero H1: `clamp(2.4rem, 5.5vw, 4.75rem)`
- Section H2: `clamp(1.75rem, 3.5vw, 3rem)`
- Body: `1rem–1.0625rem`, line-height `1.7–1.75`
- Small / captions: `0.75rem–0.875rem`
- Eyebrow / labels: `0.72–0.78rem`, `font-weight: 700`, `letter-spacing: 0.1em`, `text-transform: uppercase`

### Spacing & Shape
- Generous whitespace — sections breathe at `4–6rem` vertical padding
- Rounded corners: cards `1.25rem`, buttons `0.875rem`, pill elements `9999px`
- Shadows: layered, soft — `0 4px 6px rgba(13,32,61,0.04), 0 12px 34px rgba(13,32,61,0.08)`

### Motion
- Scroll animations: fade up with slight Y offset (24px), eased with `[0.21, 0.47, 0.32, 0.98]`
- Duration: `0.6s` for content, `0.15s` for interactions (hover, focus)
- Hero: CSS-based `fadeUp` with stagger delays for above-fold content
- Always respect `prefers-reduced-motion` — reduce to opacity-only or no animation

### Cards
- White `rgba(255,255,255,0.92)` background — no `backdrop-filter` (performance)
- Soft layered shadow + `inset 0 1px 0 rgba(255,255,255,0.6)` top highlight
- Border: `1px solid rgba(255,255,255,0.5)` (glass-like without the blur cost)

---

## Tone of Voice

**Words we use:** reflect, reset, intentional, honest, private, calm, record, archive, grow, grounded, check in

**Words we avoid:** journal (feels like homework), share, post, audience, performance, perfect, optimise

**Writing style:**
- Short sentences. Direct.
- Warm but not sentimental.
- Never preachy about wellness or growth.
- Acknowledge that reflecting can feel hard — don't pretend it's always easy.
- No exclamation marks in UI copy. Reserve them for success moments only.

**Example good copy:**
- "Never stare at a blank journal again."
- "Private by default. No audience. No performance."
- "Your check-in is waiting."
- "You're building something real."

**Example bad copy:**
- "Level up your self-awareness!"
- "Share your growth journey!"
- "Don't break your streak!"

---

## App Architecture Ideas (Not Decided)

- **Local-first storage** where possible — reduces privacy risk and works offline
- Video stored encrypted, transcribed on-device or via a privacy-respecting API
- **No account required for first check-in** — reduce friction to zero at entry
- Prompt library could be server-driven so new prompts can be added without an app update
- Notifications should feel like a gentle nudge from a friend, not a push from an app

---

## Competitive Landscape

| App | What it does | What Balu does differently |
|---|---|---|
| Day One | Text/photo journal | Video-first, prompted, lower friction |
| BeReal | Social video check-in | Private, no feed, reflection-focused |
| Reflectly | AI journal | Video-first, shorter format |
| Headspace | Meditation/mindfulness | Active reflection vs. passive mindfulness |
| Jour | Prompted journaling | Video instead of text, simpler |

Balu's edge: the combination of **video** (authentic, fast, no writer's block) + **private** (no audience anxiety) + **prompted** (no blank page) is not currently occupied by any well-designed app.

---

## Website Stack (for reference)

- **Framework:** Next.js 14 App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS + custom CSS in `globals.css`
- **Animation:** Framer Motion (`LazyMotion` + `domAnimation` for performance)
- **Email:** Resend (waitlist notifications)
- **Hosting:** Vercel
- **Analytics:** Vercel Analytics + Speed Insights
- **Domain:** www.balu.live

Key files:
- `app/globals.css` — all design tokens, layout classes, animations
- `app/page.tsx` — main landing page (Server Component)
- `components/FadeIn.tsx` — scroll-triggered animation wrapper
- `components/PhoneMockup.tsx` — CSS phone illustration
- `components/WaitlistForm.tsx` — email capture form
- `app/api/waitlist/route.ts` — waitlist API (Resend)

---

*Last updated: February 2026*
