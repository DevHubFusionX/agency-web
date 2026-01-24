import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, AlertCircle, CheckCircle2, Zap, Clock, ShieldCheck, Calendar } from 'lucide-react'
import HeroBackground from './ui/HeroBackground'
import Modal from './ui/Modal'
import HeroLeadForm from './contact/HeroLeadForm'
import WaveBackground from './ui/WaveBackground'

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <section className="min-h-screen flex items-center pt-16 pb-20 relative overflow-hidden bg-white">
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
          <div className="flex flex-col items-start gap-6">


            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl md:text-6xl lg:text-[5.5rem] font-bold text-gray-900 leading-[1.1] tracking-tight"
            >
              The MVP & Development Partner for <span className="text-blue-600 italic">Founders.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-xl md:text-2xl text-gray-500 leading-relaxed font-medium max-w-lg"
            >
              We design, build, and prove your digital product in 8–12 weeks — and stay to turn traction into revenue.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-4 pt-4 w-full sm:w-auto"
            >
              <Link
                to="/contact"
                className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-blue-700 hover:shadow-2xl hover:shadow-blue-200 transition-all duration-300 flex items-center justify-center gap-3 group"
              >
                Start Discovery Sprint
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <button
                onClick={() => setIsModalOpen(true)}
                className="px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 border-2 border-gray-100 text-gray-400 hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
              >
                Book Strategy session
                <Calendar size={18} />
              </button>
            </motion.div>

            <div className="flex items-center gap-8 mt-4 border-l-2 border-gray-200 pl-8">
              {[
                { icon: Clock, text: '8-12 Wk Build' },
                { icon: ShieldCheck, text: '100% IP Ownership' }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 0.4 + (i * 0.05), duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
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
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Desktop Inline Form */}
            <div className="hidden lg:block relative z-10">
              <HeroLeadForm />
            </div>

            {/* Subtler Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-blue-100/30 rounded-full blur-[120px] pointer-events-none" style={{ zIndex: -1 }} />
          </motion.div>

        </div>
      </div>



      {/* Mobile Modal for Lead Form */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Strategy Session"
      >
        <HeroLeadForm compact />
      </Modal>
    </section>
  )
}

export default HeroSection
