import { motion } from 'framer-motion'
import { ArrowUpRight, Code, Layout, Smartphone, Database } from 'lucide-react'
import Section from './ui/Section'

const BentoCard = ({ title, description, icon: Icon, capabilities, className, delay, highlight }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.25, 0.4, 0.25, 1]
      }}
      whileHover={{ y: -8, scale: 1.02 }}
      className={`relative overflow-hidden rounded-[2.5rem] p-6 md:p-10 border transition-all duration-500 group flex flex-col justify-between ${highlight
        ? 'bg-blue-600 border-blue-600 text-white shadow-2xl shadow-blue-200'
        : 'bg-white border-gray-100 shadow-xl shadow-gray-100/50 hover:shadow-2xl'
        } ${className}`}
    >
      <div className="z-10 relative">
        <div className="flex items-center justify-between mb-6 md:mb-8">
          <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center transition-colors duration-300 ${highlight ? 'bg-white/20' : 'bg-gray-50 group-hover:bg-blue-50'
            }`}>
            <Icon size={24} className={highlight ? 'text-white' : 'text-gray-900 group-hover:text-blue-600 md:w-7 md:h-7'} />
          </div>
          <ArrowUpRight className={highlight ? 'text-white/40 group-hover:text-white' : 'text-gray-300 group-hover:text-blue-600'} />
        </div>

        <h3 className={`text-2xl md:text-3xl font-bold mb-4 tracking-tight ${highlight ? 'text-white' : 'text-gray-900'}`}>{title}</h3>
        <p className={`text-base md:text-lg mb-6 md:mb-8 leading-relaxed ${highlight ? 'text-blue-50' : 'text-gray-500'}`}>{description}</p>
      </div>

      <div className="flex flex-wrap gap-2 pt-6 border-t border-white/10 group-hover:border-white/20 transition-colors relative z-10">
        {capabilities.map((cap, i) => (
          <span
            key={i}
            className={`px-4 py-1.5 text-xs font-black uppercase tracking-widest rounded-full border transition-all duration-300 ${highlight
              ? 'bg-white/10 border-white/20 text-white hover:bg-white hover:text-blue-600'
              : 'bg-gray-50 border-gray-100 text-gray-400 group-hover:border-blue-600 group-hover:bg-blue-600 group-hover:text-white'
              }`}
          >
            {cap}
          </span>
        ))}
      </div>

      {/* Background Decorative Element */}
      {!highlight && (
        <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50/50 rounded-bl-[5rem] -mr-10 -mt-10 transition-transform group-hover:scale-110 pointer-events-none" />
      )}
    </motion.div>
  )
}

const CoreCapabilities = () => {
  return (
    <Section className="py-24 md:py-32 relative overflow-hidden bg-white">
      {/* Background Decorative Text */}
      <div className="absolute top-20 right-10 opacity-[0.03] pointer-events-none select-none uppercase font-black text-[10vw] whitespace-nowrap leading-none tracking-tighter text-right">
        Nemvol <br /> Expertise
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24 text-left">
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-black uppercase tracking-[0.2em] mb-8"
            >
              Our Capability Engine
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 40, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.4, 0.25, 1] }}
              className="text-6xl md:text-8xl font-bold text-gray-900 leading-[0.9] tracking-tight"
            >
              Built for <br />
              <span className="text-blue-600 italic">Global Scale.</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
            className="lg:pt-20"
          >
            <p className="text-xl md:text-2xl text-gray-500 max-w-xl leading-relaxed font-medium">
              We provide the technical muscle and product strategy required to dominate markets. From high-frequency trading platforms to AI-driven health ecosystems.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Large (2 cols) - Highlighted */}
          <BentoCard
            title="Build Your MVP"
            description="We build your functional web or mobile product in 8-12 weeks, ready for users and investors."
            icon={Code}
            capabilities={['8-12 Weeks', 'Full-stack', 'Cloud-native', 'Scalable']}
            className="md:col-span-2 min-h-[400px]"
            delay={0}
            highlight={true}
          />

          {/* Card 2: Small (1 col) */}
          <BentoCard
            title="Validate Your Idea"
            description="We help you define your scope and create an investor-ready brief in just 2 weeks."
            icon={Database}
            capabilities={['2-Week Sprint', 'User Research', 'Wireframing', 'Roadmapping']}
            className="md:col-span-1 min-h-[400px]"
            delay={0.1}
          />

          {/* Card 3: Small (1 col) */}
          <BentoCard
            title="Scale Your Impact"
            description="We stay with you to iterate based on real data and prioritize the features your users actually want."
            icon={Smartphone}
            capabilities={['30-90 Days', 'Analytics', 'CRO', 'Feature Tuning']}
            className="md:col-span-1 min-h-[400px]"
            delay={0.2}
          />

          {/* Card 4: Large (2 cols) */}
          <BentoCard
            title="White-label Support"
            description="Dedicated engineering teams for agencies. We act as your technical engine with guaranteed delivery."
            icon={Layout}
            capabilities={['Dedicated Team', 'NDA Protected', 'Milestone-based', 'High SLA']}
            className="md:col-span-2 min-h-[400px]"
            delay={0.3}
          />
        </div>
      </div>
    </Section>
  )
}

export default CoreCapabilities