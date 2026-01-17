import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gitbar.app"),
  title: "GitBar - Your repos. Your AI projects. One glance.",
  description: "GitBar lives in your menu bar, auto-discovering Claude Code and Codex projects so you never lose track of AI-generated changes. Native macOS app built with Swift.",
  keywords: ["git", "menu bar", "macOS", "Claude Code", "Codex", "AI", "developer tools", "repository", "Swift"],
  authors: [{ name: "Burhan Usman" }],
  openGraph: {
    title: "GitBar - Your repos. Your AI projects. One glance.",
    description: "GitBar lives in your menu bar, auto-discovering Claude Code and Codex projects so you never lose track of AI-generated changes.",
    url: "https://gitbar.app",
    siteName: "GitBar",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "GitBar - Git status in your menu bar with AI project detection",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GitBar - Your repos. Your AI projects. One glance.",
    description: "GitBar lives in your menu bar, auto-discovering Claude Code and Codex projects so you never lose track of AI-generated changes.",
    images: ["/og-image.png"],
    creator: "@burhanusman",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} antialiased bg-[#050507] text-white`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
