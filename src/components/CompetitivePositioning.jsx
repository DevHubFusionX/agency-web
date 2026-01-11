import { motion } from 'framer-motion'
import { Check, X, Shield, Zap, Target, TrendingUp, Key } from 'lucide-react'
import Section from './ui/Section'

const CompetitivePositioning = () => {
    const comparisons = [
        {
            feature: 'Validation First',
            nemvol: true,
            freelancer: false,
            agency: true,
            description: 'We prove the idea before we build it.'
        },
        {
            feature: 'Launch in 8-12 Weeks',
            nemvol: true,
            freelancer: true,
            agency: false,
            description: 'Fast market entry without the bloat.'
        },
        {
            feature: 'Fixed-Fee Discovery',
            nemvol: true,
            freelancer: true,
            agency: false,
            description: 'Predictable costs, no hidden surprises.'
        },
        {
            feature: 'Post-Launch Partner',
            nemvol: true,
            freelancer: false,
            agency: false,
            description: 'We stay with you to iterate and scale.'
        },
        {
            feature: 'Total IP Ownership',
            nemvol: true,
            freelancer: 'Variable',
            agency: true,
            description: 'You own the code and the future.'
        }
    ]

    return (
        <Section className="py-24 md:py-32 relative overflow-hidden bg-gray-50">
            <div className="absolute top-20 left-10 opacity-[0.03] pointer-events-none select-none uppercase font-black text-[12vw] whitespace-nowrap leading-none tracking-tighter">
                Nemvol Logic
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-black uppercase tracking-[0.2em] mb-8"
                    >
                        The Advantage
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-6xl md:text-8xl font-bold text-gray-900 leading-[0.9] tracking-tight mb-8"
                    >
                        Strategically <br />
                        <span className="text-blue-600 italic">Positioned.</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl text-gray-500 leading-relaxed font-medium"
                    >
                        We bridge the gap between freelancer unpredictability and large agency overheads. Faster than an agency, more reliable than a freelancer.
                    </motion.p>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[800px]">
                        <thead>
                            <tr className="border-b border-gray-100">
                                <th className="py-8 font-black uppercase tracking-widest text-xs text-gray-400">Core Attribute</th>
                                <th className="py-8 px-8 text-center bg-blue-600 text-white rounded-t-[2.5rem] font-black uppercase tracking-widest text-xs">Nemvol Studio</th>
                                <th className="py-8 px-8 text-center font-black uppercase tracking-widest text-xs text-gray-400">Freelancers</th>
                                <th className="py-8 px-8 text-center font-black uppercase tracking-widest text-xs text-gray-400">Large Agencies</th>
                            </tr>
                        </thead>
                        <tbody>
                            {comparisons.map((item, index) => (
                                <tr key={item.feature} className="border-b border-gray-100 group transition-colors hover:bg-white/50">
                                    <td className="py-10 pr-8">
                                        <div className="text-xl font-bold text-gray-900 mb-1">{item.feature}</div>
                                        <div className="text-sm text-gray-400 font-medium">{item.description}</div>
                                    </td>
                                    <td className="py-10 px-8 text-center bg-blue-600/5 group-last:rounded-b-[2.5rem] border-x border-blue-600/10">
                                        <div className="flex justify-center">
                                            <Check className="text-blue-600" size={28} />
                                        </div>
                                    </td>
                                    <td className="py-10 px-8 text-center">
                                        <div className="flex justify-center">
                                            {item.freelancer === true ? (
                                                <Check className="text-gray-300" size={24} />
                                            ) : item.freelancer === 'Variable' ? (
                                                <span className="text-xs font-black text-gray-400 uppercase tracking-widest">Variable</span>
                                            ) : (
                                                <X className="text-gray-100" size={24} />
                                            )}
                                        </div>
                                    </td>
                                    <td className="py-10 px-8 text-center">
                                        <div className="flex justify-center">
                                            {item.agency ? (
                                                <Check className="text-gray-300" size={24} />
                                            ) : (
                                                <X className="text-gray-100" size={24} />
                                            )}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </Section>
    )
}

export default CompetitivePositioning
