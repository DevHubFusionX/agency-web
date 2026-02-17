import { motion } from 'framer-motion'

const FormTextarea = ({ label, name, placeholder, rows = 4, required = true, value, onChange, className = '', labelClassName = '' }) => {
    return (
        <div className={`space-y-2 ${className}`}>
            <label className={`text-xs font-black uppercase tracking-widest text-gray-400 ml-1 ${labelClassName}`}>
                {label}
            </label>
            <textarea
                name={name}
                required={required}
                rows={rows}
                value={value}
                onChange={onChange}
                className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-bold text-gray-900 placeholder:text-gray-300 resize-none text-sm md:text-base"
                placeholder={placeholder}
            />
        </div>
    )
}

export default FormTextarea
