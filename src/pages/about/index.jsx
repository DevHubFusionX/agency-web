import SEO from '../../components/SEO'
import { seoData } from '../../utils/seoData'
import PageTransition from '../../components/ui/PageTransition'
import AboutHero from '../../components/about/AboutHero'
import FounderVision from '../../components/about/FounderVision'
import CompanyStory from '../../components/about/CompanyStory'
import CoreValues from '../../components/about/CoreValues'
import LeadershipTeam from '../../components/about/LeadershipTeam'
import StrategicEngagement from '../../components/StrategicEngagement'

const About = () => {
  return (
    <PageTransition>
      <SEO {...seoData.about} />
      <AboutHero />
      <FounderVision />
      <CompanyStory />
      <CoreValues />
      <LeadershipTeam />
      <StrategicEngagement />
    </PageTransition>
  )
}

export default About