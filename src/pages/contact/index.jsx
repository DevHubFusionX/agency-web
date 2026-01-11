import { Suspense, lazy } from 'react'
import SEO from '../../components/SEO'
import { seoData } from '../../utils/seoData'
import PageTransition from '../../components/ui/PageTransition'
import SectionSkeleton from '../../components/ui/SectionSkeleton'

// Lazy Load Components
const ContactForm = lazy(() => import('../../components/contact/ContactForm'))
const ContactInfo = lazy(() => import('../../components/contact/ContactInfo'))

const Contact = () => {
  return (
    <PageTransition>
      <SEO {...seoData.contact} />

      <div className="pt-24 md:pt-32">
        <Suspense fallback={<SectionSkeleton />}>
          <ContactForm />
        </Suspense>
      </div>

      <Suspense fallback={<SectionSkeleton />}>
        <ContactInfo />
      </Suspense>
    </PageTransition>
  )
}

export default Contact