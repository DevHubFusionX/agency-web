import { motion } from 'framer-motion'
import { TrendingUp, Users, Clock, Award } from 'lucide-react'
import Section from '../ui/Section'

const ImpactMetrics = () => {
  return (
    <Section background="gray" className="py-20">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
        >
          App Performance Metrics
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-gray-600 max-w-3xl mx-auto"
        >
          Real performance data from the web and mobile applications we've built, 
          showing the impact of our React and React Native expertise.
        </motion.p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            icon: TrendingUp,
            metric: '5M+',
            label: 'Total App Downloads',
            description: 'Across all mobile apps we\'ve built'
          },
          {
            icon: Users,
            metric: '4.7⭐',
            label: 'Average App Store Rating',
            description: 'Across iOS and Google Play stores'
          },
          {
            icon: Clock,
            metric: '<2s',
            label: 'Average Load Time',
            description: 'For web apps we\'ve optimized'
          },
          {
            icon: Award,
            metric: '99.9%',
            label: 'App Uptime',
            description: 'Across all production applications'
          }
        ].map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 text-center"
          >
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <item.icon size={32} className="text-blue-600" />
            </div>
            
            <div className="text-4xl font-bold text-gray-900 mb-2">{item.metric}</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.label}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

export default ImpactMetrics