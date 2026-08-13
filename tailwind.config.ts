import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        surface: {
          DEFAULT: "#F7F7F9",
          panel: "#FFFFFF",
          raised: "#F1F1F5",
          border: "#E6E6EA",
        },
        text: {
          primary: "#111114",
          secondary: "#6B6B76",
          muted: "#9797A3",
        },
        accent: {
          indigo: "#6366F1",
          violet: "#8B5CF6",
          fuchsia: "#D946EF",
          blue: "#3B82F6",
          cyan: "#06B6D4",
          green: "#22C55E",
          amber: "#F59E0B",
          orange: "#F97316",
        },
        status: {
          positive: "#16A34A",
          negative: "#DC2626",
        },
      },
    },
  },
  plugins: [],
};

export default config;
