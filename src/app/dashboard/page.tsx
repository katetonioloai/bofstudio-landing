import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <Link href="/" className="text-2xl font-bold tracking-tight inline-block mb-8">
          <span className="bg-gradient-to-r from-blue-500 to-purple-400 bg-clip-text text-transparent">BOF</span>studio
        </Link>

        <div className="p-12 rounded-2xl bg-white/[0.03] border border-white/5">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600/20 to-purple-500/20 border border-blue-600/20 flex items-center justify-center mx-auto mb-6">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-blue-400">
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
            </svg>
          </div>

          <h1 className="text-2xl font-bold mb-2">Welcome to BOFstudio</h1>
          <p className="text-gray-400 mb-8">Dashboard coming soon. We&apos;re building something great.</p>

          <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            Alpha launching soon
          </div>
        </div>

        <Link href="/" className="inline-block mt-6 text-sm text-gray-500 hover:text-gray-300 transition-colors">
          ← Back to home
        </Link>
      </div>
    </div>
  );
}
