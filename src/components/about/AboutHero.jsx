import { motion } from 'framer-motion'
import Section from '../ui/Section'
import ParticleField from '../ui/ParticleField'

const AboutHero = () => {
  return (
    <Section className="min-h-[90vh] flex items-center justify-center pt-32 pb-48 relative overflow-hidden bg-white">
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
            Our Mission
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-[7rem] font-bold text-gray-900 leading-[1] tracking-tight"
          >
            Bridging the Gap Between <br />
            <span className="text-blue-600 italic">Idea & Execution.</span>
          </motion.h1>

          <div className="flex flex-col md:flex-row items-start md:items-end justify-between w-full gap-12">
            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-3xl text-gray-500 max-w-3xl leading-relaxed font-medium"
            >
              Nemvol is a product development agency that partners with founders to transform ideas into validated, scalable digital products.
            </motion.p>
          </div>

          {/* Metrics Strip */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-12 pt-20 w-full border-t border-gray-100"
          >
            {[
              { label: 'Approach', value: 'Discovery-First' },
              { label: 'Execution', value: 'Agile' },
              { label: 'Focus', value: 'Market-Ready' },
              { label: 'Outcome', value: 'Scalable' }
            ].map((stat, i) => (
              <div key={i} className="space-y-2">
                <div className="text-2xl md:text-4xl font-black text-gray-900 tracking-tighter">{stat.value}</div>
                <div className="text-xs uppercase font-black text-gray-400 tracking-[0.2em]">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Background Wave */}
      <div className="absolute bottom-0 left-0 w-full z-0 opacity-10 pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#2563eb" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,122.7C960,117,1056,171,1152,197.3C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
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

export default AboutHero