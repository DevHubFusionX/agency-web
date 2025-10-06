import SEO from '../components/SEO'
import Section from '../components/ui/Section'
import PageTransition from '../components/ui/PageTransition'

const Terms = () => {
  return (
    <PageTransition>
      <SEO 
        title="Terms of Service - Website Terms & Conditions"
        description="Read our terms of service and conditions for using our website and digital services."
        keywords="terms of service, terms and conditions, website terms, legal"
      />
      
      <Section className="py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          <p className="text-gray-600 mb-8">Last updated: January 2024</p>
          
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Acceptance of Terms</h2>
            <p className="text-gray-600 mb-6">
              By accessing and using this website, you accept and agree to be bound by the 
              terms and provision of this agreement.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Use License</h2>
            <p className="text-gray-600 mb-6">
              Permission is granted to temporarily download one copy of the materials on our 
              website for personal, non-commercial transitory viewing only.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Service Terms</h2>
            <ul className="text-gray-600 mb-6 space-y-2">
              <li>• Services are provided "as is" without warranties</li>
              <li>• We reserve the right to modify services at any time</li>
              <li>• Payment terms are specified in individual contracts</li>
              <li>• Intellectual property rights are retained by respective owners</li>
            </ul>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Limitations</h2>
            <p className="text-gray-600 mb-6">
              In no event shall our company be liable for any damages arising out of 
              the use or inability to use the materials on our website.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact Information</h2>
            <p className="text-gray-600 mb-6">
              Questions about the Terms of Service should be sent to us at legal@agency.com.
            </p>
          </div>
        </div>
      </Section>
    </PageTransition>
  )
}

export default Terms