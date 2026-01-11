import { motion } from 'framer-motion'
import Section from '../ui/Section'

const CompanyStory = () => {
  const milestones = [
    {
      year: '2018',
      title: 'The Vision',
      description: 'Two engineers and a relentless ambition to build products that matter. Nemvol was born in a small apartment, fueled by coffee and conviction.'
    },
    {
      year: '2020',
      title: 'Mobile First',
      description: 'We shipped our first React Native app. 100k downloads in 3 months. The phone calls started coming in.'
    },
    {
      year: '2022',
      title: 'Scaling Up',
      description: 'A lean team of 8, now trusted by 15+ companies. We stopped chasing projects and started choosing partners.'
    },
    {
      year: '2024',
      title: 'Global Reach',
      description: 'Clients in 5 continents. Award-winning products. And we\'re just getting started. The best is yet to come.'
    }
  ]

  return (
    <Section className="py-24 md:py-32 relative overflow-hidden bg-white">
      {/* Decorative Background Text */}
      <div className="absolute top-20 right-10 opacity-[0.03] pointer-events-none select-none uppercase font-black text-[12vw] whitespace-nowrap leading-none tracking-tighter">
        Our Journey
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:sticky lg:top-32"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-black uppercase tracking-[0.2em] mb-8"
            >
              The Nemvol Story
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-8xl font-bold text-gray-900 leading-[0.9] tracking-tight mb-12"
            >
              Builders at <br />
              <span className="text-blue-600 italic">Heart.</span>
            </motion.h2>

            <div className="space-y-6 text-gray-500 leading-relaxed text-xl md:text-2xl max-w-xl">
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                We didn't start as an agency. We started as builders. Engineers obsessed with
                creating software that actually <span className="text-gray-900 font-bold">works</span>—elegant,
                fast, and built to last.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Today, we're a studio of strategists, designers, and developers who believe
                great products are born from deep collaboration and relentless refinement.
              </motion.p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="space-y-12">
              {milestones.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                  className="relative pl-12 border-l-4 border-gray-100 hover:border-blue-600 transition-colors duration-500 group"
                >
                  <div className="absolute -left-[14px] top-0 w-6 h-6 rounded-full bg-white border-4 border-gray-100 group-hover:border-blue-600 transition-colors duration-500"></div>
                  <div className="text-2xl font-black text-blue-600 mb-2">{item.year}</div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">{item.title}</h3>
                  <p className="text-gray-500 text-lg leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  )
}

export default CompanyStory