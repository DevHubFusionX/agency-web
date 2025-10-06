import { useState } from 'react'
import { ChevronDown, Plus, Minus } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Section from '../ui/Section'
import Button from '../ui/Button'
import { faqData } from '../../data/faqData'

const FAQAccordion = () => {
  const [openItems, setOpenItems] = useState(new Set([1]))
  const [selectedCategory, setSelectedCategory] = useState('All')
  
  const categories = ['All', 'Services', 'Technology', 'Timeline', 'Pricing', 'Process', 'Support']
  
  const filteredFAQs = selectedCategory === 'All' 
    ? faqData 
    : faqData.filter(item => item.category === selectedCategory)

  const toggleItem = (id) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id)
    } else {
      newOpenItems.add(id)
    }
    setOpenItems(newOpenItems)
  }

  return (
    <Section>
      <div className="mb-12">
        <div className="flex flex-wrap gap-4 justify-center">
          {categories.map(category => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category)}
              className="px-6"
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="space-y-4">
          {filteredFAQs.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {item.question}
                </h3>
                <div className="flex-shrink-0">
                  {openItems.has(item.id) ? (
                    <Minus className="w-5 h-5 text-blue-600" />
                  ) : (
                    <Plus className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </button>
              
              <AnimatePresence>
                {openItems.has(item.id) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4">
                      <p className="text-gray-600 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default FAQAccordion