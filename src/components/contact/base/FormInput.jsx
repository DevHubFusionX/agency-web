import { motion } from 'framer-motion'

const FormInput = ({ label, name, type = 'text', placeholder, required = true, value, onChange, className = '', labelClassName = '' }) => {
    return (
        <div className={`space-y-2 ${className}`}>
            <label className={`text-xs font-black uppercase tracking-widest text-gray-400 ml-1 ${labelClassName}`}>
                {label}
            </label>
            <input
                type={type}
                name={name}
                required={required}
                value={value}
                onChange={onChange}
                className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-bold text-gray-900 placeholder:text-gray-300"
                placeholder={placeholder}
            />
        </div>
    )
}

export default FormInput
