import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import Section from './ui/Section'
import { testimonials } from '../data/testimonials'

const TestimonialCard = ({ testimonial, className = '' }) => (
  <div className={`relative bg-white p-8 md:p-10 lg:p-12 rounded-[2rem] md:rounded-[2.5rem] border border-gray-100 shadow-xl shadow-gray-100/50 hover:shadow-2xl transition-all duration-500 group h-full ${className}`}>
    <div className="absolute top-8 right-8 md:top-10 md:right-10 text-blue-50 group-hover:text-blue-100 transition-colors duration-500 pointer-events-none">
      <Quote size={60} className="md:w-20 md:h-20" fill="currentColor" />
    </div>

    <div className="relative z-10 flex flex-col h-full justify-between">
      <div>
        <div className="flex items-center gap-1 mb-6 md:mb-8">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} size={16} className="fill-blue-600 text-blue-600 md:w-[18px] md:h-[18px]" />
          ))}
        </div>

        <blockquote className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-snug mb-8 md:mb-12">
          "{testimonial.quote}"
        </blockquote>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative">
          <img
            src={testimonial.avatar}
            alt={testimonial.author}
            className="w-14 h-14 md:w-16 md:h-16 rounded-xl md:rounded-2xl object-cover border-2 border-white shadow-lg"
          />
          <div className="absolute -bottom-1 -right-1 w-5 h-5 md:w-6 md:h-6 bg-blue-600 rounded-lg flex items-center justify-center border-2 border-white">
            <Quote size={8} className="text-white fill-white md:w-[10px] md:h-[10px]" />
          </div>
        </div>
        <div>
          <div className="text-lg md:text-xl font-bold text-gray-900 leading-tight">{testimonial.author}</div>
          <div className="text-xs md:text-sm font-black uppercase tracking-widest text-blue-600 mb-0.5 md:mb-1">{testimonial.position}</div>
          <div className="text-xs md:text-sm text-gray-400">{testimonial.company}</div>
        </div>
      </div>
    </div>
  </div>
)

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  // Auto-advance carousel on mobile
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const handlePrev = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  }

  return (
    <Section className="py-20 md:py-24 lg:py-32 relative overflow-hidden bg-white">
      {/* Background Decorative Text */}
      <div className="absolute top-20 left-10 opacity-[0.03] pointer-events-none select-none uppercase font-black text-[12vw] whitespace-nowrap leading-none tracking-tighter">
        Nemvol Trust
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start mb-16 md:mb-24">
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-black uppercase tracking-[0.2em] mb-6 md:mb-8"
            >
              Voice of Partners
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl lg:text-8xl font-bold text-gray-900 leading-[0.9] tracking-tight"
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
            <p className="text-lg md:text-xl lg:text-2xl text-gray-500 max-w-xl leading-relaxed font-medium">
              Success is a collaborative effort. We take pride in building long-lasting relationships based on technical excellence and shared vision.
            </p>
          </motion.div>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative">
          <div className="overflow-hidden">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <TestimonialCard testimonial={testimonials[currentIndex]} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full bg-gray-100 hover:bg-blue-50 flex items-center justify-center transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} className="text-gray-600" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1)
                    setCurrentIndex(index)
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex
                      ? 'w-6 bg-blue-600'
                      : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-gray-100 hover:bg-blue-50 flex items-center justify-center transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} className="text-gray-600" />
            </button>
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 gap-8 lg:gap-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
            >
              <TestimonialCard testimonial={testimonial} />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default Testimonials
