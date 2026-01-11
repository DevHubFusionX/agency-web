import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Smartphone, Mail, Phone, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion'
import Logo from '../ui/Logo'

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
      <header className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300">
        <nav className="bg-white/80 backdrop-blur-xl border-b border-gray-100 relative">
          {/* Scroll Progress Bar */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-[3px] bg-blue-600 origin-left z-20"
            style={{ scaleX }}
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center group flex-shrink-0">
              <div className="flex items-center gap-2 transition-transform duration-300 group-hover:scale-[1.02]">
                <Logo className="h-12 w-auto" iconOnly={false} />
              </div>
            </Link>

            {/* Desktop Navigation - Centered */}
            <div className="hidden lg:flex items-center justify-center flex-1 px-8">
              <div className="flex items-center gap-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 ${isActive(item.href)
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                      }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center flex-shrink-0">
              <Link
                to="/contact"
                className="bg-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-200 transition-all duration-300 flex items-center gap-2 group/btn"
              >
                Start Project
                <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Spacer for mobile to push menu button right */}
            <div className="flex-1 lg:hidden" />

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2.5 rounded-xl hover:bg-gray-100 transition-colors text-gray-900"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isOpen ? 'close' : 'open'}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  {isOpen ? <X size={26} /> : <Menu size={26} />}
                </motion.div>
              </AnimatePresence>
            </button>
          </div>
        </nav>
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
              transition={{
                type: 'spring',
                damping: 30,
                stiffness: 180,
                mass: 0.8
              }}
              className="fixed top-0 right-0 h-full w-full sm:w-80 bg-white shadow-2xl z-50 lg:hidden overflow-y-auto"
            >
              <div className="flex flex-col h-full">
                {/* Sidebar Header */}
                <div className="p-6 border-b border-gray-100">
                  <div className="flex items-center justify-between">
                    <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center text-blue-600">
                      <Logo className="h-16 w-auto" iconOnly={false} />
                    </Link>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <X size={20} />
                    </button>
                  </div>
                  <p className="text-sm text-gray-500 mt-4 leading-relaxed">
                    Product Development & Digital Solutions Agency
                  </p>
                </div>

                {/* Navigation Links */}
                <div className="flex-1 p-6">
                  <nav className="space-y-1 mb-8">
                    <AnimatePresence>
                      {navigation.map((item, index) => (
                        <motion.div
                          key={item.name}
                          initial={{ opacity: 0, x: 15 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 10 }}
                          transition={{
                            duration: 0.3,
                            delay: index * 0.04,
                            ease: [0.22, 1, 0.36, 1]
                          }}
                        >
                          <Link
                            to={item.href}
                            onClick={() => setIsOpen(false)}
                            className={`group flex items-center justify-between px-4 py-3 text-base font-medium rounded-xl transition-all duration-200 ${isActive(item.href)
                              ? 'bg-blue-600 text-white shadow-lg shadow-blue-200/50'
                              : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                              }`}
                          >
                            <span>{item.name}</span>
                            <ArrowRight size={16} className={`transition-transform group-hover:translate-x-1 ${isActive(item.href) ? 'text-white' : 'text-gray-400'
                              }`} />
                          </Link>
                        </motion.div>
                      ))}
                    </AnimatePresence>
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