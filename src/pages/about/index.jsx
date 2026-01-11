import { Suspense, lazy } from 'react'
import SEO from '../../components/SEO'
import { seoData } from '../../utils/seoData'
import PageTransition from '../../components/ui/PageTransition'
import AboutHero from '../../components/about/AboutHero'
import SectionSkeleton from '../../components/ui/SectionSkeleton'

// Lazy Load Components
// Lazy Load Components
const CompanyStory = lazy(() => import('../../components/about/CompanyStory'))
const CoreValues = lazy(() => import('../../components/about/CoreValues'))
const LeadershipTeam = lazy(() => import('../../components/about/LeadershipTeam'))
const StrategicEngagement = lazy(() => import('../../components/StrategicEngagement'))

const About = () => {
  return (
    <PageTransition>
      <SEO {...seoData.about} />
      <AboutHero />

      <Suspense fallback={<SectionSkeleton />}>
        <CompanyStory />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <CoreValues />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <LeadershipTeam />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <StrategicEngagement />
      </Suspense>
    </PageTransition>
  )
}

export default About