"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
      {/* Floating pill navbar — Vugola style: logo left, CTA right */}
      <div className="flex items-center justify-between gap-4 px-5 py-2.5 rounded-full bg-white/[0.06] backdrop-blur-xl border border-white/10 shadow-lg shadow-black/20 max-w-sm w-full">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/bofstudio-landing/logo.png" alt="BOFstudio" className="h-10 w-auto brightness-0 invert" />
        </Link>

        {/* Single CTA button */}
        <a
          href="https://getbofstudio.com/"
          className="text-sm px-5 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-500 hover:from-blue-500 hover:to-purple-400 transition-all font-semibold text-white whitespace-nowrap"
        >
          Get Started →
        </a>
      </div>
    </nav>
  );
}
