import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0A0E12",
        "ink-soft": "#141B22",
        paper: "#FAFAF9",
        line: "#E7E5E1",
        slate: {
          500: "#6B7280",
          600: "#5B6470",
          700: "#3D4550",
        },
        solar: {
          50: "#FFF4EA",
          200: "#FFD3A6",
          300: "#FFC37D",
          400: "#FFAB63",
          500: "#FF9142",
          600: "#F2721A",
          700: "#C85812",
        },
        sky: {
          50: "#EEF5FF",
          400: "#6FA8F7",
          500: "#3E8FF5",
          600: "#2568C7",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.045em",
      },
      maxWidth: {
        content: "1200px",
      },
      keyframes: {
        "rise": {
          "0%": { transform: "translateY(6px)" },
          "50%": { transform: "translateY(-4px)" },
          "100%": { transform: "translateY(6px)" },
        },
        "drift": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "glow": {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "0.9" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "spin-slow": {
          "100%": { transform: "rotate(360deg)" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "0.65", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.04)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translate3d(0,0,0)" },
          "50%": { transform: "translate3d(18px,-12px,0)" },
        },
      },
      animation: {
        rise: "rise 8s ease-in-out infinite",
        drift: "drift 40s linear infinite",
        glow: "glow 5s ease-in-out infinite",
        "fade-up": "fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "spin-slow": "spin-slow 18s linear infinite",
        "pulse-slow": "pulse-slow 4.5s ease-in-out infinite",
        "float-slow": "float-slow 9s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
