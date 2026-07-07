import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bobai Wicker",
  description: "Handmade wicker and rattan manufacturer from Bobai, Guangxi, China.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}