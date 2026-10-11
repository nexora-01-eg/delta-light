import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./scenes/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#080808",
        charcoal: "#171717",
        gold: "#C9A85D",
        champagne: "#D6C3A5",
        warmwhite: "#F7F4EE",
        softgrey: "#A7A7A7",
      },
      fontFamily: {
        ar: ['"IBM Plex Sans Arabic"', "Tajawal", '"Noto Kufi Arabic"', "system-ui", "sans-serif"],
        en: ["Inter", "Manrope", "system-ui", "sans-serif"],
      },
      letterSpacing: { exhibition: "0.35em" },
    },
  },
  plugins: [],
};
export default config;
