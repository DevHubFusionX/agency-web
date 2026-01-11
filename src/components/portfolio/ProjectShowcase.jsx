import { motion } from 'framer-motion'
import { ArrowRight, X, Check, AlertTriangle, Zap, Clock, Trophy, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'
import Section from '../ui/Section'
import { projects } from '../../data/projects'

// Map projects to Before/After transformation format
const getTransformationData = (project) => {
  const beforeAfterMap = {
    'HealthTrack MVP': {
      before: {
        headline: 'The Challenge',
        points: [
          'Tight fundraising deadline',
          'No validated product',
          'Healthcare compliance needs',
          'Uncertain user demand'
        ]
      },
      after: {
        headline: 'The Outcome',
        points: [
          '$2M seed raised',
          '1,000+ beta users acquired',
          'HIPAA-compliant build',
          '4.8★ app store rating'
        ]
      }
    },
    'PropFlow': {
      before: {
        headline: 'The Challenge',
        points: [
          'Limited bootstrap budget',
          'Competing with big players',
          'Complex feature requirements',
          'No technical co-founder'
        ]
      },
      after: {
        headline: 'The Outcome',
        points: [
          '500+ landlords onboarded',
          'Expanded to 3 countries',
          'Break-even in 6 months',
          'Lean, focused MVP'
        ]
      }
    },
    'AgencyOS': {
      before: {
        headline: 'The Challenge',
        points: [
          'Losing clients to poor visibility',
          'Manual reporting overhead',
          'Fragmented tool stack',
          'Team inefficiency'
        ]
      },
      after: {
        headline: 'The Outcome',
        points: [
          '30% efficiency gain',
          'Automated reporting',
          'Full white-label solution',
          '100% team adoption'
        ]
      }
    }
  }
  return beforeAfterMap[project.title] || {
    before: { headline: 'The Challenge', points: ['Complex requirements'] },
    after: { headline: 'The Outcome', points: ['Successful delivery'] }
  }
}

const ProjectCard = ({ project, index, featured = false }) => {
  const transformation = getTransformationData(project)

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`group ${featured ? 'lg:col-span-2' : ''}`}
    >
      <div className={`rounded-[2rem] overflow-hidden border border-gray-100 bg-white shadow-xl shadow-gray-200/30 hover:shadow-2xl transition-all duration-500 ${featured ? 'grid grid-cols-1 lg:grid-cols-2' : ''}`}>

        {/* Project Image with Before/After Overlay */}
        <div className={`relative overflow-hidden ${featured ? 'h-80 lg:h-full' : 'h-64'}`}>
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          {/* Overlay Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-blue-400 text-[10px] font-black uppercase tracking-[0.2em]">
                {project.industry}
              </span>
              <span className="text-gray-500">•</span>
              <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                <Clock size={12} />
                {project.timeline}
              </div>
            </div>
            <h3 className={`font-bold text-white mb-2 ${featured ? 'text-3xl md:text-4xl' : 'text-2xl'}`}>
              {project.title}
            </h3>
            <p className="text-gray-300 text-sm font-medium">{project.client}</p>
          </div>

          {/* Tech Stack Pills */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            {project.technologies.slice(0, 3).map((tech) => (
              <span key={tech} className="px-2.5 py-1 bg-white/10 backdrop-blur-xl text-white text-[10px] font-bold rounded-full border border-white/20">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Content Side - Before/After Split */}
        <div className="p-5 md:p-8">
          {/* Description */}
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Before → After Transformation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {/* Before */}
            <motion.div
              className="p-4 rounded-2xl bg-gradient-to-br from-red-50 to-orange-50/50 border border-red-100/50"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
                  <X size={12} className="text-red-500" />
                </div>
                <span className="text-red-600 font-black uppercase tracking-[0.1em] text-[10px]">
                  {transformation.before.headline}
                </span>
              </div>
              <ul className="space-y-2">
                {transformation.before.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-gray-600">
                    <AlertTriangle size={10} className="text-red-400 mt-0.5 flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* After */}
            <motion.div
              className="p-4 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 text-white"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 rounded-full bg-blue-500/40 flex items-center justify-center">
                  <Check size={12} className="text-white" />
                </div>
                <span className="text-blue-200 font-black uppercase tracking-[0.1em] text-[10px]">
                  {transformation.after.headline}
                </span>
              </div>
              <ul className="space-y-2">
                {transformation.after.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-blue-100">
                    <Trophy size={10} className="text-blue-300 mt-0.5 flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Key Results */}
          <div className="flex flex-wrap gap-3 mb-6 pt-4 border-t border-gray-100">
            {project.results.slice(0, featured ? 4 : 3).map((result, i) => (
              <div key={i} className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 rounded-full">
                <Trophy size={12} className="text-blue-600" />
                <span className="text-xs font-bold text-gray-700">{result}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <Link
            to={`/portfolio/${project.id}`}
            className="inline-flex items-center gap-2 text-blue-600 font-bold text-sm hover:gap-3 transition-all duration-300 group/link"
          >
            View Case Study
            <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

const ProjectShowcase = () => {
  const featuredProject = projects.find(p => p.featured) || projects[0]
  const otherProjects = projects.filter(p => p.id !== featuredProject.id)

  return (
    <Section className="py-24 md:py-32 relative overflow-hidden bg-gray-50">
      {/* Background Decorative Text */}
      <div className="absolute top-20 left-10 opacity-[0.03] pointer-events-none select-none uppercase font-black text-[12vw] md:text-[18vw] whitespace-nowrap leading-none tracking-tighter overflow-hidden">
        Case Studies
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-end mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-xs font-black uppercase tracking-[0.2em] mb-6"
            >
              <Zap size={14} className="fill-current" />
              Featured Work
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[0.95] tracking-tight mb-2"
            >
              Before → After <br />
              <span className="text-blue-600 italic">Transformations.</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-lg md:text-2xl text-gray-500 leading-relaxed">
              Real products we've built for founders and startups. Each one launched on time,
              on budget, and validated by real users.
            </p>
          </motion.div>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Featured Project */}
          <ProjectCard project={featuredProject} index={0} featured={true} />

          {/* Other Projects */}
          {otherProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index + 1} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 text-center"
        >
          <p className="text-gray-500 mb-6 text-lg">Ready to transform your idea into reality?</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-blue-600 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-blue-700 hover:shadow-2xl hover:shadow-blue-200 transition-all duration-300 group"
          >
            Start Your Project
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </Section>
  )
}

export default ProjectShowcase