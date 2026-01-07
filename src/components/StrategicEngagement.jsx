import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle, Calendar, Shield } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from './ui/Button'
import Section from './ui/Section'

const StrategicEngagement = () => {
  return (
    <Section className="py-24 md:py-32 relative overflow-hidden bg-blue-600" background="none">
      {/* Background Decorative Text */}
      <div className="absolute top-20 left-10 opacity-[0.08] pointer-events-none select-none uppercase font-black text-[12vw] whitespace-nowrap leading-none tracking-tighter text-white">
        Nemvol Future
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="text-white">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-black uppercase tracking-[0.2em] mb-8 border border-white/20"
            >
              <MessageCircle size={16} />
              Ready to Start?
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-8xl font-bold leading-[0.9] tracking-tight mb-8 text-white"
            >
              Let's Build Your <br />
              <span className="text-white italic opacity-80">Next Era.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-blue-50 max-w-xl leading-relaxed mb-12 font-medium"
            >
              From concept to deployment, we'll guide you through every step. Get expert advice on technology choices and project planning.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/contact">
                <Button size="lg" className="group bg-white hover:bg-blue-50 !text-blue-600 px-10 py-5 rounded-full font-black uppercase tracking-widest text-sm shadow-xl shadow-blue-900/20">
                  Start Consultation
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button variant="outline" size="lg" className="border-white/40 text-white hover:bg-white/10 px-10 py-5 rounded-full font-black uppercase tracking-widest text-sm backdrop-blur-sm">
                  View Our Work
                </Button>
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {[
              {
                icon: MessageCircle,
                title: 'Expert Consultation',
                description: 'Discuss your project requirements and get high-level architectural recommendations.'
              },
              {
                icon: Calendar,
                title: 'Dedicated Delivery',
                description: 'We work as an extension of your team, delivering consistent and predictable milestones.'
              },
              {
                icon: Shield,
                title: 'Unmatched Quality',
                description: 'Enterprise-grade code quality with comprehensive testing and security-first development.'
              }
            ].map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                whileHover={{ x: 10 }}
                className="flex items-start gap-6 p-8 bg-white/5 backdrop-blur-sm rounded-[2rem] border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center border border-white/10 text-white">
                  <feature.icon size={28} />
                </div>
                <div>
                  <h3 className="text-white text-xl font-bold mb-2 tracking-tight">{feature.title}</h3>
                  <p className="text-blue-50/70 text-base leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Stats Strip */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="pt-16 border-t border-white/10"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 text-center">
            {[
              { number: '24h', label: 'Response Time' },
              { number: '150+', label: 'Products Shipped' },
              { number: '4.9★', label: 'Client Rating' }
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                className="group"
              >
                <div className="text-5xl md:text-6xl font-black text-white mb-3 tracking-tighter">{stat.number}</div>
                <div className="text-blue-100/60 text-xs font-black uppercase tracking-[0.2em]">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  )
}

export default StrategicEngagement