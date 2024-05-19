import {
  Vidaloka,
  Inconsolata,
  Roboto_Mono,
  Manrope,
  Mulish,
  Poppins,
} from "next/font/google";

export const vidaloka = Vidaloka({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-vidaloka",
  weight: ["400"],
});

export const inconsolata = Inconsolata({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inconsolata",
});
export const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700", "800"],
  variable: "--font-poppins",
});

export const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
});
export const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
  variable: "--font-manrope",
});
export const mulish = Mulish({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-mulish",
});
