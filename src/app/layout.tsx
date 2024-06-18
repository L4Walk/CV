import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";

import "./globals.css";
import React from "react";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <GoogleTagManager gtmId="GTM-PXFXRRGW" />
      <body>{children}</body>
      <Analytics />
    </html>
  );
}
