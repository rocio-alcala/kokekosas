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
import Footer from "@/components/Footer";
import CartContextProvider from "@/components/CartContextProvider";

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
        <CartContextProvider>{children}</CartContextProvider>
        <Footer />
      </body>
    </html>
  );
}
