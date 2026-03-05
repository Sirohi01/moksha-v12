import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FAFBF7",
        "bg-alt": "#F3F6F4",
        primary: "#1C2A39",
        accent: "#C6A756",
        "accent-soft": "#F8F2E4",
        muted: "#6B7280",
        border: "#E5E7EB",
        card: "#FFFFFF",
        "primary-light": "#2A3E52",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-playfair)", "serif"],
      },
      spacing: {
        "section": "80px",
      },
      boxShadow: {
        card: "0 10px 30px -5px rgba(28, 42, 57, 0.05)",
        premium: "0 20px 50px -12px rgba(28, 42, 57, 0.08)",
      },
      borderRadius: {
        "2xl": "20px",
        "3xl": "32px",
      },
      animation: {
        "fade-in": "fadeIn 1s ease-out forwards",
        "fade-up": "fadeUp 0.8s ease-out forwards",
        "scroll-down": "scrollDown 2s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scrollDown: {
          "0%": { transform: "translateY(0)", opacity: "0" },
          "50%": { transform: "translateY(10px)", opacity: "1" },
          "100%": { transform: "translateY(20px)", opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;

