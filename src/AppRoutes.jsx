import { Suspense, lazy } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import SectionSkeleton from './components/ui/SectionSkeleton'

// Lazy Load Pages
const Home = lazy(() => import('./pages/home'))
const About = lazy(() => import('./pages/about'))
const Services = lazy(() => import('./pages/services'))
const Portfolio = lazy(() => import('./pages/portfolio'))
const ProjectDetail = lazy(() => import('./components/portfolio/ProjectDetail'))
const Contact = lazy(() => import('./pages/contact'))
const Blog = lazy(() => import('./pages/blog'))
const FAQ = lazy(() => import('./pages/faq'))
const Privacy = lazy(() => import('./pages/Privacy'))
const Terms = lazy(() => import('./pages/Terms'))
const NotFound = lazy(() => import('./pages/NotFound'))

const AppRoutes = () => {
    const location = useLocation()

    return (
        <AnimatePresence mode="wait">
            <Suspense fallback={<SectionSkeleton />}>
                <Routes location={location} key={location.pathname}>
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
            </Suspense>
        </AnimatePresence>
    )
}

export default AppRoutes
