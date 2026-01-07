import { motion } from 'framer-motion'
import Section from '../ui/Section'

const metrics = [
  {
    metric: '50+',
    label: 'Products Launched',
    description: 'Shipped to real users',
    svg: (
      <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
        <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2" strokeDasharray="4 2" opacity="0.3" />
        <path d="M24 8v32M8 24h32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="24" cy="24" r="8" fill="currentColor" opacity="0.2" />
        <circle cx="24" cy="24" r="4" fill="currentColor" />
      </svg>
    )
  },
  {
    metric: '5',
    label: 'Continents',
    description: 'Global reach',
    svg: (
      <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
        <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2" />
        <ellipse cx="24" cy="24" rx="8" ry="18" stroke="currentColor" strokeWidth="2" />
        <path d="M6 24h36M10 14h28M10 34h28" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      </svg>
    )
  },
  {
    metric: '1M+',
    label: 'End Users',
    description: 'People impacted',
    svg: (
      <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
        <circle cx="24" cy="16" r="8" stroke="currentColor" strokeWidth="2" />
        <path d="M12 40c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="38" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
        <circle cx="10" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      </svg>
    )
  },
  {
    metric: '4.8',
    label: 'Avg. Rating',
    description: 'Client satisfaction',
    svg: (
      <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
        <path d="M24 4l5.5 11.5L42 17l-9 8.5 2 12.5-11-6-11 6 2-12.5-9-8.5 12.5-1.5L24 4z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M24 12l2.5 5.5 6 .75-4.25 4 1 6-5.25-3-5.25 3 1-6-4.25-4 6-.75L24 12z" fill="currentColor" opacity="0.3" />
      </svg>
    )
  }
]

const ImpactMetrics = () => {
  return (
    <Section background="gray" className="py-28 overflow-hidden">
      <div className="relative">
        {/* Scattered/Asymmetric Layout */}
        <div className="max-w-6xl mx-auto">
          {/* Header - Off-center */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 md:ml-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
              Results That Matter
            </h2>
          </motion.div>

          {/* Metrics - Staggered Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {metrics.map((item, index) => {
              // Create varied positioning
              const offsets = [
                'md:mt-0',
                'md:mt-16',
                'md:mt-8',
                'md:mt-24'
              ]

              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className={`group ${offsets[index]}`}
                >
                  <div className="bg-white rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                    {/* SVG Icon */}
                    <div className="w-16 h-16 text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                      {item.svg}
                    </div>

                    {/* Metric */}
                    <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 tracking-tight">
                      {item.metric}
                    </div>

                    {/* Label */}
                    <div className="text-base font-medium text-gray-700 mb-1">
                      {item.label}
                    </div>

                    {/* Description */}
                    <div className="text-sm text-gray-400">
                      {item.description}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-100 rounded-full translate-y-1/2 -translate-x-1/2 opacity-40 blur-2xl"></div>
      </div>
    </Section>
  )
}

export default ImpactMetrics