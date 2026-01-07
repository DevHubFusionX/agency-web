import { motion } from 'framer-motion'
import Section from '../ui/Section'

const technologies = [
  { name: 'React', category: 'Frontend', level: 95, color: '#61DAFB' },
  { name: 'TypeScript', category: 'Frontend', level: 90, color: '#3178C6' },
  { name: 'Next.js', category: 'Frontend', level: 92, color: '#000000' },
  { name: 'React Native', category: 'Mobile', level: 88, color: '#61DAFB' },
  { name: 'Node.js', category: 'Backend', level: 90, color: '#339933' },
  { name: 'PostgreSQL', category: 'Backend', level: 85, color: '#4169E1' },
  { name: 'AWS', category: 'Cloud', level: 88, color: '#FF9900' },
  { name: 'Docker', category: 'Cloud', level: 82, color: '#2496ED' },
]

const TechnicalExpertise = () => {
  return (
    <Section className="py-24">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight"
        >
          Our Tech Stack
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-gray-500 max-w-lg mx-auto"
        >
          The tools we master to build great products.
        </motion.p>
      </div>

      {/* Creative Bar Chart */}
      <div className="max-w-4xl mx-auto">
        <div className="space-y-5">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group"
            >
              <div className="flex items-center gap-4">
                {/* Tech Name */}
                <div className="w-28 shrink-0">
                  <span className="text-sm font-medium text-gray-700">{tech.name}</span>
                </div>

                {/* Bar Container */}
                <div className="flex-1 h-10 bg-gray-50 rounded-full overflow-hidden relative">
                  {/* Animated Bar */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${tech.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: index * 0.1, ease: "easeOut" }}
                    className="h-full rounded-full relative overflow-hidden"
                    style={{
                      background: `linear-gradient(90deg, ${tech.color}20, ${tech.color}60)`,
                    }}
                  >
                    {/* Shimmer Effect */}
                    <motion.div
                      className="absolute inset-0 opacity-30"
                      style={{
                        background: `linear-gradient(90deg, transparent, white, transparent)`,
                      }}
                      animate={{ x: ['-100%', '200%'] }}
                      transition={{ duration: 2, delay: 1 + index * 0.1, repeat: Infinity, repeatDelay: 3 }}
                    />

                    {/* Dot Indicator */}
                    <div
                      className="absolute right-2 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full flex items-center justify-center shadow-sm"
                      style={{ backgroundColor: tech.color }}
                    >
                      <span className="text-xs font-bold text-white">{tech.level}</span>
                    </div>
                  </motion.div>
                </div>

                {/* Category Badge */}
                <div className="w-20 shrink-0">
                  <span className="px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded-full">{tech.category}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="flex justify-center gap-6 mt-10"
        >
          {['Frontend', 'Mobile', 'Backend', 'Cloud'].map((cat) => (
            <div key={cat} className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-600"></div>
              <span className="text-xs text-gray-500">{cat}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </Section>
  )
}

export default TechnicalExpertise