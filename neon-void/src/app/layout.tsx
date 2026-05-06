import type { Metadata } from "next";
import { Space_Grotesk, Be_Vietnam_Pro, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-be-vietnam-pro",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NEON VOID - Sci-Fi Action Game",
  description:
    "Enter the year 2099. Join the Void Squadron and engage in hyper-kinetic combat across a fractured solar system.",
  keywords: ["neon void", "sci-fi game", "action game", "cyberpunk", "void squadron"],
  openGraph: {
    title: "NEON VOID - Sci-Fi Action Game",
    description:
      "Enter the year 2099. Join the Void Squadron and engage in hyper-kinetic combat across a fractured solar system.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${beVietnamPro.variable} ${inter.variable} min-h-screen flex flex-col antialiased`}
        style={{
          fontFamily: "var(--font-be-vietnam-pro), sans-serif",
          backgroundColor: "var(--color-background)",
          color: "var(--color-on-background)",
        }}
      >
        {children}
      </body>
    </html>
  );
}
