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
    <Section className="py-20 md:py-32 relative overflow-hidden bg-white">
      {/* Decorative Background Text */}
      <div className="absolute top-20 right-10 opacity-[0.03] pointer-events-none select-none uppercase font-black text-[12vw] whitespace-nowrap leading-none tracking-tighter">
        The Creators
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-start mb-16 md:mb-24">
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-black uppercase tracking-[0.2em] mb-6 md:mb-8"
            >
              Our Leadership
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-8xl font-bold text-gray-900 leading-[0.9] tracking-tight"
            >
              Meet the <br />
              <span className="text-blue-600 italic">Visionaries.</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:pt-20"
          >
            <p className="text-lg md:text-2xl text-gray-500 max-w-xl leading-relaxed">
              A small, focused team obsessed with building exceptional digital products. We combine deep technical expertise with a product-first mindset.
            </p>
          </motion.div>
        </div>

        {/* Asymmetrical Creative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
          {/* Featured Member - Large Card */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 bg-white rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-gray-100 shadow-2xl shadow-gray-100/50 group"
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
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent md:bg-none"></div>
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="text-xs font-black text-blue-600 uppercase tracking-[0.2em] mb-3 md:mb-4">Lead Visionary</div>
                <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">{team[0].name}</h3>
                <p className="text-gray-500 text-base md:text-lg font-medium mb-4 md:mb-6">{team[0].role}</p>
                <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-6 md:mb-8">{team[0].bio}</p>
                <div className="flex flex-wrap gap-2 mb-6 md:mb-8">
                  {team[0].expertise.map((skill) => (
                    <span key={skill} className="px-3 md:px-4 py-1.5 bg-gray-50 text-gray-900 text-[10px] md:text-xs font-bold rounded-full border border-gray-100">
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 md:w-12 md:h-12 bg-white border border-gray-100 shadow-sm hover:bg-blue-600 hover:border-blue-600 rounded-xl md:rounded-2xl flex items-center justify-center transition-all duration-300 group/icon">
                    <Linkedin size={18} className="text-gray-400 group-hover/icon:text-white" />
                  </a>
                  <a href="#" className="w-10 h-10 md:w-12 md:h-12 bg-white border border-gray-100 shadow-sm hover:bg-blue-600 hover:border-blue-600 rounded-xl md:rounded-2xl flex items-center justify-center transition-all duration-300 group/icon">
                    <Twitter size={18} className="text-gray-400 group-hover/icon:text-white" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stacked Members - Right Column */}
          <div className="lg:col-span-5 flex flex-col gap-6 md:gap-8">
            {team.slice(1).map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.15 }}
                className="bg-white rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-8 shadow-xl shadow-gray-100/50 border border-gray-100 hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-500 flex flex-col sm:flex-row gap-6 md:gap-8 items-center text-center sm:text-left group"
              >
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-3xl overflow-hidden flex-shrink-0 border-4 border-gray-50">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 text-xs md:text-sm font-bold uppercase tracking-wider mb-3 md:mb-4">{member.role}</p>
                  <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-4 md:mb-6 line-clamp-3 md:line-clamp-2">{member.bio}</p>
                  <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                    {member.expertise.map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-gray-50 text-gray-500 text-[10px] md:text-xs font-bold rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}

export default LeadershipTeam
