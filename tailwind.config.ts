import { transform } from "next/dist/build/swc";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        vidaloka: ["var(--font-vidaloka)"],
        inconsolata: ["var(--font-inconsolata)"],
        poppins: ["var(--font-poppins)"],
        manrope: ["var(--font-manrope)"],
        mulish: ["var(--font-mulish)"],
        roboto_mono: ["var(--font-roboto_mono)"],
        "comic-cat": ["comic-cat"],
      },
      keyframes: {
        infiniteScroll: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      animation: { infiniteScroll: "infiniteScroll 50s linear infinite" },
    },
  },
  plugins: [],
};
export default config;
