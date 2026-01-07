import { motion } from 'framer-motion'
import { Bus, Package } from 'lucide-react'

export default function LogisticsBusLoader() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-purple-900 via-gray-900 to-green-900 flex items-center justify-center z-50 overflow-hidden">
      {/* Background Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-green-400/40 rounded-full"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${20 + Math.random() * 60}%`,
            }}
            animate={{
              opacity: [0, 0.8, 0],
              scale: [0.5, 1.5, 0.5]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3
            }}
          />
        ))}
      </div>

      {/* Main Animation Container */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-2xl">
        {/* Road Section */}
        <div className="relative w-full h-40 flex items-center justify-center">
          {/* Road Base */}
          <div className="absolute bottom-12 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent" />
          
          {/* Moving Road Lines */}
          <div className="absolute bottom-12 left-0 right-0 h-1 overflow-hidden">
            <motion.div
              className="flex gap-6 absolute whitespace-nowrap"
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {[...Array(20)].map((_, i) => (
                <div key={i} className="w-12 h-1 bg-purple-400/50 rounded-full" />
              ))}
            </motion.div>
          </div>

          {/* Bus Animation */}
          <motion.div
            className="relative"
            initial={{ x: -400, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.3
            }}
          >
            {/* Bus Glow Effect */}
            <motion.div
              className="absolute -inset-6 bg-gradient-to-r from-purple-400/30 to-green-400/30 rounded-full blur-2xl"
              animate={{
                opacity: [0.4, 0.8, 0.4],
                scale: [0.8, 1.2, 0.8]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Bus Container */}
            <motion.div
              className="relative w-24 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl shadow-2xl flex items-center justify-center"
              animate={{
                y: [0, -4, 0],
                rotate: [0, -0.5, 0, 0.5, 0]
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                boxShadow: '0 15px 50px rgba(139, 92, 246, 0.5), 0 0 30px rgba(139, 92, 246, 0.3)'
              }}
            >
              {/* Bus Icon */}
              <Bus className="w-12 h-8 text-white" strokeWidth={2} />

              {/* Front Wheels */}
              <motion.div
                className="absolute -bottom-2 left-2 w-4 h-4 bg-gray-800 rounded-full border-2 border-gray-600"
                animate={{ rotate: 360 }}
                transition={{ duration: 0.4, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute -bottom-2 right-2 w-4 h-4 bg-gray-800 rounded-full border-2 border-gray-600"
                animate={{ rotate: 360 }}
                transition={{ duration: 0.4, repeat: Infinity, ease: "linear" }}
              />

              {/* Bus Windows */}
              <div className="absolute top-1 left-2 w-3 h-2 bg-blue-200/80 rounded-sm" />
              <div className="absolute top-1 right-2 w-3 h-2 bg-blue-200/80 rounded-sm" />
            </motion.div>

            {/* Exhaust Smoke */}
            <motion.div
              className="absolute top-2 -right-8 flex flex-col gap-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-3 h-3 bg-gray-400/40 rounded-full"
                  animate={{
                    opacity: [0.6, 0.2, 0],
                    scale: [0.5, 1.2, 1.8],
                    x: [0, 15, 30]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.3
                  }}
                />
              ))}
            </motion.div>

            {/* Speed Lines */}
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 -left-20 flex gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-8 h-1 bg-gradient-to-l from-green-400/70 to-transparent rounded-full"
                  animate={{
                    opacity: [0.9, 0.4, 0.9],
                    scaleX: [1, 0.6, 1]
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    delay: i * 0.1
                  }}
                />
              ))}
            </motion.div>

            {/* Cargo Packages */}
            <motion.div
              className="absolute -top-3 right-1 flex gap-1"
              animate={{
                y: [0, -2, 0]
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Package className="w-3 h-3 text-green-400" />
              <Package className="w-2 h-2 text-green-300" />
            </motion.div>
          </motion.div>
        </div>

        {/* Loading Text */}
        <motion.div
          className="mt-12 flex items-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <span className="text-xl text-gray-300 font-semibold tracking-wide">Delivering Solutions</span>
          <motion.div className="flex gap-1">
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="w-2 h-2 bg-green-400 rounded-full"
                animate={{
                  y: [0, -8, 0],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Brand Subtitle */}
        <motion.p
          className="mt-3 text-sm text-gray-400 tracking-wider"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
        >
          Nemvol Technology Solutions
        </motion.p>
      </div>
    </div>
  )
}