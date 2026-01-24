import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, CheckCircle2 } from 'lucide-react'
import Button from '../ui/Button'
import LoadingSpinner from '../ui/LoadingSpinner'

const HeroLeadForm = ({ compact = false }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        projectType: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            // Simulate form submission
            await new Promise(resolve => setTimeout(resolve, 1500))
            console.log('Hero Lead Form Submission:', formData)
            setSubmitted(true)
            setFormData({ name: '', email: '', projectType: '' })
        } catch (error) {
            console.error('Submission error:', error)
        } finally {
            setIsSubmitting(false)
        }
    }

    if (submitted) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl border border-green-100 text-center flex flex-col items-center justify-center min-h-[400px]"
            >
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center text-green-600 mb-6 font-black uppercase tracking-widest text-sm">
                    <CheckCircle2 size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Request Received!</h3>
                <p className="text-gray-500 font-medium">We'll reach out within 24 hours.</p>
            </motion.div>
        )
    }

    return (
        <div className={`bg-white/90 backdrop-blur-sm p-6 md:p-8 rounded-[2.5rem] border border-gray-100 shadow-2xl shadow-blue-500/5 ${compact ? 'p-6' : ''}`}>
            <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Book Your Strategy Call</h3>
                <p className="text-sm text-gray-500 font-medium">Free 30-min discovery for your MVP.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Full Name</label>
                    <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-5 py-3.5 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-bold text-gray-900 placeholder:text-gray-300 text-sm"
                        placeholder="John Doe"
                    />
                </div>

                <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Work Email</label>
                    <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-5 py-3.5 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-bold text-gray-900 placeholder:text-gray-300 text-sm"
                        placeholder="john@company.com"
                    />
                </div>

                <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Project Type</label>
                    <select
                        name="projectType"
                        required
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-5 py-3.5 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-bold text-gray-900 appearance-none cursor-pointer text-sm"
                    >
                        <option value="">Select Category</option>
                        <option value="new-mvp">New MVP Build</option>
                        <option value="scaling">Scale Product</option>
                        <option value="discovery">Discovery</option>
                    </select>
                </div>

                <div className="pt-2">
                    <Button type="submit" size="lg" className="w-full h-14 rounded-xl text-sm font-black uppercase tracking-widest shadow-lg shadow-blue-500/10 group" disabled={isSubmitting}>
                        {isSubmitting ? (
                            <LoadingSpinner size="sm" />
                        ) : (
                            <span className="flex items-center gap-3">
                                Claim Free Session
                                <Calendar size={18} className="group-hover:rotate-12 transition-transform" />
                            </span>
                        )}
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default HeroLeadForm
