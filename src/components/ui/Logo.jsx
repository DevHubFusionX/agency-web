import { motion } from 'framer-motion'

const Logo = ({ className = "h-10", iconOnly = true }) => {
    return (
        <div className={`flex items-center gap-3 ${className}`}>
            <div className="h-full aspect-square relative flex-shrink-0">
                <img
                    src="/image.svg"
                    alt="Nemvol Logo"
                    className="w-full h-full object-contain"
                />
            </div>
            {!iconOnly && (
                <span className="text-2xl font-black tracking-tighter text-current leading-none">
                    Nemvol
                </span>
            )}
        </div>
    )
}

export default Logo
