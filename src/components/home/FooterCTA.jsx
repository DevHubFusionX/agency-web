import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const FooterCTA = () => {
  return (
    <section className="bg-blue-600 py-24 md:py-32 relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-white blur-[100px] translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-blue-300 blur-[100px] -translate-x-1/3 translate-y-1/3"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl md:text-7xl font-black text-white tracking-tighter mb-6 leading-tight"
        >
          Ready to scale <br className="hidden md:block" /> your business?
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-blue-100 text-lg md:text-2xl mb-12 max-w-2xl mx-auto font-medium leading-relaxed"
        >
          Stop settling for slow agencies and unscalable code. Get an expert engineering team that builds for revenue.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <a 
            href="mailto:nemvolltd@gmail.com" 
            className="inline-flex items-center justify-center gap-3 bg-white text-blue-600 px-10 py-5 rounded-2xl font-black text-lg hover:bg-blue-50 hover:-translate-y-1 transition-all duration-300 shadow-2xl shadow-blue-900/30 group"
          >
            Start a Project
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" strokeWidth={3} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default FooterCTA
