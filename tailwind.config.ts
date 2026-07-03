import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        "bg-2": "var(--bg-2)",
        text: "var(--text)",
        muted: "var(--muted)",
        faint: "var(--faint)",
        gold: "#7C5CFF",
        coral: "#4D7DFF",
        emerald: "#22D6E8",
        rose: "#F25BCB",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      maxWidth: { content: "1180px" },
      borderRadius: { xl2: "20px" },
    },
  },
  plugins: [],
};
export default config;



