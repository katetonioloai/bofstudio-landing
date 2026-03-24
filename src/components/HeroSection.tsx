"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden pt-24 sm:pt-32">
      {/* Starry/gradient background — dark sky */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1a] via-[#0d0d2b] to-[#111130] z-0" />
      
      {/* Subtle star dots */}
      <div className="absolute inset-0 z-0 opacity-40" style={{
        backgroundImage: 'radial-gradient(1px 1px at 20% 30%, rgba(255,255,255,0.4) 0%, transparent 100%), radial-gradient(1px 1px at 60% 20%, rgba(255,255,255,0.3) 0%, transparent 100%), radial-gradient(1px 1px at 80% 60%, rgba(255,255,255,0.2) 0%, transparent 100%), radial-gradient(1px 1px at 40% 70%, rgba(255,255,255,0.3) 0%, transparent 100%), radial-gradient(1px 1px at 10% 80%, rgba(255,255,255,0.2) 0%, transparent 100%), radial-gradient(1px 1px at 90% 40%, rgba(255,255,255,0.3) 0%, transparent 100%)',
      }} />

      {/* Text content — top portion */}
      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 text-center mb-8 sm:mb-12">
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
          Your TikTok Shop BOF Videos,{" "}
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
        >
          <a
            href="https://getbofstudio.com/"
            className="group relative inline-block px-8 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-500 font-semibold text-base sm:text-lg transition-all hover:shadow-lg hover:shadow-blue-600/25 hover:scale-105 text-center"
          >
            Start Creating — It&apos;s Free
            <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity blur-xl -z-10" />
          </a>
        </motion.div>
      </div>

      {/* Video — bottom portion, bright and visible */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="relative z-10 w-full max-w-5xl mx-auto px-5 sm:px-8"
      >
        <div className="relative rounded-t-2xl overflow-hidden shadow-2xl shadow-purple-500/10">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto"
            poster="/bofstudio-landing/hero-poster.jpg"
          >
            <source src="/bofstudio-landing/hero-video.mp4" type="video/mp4" />
          </video>
          {/* Soft gradient at top edge to blend with background */}
          <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#111130]/60 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
