import { ArrowRight } from 'lucide-react'
import Button from '../../ui/Button'
import LoadingSpinner from '../../ui/LoadingSpinner'

const FormSubmit = ({ isLoading, text, icon: Icon, className = '' }) => {
    return (
        <div className={`pt-4 ${className}`}>
            <Button
                type="submit"
                size="lg"
                className="w-full h-14 md:h-16 rounded-2xl text-sm sm:text-base md:text-lg font-black uppercase tracking-widest shadow-xl shadow-blue-500/20 group"
                disabled={isLoading}
            >
                {isLoading ? (
                    <LoadingSpinner size="sm" />
                ) : (
                    <span className="flex items-center justify-center gap-2 sm:gap-3">
                        {text}
                        {Icon && (
                            <>
                                <Icon size={20} className="group-hover:rotate-12 transition-transform hidden sm:block" />
                                <Icon size={18} className="group-hover:rotate-12 transition-transform sm:hidden" />
                            </>
                        )}
                    </span>
                )}
            </Button>
        </div>
    )
}

export default FormSubmit
