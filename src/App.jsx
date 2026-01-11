import { useState, useLayoutEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Layout from './components/layout/Layout'
import ErrorBoundary from './components/ui/ErrorBoundary'
import LoadingScreen from './components/ui/LoadingScreen'
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
      <Router>
        <Layout>
          <AppRoutes />
        </Layout>
      </Router>
    </ErrorBoundary>
  )
}

export default App