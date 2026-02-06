import { useState, useLayoutEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { LazyMotion, domAnimation } from 'framer-motion'
import Layout from './components/layout/Layout'
import ErrorBoundary from './components/ui/ErrorBoundary'
import LoadingScreen from './components/ui/LoadingScreen'
import ScrollToTop from './components/common/ScrollToTop'
import AppRoutes from './AppRoutes'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useLayoutEffect(() => {
    // Disable browser's default scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
  }, [])

  return (
    <ErrorBoundary>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      <LazyMotion features={domAnimation}>
        <Router>
          <ScrollToTop />
          <Layout>
            <AppRoutes />
          </Layout>
        </Router>
      </LazyMotion>
    </ErrorBoundary>
  )
}

export default App