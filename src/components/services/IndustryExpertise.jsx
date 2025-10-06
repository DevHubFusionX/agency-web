import { motion } from 'framer-motion'
import { Building2, Heart, Building, ShoppingCart } from 'lucide-react'
import Section from '../ui/Section'

const IndustryExpertise = () => {
  return (
    <Section className="py-20">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
        >
          App Types We Specialize In
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl text-gray-600 max-w-3xl mx-auto"
        >
          We have experience building different types of web and mobile applications 
          across various industries with specific requirements and user needs.
        </motion.p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            industry: 'E-commerce Apps',
            icon: ShoppingCart,
            expertise: ['Payment Integration', 'Product Catalogs', 'Shopping Carts', 'Order Management'],
            clients: '25+ E-commerce Apps'
          },
          {
            industry: 'FinTech Apps',
            icon: Building2,
            expertise: ['Secure Payments', 'Banking APIs', 'Financial Data', 'Compliance'],
            clients: '15+ FinTech Apps'
          },
          {
            industry: 'Healthcare Apps',
            icon: Heart,
            expertise: ['HIPAA Compliance', 'Patient Portals', 'Telemedicine', 'Medical Records'],
            clients: '12+ Healthcare Apps'
          },
          {
            industry: 'SaaS Platforms',
            icon: Building,
            expertise: ['Multi-tenancy', 'Subscription Billing', 'User Management', 'Analytics'],
            clients: '20+ SaaS Platforms'
          }
        ].map((sector, index) => (
          <motion.div
            key={sector.industry}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 text-center group"
          >
            <div className="w-16 h-16 bg-blue-100 group-hover:bg-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-colors duration-300">
              <sector.icon size={32} className="text-blue-600" />
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              {sector.industry}
            </h3>
            
            <div className="space-y-2 mb-6">
              {sector.expertise.map((skill, i) => (
                <div key={i} className="text-sm text-gray-600">
                  {skill}
                </div>
              ))}
            </div>
            
            <div className="border-t border-gray-100 pt-4">
              <p className="text-sm font-medium text-blue-600">{sector.clients}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

export default IndustryExpertise