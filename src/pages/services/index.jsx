import { Suspense, lazy } from 'react'
import SEO from '../../components/SEO'
import { seoData } from '../../utils/seoData'
import PageTransition from '../../components/ui/PageTransition'
import ServicesHero from '../../components/services/ServicesHero'
import SectionSkeleton from '../../components/ui/SectionSkeleton'

// Lazy Load Components
const ServiceOfferings = lazy(() => import('../../components/services/ServiceOfferings'))
const DeliveryMethodology = lazy(() => import('../../components/services/DeliveryMethodology'))
const IndustryExpertise = lazy(() => import('../../components/services/IndustryExpertise'))
const StrategicEngagement = lazy(() => import('../../components/StrategicEngagement'))

const Services = () => {
  return (
    <PageTransition>
      <SEO {...seoData.services} />
      <ServicesHero />

      <Suspense fallback={<SectionSkeleton />}>
        <ServiceOfferings />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <DeliveryMethodology />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <IndustryExpertise />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <StrategicEngagement />
      </Suspense>
    </PageTransition>
  )
}

export default Services