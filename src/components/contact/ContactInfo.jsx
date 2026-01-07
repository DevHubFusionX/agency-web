import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Linkedin, Twitter } from 'lucide-react'
import Section from '../ui/Section'

const ContactInfo = () => {
  return (
    <Section background="gray" className="py-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Details */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-6">Get in Touch</h3>

          <div className="space-y-6">
            <div className="flex items-start">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                <Mail size={20} className="text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                <p className="text-blue-600 font-medium">hello@agency.com</p>
                <p className="text-sm text-gray-500">Response within 4 hours</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                <Phone size={20} className="text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                <p className="text-blue-600 font-medium">+1 (555) 123-4567</p>
                <p className="text-sm text-gray-500">Mon-Fri, 9AM-6PM EST</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                <MapPin size={20} className="text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Office</h4>
                <p className="text-gray-700">123 Business Ave</p>
                <p className="text-gray-700">New York, NY 10001</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-100 mt-8 pt-6">
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-gray-100 hover:bg-blue-100 rounded-lg flex items-center justify-center transition-colors"
              >
                <Linkedin size={18} className="text-gray-600 hover:text-blue-600" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-100 hover:bg-blue-100 rounded-lg flex items-center justify-center transition-colors"
              >
                <Twitter size={18} className="text-gray-600 hover:text-blue-600" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Office Hours */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
        >
          <div className="flex items-center mb-6">
            <Clock size={24} className="text-blue-600 mr-3" />
            <h3 className="text-xl font-bold text-gray-900">Office Hours</h3>
          </div>

          <div className="space-y-3">
            {[
              { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
              { day: 'Saturday', hours: '10:00 AM - 2:00 PM' },
              { day: 'Sunday', hours: 'Closed' }
            ].map((schedule) => (
              <div key={schedule.day} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                <span className="font-medium text-gray-900">{schedule.day}</span>
                <span className="text-gray-600">{schedule.hours}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>Emergency Support:</strong> Available 24/7 for existing clients with critical issues.
            </p>
          </div>
        </motion.div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Answers</h3>

          <div className="space-y-4">
            {[
              {
                question: 'How long does a typical project take?',
                answer: 'Most projects range from 3-8 months depending on complexity and scope.'
              },
              {
                question: 'Do you work with startups?',
                answer: 'Yes, we work with organizations of all sizes, from startups to Fortune 500 companies.'
              },
              {
                question: 'What is your payment structure?',
                answer: 'We typically work with milestone-based payments, with 30% upfront and the remainder split across deliverables.'
              }
            ].map((faq, index) => (
              <div key={index} className="border-b border-gray-100 pb-4 last:border-b-0">
                <h4 className="font-semibold text-gray-900 mb-2 text-sm">{faq.question}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  )
}

export default ContactInfo