import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, Clock, ShieldCheck, Users } from 'lucide-react'
import Modal from '../ui/Modal'
import HeroLeadForm from '../contact/HeroLeadForm'

const rotatingWords = ['for Africa.', 'for Startups.']

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [wordIndex, setWordIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const trustPoints = [
    { icon: Clock, text: '8–12 Week Delivery' },
    { icon: ShieldCheck, text: '100% IP Ownership' },
    { icon: Users, text: '30+ Products Shipped' },
  ]

  return (
    <section className="relative min-h-screen flex items-center bg-white overflow-hidden pt-20 pb-16 lg:pt-24 lg:pb-20" id="hero">

      {/* Subtle background accents */}
      <div className="absolute -top-[15%] -right-[5%] w-[600px] h-[600px] rounded-full pointer-events-none blur-[120px] bg-[radial-gradient(circle,rgba(0,86,184,0.06)_0%,transparent_70%)]" />
      <div className="absolute -bottom-[10%] -left-[5%] w-[500px] h-[500px] rounded-full pointer-events-none blur-[120px] bg-[radial-gradient(circle,rgba(56,169,248,0.05)_0%,transparent_70%)]" />

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">

          {/* Left — Content Side */}
          <div className="flex flex-col gap-6 text-center lg:text-left items-center lg:items-start">



            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold leading-[1.15] tracking-[-0.03em] text-gray-900 m-0"
            >
              The development partner
              <br />
              <span className="inline-flex relative h-[1.2em] overflow-hidden align-bottom">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={rotatingWords[wordIndex]}
                    initial={{ y: '100%', opacity: 0 }}
                    animate={{ y: '0%', opacity: 1 }}
                    exit={{ y: '-100%', opacity: 0 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="text-blue-700 italic"
                  >
                    {rotatingWords[wordIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg leading-relaxed text-gray-500 max-w-[520px] m-0"
            >
              Launch your startup. Ship your product. We design and build
              scalable digital platforms for African founders and businesses — from MVP to market leader.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row flex-wrap gap-3.5 pt-2 w-full sm:w-auto"
            >
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-blue-700 text-white rounded-xl text-[0.9rem] font-bold no-underline shadow-[0_4px_14px_rgba(0,86,184,0.2)] transition-all duration-300 hover:bg-blue-800 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,86,184,0.28)] group"
              >
                Get Started
                <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-transparent text-gray-700 border-[1.5px] border-gray-200 rounded-xl text-[0.9rem] font-semibold cursor-pointer transition-all duration-300 hover:border-blue-700 hover:text-blue-700 hover:bg-blue-50/40 hover:-translate-y-0.5"
              >
                <Calendar size={18} />
                Book Strategy Call
              </button>
            </motion.div>

            {/* Trust Points */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-3 sm:gap-5 pt-3 border-t border-gray-100 mt-1"
            >
              {trustPoints.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.08, duration: 0.4 }}
                  className="flex items-center gap-1.5 text-[0.8rem] font-semibold text-gray-400 uppercase tracking-wide"
                >
                  <item.icon size={16} className="text-blue-700 shrink-0" />
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right — Form Side (desktop only) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10">
              <HeroLeadForm />
            </div>
            {/* Decorative glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-[radial-gradient(circle,rgba(0,86,184,0.06)_0%,transparent_65%)] rounded-full pointer-events-none -z-10 blur-[40px]" />
          </motion.div>

        </div>
      </div>

      {/* Mobile Modal for Lead Form */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Book Your Strategy Call"
      >
        <HeroLeadForm compact />
      </Modal>
    </section>
  )
}

export default HeroSection
