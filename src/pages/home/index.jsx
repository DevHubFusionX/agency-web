import { Suspense, lazy } from 'react'
import '../../theme.css'
import SEO from '../../components/SEO'
import { seoData } from '../../utils/seoData'
import PageTransition from '../../components/ui/PageTransition'
import HeroSection from '../../components/HeroSection'
import SectionSkeleton from '../../components/ui/SectionSkeleton'

// Lazy Load Section Components
const ClientLogos = lazy(() => import('../../components/ui/ClientLogos'))
const ExcellenceMetrics = lazy(() => import('../../components/ExcellenceMetrics'))
const OurApproach = lazy(() => import('../../components/OurApproach'))
const CoreCapabilities = lazy(() => import('../../components/CoreCapabilities'))
const Testimonials = lazy(() => import('../../components/Testimonials'))
const CompetitivePositioning = lazy(() => import('../../components/CompetitivePositioning'))
const TargetAudience = lazy(() => import('../../components/TargetAudience'))
const LeadMagnet = lazy(() => import('../../components/LeadMagnet'))
const StrategicEngagement = lazy(() => import('../../components/StrategicEngagement'))

const Home = () => {
  return (
    <PageTransition>
      <SEO {...seoData.home} />

      {/* Hero Section - Loaded Immediately for FCP/LCP */}
      <HeroSection />

      {/* Below the Fold Content - Lazy Loaded */}
      <Suspense fallback={<SectionSkeleton className="py-12" />}>
        <ClientLogos />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <ExcellenceMetrics />
        <OurApproach />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <CoreCapabilities />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <Testimonials />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <CompetitivePositioning />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <TargetAudience />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <LeadMagnet />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <StrategicEngagement />
      </Suspense>
    </PageTransition>
  )
}

export default Home