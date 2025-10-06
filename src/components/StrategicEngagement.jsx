import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from './ui/Button'
import Section from './ui/Section'

const StrategicEngagement = () => {
  return (
    <Section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800"></div>
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative z-10 text-center text-white">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Ready to Build Your App?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl mb-8 max-w-3xl mx-auto opacity-90"
        >
          Let's discuss your web or mobile app project. We'll help you choose the right technology stack 
          and build a solution that scales with your business.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/contact">
              <Button size="lg" className="btn-secondary shadow-primary">
                Get Free App Consultation
                <ArrowRight size={20} className="ml-2" />
              </Button>
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/portfolio">
              <Button variant="outline" size="lg" className="border-white text-white  hover:text-primary transition-smooth">
                View App Portfolio
              </Button>
            </Link>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center justify-center gap-8 text-sm opacity-80"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <span>Free project consultation</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <span>Technology recommendations</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <span>Transparent pricing</span>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}

export default StrategicEngagement