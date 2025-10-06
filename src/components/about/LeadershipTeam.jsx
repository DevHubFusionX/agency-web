import { motion } from 'framer-motion'
import { Linkedin, Twitter } from 'lucide-react'
import Section from '../ui/Section'

const LeadershipTeam = () => {
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
          Meet Our Development Team
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl text-gray-600 max-w-3xl mx-auto"
        >
          Our experienced developers and designers who bring your web and mobile app ideas to life 
          with modern technologies and best practices.
        </motion.p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            name: 'Alex Chen',
            role: 'Lead React Developer',
            bio: 'Full-stack developer with 8+ years building React applications. Expert in Next.js, TypeScript, and modern web performance optimization.',
            expertise: ['React & Next.js', 'TypeScript', 'Web Performance'],
            image: 'AC'
          },
          {
            name: 'Maria Rodriguez',
            role: 'React Native Specialist',
            bio: 'Mobile app developer with 6+ years in React Native and Flutter. Built 50+ mobile apps with millions of downloads across iOS and Android.',
            expertise: ['React Native', 'Flutter', 'Mobile App Store'],
            image: 'MR'
          },
          {
            name: 'Sam Kim',
            role: 'Backend Developer',
            bio: 'Backend specialist with 7+ years in Node.js, Python, and cloud architecture. Expert in building scalable APIs and database systems.',
            expertise: ['Node.js & Python', 'API Development', 'Cloud Architecture'],
            image: 'SK'
          }
        ].map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.15 }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
          >
            <div className="text-center mb-6">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                {member.image}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
              <p className="text-blue-600 font-medium mb-4">{member.role}</p>
            </div>
            
            <p className="text-gray-600 leading-relaxed mb-6 text-sm">
              {member.bio}
            </p>
            
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-900 mb-3">Core Expertise</h4>
              <div className="flex flex-wrap gap-2">
                {member.expertise.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex justify-center gap-3">
              <a
                href="#"
                className="w-8 h-8 bg-gray-100 hover:bg-blue-100 rounded-lg flex items-center justify-center transition-colors"
              >
                <Linkedin size={16} className="text-gray-600 hover:text-blue-600" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-gray-100 hover:bg-blue-100 rounded-lg flex items-center justify-center transition-colors"
              >
                <Twitter size={16} className="text-gray-600 hover:text-blue-600" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

export default LeadershipTeam