import SEO from '../../components/SEO'
import { seoData } from '../../utils/seoData'
import PageTransition from '../../components/ui/PageTransition'
import ContactForm from '../../components/contact/ContactForm'
import ContactInfo from '../../components/contact/ContactInfo'

const Contact = () => {
  return (
    <PageTransition>
      <SEO {...seoData.contact} />
      <div className="pt-24 md:pt-32">
        <ContactForm />
      </div>
      <ContactInfo />
    </PageTransition>
  )
}

export default Contact