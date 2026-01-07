import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Section from './ui/Section'
import PremiumBackground from './ui/PremiumBackground'

const HeroSection = () => {
  return (
    <Section className="min-h-[100vh] flex items-center justify-center pt-32 pb-20 relative overflow-hidden bg-white">
      {/* Decorative Background Section Title */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center opacity-[0.02] pointer-events-none select-none uppercase font-black text-[25vw] whitespace-nowrap leading-none tracking-tighter">
        Nemvol Studio
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-start text-left space-y-12">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100/50 text-blue-600 text-sm font-bold uppercase tracking-[0.2em]"
          >
            <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            Digital Product Studio
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-8xl lg:text-[10rem] font-bold text-gray-900 leading-[0.8] tracking-tight"
          >
            We Build Web &<br />
            <span className="text-blue-600 italic">Mobile Products.</span>
          </motion.h1>

          <div className="flex flex-col md:flex-row items-start md:items-end justify-between w-full gap-12">
            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-3xl text-gray-500 max-w-2xl leading-relaxed font-medium"
            >
              Transforming visionary ideas into high-performance digital engines. We partner with founders to build, launch, and scale products that define categories.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                to="/contact"
                className="bg-blue-600 text-white px-10 py-5 rounded-3xl font-bold text-xl hover:bg-blue-700 hover:shadow-2xl hover:shadow-blue-200 transition-all duration-300 flex items-center gap-3 group"
              >
                Start a Project
                <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
              </Link>
              <Link
                to="/portfolio"
                className="bg-white text-gray-900 border-2 border-gray-100 px-10 py-5 rounded-3xl font-bold text-xl hover:bg-gray-50 transition-all duration-300"
              >
                Our Work
              </Link>
            </motion.div>
          </div>

          {/* Metrics Strip */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-12 pt-20 w-full border-t border-gray-100"
          >
            {[
              { label: 'Products Shipped', value: '40+' },
              { label: 'Client Satisfaction', value: '99%' },
              { label: 'Years Experience', value: '8+' },
              { label: 'Tech Stack', value: 'Modern' }
            ].map((stat, i) => (
              <div key={i} className="space-y-2">
                <div className="text-3xl md:text-5xl font-black text-gray-900 tracking-tighter">{stat.value}</div>
                <div className="text-xs uppercase font-black text-gray-400 tracking-[0.2em]">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Abstract Background Decoration */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-1/4 -right-1/4 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-[120px] pointer-events-none"
      />
    </Section>
  )
}

export default HeroSection