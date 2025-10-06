import { motion } from 'framer-motion'
import { ArrowRight, Star, Smartphone, Code, Zap } from 'lucide-react'
import Button from './ui/Button'
import Section from './ui/Section'
import PremiumBackground from './ui/PremiumBackground'

const HeroSection = () => {
  return (
    <Section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/90 via-white/95 to-blue-50/90"></div>
      <PremiumBackground />
      
      <div className="relative z-10 text-center max-w-6xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-8"
        >
          <Smartphone size={16} className="mr-2" />
          React & React Native Specialists
        </motion.div>
        
        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight"
        >
          Transform Ideas Into
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
            Powerful Apps
          </span>
        </motion.h1>
        
        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed"
        >
          We build high-performance web and mobile applications using React, React Native, 
          and Node.js. From MVP to enterprise scale.
        </motion.p>
        
        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <Button size="lg" className="group shadow-lg px-8 py-4">
            Start Your Project
            <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" size="lg" className="border-2 px-8 py-4">
            View Portfolio
          </Button>
        </motion.div>
        
        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-600 mb-16"
        >
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 bg-blue-500 rounded-full border-2 border-white flex items-center justify-center">
                <Code size={14} className="text-white" />
              </div>
              <div className="w-8 h-8 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                <Smartphone size={14} className="text-white" />
              </div>
              <div className="w-8 h-8 bg-purple-500 rounded-full border-2 border-white flex items-center justify-center">
                <Zap size={14} className="text-white" />
              </div>
            </div>
            <span className="font-medium">150+ Apps Delivered</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="fill-current" />
              ))}
            </div>
            <span className="font-medium">4.9/5 Client Rating</span>
          </div>
        </motion.div>
        
        {/* Technology Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100"
        >
          <p className="text-gray-500 text-sm mb-6 uppercase tracking-wider font-medium">Powered By Modern Technology</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'React', desc: 'Web Apps', color: 'text-blue-600' },
              { name: 'React Native', desc: 'Mobile Apps', color: 'text-green-600' },
              { name: 'Node.js', desc: 'Backend APIs', color: 'text-purple-600' },
              { name: 'TypeScript', desc: 'Type Safety', color: 'text-orange-600' }
            ].map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                className="text-center group hover:scale-105 transition-transform"
              >
                <div className={`text-2xl font-bold ${tech.color} mb-1`}>{tech.name}</div>
                <div className="text-sm text-gray-500">{tech.desc}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  )
}

export default HeroSection