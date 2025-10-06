export const COMPANY_INFO = {
  name: 'Agency',
  email: 'hello@agency.com',
  phone: '+1 (555) 123-4567',
  address: '123 Business Ave, New York, NY 10001',
  social: {
    twitter: 'https://twitter.com/agency',
    linkedin: 'https://linkedin.com/company/agency',
    github: 'https://github.com/agency'
  }
}

export const NAVIGATION_ITEMS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Contact', href: '/contact' }
]

export const ANIMATION_VARIANTS = {
  fadeInUp: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  },
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.6 }
  },
  slideInLeft: {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 }
  }
}