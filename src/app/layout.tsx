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
  description: "Add overlays, trim clips, and generate captions for your TikTok Shop BOF videos — all from your phone. Built by a creator, for creators.",
  keywords: ["TikTok Shop", "BOF", "bottom of funnel", "video overlay", "TikTok creator tool", "BOFstudio"],
  openGraph: {
    title: "BOFstudio — TikTok Shop BOF Videos, Done in Seconds",
    description: "Add overlays, trim clips, and generate captions — all from your phone. Built by a creator, for creators.",
    url: "https://katetonioloai.github.io/bofstudio-landing/",
    siteName: "BOFstudio",
    images: [
      {
        url: "/bofstudio-landing/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BOFstudio — TikTok Shop BOF Video Creator",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BOFstudio — TikTok Shop BOF Videos, Done in Seconds",
    description: "Add overlays, trim clips, and generate captions — all from your phone.",
    images: ["/bofstudio-landing/og-image.jpg"],
  },
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
