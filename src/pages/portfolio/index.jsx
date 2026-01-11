import { Suspense, lazy } from 'react'
import SEO from '../../components/SEO'
import { seoData } from '../../utils/seoData'
import PageTransition from '../../components/ui/PageTransition'
import PortfolioHero from '../../components/portfolio/PortfolioHero'
import SectionSkeleton from '../../components/ui/SectionSkeleton'

// Lazy Load Components
const ProjectShowcase = lazy(() => import('../../components/portfolio/ProjectShowcase'))
const ImpactMetrics = lazy(() => import('../../components/portfolio/ImpactMetrics'))
const TechnicalExpertise = lazy(() => import('../../components/portfolio/TechnicalExpertise'))
const StrategicEngagement = lazy(() => import('../../components/StrategicEngagement'))

const Portfolio = () => {
  return (
    <PageTransition>
      <SEO {...seoData.portfolio} />
      <PortfolioHero />

      <Suspense fallback={<SectionSkeleton />}>
        <ProjectShowcase />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <ImpactMetrics />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <TechnicalExpertise />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <StrategicEngagement />
      </Suspense>
    </PageTransition>
  )
}

export default Portfolio