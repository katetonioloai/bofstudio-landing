"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Choose a Product",
    description: "Add your TikTok Shop product — just paste the link and BOFstudio pulls the name, price, and image automatically.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-blue-400 sm:w-8 sm:h-8">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 01-8 0" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Select Your Text Hook",
    description: "Pick a BOF Traditional pill overlay (deal box) or a Hook Text overlay. Choose from proven templates or write your own.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-purple-400 sm:w-8 sm:h-8">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 9h6M9 12h6M9 15h4" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Upload Your Video — Done",
    description: "Upload your raw clip. BOFstudio burns the overlay onto it, generates an AI caption with hashtags, and your video is ready to post in seconds.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-pink-400 sm:w-8 sm:h-8">
        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
        <polyline points="17 8 12 3 7 8" />
        <line x1="12" y1="3" x2="12" y2="15" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 sm:py-20 lg:py-24 px-5 sm:px-8 lg:px-12">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4">
            Three steps.{" "}
            <span className="text-gray-500">No editing skills needed.</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto">
            Choose product → pick hook → upload video. Done in 30 seconds.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="relative group"
            >
              <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/10 transition-all hover:bg-white/[0.05]">
                <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <span className="text-4xl sm:text-5xl font-bold bg-gradient-to-b from-white/20 to-transparent bg-clip-text text-transparent">
                    {step.number}
                  </span>
                  <div className="mt-2">{step.icon}</div>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm sm:text-base">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
