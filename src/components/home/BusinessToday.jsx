import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  MessageCircle, 
  Landmark, 
  Bike, 
  AlertCircle,
  Clock, 
  CheckCircle2, 
  Sparkles,
  Terminal,
  Copy,
  ChevronRight,
  TrendingDown
} from 'lucide-react'

// Tab content for the terminal snippet
const terminalSnippets = {
  WhatsApp: {
    command: 'copy --from whatsapp-chat --to excel',
    output: [
      '✓ Extracted: Customer name "Amina"',
      '✓ Extracted: Address "12, Admiralty Way, Lekki"',
      '⚠ Warning: Item "blue dress" matches multiple SKUs',
      '⚠ Action: Manual catalog check required'
    ]
  },
  Bank: {
    command: 'verify --transfer "₦15,000"',
    output: [
      '⚠ Search: Multiple transfers found for ₦15,000',
      '⚠ Pending: Manual bank statement match required',
      '✗ Alert: Delivery held up for 2.5 hours'
    ]
  },
  Excel: {
    command: 'check --stock "SKU-402"',
    output: [
      '✓ Searching inventory records...',
      '✗ Inventory Conflict: Excel says 2, physical count is 0',
      '✗ Error: Over-sold item to customer #302'
    ]
  },
  Logistics: {
    command: 'ping --rider "Babatunde"',
    output: [
      '⚠ Connect: Attempting to call Babatunde...',
      '⚠ Timeout: Rider Babatunde did not answer the phone',
      '⚠ Status: Customer Amina is calling for delivery status'
    ]
  }
}

const BusinessToday = () => {
  const [activeTab, setActiveTab] = useState('WhatsApp')
  const [isCopied, setIsCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(terminalSnippets[activeTab].command)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }

  return (
    <section className="py-24 md:py-32 bg-white" id="the-problem">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Main Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Headline, Subtext, Code Snippet Box, Docs Button */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <motion.h2 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 leading-[1.05] tracking-tight"
              >
                The Fragmented Reality. <br />
                What business feels like today.
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-lg text-gray-500 leading-relaxed font-medium"
              >
                You're working too hard because your tools don't talk to each other. It's slow, messy, and you're losing money in the gaps.
              </motion.p>
            </div>

            {/* Code / Command Tabs Component */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="border border-gray-100 rounded-3xl shadow-xl shadow-gray-200/30 overflow-hidden bg-white"
            >
              {/* Tab Header Bar */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-gray-50 bg-[#fafafa]">
                <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-hide pr-4">
                  {Object.keys(terminalSnippets).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-black uppercase tracking-wider transition-colors duration-200 ${
                        activeTab === tab 
                          ? 'text-gray-900 bg-white border border-gray-200/80 shadow-sm' 
                          : 'text-gray-400 hover:text-gray-600'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
                
                <button 
                  onClick={handleCopy}
                  className="p-2 text-gray-400 hover:text-gray-600 transition-colors rounded-lg hover:bg-white"
                >
                  <Copy size={14} className={isCopied ? 'text-emerald-500' : ''} />
                </button>
              </div>

              {/* Terminal Box Body */}
              <div className="p-6 font-mono text-xs sm:text-sm bg-white min-h-[170px] flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-gray-400 mb-4 select-none">
                    <span className="text-gray-300">$</span>
                    <span className="text-gray-800 font-semibold">{terminalSnippets[activeTab].command}</span>
                  </div>
                  
                  <div className="space-y-2">
                    {terminalSnippets[activeTab].output.map((line, idx) => (
                      <div 
                        key={idx} 
                        className={
                          line.startsWith('✓') 
                            ? 'text-emerald-600 font-semibold' 
                            : line.startsWith('✗') 
                            ? 'text-red-500 font-semibold' 
                            : 'text-amber-500 font-semibold'
                        }
                      >
                        {line}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-gray-50 mt-6 text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                  <span>Terminal process</span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                    Warning status
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Read Docs Button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <a 
                href="#contact"
                className="inline-block bg-black text-white px-8 py-4 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-gray-800 hover:shadow-xl transition-all duration-300"
              >
                Eliminate the Friction
              </a>
            </motion.div>
          </div>

          {/* Right Column: Key Issues List (inspired by Rerun.io features layout) */}
          <div className="lg:col-span-6 space-y-12">
            
            {/* Header Handle */}
            <div className="flex items-center justify-between pb-4 border-b border-gray-100">
              <span className="text-[11px] font-black uppercase tracking-[0.2em] text-gray-400">@nemvol/system-chaos</span>
              <span className="flex items-center gap-1 bg-red-50 border border-red-100 text-red-600 px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-widest">
                <AlertCircle size={10} />
                5.0 Friction
              </span>
            </div>

            {/* List of 3 Key Items */}
            <div className="space-y-8">
              
              {/* Item 1 */}
              <div className="flex gap-6 items-start">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-[#ff5e62] via-[#ff9966] to-[#3a7bd5] flex items-center justify-center text-white shadow-lg shrink-0">
                  <MessageCircle size={28} />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xs font-black uppercase tracking-widest text-gray-400">WhatsApp & DM Silos</h3>
                  <h4 className="text-lg font-bold text-gray-900">Lost in chats. Unanswered DMs.</h4>
                  <p className="text-sm text-gray-500 leading-relaxed font-medium">
                    Customers lose interest and walk away while your staff is bogged down manually copy-pasting shipping details.
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex gap-6 items-start">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-[#11998e] via-[#38ef7d] to-[#ffe259] flex items-center justify-center text-white shadow-lg shrink-0">
                  <Landmark size={28} />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xs font-black uppercase tracking-widest text-gray-400">Manual verification</h3>
                  <h4 className="text-lg font-bold text-gray-900">Reconciling bank transfers manually.</h4>
                  <p className="text-sm text-gray-500 leading-relaxed font-medium">
                    Deliveries are held up waiting for finance to verify payments. Continuous manual screenshot matches waste hours daily.
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex gap-6 items-start">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-[#2f80ed] via-[#56ccf2] to-[#f2c94c] flex items-center justify-center text-white shadow-lg shrink-0">
                  <Bike size={28} />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xs font-black uppercase tracking-widest text-gray-400">Logistics overhead</h3>
                  <h4 className="text-lg font-bold text-gray-900">Calling riders, chasing updates.</h4>
                  <p className="text-sm text-gray-500 leading-relaxed font-medium">
                    Negotiating delivery prices over calls while keeping manual ledger records that are perpetually out of sync with actual stock.
                  </p>
                </div>
              </div>

            </div>

            {/* Bottom section: Real-World Consequences (resembling Open Source Stewardship) */}
            <div className="space-y-4 pt-8 border-t border-gray-100">
              <div className="space-y-1">
                <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-gray-400">Real-world overhead</h3>
                <p className="text-xs text-gray-400 font-medium leading-relaxed">
                  The actual, day-to-day friction of scaling your operations with disconnected software.
                </p>
              </div>

              {/* Consequences Ledger list */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors duration-200 border border-gray-100/50">
                  <div className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-red-50 text-red-500 flex items-center justify-center font-bold text-xs">!</span>
                    <span className="font-mono text-xs text-gray-600">whatsapp/chat</span>
                    <span className="text-xs text-gray-400">›</span>
                    <span className="text-xs font-bold text-gray-800">Amina: "Is my order sent yet?"</span>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-red-500">Unresolved</span>
                </div>
                
                <div className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors duration-200 border border-gray-100/50">
                  <div className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-red-50 text-red-500 flex items-center justify-center font-bold text-xs">!</span>
                    <span className="font-mono text-xs text-gray-600">bank/transfer</span>
                    <span className="text-xs text-gray-400">›</span>
                    <span className="text-xs font-bold text-gray-800">Lookup transfer verification</span>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-500">Manual hold</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors duration-200 border border-gray-100/50">
                  <div className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-red-50 text-red-500 flex items-center justify-center font-bold text-xs">!</span>
                    <span className="font-mono text-xs text-gray-600">excel/sheet</span>
                    <span className="text-xs text-gray-400">›</span>
                    <span className="text-xs font-bold text-gray-800">Mismatched quantity (SKU-402)</span>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-red-500">Out of sync</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default BusinessToday
