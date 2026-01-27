"use client";

import React, { useState, useTransition } from "react";
import Image from "next/image";
import { submitInquiry } from "./actions";
import { motion } from "motion/react";
import { 
  BarChart3, 
  ShieldCheck, 
  Users, 
  TrendingUp, 
  FileText, 
  ArrowRight, 
  CheckCircle2,
  PieChart,
  Search,
  Menu,
  X
} from "lucide-react";

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

export default function MarketResearchPage() {
  const [isPending, startTransition] = useTransition();
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    
    startTransition(async () => {
      try {
        const result = await submitInquiry(formData);
        if (result.success) {
          setSubmitted(true);
        } else {
          setError("Something went wrong. Please try again.");
        }
      } catch (err) {
        setError("An error occurred. Please try again later.");
      }
    });
  };

  return (
    <div className="min-h-screen bg-white font-sans text-zinc-900 selection:bg-seokane/10 overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-xl overflow-hidden shadow-sm border border-zinc-100 flex items-center justify-center">
              <Image 
                src="/seokane-symbol.png" 
                alt="Seokane Inc Logo" 
                width={40} 
                height={40} 
                className="object-contain p-1"
              />
            </div>
            <div>
              <span className="text-lg sm:text-xl font-bold tracking-tight">SeokaneInc</span>
              <span className="block text-[8px] sm:text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-medium -mt-1">Advisory Services</span>
            </div>
          </motion.div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#" className="text-zinc-600 hover:text-seokane transition-colors">Services</a>
            <a href="#" className="text-zinc-600 hover:text-seokane transition-colors">About</a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/pricing" 
              className="px-5 py-2.5 bg-seokane text-white rounded-full hover:bg-seokane-red-light transition-all shadow-md hover:shadow-lg text-sm sm:text-base whitespace-nowrap"
            >
              View Pricing
            </motion.a>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-zinc-600 outline-none"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Overlay */}
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-zinc-100 px-6 py-8 space-y-4"
          >
            <a href="#" className="block text-lg font-medium text-zinc-600">Services</a>
            <a href="#" className="block text-lg font-medium text-zinc-600">About</a>
            <a 
              href="/pricing" 
              className="block w-full py-4 bg-seokane text-white text-center rounded-2xl font-bold"
            >
              View Pricing
            </a>
          </motion.div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/market-research-hero.png" 
            alt="Market Research Hero" 
            fill 
            className="object-cover opacity-10 grayscale-[0.8]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/70 to-white" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center lg:text-left">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto lg:mx-0"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-seokane/5 border border-seokane/10 text-seokane text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-seokane opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-seokane"></span>
              </span>
              New Advisory Offering
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-zinc-950 mb-6 sm:mb-8 leading-[1.15] sm:leading-[1.1]">
              Strategic Market Intelligence for <span className="text-seokane">Niche Industry Verticals</span>
            </h1>
            <p className="text-lg sm:text-xl text-zinc-600 mb-8 sm:mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
              AI-powered desktop research tailored for complex, specialized sectors. We arm you with real-time industry data to validate your expansion strategy before you invest.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.a 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#inquiry-form" 
                className="inline-flex items-center justify-center h-14 px-6 sm:px-8 rounded-full bg-seokane text-white font-semibold text-base sm:text-lg hover:bg-seokane-red-light transition-all shadow-xl hover:shadow-seokane/20"
              >
                Start Discovery <ArrowRight className="ml-2 w-5 h-5 flex-shrink-0" />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="/pricing" 
                className="inline-flex items-center justify-center h-14 px-6 sm:px-8 rounded-full border-2 border-zinc-200 text-zinc-900 font-semibold text-base sm:text-lg hover:border-seokane transition-all bg-white/50 backdrop-blur-sm"
              >
                View Pricing
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 sm:py-24 bg-zinc-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">AI-Powered <span className="text-seokane">Niche Research</span></h2>
              <p className="text-lg text-zinc-600 leading-relaxed mb-6">
                Success in specialized industries—like the <span className="font-semibold text-zinc-900">Burial Services sector</span>—requires more than just capital. It requires a deep understanding of unique cultural nuances, density, and regulatory terrain.
              </p>
              <p className="text-lg text-zinc-700 leading-relaxed mb-8 font-medium">
                SeokaneInc provides high-impact, AI-curated market studies that serve as the empirical foundation for your business expansion, funding applications, and operational strategy.
              </p>
              <ul className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
                {[
                  "Real-time niche vertical data analysis",
                  "Competitive density mapping",
                  "Regulatory & compliance roadmapping",
                  "Go-To-Market feasibility indicators"
                ].map((item, i) => (
                  <motion.li 
                    key={i} 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 text-zinc-800 font-semibold"
                  >
                    <CheckCircle2 className="text-seokane w-5 h-5 flex-shrink-0" />
                    <span className="text-sm sm:text-base">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-[4/3] sm:aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 sm:border-8 border-white group"
            >
               <Image 
                src="/images/market-research-hero.png" 
                alt="Research Document" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-seokane/5 group-hover:bg-transparent transition-colors duration-500" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Report Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div 
            {...fadeIn}
            className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">The SeokaneInc <span className="text-seokane">Intelligence Report</span></h2>
            <p className="text-lg text-zinc-600 font-medium">Each engagement delivers a 15-20 page bespoke document covering critical aspects of the industry vertical.</p>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {[
              {
                title: "Vertical Market Value",
                desc: "Quantifying annual turnover, segment growth, and specialized market potential.",
                icon: PieChart
              },
              {
                title: "Competitive Landscape",
                desc: "Profiling key players, local incumbents, and market share distribution in your niche.",
                icon: Users
              },
              {
                title: "Key Industry Drivers",
                desc: "Identifying the technological, social, and economic factors moving the needle.",
                icon: TrendingUp
              },
              {
                title: "Regulatory Framework",
                desc: "Comprehensive guide to FSP registration, mortuary standards, and zoning laws.",
                icon: ShieldCheck
              },
              {
                title: "Strategic Analysis",
                desc: "Deep dive into consumer behavior, shifting demand, and emerging trends.",
                icon: Search
              },
              {
                title: "Intelligence Output",
                desc: "High-level synthesis for board presentations and investment committees.",
                icon: BarChart3
              }
            ].map((feature, i) => (
              <motion.div 
                key={i} 
                variants={fadeIn}
                className="group p-8 rounded-2xl border border-zinc-200 bg-white hover:border-seokane/40 hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-zinc-100 flex items-center justify-center text-seokane mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-zinc-950 group-hover:text-seokane transition-colors">{feature.title}</h3>
                <p className="text-zinc-600 leading-relaxed font-medium">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Porter Section */}
      <section className="py-16 sm:py-24 bg-[#383838] text-white overflow-hidden relative border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-end justify-between mb-16">
            <motion.div {...fadeIn} className="max-w-2xl text-center lg:text-left mx-auto lg:mx-0">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Built on <span className="text-white">Porter's Five Forces</span></h2>
              <p className="text-lg text-white/80 leading-relaxed font-medium">
                We don't just collect data; we analyze it using Michael Porter's rigorous framework. This ensures you understand the fundamental attractiveness and risk profile of the industry.
              </p>
            </motion.div>
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="hidden lg:block"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 text-sm font-bold text-white shadow-sm">
                Fortune 500 Research Standard
              </div>
            </motion.div>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6"
          >
            {[
              { force: "Threat of New Entrants", desc: "Capital requirements & regulatory barriers." },
              { force: "Supplier Power", desc: "Dependency on hardware & specialized software." },
              { force: "Buyer Power", desc: "Consumer price sensitivity & switching costs." },
              { force: "Threat of Substitutes", desc: "Emerging technological alternatives." },
              { force: "Industry Rivalry", desc: "Incumbent density & competitive intensity." }
            ].map((f, i) => (
              <motion.div 
                key={i} 
                variants={fadeIn}
                whileHover={{ y: -5 }}
                className="p-6 sm:p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all text-center flex flex-col items-center gap-4 shadow-xl"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white flex items-center justify-center text-white font-black text-base sm:text-lg shadow-lg">{i+1}</div>
                <h4 className="text-base sm:text-lg font-bold text-white leading-tight">{f.force}</h4>
                <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-medium">{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-16 sm:py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="space-y-10 sm:space-y-12">
                {[
                  { step: "01", title: "Submit Your Brief", desc: "Fill in our inquiry form with your company details and specific areas of interest within the niche vertical." },
                  { step: "02", title: "Refining Scope", desc: "Our advisors reach out for a 20-minute briefing session to finalize the research parameters." },
                  { step: "03", title: "Research Phase", desc: "Our team conducts AI-augmented research over a 10-14 day period, applying strategic models." },
                  { step: "04", title: "Delivery & Walkthrough", desc: "Receive your document, including a 1-on-1 virtual briefing of the strategic findings." }
                ].map((s, i) => (
                  <motion.div 
                    key={i} 
                    variants={fadeIn}
                    className="flex gap-4 sm:gap-6"
                  >
                    <div className="text-3xl sm:text-4xl font-black text-zinc-100 tabular-nums shrink-0">{s.step}</div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold mb-2 text-zinc-900 leading-tight">{s.title}</h3>
                      <p className="text-sm sm:text-base text-zinc-600 font-medium">{s.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 text-center lg:text-left"
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-8 leading-tight">Expert Analysis, <br className="hidden sm:block" />Delivered with Precision.</h2>
              <div className="p-8 sm:p-10 bg-zinc-50 rounded-[2.5rem] border border-zinc-200 shadow-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-seokane opacity-[0.03] rounded-full -translate-y-12 translate-x-12" />
                <div className="flex items-center gap-4 mb-6 relative">
                  <div className="w-12 h-12 rounded-xl bg-seokane flex items-center justify-center text-white shadow-lg shadow-seokane/20">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-lg text-zinc-950">Intelligence Report</div>
                    <div className="text-xs uppercase tracking-widest text-zinc-400 font-black">15-20 Page PDF Document</div>
                  </div>
                </div>
                <ul className="space-y-3 mb-8 text-left">
                  {["Executive Summary", "Porter's 5 Forces Matrix", "Strategic Recommendations", "Financial Benchmarks"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-zinc-700 text-sm font-semibold">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
                <div className="h-2 bg-zinc-200 rounded-full overflow-hidden relative mb-2">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "95%" }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="h-full bg-seokane" 
                  />
                </div>
                <div className="text-[10px] text-zinc-400 uppercase font-black tracking-[0.2em]">Research Accuracy: 98%</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section id="inquiry-form" className="py-20 sm:py-28 bg-zinc-50 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div {...fadeIn} className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Request Your <span className="text-seokane">Custom Study</span></h2>
            <p className="text-base sm:text-lg text-zinc-600 font-medium">Provide your details to begin the Discovery Process.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white p-6 sm:p-12 rounded-[2.5rem] shadow-2xl shadow-seokane/5 border border-zinc-200"
          >
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Inquiry Received</h3>
                <p className="text-zinc-600 mb-8 max-w-sm mx-auto font-medium">
                  Our Advisory team will contact you within 24 hours to finalize your brief.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="px-8 py-3 bg-zinc-950 text-white rounded-full font-bold hover:bg-zinc-800 transition-all shadow-lg"
                >
                  Send Another Request
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-2">
                    <label className="text-xs sm:text-sm font-bold text-zinc-700 ml-1 uppercase tracking-widest">First Name</label>
                    <input required name="firstName" placeholder="Jane" className="w-full h-14 px-5 rounded-2xl bg-zinc-50 border-zinc-200 focus:bg-white focus:border-seokane focus:ring-4 focus:ring-seokane/5 outline-none transition-all placeholder:text-zinc-300 font-medium" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs sm:text-sm font-bold text-zinc-700 ml-1 uppercase tracking-widest">Last Name</label>
                    <input required name="lastName" placeholder="Doe" className="w-full h-14 px-5 rounded-2xl bg-zinc-50 border-zinc-200 focus:bg-white focus:border-seokane focus:ring-4 focus:ring-seokane/5 outline-none transition-all placeholder:text-zinc-300 font-medium" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-2">
                    <label className="text-xs sm:text-sm font-bold text-zinc-700 ml-1 uppercase tracking-widest">Email Address</label>
                    <input required type="email" name="email" placeholder="jane@company.com" className="w-full h-14 px-5 rounded-2xl bg-zinc-50 border-zinc-200 focus:bg-white focus:border-seokane focus:ring-4 focus:ring-seokane/5 outline-none transition-all placeholder:text-zinc-300 font-medium" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs sm:text-sm font-bold text-zinc-700 ml-1 uppercase tracking-widest">Company Name</label>
                    <input required name="companyName" placeholder="Enter Company" className="w-full h-14 px-5 rounded-2xl bg-zinc-50 border-zinc-200 focus:bg-white focus:border-seokane focus:ring-4 focus:ring-seokane/5 outline-none transition-all placeholder:text-zinc-300 font-medium" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-2">
                    <label className="text-xs sm:text-sm font-bold text-zinc-700 ml-1 uppercase tracking-widest">Company Size</label>
                    <select name="companySize" className="w-full h-14 px-5 rounded-2xl bg-zinc-50 border-zinc-200 focus:bg-white focus:border-seokane focus:ring-4 focus:ring-seokane/5 outline-none transition-all font-medium">
                      <option>1-10 employees</option>
                      <option>11-50 employees</option>
                      <option>51-200 employees</option>
                      <option>200+ employees</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs sm:text-sm font-bold text-zinc-700 ml-1 uppercase tracking-widest">Sector</label>
                    <input required name="sector" placeholder="e.g. Finance, Tech, Burial" className="w-full h-14 px-5 rounded-2xl bg-zinc-50 border-zinc-200 focus:bg-white focus:border-seokane focus:ring-4 focus:ring-seokane/5 outline-none transition-all placeholder:text-zinc-300 font-medium" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs sm:text-sm font-bold text-zinc-700 ml-1 uppercase tracking-widest">Service Brief (Max 500 words)</label>
                  <textarea required name="brief" rows={5} placeholder="Tell us about your research needs..." className="w-full p-5 rounded-2xl bg-zinc-50 border-zinc-200 focus:bg-white focus:border-seokane focus:ring-4 focus:ring-seokane/5 outline-none transition-all placeholder:text-zinc-300 resize-none font-medium"></textarea>
                </div>

                {error && <p className="text-seokane text-sm font-bold text-center p-3 bg-seokane/5 rounded-xl">{error}</p>}

                <motion.button 
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  disabled={isPending}
                  className="w-full h-16 bg-seokane text-white rounded-2xl font-bold text-lg sm:text-xl hover:bg-seokane-red-light transition-all shadow-xl shadow-seokane/20 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  {isPending ? "Processing Brief..." : (
                    <>
                      Submit Brief <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 sm:py-20 bg-white border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 sm:gap-16">
            <div className="max-w-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="relative w-10 h-10 bg-white rounded-lg overflow-hidden border border-zinc-200 flex items-center justify-center shadow-sm">
                  <Image src="/seokane-symbol.png" alt="Seokane Logo" width={32} height={32} />
                </div>
                <span className="text-xl font-bold tracking-tight">SeokaneInc</span>
              </div>
              <p className="text-zinc-500 leading-relaxed font-medium">
                High-precision advisory for specialized industries in South Africa. Empowering leaders with data.
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-16 w-full md:w-auto">
              <div>
                <h4 className="font-black mb-6 text-[10px] uppercase tracking-[0.2em] text-zinc-400">Services</h4>
                <ul className="space-y-3 text-zinc-600 font-semibold text-sm">
                  <li><a href="#" className="hover:text-seokane transition-colors">Market Research</a></li>
                  <li><a href="#" className="hover:text-seokane transition-colors">Legal Advisory</a></li>
                  <li><a href="#" className="hover:text-seokane transition-colors">Business Strategy</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-black mb-6 text-[10px] uppercase tracking-[0.2em] text-zinc-400">Company</h4>
                <ul className="space-y-3 text-zinc-600 font-semibold text-sm">
                  <li><a href="#" className="hover:text-seokane transition-colors">About Us</a></li>
                  <li><a href="#" className="hover:text-seokane transition-colors">Our Team</a></li>
                  <li><a href="#" className="hover:text-seokane transition-colors">Contact</a></li>
                </ul>
              </div>
              <div className="col-span-2 lg:col-span-1">
                <h4 className="font-black mb-6 text-[10px] uppercase tracking-[0.2em] text-zinc-400">Contact</h4>
                <ul className="space-y-3 text-zinc-600 font-semibold text-sm">
                  <li className="break-all">info@seokaneinc.co.za</li>
                  <li>+27 11 000 0000</li>
                  <li>Sandton, South Africa</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-20 pt-8 border-t border-zinc-100 text-center text-zinc-400 text-[10px] font-black uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} Seokane Advisory Services (Pty) Ltd.
          </div>
        </div>
      </footer>
    </div>
  );
}
