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
        fadeSliceIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },

        blur: { to: { "backdrop-filter": "blur(10px)" } },
        sink: {
          "0%": {
            transform: "translateY(-10px)",
          },
          "50%": {
            transform: "translateY(0)",
          },
          "100%": {
            transform: "translateY(-10px)",
          },
        },
        rotate: {
          "0%": { transform: "rotate(0deg)" },
          "10%, 30%, 50%": { transform: "rotate(-10deg)" },
          "70%, 90%": { transform: "rotate(-6deg)" },
          "60%, 80%": { transform: "rotate(-7deg)" },
          "20%, 40%": { transform: "rotate(-5deg)" },
          "100%": { transform: "rotate(-5deg)" },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
      animation: {
        infiniteScroll: "infiniteScroll 25s linear infinite",
        blur: "blur ease",
        "nav-bar": "nav-bar ease",
        rotate: "rotate 3s ease forwards",
        "slow-sink": "sink 3s ease-in-out infinite",
        fadeSliceIn: "fadeSliceIn 2s ease",
        fadeIn: "fade-in 1s ease"
      },
      transitionProperty: {
        h: "height",
      },
    },
  },
  plugins: [],
};
export default config;
