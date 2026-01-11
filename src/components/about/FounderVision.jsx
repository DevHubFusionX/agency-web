import { motion } from 'framer-motion'
import { Quote, ArrowRight } from 'lucide-react'
import Section from '../ui/Section'

const FounderVision = () => {
    return (
        <Section className="py-24 md:py-32 bg-gray-950 relative overflow-hidden">
            {/* Background Decorative Blur */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                    {/* Image Column */}
                    <div className="lg:col-span-5 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl shadow-blue-900/20"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2000&auto=format&fit=crop"
                                alt="Founder"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                            />
                            {/* Decorative Frame */}
                            <div className="absolute inset-0 border-[16px] border-white/5 pointer-events-none" />
                        </motion.div>

                        {/* Status Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="absolute -bottom-6 -right-6 bg-blue-600 p-8 rounded-3xl shadow-xl border border-white/10"
                        >
                            <div className="text-white">
                                <div className="text-sm font-black uppercase tracking-widest opacity-60 mb-1">Status</div>
                                <div className="text-xl font-bold">Scaling Purpose</div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Content Column */}
                    <div className="lg:col-span-7 lg:pl-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-blue-500 mb-8"
                        >
                            <Quote size={48} />
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-bold text-white leading-tight mb-8 tracking-tight"
                        >
                            "We don't just ship features. We build the <span className="text-blue-500 italic">engines of tomorrow's</span> market leaders."
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="space-y-6 text-gray-400 text-lg md:text-xl leading-relaxed font-medium"
                        >
                            <p>
                                Nemvol started from a simple observation: founders were getting lost in a sea of generic development shops that spoke in code, not in commerce.
                            </p>
                            <p>
                                My vision was to create a studio that works as a true partner—technical bridge-builders who prioritize your traction over our ticket count. We treat every line of code as an investment in your future.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6"
                        >
                            <div>
                                <div className="text-xl font-bold text-white">Fanyas Nemvol</div>
                                <div className="text-sm font-black uppercase tracking-widest text-blue-500">Founder & Managing Partner</div>
                            </div>

                            <div className="h-px w-12 bg-gray-800 hidden sm:block" />

                            <button className="flex items-center gap-2 text-blue-500 font-bold hover:text-white transition-colors group">
                                Read My Full Letter
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default FounderVision
