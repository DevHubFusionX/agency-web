import SEO from '../../components/SEO'
import { seoData } from '../../utils/seoData'
import PageTransition from '../../components/ui/PageTransition'
import ServicesHero from '../../components/services/ServicesHero'
import ServiceOfferings from '../../components/services/ServiceOfferings'
import DeliveryMethodology from '../../components/services/DeliveryMethodology'
import IndustryExpertise from '../../components/services/IndustryExpertise'
import StrategicEngagement from '../../components/StrategicEngagement'

const Services = () => {
  return (
    <PageTransition>
      <SEO {...seoData.services} />
      <ServicesHero />
      <ServiceOfferings />
      <DeliveryMethodology />
      <IndustryExpertise />
      <StrategicEngagement />
    </PageTransition>
  )
}

export default Services