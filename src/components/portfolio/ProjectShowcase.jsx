import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useInView } from 'framer-motion'
import { ExternalLink, ArrowRight, Code, Trophy } from 'lucide-react'
import Section from '../ui/Section'
import Button from '../ui/Button'
import { projects } from '../../data/projects'

const StickyImage = ({ activeIndex }) => {
  return (
    <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center p-6 lg:p-12">
      <div className="relative w-full aspect-[4/5] lg:aspect-[16/10] rounded-[2.5rem] overflow-hidden shadow-2xl bg-gray-100">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <img
              src={projects[activeIndex].image}
              alt={projects[activeIndex].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

            {/* Tech Stack Overlay on Image */}
            <div className="absolute bottom-10 left-10 flex flex-wrap gap-2">
              {projects[activeIndex].technologies.slice(0, 4).map((tech) => (
                <span key={tech} className="px-4 py-1.5 bg-white/10 backdrop-blur-xl text-white text-xs font-semibold rounded-full border border-white/20 uppercase tracking-tighter">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

const ProjectSection = ({ project, index, setActiveIndex }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    margin: "-50% 0px -50% 0px" // Trigger when section is in middle of viewport
  })

  useEffect(() => {
    if (isInView) {
      setActiveIndex(index)
    }
  }, [isInView, index, setActiveIndex])

  return (
    <div ref={ref} className="min-h-[120vh] flex flex-col justify-center py-32 lg:py-0">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-20%" }} // Repeated animation for "glue" effect
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="space-y-8 max-w-xl"
      >
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="w-12 h-px bg-blue-600"></span>
            <span className="text-blue-600 font-bold uppercase tracking-[0.2em] text-xs">
              {project.industry}
            </span>
          </div>

          <h2 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-[1.1]">
            {project.title}
          </h2>

          <p className="text-xl text-gray-500 leading-relaxed font-light">
            {project.description}
          </p>
        </div>

        {/* Results / Impact Grid */}
        <div className="grid grid-cols-2 gap-8 py-8 border-y border-gray-100">
          {project.results.slice(0, 2).map((result, i) => (
            <div key={i} className="space-y-1">
              <div className="flex items-center gap-2">
                <Trophy size={16} className="text-blue-600" />
                <span className="text-2xl font-bold text-gray-900">{result.split(' ')[0]}</span>
              </div>
              <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">
                {result.split(' ').slice(1).join(' ')}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-2xl group flex-1 sm:flex-none">
            Case Study
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Button>
          <button className="flex items-center justify-center gap-2 font-bold text-gray-900 hover:text-blue-600 transition-colors px-6 h-[58px]">
            Live Preview <ExternalLink size={18} />
          </button>
        </div>
      </motion.div>
    </div>
  )
}

const ProjectShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const container = useRef(null)

  return (
    <Section className="py-0 relative">
      <div ref={container} className="flex flex-col lg:flex-row relative">

        {/* Left Side: Sticky Visuals */}
        <div className="hidden lg:block lg:w-3/5">
          <StickyImage activeIndex={activeIndex} />
        </div>

        {/* Right Side: Scrolling Content */}
        <div className="w-full lg:w-2/5 px-6 lg:px-12">
          {/* Mobile Images (not sticky) */}
          <div className="lg:hidden space-y-24 py-12">
            {projects.map((project, index) => (
              <div key={project.id} className="space-y-8">
                <div className="aspect-[16/10] rounded-3xl overflow-hidden shadow-xl">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                </div>
                <ProjectSection project={project} index={index} setActiveIndex={setActiveIndex} />
              </div>
            ))}
          </div>

          {/* Desktop Content (triggers index change) */}
          <div className="hidden lg:block">
            {projects.map((project, index) => (
              <ProjectSection
                key={project.id}
                project={project}
                index={index}
                setActiveIndex={setActiveIndex}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="py-32 bg-white text-center border-t border-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto px-6"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 tracking-tight">
            Ready to build <br />
            <span className="text-blue-600">the next big thing?</span>
          </h2>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-6 rounded-3xl text-xl shadow-2xl shadow-blue-200/50">
            Let's Collaborate
          </Button>
        </motion.div>
      </div>
    </Section>
  )
}

export default ProjectShowcase