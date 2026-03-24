"use client";

import { motion } from "framer-motion";

function FloatingIcon({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Gradient blobs — scaled down on mobile */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-blue-600/20 rounded-full blur-[80px] sm:blur-[128px] animate-blob" />
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 sm:w-64 sm:h-64 lg:w-80 lg:h-80 bg-purple-500/20 rounded-full blur-[80px] sm:blur-[128px] animate-blob-2" />
        <div className="absolute top-1/2 left-1/2 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-pink-500/10 rounded-full blur-[60px] sm:blur-[100px] animate-blob" style={{ animationDelay: '4s' }} />
      </div>

      {/* Floating elements — hidden on mobile, shown on md+ */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
        {/* Phone */}
        <FloatingIcon delay={0.2} className="absolute top-[15%] left-[8%] animate-float-slow">
          <div className="w-12 h-20 rounded-xl border-2 border-blue-500/30 bg-blue-600/10 backdrop-blur-sm flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(129,140,248,0.6)" strokeWidth="2">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
          </div>
        </FloatingIcon>

        {/* Shopping bag */}
        <FloatingIcon delay={0.4} className="absolute top-[20%] right-[12%] animate-float-medium">
          <div className="w-14 h-14 rounded-xl bg-purple-500/10 border border-purple-400/20 backdrop-blur-sm flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(168,85,247,0.6)" strokeWidth="2">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 01-8 0" />
            </svg>
          </div>
        </FloatingIcon>

        {/* Star rating */}
        <FloatingIcon delay={0.6} className="absolute bottom-[25%] left-[5%] animate-float-fast">
          <div className="flex gap-1 bg-yellow-500/10 border border-yellow-400/20 rounded-full px-3 py-1.5 backdrop-blur-sm">
            {[...Array(5)].map((_, i) => (
              <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="rgba(234,179,8,0.6)" stroke="none">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            ))}
          </div>
        </FloatingIcon>

        {/* Play button */}
        <FloatingIcon delay={0.8} className="absolute bottom-[30%] right-[8%] animate-float-slow">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600/20 to-purple-500/20 border border-blue-500/20 backdrop-blur-sm flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="rgba(129,140,248,0.7)" stroke="none">
              <polygon points="8 5 20 12 8 19" />
            </svg>
          </div>
        </FloatingIcon>

        {/* Musical note (TikTok vibe) */}
        <FloatingIcon delay={1.0} className="absolute top-[40%] left-[15%] animate-float-medium">
          <div className="text-2xl opacity-30">♪</div>
        </FloatingIcon>

        <FloatingIcon delay={1.2} className="absolute top-[60%] right-[15%] animate-float-fast">
          <div className="text-xl opacity-20">♫</div>
        </FloatingIcon>

        {/* Deal pill mockup */}
        <FloatingIcon delay={0.5} className="absolute bottom-[15%] left-[30%] animate-float-medium">
          <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-400/20 rounded-xl px-4 py-2 backdrop-blur-sm">
            <div className="text-xs text-red-300/60 font-bold">🔥 62% OFF</div>
            <div className="text-xs text-white/40">$12.99</div>
          </div>
        </FloatingIcon>

        {/* Drifting particles */}
        <div className="absolute top-[30%] animate-drift-right opacity-20" style={{ animationDelay: '0s' }}>
          <div className="w-2 h-2 rounded-full bg-blue-400" />
        </div>
        <div className="absolute top-[50%] animate-drift-right opacity-15" style={{ animationDelay: '7s' }}>
          <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
        </div>
        <div className="absolute top-[70%] animate-drift-left opacity-20" style={{ animationDelay: '3s' }}>
          <div className="w-2.5 h-2.5 rounded-full bg-pink-400" />
        </div>

        {/* Spinning ring */}
        <div className="absolute top-[10%] right-[25%] animate-spin-slow opacity-10">
          <div className="w-24 h-24 rounded-full border border-blue-500/30" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm text-gray-400 mb-6 sm:mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Now in Beta
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-4 sm:mb-6"
        >
          Your TikTok Shop Videos,{" "}
          <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-blue-500 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Done in Seconds
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8 sm:mb-10 px-2"
        >
          Add overlays, trim clips, and generate captions — all from your phone. Built by a creator, for creators.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <a
            href="https://getbofstudio.com/"
            className="group relative w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-500 font-semibold text-base sm:text-lg transition-all hover:shadow-lg hover:shadow-blue-600/25 hover:scale-105 text-center"
          >
            Start Creating — It&apos;s Free
            <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity blur-xl -z-10" />
          </a>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0A0F] to-transparent" />
    </section>
  );
}
