import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Store, Briefcase, TrendingUp, Building2 } from 'lucide-react'

const tabData = [
  {
    id: 'market-sellers',
    label: 'Market sellers',
    icon: Store,
    title: 'Market sellers',
    subtitle: 'Perfect for vendors and traders',
    features: [
      'Accept orders via WhatsApp',
      'Track inventory in real-time',
      'Process payments instantly',
      'Manage multiple customers'
    ]
  },
  {
    id: 'service-pros',
    label: 'Service professionals',
    icon: Briefcase,
    title: 'Service professionals',
    subtitle: 'Ideal for freelancers and consultants',
    features: [
      'Automated invoicing & billing',
      'Client management dashboard',
      'Secure contract sharing',
      'Fast payout processing'
    ]
  },
  {
    id: 'smes',
    label: 'Growing SMEs',
    icon: TrendingUp,
    title: 'Growing SMEs',
    subtitle: 'Built for scaling operations',
    features: [
      'Multi-user access controls',
      'Advanced sales analytics',
      'Payroll and expense management',
      'API integrations'
    ]
  },
  {
    id: 'enterprise',
    label: 'Large enterprise',
    icon: Building2,
    title: 'Large enterprise',
    subtitle: 'Custom solutions for high volume',
    features: [
      'Dedicated account management',
      'Custom workflow automation',
      'White-label options',
      'Volume-based pricing'
    ]
  }
];

const BuiltForEveryBusiness = () => {
  const [activeTab, setActiveTab] = useState(tabData[0].id)

  const activeData = tabData.find(t => t.id === activeTab)
  const ActiveIcon = activeData.icon

  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden" id="built-for-every-business">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6"
          >
            Built for Every Business
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-400 font-medium max-w-2xl mx-auto"
          >
            From solo entrepreneurs to large enterprises, Nemvol adapts to your needs.
          </motion.p>
        </div>

        {/* Tabs Navigation */}
        <div className="flex flex-nowrap md:flex-wrap items-center justify-start md:justify-center gap-3 overflow-x-auto pb-4 md:pb-0 mb-12 scrollbar-hide">
          {tabData.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 whitespace-nowrap ${
                  isActive 
                    ? 'bg-[#0a5c36] text-white shadow-md' 
                    : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
                }`}
              >
                <Icon size={16} className={isActive ? 'text-white' : 'text-gray-400'} />
                {tab.label}
              </button>
            )
          })}
        </div>

        {/* Dynamic Content Card */}
        <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] p-8 md:p-16 relative min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="flex flex-col h-full"
            >
              {/* Card Header */}
              <div className="mb-10">
                <div className="mb-6">
                  <ActiveIcon size={48} strokeWidth={1.5} className="text-gray-900" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 tracking-tight">
                  {activeData.title}
                </h3>
                <p className="text-blue-400 font-medium text-lg">
                  {activeData.subtitle}
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 mt-auto">
                {activeData.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0a5c36] flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  )
}

export default BuiltForEveryBusiness
