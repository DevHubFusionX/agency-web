import { motion } from 'framer-motion'
import { Search, PenTool, Code, CheckCircle, TrendingUp } from 'lucide-react'
import Section from './ui/Section'

const Step = ({ number, title, description, icon: Icon, delay, isLast }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay }}
            className="flex gap-8 group relative"
        >
            <div className="flex flex-col items-center relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center border border-gray-100 group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-300">
                    <Icon size={28} className="text-gray-400 group-hover:text-white transition-colors" />
                </div>
                {!isLast && (
                    <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: 'calc(100% - 4rem)' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: delay + 0.3 }}
                        className="w-px bg-blue-100 mt-4 origin-top"
                    />
                )}
            </div>
            <div className="pb-16">
                <div className="flex items-center gap-4 mb-3">
                    <span className="text-blue-600 font-black text-sm uppercase tracking-widest">Step {number}</span>
                    <div className="h-px w-8 bg-blue-100 opacity-50" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight group-hover:text-blue-600 transition-colors">
                    {title}
                </h3>
                <p className="text-xl text-gray-500 max-w-xl leading-relaxed font-medium">
                    {description}
                </p>
            </div>
        </motion.div>
    )
}

const OurApproach = () => {
    const steps = [
        {
            number: '01',
            title: 'We find what your users want.',
            description: 'We dive deep into the problem and market dynamics to ensure we build something people actually use. Validation is our first priority.',
            icon: Search
        },
        {
            number: '02',
            title: 'We build experiences that convert.',
            description: 'Translating strategy into intuitive product experiences that turn your visitors into loyal customers.',
            icon: PenTool
        },
        {
            number: '03',
            title: 'We code for scale.',
            description: 'Disciplined, agile development that ensures your product is fast, secure, and ready for thousands of users from day one.',
            icon: Code
        },
        {
            number: '04',
            title: 'We prove it works.',
            description: 'We don’t just launch; we measure. Usage, performance, and traction are analyzed to prove your concept with real metrics.',
            icon: CheckCircle
        },
        {
            number: '05',
            title: 'We scale your revenue.',
            description: 'Post-launch optimization to turn early traction into sustainable growth. We stay with you to refine and expand your impact.',
            icon: TrendingUp
        }
    ]

    return (
        <Section className="py-24 md:py-32 relative bg-white">
            <div className="absolute top-20 right-10 opacity-[0.03] pointer-events-none select-none uppercase font-black text-[10vw] whitespace-nowrap leading-none tracking-tighter text-right">
                Nemvol <br /> Playbook
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <div className="max-w-3xl mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-black uppercase tracking-[0.2em] mb-8"
                    >
                        How We Get You There
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-6xl md:text-8xl font-bold text-gray-900 leading-[0.9] tracking-tight"
                    >
                        A Journey from <br />
                        <span className="text-blue-600 italic">Idea to Impact.</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                    <div className="space-y-0 relative">
                        {steps.map((step, index) => (
                            <Step
                                key={step.number}
                                {...step}
                                number={step.number}
                                delay={index * 0.15}
                                isLast={index === steps.length - 1}
                            />
                        ))}
                    </div>

                    <div className="sticky top-32 hidden lg:block">
                        <div className="relative p-12 rounded-[3rem] bg-blue-600 text-white overflow-hidden shadow-2xl shadow-blue-200">
                            <div className="relative z-10">
                                <h3 className="text-4xl font-bold mb-8 leading-tight">
                                    We Build the Right Product, <br /> the Right Way.
                                </h3>
                                <p className="text-blue-50 text-xl leading-relaxed mb-12 opacity-80">
                                    Our model eliminates guesswork. We focus on your specific outcomes to deliver clear, measurable results at every milestone.
                                </p>
                                <div className="grid grid-cols-2 gap-8">
                                    <div>
                                        <div className="text-4xl font-black mb-1 leading-none">100%</div>
                                        <div className="text-[10px] uppercase font-black tracking-widest text-blue-200">Goal Alignment</div>
                                    </div>
                                    <div>
                                        <div className="text-4xl font-black mb-1 leading-none">ZERO</div>
                                        <div className="text-[10px] uppercase font-black tracking-widest text-blue-200">Wasted Effort</div>
                                    </div>
                                </div>
                            </div>

                            {/* Background Accent */}
                            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default OurApproach
