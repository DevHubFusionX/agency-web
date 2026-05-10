import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const WhyNemvol = () => {
  const reasons = [
    {
      title: "We Actually Plan It",
      description: "Most devs just code what you tell them. We research your market first to make sure your idea will actually make money."
    },
    {
      title: "Super Fast Launch",
      description: "Stop waiting half a year for a website. We use modern tools to build and launch your project in weeks, not months."
    },
    {
      title: "No Hidden Costs",
      description: "What we quote is exactly what you pay. No sneaky fees, and we never hold your project hostage for more money."
    },
    {
      title: "Built to Sell",
      description: "We don't just make it look pretty. Your site is wired perfectly from day one to handle ads, traffic, and secure payments."
    },
    {
      title: "You Own Everything",
      description: "No tricky vendor lock-ins. You get 100% full ownership of the code, designs, and data the moment we finish."
    },
    {
      title: "Grows With You",
      description: "Whether you have 10 customers today or 10,000 tomorrow, our tech handles your growth smoothly without breaking."
    }
  ]

  return (
    <section className="py-24 md:py-32 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl sm:text-6xl md:text-[7rem] font-black tracking-tighter leading-[0.9]"
          >
            <span className="block text-gray-900">Why</span>
            <span className="block text-blue-600/80">Nemvol?</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-8 text-lg md:text-xl text-gray-500 max-w-2xl mx-auto font-medium"
          >
            While standard agencies just give you a "website," Nemvol gives you a complete digital business. Here is why ambitious brands are switching.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-[2rem] p-8 md:p-10 shadow-lg shadow-gray-200/20 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-full bg-[#0056b8] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Check className="text-white w-5 h-5 stroke-[3]" />
              </div>
              <h3 className="text-xl font-extrabold text-gray-900 mb-4 tracking-tight">
                {reason.title}
              </h3>
              <p className="text-gray-500 leading-relaxed font-medium">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default WhyNemvol
