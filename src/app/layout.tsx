import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Theo's website",
  description: "Running on my homelab most probably",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <meta name="description" content="I'm Theo, a wannabe engineer. Explore my portfolio, projects, and experience." />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://theo-network.online/" />

      <meta name="author" content="Theodor Marascu" />
      <meta property="og:title" content="Theo's network" />
      <meta property="og:description" content="I'm Theo, a wannabe engineer. Check out my work." />
      <meta property="og:url" content="https://theo-network.online/" />

      <link rel="icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-stone-900`}>
        {children}
      </body>
    </html>
  );
}
