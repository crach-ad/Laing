import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Laing Labs | Custom Software Solutions",
  description: "We build software that transforms your business. Custom solutions designed to automate workflows, eliminate manual processes, and drive growth.",
  keywords: ["software development", "custom software", "workflow automation", "business automation"],
  openGraph: {
    title: "Laing Labs | Custom Software Solutions",
    description: "We build software that transforms your business.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}
