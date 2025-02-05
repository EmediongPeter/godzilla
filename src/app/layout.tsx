import type { Metadata } from "next";
import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Godzilla - Meet Godzicoin $GODZ",
  description:
    "Godzicoin ($GODZ) isn’t just a token—it’s the cutest, most degen-friendly baby in the Solana ecosystem. Built for meme lords, alphas, and Web3 chads, $GODZ blends top-tier meme culture with real utility, staking rewards, and community governance. Join the cutest movement on Solana!",
  icons: {
    icon: "/favicon.png", // Path to your favicon
    shortcut: "/godz_transparent.png",
    apple: "/godz_transparent.png", // Optional for Apple devices
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </Head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <div className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black animate-gradient-y">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(67,233,123,0.15)_0%,rgba(0,0,0,0.95)_100%)]" />
          <div className="absolute inset-0">
            <div className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-brand-primary to-transparent opacity-30 blur-sm transform -rotate-6" />
            <div className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-brand-secondary to-transparent opacity-20 blur-sm transform rotate-6" />
          </div>
          <div className="absolute inset-0 opacity-[0.015] bg-[url('/noise.png')] mix-blend-overlay" />
          <div className="relative z-10">{children}</div>
        </div>
      </body>
    </html>
  );
}
