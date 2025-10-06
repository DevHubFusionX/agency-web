import SEO from '../../components/SEO'
import PageTransition from '../../components/ui/PageTransition'
import FAQHero from '../../components/faq/FAQHero'
import FAQAccordion from '../../components/faq/FAQAccordion'
import StrategicEngagement from '../../components/StrategicEngagement'

const FAQ = () => {
  return (
    <PageTransition>
      <SEO 
        title="FAQ - Frequently Asked Questions About Our Services"
        description="Get answers to common questions about our web development services, process, pricing, and support options."
        keywords="FAQ, web development questions, digital agency process, project pricing, technical support"
      />
      <FAQHero />
      <FAQAccordion />
      <StrategicEngagement />
    </PageTransition>
  )
}

export default FAQ