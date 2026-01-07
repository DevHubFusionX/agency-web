import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Smartphone, Mail, Phone, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion'
import logo from '../../assets/logo.svg'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Blog', href: '/blog' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <>
      <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-5xl px-4">
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="relative group"
        >
          {/* Animated Gradient Border Layer */}
          <div className="absolute -inset-[1px] bg-sky-400 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:via-sky-400 group-hover:to-blue-600 rounded-2xl blur-[2px] opacity-20 group-hover:opacity-40 transition-all duration-700 animate-gradient-xy"></div>

          <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.06)] border border-white/40 overflow-hidden relative z-10">
            {/* Scroll Progress Bar (Glowing) */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-600 via-sky-400 to-blue-600 origin-left z-20 shadow-[0_0_10px_rgba(37,99,235,0.5)]"
              style={{ scaleX }}
            />

            <div className="flex justify-between items-center px-8 py-4">
              {/* Logo with Magnetic Hover */}
              <motion.div
                whileHover={{ x: -2, y: -1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Link to="/" className="flex items-center space-x-3 group/logo">
                  <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-100 group-hover/logo:rotate-6 transition-transform duration-300">
                    <img src={logo} alt="Nemvol" className="w-6 h-6 invert brightness-0" />
                  </div>
                  <span className="text-xl font-black text-gray-900 tracking-tighter uppercase">Nemvol</span>
                </Link>
              </motion.div>

              {/* Desktop Navigation with Sliding Underline */}
              <div className="hidden lg:flex items-center space-x-8 relative">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`relative py-2 text-xs font-black uppercase tracking-widest transition-colors duration-300 z-10 ${isActive(item.href) ? 'text-blue-600' : 'text-gray-500 hover:text-gray-900'
                      }`}
                  >
                    {isActive(item.href) && (
                      <motion.div
                        layoutId="activeNavUnderline"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 shadow-[0_2px_10px_rgba(37,99,235,0.4)]"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Desktop CTA with Magnetic Hover */}
              <motion.div
                className="hidden lg:flex items-center ml-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  className="bg-gray-900 text-white px-7 py-3 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-blue-600 transition-all duration-300 flex items-center gap-2 group/btn shadow-lg shadow-gray-200 hover:shadow-blue-200"
                >
                  Start Project
                  <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </motion.div>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={isOpen ? 'close' : 'open'}
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                  </motion.div>
                </AnimatePresence>
              </button>
            </div>
          </div>
        </motion.nav>
      </header>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full sm:w-80 bg-white shadow-2xl z-50 lg:hidden overflow-y-auto"
            >
              <div className="flex flex-col h-full">
                {/* Sidebar Header */}
                <div className="p-6 border-b border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <img src={logo} alt="Nemvol" className="w-10 h-10 rounded-lg" />
                      <div>
                        <span className="text-xl font-bold text-gray-900">Nemvol</span>
                        <p className="text-xs text-gray-500">Web Development Agency</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <X size={20} />
                    </button>
                  </div>
                  <p className="text-sm text-gray-600">React & React Native Specialists</p>
                </div>

                {/* Navigation Links */}
                <div className="flex-1 p-6">
                  <nav className="space-y-1 mb-8">
                    {navigation.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          to={item.href}
                          onClick={() => setIsOpen(false)}
                          className={`group flex items-center justify-between px-4 py-3 text-base font-medium rounded-xl transition-all duration-200 ${isActive(item.href)
                            ? 'bg-blue-600 text-white shadow-lg'
                            : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                            }`}
                        >
                          <span>{item.name}</span>
                          <ArrowRight size={16} className={`transition-transform group-hover:translate-x-1 ${isActive(item.href) ? 'text-white' : 'text-gray-400'
                            }`} />
                        </Link>
                      </motion.div>
                    ))}
                  </nav>

                  {/* CTA Section */}
                  <div className="bg-gray-50 rounded-3xl p-8 mb-6 border border-gray-100">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Ready to Start?</h3>
                    <p className="text-sm text-gray-500 mb-6 leading-relaxed text-balance">Get a senior-led team working on your next digital product.</p>
                    <Link
                      to="/contact"
                      onClick={() => setIsOpen(false)}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-2xl font-bold transition-all shadow-lg shadow-blue-100 flex items-center justify-center group"
                    >
                      Start Project
                      <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>

                {/* Footer Contact */}
                <div className="p-6 border-t border-gray-100 bg-gray-50">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <Mail size={16} className="text-blue-500" />
                      <span>hello@nemvol.com</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <Phone size={16} className="text-blue-500" />
                      <span>+1 (555) 123-4567</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-xs text-gray-500 text-center">
                      © 2024 Nemvol. All rights reserved.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Header