import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Section from '../ui/Section'

const phases = [
  {
    step: '01',
    title: 'Discover',
    description: 'Understand your goals',
    details: 'Deep dive into your business, users, and market. We conduct stakeholder interviews and competitive analysis to shape the product vision.',
    deliverables: ['User Research', 'Market Analysis', 'Project Brief'],
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
    description: 'Craft the experience',
    details: 'Create intuitive interfaces through wireframes, mockups, and prototypes. Every design decision is validated for usability.',
    deliverables: ['Wireframes', 'UI Mockups', 'Design System'],
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
    title: 'Develop',
    description: 'Build with precision',
    details: 'Senior engineers build your product using modern frameworks. Agile sprints with regular demos keep you in the loop.',
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
    title: 'Deploy',
    description: 'Launch & scale',
    details: 'Production deployment with monitoring, optimization, and ongoing support. We partner long-term to help you grow.',
    deliverables: ['CI/CD Pipeline', 'Monitoring', 'Support'],
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
    <Section background="gray" className="py-32">
      <div className="text-center mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight"
        >
          How We Work
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl text-gray-500 max-w-lg mx-auto"
        >
          A simple, proven process from idea to launch.
        </motion.p>
      </div>

      {/* Horizontal Timeline */}
      <div className="relative max-w-5xl mx-auto">
        {/* Connecting Line */}
        <div className="hidden md:block absolute top-24 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
          {phases.map((phase, index) => (
            <motion.div
              key={phase.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
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
                    {/* Arrow */}
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-gray-100 rotate-45"></div>

                    <p className="text-sm text-gray-600 leading-relaxed mb-4">{phase.details}</p>
                    <div className="flex flex-wrap gap-2">
                      {phase.deliverables.map((item) => (
                        <span key={item} className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-full">
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
    </Section>
  )
}

export default DeliveryMethodology