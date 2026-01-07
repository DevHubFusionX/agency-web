import { motion } from 'framer-motion'
import { Linkedin, Twitter } from 'lucide-react'
import Section from '../ui/Section'
import teamAlex from '../../assets/team-alex.png'
import teamMaria from '../../assets/team-maria.png'
import teamSam from '../../assets/team-sam.png'

const team = [
  {
    name: 'Alex Chen',
    role: 'Founder & Lead Engineer',
    bio: 'Full-stack engineer with 8+ years building digital products. Obsessed with clean architecture and performance.',
    expertise: ['React', 'Next.js', 'System Design'],
    image: teamAlex,
    featured: true
  },
  {
    name: 'Maria Rodriguez',
    role: 'Mobile Lead',
    bio: 'Mobile specialist who shipped 50+ apps. Believers in native-quality cross-platform experiences.',
    expertise: ['React Native', 'iOS', 'Android'],
    image: teamMaria,
    featured: false
  },
  {
    name: 'Sam Kim',
    role: 'Head of Backend',
    bio: 'Backend architect with a passion for scalable, resilient APIs. Previously at enterprise-scale startups.',
    expertise: ['Node.js', 'Cloud', 'APIs'],
    image: teamSam,
    featured: false
  }
]

const LeadershipTeam = () => {
  return (
    <Section className="py-24">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight"
        >
          Meet the Creators
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl text-gray-500 max-w-2xl mx-auto"
        >
          A small, focused team obsessed with building exceptional digital products.
        </motion.p>
      </div>

      {/* Asymmetrical Creative Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Featured Member - Large Card */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-7 bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-3xl overflow-hidden group"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 h-full">
            <div className="relative overflow-hidden aspect-square md:aspect-auto">
              <motion.img
                src={team[0].image}
                alt={team[0].name}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <div className="p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{team[0].name}</h3>
              <p className="text-blue-600 font-medium mb-4">{team[0].role}</p>
              <p className="text-gray-600 leading-relaxed mb-6">{team[0].bio}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {team[0].expertise.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-white text-gray-700 text-xs rounded-full border border-gray-100">
                    {skill}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <a href="#" className="w-9 h-9 bg-white hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors group/icon">
                  <Linkedin size={16} className="text-gray-600 group-hover/icon:text-white" />
                </a>
                <a href="#" className="w-9 h-9 bg-white hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors group/icon">
                  <Twitter size={16} className="text-gray-600 group-hover/icon:text-white" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stacked Members - Right Column */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          {team.slice(1).map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.15 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 flex gap-6 items-center group"
            >
              <motion.div
                className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0"
                whileHover={{ scale: 1.05 }}
              >
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
              </motion.div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-bold text-gray-900 mb-0.5">{member.name}</h3>
                <p className="text-blue-600 text-sm font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">{member.bio}</p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {member.expertise.map((skill) => (
                    <span key={skill} className="px-2 py-0.5 bg-gray-50 text-gray-600 text-xs rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default LeadershipTeam