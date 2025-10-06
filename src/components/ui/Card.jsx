import { motion } from 'framer-motion'

const Card = ({ children, className = '', hover = true, ...props }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={hover ? { y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' } : {}}
      className={`bg-white rounded-lg shadow-md p-6 transition-all duration-300 ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export default Card