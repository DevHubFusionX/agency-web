import { motion } from 'framer-motion'
import { Building2, Heart, Building, ShoppingCart } from 'lucide-react'
import Section from '../ui/Section'

const industries = [
  {
    id: 'ecommerce',
    industry: 'E-Commerce',
    icon: ShoppingCart,
    description: 'Scalable storefronts with seamless checkout experiences and mobile commerce.',
    expertise: ['Payments', 'Inventory', 'Mobile'],
    span: 'md:col-span-2 md:row-span-2'
  },
  {
    id: 'fintech',
    industry: 'FinTech',
    icon: Building2,
    description: 'Secure platforms for payments.',
    expertise: ['PCI', 'Real-time'],
    span: 'md:col-span-1'
  },
  {
    id: 'healthcare',
    industry: 'Healthcare',
    icon: Heart,
    description: 'Patient-centered apps.',
    expertise: ['HIPAA', 'Telemedicine'],
    span: 'md:col-span-1'
  },
  {
    id: 'saas',
    industry: 'SaaS',
    icon: Building,
    description: 'Multi-tenant platforms designed for retention and growth at scale.',
    expertise: ['Subscriptions', 'Analytics', 'APIs'],
    span: 'md:col-span-2'
  }
]

const IndustryExpertise = () => {
  return (
    <Section className="py-24 relative overflow-hidden">
      {/* Cube/Grid Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.04]"
          
        ></div>
      </div>

      <div className="relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight"
          >
            Industries We Serve
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-500 max-w-lg mx-auto"
          >
            Deep domain expertise across high-growth sectors.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {industries.map((sector, index) => (
            <motion.div
              key={sector.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-white rounded-3xl p-8 border border-gray-100 ${sector.span}`}
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-5">
                <sector.icon size={24} className="text-blue-600" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {sector.industry}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed mb-5">
                {sector.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {sector.expertise.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-50 text-gray-600 text-xs font-medium rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default IndustryExpertise