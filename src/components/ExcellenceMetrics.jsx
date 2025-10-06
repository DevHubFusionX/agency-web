import { motion } from 'framer-motion'
import { Users, Award, Star } from 'lucide-react'
import Section from './ui/Section'

const ExcellenceMetrics = () => {
  return (
    <Section className="py-20">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
        >
          Proven Track Record in App Development
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-gray-600 max-w-3xl mx-auto"
        >
          Our expertise in React, React Native, and modern development practices delivers high-performance applications that users love and businesses depend on.
        </motion.p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            metric: "200+",
            label: "Apps Delivered",
            description: "Web and mobile applications built with React and React Native",
            icon: Users
          },
          {
            metric: "5M+",
            label: "App Downloads",
            description: "Combined downloads across all mobile apps we've developed",
            icon: Award
          },
          {
            metric: "4.8★",
            label: "Average App Rating",
            description: "Consistently high ratings across App Store and Google Play",
            icon: Star
          }
        ].map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mr-4">
                <item.icon size={24} className="text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900">{item.metric}</div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.label}</h3>
            <p className="text-gray-600 leading-relaxed">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

export default ExcellenceMetrics