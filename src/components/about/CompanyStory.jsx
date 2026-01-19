import { motion } from 'framer-motion'
import Section from '../ui/Section'

const CompanyStory = () => {
  const pillars = [
    {
      title: 'Our Purpose',
      description: 'To empower innovators by providing the technical and strategic muscle needed to build the future.'
    },
    {
      title: 'Our Vision',
      description: 'To be the leading product innovation partner for African founders—and beyond.'
    },
    {
      title: 'Our Mission',
      description: 'To bridge the gap between idea and execution for startups and SMEs.'
    }
  ]

  return (
    <Section className="py-24 md:py-32 relative overflow-hidden bg-white">
      {/* Decorative Background Text */}
      <div className="absolute top-20 right-10 opacity-[0.03] pointer-events-none select-none uppercase font-black text-[12vw] whitespace-nowrap leading-none tracking-tighter">
        Our Core
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:sticky lg:top-32"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-black uppercase tracking-[0.2em] mb-8"
            >
              The Nemvol Way
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold text-gray-900 leading-[0.9] tracking-tight mb-12"
            >
              We Build to <br />
              <span className="text-blue-600 italic">Empower.</span>
            </motion.h2>

            <div className="space-y-6 text-gray-500 leading-relaxed text-xl md:text-2xl max-w-xl">
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Nemvol isn't just a dev shop. We are the technical co-founder you wish you had.
                We exist to solve the biggest problem for founders: <span className="text-gray-900 font-bold">Execution Risk</span>.
              </motion.p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="space-y-8">
              {pillars.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                  className="relative p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition-all duration-500 group"
                >
                  <h3 className="text-2xl font-black text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">{item.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  )
}

export default CompanyStory