import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--bg)",
        surface: "var(--surface)",
        textPrimary: "var(--text-primary)",
        textMuted: "var(--text-muted)",
        textSubtle: "var(--text-subtle)",
        brand: "var(--brand-primary)",
        brandLight: "var(--brand-primary-light)",
        brandDark: "var(--brand-primary-dark)",
        brandWarm: "var(--brand-secondary)",
        brandWarmLight: "var(--brand-secondary-light)",
        borderSoft: "var(--border)",
        borderStrong: "var(--border-strong)",
      },
      boxShadow: {
        calm: "0 12px 34px rgba(13, 32, 61, 0.08)",
        card: "0 4px 6px rgba(13, 32, 61, 0.04), 0 12px 34px rgba(13, 32, 61, 0.08)",
        phone: "0 32px 80px rgba(13, 32, 61, 0.20), 0 8px 24px rgba(13, 32, 61, 0.12)",
        glow: "0 0 40px rgba(74, 159, 212, 0.18)",
      },
      borderRadius: {
        phone: "2.5rem",
        screen: "1.75rem",
      },
      animation: {
        float: "float 5s ease-in-out infinite",
        "gradient-shift": "gradient-shift 12s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(-1.5deg)" },
          "50%": { transform: "translateY(-14px) rotate(-1.5deg)" },
        },
        "gradient-shift": {
          "0%, 100%": { opacity: "0.6", transform: "scale(1) translate(0%, 0%)" },
          "33%": { opacity: "0.9", transform: "scale(1.08) translate(2%, -2%)" },
          "66%": { opacity: "0.7", transform: "scale(0.96) translate(-2%, 3%)" },
        },
      },
      backgroundImage: {
        "gradient-hero": "linear-gradient(135deg, #edf5fb 0%, #f8fafd 50%, #fdf2ee 100%)",
        "gradient-cta": "linear-gradient(135deg, #deeef9 0%, #f8fafd 40%, #fae8e0 100%)",
        "gradient-phone-screen": "linear-gradient(160deg, #e8f3fb 0%, #f0f7ff 40%, #f9f3f0 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
