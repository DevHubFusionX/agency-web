import { motion } from 'framer-motion'
import Section from '../ui/Section'
import ParticleField from '../ui/ParticleField'

const FAQHero = () => {
  return (
    <Section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50"></div>
      <ParticleField />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6"
        >
          ❓ App Development FAQ
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
        >
          Got Questions About
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
            App Development?
          </span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-gray-600 leading-relaxed"
        >
          Find answers to common questions about React, React Native development, 
          project timelines, pricing, and our app development process.
        </motion.p>
      </div>
    </Section>
  )
}

export default FAQHero