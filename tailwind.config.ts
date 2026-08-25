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
        /* Escala dorada oficial. El 400 (#BB8C48) es el color de marca. */
        gold: {
          50: "#F8F5EE",
          100: "#EFE7D2",
          200: "#E0CEA8",
          300: "#CEAE76",
          400: "#BB8C48",
          500: "#AF7E43",
          600: "#966438",
          700: "#794B2F",
          800: "#663F2D",
          900: "#58372B",
          950: "#321C16",
        },
        /* Tinta del overlay del hero */
        ink: "#171715",
        /* Acento de los enlaces "Ver más" */
        flame: "#FD562A",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-geist)", "var(--font-sans)", "system-ui", "sans-serif"],
      },
      fontWeight: {
        normal: "400",
      },
      maxWidth: {
        container: "1200px",
      },
      boxShadow: {
        soft: "0 20px 45px rgba(0,0,0,.45)",
        dropdown: "0 24px 60px -12px rgba(23,23,21,.28), 0 4px 12px rgba(23,23,21,.08)",
      },
    },
  },
  plugins: [],
};

export default config;
