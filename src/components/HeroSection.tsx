"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video as integrated background — full bleed, visible */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="/bofstudio-landing/hero-poster.jpg"
        >
          <source src="/bofstudio-landing/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Gradient overlay — dark at top for text readability, transparent in middle to show video, dark at bottom for transition */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1a]/50 via-transparent to-[#0a0a1a]/70" />
      </div>

      {/* Floating light orbs like Vugola — soft bokeh effect */}
      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] left-[15%] w-32 h-32 sm:w-48 sm:h-48 bg-purple-500/15 rounded-full blur-[80px] animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute top-[30%] right-[10%] w-24 h-24 sm:w-40 sm:h-40 bg-blue-400/10 rounded-full blur-[60px] animate-pulse" style={{ animationDuration: '6s' }} />
        <div className="absolute bottom-[30%] left-[25%] w-20 h-20 sm:w-32 sm:h-32 bg-pink-400/10 rounded-full blur-[50px] animate-pulse" style={{ animationDuration: '5s' }} />
        <div className="absolute bottom-[40%] right-[20%] w-16 h-16 sm:w-24 sm:h-24 bg-amber-400/8 rounded-full blur-[40px] animate-pulse" style={{ animationDuration: '3s' }} />
      </div>

      {/* Content — centered over the video, like Vugola */}
      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 text-center pt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm text-sm text-gray-300 mb-6 sm:mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Built for TikTok Shop BOF creators
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-4 sm:mb-6 drop-shadow-lg"
        >
          Your TikTok Shop BOF Videos,{" "}
          <br className="hidden sm:block" />
          <span className="text-blue-400">
            Done in Seconds
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8 sm:mb-10 px-2 drop-shadow-md"
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
            Start Editing
            <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity blur-xl -z-10" />
          </a>
        </motion.div>
      </div>

      {/* Bottom gradient fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0A0F] to-transparent z-10" />
    </section>
  );
}
