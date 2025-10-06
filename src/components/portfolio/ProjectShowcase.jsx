import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ExternalLink, ArrowRight, Calendar, Users, Target, DollarSign, Quote } from 'lucide-react'
import Button from '../ui/Button'
import Section from '../ui/Section'
import Modal from '../ui/Modal'
import { projects } from '../../data/projects'

const ProjectShowcase = () => {
  const [filter, setFilter] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'platform', name: 'Digital Platforms' },
    { id: 'mobile', name: 'Mobile Solutions' },
    { id: 'transformation', name: 'Digital Transformation' }
  ]



  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)

  return (
    <Section className="py-20">
      {/* Filter Section */}
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-8"
        >
          Featured Case Studies
        </motion.h2>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={filter === category.id ? 'primary' : 'outline'}
              onClick={() => setFilter(category.id)}
              className="mb-4"
            >
              {category.name}
            </Button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="space-y-16">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
              index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
            }`}
          >
            {/* Project Image */}
            <div className={`relative group ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <ExternalLink size={20} className="text-gray-900" />
                  </div>
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
              <div className="mb-4">
                <span className="text-sm font-medium text-blue-600 mb-2 block">{project.industry}</span>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-lg text-gray-600 mb-4">{project.client}</p>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {project.description}
              </p>
              
              {/* Results */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Results</h4>
                <div className="space-y-2">
                  {project.results.map((result, i) => (
                    <div key={i} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      {result}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Technologies & Timeline */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Timeline: {project.timeline}</span>
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    className="group"
                    onClick={() => setSelectedProject(project)}
                  >
                    Quick View
                  </Button>
                  <Link to={`/portfolio/${project.id}`}>
                    <Button className="group">
                      Full Case Study
                      <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <Modal 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title}
      >
        {selectedProject && (
          <div className="space-y-8">
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-64 object-cover rounded-lg"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 text-blue-600 mr-2" />
                <div>
                  <p className="text-sm text-gray-500">Timeline</p>
                  <p className="font-semibold">{selectedProject.timeline}</p>
                </div>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 text-blue-600 mr-2" />
                <div>
                  <p className="text-sm text-gray-500">Team Size</p>
                  <p className="font-semibold">{selectedProject.teamSize}</p>
                </div>
              </div>
              <div className="flex items-center">
                <Target className="w-5 h-5 text-blue-600 mr-2" />
                <div>
                  <p className="text-sm text-gray-500">Industry</p>
                  <p className="font-semibold">{selectedProject.industry}</p>
                </div>
              </div>
              <div className="flex items-center">
                <DollarSign className="w-5 h-5 text-blue-600 mr-2" />
                <div>
                  <p className="text-sm text-gray-500">Budget</p>
                  <p className="font-semibold">{selectedProject.budget}</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3">Project Overview</h3>
              <p className="text-gray-600 leading-relaxed mb-4">{selectedProject.fullDescription}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-3">The Challenge</h3>
                <p className="text-gray-600 leading-relaxed">{selectedProject.challenge}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">Our Solution</h3>
                <p className="text-gray-600 leading-relaxed">{selectedProject.solution}</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Key Results & Impact</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {selectedProject.results.map((result, i) => (
                  <div key={i} className="flex items-center p-3 bg-green-50 rounded-lg">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-700 font-medium">{result}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3">Technologies & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-blue-100 text-blue-800 text-sm font-medium rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-start">
                <Quote className="w-6 h-6 text-blue-600 mr-3 mt-1" />
                <div>
                  <p className="text-gray-700 italic mb-3 text-lg leading-relaxed">
                    "{selectedProject.testimonial.quote}"
                  </p>
                  <div>
                    <p className="font-semibold text-gray-900">{selectedProject.testimonial.author}</p>
                    <p className="text-sm text-gray-600">{selectedProject.testimonial.position}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </Section>
  )
}

export default ProjectShowcase