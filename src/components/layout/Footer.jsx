import { Mail, Phone, MapPin, Linkedin, Twitter, Github, ArrowRight, Smartphone } from 'lucide-react'
import { Link } from 'react-router-dom'
import Logo from '../ui/Logo'

const Footer = () => {
  return (
    <footer className="bg-gray-950 relative overflow-hidden pt-24 pb-12 border-t border-white/5">
      {/* Background Decorative Text */}
      <div className="absolute top-10 right-10 opacity-[0.03] pointer-events-none select-none uppercase font-black text-[15vw] whitespace-nowrap leading-none tracking-tighter text-white">
        Nemvol
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-20">
          {/* Brand Column */}
          <div className="lg:col-span-5">
            <Link to="/" className="flex items-center text-blue-600 mb-8 group cursor-pointer transition-transform duration-300 hover:scale-[1.02]">
              <Logo className="h-32 w-auto" iconOnly={false} />
            </Link>

            <p className="text-xl text-gray-400 leading-relaxed mb-10 max-w-md font-medium">
              We engineer high-stakes digital success. We specialize in building robust, scalable applications that push the boundaries of what's possible.
            </p>

            <div className="relative max-w-md">
              <h4 className="text-sm font-black uppercase tracking-[0.2em] text-blue-500 mb-4 font-black">Stay Ahead</h4>
              <div className="flex gap-2 p-1 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm focus-within:border-blue-500 transition-all duration-300">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-transparent text-white placeholder-gray-500 focus:outline-none text-base"
                />
                <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-all duration-300 font-black flex items-center justify-center active:scale-95 shadow-lg shadow-blue-900/20">
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Quick Links Group */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
            <div>
              <h4 className="text-sm font-black uppercase tracking-[0.2em] text-white mb-8">Capabilities</h4>
              <ul className="space-y-4">
                {['Engineering', 'Product Strategy', 'Mobile Systems', 'UI/UX Design', 'Cloud Infra'].map((item) => (
                  <li key={item}>
                    <Link to="/services" className="text-gray-500 hover:text-white transition-colors duration-300 text-base font-medium">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-black uppercase tracking-[0.2em] text-white mb-8">Ecosystem</h4>
              <ul className="space-y-4">
                {['About Us', 'Case Studies', 'Insights', 'Contact'].map((item) => (
                  <li key={item}>
                    <Link to={item === 'Case Studies' ? '/portfolio' : `/${item.toLowerCase().replace(' ', '-')}`} className="text-gray-500 hover:text-white transition-colors duration-300 text-base font-medium">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1">
              <h4 className="text-sm font-black uppercase tracking-[0.2em] text-white mb-8">Reach Out</h4>
              <div className="space-y-6">
                <div>
                  <div className="text-xs font-black uppercase tracking-widest text-blue-500 mb-2">Technical Sales</div>
                  <a href="mailto:hello@nemvol.com" className="text-lg font-bold text-white hover:text-blue-400 transition-colors">hello@nemvol.com</a>
                </div>
                <div>
                  <div className="text-xs font-black uppercase tracking-widest text-blue-500 mb-2">Connect</div>
                  <div className="flex gap-4">
                    {[
                      { icon: Linkedin, href: '#', label: 'LinkedIn' },
                      { icon: Twitter, href: '#', label: 'Twitter' },
                      { icon: Github, href: '#', label: 'GitHub' }
                    ].map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        className="w-12 h-12 bg-white/5 hover:bg-blue-600 rounded-xl flex items-center justify-center border border-white/5 hover:border-blue-500 transition-all duration-300 group shadow-lg"
                        aria-label={social.label}
                      >
                        <social.icon size={20} className="text-gray-400 group-hover:text-white transition-colors" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-gray-600 text-sm font-medium">© {new Date().getFullYear()} Nemvol Limited.</span>
              <span className="w-1 h-1 rounded-full bg-gray-800"></span>
              <span className="text-gray-600 text-sm font-medium">Engineered with Precision.</span>
            </div>

            <div className="flex gap-8">
              <Link to="/privacy" className="text-gray-600 hover:text-white transition-colors duration-300 text-sm font-medium">Privacy Protocol</Link>
              <Link to="/terms" className="text-gray-600 hover:text-white transition-colors duration-300 text-sm font-medium">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer