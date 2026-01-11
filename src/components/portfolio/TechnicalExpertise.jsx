import { motion } from 'framer-motion'
import { Brain, Target, Globe, Handshake, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Section from '../ui/Section'
import Button from '../ui/Button'

const differentiators = [
  {
    icon: Brain,
    title: 'Product-First Mindset',
    description: "We're PM-led, not dev-led. Every decision is tied to business outcomes, not just technical elegance.",
    highlight: 'PM-led approach'
  },
  {
    icon: Target,
    title: 'Fixed Outcomes',
    description: "Clear scope, milestones, and SLAs. No hourly billing surprises. You know exactly what you're getting.",
    highlight: 'Milestone guarantees'
  },
  {
    icon: Globe,
    title: 'Local + Global',
    description: 'African-market UX expertise with global engineering standards. We understand your users AND the tech.',
    highlight: 'Africa-ready UX'
  },
  {
    icon: Handshake,
    title: 'Beyond Launch',
    description: "We stay after deployment. Growth retainers, iteration, and optimization are part of our DNA.",
    highlight: 'Long-term partner'
  }
]

const TechnicalExpertise = () => {
  return (
    <Section background="none" className="py-24 md:py-32 relative overflow-hidden bg-blue-600">
      {/* Background Decorative Text */}
      <div className="absolute top-20 left-10 opacity-[0.08] pointer-events-none select-none uppercase font-black text-[10vw] md:text-[12vw] whitespace-nowrap leading-none tracking-tighter text-white">
        Why Nemvol
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-black uppercase tracking-[0.2em] mb-8 border border-white/20"
            >
              Our Advantage
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold text-white leading-[0.9] tracking-tight"
            >
              The Nemvol <br />
              <span className="text-white/90 italic">Difference.</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:pt-20"
          >
            <p className="text-lg md:text-2xl text-blue-50 max-w-xl leading-relaxed mb-8 font-medium">
              More structured than freelancers. Faster and more founder-friendly than big agencies. The sweet spot for MVPs.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-white hover:bg-blue-50 !text-blue-600 px-8 py-4 rounded-full font-bold shadow-xl shadow-blue-900/20 group">
                Let's Talk
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Differentiators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {differentiators.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-white/5 backdrop-blur-sm rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="flex flex-col sm:flex-row items-start gap-4 md:gap-6">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-white/10 rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors">
                  <item.icon size={24} className="text-white md:w-[28px] md:h-[28px]" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-2">
                    <h3 className="text-lg md:text-xl font-bold text-white">{item.title}</h3>
                    <span className="px-2 py-0.5 bg-white/10 rounded-full text-[10px] md:text-xs font-bold text-blue-100 uppercase tracking-wider">
                      {item.highlight}
                    </span>
                  </div>
                  <p className="text-sm md:text-base text-blue-50 leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default TechnicalExpertise