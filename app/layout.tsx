import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
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
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased bg-[#050507] text-white`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
