"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
      {/* Floating pill navbar — Vugola style: full width, logo left, CTA right */}
      <div className="flex items-center justify-between gap-4 px-5 py-3 rounded-full bg-white/[0.08] backdrop-blur-xl border border-white/10 shadow-lg shadow-black/20 w-full max-w-2xl">
        {/* Logo — text wordmark like Vugola */}
        <Link href="/" className="flex-shrink-0 text-white font-bold text-xl tracking-tight">
          BOFstudio
        </Link>

        {/* Single CTA button */}
        <a
          href="https://getbofstudio.com/"
          className="text-sm px-6 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 transition-all font-semibold text-white whitespace-nowrap"
        >
          Get Started →
        </a>
      </div>
    </nav>
  );
}
