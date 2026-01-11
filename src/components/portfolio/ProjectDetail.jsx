import { useParams, Navigate } from 'react-router-dom'
import { Shield, Smartphone, ArrowLeft, Calendar, Users, Briefcase } from 'lucide-react'
import { motion } from 'framer-motion'
import { projects } from '../../data/projects'
import SEO from '../SEO'
import Section from '../ui/Section'

const ProjectDetail = () => {
  const { id } = useParams()
  const project = projects.find(p => p.id === parseInt(id))

  if (!project) {
    return <Navigate to="/404" replace />
  }

  return (
    <Section className="min-h-screen bg-white pt-32 pb-24">
      <SEO
        title={`${project.title} - Case Study`}
        description={project.description}
        image={project.image}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Navigation */}
        <button
          onClick={() => window.history.back()}
          className="flex items-center gap-2 text-gray-500 hover:text-blue-600 font-bold mb-12 transition-colors group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to Portfolio
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-12"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight mb-8">
                {project.title}
              </h1>
              <div className="flex flex-wrap gap-8">
                <div className="flex items-center gap-2 text-gray-500">
                  <Briefcase size={18} className="text-blue-600" />
                  <span className="font-bold text-sm uppercase tracking-wider">{project.client}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500">
                  <Calendar size={18} className="text-blue-600" />
                  <span className="font-bold text-sm uppercase tracking-wider">{project.timeline}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500">
                  <Users size={18} className="text-blue-600" />
                  <span className="font-bold text-sm uppercase tracking-wider">{project.teamSize}</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="aspect-video w-full rounded-[2.5rem] overflow-hidden shadow-2xl shadow-gray-200 mb-16"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Overview */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Overview</h2>
              <p className="text-gray-700 leading-relaxed">{project.fullDescription}</p>
            </section>

            {/* Challenge & Solution */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">Challenge</h3>
                <p className="text-gray-700">{project.challenge}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Solution</h3>
                <p className="text-gray-700">{project.solution}</p>
              </div>
            </div>

            {/* Results */}
            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Results</h3>
              <ul className="grid md:grid-cols-2 gap-2">
                {project.results.map((result, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    {result}
                  </li>
                ))}
              </ul>
            </section>

            {/* Technologies */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
                  <Shield size={20} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Tech Stack</h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {project.technologies.map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-3 p-4 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md hover:border-blue-100 transition-all group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                      <Smartphone size={16} />
                    </div>
                    <span className="font-bold text-gray-700 text-sm">{tech}</span>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Testimonial */}
            {project.testimonial && (
              <section className="bg-white p-6 rounded-lg shadow-sm">
                <blockquote className="text-lg italic text-gray-700 mb-4">
                  "{project.testimonial.quote}"
                </blockquote>
                <div className="text-sm text-gray-600">
                  <div className="font-semibold">{project.testimonial.author}</div>
                  <div>{project.testimonial.position}</div>
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </Section>
  )
}

export default ProjectDetail