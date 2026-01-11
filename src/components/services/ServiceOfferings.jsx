import { motion } from 'framer-motion'
import { Lightbulb, Rocket, TrendingUp, Users, ArrowRight, Clock, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from '../ui/Button'
import Section from '../ui/Section'

const productizedServices = [
  {
    icon: Lightbulb,
    title: 'Discovery Sprint',
    duration: '2 Weeks',
    description: 'Validate your idea before investing in development. We help you define scope, create wireframes, and build an investor-ready brief.',
    deliverables: ['User Research', 'Wireframes', 'MVP Scope', 'Investor Brief'],
    highlight: false
  },
  {
    icon: Rocket,
    title: 'MVP Express',
    duration: '8-12 Weeks',
    description: 'A functional web or mobile product with analytics, testing, and deployment—built for users and investors.',
    deliverables: ['Full-stack Build', 'Analytics', 'Testing', 'Deployment'],
    highlight: true
  },
  {
    icon: TrendingUp,
    title: 'Launch & Grow',
    duration: '30-90 Days',
    description: 'Post-launch iteration powered by real user data. We help you prioritize features, run experiments, and optimize.',
    deliverables: ['CRO Experiments', 'Analytics', 'Feature Tuning', 'Roadmap'],
    highlight: false
  },
  {
    icon: Users,
    title: 'White-label Development',
    duration: 'Ongoing',
    description: 'Dedicated development teams for agencies. We work under NDA as your technical engine with guaranteed SLAs.',
    deliverables: ['Dedicated Team', 'NDA Protected', 'Milestone-based', 'High SLA'],
    highlight: false
  }
]

const ServiceOfferings = () => {
  return (
    <Section className="py-24 md:py-32 relative overflow-hidden bg-gray-50">
      {/* Background Decorative Text */}
      <div className="absolute top-20 right-10 opacity-[0.03] pointer-events-none select-none uppercase font-black text-[10vw] whitespace-nowrap leading-none tracking-tighter text-right">
        Productized <br /> Services
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-black uppercase tracking-[0.2em] mb-8"
            >
              What We Deliver
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold text-gray-900 leading-[0.9] tracking-tight"
            >
              Clear Outcomes, <br />
              <span className="text-blue-600 italic">Fixed Scope.</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:pt-20"
          >
            <p className="text-xl md:text-2xl text-gray-500 max-w-xl leading-relaxed mb-8">
              No hourly billing surprises. Our productized services have fixed timelines, clear deliverables, and milestone-based billing.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-200/50 px-8 py-4 text-lg group">
                Book Discovery Sprint
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {productizedServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className={`relative overflow-hidden rounded-[2.5rem] p-10 border transition-all duration-500 group ${service.highlight
                  ? 'bg-blue-600 border-blue-600 text-white shadow-2xl shadow-blue-200'
                  : 'bg-white border-gray-100 shadow-xl shadow-gray-100/50 hover:shadow-2xl hover:border-blue-100'
                }`}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-8">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${service.highlight ? 'bg-white/20' : 'bg-gray-50 group-hover:bg-blue-50'
                  }`}>
                  <service.icon size={28} className={service.highlight ? 'text-white' : 'text-gray-900 group-hover:text-blue-600'} />
                </div>
                <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${service.highlight ? 'bg-white/20 text-white' : 'bg-blue-50 text-blue-600'
                  }`}>
                  <Clock size={14} />
                  {service.duration}
                </div>
              </div>

              {/* Content */}
              <h3 className={`text-3xl font-bold mb-4 tracking-tight ${service.highlight ? 'text-white' : 'text-gray-900'}`}>
                {service.title}
              </h3>
              <p className={`text-lg mb-8 leading-relaxed ${service.highlight ? 'text-blue-50' : 'text-gray-500'}`}>
                {service.description}
              </p>

              {/* Deliverables */}
              <div className="space-y-3">
                {service.deliverables.map((item, i) => (
                  <div key={i} className={`flex items-center gap-3 ${service.highlight ? 'text-blue-50' : 'text-gray-600'}`}>
                    <CheckCircle size={16} className={service.highlight ? 'text-white' : 'text-blue-600'} />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>

              {/* Hover Arrow */}
              <div className={`absolute bottom-10 right-10 opacity-0 group-hover:opacity-100 transition-opacity ${service.highlight ? 'text-white' : 'text-blue-600'}`}>
                <ArrowRight size={24} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default ServiceOfferings