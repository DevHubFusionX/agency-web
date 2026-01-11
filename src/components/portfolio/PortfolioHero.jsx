import { motion } from 'framer-motion'
import Section from '../ui/Section'

const PortfolioHero = () => {
  return (
    <Section className="min-h-[70vh] flex items-center pt-32 pb-20 relative overflow-hidden md:overflow-visible bg-white">
      {/* Decorative Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center opacity-[0.015] pointer-events-none select-none uppercase font-black text-[12vw] md:text-[18vw] whitespace-nowrap leading-none tracking-tighter">
        Our Work
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-start text-left max-w-5xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100/50 text-blue-600 text-xs font-bold uppercase tracking-[0.2em] mb-8"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
            Case Studies
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-7xl lg:text-8xl font-bold text-gray-900 leading-[1.05] tracking-tight mb-6 md:mb-8"
          >
            MVPs That Reached <br />
            <span className="text-blue-600 italic">Product-Market Fit.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-2xl text-gray-600 max-w-2xl leading-relaxed mb-8 md:mb-12 font-medium"
          >
            From concept to funded startup. Here's how we've helped founders validate ideas, raise capital, and scale their products.
          </motion.p>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-2 md:gap-3 mb-12 md:mb-16"
          >
            {['All Projects', 'Startups', 'Agencies', 'SMEs'].map((filter, i) => (
              <button
                key={filter}
                className={`px-4 py-2 md:px-5 md:py-2.5 rounded-full text-xs md:text-sm font-medium transition-all duration-300 ${i === 0
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-200'
                  : 'bg-gray-50 text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                  }`}
              >
                {filter}
              </button>
            ))}
          </motion.div>

          {/* Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 md:gap-x-12 gap-y-6 md:gap-y-8 w-full border-t border-gray-100 pt-8 md:pt-12">
            {[
              { label: 'MVPs Shipped', value: '50+' },
              { label: 'Avg Delivery', value: '10 Wks' },
              { label: 'Raised by Clients', value: '$15M+' },
              { label: 'Success Rate', value: '90%' }
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="space-y-1"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.5 + i * 0.1,
                  ease: [0.25, 0.4, 0.25, 1]
                }}
              >
                <div className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">{stat.value}</div>
                <div className="text-[10px] md:text-xs uppercase font-bold text-gray-400 tracking-wider font-montserrat">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Soft Background Glow */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.4, 0.3],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-1/4 -right-1/4 w-[800px] h-[800px] bg-blue-50/60 rounded-full blur-[120px] pointer-events-none"
      />
    </Section>
  )
}

export default PortfolioHero