import { motion } from 'framer-motion'
import Section from '../ui/Section'
import ParticleField from '../ui/ParticleField'

const PortfolioHero = () => {
  return (
    <Section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 "></div>
      <ParticleField />

      <div className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6"
        >
          📱 Our App Portfolio
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
        >
          Web & Mobile Apps
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
            We've Built
          </span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
        >
          Discover the React web applications and React Native mobile apps we've built for clients, 
          featuring real user metrics and technical implementation details.
        </motion.p>
      </div>
    </Section>
  )
}

export default PortfolioHero