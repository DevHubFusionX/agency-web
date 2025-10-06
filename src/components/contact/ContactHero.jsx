import { motion } from 'framer-motion'
import Section from '../ui/Section'

const ContactHero = () => {
  return (
    <Section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50"></div>
      
      <div className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6"
        >
          ✨ Let's Start Your Digital Transformation
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
        >
          Ready to Build Something
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
            Extraordinary?
          </span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
        >
          Connect with our team of strategists, designers, and technologists to explore how we can 
          transform your vision into a powerful digital reality that drives measurable business growth.
        </motion.p>
      </div>
    </Section>
  )
}

export default ContactHero