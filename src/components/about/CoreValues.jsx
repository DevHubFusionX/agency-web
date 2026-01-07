import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Target, Lightbulb, Heart, Eye } from 'lucide-react'
import Section from '../ui/Section'

const values = [
  {
    icon: Target,
    title: 'Engineering Excellence',
    description: 'We optimize every line of code for speed, efficiency, and maintainability. Fast loading times and smooth interactions are non-negotiable.',
    color: 'blue'
  },
  {
    icon: Lightbulb,
    title: 'Future-Proof Architecture',
    description: 'We build with tomorrow in mind. Modular, scalable systems that evolve with your business without costly rewrites.',
    color: 'purple'
  },
  {
    icon: Heart,
    title: 'Radical User Focus',
    description: 'Every interface we create is intuitive and accessible. We test with real users to ensure experiences that delight.',
    color: 'green'
  },
  {
    icon: Eye,
    title: 'Transparent Processes',
    description: 'No black boxes. You see our work in progress, understand our decisions, and are always part of the conversation.',
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
    <Section background="gray" className="py-24">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight"
        >
          Our Design Philosophy
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl text-gray-500 max-w-2xl mx-auto"
        >
          The principles that guide every product we build.
        </motion.p>
      </div>

      <div ref={containerRef} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Sticky Left Column */}
        <div className="lg:sticky lg:top-32 flex flex-col items-center justify-center py-8">
          <motion.div
            className="relative w-48 h-48 mb-8"
            style={{ rotate: rotation }}
          >
            <div className="absolute inset-0 rounded-full border-4 border-dashed border-gray-200"></div>
            {values.map((value, index) => {
              const angle = (index / values.length) * 360 - 90
              const x = 80 * Math.cos((angle * Math.PI) / 180)
              const y = 80 * Math.sin((angle * Math.PI) / 180)
              return (
                <motion.div
                  key={value.title}
                  className={`absolute w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${activeIndex === index
                      ? 'bg-blue-600 scale-125 shadow-lg'
                      : 'bg-gray-100'
                    }`}
                  style={{
                    left: `calc(50% + ${x}px - 24px)`,
                    top: `calc(50% + ${y}px - 24px)`,
                  }}
                >
                  <value.icon
                    size={20}
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
            transition={{ duration: 0.3 }}
            className="text-center max-w-sm"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-3">{values[activeIndex].title}</h3>
            <p className="text-gray-600 leading-relaxed">{values[activeIndex].description}</p>
          </motion.div>
        </div>

        {/* Scrolling Right Column */}
        <div className="space-y-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-white rounded-3xl p-8 shadow-sm border transition-all duration-300 ${activeIndex === index
                  ? 'border-blue-200 shadow-lg scale-[1.02]'
                  : 'border-gray-100 hover:shadow-md'
                }`}
            >
              <div className={`w-14 h-14 rounded-2xl mb-6 flex items-center justify-center ${value.color === 'blue' ? 'bg-blue-100' :
                  value.color === 'purple' ? 'bg-purple-100' :
                    value.color === 'green' ? 'bg-green-100' : 'bg-orange-100'
                }`}>
                <value.icon size={28} className={
                  value.color === 'blue' ? 'text-blue-600' :
                    value.color === 'purple' ? 'text-purple-600' :
                      value.color === 'green' ? 'text-green-600' : 'text-orange-600'
                } />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default CoreValues