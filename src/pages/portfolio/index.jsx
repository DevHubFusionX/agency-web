import SEO from '../../components/SEO'
import { seoData } from '../../utils/seoData'
import PageTransition from '../../components/ui/PageTransition'
import PortfolioHero from '../../components/portfolio/PortfolioHero'
import ProjectShowcase from '../../components/portfolio/ProjectShowcase'
import ImpactMetrics from '../../components/portfolio/ImpactMetrics'
import TechnicalExpertise from '../../components/portfolio/TechnicalExpertise'
import StrategicEngagement from '../../components/StrategicEngagement'

const Portfolio = () => {
  return (
    <PageTransition>
      <SEO {...seoData.portfolio} />
      <PortfolioHero />
      <ProjectShowcase />
      <ImpactMetrics />
      <TechnicalExpertise />
      <StrategicEngagement />
    </PageTransition>
  )
}

export default Portfolio