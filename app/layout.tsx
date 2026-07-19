import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GemoStone — Siddh Beads Delivered with Care",
  description:
    "Shop certified Rudraksha, Pyrite, and spiritual gemstones. New arrivals every week.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
