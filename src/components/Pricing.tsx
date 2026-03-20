"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const tiers = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    videos: "5 videos/mo",
    features: ["Basic overlays", "Standard captions", "720p export"],
    cta: "Start Free",
    highlighted: false,
  },
  {
    name: "Creator",
    price: "$19",
    period: "/mo",
    videos: "50 videos/mo",
    features: ["All overlay styles", "AI-powered captions", "1080p export", "Priority processing"],
    cta: "Get Creator",
    highlighted: true,
    badge: "Most Popular",
  },
  {
    name: "Pro",
    price: "$39",
    period: "/mo",
    videos: "Unlimited videos",
    features: ["All overlay styles", "AI-powered captions", "1080p export", "Priority processing", "Custom branding", "API access"],
    cta: "Go Pro",
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Simple pricing.{" "}
            <span className="text-gray-500">No credits.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Flat monthly. No per-video fees. No surprises.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative group"
            >
              {tier.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-blue-600 to-purple-500 text-white">
                    {tier.badge}
                  </span>
                </div>
              )}
              <div
                className={`h-full p-8 rounded-2xl border transition-all flex flex-col ${
                  tier.highlighted
                    ? "bg-gradient-to-b from-blue-600/10 to-purple-500/10 border-blue-600/30 hover:border-blue-600/50 shadow-lg shadow-blue-600/5"
                    : "bg-white/[0.03] border-white/5 hover:border-white/10 hover:bg-white/[0.05]"
                }`}
              >
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-1">{tier.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold">{tier.price}</span>
                    <span className="text-gray-500 text-sm">{tier.period}</span>
                  </div>
                  <p className="text-sm text-gray-400 mt-2">{tier.videos}</p>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-gray-300">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-400 flex-shrink-0">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/signup"
                  className={`block text-center py-3 rounded-xl font-medium transition-all ${
                    tier.highlighted
                      ? "bg-gradient-to-r from-blue-600 to-purple-500 hover:from-blue-500 hover:to-purple-400 text-white hover:shadow-lg hover:shadow-blue-600/25"
                      : "bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
