import { useState, useEffect, memo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import retailImg from '../../assets/ecosystem-retail.png'
import startupImg from '../../assets/ecosystem-startup.png'
import shipImg from '../../assets/ecosystem-ship.png'

// Reusable text reveal component
const RevealLine = memo(({ children, delay = 0, className = "" }) => (
  <div className={`overflow-hidden inline-block ${className}`}>
    <motion.div
      initial={{ y: '120%' }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className="inline-block"
    >
      {children}
    </motion.div>
  </div>
));

const AnimatedShowcase = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [manualOverride, setManualOverride] = useState(false)

  useEffect(() => {
    let timer;
    if (!manualOverride) {
      timer = setInterval(() => {
        setCurrentStep((prev) => (prev + 1) % 4);
      }, 5000);
    }
    return () => clearInterval(timer);
  }, [manualOverride]);

  useEffect(() => {
    if (manualOverride) {
      const timeout = setTimeout(() => {
        setManualOverride(false);
      }, 10000);
      return () => clearTimeout(timeout);
    }
  }, [manualOverride, currentStep]);

  const handleManualClick = (step) => {
    setManualOverride(true);
    setCurrentStep(step);
  };

  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden" id="animated-showcase">
      <div className="max-w-[1000px] mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight"
          >
            See how Nemvol works
          </motion.h2>
        </div>

        {/* Dynamic Container */}
        <div className="relative w-full min-h-[550px] md:min-h-[600px] bg-blue-600 rounded-[2rem] md:rounded-[3rem] shadow-2xl shadow-blue-600/20 overflow-hidden mx-auto">
          
          <AnimatePresence mode="wait">
            
            {/* STATE 0: Left Text, Right Overflow Image */}
            {currentStep === 0 && (
              <motion.div
                key="step-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 flex flex-col md:flex-row w-full h-full"
              >
                <div className="w-full md:w-1/2 h-[45%] md:h-full flex items-center justify-center p-6 md:p-16 z-20">
                  <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.1] text-center md:text-left flex flex-col items-center md:items-start gap-1">
                    <RevealLine delay={0.1}>Running a</RevealLine>
                    <RevealLine delay={0.2}>business?</RevealLine>
                  </h3>
                </div>
                <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full md:w-1/2 h-[55%] md:h-full relative flex items-center justify-center md:justify-end overflow-hidden"
                >
                  {/* Faded Edges */}
                  <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-blue-600 to-transparent z-20 block md:hidden" />
                  <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-blue-600 to-transparent z-20 hidden md:block" />
                  
                  <img 
                    src={retailImg} 
                    className="absolute right-[-10%] md:right-[-15%] top-0 md:top-1/2 md:-translate-y-1/2 w-[120%] md:w-[130%] h-full md:h-auto max-w-none rounded-l-2xl object-cover object-left md:shadow-2xl" 
                    alt="Dashboard Overview"
                  />
                </motion.div>
              </motion.div>
            )}

            {/* STATE 1: Top Text, Bottom Centered Image */}
            {currentStep === 1 && (
              <motion.div
                key="step-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 flex flex-col w-full h-full pt-8 md:pt-16"
              >
                <div className="text-center px-4 md:px-12 mb-4 md:mb-10 z-20 flex-none">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight max-w-3xl mx-auto flex flex-col md:flex-row md:justify-center gap-1 md:gap-0">
                    <RevealLine delay={0.1}>📦 Inventory.</RevealLine>
                    <RevealLine delay={0.2} className="md:mx-2">💰 Payments.</RevealLine>
                    <RevealLine delay={0.3}>🌍 Online Store.</RevealLine>
                  </h3>
                </div>
                <motion.div 
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="relative flex-1 w-full flex justify-center items-end px-4 md:px-16 overflow-hidden"
                >
                  {/* Faded Edges */}
                  <div className="absolute inset-x-0 top-0 h-20 md:h-32 bg-gradient-to-b from-blue-600 to-transparent z-20" />
                  <div className="absolute inset-y-0 left-0 w-12 md:w-24 bg-gradient-to-r from-blue-600 to-transparent z-20" />
                  <div className="absolute inset-y-0 right-0 w-12 md:w-24 bg-gradient-to-l from-blue-600 to-transparent z-20" />
                  
                  <img 
                    src={retailImg} 
                    className="w-[110%] md:w-[85%] h-full md:h-auto object-cover object-top translate-y-4 md:translate-y-8 rounded-t-2xl shadow-[0_-20px_50px_rgba(0,0,0,0.15)]" 
                    alt="Dashboard Features"
                  />
                </motion.div>
              </motion.div>
            )}

            {/* STATE 2: Shipping & Logistics */}
            {currentStep === 2 && (
              <motion.div
                key="step-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 flex flex-col md:flex-row w-full h-full"
              >
                <div className="w-full md:w-1/2 h-[40%] md:h-full flex items-center justify-center p-6 md:p-16 z-20">
                  <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-[1.2] text-center md:text-left flex flex-col items-center md:items-start gap-1">
                    <RevealLine delay={0.1}>🚚 Deliver to</RevealLine>
                    <RevealLine delay={0.2}>customers faster.</RevealLine>
                  </h3>
                </div>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full md:w-1/2 h-[60%] md:h-full relative flex items-center justify-center p-4 md:p-12 pb-16 md:pb-12"
                >
                  {/* Faded Edges */}
                  <div className="absolute inset-y-0 left-4 md:left-12 w-16 md:w-24 bg-gradient-to-r from-blue-600 to-transparent z-20" />
                  <div className="absolute inset-y-0 right-4 md:right-12 w-16 md:w-24 bg-gradient-to-l from-blue-600 to-transparent z-20" />
                  <div className="absolute inset-x-4 md:inset-x-12 top-0 md:top-12 h-16 md:h-24 bg-gradient-to-b from-blue-600 to-transparent z-20" />
                  <div className="absolute inset-x-4 md:inset-x-12 bottom-16 md:bottom-12 h-20 md:h-24 bg-gradient-to-t from-blue-600 to-transparent z-20" />
                  
                  <img 
                    src={shipImg} 
                    className="w-full h-full object-cover rounded-2xl shadow-2xl" 
                    alt="Shipping Overview"
                  />
                </motion.div>
              </motion.div>
            )}

            {/* STATE 3: Split CTA and Lifestyle Image */}
            {currentStep === 3 && (
              <motion.div
                key="step-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 flex flex-col-reverse md:flex-row w-full h-full"
              >
                <div className="w-full md:w-1/2 h-[50%] md:h-full flex flex-col justify-center items-center md:items-start p-6 md:p-16 z-20 text-center md:text-left pb-16 md:pb-16">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight mb-6 leading-tight flex flex-col items-center md:items-start gap-1">
                    <RevealLine delay={0.1}>Do it all with Nemvol</RevealLine>
                    <RevealLine delay={0.2} className="mt-1 text-blue-100 md:mt-3 text-xl md:text-2xl">
                      <span className="inline-flex items-center gap-2">
                        <ArrowRight size={20} className="md:w-6 md:h-6" /> Start free.
                      </span>
                    </RevealLine>
                  </h3>
                  <motion.button 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="bg-white hover:bg-blue-50 text-blue-600 rounded-full px-8 py-3.5 text-base font-bold transition-transform hover:scale-105 shadow-xl w-full md:w-auto"
                  >
                    www.nemvol.com
                  </motion.button>
                </div>
                <motion.div 
                  initial={{ opacity: 0, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, filter: 'blur(0px)' }}
                  transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
                  className="w-full md:w-1/2 h-[50%] md:h-full relative"
                >
                  {/* Faded Edges */}
                  <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-blue-600 to-transparent z-20 hidden md:block" />
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-blue-600 to-transparent z-20 block md:hidden" />
                  
                  <img 
                    src={startupImg} 
                    className="w-full h-full object-cover object-center" 
                    alt="Happy Business Owners"
                  />
                </motion.div>
              </motion.div>
            )}

          </AnimatePresence>

          {/* Interactive Progress Bar */}
          <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-30">
            {[0, 1, 2, 3].map((step) => (
              <button 
                key={step} 
                onClick={() => handleManualClick(step)}
                className="w-12 md:w-16 h-1.5 rounded-full bg-white/30 overflow-hidden relative cursor-pointer hover:bg-white/40 transition-colors"
                aria-label={`Go to slide ${step + 1}`}
              >
                {currentStep === step && (
                  <motion.div 
                    initial={{ width: manualOverride ? '100%' : '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: manualOverride ? 0 : 5, ease: 'linear' }}
                    className="absolute top-0 left-0 h-full bg-white"
                  />
                )}
                {currentStep > step && (
                  <div className="absolute top-0 left-0 h-full w-full bg-white" />
                )}
              </button>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default memo(AnimatedShowcase)
