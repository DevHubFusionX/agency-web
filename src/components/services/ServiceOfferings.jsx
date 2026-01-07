import { motion } from 'framer-motion'
import { Code, Smartphone, Palette, TrendingUp, Search, Shield, ArrowRight } from 'lucide-react'
import Button from '../ui/Button'
import Section from '../ui/Section'

const services = [
  {
    icon: Code,
    title: 'Web Applications',
    description: 'High-performance React & Next.js apps built for scale.'
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description: 'Cross-platform iOS & Android with React Native.'
  },
  {
    icon: Palette,
    title: 'Backend & APIs',
    description: 'Secure, scalable Node.js and Python systems.'
  },
  {
    icon: TrendingUp,
    title: 'Cloud & DevOps',
    description: 'AWS/Azure deployment with CI/CD automation.'
  },
  {
    icon: Search,
    title: 'UI/UX Design',
    description: 'User-centered design systems and prototypes.'
  },
  {
    icon: Shield,
    title: 'Maintenance',
    description: 'Ongoing support, updates, and optimization.'
  }
]

const ServiceOfferings = () => {
  return (
    <Section className="py-24">
      {/* Header */}
      <div className="text-center mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight"
        >
          Our Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl text-gray-500 max-w-2xl mx-auto"
        >
          A full spectrum of digital product capabilities, delivered by a team that cares about outcomes.
        </motion.p>
      </div>

      {/* Split Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Left Column - Narrative */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-5 lg:sticky lg:top-32"
        >
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed mb-10">
            <p>
              <span className="text-gray-900 font-medium">You work with senior engineers</span> who've shipped products used by millions—not juniors learning on your dime.
            </p>
            <p>
              <span className="text-gray-900 font-medium">We solve real problems</span>: legacy system rewrites, scaling bottlenecks, MVP launches, and everything in between.
            </p>
            <p>
              <span className="text-gray-900 font-medium">We partner long-term.</span> Most clients stay with us for years, not projects. That's our measure of success.
            </p>
          </div>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-200/50 px-8 py-4 text-lg">
            Let's Talk
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </motion.div>

        {/* Right Column - Services Grid */}
        <div className="lg:col-span-7">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-blue-100 hover:shadow-lg transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gray-50 group-hover:bg-blue-50 rounded-xl flex items-center justify-center transition-colors duration-300">
                    <service.icon size={24} className="text-gray-600 group-hover:text-blue-600 transition-colors duration-300" />
                  </div>
                  <ArrowRight size={20} className="text-gray-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}

export default ServiceOfferings