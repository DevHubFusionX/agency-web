import { useState, useEffect } from 'react'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'

/**
 * Hook for fetching blog posts from the backend API.
 */
export const useBlogPosts = ({ category = 'All', page = 1, limit = 10 } = {}) => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [pagination, setPagination] = useState({ page: 1, pages: 1, total: 0 })

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true)
            setError(null)

            try {
                const params = new URLSearchParams({ page, limit })
                if (category && category !== 'All') {
                    params.set('category', category)
                }

                const res = await fetch(`${API_URL}/api/blog?${params}`)
                const data = await res.json()

                if (data.success) {
                    setPosts(data.data)
                    setPagination(data.pagination)
                } else {
                    setError('Failed to load posts')
                }
            } catch (err) {
                console.error('Blog fetch error:', err)
                setError('Could not connect to server')
            } finally {
                setLoading(false)
            }
        }

        fetchPosts()
    }, [category, page, limit])

    return { posts, loading, error, pagination }
}

/**
 * Hook for fetching a single blog post by slug.
 */
export const useBlogPost = (slug) => {
    const [post, setPost] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        if (!slug) return

        const fetchPost = async () => {
            setLoading(true)
            setError(null)

            try {
                const res = await fetch(`${API_URL}/api/blog/${slug}`)
                const data = await res.json()

                if (data.success) {
                    setPost(data.data)
                } else {
                    setError('Post not found')
                }
            } catch (err) {
                console.error('Blog post fetch error:', err)
                setError('Could not connect to server')
            } finally {
                setLoading(false)
            }
        }

        fetchPost()
    }, [slug])

    return { post, loading, error }
}

/**
 * Hook for fetching blog categories.
 */
export const useBlogCategories = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await fetch(`${API_URL}/api/blog/categories`)
                const data = await res.json()
                if (data.success) {
                    setCategories(['All', ...data.data])
                }
            } catch (err) {
                console.error('Categories fetch error:', err)
                setCategories(['All'])
            }
        }

        fetchCategories()
    }, [])

    return categories
}
