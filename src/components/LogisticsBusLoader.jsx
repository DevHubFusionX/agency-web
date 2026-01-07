import { motion } from 'framer-motion'
import { Bus } from 'lucide-react'

export default function LogisticsBusLoader() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center z-50">
      {/* Background particles */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-orange-400/40 rounded-full"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${25 + Math.random() * 50}%`,
            }}
            animate={{
              opacity: [0, 0.8, 0],
              scale: [0.5, 1.5, 0.5]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      {/* Main container */}
      <div className="relative flex flex-col items-center">
        {/* Road */}
        <div className="relative w-96 h-24 flex items-center">
          <div className="absolute bottom-6 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-slate-600 to-transparent" />
          
          {/* Road markings */}
          <motion.div
            className="absolute bottom-6 flex gap-6"
            initial={{ x: -400 }}
            animate={{ x: 400 }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {[...Array(8)].map((_, i) => (
              <div key={i} className="w-12 h-1 bg-yellow-400/60 rounded" />
            ))}
          </motion.div>

          {/* Bus container */}
          <motion.div
            className="relative z-10"
            initial={{ x: -200, scale: 0.8 }}
            animate={{ x: 0, scale: 1 }}
            transition={{
              duration: 2,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >
            {/* Bus glow */}
            <motion.div
              className="absolute -inset-6 bg-orange-500/30 rounded-full blur-2xl"
              animate={{
                opacity: [0.4, 0.8, 0.4],
                scale: [0.8, 1.2, 0.8]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity
              }}
            />

            {/* Bus body */}
            <motion.div
              className="relative w-24 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg shadow-2xl flex items-center justify-center"
              animate={{
                y: [0, -2, 0],
                rotate: [0, -0.5, 0, 0.5, 0]
              }}
              transition={{
                duration: 1,
                repeat: Infinity
              }}
              style={{
                boxShadow: '0 8px 32px rgba(249, 115, 22, 0.5)'
              }}
            >
              <Bus className="w-8 h-8 text-white" strokeWidth={2.5} />

              {/* Windows */}
              <div className="absolute top-2 left-2 w-4 h-3 bg-sky-200/80 rounded-sm" />
              <div className="absolute top-2 right-2 w-4 h-3 bg-sky-200/80 rounded-sm" />

              {/* Wheels */}
              <motion.div
                className="absolute -bottom-2 left-2 w-4 h-4 bg-slate-800 rounded-full border-2 border-slate-600"
                animate={{ rotate: 360 }}
                transition={{ duration: 0.4, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute -bottom-2 right-2 w-4 h-4 bg-slate-800 rounded-full border-2 border-slate-600"
                animate={{ rotate: 360 }}
                transition={{ duration: 0.4, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>

            {/* Exhaust smoke */}
            <motion.div
              className="absolute top-0 -right-8 flex flex-col gap-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-3 h-3 bg-slate-400/40 rounded-full"
                  animate={{
                    opacity: [0.6, 0, 0.6],
                    scale: [0.5, 1.2, 0.5],
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
          </motion.div>
        </div>

        {/* Loading text */}
        <motion.div
          className="mt-8 flex items-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          <span className="text-xl text-slate-300 font-semibold">En Route</span>
          <motion.div className="flex gap-1">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-orange-400 rounded-full"
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
      </div>
    </div>
  )
}