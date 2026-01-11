import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, AlertCircle, CheckCircle2, Zap, Clock, ShieldCheck } from 'lucide-react'
import HeroBackground from './ui/HeroBackground'

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center pt-32 pb-20 relative overflow-hidden bg-white">
      {/* Three.js Particle Background - z-0 */}
      <HeroBackground />

      {/* Subtle Background Text - z-1 */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center opacity-[0.015] pointer-events-none select-none uppercase font-black text-[20vw] whitespace-nowrap leading-none tracking-tighter text-gray-900"
        style={{ zIndex: 1 }}
      >
        Lean MVP Studio
      </div>

      {/* Main Content - z-10 */}
      <div className="relative w-full max-w-7xl mx-auto px-6" style={{ zIndex: 10 }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Content Side */}
          <div className="flex flex-col items-start gap-8">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-6xl md:text-7xl lg:text-[6.5rem] font-bold text-gray-900 leading-[1.1] tracking-tight"
            >
              Stop Guessing. <br />
              Build <span className="text-blue-600 italic">Validated.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="text-xl md:text-2xl text-gray-500 leading-relaxed font-medium max-w-lg"
            >
              We help founders launch lean, high-performing MVPs in 8–12 weeks — focused on validation, not feature bloat.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Link
                to="/contact"
                className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-blue-700 hover:shadow-2xl hover:shadow-blue-200 transition-all duration-300 flex items-center gap-3 group"
              >
                Validate My Idea
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <div className="flex items-center gap-8 mt-4 border-l-2 border-gray-200 pl-8">
              {[
                { icon: Clock, text: '8-12 Wk Launch' },
                { icon: ShieldCheck, text: '100% IP Ownership' }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 0.35 + (i * 0.1), duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-gray-400"
                >
                  <item.icon className="text-blue-600" size={18} />
                  {item.text}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Visual Side: Before -> After Transformation */}
          <motion.div
            initial={{ opacity: 0, x: 80, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative space-y-4" style={{ zIndex: 10 }}>

              {/* Before Card */}
              <div className="bg-white/80 backdrop-blur-sm border border-red-100 p-6 rounded-3xl relative overflow-hidden group hover:bg-white/90 transition-colors shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <AlertCircle size={18} className="text-red-500" />
                  <span className="text-red-500 font-black uppercase tracking-widest text-[10px]">The Traditional Way</span>
                </div>
                <div className="flex flex-wrap gap-3">
                  {['6+ Month Builds', 'Feature Creep', 'High Technical Debt'].map((item) => (
                    <span key={item} className="px-3 py-1.5 bg-red-50 text-red-400 text-[11px] font-bold rounded-full border border-red-100/50">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Connector */}
              <div className="flex justify-center -my-2 relative z-20">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg">
                  <ArrowRight className="rotate-90" size={18} />
                </div>
              </div>

              {/* After Card */}
              <div className="bg-blue-600 p-8 rounded-[2.5rem] text-white shadow-2xl shadow-blue-500/30 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <CheckCircle2 size={100} />
                </div>
                <div className="flex items-center gap-3 mb-6">
                  <Zap size={18} className="text-blue-200 fill-blue-200" />
                  <span className="text-blue-200 font-black uppercase tracking-widest text-[10px]">The Nemvol Advantage</span>
                </div>
                <ul className="space-y-4">
                  {[
                    { text: '8-12 Week Launch', icon: Clock },
                    { text: 'Data-Backed Validation', icon: CheckCircle2 },
                    { text: 'Investment-Ready Build', icon: ShieldCheck }
                  ].map((item) => (
                    <li key={item.text} className="flex items-center gap-4 font-black text-xl tracking-tight">
                      <div className="p-1.5 bg-blue-500 rounded-lg">
                        <item.icon className="text-white" size={20} />
                      </div>
                      {item.text}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-blue-500/50 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-blue-100 uppercase tracking-widest">Market-Ready Outcome</span>
                  <div className="flex gap-1.5">
                    {[1, 2, 3].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-blue-300" />)}
                  </div>
                </div>
              </div>

            </div>

            {/* Subtler Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-blue-100/30 rounded-full blur-[120px] pointer-events-none" style={{ zIndex: -1 }} />
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default HeroSection
