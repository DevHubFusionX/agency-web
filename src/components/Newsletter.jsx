import { motion } from 'framer-motion'
import { Send } from 'lucide-react'
import FormInput from './contact/base/FormInput'
import FormSubmit from './contact/base/FormSubmit'
import FormStatus from './contact/base/FormStatus'
import useContactForm from './contact/hooks/useContactForm'

const Newsletter = () => {
  const { formData, isSubmitting, status, handleChange, handleSubmit } = useContactForm({
    email: '',
    subject: 'Newsletter Subscription'
  }, '/api/email/newsletter')

  return (
    <section className="py-16 bg-blue-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-headline text-3xl font-bold text-white mb-4">
          Stay Updated with Industry Insights
        </h2>
        <p className="text-body text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Get the latest trends, best practices, and exclusive content delivered to your inbox monthly.
        </p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-3 items-end">
            <FormInput
              label="Work Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="flex-1 w-full"
              labelClassName="text-blue-100"
            />
            <FormSubmit
              isLoading={isSubmitting}
              text="Subscribe"
              icon={Send}
              className="pt-0 w-full sm:w-auto"
            />
          </div>

          <FormStatus
            status={status}
            successMessage="Thanks for subscribing!"
            errorMessage="Something went wrong. Please try again."
          />
        </form>

        <p className="text-sm text-blue-200 mt-4">
          No spam, unsubscribe at any time.
        </p>
      </div>
    </section>
  )
}

export default Newsletter