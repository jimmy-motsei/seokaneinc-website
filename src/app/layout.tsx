import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const bodyFont = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Seokane Incorporated | Boutique South African Law Firm",
  description:
    "Strategic legal counsel and commercial solutions for growing businesses and corporate clients in South Africa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bodyFont.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
