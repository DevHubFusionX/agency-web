import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Section from '../ui/Section'

const phases = [
  {
    step: '01',
    title: 'Discover',
    description: 'Understand first',
    details: 'We dig deep into the problem, users, and market before writing a single line of code. This prevents costly pivots later.',
    deliverables: ['User Research', 'Market Analysis', 'MVP Scope'],
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </svg>
    )
  },
  {
    step: '02',
    title: 'Design',
    description: 'Craft experiences',
    details: 'Translate insights into intuitive, scalable product experiences. Wireframes and prototypes validated before build.',
    deliverables: ['Wireframes', 'UI Mockups', 'Prototype'],
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M12 19l7-7 3 3-7 7-3-3z" />
        <path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <path d="m2 2 7.586 7.586" />
        <circle cx="11" cy="11" r="2" />
      </svg>
    )
  },
  {
    step: '03',
    title: 'Build',
    description: 'Agile delivery',
    details: 'Develop using agile, milestone-based sprints. Regular demos keep you in control. No surprises.',
    deliverables: ['Clean Code', 'API Integration', 'Testing'],
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    )
  },
  {
    step: '04',
    title: 'Validate',
    description: 'Measure traction',
    details: 'Launch to real users and measure what matters. Usage data, performance metrics, and user feedback drive next steps.',
    deliverables: ['Analytics', 'User Testing', 'Performance'],
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    )
  },
  {
    step: '05',
    title: 'Grow',
    description: 'Iterate & scale',
    details: 'We stay beyond deployment. Continuous iteration based on real data to optimize and scale your product.',
    deliverables: ['CRO', 'Feature Tuning', 'Support'],
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </svg>
    )
  }
]

const DeliveryMethodology = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <Section background="white" className="py-24 md:py-32 relative">
      {/* Background Decorative Text */}
      <div className="absolute top-20 left-10 opacity-[0.03] pointer-events-none select-none uppercase font-black text-[12vw] whitespace-nowrap leading-none tracking-tighter">
        Our Approach
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-black uppercase tracking-[0.2em] mb-8"
            >
              Methodology
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold text-gray-900 leading-[0.9] tracking-tight"
            >
              Simple Process, <br />
              <span className="text-blue-600 italic">Proven Results.</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:pt-20"
          >
            <p className="text-xl md:text-2xl text-gray-500 max-w-xl leading-relaxed">
              Our product-first, outcome-driven methodology reduces risk and accelerates value creation. Clarity, accountability, and measurable results.
            </p>
          </motion.div>
        </div>

        {/* Timeline Grid */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-28 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-4">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex flex-col items-center text-center group"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Icon Container */}
                <motion.div
                  whileHover={{ scale: 1.1, y: -4 }}
                  className="w-20 h-20 bg-white rounded-3xl shadow-sm border border-gray-100 flex items-center justify-center mb-6 group-hover:border-blue-200 group-hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  <div className="text-gray-400 group-hover:text-blue-600 transition-colors duration-300">
                    {phase.svg}
                  </div>
                </motion.div>

                {/* Tooltip */}
                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full mt-4 left-1/2 -translate-x-1/2 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 p-5 z-20"
                    >
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-gray-100 rotate-45"></div>
                      <p className="text-sm text-gray-600 leading-relaxed mb-4">{phase.details}</p>
                      <div className="flex flex-wrap gap-2">
                        {phase.deliverables.map((item) => (
                          <span key={item} className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-full font-medium">
                            {item}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Step Number */}
                <span className="text-xs font-bold text-blue-600 mb-2">{phase.step}</span>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {phase.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-500">{phase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}

export default DeliveryMethodology