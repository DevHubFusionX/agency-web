import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const pricingData = [
  {
    name: 'STARTER',
    price: '₦10,000',
    description: 'Everything you need to launch.',
    features: [
      'Nemvol Product Suite Access',
      'Free Nemvol sub-domain',
      'Payment gateway setup',
      'Mobile-friendly interface',
      'Standard support'
    ],
    buttonText: 'Start Building',
    isPopular: false
  },
  {
    name: 'GROWTH',
    price: '₦15,000',
    description: 'Best for growing brands.',
    features: [
      'Everything in Starter',
      'Custom Domain Name Included',
      'Abandoned Cart Recovery',
      'Unlimited Orders',
      'Inventory Management'
    ],
    buttonText: 'Most Recommended',
    isPopular: true
  },
  {
    name: 'PREMIUM',
    price: '₦25,000',
    description: 'For scaling infrastructure.',
    features: [
      'Everything in Growth',
      'VIP Priority Support',
      'Advanced Sales Analytics',
      'Dedicated Account Manager',
      'Automated Invoicing'
    ],
    buttonText: 'Scale Now',
    isPopular: false
  },
  {
    name: 'ENTERPRISE',
    price: 'Custom',
    description: 'For large-scale platforms.',
    features: [
      'Full Ecosystem Access',
      'White-label options',
      'API & Webhook Access',
      'Custom Integrations',
      '24/7 Phone Support'
    ],
    buttonText: 'Talk to Sales',
    isPopular: false
  }
]

const PricingSection = () => {
  return (
    <section className="py-24 md:py-32 bg-[#fafafa] relative overflow-hidden" id="pricing">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-20 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl lg:text-[4rem] font-bold text-gray-900 tracking-tight mb-4"
          >
            Simple, transparent pricing.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-lg text-gray-500 font-medium"
          >
            Join thousands of businesses already running on Nemvol.
          </motion.p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 xl:gap-8 items-start max-w-lg md:max-w-none mx-auto">
          {pricingData.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`relative flex flex-col bg-white rounded-[2rem] p-8 md:p-10 h-full ${
                tier.isPopular 
                  ? 'border-2 border-[#0a5c36] shadow-[0_20px_60px_-15px_rgba(10,92,54,0.15)] z-10 lg:-translate-y-4' 
                  : 'border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-gray-200/50 transition-shadow duration-300'
              }`}
            >
              {/* Popular Badge */}
              {tier.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#0a5c36] text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full whitespace-nowrap">
                  Most Recommended
                </div>
              )}

              {/* Tier Info */}
              <div className="mb-8">
                <h3 className="text-gray-400 text-xs font-black uppercase tracking-widest mb-4">
                  {tier.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
                    {tier.price}
                  </span>
                  {tier.price !== 'Custom' && (
                    <span className="text-sm font-medium text-gray-400">/mo</span>
                  )}
                </div>
                <p className="text-sm text-gray-500 font-medium h-10">
                  {tier.description}
                </p>
              </div>

              {/* Features List */}
              <ul className="flex-1 space-y-4 mb-8">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check size={16} className="text-[#0a5c36] flex-shrink-0 mt-0.5" strokeWidth={3} />
                    <span className="text-sm text-gray-600 font-medium leading-tight">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                className={`w-full py-4 px-6 rounded-2xl text-sm font-bold transition-all duration-300 flex items-center justify-center ${
                  tier.isPopular
                    ? 'bg-[#0a5c36] hover:bg-[#08482a] text-white shadow-lg shadow-green-900/20'
                    : 'bg-black hover:bg-gray-800 text-white'
                }`}
              >
                {tier.buttonText}
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default PricingSection
