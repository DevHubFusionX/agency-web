import { motion } from 'framer-motion'
import Section from '../ui/Section'

const TechnicalExpertise = () => {
  return (
    <Section className="py-20">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
        >
          Our Technology Stack
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-gray-600 max-w-3xl mx-auto"
        >
          The modern technologies and frameworks we use to build high-performance 
          web applications and mobile apps that scale with your business.
        </motion.p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {[
          {
            category: 'Frontend Development',
            technologies: [
              { name: 'React & Next.js', proficiency: 95 },
              { name: 'TypeScript', proficiency: 92 },
              { name: 'Tailwind CSS', proficiency: 90 },
              { name: 'React Native', proficiency: 88 }
            ]
          },
          {
            category: 'Backend & APIs',
            technologies: [
              { name: 'Node.js & Express', proficiency: 90 },
              { name: 'Python & FastAPI', proficiency: 85 },
              { name: 'PostgreSQL & MongoDB', proficiency: 88 },
              { name: 'REST & GraphQL', proficiency: 92 }
            ]
          },
          {
            category: 'Cloud & DevOps',
            technologies: [
              { name: 'AWS & Vercel', proficiency: 88 },
              { name: 'Docker & CI/CD', proficiency: 85 },
              { name: 'Firebase & Supabase', proficiency: 90 },
              { name: 'App Store Deployment', proficiency: 92 }
            ]
          }
        ].map((stack, index) => (
          <motion.div
            key={stack.category}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-6">{stack.category}</h3>
            
            <div className="space-y-4">
              {stack.technologies.map((tech) => (
                <div key={tech.name}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700 font-medium">{tech.name}</span>
                    <span className="text-sm text-gray-500">{tech.proficiency}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${tech.proficiency}%` }}
                      transition={{ duration: 1.5, delay: index * 0.2 + 0.5 }}
                      className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

export default TechnicalExpertise