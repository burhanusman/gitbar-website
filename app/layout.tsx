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
  title: "GitBar - Git repository status at a glance",
  description: "Git repository status at a glance. Lives in your menu bar. Native macOS app built with Swift.",
  openGraph: {
    title: "GitBar - Git repository status at a glance",
    description: "Git repository status at a glance. Lives in your menu bar.",
    url: "https://gitbar.app",
    siteName: "GitBar",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "GitBar - Git status in your menu bar",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GitBar - Git repository status at a glance",
    description: "Git repository status at a glance. Lives in your menu bar.",
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
        className={`${inter.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
