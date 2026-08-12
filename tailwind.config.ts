import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "rgb(var(--brand-bg) / <alpha-value>)",
          surface: "rgb(var(--brand-surface) / <alpha-value>)",
          "surface-2": "rgb(var(--brand-surface-2) / <alpha-value>)",
          text: "rgb(var(--brand-text) / <alpha-value>)",
          muted: "rgb(var(--brand-muted) / <alpha-value>)",
          accent: "rgb(var(--brand-accent) / <alpha-value>)",
          "accent-strong": "rgb(var(--brand-accent-strong) / <alpha-value>)",
          card: "rgb(var(--brand-card) / <alpha-value>)",
          border: "rgb(var(--brand-border) / <alpha-value>)",
          navy: "rgb(var(--brand-navy) / <alpha-value>)",
          "navy-2": "rgb(var(--brand-navy-2) / <alpha-value>)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      fontWeight: {
        normal: "400",
      },
      maxWidth: {
        container: "1200px",
      },
      boxShadow: {
        soft: "0 20px 45px rgba(0,0,0,.45)",
      },
    },
  },
  plugins: [],
};

export default config;
