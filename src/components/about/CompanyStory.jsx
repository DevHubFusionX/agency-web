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
    <Section className="py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:sticky lg:top-32"
        >
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight"
          >
            The Nemvol Story
          </motion.h2>
          <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              We didn't start as an agency. We started as builders. Engineers obsessed with
              creating software that actually <span className="text-gray-900 font-medium">works</span>—elegant,
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
          <div className="space-y-8">
            {milestones.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                className="relative pl-8 border-l-2 border-gray-100 hover:border-blue-600 transition-colors duration-300 group"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gray-100 group-hover:bg-blue-600 transition-colors duration-300"></div>
                <div className="text-sm font-bold text-blue-600 mb-1">{item.year}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  )
}

export default CompanyStory