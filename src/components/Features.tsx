"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "BOF Deal Overlays — Burned In",
    description: "Pick a pill-style deal box or a big hook overlay. BOFstudio burns it right into your video so it shows up on every platform, every time — no stickers, no editing apps.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-blue-400">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="3" y1="15" x2="21" y2="15" />
        <line x1="9" y1="15" x2="9" y2="21" />
      </svg>
    ),
    mockup: (
      <div className="mt-4 sm:mt-6 rounded-xl overflow-hidden bg-gradient-to-b from-gray-800/50 to-gray-900/50 border border-white/5 p-3 sm:p-4">
        <div className="aspect-[9/16] max-h-48 bg-gray-800/30 rounded-lg relative flex items-end justify-center pb-3">
          <div className="text-center text-[10px] text-gray-500 absolute top-1/2 -translate-y-1/2">Product Video</div>
          <div className="flex flex-col items-center gap-0">
            <div className="bg-white text-[#111] font-black text-[10px] px-4 py-[5px]">DOUBLE DISCOUNT</div>
            <div className="bg-[#EE1D52] text-white font-black text-[10px] px-4 py-[5px]">TODAY ONLY</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "AI Captions That Get You Found",
    description: "BOFstudio writes captions with your product name + BOF hashtags so TikTok classifies your video correctly. That means more search visibility, more views, more sales. No blank caption box.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-purple-400">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
    mockup: (
      <div className="mt-4 sm:mt-6 rounded-xl overflow-hidden bg-gradient-to-b from-gray-800/50 to-gray-900/50 border border-white/5 p-3 sm:p-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-[10px] text-gray-400">AI Generated</span>
          </div>
          <p className="text-xs text-gray-300 leading-relaxed">
            ok but why did nobody tell me about these vitamin C pads sooner 😭 my skin has been GLOWING since day 3 and they&apos;re literally under $13 rn
          </p>
          <div className="flex flex-wrap gap-1 mt-2">
            {["#tiktokmademebuyit", "#skincare", "#vitamincpads", "#tiktokshopfinds"].map((tag) => (
              <span key={tag} className="text-[9px] text-blue-400/60">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Quick Trim Before You Post",
    description: "Cut dead air from the start or end of your clip before burning the overlay. Tight videos perform better — and BOFstudio handles it all in one place.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-pink-400">
        <circle cx="6" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <line x1="20" y1="4" x2="8.12" y2="15.88" />
        <line x1="14.47" y1="14.48" x2="20" y2="20" />
        <line x1="8.12" y1="8.12" x2="12" y2="12" />
      </svg>
    ),
    mockup: (
      <div className="mt-4 sm:mt-6 rounded-xl overflow-hidden bg-gradient-to-b from-gray-800/50 to-gray-900/50 border border-white/5 p-3 sm:p-4">
        <div className="space-y-3">
          <div className="flex items-center justify-between text-[10px] text-gray-400 mb-1">
            <span>Trim Video</span>
            <span className="text-pink-400/70">Preview</span>
          </div>
          {/* Timeline bar */}
          <div className="relative h-3 bg-gray-700/50 rounded-full overflow-hidden">
            <div className="absolute left-[15%] right-[20%] h-full bg-gradient-to-r from-pink-500/60 to-purple-500/60 rounded-full" />
            <div className="absolute left-[15%] w-2 h-full bg-pink-400 rounded-full" />
            <div className="absolute right-[20%] w-2 h-full bg-purple-400 rounded-full" />
          </div>
          <div className="flex gap-3">
            <div className="flex-1 bg-gray-800/60 rounded-lg p-2 text-center">
              <div className="text-[9px] text-gray-500 mb-0.5">Start</div>
              <div className="text-xs font-mono text-white">0:02</div>
            </div>
            <div className="flex-1 bg-gray-800/60 rounded-lg p-2 text-center">
              <div className="text-[9px] text-gray-500 mb-0.5">End</div>
              <div className="text-xs font-mono text-white">0:28</div>
            </div>
            <div className="flex-1 bg-gray-800/60 rounded-lg p-2 text-center">
              <div className="text-[9px] text-gray-500 mb-0.5">Duration</div>
              <div className="text-xs font-mono text-pink-300">0:26</div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16 sm:py-20 lg:py-24 px-5 sm:px-8 lg:px-12">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4">
            Everything You Need to{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-400 bg-clip-text text-transparent">
              Dominate TikTok Shop BOF
            </span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto">
            Overlays, captions, trimming — all in one tool. Post faster. Rank higher. Sell more.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="group"
            >
              <div className="h-full p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/10 transition-all hover:bg-white/[0.05]">
                <div className="mb-3 sm:mb-4">{feature.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm sm:text-base">{feature.description}</p>
                {feature.mockup}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
