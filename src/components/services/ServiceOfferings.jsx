import { motion } from 'framer-motion'
import { Palette, Rocket, Code2, Settings, ShoppingBag, ArrowRight, CheckCircle, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from '../ui/Button'
import Section from '../ui/Section'

const productizedServices = [
  {
    icon: Palette,
    title: 'Discovery Sprint',
    targetCustomers: 'Pre-seed Founders & Startups',
    solutionOutline: "Validate your idea, define user flows, and get an investor-ready brief in just 2 weeks.",
    deliverables: ['Idea Validation', 'MVP Scope & Roadmap', 'Investor-Ready Brief'],
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800', // Collaborative meeting
    highlight: false
  },
  {
    icon: Rocket,
    title: 'MVP Express',
    targetCustomers: 'Founders & SMEs',
    solutionOutline: "Launch a fully functional, validated web or mobile product in 8–12 weeks. No feature bloat.",
    deliverables: ['Functional Web/App', 'Analytics Setup', 'Deployment & Handoff'],
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800', // Team coding
    highlight: true
  },
  {
    icon: Settings,
    title: 'Launch & Grow Retainer',
    targetCustomers: 'Post-Launch Startups',
    solutionOutline: "We don't just build and leave. We analyze data and iterate to turn traction into revenue.",
    deliverables: ['CRO Experiments', 'Feature Prioritization', 'Monthly Iterations'],
    image: 'https://images.unsplash.com/photo-1553877616-15409eeef73d?auto=format&fit=crop&q=80&w=800', // Analytics review
    highlight: false
  },
  {
    icon: Code2,
    title: 'White-Label Dev',
    targetCustomers: 'Agencies & Studios',
    solutionOutline: "Scale your agency's capacity with our dedicated product teams working under your brand.",
    deliverables: ['Dedicated Team', 'NDA Protected', 'Invisible Partner'],
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800', // Office collaboration
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
              Forget "hourly rates" and scope creep. We sell fixed outcomes, clear milestones, and guaranteed delivery times.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-200/50 px-8 py-4 text-lg group">
                Start Discovery Sprint
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
              className={`relative overflow-hidden rounded-[2.5rem] border transition-all duration-500 group flex flex-col ${service.highlight
                ? 'bg-blue-600 border-blue-600 text-white shadow-2xl shadow-blue-200'
                : 'bg-white border-gray-100 shadow-xl shadow-gray-100/50 hover:shadow-2xl hover:border-blue-100'
                }`}
            >
              {/* Image Container */}
              <div className="h-64 w-full relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-t ${service.highlight ? 'from-blue-600/90' : 'from-white/90'} to-transparent z-10 transition-opacity duration-300`} />
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Content Wrapper */}
              <div className="p-10 -mt-20 relative z-20">
                {/* Header */}
                <div className="flex items-start justify-between mb-8">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg ${service.highlight ? 'bg-white/20 backdrop-blur-md' : 'bg-white group-hover:bg-blue-50'
                    }`}>
                    <service.icon size={28} className={service.highlight ? 'text-white' : 'text-gray-900 group-hover:text-blue-600'} />
                  </div>
                  <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm ${service.highlight ? 'bg-white/20 backdrop-blur-md text-white' : 'bg-blue-50 text-blue-600'
                    }`}>
                    <Users size={14} />
                    {service.targetCustomers}
                  </div>
                </div>

                {/* Content */}
                <h3 className={`text-3xl font-bold mb-4 tracking-tight ${service.highlight ? 'text-white' : 'text-gray-900'}`}>
                  {service.title}
                </h3>
                <p className={`text-lg mb-8 leading-relaxed ${service.highlight ? 'text-blue-50' : 'text-gray-500'}`}>
                  {service.solutionOutline}
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default ServiceOfferings