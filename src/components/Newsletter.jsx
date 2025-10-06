import { useState } from 'react'

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email) return

    try {
      setStatus('loading')
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      setStatus('success')
      setEmail('')
    } catch (error) {
      setStatus('error')
    }
  }

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
          <div className="flex gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-blue-300 focus:outline-none"
              required
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-300 disabled:opacity-50"
            >
              {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
            </button>
          </div>
          
          {status === 'success' && (
            <p className="mt-3 text-green-200">Thanks for subscribing!</p>
          )}
          {status === 'error' && (
            <p className="mt-3 text-red-200">Something went wrong. Please try again.</p>
          )}
        </form>

        <p className="text-sm text-blue-200 mt-4">
          No spam, unsubscribe at any time.
        </p>
      </div>
    </section>
  )
}

export default Newsletter