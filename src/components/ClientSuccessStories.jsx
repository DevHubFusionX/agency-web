import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import Section from './ui/Section'

const ClientSuccessStories = () => {
  return (
    <Section className="py-20">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
        >
          Client Success Stories
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl text-gray-600 max-w-3xl mx-auto"
        >
          See how we've helped businesses launch successful web and mobile applications that drive growth and user engagement.
        </motion.p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {[
          {
            quote: "Our React Native app launched flawlessly across iOS and Android. The team delivered exceptional code quality and the app has maintained a 4.8-star rating with over 100K downloads.",
            author: "Sarah Chen",
            title: "Product Manager",
            company: "FinanceFlow",
            industry: "FinTech Mobile App",
            results: "4.8⭐ rating, 100K+ downloads"
          },
          {
            quote: "The web application they built with React and Node.js handles 50K+ daily users seamlessly. Performance is incredible and our conversion rates increased by 180%.",
            author: "Marcus Rodriguez",
            title: "CTO",
            company: "ShopStream",
            industry: "E-commerce Platform",
            results: "180% conversion increase"
          },
          {
            quote: "They delivered both our patient portal web app and mobile app on time and under budget. The HIPAA-compliant solution serves 25K+ patients with 99.9% uptime.",
            author: "Dr. Emily Watson",
            title: "Chief Medical Officer",
            company: "HealthTech Pro",
            industry: "Healthcare Apps",
            results: "99.9% uptime, 25K+ users"
          }
        ].map((testimonial, index) => (
          <motion.div
            key={testimonial.author}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
          >
            <div className="mb-6">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-current" />
                  ))}
                </div>
                <span className="ml-2 text-sm font-medium text-gray-600">{testimonial.results}</span>
              </div>
              <blockquote className="text-gray-700 leading-relaxed italic">
                "{testimonial.quote}"
              </blockquote>
            </div>
            
            <div className="border-t border-gray-100 pt-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  {testimonial.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.title}</p>
                  <p className="text-sm text-blue-600 font-medium">{testimonial.company}</p>
                  <p className="text-xs text-gray-500">{testimonial.industry}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

export default ClientSuccessStories