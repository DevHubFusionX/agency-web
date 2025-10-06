import { motion } from 'framer-motion'
import Section from '../ui/Section'

const CompanyStory = () => {
  return (
    <Section className="py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
          >
            Our App Development Journey
          </motion.h2>
          <div className="space-y-6 text-gray-600 leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Founded in 2018 by React developers who saw the potential of modern JavaScript frameworks, 
              we started building web applications and quickly expanded into React Native mobile development 
              as businesses needed cross-platform solutions.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              What started as a small React development team has grown into a full-service app 
              development agency. We now build everything from simple landing pages to complex 
              enterprise applications, always focusing on performance, user experience, and scalability.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Today, we're recognized as React and React Native specialists who deliver apps that 
              perform exceptionally well, scale with business growth, and provide outstanding user 
              experiences across web and mobile platforms.
            </motion.p>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl p-8 shadow-lg">
            <div className="grid grid-cols-2 gap-6">
              {[
                { year: '2018', milestone: 'Agency Founded' },
                { year: '2020', milestone: 'React Native Focus' },
                { year: '2022', milestone: '100+ Apps Launched' },
                { year: '2024', milestone: '200+ Apps Delivered' }
              ].map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl font-bold text-blue-800 mb-2">{item.year}</div>
                  <div className="text-sm text-blue-700">{item.milestone}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}

export default CompanyStory