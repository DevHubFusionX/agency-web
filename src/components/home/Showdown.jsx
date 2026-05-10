import { motion } from 'framer-motion'
import { CheckCircle2, X } from 'lucide-react'

const Showdown = () => {
  const comparisons = [
    {
      feature: "Strategy",
      nemvol: "Market & Revenue Focused",
      others: "Just writes code blindly"
    },
    {
      feature: "Delivery Speed",
      nemvol: "8-12 Weeks Guaranteed",
      others: "6+ Months of Delays"
    },
    {
      feature: "Ownership",
      nemvol: "100% IP & Code Ownership",
      others: "Locked into their platform"
    },
    {
      feature: "Pricing",
      nemvol: "Fixed, Predictable Quotes",
      others: "Endless Scope Creep"
    },
    {
      feature: "Post-Launch",
      nemvol: "Growth & Ads Optimized",
      others: "Handed off and abandoned"
    }
  ]

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight"
          >
            <span className="text-gray-900">The </span>
            <span className="text-blue-600">Showdown.</span>
          </motion.h2>
        </div>

        {/* Desktop Header Row */}
        <div className="hidden md:flex items-center px-8 pb-4 mb-4 text-xs font-black uppercase tracking-[0.2em] text-gray-400">
          <div className="w-1/4">Feature</div>
          <div className="w-2/4 text-blue-600">Nemvol</div>
          <div className="w-1/4">Typical Agencies</div>
        </div>

        {/* Comparison List */}
        <div className="space-y-4">
          {comparisons.map((item, index) => (
            <motion.div
              key={item.feature}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-[2rem] p-6 md:p-8 border border-gray-100 shadow-xl shadow-gray-200/20 hover:shadow-2xl hover:border-blue-100 hover:-translate-y-1 transition-all duration-300 flex flex-col md:flex-row md:items-center group"
            >
              {/* Feature Name */}
              <div className="w-full md:w-1/4 font-extrabold text-gray-900 text-lg mb-6 md:mb-0 pb-4 md:pb-0 border-b border-gray-100 md:border-none">
                {item.feature}
              </div>

              {/* Mobile Labels (Hidden on Desktop) */}
              <div className="flex md:hidden text-[10px] font-black uppercase tracking-widest text-blue-600 mb-2">
                Nemvol
              </div>

              {/* Nemvol Advantage */}
              <div className="w-full md:w-2/4 font-bold text-blue-600 flex items-center gap-3 text-lg md:text-xl mb-6 md:mb-0">
                <CheckCircle2 className="w-6 h-6 shrink-0 fill-blue-50 text-blue-600 group-hover:scale-110 transition-transform" />
                {item.nemvol}
              </div>

              {/* Mobile Labels (Hidden on Desktop) */}
              <div className="flex md:hidden text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2 mt-2">
                Typical Agencies
              </div>

              {/* Typical Agencies Disadvantage */}
              <div className="w-full md:w-1/4 font-semibold text-gray-400 flex items-center gap-3 text-base">
                <X className="w-5 h-5 shrink-0" />
                {item.others}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Showdown
