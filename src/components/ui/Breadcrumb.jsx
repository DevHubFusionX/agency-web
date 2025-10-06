import { Link, useLocation } from 'react-router-dom'
import { ChevronRight, Home } from 'lucide-react'

const Breadcrumb = () => {
  const location = useLocation()
  const pathnames = location.pathname.split('/').filter(x => x)

  const breadcrumbNameMap = {
    'about': 'About Us',
    'services': 'Services',
    'portfolio': 'Portfolio',
    'contact': 'Contact',
    'blog': 'Blog',
    'faq': 'FAQ',
    'privacy': 'Privacy Policy',
    'terms': 'Terms of Service'
  }

  if (pathnames.length === 0) return null

  return (
    <nav className="bg-gray-50 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <Link to="/" className="text-gray-500 hover:text-gray-700 flex items-center">
              <Home size={16} />
            </Link>
          </li>
          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`
            const isLast = index === pathnames.length - 1
            const displayName = breadcrumbNameMap[name] || name

            return (
              <li key={name} className="flex items-center">
                <ChevronRight size={16} className="text-gray-400 mx-2" />
                {isLast ? (
                  <span className="text-gray-900 font-medium">{displayName}</span>
                ) : (
                  <Link to={routeTo} className="text-gray-500 hover:text-gray-700">
                    {displayName}
                  </Link>
                )}
              </li>
            )
          })}
        </ol>
      </div>
    </nav>
  )
}

export default Breadcrumb