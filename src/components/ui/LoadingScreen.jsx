import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import LoadingLogo from './LoadingLogo'

const LoadingScreen = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Fast exit: if content ready, fade out sooner
    // Minimum visual impact duration
    const minTimer = setTimeout(() => {
      setIsVisible(false)
      setTimeout(onComplete, 600) // Slightly faster exit transition
    }, 2000) // Reduced from 3500ms -> 2000ms for punchier feel

    return () => clearTimeout(minTimer)
  }, [onComplete])

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
          {/* Subtle Technical Grid Background */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

          <div className="relative flex flex-col items-center justify-center w-full max-w-sm px-6">
            {/* Animated Logo */}
            <div>
              <LoadingLogo />
            </div>

            {/* Brand Name - Subtle Fade In after logo starts */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8, ease: "easeOut" }}
              className="text-4xl font-black text-white tracking-tighter uppercase mb-2"
            >
              NEMVOL
            </motion.h1>


          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default LoadingScreen
