import { motion } from 'framer-motion'
import { Users, Award, Star } from 'lucide-react'
import Section from './ui/Section'

const ExcellenceMetrics = () => {
  return (
    <Section className="py-24 md:py-32 relative overflow-hidden bg-white">
      {/* Background Decorative Text */}
      <div className="absolute top-20 left-10 opacity-[0.03] pointer-events-none select-none uppercase font-black text-[12vw] whitespace-nowrap leading-none tracking-tighter">
        Nemvol Results
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
              Performance & Impact
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-8xl font-bold text-gray-900 leading-[0.9] tracking-tight"
            >
              Bridging the Gap to<br />
              <span className="text-blue-600 italic">Validated Success.</span>
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
              Nemvol is the sweet spot between freelancer chaos and large agency overheads. We eliminate feature bloat and delivery delays to focus on what matters: your traction.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              metric: "8-12 Wks",
              label: "Get to Market Fast",
              description: "We build your MVP quickly so you can start testing your idea with real users sooner.",
              icon: Users,
              highlight: false
            },
            {
              metric: "90%",
              label: "Proven Success Rate",
              description: "Most of our discovery phases lead directly to successful, high-growth product launches.",
              icon: Award,
              highlight: true
            },
            {
              metric: "100%",
              label: "You Own Everything",
              description: "Your code, your assets, your IP. We provide full transparency and total ownership transfer.",
              icon: Star,
              highlight: false
            }
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: [0.25, 0.4, 0.25, 1]
              }}
              className={`relative p-10 rounded-[2.5rem] border ${item.highlight
                ? 'bg-blue-600 border-blue-600 text-white shadow-2xl shadow-blue-200'
                : 'bg-white border-gray-100 shadow-xl shadow-gray-100'
                } group overflow-hidden`}
            >
              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 ${item.highlight ? 'bg-white/20' : 'bg-gray-50'
                  }`}>
                  <item.icon size={28} className={item.highlight ? 'text-white' : 'text-blue-600'} />
                </div>

                <div className="space-y-4">
                  <div className={`text-6xl md:text-7xl font-black tracking-tighter ${item.highlight ? 'text-white' : 'text-gray-900'
                    }`}>
                    {item.metric}
                  </div>
                  <div>
                    <h3 className={`text-xl font-bold mb-2 ${item.highlight ? 'text-white' : 'text-gray-900'
                      }`}>
                      {item.label}
                    </h3>
                    <p className={item.highlight ? 'text-blue-50' : 'text-gray-500'}>
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative accent for non-highlight cards */}
              {!item.highlight && (
                <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50/50 rounded-bl-[5rem] -mr-10 -mt-10 transition-transform group-hover:scale-110 pointer-events-none" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default ExcellenceMetrics