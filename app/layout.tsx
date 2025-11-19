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
  title: "Mapier - AI-Powered Navigation App",
  description: "Mapier leverages advanced Large Language Model technology to understand complex user intents and deliver personalized, intelligent navigation experiences. Features include AI understanding, personalized recommendations, POI search, user uploads, and voice control.",
  keywords: ["AI navigation", "intelligent navigation", "map navigation", "LLM navigation", "voice navigation", "personalized navigation"],
  openGraph: {
    title: "Mapier - AI-Powered Navigation App",
    description: "Let AI Understand Your Every Navigation Need",
    type: "website",
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
      </body>
    </html>
  );
}
