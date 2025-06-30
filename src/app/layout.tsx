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

        <meta property="og:title" content="Theo's network Name — Portfolio" />
        <meta property="og:description" content="I'm Theo, a wannabe engineer. Check out my work." />
        <meta property="og:url" content="https://theo-network.online/" />

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-stone-900`}>
        {children}
      </body>
    </html>
  );
}
