import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle, Calendar, Shield } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from './ui/Button'
import Section from './ui/Section'

const StrategicEngagement = () => {
  return (
    <Section className="py-16 md:py-24 relative overflow-hidden bg-blue-600" background="none">
      {/* Background Decorative Text */}
      <div className="absolute top-10 left-10 opacity-[0.08] pointer-events-none select-none uppercase font-black text-[12vw] whitespace-nowrap leading-none tracking-tighter text-white">
        Nemvol Impact
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-xs font-black uppercase tracking-[0.2em] mb-8 md:mb-10 border border-white/20"
        >
          <MessageCircle size={14} />
          Your Product Journey Starts Here
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-8xl font-bold leading-[0.9] tracking-tight mb-6 md:mb-8 text-white"
        >
          Build Your MVP in <br />
          <span className="text-white italic opacity-80">8-12 Weeks.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-2xl text-blue-50 max-w-2xl mx-auto leading-relaxed mb-10 md:mb-12 font-medium"
        >
          Stop the feature bloat. We use a structured discovery-first approach to transform your vision into a validated, scalable digital product with full IP ownership.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center"
        >
          <Link to="/contact">
            <Button size="lg" className="group bg-white hover:bg-blue-50 !text-blue-600 px-10 md:px-12 py-5 md:py-6 rounded-full font-black uppercase tracking-widest text-xs md:text-sm shadow-xl shadow-blue-900/20">
              Start Your Discovery
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link to="/portfolio">
            <Button variant="outline" size="lg" className="border-white/40 text-white hover:bg-white/10 px-10 md:px-12 py-5 md:py-6 rounded-full font-black uppercase tracking-widest text-xs md:text-sm backdrop-blur-sm">
              Explore Our Work
            </Button>
          </Link>
        </motion.div>

        {/* Motto / Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 md:mt-24"
        >
          <div className="inline-block px-6 md:px-8 py-3 md:py-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <span className="text-blue-100/40 text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em]">
              Nemvol Limited
            </span>
            <div className="h-px w-10 md:w-12 bg-white/20 mx-auto my-2 md:my-3" />
            <p className="text-white text-base md:text-lg font-bold tracking-tight">
              Building People, Brands and Purpose.
            </p>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}

export default StrategicEngagement