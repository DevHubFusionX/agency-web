import { motion } from 'framer-motion'
import { Check, ArrowRight, Zap, Target, TrendingUp, Shield, Rocket } from 'lucide-react'
import Section from './ui/Section'

const CompetitivePositioning = () => {
    const pillars = [
        {
            icon: Target,
            title: 'Validation vs. Assumption',
            description: 'Most agencies start by quoting a build. We start by questioning the idea.',
            nemvol: 'Logic-driven validation phase before a single line of code. We prove market demand first.',
            others: 'Agencies build what you ask for (even if it’s wrong); Freelancers focus only on feature output.',
            highlight: 'Validation First'
        },
        {
            icon: Zap,
            title: 'Speed vs. Bloat',
            description: 'The difference between a 3-month launch and a 12-month "project".',
            nemvol: 'Lean, focused MVP builds in 8-12 weeks. High-speed iteration using modern stacks.',
            others: 'Agencies have heavy overhead and slow cycles; Freelancers often lack the full-stack tempo.',
            highlight: '8-12 Week Launch'
        },
        {
            icon: Shield,
            title: 'Ownership vs. Lock-in',
            description: 'Who really owns the future of your product?',
            nemvol: 'Total IP ownership from Day 1. Clean, scalable codebases you can take in-house anytime.',
            others: 'Some agencies use proprietary frameworks to lock you in; Freelancers might leave undocumented code.',
            highlight: 'Total IP Ownership'
        }
    ]

    return (
        <Section className="py-24 md:py-32 relative overflow-hidden bg-white">
            {/* Massive Background Typography */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center opacity-[0.02] pointer-events-none select-none uppercase font-black text-[20vw] leading-none tracking-tighter">
                Position
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start pb-20 border-b border-gray-100 mb-20">
                    <div className="lg:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-xs font-black uppercase tracking-[0.2em] mb-10"
                        >
                            <TrendingUp size={14} className="fill-current" />
                            Strategic Positioning
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="text-5xl md:text-8xl font-bold text-gray-900 leading-[0.95] tracking-tight mb-8"
                        >
                            The Gap We <br />
                            <span className="text-blue-600 italic">Fill.</span>
                        </motion.h2>
                    </div>

                    <div className="lg:col-span-5 pt-4 lg:pt-20">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-xl md:text-2xl text-gray-500 leading-relaxed font-medium"
                        >
                            We bridge the gap between freelancer unpredictability and large agency overheads.
                            <span className="text-gray-900 font-bold"> Faster than an agency, more reliable than a freelancer.</span>
                        </motion.p>
                    </div>
                </div>

                {/* Literate Comparative Flow */}
                <div className="space-y-32">
                    {pillars.map((pillar, index) => (
                        <motion.div
                            key={pillar.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
                        >
                            {/* Feature Description */}
                            <div className="lg:col-span-4">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center">
                                        <pillar.icon className="text-blue-600" size={24} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900">{pillar.title}</h3>
                                </div>
                                <p className="text-lg text-gray-500 leading-relaxed italic border-l-2 border-blue-100 pl-6 py-2">
                                    "{pillar.description}"
                                </p>
                            </div>

                            {/* Comparison Block */}
                            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                                {/* Traditional Path */}
                                <div className="p-8 rounded-[2rem] bg-gray-50 border border-gray-100 group hover:bg-gray-100 transition-colors">
                                    <div className="flex items-center gap-2 mb-4">
                                        <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                                        <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Traditional Path</span>
                                    </div>
                                    <p className="text-sm text-gray-500 font-medium leading-relaxed">
                                        {pillar.others}
                                    </p>
                                </div>

                                {/* Nemvol Logic */}
                                <div className="p-8 rounded-[2rem] bg-blue-600 shadow-2xl shadow-blue-500/20 text-white relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                                        <Rocket size={40} />
                                    </div>
                                    <div className="flex items-center gap-2 mb-4">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-300 animate-pulse" />
                                        <span className="text-[10px] font-black uppercase tracking-widest text-blue-200">Nemvol Logic</span>
                                    </div>
                                    <p className="text-sm font-bold leading-relaxed mb-4">
                                        {pillar.nemvol}
                                    </p>
                                    <div className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-blue-300">
                                        {pillar.highlight} <Check size={12} />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </Section>
    )
}

export default CompetitivePositioning
