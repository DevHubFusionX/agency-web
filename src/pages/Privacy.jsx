import SEO from '../components/SEO'
import Section from '../components/ui/Section'
import PageTransition from '../components/ui/PageTransition'

const Privacy = () => {
  return (
    <PageTransition>
      <SEO 
        title="Privacy Policy - Data Protection & Privacy Rights"
        description="Learn how we collect, use, and protect your personal information. Our commitment to data privacy and GDPR compliance."
        keywords="privacy policy, data protection, GDPR, CCPA, personal information"
      />
      
      <Section className="py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          <p className="text-gray-600 mb-8">Last updated: January 2024</p>
          
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Information We Collect</h2>
            <p className="text-gray-600 mb-6">
              We collect information you provide directly to us, such as when you create an account, 
              contact us, or use our services. This may include your name, email address, phone number, 
              and project details.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How We Use Your Information</h2>
            <ul className="text-gray-600 mb-6 space-y-2">
              <li>• Provide and improve our services</li>
              <li>• Communicate with you about projects and updates</li>
              <li>• Send marketing communications (with your consent)</li>
              <li>• Comply with legal obligations</li>
            </ul>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Data Protection Rights</h2>
            <p className="text-gray-600 mb-6">
              Under GDPR and CCPA, you have rights including access, rectification, erasure, 
              and portability of your personal data. Contact us to exercise these rights.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Cookies</h2>
            <p className="text-gray-600 mb-6">
              We use cookies to improve your experience on our website. You can control 
              cookie preferences through your browser settings.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact Us</h2>
            <p className="text-gray-600 mb-6">
              If you have questions about this Privacy Policy, please contact us at 
              privacy@agency.com or through our contact page.
            </p>
          </div>
        </div>
      </Section>
    </PageTransition>
  )
}

export default Privacy