import Link from "next/link";

export default function TermsPage() {
  return (
    <>
      {/* Header */}
      <header className="site-header">
        <div className="container site-header-inner">
          <Link href="/" className="site-logo">Balu</Link>
          <nav className="nav-desktop">
            <Link href="/" style={{ color: "var(--text-muted)", transition: "color 0.15s" }}>← Back to home</Link>
          </nav>
          <Link href="/" className="nav-mobile" style={{ background: "transparent", color: "var(--text-muted)", padding: "0.5rem 0" }}>← Back</Link>
        </div>
      </header>

      <main className="section">
        <div
          className="container"
          style={{ maxWidth: "720px" }}
        >
          {/* Header */}
          <div style={{ marginBottom: "3rem" }}>
            <span className="eyebrow" style={{ marginBottom: "1.25rem", display: "inline-flex" }}>Legal</span>
            <h1
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2.25rem, 4vw, 3.25rem)",
                lineHeight: 1.1,
                color: "#10243f",
                marginTop: "1rem",
                marginBottom: 0,
              }}
            >
              Terms of Use
            </h1>
            <p style={{ marginTop: "0.875rem", color: "#8fa3b8", fontSize: "0.875rem" }}>
              Last updated: February 19, 2026
            </p>
          </div>

          {/* Content */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
            }}
          >
            <div
              className="card"
              style={{ padding: "1.75rem 2rem" }}
            >
              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.25rem",
                  color: "#10243f",
                  margin: "0 0 0.75rem",
                }}
              >
                Pre-launch website
              </h2>
              <p style={{ color: "#5d6d82", lineHeight: 1.75, margin: 0, fontSize: "0.9375rem" }}>
                This website is provided for informational and waitlist purposes during
                Balu&apos;s pre-launch period. The app is still in development and is not
                yet available to the public.
              </p>
            </div>

            <div
              className="card"
              style={{ padding: "1.75rem 2rem" }}
            >
              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.25rem",
                  color: "#10243f",
                  margin: "0 0 0.75rem",
                }}
              >
                Content and roadmap
              </h2>
              <p style={{ color: "#5d6d82", lineHeight: 1.75, margin: 0, fontSize: "0.9375rem" }}>
                Content on this site may change as the product evolves. Roadmap items
                and planned features are forward-looking and not guaranteed timelines
                or commitments.
              </p>
            </div>

            <div
              className="card"
              style={{ padding: "1.75rem 2rem" }}
            >
              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.25rem",
                  color: "#10243f",
                  margin: "0 0 0.75rem",
                }}
              >
                Waitlist consent
              </h2>
              <p style={{ color: "#5d6d82", lineHeight: 1.75, margin: 0, fontSize: "0.9375rem" }}>
                By submitting your email to the waitlist, you consent to receiving
                launch-related updates from Balu. You can unsubscribe at any time
                by replying to any email we send.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="site-footer">
        <div className="container site-footer-inner">
          <div className="footer-brand">
            <span
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.1875rem",
                fontWeight: 600,
                color: "#10243f",
              }}
            >
              Balu
            </span>
            <span style={{ color: "#8fa3b8" }}>© 2026 · Private reflection, designed with care.</span>
          </div>
          <nav className="footer-nav">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </nav>
        </div>
      </footer>
    </>
  );
}
