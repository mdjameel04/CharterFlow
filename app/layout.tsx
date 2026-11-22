import type { Metadata } from "next";
import { DM_Serif_Display, Manrope } from "next/font/google";

import "./globals.css";

const serifDisplay = DM_Serif_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CharterFlow | Fishing Charter Management",
  description:
    "Run, book, and grow your fishing charter business with CharterFlow. Manage bookings, boats, customers, payments, and operations in one platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${serifDisplay.variable} ${manrope.variable}`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
