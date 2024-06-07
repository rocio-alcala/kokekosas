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
        "nav-bar": {
          to: {
            "background-color": "black",
            color: " antiquewhite",
            "box-shadow":
              "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
          },
        },
      },
      animation: {
        infiniteScroll: "infiniteScroll 25s linear infinite",
        blur: "blur ease",
        "nav-bar": "nav-bar ease",
        "slow-sink": "sink 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
