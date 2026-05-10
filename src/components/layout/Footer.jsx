import { Linkedin, Twitter, Github } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Logo from '../ui/Logo'

const Footer = () => {
  return (
    <footer className="bg-gray-950 relative overflow-hidden pt-16 pb-8 border-t border-white/5">
      {/* Background Decorative Text */}
      <div className="absolute top-10 right-10 opacity-[0.03] pointer-events-none select-none uppercase font-black text-[15vw] whitespace-nowrap leading-none tracking-tighter text-white">
        Nemvol
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Top: Logo */}
        <div className="mb-16">
          <Link to="/" className="inline-block group cursor-pointer transition-transform duration-300 hover:scale-[1.02]">
            <Logo className="h-8 md:h-10 w-auto" iconOnly={false} />
          </Link>
        </div>

        {/* Middle: Link Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 mb-16">
          <div className="lg:col-span-1">
            <h4 className="text-sm font-semibold text-white mb-6">Capabilities</h4>
            <ul className="space-y-4">
              {['Engineering', 'Product Strategy', 'Mobile Systems', 'UI/UX Design', 'Cloud Infra'].map((item) => (
                <li key={item}>
                  <Link to="/services" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm font-medium">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h4 className="text-sm font-semibold text-white mb-6">Ecosystem</h4>
            <ul className="space-y-4">
              {['About Us', 'Case Studies', 'Insights', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to={item === 'Case Studies' ? '/portfolio' : `/${item.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-white transition-colors duration-300 text-sm font-medium">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h4 className="text-sm font-semibold text-white mb-6">Reach Out</h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:nemvolltd@gmail.com" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm font-medium">
                  Email Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm font-medium">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm font-medium">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm font-medium">
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2 lg:col-start-5">
            <motion.h4 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-semibold text-white mb-4"
            >
              Subscribe to our newsletter
            </motion.h4>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-sm text-gray-400 mb-6 font-medium leading-relaxed"
            >
              Stay ahead of the curve. Get the latest insights, strategies, and engineering deep-dives sent straight to your inbox.
            </motion.p>
            <motion.form 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-3"
              onSubmit={(e) => e.preventDefault()}
            >
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500 transition-colors shadow-inner"
              />
              <button 
                type="submit" 
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl px-6 py-3 transition-colors shadow-lg shadow-blue-900/20 active:scale-95 whitespace-nowrap"
              >
                Subscribe
              </button>
            </motion.form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <h3 className="text-white text-base font-bold mb-2">Build faster with Nemvol</h3>
            <p className="text-gray-400 text-sm font-medium max-w-md">
              Save countless hours of development and ship robust, scalable applications faster.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 text-gray-500 text-sm font-medium mt-4 md:mt-0">
            <div className="flex gap-4 mb-2 md:mb-0">
               <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
               <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
            </div>
            <span>© {new Date().getFullYear()} Nemvol Limited. All rights reserved.</span>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer