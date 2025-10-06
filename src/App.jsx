import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import ErrorBoundary from './components/ui/ErrorBoundary'
import LoadingScreen from './components/ui/LoadingScreen'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/home'
import About from './pages/about'
import Services from './pages/services'
import Portfolio from './pages/portfolio'
import ProjectDetail from './components/portfolio/ProjectDetail'
import Contact from './pages/contact'
import Blog from './pages/blog'
import FAQ from './pages/faq'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import NotFound from './pages/NotFound'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <ErrorBoundary>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      <Router>
        <ScrollToTop />
        <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:id" element={<ProjectDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </Layout>
      </Router>
    </ErrorBoundary>
  )
}

export default App