import { motion } from 'framer-motion'

const ClientLogos = () => {
    // Mock client logos - in a real app, these would be actual SVG/Image assets
    const clients = [
        { name: 'TechFlow', id: 1 },
        { name: 'Nexus AI', id: 2 },
        { name: 'CloudScale', id: 3 },
        { name: 'GlobalPay', id: 4 },
        { name: 'EcoSystem', id: 5 },
        { name: 'DataCore', id: 6 },
        { name: 'PeakPerf', id: 7 },
        { name: 'SmartSolutions', id: 8 },
    ]

    // Double the list for seamless infinite loop
    const displayClients = [...clients, ...clients]

    return (
        <section className="py-12 bg-white border-b border-gray-50 overflow-hidden">
            <motion.div
                className="max-w-7xl mx-auto px-6 mb-8 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">
                    Trusted by Innovators Worldwide
                </span>
            </motion.div>

            <motion.div
                className="relative flex overflow-hidden"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
                <motion.div
                    className="flex whitespace-nowrap gap-16 md:gap-24 items-center"
                    animate={{ x: [0, -1000] }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 30,
                            ease: "linear",
                        },
                    }}
                >
                    {displayClients.map((client, index) => (
                        <div
                            key={`${client.id}-${index}`}
                            className="text-2xl md:text-3xl font-black text-gray-300 hover:text-blue-600 transition-colors duration-300 select-none uppercase tracking-tighter"
                        >
                            {client.name}
                        </div>
                    ))}
                </motion.div>

                {/* Gradient Masks */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
            </motion.div>
        </section>
    )
}

export default ClientLogos
