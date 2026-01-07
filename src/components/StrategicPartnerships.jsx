import { motion } from 'framer-motion'
import Section from './ui/Section'

const StrategicPartnerships = () => {
  return (
    <Section className="py-24 md:py-32 relative overflow-hidden bg-white">
      {/* Background Decorative Text */}
      <div className="absolute top-20 right-10 opacity-[0.03] pointer-events-none select-none uppercase font-black text-[12vw] whitespace-nowrap leading-none tracking-tighter text-right">
        Nemvol <br /> Partners
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-black uppercase tracking-[0.2em] mb-8"
            >
              Collaborations
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-8xl font-bold text-gray-900 leading-[0.9] tracking-tight"
            >
              Strategic <br />
              <span className="text-blue-600 italic">Partnerships.</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:pt-20"
          >
            <p className="text-xl md:text-2xl text-gray-500 max-w-xl leading-relaxed font-medium">
              We help companies build powerful web and mobile applications that scale with their growth. From high-growth startups to market incumbents.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { name: "FinanceFlow", sector: "FinTech Mobile App", logo: "FF" },
            { name: "ShopStream", sector: "E-commerce Platform", logo: "SS" },
            { name: "HealthTech", sector: "Healthcare Solution", logo: "HT" },
            { name: "EduLearn", sector: "EdTech Platform", logo: "EL" }
          ].map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-xl shadow-gray-100/50 hover:shadow-2xl transition-all duration-500 text-center group"
            >
              <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center text-white font-black text-2xl mx-auto mb-6 shadow-lg shadow-blue-100 transition-transform group-hover:scale-110">
                {partner.logo}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 tracking-tight">{partner.name}</h3>
              <p className="text-xs font-black uppercase tracking-widest text-gray-400">{partner.sector}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default StrategicPartnerships