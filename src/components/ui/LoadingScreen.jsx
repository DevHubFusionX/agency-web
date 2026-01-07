import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const LoadingScreen = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      setTimeout(onComplete, 800) // Slightly longer to allow exit animation
    }, 2500)

    return () => clearTimeout(timer)
  }, [onComplete])

  const name = "NEMVOL"

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
          }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-gray-950 overflow-hidden"
        >
          {/* Technical Grid Background */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

          <div className="relative text-center">
            {/* Animated Logo Icon */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
              className="mb-12 relative inline-block"
            >
              <div className="w-24 h-24 bg-blue-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-blue-900/40 relative z-10">
                <span className="text-white font-black text-4xl tracking-tighter">N</span>
              </div>

              {/* Outer Pulse Rings */}
              <motion.div
                animate={{ scale: [1, 1.5], opacity: [0.3, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                className="absolute inset-0 border border-blue-500 rounded-3xl z-0"
              />
              <motion.div
                animate={{ scale: [1, 1.8], opacity: [0.2, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
                className="absolute inset-0 border border-blue-400 rounded-3xl z-0"
              />
            </motion.div>

            {/* Brand Name with Staggered Characters */}
            <div className="flex justify-center gap-2 mb-4 overflow-hidden">
              {name.split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.5 + (i * 0.1),
                    ease: [0.76, 0, 0.24, 1]
                  }}
                  className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase leading-none"
                >
                  {char}
                </motion.span>
              ))}
            </div>

            {/* Subtitle / Tech Tag */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="flex items-center justify-center gap-4 text-white"
            >
              <div className="h-[1px] w-8 bg-white/20"></div>
              <span className="text-xs font-black uppercase tracking-[0.4em]">Engineered Excellence</span>
              <div className="h-[1px] w-8 bg-white/20"></div>
            </motion.div>

            {/* Precision Loading Bar */}
            <div className="mt-16 w-48 h-1 bg-white/5 rounded-full mx-auto relative overflow-hidden border border-white/5">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-blue-500 rounded-full"
              />
            </div>
          </div>

          {/* Bottom Right Counter/System Tag */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            className="absolute bottom-10 right-10 text-white font-mono text-[10px] tracking-widest text-right"
          >
            SYSTEM_STATUS: STABLE<br />
            NEMVOL_CORE_v2.0
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default LoadingScreen