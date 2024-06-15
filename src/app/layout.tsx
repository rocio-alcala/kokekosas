import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {
  inconsolata,
  manrope,
  mulish,
  poppins,
  vidaloka,
} from "@/assets/fonts";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kokekosas",
  description: "Kokedamas de autor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${vidaloka.variable} ${mulish.variable}  ${manrope.variable} ${poppins.variable} ${inconsolata.variable} font-inconsolata`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
