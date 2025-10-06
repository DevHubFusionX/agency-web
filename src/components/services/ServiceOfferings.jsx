import { motion } from 'framer-motion'
import { Code, Palette, TrendingUp, Smartphone, Search, Shield } from 'lucide-react'
import Button from '../ui/Button'
import Section from '../ui/Section'

const ServiceOfferings = () => {
  return (
    <Section className="py-20">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
        >
          Our App Development Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl text-gray-600 max-w-3xl mx-auto"
        >
          We specialize in building modern web applications and mobile apps using React, React Native, 
          and Node.js with a focus on performance, scalability, and user experience.
        </motion.p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            icon: Code,
            title: 'React Web Applications',
            description: 'Modern, responsive web apps built with React, Next.js, and TypeScript. Optimized for SEO and performance.',
            capabilities: ['React & Next.js', 'TypeScript', 'Responsive Design', 'SEO Optimization'],
            pricing: 'Starting at $15,000'
          },
          {
            icon: Smartphone,
            title: 'React Native Mobile Apps',
            description: 'Cross-platform mobile apps with native performance. Single codebase for iOS and Android deployment.',
            capabilities: ['React Native', 'iOS & Android', 'App Store Deployment', 'Push Notifications'],
            pricing: 'Starting at $25,000'
          },
          {
            icon: Palette,
            title: 'Backend API Development',
            description: 'Scalable REST and GraphQL APIs built with Node.js and Python. Secure, fast, and well-documented.',
            capabilities: ['Node.js & Python', 'REST & GraphQL', 'Database Design', 'API Documentation'],
            pricing: 'Starting at $12,000'
          },
          {
            icon: TrendingUp,
            title: 'Cloud Deployment & DevOps',
            description: 'AWS and Azure deployment with CI/CD pipelines, monitoring, and automated scaling for your apps.',
            capabilities: ['AWS & Azure', 'CI/CD Pipelines', 'Monitoring', 'Auto Scaling'],
            pricing: 'Starting at $5,000'
          },
          {
            icon: Search,
            title: 'UI/UX Design',
            description: 'User-centered design for web and mobile apps. Wireframes, prototypes, and design systems.',
            capabilities: ['UI/UX Design', 'Wireframing', 'Prototyping', 'Design Systems'],
            pricing: 'Starting at $8,000'
          },
          {
            icon: Shield,
            title: 'App Maintenance & Support',
            description: 'Ongoing maintenance, updates, and technical support to keep your apps running smoothly.',
            capabilities: ['Bug Fixes', 'Feature Updates', 'Performance Monitoring', '24/7 Support'],
            pricing: 'Starting at $2,000/month'
          }
        ].map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
          >
            <div className="w-16 h-16 bg-blue-100 group-hover:bg-blue-200 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300">
              <service.icon size={32} className="text-blue-600" />
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
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                  {capability}
                </div>
              ))}
            </div>
            
            <div className="border-t border-gray-100 pt-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-blue-600">{service.pricing}</span>
              </div>
              <Button variant="outline" size="sm" className="w-full group-hover:border-blue-300">
                Request Consultation
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

export default ServiceOfferings