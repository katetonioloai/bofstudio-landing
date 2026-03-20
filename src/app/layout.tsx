import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "@/components/Providers";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BOFstudio — TikTok Shop BOF Videos, Done in Seconds",
  description: "The tool BOF creators use to add overlays and generate captions — instantly. Built by a creator, for creators.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#0A0A0F] text-white font-[var(--font-inter)]">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
