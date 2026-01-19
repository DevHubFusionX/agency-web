import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Target, Lightbulb, Heart, Eye } from 'lucide-react'
import Section from '../ui/Section'

const values = [
  {
    icon: Heart,
    title: 'User-Obsessed',
    description: 'We don’t just build software; we build solutions for real people. Every pixel and line of code is crafted with the end-user in mind.',
    color: 'blue'
  },
  {
    icon: Target,
    title: 'Move Fast, Break Nothing',
    description: 'We believe in speed, but not at the cost of quality. We ship fast, iterate faster, and ensure stability at every step.',
    color: 'purple'
  },
  {
    icon: Eye,
    title: 'Radical Transparency',
    description: 'No hidden costs, no technical jargon black holes. You see what we see. We build in public with you.',
    color: 'green'
  },
  {
    icon: Lightbulb,
    title: 'Ownership',
    description: 'We act like founders. We treat your product, your budget, and your timeline as if they were our own.',
    color: 'orange'
  }
]

const CoreValues = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  })

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const newIndex = Math.min(Math.floor(latest * values.length), values.length - 1)
      setActiveIndex(Math.max(0, newIndex))
    })
    return () => unsubscribe()
  }, [scrollYProgress])

  const rotation = useTransform(scrollYProgress, [0, 1], [0, 360])

  return (
    <Section className="py-24 md:py-32 relative bg-white border-t border-gray-100">
      {/* Decorative Background Text */}
      <div className="absolute top-20 left-10 opacity-[0.03] pointer-events-none select-none uppercase font-black text-[12vw] whitespace-nowrap leading-none tracking-tighter">
        Our Ethos
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
              Design Philosophy
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-8xl font-bold text-gray-900 leading-[0.9] tracking-tight"
            >
              Principles that <br />
              <span className="text-blue-600 italic">Guide Us.</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:pt-20"
          >
            <p className="text-xl md:text-2xl text-gray-500 max-w-xl leading-relaxed">
              We don't just build; we engineer with purpose. Our foundations are built on excellence, transparency, and a relentless focus on the end consumer.
            </p>
          </motion.div>
        </div>

        <div ref={containerRef} className="relative lg:flex lg:gap-16">
          {/* Sticky Left Column */}
          <div className="hidden lg:flex lg:flex-col lg:items-center lg:justify-start lg:sticky lg:top-32 lg:w-1/2 lg:h-screen lg:max-h-[600px] py-8">
            <motion.div
              className="relative w-64 h-64 mb-12"
              style={{ rotate: rotation }}
            >
              <div className="absolute inset-0 rounded-full border-4 border-dashed border-gray-100"></div>
              {values.map((value, index) => {
                const angle = (index / values.length) * 360 - 90
                const x = 110 * Math.cos((angle * Math.PI) / 180)
                const y = 110 * Math.sin((angle * Math.PI) / 180)
                return (
                  <motion.div
                    key={value.title}
                    className={`absolute w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 ${activeIndex === index
                      ? 'bg-blue-600 scale-125 shadow-2xl shadow-blue-200 rotate-[-15deg]'
                      : 'bg-white border border-gray-100 shadow-sm'
                      }`}
                    style={{
                      left: `calc(50% + ${x}px - 32px)`,
                      top: `calc(50% + ${y}px - 32px)`,
                    }}
                  >
                    <value.icon
                      size={28}
                      className={activeIndex === index ? 'text-white' : 'text-gray-400'}
                    />
                  </motion.div>
                )
              })}
            </motion.div>

            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-sm"
            >
              <h3 className="text-4xl font-black text-gray-900 mb-4 tracking-tighter">{values[activeIndex].title}</h3>
              <p className="text-gray-500 text-lg leading-relaxed">{values[activeIndex].description}</p>
            </motion.div>
          </div>

          {/* Scrolling Right Column */}
          <div className="lg:w-1/2 space-y-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative p-10 rounded-[2.5rem] border transition-all duration-500 ${activeIndex === index
                  ? 'bg-white border-blue-200 shadow-2xl shadow-blue-100 scale-[1.02]'
                  : 'bg-white border-gray-100 shadow-xl shadow-gray-100/50'
                  }`}
              >
                <div className={`w-16 h-16 rounded-2xl mb-8 flex items-center justify-center ${activeIndex === index ? 'bg-blue-600' : 'bg-gray-50'
                  }`}>
                  <value.icon size={32} className={activeIndex === index ? 'text-white' : 'text-blue-600'} />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-500 text-lg leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}

export default CoreValues