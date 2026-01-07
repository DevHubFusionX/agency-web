import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import Section from './ui/Section'
import { testimonials } from '../data/testimonials'

const Testimonials = () => {
  return (
    <Section className="py-24 md:py-32 relative overflow-hidden bg-white">
      {/* Background Decorative Text */}
      <div className="absolute top-20 left-10 opacity-[0.03] pointer-events-none select-none uppercase font-black text-[12vw] whitespace-nowrap leading-none tracking-tighter">
        Nemvol Trust
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-black uppercase tracking-[0.2em] mb-8"
            >
              Voice of Partners
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-8xl font-bold text-gray-900 leading-[0.9] tracking-tight"
            >
              Trusted by <br />
              <span className="text-blue-600 italic">Market Leaders.</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:pt-20"
          >
            <p className="text-xl md:text-2xl text-gray-500 max-w-xl leading-relaxed font-medium">
              Success is a collaborative effort. We take pride in building long-lasting relationships based on technical excellence and shared vision.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="relative bg-white p-10 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-gray-100/50 hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="absolute top-10 right-10 text-blue-50 group-hover:text-blue-100 transition-colors duration-500 pointer-events-none">
                <Quote size={80} fill="currentColor" />
              </div>

              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="flex items-center gap-1 mb-8">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={18} className="fill-blue-600 text-blue-600" />
                    ))}
                  </div>

                  <blockquote className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug mb-12">
                    "{testimonial.quote}"
                  </blockquote>
                </div>

                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      className="w-16 h-16 rounded-2xl object-cover border-2 border-white shadow-lg"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-600 rounded-lg flex items-center justify-center border-2 border-white">
                      <Quote size={10} className="text-white fill-white" />
                    </div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-gray-900 leading-tight">{testimonial.author}</div>
                    <div className="text-sm font-black uppercase tracking-widest text-blue-600 mb-1">{testimonial.position}</div>
                    <div className="text-sm text-gray-400">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default Testimonials
