import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-8 sm:py-12 px-5 sm:px-8 lg:px-12 border-t border-white/5">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-4 sm:gap-6 md:flex-row md:justify-between">
        <Link href="/" className="block">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/bofstudio-landing/logo.png" alt="BOFstudio" className="h-8 w-auto brightness-0 invert" />
        </Link>

        <div className="flex items-center gap-6 text-sm text-gray-500">
          <Link href="/terms-of-service" className="hover:text-gray-300 transition-colors">
            Terms of Service
          </Link>
          <Link href="/privacy-policy" className="hover:text-gray-300 transition-colors">
            Privacy Policy
          </Link>
        </div>

        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} BOFstudio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
