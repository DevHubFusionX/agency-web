import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Linkedin, Twitter } from 'lucide-react'
import Section from '../ui/Section'

const ContactInfo = () => {
  return (
    <Section background="none" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-[2rem] p-10 shadow-xl shadow-blue-500/5 border border-gray-100 flex flex-col h-full"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-8 px-1">Channels</h3>

            <div className="space-y-8 flex-grow">
              <div className="flex items-start group">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mr-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <Mail size={22} className="text-blue-600 group-hover:text-white" />
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-1">Direct Email</h4>
                  <p className="text-gray-900 font-bold text-lg mb-1">hello@nemvol.com</p>
                  <p className="text-sm text-gray-500 font-medium italic">Response in &lt; 4 hours</p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mr-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <Linkedin size={22} className="text-blue-600 group-hover:text-white" />
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-1">LinkedIn</h4>
                  <p className="text-gray-900 font-bold text-lg mb-1">Nemvol Studio</p>
                  <p className="text-sm text-gray-500 font-medium">Daily product strategy tips</p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mr-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <MapPin size={22} className="text-blue-600 group-hover:text-white" />
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-1">HQ Location</h4>
                  <p className="text-gray-900 font-bold text-lg mb-1">Lagos, Nigeria</p>
                  <p className="text-sm text-gray-500 font-medium">Pan-African Operations</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Availability */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-[2rem] p-10 shadow-xl shadow-blue-500/5 border border-gray-100 flex flex-col h-full"
          >
            <div className="flex items-center mb-8 px-1">
              <Clock size={20} className="text-blue-600 mr-3" />
              <h3 className="text-xl font-bold text-gray-900">Availability</h3>
            </div>

            <div className="space-y-4 mb-8 flex-grow">
              {[
                { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
                { day: 'Saturday', hours: '10:00 AM - 2:00 PM' },
                { day: 'Sunday', hours: 'Team Resting' }
              ].map((schedule) => (
                <div key={schedule.day} className="flex justify-between items-center py-4 border-b border-gray-50 last:border-b-0">
                  <span className="font-bold text-gray-900 text-sm">{schedule.day}</span>
                  <span className="text-gray-400 text-sm font-bold uppercase tracking-widest">{schedule.hours}</span>
                </div>
              ))}
            </div>

            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
              <p className="text-sm text-gray-600 font-medium leading-relaxed">
                <strong className="text-blue-600">Client Support:</strong> Existing partners have 24/7 access to our dedicated emergency Slack channels.
              </p>
            </div>
          </motion.div>

          {/* Quick FAQ */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-[2rem] p-10 shadow-xl shadow-blue-500/5 border border-gray-100 flex flex-col h-full"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-8 px-1">Quick Clarity</h3>

            <div className="space-y-8">
              {[
                {
                  q: 'Is the consultation really free?',
                  a: 'Yes. Our goal is to see if we are the right fit for your vision.'
                },
                {
                  q: 'What should I prepare?',
                  a: 'Just your vision. If you have wireframes or a brief, even better.'
                },
                {
                  q: 'Do you work globally?',
                  a: 'Yes. We work with founders across Africa, US, and Europe remotely.'
                }
              ].map((faq, index) => (
                <div key={index} className="space-y-2">
                  <h4 className="font-bold text-gray-900 text-sm flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                    {faq.q}
                  </h4>
                  <p className="text-gray-500 text-sm font-medium leading-relaxed ml-3.5 italic">{faq.a}</p>
                </div>
              ))}
            </div>

            <div className="mt-auto pt-10">
              <p className="text-xs font-black uppercase tracking-widest text-gray-300 text-center">Nemvol Studio © 2024</p>
            </div>
          </motion.div>

        </div>
      </div>
    </Section>
  )
}

export default ContactInfo
