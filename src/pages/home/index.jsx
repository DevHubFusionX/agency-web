import '../../theme.css'
import SEO from '../../components/SEO'
import { seoData } from '../../utils/seoData'
import PageTransition from '../../components/ui/PageTransition'
import HeroSection from '../../components/HeroSection'
import ClientLogos from '../../components/ui/ClientLogos'
import ExcellenceMetrics from '../../components/ExcellenceMetrics'
import OurApproach from '../../components/OurApproach'
import CoreCapabilities from '../../components/CoreCapabilities'
import Testimonials from '../../components/Testimonials'
import CompetitivePositioning from '../../components/CompetitivePositioning'
import TargetAudience from '../../components/TargetAudience'
import LeadMagnet from '../../components/LeadMagnet'
import StrategicEngagement from '../../components/StrategicEngagement'

const Home = () => {
  return (
    <PageTransition>
      <SEO {...seoData.home} />
      <HeroSection />
      <ClientLogos />
      <ExcellenceMetrics />
      <OurApproach />
      <CoreCapabilities />
      <Testimonials />
      <CompetitivePositioning />
      <TargetAudience />
      <LeadMagnet />
      <StrategicEngagement />
    </PageTransition>
  )
}

export default Home