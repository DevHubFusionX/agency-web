import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle } from 'lucide-react'
import Button from '../ui/Button'
import Section from '../ui/Section'
import LoadingSpinner from '../ui/LoadingSpinner'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      console.log('Form submitted:', formData)
      setSubmitted(true)
      setFormData({ name: '', email: '', company: '', projectType: '', budget: '', timeline: '', message: '' })
    } catch (error) {
      console.error('Form submission error:', error)
      // Handle error state here
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Section className="py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Start Your Project
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Share your project details and we'll provide a comprehensive consultation 
            within 24 hours, including strategic recommendations and project roadmap.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Business Email *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="your@company.com"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Your company"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Project Type *
                </label>
                <select
                  name="projectType"
                  required
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                >
                  <option value="">Select project type</option>
                  <option value="web-platform">Web Platform Development</option>
                  <option value="mobile-app">Mobile Application</option>
                  <option value="digital-transformation">Digital Transformation</option>
                  <option value="ui-ux-design">UI/UX Design</option>
                  <option value="consulting">Strategic Consulting</option>
                </select>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Project Budget
                </label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                >
                  <option value="">Select budget range</option>
                  <option value="10k-25k">$10,000 - $25,000</option>
                  <option value="25k-50k">$25,000 - $50,000</option>
                  <option value="50k-100k">$50,000 - $100,000</option>
                  <option value="100k+">$100,000+</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Timeline
                </label>
                <select
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                >
                  <option value="">Select timeline</option>
                  <option value="asap">ASAP</option>
                  <option value="1-3-months">1-3 months</option>
                  <option value="3-6-months">3-6 months</option>
                  <option value="6-12-months">6-12 months</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Project Details *
              </label>
              <textarea
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                placeholder="Describe your project goals, challenges, and requirements..."
              />
            </div>
            
            <Button type="submit" size="lg" className="w-full group" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <LoadingSpinner size="sm" className="mr-2" />
                  Sending...
                </>
              ) : (
                <>
                  Send Project Brief
                  <Send size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </Button>
            
            {submitted && (
              <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800 font-medium">Thank you! We'll be in touch within 24 hours.</p>
              </div>
            )}
          </form>
        </motion.div>
        
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              What Happens Next?
            </h3>
            
            <div className="space-y-4">
              {[
                {
                  step: '1',
                  title: 'Initial Review',
                  description: 'We review your project brief and conduct preliminary research within 24 hours.'
                },
                {
                  step: '2',
                  title: 'Strategy Call',
                  description: 'Schedule a 60-minute consultation to discuss your goals and explore solutions.'
                },
                {
                  step: '3',
                  title: 'Custom Proposal',
                  description: 'Receive a detailed project proposal with timeline, deliverables, and investment.'
                }
              ].map((item) => (
                <div key={item.step} className="flex items-start">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-blue-50 rounded-2xl p-8">
            <div className="flex items-center mb-4">
              <CheckCircle size={24} className="text-green-500 mr-3" />
              <h4 className="font-bold text-gray-900">Commitment-Free Consultation</h4>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Our initial consultation is completely free with no obligations. We'll provide 
              valuable insights regardless of whether we work together.
            </p>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}

export default ContactForm