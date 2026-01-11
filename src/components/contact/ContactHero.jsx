import { motion } from 'framer-motion'
import Section from '../ui/Section'

const ContactHero = () => {
  return (
    <Section background="none" className="min-h-[50vh] flex items-center pt-32 pb-20 relative overflow-hidden bg-white">
      {/* Decorative Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center opacity-[0.015] pointer-events-none select-none uppercase font-black text-[18vw] whitespace-nowrap leading-none tracking-tighter">
        Consultation
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100/50 text-blue-600 text-xs font-bold uppercase tracking-[0.2em] mb-8"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
            Free Consultation
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-7xl lg:text-8xl font-bold text-gray-900 leading-[1.05] tracking-tight mb-6 md:mb-8"
          >
            Turn Your Idea Into a <br className="hidden md:block" />
            <span className="text-blue-600 italic">Validated Product.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-2xl text-gray-500 max-w-3xl leading-relaxed mb-6 md:mb-8 font-medium"
          >
            Book your free 30-minute discovery call today. We'll discuss your vision, audit your requirements, and map out a strategic path to MVP.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-[10px] md:text-sm font-bold text-gray-400 uppercase tracking-widest mt-4"
          >
            <span className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-blue-600" />
              Strategy Audit
            </span>
            <span className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-blue-600" />
              Technical Roadmap
            </span>
            <span className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-blue-600" />
              Budget Estimate
            </span>
          </motion.div>
        </div>
      </div>
    </Section>
  )
}

export default ContactHero