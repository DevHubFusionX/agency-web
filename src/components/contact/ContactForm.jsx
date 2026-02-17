import { motion } from 'framer-motion'
import { Calendar, ShieldCheck, Sparkles } from 'lucide-react'
import Section from '../ui/Section'
import FormInput from './base/FormInput'
import FormSelect from './base/FormSelect'
import FormTextarea from './base/FormTextarea'
import FormSubmit from './base/FormSubmit'
import FormStatus from './base/FormStatus'
import useContactForm from './hooks/useContactForm'

const ContactForm = () => {
  const { formData, isSubmitting, status, errorMessage, handleChange, handleSubmit } = useContactForm({
    name: '',
    email: '',
    projectType: '',
    message: ''
  }, '/api/email/contact')

  const projectOptions = [
    { value: 'new-mvp', label: 'New MVP (Build from scratch)' },
    { value: 'scaling', label: 'Scale Existing Product' },
    { value: 'discovery', label: 'Discovery & Validation' },
    { value: 'white-label', label: 'White-label Partnership' }
  ]

  return (
    <Section background="none" className="py-2 bg-gray-50/30">
      <div className="mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Form Side */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl md:rounded-[2.5rem] p-6 md:p-12 shadow-2xl shadow-blue-500/5 border border-gray-100"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Let's Build Your <span className="text-blue-600">MVP.</span>
              </h2>
              <p className="text-gray-500 mb-10 font-medium leading-relaxed">
                Fill out the form below and we'll reach out within 24 hours to schedule your free 30-minute strategy call.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormInput
                    label="Full Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. John Doe"
                  />
                  <FormInput
                    label="Work Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                  />
                </div>

                <FormSelect
                  label="What are we building?"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  options={projectOptions}
                />

                <FormTextarea
                  label="Your Primary Goal"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your idea and what you hope to achieve..."
                />

                <FormSubmit
                  isLoading={isSubmitting}
                  text="Book Consultation"
                  icon={Calendar}
                />

                <FormStatus
                  status={status}
                  successMessage="Consultation request sent! We'll talk soon."
                  errorMessage={errorMessage || "Something went wrong. Please try again or email us directly."}
                />
              </form>
            </motion.div>
          </div>

          {/* Value Side */}
          <div className="lg:col-span-5 pt-8 lg:pt-12">
            <div className="space-y-12">
              <div className="p-8 bg-blue-600 rounded-[2rem] text-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-white/20 transition-colors duration-500" />
                <h4 className="text-xl text-white font-bold mb-3 relative z-10">No Commitment.</h4>
                <p className="text-blue-50/80 text-sm font-medium leading-relaxed relative z-10">
                  Our discovery calls are 100% free. You'll walk away with actionable insights and a clear strategy, even if we don't work together.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </Section>
  )
}

export default ContactForm