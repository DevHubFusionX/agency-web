import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

const Modal = ({ isOpen, onClose, children, title }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-[2rem] md:rounded-[2.5rem] shadow-2xl max-w-4xl w-full max-h-[92vh] overflow-y-auto relative border border-gray-100"
            >
              <div className="sticky top-0 bg-white/80 backdrop-blur-md flex items-center justify-between p-5 md:p-8 border-b border-gray-100 z-20">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">{title}</h2>
                <button
                  onClick={onClose}
                  className="p-2.5 hover:bg-gray-100 rounded-full transition-colors text-gray-400 hover:text-gray-900"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="p-5 md:p-10">
                {children}
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default Modal