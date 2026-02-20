import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import WaitlistForm from "@/components/WaitlistForm";
import FadeIn from "@/components/FadeIn";

// Code-split PhoneMockup — it's a heavy component only needed on desktop
const PhoneMockup = dynamic(() => import("@/components/PhoneMockup"));

const steps = [
  {
    num: "01",
    title: "Get prompted",
    body: "Each morning or evening, Balu sends you a thoughtful question tailored to the moment — no blank-page anxiety, ever.",
  },
  {
    num: "02",
    title: "Record in 2 minutes",
    body: "Tap record, answer honestly, stop. Your video is private, stored only for you — no audience, no performance.",
  },
  {
    num: "03",
    title: "Build your timeline",
    body: "Watch your growth across weeks and months. Revisit key lessons, track patterns, and stay grounded in what matters.",
  },
];

const roadmapItems = [
  {
    title: "Daily guided prompts",
    description: "Morning and evening prompts tailored to your schedule, rotating so it never feels repetitive.",
    status: "active",
    label: "In Development",
  },
  {
    title: "Streaks & consistency",
    description: "Build the habit with streak tracking and gentle reminders that respect your rhythm.",
    status: "planned",
    label: "Planned",
  },
  {
    title: "Mood trend insights",
    description: "Surface patterns in how you feel across weeks and months, visualised with care.",
    status: "planned",
    label: "Planned",
  },
  {
    title: "AI reflection assistant",
    description: "A thoughtful AI that reads your transcripts and helps you go deeper on what you recorded.",
    status: "future",
    label: "Future",
  },
];

const featureStrip = [
  "Private by default",
  "1–2 min check-ins",
  "Morning or night",
  "Your timeline",
];

const block1Bullets = [
  "Rotating library of reflection questions",
  "Morning focus mode and evening wind-down",
  "Prompts you can skip or customise",
];

const block2Bullets = [
  "Scroll back through any day you recorded",
  "Streaks that build healthy accountability",
  "Mood trend snapshots over time",
];

export default function Home() {
  return (
    <main>

      {/* ── HEADER ─────────────────────────────────────────────── */}
      <header className="site-header">
        <div className="container site-header-inner">
          <Image
              src="/logo-full.png"
              alt="Balu"
              width={130}
              height={87}
              style={{ objectFit: "contain" }}
              priority
            />
          <nav className="nav-desktop">
            <a href="#how">How it works</a>
            <a href="#features">Features</a>
            <a href="#roadmap">Roadmap</a>
            <a href="#waitlist" className="nav-cta">Join waitlist</a>
          </nav>
          <a href="#waitlist" className="nav-mobile">Join</a>
        </div>
      </header>

      {/* ── HERO ───────────────────────────────────────────────── */}
      <section
        className="section"
        style={{
          minHeight: "92vh",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Animated ambient blobs */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
            overflow: "hidden",
            pointerEvents: "none",
          }}
        >
          <div
            className="animate-gradient-shift"
            style={{
              position: "absolute",
              top: "-10%",
              left: "-5%",
              width: "55%",
              height: "70%",
              borderRadius: "50%",
              background: "radial-gradient(ellipse, rgba(74,159,212,0.16) 0%, transparent 70%)",
            }}
          />
          <div
            className="animate-gradient-shift"
            style={{
              position: "absolute",
              bottom: "-5%",
              right: "-8%",
              width: "50%",
              height: "60%",
              borderRadius: "50%",
              background: "radial-gradient(ellipse, rgba(200,125,94,0.11) 0%, transparent 70%)",
              animationDelay: "-4s",
            }}
          />
          <div
            className="animate-gradient-shift"
            style={{
              position: "absolute",
              top: "40%",
              left: "40%",
              width: "40%",
              height: "50%",
              borderRadius: "50%",
              background: "radial-gradient(ellipse, rgba(74,159,212,0.07) 0%, transparent 70%)",
              animationDelay: "-8s",
            }}
          />
        </div>

        <div className="container" style={{ position: "relative", zIndex: 1, width: "100%" }}>
          <div className="hero-layout">

            {/* Left — copy (CSS animations, not Framer Motion, for above-fold content) */}
            <div className="hero-copy">
              <span className="eyebrow fade-up">Early Access</span>

              <h1
                className="fade-up stagger-1"
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(2.8rem, 5.5vw, 4.75rem)",
                  lineHeight: 1.04,
                  color: "#10243f",
                  marginTop: "1.5rem",
                  marginBottom: 0,
                  letterSpacing: "0.01em",
                }}
              >
                Reflect, reset, and stay{" "}
                <span className="gradient-text">intentional</span>{" "}
                every day.
              </h1>

              <p
                className="fade-up stagger-2"
                style={{
                  marginTop: "1.5rem",
                  fontSize: "1.125rem",
                  lineHeight: 1.75,
                  color: "#5d6d82",
                  maxWidth: "32rem",
                }}
              >
                Balu prompts you to record a short private video each day so you can
                process how you feel, capture what you learned, and build a meaningful
                record of your life.
              </p>

              <div
                id="waitlist"
                className="fade-up stagger-3"
                style={{ marginTop: "2.25rem", scrollMarginTop: "6rem" }}
              >
                <WaitlistForm />
                <p
                  style={{
                    marginTop: "1rem",
                    fontSize: "0.875rem",
                    color: "#8fa3b8",
                  }}
                >
                  Private by default · No social pressure · Free during beta
                </p>
              </div>
            </div>

            {/* Right — phone */}
            <div className="hero-phone fade-up stagger-2">
              <PhoneMockup />
            </div>

          </div>
        </div>
      </section>

      {/* ── FEATURE STRIP ──────────────────────────────────────── */}
      <div className="section-strip">
        <div className="container">
          <div className="feature-strip-grid">
            {featureStrip.map((label) => (
              <div key={label} className="feature-strip-item">
                <span className="feature-dot" />
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── HOW IT WORKS ───────────────────────────────────────── */}
      <section id="how" className="section">
        <div className="container">
          <FadeIn>
            <p
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.14em",
                color: "var(--brand-primary)",
              }}
            >
              How it works
            </p>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                color: "#10243f",
                marginTop: "0.75rem",
                marginBottom: 0,
                maxWidth: "36rem",
              }}
            >
              A daily rhythm that feels effortless.
            </h2>
          </FadeIn>

          <div className="steps-grid">
            {steps.map((step, i) => (
              <FadeIn key={step.num} delay={i * 0.12}>
                <div className="card" style={{ padding: "1.75rem", height: "100%" }}>
                  <span
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "3rem",
                      fontWeight: 600,
                      lineHeight: 1,
                      color: "rgba(74,159,212,0.2)",
                      display: "block",
                    }}
                  >
                    {step.num}
                  </span>
                  <h3
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "1.5rem",
                      color: "#10243f",
                      marginTop: "1.25rem",
                      marginBottom: 0,
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      marginTop: "0.75rem",
                      lineHeight: 1.7,
                      color: "#5d6d82",
                      fontSize: "0.9375rem",
                    }}
                  >
                    {step.body}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES ───────────────────────────────────────────── */}
      <section id="features" className="section section-border-top">
        <div className="container features-container">

          {/* Block 1 — Guided prompts */}
          <div className="feature-block">
            <FadeIn direction="right">
              <p
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.16em",
                  color: "var(--brand-secondary)",
                }}
              >
                Feature
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(1.75rem, 3.5vw, 2.6rem)",
                  lineHeight: 1.15,
                  color: "#10243f",
                  marginTop: "0.75rem",
                  marginBottom: 0,
                }}
              >
                Guided daily prompts — morning and evening.
              </h2>
              <p
                style={{
                  marginTop: "1.25rem",
                  fontSize: "1.0625rem",
                  lineHeight: 1.75,
                  color: "#5d6d82",
                }}
              >
                Never stare at a blank journal again. Balu delivers thoughtful prompts
                timed to your schedule, so starting a check-in always feels easy.
              </p>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: "1.5rem 0 0",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.875rem",
                }}
              >
                {block1Bullets.map((item) => (
                  <li
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.75rem",
                      color: "#5d6d82",
                      fontSize: "0.9375rem",
                    }}
                  >
                    <span
                      style={{
                        width: "1.1rem",
                        height: "1.1rem",
                        borderRadius: "50%",
                        background: "var(--brand-primary)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        marginTop: "2px",
                        fontSize: "0.55rem",
                        fontWeight: 700,
                        color: "white",
                        lineHeight: 1,
                      }}
                    >
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn direction="left" delay={0.12}>
              <div
                className="card feature-phone-card"
                style={{
                  background: "linear-gradient(135deg, #edf5fb 0%, #f0f8fd 50%, #fdf2ee 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "2.5rem",
                }}
              >
                <div className="phone-scale-wrap">
                  <PhoneMockup animate={false} tilt={false} />
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Block 2 — Growth timeline */}
          <div className="feature-block">
            <FadeIn
              direction="right"
              delay={0.12}
              className="feature-visual-swap"
            >
              <div
                className="card feature-visual-card"
                style={{
                  background: "linear-gradient(135deg, #fdf2ee 0%, #fdf7f5 50%, #edf5fb 100%)",
                  padding: "2.5rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div style={{ width: "100%", maxWidth: "17rem" }}>
                  <p
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.12em",
                      color: "var(--brand-secondary)",
                      marginBottom: "1.25rem",
                    }}
                  >
                    Your streak
                  </p>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(7, 1fr)",
                      gap: "6px",
                    }}
                  >
                    {Array.from({ length: 35 }).map((_, i) => (
                      <div
                        key={i}
                        style={{
                          height: "28px",
                          borderRadius: "6px",
                          background:
                            i < 23 && i % 8 !== 3
                              ? `rgba(74,159,212,${0.14 + (i / 35) * 0.56})`
                              : "rgba(220,228,239,0.5)",
                        }}
                      />
                    ))}
                  </div>
                  <p
                    style={{
                      marginTop: "1.5rem",
                      fontSize: "1.5rem",
                      fontWeight: 600,
                      color: "#10243f",
                    }}
                  >
                    23 day streak{" "}
                    <span style={{ color: "var(--brand-primary)" }}>→</span>
                  </p>
                  <p
                    style={{
                      marginTop: "0.25rem",
                      fontSize: "0.875rem",
                      color: "#5d6d82",
                    }}
                  >
                    Keep going. You&apos;re building something real.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="left">
              <p
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.16em",
                  color: "var(--brand-secondary)",
                }}
              >
                Feature
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(1.75rem, 3.5vw, 2.6rem)",
                  lineHeight: 1.15,
                  color: "#10243f",
                  marginTop: "0.75rem",
                  marginBottom: 0,
                }}
              >
                Your personal growth timeline.
              </h2>
              <p
                style={{
                  marginTop: "1.25rem",
                  fontSize: "1.0625rem",
                  lineHeight: 1.75,
                  color: "#5d6d82",
                }}
              >
                Every check-in builds a private archive of your thoughts and feelings.
                Revisit any day. Watch your patterns emerge. Own your story.
              </p>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: "1.5rem 0 0",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.875rem",
                }}
              >
                {block2Bullets.map((item) => (
                  <li
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.75rem",
                      color: "#5d6d82",
                      fontSize: "0.9375rem",
                    }}
                  >
                    <span
                      style={{
                        width: "1.1rem",
                        height: "1.1rem",
                        borderRadius: "50%",
                        background: "var(--brand-secondary)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        marginTop: "2px",
                        fontSize: "0.55rem",
                        fontWeight: 700,
                        color: "white",
                        lineHeight: 1,
                      }}
                    >
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>

        </div>
      </section>

      {/* ── ROADMAP ────────────────────────────────────────────── */}
      <section id="roadmap" className="section section-alt">
        <div className="container">
          <FadeIn>
            <p
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.14em",
                color: "var(--brand-primary)",
              }}
            >
              Roadmap
            </p>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                color: "#10243f",
                marginTop: "0.75rem",
                marginBottom: 0,
              }}
            >
              What&apos;s coming.
            </h2>
            <p
              style={{
                marginTop: "1rem",
                color: "#5d6d82",
                maxWidth: "36rem",
                lineHeight: 1.7,
              }}
            >
              Built for calm consistency today, with deeper insight and accountability planned over time.
            </p>
          </FadeIn>

          <div className="roadmap-grid">
            {roadmapItems.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.09}>
                <div
                  className="card"
                  style={{
                    padding: "1.5rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.75rem",
                    height: "100%",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "space-between",
                      gap: "0.75rem",
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: "1.25rem",
                        color: "#10243f",
                        margin: 0,
                      }}
                    >
                      {item.title}
                    </h3>
                    <span className={`badge badge-${item.status}`} style={{ flexShrink: 0 }}>
                      {item.label}
                    </span>
                  </div>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      lineHeight: 1.65,
                      color: "#5d6d82",
                      margin: 0,
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ──────────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <FadeIn>
            <div
              className="card cta-pad"
              style={{
                borderRadius: "1.75rem",
                textAlign: "center",
                background: "linear-gradient(135deg, #deeef9 0%, #f8fafd 45%, #fae8e0 100%)",
                boxShadow:
                  "0 4px 6px rgba(13,32,61,0.04), 0 20px 60px rgba(13,32,61,0.10), 0 0 80px rgba(74,159,212,0.12)",
              }}
            >
              <p
                style={{
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.16em",
                  color: "var(--brand-primary)",
                }}
              >
                Join the waitlist
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(1.9rem, 4vw, 3rem)",
                  lineHeight: 1.15,
                  color: "#10243f",
                  marginTop: "1.25rem",
                  marginBottom: 0,
                  maxWidth: "42rem",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                Build a steadier, more intentional relationship with your days.
              </h2>
              <p
                style={{
                  marginTop: "1.5rem",
                  fontSize: "1.0625rem",
                  lineHeight: 1.75,
                  color: "#5d6d82",
                  maxWidth: "34rem",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                Be first to know when invites open. We are building Balu for people who
                want to reflect honestly and grow consistently — without the noise.
              </p>
              <div
                style={{
                  marginTop: "2.5rem",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <WaitlistForm source="final_cta" />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────────────────── */}
      <footer className="site-footer">
        <div className="container site-footer-inner">
          <div className="footer-brand">
            <Image
              src="/logo-wordmark.png"
              alt="Balu"
              width={150}
              height={60}
              style={{ objectFit: "contain" }}
            />
            <span style={{ color: "#8fa3b8" }}>© 2026 · Private reflection, designed with care.</span>
          </div>
          <nav className="footer-nav">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </nav>
        </div>
      </footer>

    </main>
  );
}
