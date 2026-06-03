import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        gold: "#D4AF37",
        ink: "#000000",
        paper: "#FFFFFF"
      },
      boxShadow: {
        glow: "0 20px 80px rgba(212, 175, 55, 0.15)"
      }
    }
  },
  plugins: []
};

export default config;
