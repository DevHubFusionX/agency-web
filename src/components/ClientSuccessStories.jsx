import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Quote, Star, ArrowRight } from 'lucide-react'

/**
 * Data Configuration
 */
const SUCCESS_DATA = [
  {
    type: 'testimonial',
    quote: "Nemvol built our MVP in record time. Their discovery-first approach saved us months of wasted development on features users didn't actually need.",
    author: "Sarah Chen",
    role: "Founder",
    company: "FinanceFlow",
    metric: "10 Wks",
    label: "Delivery",
    color: "blue"
  },
  {
    type: 'testimonial',
    quote: "Working with Nemvol felt like having an in-house CTO. They didn't just write code; they challenged our assumptions and helped us secure our Seed round.",
    author: "Marcus Rodriguez",
    role: "Founder",
    company: "ShopStream",
    metric: "90%",
    label: "Success Rate",
    color: "indigo"
  },
  {
    type: 'testimonial',
    quote: "The White-label partnership with Nemvol allowed our agency to take on complex technical builds without expanding our full-time headcount.",
    author: "Emily Watson",
    role: "Agency Director",
    company: "Creative Pulse",
    metric: "5x",
    label: "Capacity",
    color: "blue"
  },
  {
    type: 'testimonial',
    quote: "Their local market UX expertise combined with global engineering standards made our launch in the African market seamless and successful.",
    author: "James Wilson",
    role: "Growth Lead",
    company: "LogiTrack",
    metric: "3x",
    label: "User Growth",
    color: "blue"
  },
  {
    type: 'cta',
    title: "Your story starts here.",
    subtitle: "Ready to launch your vision?",
    buttonText: "Book Discovery Sprint"
  }
]

/**
 * Shared Card Container Component for Stacking
 */
const CardWrapper = ({ children, index, total, scrollYProgress }) => {
  // Logic for stacking: Cards scale down and stay solid white as they are covered
  const start = index / total
  const end = (index + 1) / total

  const scale = useTransform(scrollYProgress, [start, end], [1, 0.9])
  const blur = useTransform(scrollYProgress, [start, end], [0, 4])

  // Instead of opacity, we'll let the cards handle their own background color transitions
  return (
    <div
      className="sticky top-0 h-screen flex items-center justify-center px-4"
      style={{
        zIndex: index + 1
      }}
    >
      <motion.div
        style={{
          scale,
          filter: `blur(${blur}px)`
        }}
        className="w-full max-w-4xl"
      >
        {/* We pass the progress for the specific card stacking phase */}
        {children({ scrollYProgress, start, end })}
      </motion.div>
    </div>
  )
}

/**
 * Testimonial Card Component
 */
const TestimonialCard = ({ data }) => (
  <div className="bg-white rounded-[3rem] p-8 md:p-16 border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.05)] relative overflow-hidden group">
    {/* Decorative Elements */}
    <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity duration-500 pointer-events-none">
      <Quote size={240} />
    </div>

    <div className="relative z-10 flex flex-col md:flex-row gap-12 items-start md:items-center">
      <div className="flex-1 space-y-8">
        <div className="w-16 h-16 bg-blue-600 rounded-3xl flex items-center justify-center text-white shadow-xl shadow-blue-200">
          <Quote size={32} />
        </div>

        <p className="text-2xl md:text-4xl text-gray-900 font-medium leading-[1.3] tracking-tight">
          "{data.quote}"
        </p>

        <div className="flex items-center gap-5">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-[2rem] flex items-center justify-center font-bold text-xl text-white">
            {data.author.split(' ').map(n => n[0]).join('')}
          </div>
          <div>
            <h4 className="text-xl font-bold text-gray-900">{data.author}</h4>
            <p className="text-gray-500 font-medium">{data.role}, {data.company}</p>
          </div>
        </div>
      </div>

      <div className="md:w-px h-px md:h-48 bg-gray-100" />

      <div className="space-y-2">
        <div className="text-6xl md:text-8xl font-black bg-clip-text text-transparent bg-gradient-to-br from-blue-600 to-indigo-600 tracking-tighter">
          {data.metric}
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm font-black text-gray-400 uppercase tracking-[0.3em]">
            {data.label}
          </span>
          <div className="h-px w-12 bg-gray-200" />
        </div>
        <div className="flex gap-1 text-yellow-400 pt-4">
          {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" stroke="none" />)}
        </div>
      </div>
    </div>
  </div>
)

/**
 * CTA Card Component
 */
const CTACard = ({ data, scrollYProgress, start, end }) => {
  // Animate background and text color to white/blue when covered
  const backgroundColor = useTransform(scrollYProgress, [start, end], ["#2563eb", "#ffffff"])
  const textColor = useTransform(scrollYProgress, [start, end], ["#ffffff", "#2563eb"])
  const subtitleColor = useTransform(scrollYProgress, [start, end], ["#dbeafe", "#64748b"])

  return (
    <motion.div
      style={{ backgroundColor }}
      className="rounded-[3rem] p-12 md:p-24 flex flex-col justify-center items-center text-center relative overflow-hidden group shadow-2xl shadow-blue-200/50"
    >
      <div className="relative z-10 space-y-10 max-w-2xl">
        <motion.h3
          style={{ color: textColor }}
          className="text-5xl md:text-7xl font-bold tracking-tight leading-[0.9]"
        >
          {data.title.split('.').map((s, i) => (
            <span key={i} className={`block ${i === 1 ? 'italic opacity-80' : ''}`}>
              {s}
            </span>
          ))}
        </motion.h3>
        <motion.p
          style={{ color: subtitleColor }}
          className="text-xl md:text-2xl font-medium max-w-md mx-auto leading-relaxed"
        >
          {data.subtitle}
        </motion.p>
        <button className="bg-white text-blue-600 px-12 py-6 rounded-full font-bold text-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center gap-3 mx-auto group/btn border border-blue-100">
          {data.buttonText}
          <ArrowRight className="group-hover/btn:translate-x-2 transition-transform" size={24} />
        </button>
      </div>

      {/* Dynamic Background Elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px]"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, -90, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] bg-black/10 rounded-full blur-[100px]"
      />
    </motion.div>
  )
}

/**
 * Main Component
 */
const ClientSuccessStories = () => {
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  return (
    <section ref={containerRef} className="relative bg-white">
      {/* Background Section Title (Static during scroll) */}
      <div className="sticky top-0 h-screen overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center opacity-[0.03] select-none uppercase font-black text-[20vw] whitespace-nowrap leading-none tracking-tighter">
          Founder Success
        </div>
      </div>

      <div className="relative">
        {/* Intro Header */}
        <div className="h-screen flex items-center justify-center px-6">
          <div className="max-w-5xl w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 text-blue-600 font-bold text-sm uppercase tracking-[0.2em] px-4 py-2 bg-blue-50 rounded-full mb-8"
            >
              <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              Proof of Growth
            </motion.div>
            <h2 className="text-6xl md:text-9xl font-bold text-gray-900 tracking-tight leading-[0.8] mb-12">
              High Stakes.<br />
              <span className="text-blue-600 italic">Proven Results.</span>
            </h2>
            <p className="max-w-xl text-gray-500 text-xl md:text-2xl leading-relaxed font-medium">
              We don't just build software. We build the growth engines that allow visionary founders to define their categories.
            </p>
          </div>
        </div>

        {/* Stacking Cards Container */}
        <div className="relative">
          {SUCCESS_DATA.map((item, idx) => (
            <CardWrapper
              key={idx}
              index={idx}
              total={SUCCESS_DATA.length}
              scrollYProgress={scrollYProgress}
            >
              {({ scrollYProgress, start, end }) => (
                item.type === 'testimonial'
                  ? <TestimonialCard data={item} />
                  : <CTACard data={item} scrollYProgress={scrollYProgress} start={start} end={end} />
              )}
            </CardWrapper>
          ))}
        </div>

        {/* Ending Spacer */}
        <div className="h-[20vh]" />
      </div>

      {/* Floating Progress Bar */}
      <div className="fixed left-8 top-1/2 -translate-y-1/2 w-1.5 h-32 bg-gray-100 rounded-full overflow-hidden hidden lg:block z-50">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="w-full h-full bg-blue-600 origin-top shadow-[0_0_15px_rgba(37,99,235,0.5)]"
        />
      </div>
    </section>
  )
}

export default ClientSuccessStories