import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/5">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <Link href="/" className="text-lg font-bold tracking-tight">
          <span className="bg-gradient-to-r from-blue-500 to-purple-400 bg-clip-text text-transparent">
            BOF
          </span>
          studio
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
