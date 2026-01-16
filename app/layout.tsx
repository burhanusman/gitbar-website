import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gitbar.app"),
  title: "GitBar - Elegant GitHub Status in Your macOS Menu Bar",
  description: "Monitor your GitHub repositories with real-time status updates directly from your macOS menu bar. Track branches, commits, and changes at a glance.",
  openGraph: {
    title: "GitBar - Elegant GitHub Status in Your macOS Menu Bar",
    description: "Monitor your GitHub repositories with real-time status updates directly from your macOS menu bar.",
    url: "https://gitbar.app",
    siteName: "GitBar",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "GitBar - GitHub Status in Your Menu Bar",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GitBar - Elegant GitHub Status in Your macOS Menu Bar",
    description: "Monitor your GitHub repositories with real-time status updates directly from your macOS menu bar.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
