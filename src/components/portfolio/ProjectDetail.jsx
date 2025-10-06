import { useParams, Navigate } from 'react-router-dom'
import { projects } from '../../data/projects'
import SEO from '../SEO'

const ProjectDetail = () => {
  const { id } = useParams()
  const project = projects.find(p => p.id === parseInt(id))

  if (!project) {
    return <Navigate to="/404" replace />
  }

  return (
    <>
      <SEO 
        title={`${project.title} - Case Study`}
        description={project.description}
        image={project.image}
      />
      
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{project.title}</h1>
            <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-6">
              <span>Client: {project.client}</span>
              <span>Industry: {project.industry}</span>
              <span>Timeline: {project.timeline}</span>
              <span>Team: {project.teamSize}</span>
            </div>
          </div>

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
          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  {tech}
                </span>
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
    </>
  )
}

export default ProjectDetail