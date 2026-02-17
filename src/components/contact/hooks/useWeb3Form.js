import { useState } from 'react'

const useWeb3Form = (initialData, accessKey = 'YOUR_WEB3FORMS_ACCESS_KEY') => {
    const [formData, setFormData] = useState(initialData)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [status, setStatus] = useState(null) // 'success' | 'error' | null

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        setStatus(null)

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    access_key: accessKey,
                    ...formData
                })
            })

            const result = await response.json()

            if (result.success) {
                setStatus('success')
                setFormData(initialData)
            } else {
                setStatus('error')
                console.error('Web3Forms Error:', result)
            }
        } catch (error) {
            setStatus('error')
            console.error('Submission error:', error)
        } finally {
            setIsSubmitting(false)
        }
    }

    return {
        formData,
        isSubmitting,
        status,
        handleChange,
        handleSubmit,
        setFormData
    }
}

export default useWeb3Form
