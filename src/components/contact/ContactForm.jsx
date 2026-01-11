import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react'
import Button from '../ui/Button'
import Section from '../ui/Section'
import LoadingSpinner from '../ui/LoadingSpinner'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
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
      console.log('Consultation Request:', formData)
      setSubmitted(true)
      setFormData({ name: '', email: '', projectType: '', message: '' })
    } catch (error) {
      console.error('Submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Section background="none" className="py-4 bg-gray-50/30">
      <div className=" mx-auto px-2 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Form Side */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-[1rem] md:rounded-[2.5rem] p-4 md:p-12 shadow-2xl shadow-blue-500/5 border border-gray-100"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Let's Build Your <span className="text-blue-600">MVP.</span>
              </h2>
              <p className="text-gray-500 mb-10 font-medium leading-relaxed">
                Fill out the form below and we'll reach out within 24 hours to schedule your free 30-minute strategy call.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-bold text-gray-900 placeholder:text-gray-300"
                      placeholder="e.g. John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Work Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-bold text-gray-900 placeholder:text-gray-300"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">What are we building?</label>
                  <select
                    name="projectType"
                    required
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-bold text-gray-900 appearance-none cursor-pointer"
                  >
                    <option value="">Select Project Type</option>
                    <option value="new-mvp">New MVP (Build from scratch)</option>
                    <option value="scaling">Scale Existing Product</option>
                    <option value="discovery">Discovery & Validation</option>
                    <option value="white-label">White-label Partnership</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Your Primary Goal</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-bold text-gray-900 placeholder:text-gray-300 resize-none text-sm md:text-base"
                    placeholder="Tell us about your idea and what you hope to achieve..."
                  />
                </div>

                <div className="pt-4">
                  <Button type="submit" size="lg" className="w-full h-14 md:h-16 rounded-2xl text-base md:text-lg font-black uppercase tracking-widest shadow-xl shadow-blue-500/20 group" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <LoadingSpinner size="sm" />
                    ) : (
                      <span className="flex items-center gap-3">
                        Book Consultation
                        <Calendar size={20} className="group-hover:rotate-12 transition-transform" />
                      </span>
                    )}
                  </Button>
                </div>

                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-3 p-4 bg-green-50 border border-green-100 rounded-2xl text-green-700 font-bold text-sm"
                  >
                    <CheckCircle2 size={20} />
                    Consultation request sent! We'll talk soon.
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>

          {/* Value Side */}
          <div className="lg:col-span-5 pt-8 lg:pt-12">
            <div className="space-y-12">
              <div className="p-8 bg-blue-600 rounded-[2rem] text-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-white/20 transition-colors duration-500" />
                <h4 className="text-xl font-bold mb-3 relative z-10">No Commitment.</h4>
                <p className="text-blue-50/80 text-sm font-medium leading-relaxed relative z-10">
                  Our discovery calls are 100% free. You'll walk away with actionable insights and a clear strategy, even if we don't work together.
                </p>
              </div>

              <div>
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-blue-600 mb-6 md:mb-8 px-1 text-center lg:text-left">Consultation Roadmap</h3>
                <div className="space-y-6 md:space-y-8">
                  {[
                    {
                      icon: Sparkles,
                      title: 'Requirement Audit',
                      desc: 'We analyze your idea and identify the core MVP features.'
                    },
                    {
                      icon: ShieldCheck,
                      title: 'Strategic Roadmap',
                      desc: 'Get a clear timeline and milestone breakdown for launch.'
                    },
                    {
                      icon: ArrowRight,
                      title: 'Investment Guide',
                      desc: 'A transparent breakdown of costs and resource allocation.'
                    }
                  ].map((step, i) => (
                    <motion.div
                      key={step.title}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + (i * 0.1) }}
                      className="flex flex-col sm:flex-row gap-4 sm:gap-6 group items-center sm:items-start text-center sm:text-left"
                    >
                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center justify-center flex-shrink-0 group-hover:border-blue-200 group-hover:bg-blue-50 transition-all duration-300">
                        <step.icon className="text-blue-600" size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">{step.title}</h4>
                        <p className="text-sm text-gray-500 font-medium leading-relaxed">{step.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </Section>
  )
}

export default ContactForm