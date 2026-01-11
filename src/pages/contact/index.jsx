import SEO from '../../components/SEO'
import { seoData } from '../../utils/seoData'
import PageTransition from '../../components/ui/PageTransition'
import ContactHero from '../../components/contact/ContactHero'
import ContactForm from '../../components/contact/ContactForm'
import ContactInfo from '../../components/contact/ContactInfo'

const Contact = () => {
  return (
    <PageTransition>
      <SEO {...seoData.contact} />
      <ContactForm />
      <ContactInfo />
    </PageTransition>
  )
}

export default Contact