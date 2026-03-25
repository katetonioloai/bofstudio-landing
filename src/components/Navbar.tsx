"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
      {/* Floating pill navbar */}
      <div className="flex items-center justify-between gap-2 px-4 sm:px-6 py-2.5 rounded-full bg-white/[0.06] backdrop-blur-xl border border-white/10 shadow-lg shadow-black/20 max-w-3xl w-full">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/bofstudio-landing/logo.png" alt="BOFstudio" className="h-8 w-auto brightness-0 invert" />
        </Link>

        {/* Desktop nav links — centered */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right side — Sign In + Get Started */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://getbofstudio.com/"
            className="text-sm text-gray-300 hover:text-white transition-colors"
          >
            Open App
          </a>
          <a
            href="#pricing"
            className="text-sm px-5 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-500 hover:from-blue-500 hover:to-purple-400 transition-all font-semibold text-white"
          >
            Get Started
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-1.5 text-gray-400 hover:text-white"
          aria-label="Toggle menu"
        >
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-[#0A0A0F]/98 backdrop-blur-xl z-40">
          <div className="flex flex-col px-5 pt-6 pb-8 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block py-3 text-lg text-gray-300 hover:text-white transition-colors border-b border-white/5"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://getbofstudio.com/"
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-lg text-gray-300 hover:text-white transition-colors border-b border-white/5"
            >
              Open App
            </a>
            <div className="pt-4">
              <a
                href="#pricing"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center py-3.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-500 font-semibold text-base"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
