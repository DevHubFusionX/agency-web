import { motion } from 'framer-motion'
import { Rocket, Target, Building2, Layers } from 'lucide-react'
import Section from './ui/Section'

const AudienceCard = ({ title, description, icon: Icon, delay }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay }}
            whileHover={{ y: -8 }}
            className="bg-white rounded-[2.5rem] p-10 border border-gray-100 shadow-xl shadow-gray-100/50 hover:shadow-2xl transition-all duration-500 group"
        >
            <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center mb-8 border border-gray-100 group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-300">
                <Icon size={28} className="text-gray-400 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight group-hover:text-blue-600 transition-colors">{title}</h3>
            <p className="text-lg text-gray-500 leading-relaxed font-medium">{description}</p>
        </motion.div>
    )
}

const TargetAudience = () => {
    const segments = [
        {
            title: 'Early-Stage Founders',
            description: 'You have a visionary idea but need to prove it fast. We help you build a validated MVP to win early users or seed funding.',
            icon: Rocket
        },
        {
            title: 'VC-Backed Startups',
            description: 'You need to iterate quickly without compromising quality. We provide the senior muscle to help you scale and ship features.',
            icon: Target
        },
        {
            title: 'Modern SMEs',
            description: 'You need to automate or modernize to stay ahead. We help you transform your operations with custom digital solutions.',
            icon: Building2
        },
        {
            title: 'Digital Agencies',
            description: 'You have the creative vision but need a reliable technical engine. We act as your expert white-label development partner.',
            icon: Layers
        }
    ]

    return (
        <Section className="py-24 md:py-32 relative overflow-hidden bg-white">
            <div className="absolute top-20 right-10 opacity-[0.03] pointer-events-none select-none uppercase font-black text-[10vw] whitespace-nowrap leading-none tracking-tighter text-right">
                Nemvol <br /> Segments
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24 text-left">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-black uppercase tracking-[0.2em] mb-8"
                        >
                            Who We Serve
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-6xl md:text-8xl font-bold text-gray-900 leading-[0.9] tracking-tight"
                        >
                            Tailored for <br />
                            <span className="text-blue-600 italic">Impact.</span>
                        </motion.h2>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="lg:pt-20"
                    >
                        <p className="text-xl md:text-2xl text-gray-500 max-w-xl leading-relaxed font-medium">
                            We partner with organizations that prioritize speed, clarity, and measurable results. Our model scales to meet the unique needs of every growth stage.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {segments.map((segment, index) => (
                        <AudienceCard
                            key={segment.title}
                            {...segment}
                            delay={index * 0.1}
                        />
                    ))}
                </div>
            </div>
        </Section>
    )
}

export default TargetAudience
