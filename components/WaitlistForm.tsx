"use client";

import { FormEvent, useState } from "react";

type SubmitState = "idle" | "loading" | "success" | "error";

export default function WaitlistForm({ source = "landing_v1" }: { source?: string }) {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email) {
      setState("error");
      setMessage("Please enter your email.");
      return;
    }

    setState("loading");
    setMessage("");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source }),
      });

      const body = (await response.json()) as { ok: boolean; error?: string };

      if (response.status === 201 && body.ok) {
        setState("success");
        setMessage("You are on the list. We will be in touch soon.");
        setEmail("");
        return;
      }

      if (response.status === 429) {
        setState("error");
        setMessage("Too many attempts. Please try again later.");
        return;
      }

      if (response.status === 400) {
        setState("error");
        setMessage("Please enter a valid email address.");
        return;
      }

      setState("error");
      setMessage("Something went wrong. Please try again.");
    } catch {
      setState("error");
      setMessage("Network error. Please try again.");
    }
  };

  return (
    <form onSubmit={onSubmit} noValidate>
      <div className="waitlist-row">
        {/* Visually hidden label for screen readers */}
        <label
          htmlFor="waitlist-email"
          style={{
            position: "absolute",
            width: "1px",
            height: "1px",
            padding: 0,
            margin: "-1px",
            overflow: "hidden",
            clip: "rect(0, 0, 0, 0)",
            whiteSpace: "nowrap",
            borderWidth: 0,
          }}
        >
          Email address
        </label>

        <input
          id="waitlist-email"
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={state === "loading"}
          required
          style={{
            flex: 1,
            height: "3.25rem",
            borderRadius: "0.875rem",
            border: "1.5px solid #dce4ef",
            background: "rgba(255,255,255,0.92)",
            padding: "0 1.1rem",
            fontSize: "0.9375rem",
            color: "#10243f",
            outline: "none",
            transition: "border-color 0.15s, box-shadow 0.15s",
            appearance: "none",
            WebkitAppearance: "none",
            fontFamily: "inherit",
          }}
          onFocus={(e) => {
            e.target.style.borderColor = "#4a9fd4";
            e.target.style.boxShadow = "0 0 0 3px rgba(74,159,212,0.14)";
          }}
          onBlur={(e) => {
            e.target.style.borderColor = "#dce4ef";
            e.target.style.boxShadow = "none";
          }}
        />

        <button
          type="submit"
          disabled={state === "loading"}
          style={{
            height: "3.25rem",
            borderRadius: "0.875rem",
            background: "#10243f",
            color: "white",
            border: "none",
            padding: "0 1.5rem",
            fontSize: "0.9375rem",
            fontWeight: 600,
            cursor: state === "loading" ? "not-allowed" : "pointer",
            opacity: state === "loading" ? 0.6 : 1,
            transition: "opacity 0.15s",
            whiteSpace: "nowrap",
            flexShrink: 0,
            fontFamily: "inherit",
          }}
        >
          {state === "loading" ? (
            "Joining..."
          ) : (
            <>
              <span className="waitlist-btn-short">Join</span>
              <span className="waitlist-btn-full">Join the waitlist</span>
            </>
          )}
        </button>
      </div>

      <p
        role="status"
        aria-live="polite"
        style={{
          marginTop: "0.75rem",
          minHeight: "1.25rem",
          fontSize: "0.875rem",
          color:
            state === "success"
              ? "#2d7fb5"
              : state === "error"
              ? "#c87d5e"
              : "#5d6d82",
        }}
      >
        {message}
      </p>
    </form>
  );
}
