"use client";

import React from "react";
import { Check, ArrowRight, Zap, Target, BarChart, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { staggerChildren: 0.1 }
};

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-zinc-900 selection:bg-seokane/10 overflow-x-hidden">
      {/* Mini Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100 h-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-full flex items-center justify-between">
          <motion.a 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            href="/services/market-research" 
            className="flex items-center gap-2"
          >
            <div className="relative w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-lg overflow-hidden border border-zinc-100 flex items-center justify-center">
               <img 
                src="/seokane-symbol.png" 
                alt="Seokane Inc Logo" 
                width={32} 
                height={32} 
                className="object-contain"
              />
            </div>
            <span className="text-lg sm:text-xl font-bold tracking-tight">SeokaneInc</span>
          </motion.a>
          <motion.a 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            href="/services/market-research#inquiry-form" 
            className="text-xs sm:text-sm font-bold text-seokane flex items-center gap-1 group"
          >
            Back to Brief <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-16 text-center px-4">
        <div className="max-w-3xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight mb-6"
          >
            Discovery <span className="text-seokane">Packages</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-zinc-500 leading-relaxed font-medium"
          >
            Choose the depth of intelligence you need to validate your next strategic move.
          </motion.p>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="pb-24 sm:pb-32 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6 sm:gap-8 mt-12"
          >
            
            {/* Explorer Package */}
            <motion.div 
              variants={fadeIn}
              whileHover={{ y: -5 }}
              className="relative group p-8 sm:p-10 rounded-[2.5rem] border border-zinc-200 bg-white hover:border-seokane/40 transition-all duration-500 hover:shadow-2xl"
            >
              <div className="mb-8">
                <div className="w-12 h-12 rounded-2xl bg-zinc-50 flex items-center justify-center text-zinc-400 group-hover:text-seokane transition-colors mb-6">
                  <BarChart className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-zinc-950 mb-2">Explorer Package</h3>
                <div className="text-3xl sm:text-4xl font-black text-seokane mb-4">R15,000</div>
                <p className="text-sm sm:text-base text-zinc-500 font-medium leading-relaxed">For those curious about a vertical and looking for an empirical snapshot.</p>
              </div>

              <div className="space-y-4 mb-10">
                {[
                  "Current vertical industry data",
                  "Market size quantification",
                  "Snapshot of competitive landscape",
                  "Primary industry trends report"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-seokane mt-0.5 flex-shrink-0" />
                    <span className="text-zinc-700 font-semibold text-sm sm:text-base">{item}</span>
                  </div>
                ))}
              </div>

              <motion.a 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="/services/market-research#inquiry-form" 
                className="block w-full py-4 sm:py-5 rounded-2xl border-2 border-zinc-200 text-center font-bold text-zinc-950 hover:bg-zinc-50 hover:border-zinc-300 transition-all uppercase tracking-widest text-[10px] sm:text-xs"
              >
                Start Explorer Brief
              </motion.a>
            </motion.div>

            {/* Deep Dive Package */}
            <motion.div 
              variants={fadeIn}
              whileHover={{ y: -5 }}
              className="relative group p-8 sm:p-10 rounded-[2.5rem] border-2 border-seokane bg-zinc-950 text-white shadow-2xl shadow-seokane/20"
            >
              <div className="absolute top-0 right-10 -translate-y-1/2 bg-seokane text-white text-[10px] sm:text-[11px] font-black uppercase tracking-[0.2em] px-4 sm:px-6 py-2 rounded-full shadow-lg">
                Recommended
              </div>
              
              <div className="mb-8">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-seokane-red-light mb-6">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Deep Dive Package</h3>
                <div className="text-3xl sm:text-4xl font-black text-white mb-4">R25,000</div>
                <p className="text-sm sm:text-base text-zinc-400 font-medium leading-relaxed">For clients requiring rigorous data to validate current ideas and go-to-market assumptions.</p>
              </div>

              <div className="space-y-4 mb-10">
                <div className="text-[10px] sm:text-xs font-black text-white/40 uppercase tracking-widest mb-4">Everything in Explorer, plus:</div>
                {[
                  "Detailed sector-specific business models",
                  "Custom revenue model projections",
                  "Go-To-Market strategy framework",
                  "Strategic pivot risk assessment",
                  "Post-discovery briefing session"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <Zap className="w-5 h-5 text-seokane-red-light mt-0.5 flex-shrink-0 fill-seokane-red-light" />
                    <span className="text-zinc-200 font-semibold text-sm sm:text-base">{item}</span>
                  </div>
                ))}
              </div>

              <motion.a 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="/services/market-research#inquiry-form" 
                className="block w-full py-4 sm:py-5 rounded-2xl bg-seokane text-white text-center font-bold hover:bg-seokane-red-light transition-all uppercase tracking-widest text-[10px] sm:text-xs shadow-lg shadow-seokane/30"
              >
                Start Deep Dive Brief
              </motion.a>
            </motion.div>

          </motion.div>

          {/* Value Prop Footer */}
          <motion.div 
            {...fadeIn}
            className="mt-16 sm:mt-24 p-8 sm:p-16 rounded-[2.5rem] bg-zinc-50 border border-zinc-100 text-center"
          >
            <h4 className="text-2xl sm:text-3xl font-bold mb-6 text-zinc-950">The Discovery Process</h4>
            <p className="text-base sm:text-lg text-zinc-600 max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
              The brief is just the beginning. Our process is designed to be lightweight and high-impact, securing your spot for a discovery deep-dive that informs your most critical investment decisions.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 sm:gap-10">
              {[
                { icon: ShieldCheck, label: "Data Integrity Guaranteed" },
                { icon: Zap, label: "AI-Augmented Precision" },
                { icon: BarChart, label: "Compliance Ready" }
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-center gap-2 text-[10px] sm:text-xs font-black text-zinc-400 uppercase tracking-[0.2em]">
                  <item.icon className="w-4 h-4 text-seokane/40" />
                  {item.label}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-zinc-100 text-center">
        <p className="text-[10px] text-zinc-400 font-black uppercase tracking-[0.3em]">
          © {new Date().getFullYear()} Seokane Advisory Services • Sandton
        </p>
      </footer>
    </div>
  );
}
