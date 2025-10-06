import { Mail, Phone, MapPin, Linkedin, Twitter, Github, ArrowRight, Smartphone } from 'lucide-react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-transparent"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center mr-3">
                <Smartphone size={20} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">AppCraft Studio</h3>
            </div>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-md">
              We specialize in crafting exceptional web and mobile applications using React and React Native. 
              Transform your ideas into powerful digital experiences.
            </p>
            
            <div className="mb-8">
              <h4 className="text-white font-semibold mb-3">Stay Updated</h4>
              <p className="text-gray-400 text-sm mb-4">Get insights on app development and industry trends.</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                />
                <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center justify-center">
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-6">Services</h4>
            <nav className="space-y-3">
              {[
                'React Development',
                'React Native Apps',
                'Node.js Backend',
                'UI/UX Design',
                'App Store Deployment'
              ].map((service) => (
                <Link
                  key={service}
                  to="/services"
                  className="block text-gray-300 hover:text-blue-400 transition-colors"
                >
                  {service}
                </Link>
              ))}
            </nav>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <nav className="space-y-3">
              {[
                { name: 'About Us', href: '/about' },
                { name: 'Portfolio', href: '/portfolio' },
                { name: 'Blog', href: '/blog' },
                { name: 'FAQ', href: '/faq' },
                { name: 'Contact', href: '/contact' }
              ].map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block text-gray-300 hover:text-blue-400 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
        
        {/* Contact & Social */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div>
              <h4 className="text-white font-semibold mb-4">Get In Touch</h4>
              <div className="space-y-3">
                <div className="flex items-center text-gray-300">
                  <Mail size={16} className="mr-3 text-blue-400" />
                  <span>hello@appcraftstudio.com</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Phone size={16} className="mr-3 text-blue-400" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <MapPin size={16} className="mr-3 text-blue-400" />
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                {[
                  { icon: Linkedin, href: '#', label: 'LinkedIn' },
                  { icon: Twitter, href: '#', label: 'Twitter' },
                  { icon: Github, href: '#', label: 'GitHub' }
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors group"
                    aria-label={social.label}
                  >
                    <social.icon size={18} className="text-gray-300 group-hover:text-white" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} AppCraft Studio. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link to="/privacy" className="text-gray-500 hover:text-blue-400 transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-500 hover:text-blue-400 transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer