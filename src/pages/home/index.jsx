import '../../theme.css'
import SEO from '../../components/SEO'
import { seoData } from '../../utils/seoData'
import PageTransition from '../../components/ui/PageTransition'
import HeroSection from '../../components/HeroSection'
import ExcellenceMetrics from '../../components/ExcellenceMetrics'
import CoreCapabilities from '../../components/CoreCapabilities'
import ClientSuccessStories from '../../components/ClientSuccessStories'
import Testimonials from '../../components/Testimonials'
import StrategicPartnerships from '../../components/StrategicPartnerships'
import StrategicEngagement from '../../components/StrategicEngagement'

const Home = () => {
  return (
    <PageTransition>
      <SEO {...seoData.home} />
      <HeroSection />
      <ExcellenceMetrics />
      <CoreCapabilities />
      <ClientSuccessStories />
      <Testimonials />
      <StrategicPartnerships />
      <StrategicEngagement />
    </PageTransition>
  )
}

export default Home