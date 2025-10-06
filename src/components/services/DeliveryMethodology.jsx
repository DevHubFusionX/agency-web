import { motion } from 'framer-motion'
import { Search, Target, Palette, Code, Rocket, HeadphonesIcon } from 'lucide-react'
import Section from '../ui/Section'

const DeliveryMethodology = () => {
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
          Our App Development Process
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl text-gray-600 max-w-3xl mx-auto"
        >
          From initial concept to app store deployment, we follow a proven 6-step process 
          that ensures your web or mobile app is delivered on time and within budget.
        </motion.p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            icon: Search,
            step: '01',
            title: 'Project Planning',
            description: 'We analyze your app requirements, target users, and technical needs to create a detailed development plan.',
            deliverables: ['App Requirements Document', 'Technology Stack Selection', 'Project Timeline']
          },
          {
            icon: Target,
            step: '02',
            title: 'UI/UX Design',
            description: 'Create user-friendly interfaces and smooth user experiences with wireframes, mockups, and interactive prototypes.',
            deliverables: ['Wireframes & Mockups', 'Interactive Prototypes', 'Design System']
          },
          {
            icon: Palette,
            step: '03',
            title: 'Frontend Development',
            description: 'Build responsive web apps with React or cross-platform mobile apps with React Native, following best practices.',
            deliverables: ['React/React Native Code', 'Responsive Components', 'State Management']
          },
          {
            icon: Code,
            step: '04',
            title: 'Backend Development',
            description: 'Develop secure APIs and database systems using Node.js or Python with proper authentication and data validation.',
            deliverables: ['REST/GraphQL APIs', 'Database Schema', 'Authentication System']
          },
          {
            icon: Rocket,
            step: '05',
            title: 'Testing & QA',
            description: 'Thorough testing across devices and browsers, including automated tests, performance optimization, and bug fixes.',
            deliverables: ['Automated Test Suite', 'Performance Reports', 'Bug Fix Documentation']
          },
          {
            icon: HeadphonesIcon,
            step: '06',
            title: 'Launch & Support',
            description: 'Deploy to web servers or app stores, provide training, and offer ongoing maintenance and feature updates.',
            deliverables: ['Live App Deployment', 'User Training', 'Maintenance Plan']
          }
        ].map((phase, index) => (
          <motion.div
            key={phase.step}
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.15 }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center text-lg font-bold mr-4">
                {phase.step}
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <phase.icon size={24} className="text-blue-600" />
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              {phase.title}
            </h3>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              {phase.description}
            </p>
            
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Deliverables</h4>
              <div className="space-y-2">
                {phase.deliverables.map((deliverable, i) => (
                  <div key={i} className="flex items-center text-sm text-gray-700">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                    {deliverable}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

export default DeliveryMethodology