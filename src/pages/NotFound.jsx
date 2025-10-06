import { Link } from 'react-router-dom'
import { Home, ArrowLeft, Search } from 'lucide-react'
import Button from '../components/ui/Button'
import SEO from '../components/SEO'
import PageTransition from '../components/ui/PageTransition'

const NotFound = () => {
  return (
    <PageTransition>
      <SEO 
        title="Page Not Found - 404 Error"
        description="The page you're looking for doesn't exist. Return to our homepage or explore our services."
      />
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-2xl">
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-blue-100 mb-4">404</h1>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h2>
            <p className="text-lg text-gray-600 mb-8">
              The page you're looking for doesn't exist or has been moved.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link to="/">
                <Home className="w-4 h-4 mr-2" />
                Go Home
              </Link>
            </Button>
            <Button variant="outline" onClick={() => window.history.back()}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Go Back
            </Button>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Popular Pages</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/services" className="text-blue-600 hover:text-blue-700">Services</Link>
              <Link to="/portfolio" className="text-blue-600 hover:text-blue-700">Portfolio</Link>
              <Link to="/about" className="text-blue-600 hover:text-blue-700">About</Link>
              <Link to="/blog" className="text-blue-600 hover:text-blue-700">Blog</Link>
              <Link to="/contact" className="text-blue-600 hover:text-blue-700">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}

export default NotFound