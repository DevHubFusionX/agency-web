import { useState } from 'react'
import { Plus, Minus, Search } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Section from '../ui/Section'
import { faqData } from '../../data/faqData'

const FAQAccordion = () => {
  const [openItems, setOpenItems] = useState(new Set([1]))
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const categories = ['All', 'MVP Strategy', 'Productized Services', 'Timelines', 'Pricing', 'IP & Partnership']

  const filteredFAQs = faqData.filter(item => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory
    const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

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
    <Section className="pb-32 bg-gray-50/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">

          {/* Sidebar / Categories */}
          <div className="lg:w-1/4 lg:sticky lg:top-32 h-fit">
            <div className="mb-8 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search questions..."
                className="w-full pl-12 pr-4 py-3 bg-white border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm font-medium shadow-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-4 px-4">Categories</p>
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold transition-all duration-300 flex items-center justify-between group ${selectedCategory === category
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-200'
                      : 'text-gray-500 hover:bg-white hover:shadow-sm hover:text-blue-600'
                    }`}
                >
                  {category}
                  {selectedCategory === category && (
                    <motion.div layoutId="activeCat" className="w-1.5 h-1.5 rounded-full bg-white" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Accordion List */}
          <div className="lg:w-3/4">
            <div className="space-y-4">
              <AnimatePresence mode="popLayout">
                {filteredFAQs.map((item, index) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className={`bg-white rounded-[1.5rem] border transition-all duration-500 ${openItems.has(item.id)
                        ? 'border-blue-200 shadow-xl shadow-blue-500/5'
                        : 'border-gray-100 shadow-sm hover:shadow-md hover:border-blue-100'
                      }`}
                  >
                    <button
                      onClick={() => toggleItem(item.id)}
                      className="w-full px-8 py-6 text-left flex items-center justify-between gap-6"
                    >
                      <h3 className={`text-lg md:text-xl font-bold transition-colors duration-300 ${openItems.has(item.id) ? 'text-blue-600' : 'text-gray-900'
                        }`}>
                        {item.question}
                      </h3>
                      <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${openItems.has(item.id) ? 'bg-blue-600 rotate-180' : 'bg-gray-50'
                        }`}>
                        {openItems.has(item.id) ? (
                          <Minus className="w-5 h-5 text-white" />
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
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-8 pb-8 pt-0">
                            <div className="h-px w-full bg-gray-100 mb-6" />
                            <p className="text-gray-600 leading-relaxed text-base font-medium">
                              {item.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </AnimatePresence>

              {filteredFAQs.length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-20 px-8 bg-white rounded-3xl border border-dashed border-gray-200"
                >
                  <p className="text-gray-500 font-bold mb-4">No results found for your search.</p>
                  <button
                    onClick={() => { setSelectedCategory('All'); setSearchQuery('') }}
                    className="text-blue-600 font-black uppercase tracking-widest text-xs hover:underline"
                  >
                    Reset Filters
                  </button>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default FAQAccordion