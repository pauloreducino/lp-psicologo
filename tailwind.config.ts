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
        forest: {
          50: "#f0f5f1", 100: "#ddeae0", 200: "#bdd5c3",
          300: "#8fb89a", 400: "#5e976e", 500: "#3d7750",
          600: "#2d5e3d", 700: "#234a30", 800: "#1a3a26", 900: "#152f1f",
        },
        ivory: "#F8F6F0",
        gold: { 400: "#d4b97a", 500: "#c4a45a", 600: "#a8883f" },
        sage: { 100: "#eef4f0", 200: "#d4e5d9", 300: "#a9cbb3" },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ["Nunito", "sans-serif"],
      },
      animation: {
        floatY: "floatY 4s ease-in-out infinite",
        fadeIn: "fadeIn .5s ease both",
        slideUp: "slideUp .6s ease both",
      },
      keyframes: {
        floatY: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        fadeIn: { from: { opacity: "0" }, to: { opacity: "1" } },
        slideUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      screens: { xs: "375px" },
    },
  },
  plugins: [],
};
export default config;
