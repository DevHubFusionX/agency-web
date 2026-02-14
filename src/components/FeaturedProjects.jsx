import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Briefcase } from 'lucide-react'
import { projects } from '../data/projects'
import Section from './ui/Section'

const FeaturedProjects = () => {
    const featuredProjects = projects.filter(p => p.featured).slice(0, 3)

    return (
        <Section className="bg-white py-24">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-2xl">
                        <h2 className="text-sm font-black uppercase tracking-[0.2em] text-blue-600 mb-4 font-black">Success Stories</h2>
                        <h3 className="text-4xl md:text-6xl font-bold text-gray-900 leading-[1.1] tracking-tight">
                            Validated products that <span className="text-blue-600 italic">win.</span>
                        </h3>
                    </div>
                    <Link
                        to="/portfolio"
                        className="flex items-center gap-2 text-gray-900 hover:text-blue-600 font-bold transition-all group pb-2 border-b-2 border-gray-100 hover:border-blue-600"
                    >
                        View Full Portfolio
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {featuredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group cursor-pointer"
                        >
                            <Link to={`/portfolio/${project.id}`}>
                                <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden mb-8 shadow-2xl shadow-gray-200/50 group-hover:shadow-blue-200/50 transition-all duration-500">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                                        <div className="flex items-center gap-2 text-blue-400 mb-2">
                                            <Briefcase size={16} />
                                            <span className="text-xs font-black uppercase tracking-widest">{project.industry}</span>
                                        </div>
                                        <h4 className="text-2xl font-bold text-white mb-2">{project.title}</h4>
                                    </div>
                                </div>
                                <div className="flex justify-between items-start group-hover:translate-x-2 transition-transform duration-300">
                                    <div>
                                        <h4 className="text-2xl font-bold text-gray-900 mb-1">{project.title}</h4>
                                        <p className="text-gray-500 font-medium">{project.description}</p>
                                    </div>
                                    <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white transition-all duration-300">
                                        <ArrowRight size={20} />
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    )
}

export default FeaturedProjects
