import { motion } from 'framer-motion'

const LogoRow = ({ title, logos }) => (
  <div className="py-12 border-b border-gray-50 last:border-0">
    <motion.h3 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] text-gray-400 mb-12"
    >
      {title}
    </motion.h3>
    <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 hover:opacity-100 transition-opacity duration-500">
      {logos.map((logo, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, filter: 'grayscale(100%)' }}
          whileInView={{ opacity: 1 }}
          whileHover={{ filter: 'grayscale(0%)', scale: 1.05 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="flex items-center gap-3 cursor-default group"
        >
          {logo.icon && <logo.icon className="text-gray-900 group-hover:text-blue-600 transition-colors" size={logo.size || 24} />}
          <span className={`text-sm md:text-base font-black uppercase tracking-tighter text-gray-900 group-hover:text-blue-600 transition-colors ${logo.className || ''}`}>
            {logo.name}
          </span>
        </motion.div>
      ))}
    </div>
  </div>
)

const TrustSection = () => {
  const leaders = [
    { name: 'Pacific Holdings', className: 'font-sans' },
    { name: 'Greenlife Pharma', className: 'font-serif' },
    { name: 'Alpha Step Links', className: 'italic' },
    { name: 'Fashion Talent', className: 'font-serif tracking-widest' },
  ]

  const integrations = [
    { name: 'Shopify' },
    { name: 'WooCommerce' },
    { name: 'Wix' },
    { name: 'Paystack' },
    { name: 'Flutterwave' },
  ]

  return (
    <section className="bg-white py-16">
      <div className="max-w-[1200px] mx-auto px-6">
        <LogoRow 
          title="Trusted by infrastructure leaders" 
          logos={leaders} 
        />
        <LogoRow 
          title="Built to integrate with" 
          logos={integrations} 
        />
      </div>
    </section>
  )
}

export default TrustSection
