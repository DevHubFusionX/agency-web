import { motion } from 'framer-motion'
import Button from './ui/Button'
import Section from './ui/Section'

const CoreCapabilities = () => {
  return (
    <Section background="gray" className="py-20">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
        >
          Specialized App Development Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-gray-600 max-w-3xl mx-auto"
        >
          From React web applications to React Native mobile apps, we deliver end-to-end development 
          services with modern technologies and best practices.
        </motion.p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {[
          {
            title: 'Web Application Development',
            description: 'Modern, responsive web applications built with React, Next.js, and TypeScript. Optimized for performance, SEO, and user experience.',
            capabilities: ['React & Next.js', 'TypeScript', 'Responsive Design', 'SEO Optimization'],
            accent: 'blue'
          },
          {
            title: 'Mobile App Development',
            description: 'Cross-platform mobile applications using React Native and Flutter. Native performance with shared codebase efficiency.',
            capabilities: ['React Native', 'Flutter', 'iOS & Android', 'App Store Deployment'],
            accent: 'purple'
          },
          {
            title: 'Backend & Cloud Services',
            description: 'Scalable APIs and cloud infrastructure using Node.js, Python, and modern cloud platforms. Secure, fast, and reliable.',
            capabilities: ['Node.js & Python', 'REST & GraphQL APIs', 'AWS & Azure', 'Database Design'],
            accent: 'green'
          }
        ].map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
          >
            <div className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center ${
              service.accent === 'blue' ? 'bg-blue-100 group-hover:bg-blue-200' :
              service.accent === 'purple' ? 'bg-purple-100 group-hover:bg-purple-200' :
              'bg-green-100 group-hover:bg-green-200'
            } transition-colors duration-300`}>
              <div className={`w-8 h-8 rounded-lg ${
                service.accent === 'blue' ? 'bg-blue-600' :
                service.accent === 'purple' ? 'bg-purple-600' :
                'bg-green-600'
              }`}></div>
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
              {service.title}
            </h3>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              {service.description}
            </p>
            
            <div className="space-y-2 mb-6">
              {service.capabilities.map((capability, i) => (
                <div key={i} className="flex items-center text-sm text-gray-700">
                  <div className={`w-1.5 h-1.5 rounded-full mr-3 ${
                    service.accent === 'blue' ? 'bg-blue-600' :
                    service.accent === 'purple' ? 'bg-purple-600' :
                    'bg-green-600'
                  }`}></div>
                  {capability}
                </div>
              ))}
            </div>
            
            <Button variant="outline" size="sm" className="w-full group-hover:border-gray-300">
              View Examples
            </Button>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

export default CoreCapabilities