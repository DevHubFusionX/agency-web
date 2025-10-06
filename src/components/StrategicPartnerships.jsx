import { motion } from 'framer-motion'
import Section from './ui/Section'

const StrategicPartnerships = () => {
  return (
    <Section background="gray" className="py-20">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
        >
          Trusted by Growing Companies
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl text-gray-600 max-w-3xl mx-auto"
        >
          From startups to established businesses, we help companies build powerful web and mobile applications that scale with their growth.
        </motion.p>
      </div>
      
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { name: "FinanceFlow", sector: "FinTech Mobile App", logo: "FF" },
          { name: "ShopStream", sector: "E-commerce Platform", logo: "SS" },
          { name: "HealthTech Pro", sector: "Healthcare Apps", logo: "HP" },
          { name: "EduLearn", sector: "EdTech Platform", logo: "EL" }
        ].map((partner, index) => (
          <motion.div
            key={partner.name}
            initial={{ opacity: 0, y: 30, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 text-center group"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 group-hover:scale-105 transition-transform">
              {partner.logo}
            </div>
            <h3 className="font-bold text-gray-900 mb-2">{partner.name}</h3>
            <p className="text-sm text-gray-600">{partner.sector}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

export default StrategicPartnerships