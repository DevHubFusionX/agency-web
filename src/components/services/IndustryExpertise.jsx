import { motion } from 'framer-motion'
import { Rocket, Building2, Users, Briefcase, Lightbulb, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Section from '../ui/Section'

const clientSegments = [
  {
    id: 'founders',
    title: 'Early-Stage Founders',
    icon: Lightbulb,
    description: 'MVP hunters looking to validate ideas, raise funding, and get to market fast.',
    needs: ['Idea Validation', 'MVP Launch', 'Investor Pitch'],
    span: 'md:col-span-2 md:row-span-2'
  },
  {
    id: 'vc-backed',
    title: 'VC-Backed Startups',
    icon: Rocket,
    description: 'Fast iteration and investor-grade builds.',
    needs: ['Scale Fast', 'Quality Code'],
    span: 'md:col-span-1'
  },
  {
    id: 'agencies',
    title: 'Digital Agencies',
    icon: Users,
    description: 'White-label partnerships with guaranteed SLAs.',
    needs: ['NDA Teams', 'Fixed SLAs'],
    span: 'md:col-span-1'
  },
  {
    id: 'smes',
    title: 'Growth-Focused SMEs',
    icon: Briefcase,
    description: 'Digital transformation and automation for businesses ready to scale operations.',
    needs: ['Automation', 'Web Apps', 'Mobile'],
    span: 'md:col-span-1'
  },
  {
    id: 'corporate',
    title: 'Corporate Innovation',
    icon: Building2,
    description: 'PoCs and pilots for enterprise teams exploring new ideas.',
    needs: ['PoC', 'Pilots', 'Innovation'],
    span: 'md:col-span-1'
  }
]

const IndustryExpertise = () => {
  return (
    <Section className="py-24 md:py-32 relative overflow-hidden bg-gray-50">
      {/* Background Decorative Text */}
      <div className="absolute top-20 right-10 opacity-[0.03] pointer-events-none select-none uppercase font-black text-[10vw] whitespace-nowrap leading-none tracking-tighter text-right">
        Our Clients
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-black uppercase tracking-[0.2em] mb-8"
            >
              Who We Work With
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold text-gray-900 leading-[0.9] tracking-tight"
            >
              Built For <br />
              <span className="text-blue-600 italic">Ambitious Teams.</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:pt-20"
          >
            <p className="text-xl md:text-2xl text-gray-500 max-w-xl leading-relaxed mb-6">
              More structured and reliable than freelancers. Faster, leaner, and more founder-friendly than big agencies.
            </p>
            <p className="text-lg text-gray-400 italic">
              "The sweet spot between boutique agility and enterprise reliability."
            </p>
          </motion.div>
        </div>

        {/* Client Segments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {clientSegments.map((segment, index) => (
            <motion.div
              key={segment.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className={`bg-white rounded-[2rem] p-8 border border-gray-100 hover:border-blue-100 hover:shadow-xl transition-all duration-300 group cursor-pointer ${segment.span}`}
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-gray-50 group-hover:bg-blue-50 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300">
                <segment.icon size={28} className="text-gray-400 group-hover:text-blue-600 transition-colors duration-300" />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {segment.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-base leading-relaxed mb-6">
                {segment.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {segment.needs.map((need) => (
                  <span
                    key={need}
                    className="px-3 py-1.5 bg-gray-50 group-hover:bg-blue-50 text-gray-500 group-hover:text-blue-600 text-xs font-medium rounded-full transition-colors duration-300"
                  >
                    {need}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-blue-600 font-bold text-lg hover:gap-4 transition-all duration-300 group"
          >
            See if we're a fit
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </Section>
  )
}

export default IndustryExpertise