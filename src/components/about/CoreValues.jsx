import { motion } from 'framer-motion'
import { Target, Eye, Heart, Lightbulb } from 'lucide-react'
import Section from '../ui/Section'

const CoreValues = () => {
  return (
    <Section background="gray" className="py-20">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
        >
          Our Development Philosophy
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl text-gray-600 max-w-3xl mx-auto"
        >
          These principles guide how we approach every web application and mobile app project, 
          ensuring quality code and exceptional user experiences.
        </motion.p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            icon: Target,
            title: 'Performance First',
            description: 'We optimize every line of code for speed and efficiency. Fast loading times and smooth interactions are non-negotiable.',
            color: 'blue'
          },
          {
            icon: Lightbulb,
            title: 'Modern Tech Stack',
            description: 'We use the latest React, React Native, and Node.js features to build apps that are maintainable and future-proof.',
            color: 'purple'
          },
          {
            icon: Heart,
            title: 'User-Centered Design',
            description: 'Every interface we create is intuitive and accessible. We test with real users to ensure great experiences.',
            color: 'green'
          },
          {
            icon: Eye,
            title: 'Clean Code Standards',
            description: 'We write readable, well-documented code that follows best practices. Your app will be easy to maintain and scale.',
            color: 'orange'
          }
        ].map((value, index) => (
          <motion.div
            key={value.title}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 text-center group"
          >
            <div className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center mx-auto ${
              value.color === 'blue' ? 'bg-blue-100 group-hover:bg-blue-200' :
              value.color === 'purple' ? 'bg-purple-100 group-hover:bg-purple-200' :
              value.color === 'green' ? 'bg-green-100 group-hover:bg-green-200' :
              'bg-orange-100 group-hover:bg-orange-200'
            } transition-colors duration-300`}>
              <value.icon size={32} className={
                value.color === 'blue' ? 'text-blue-600' :
                value.color === 'purple' ? 'text-purple-600' :
                value.color === 'green' ? 'text-green-600' :
                'text-orange-600'
              } />
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              {value.title}
            </h3>
            
            <p className="text-gray-600 leading-relaxed">
              {value.description}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

export default CoreValues