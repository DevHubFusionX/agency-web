import { Router } from 'express'
import { body, validationResult } from 'express-validator'
import BlogPost from '../models/BlogPost.js'
import { jwtAuth } from '../middleware/auth.js'

const router = Router()

/**
 * GET /api/blog
 * List published blog posts with pagination and category filter
 */
router.get('/', async (req, res) => {
    try {
        const {
            page = 1,
            limit = 10,
            category,
            featured,
            search
        } = req.query

        const filter = { published: true }

        if (category && category !== 'All') {
            filter.category = category
        }

        if (featured === 'true') {
            filter.featured = true
        }

        if (search) {
            filter.$or = [
                { title: { $regex: search, $options: 'i' } },
                { excerpt: { $regex: search, $options: 'i' } },
                { tags: { $in: [new RegExp(search, 'i')] } }
            ]
        }

        const skip = (Number(page) - 1) * Number(limit)

        const [posts, total] = await Promise.all([
            BlogPost.find(filter)
                .sort({ date: -1 })
                .skip(skip)
                .limit(Number(limit))
                .select('-content'), // Don't send full content in list view
            BlogPost.countDocuments(filter)
        ])

        res.json({
            success: true,
            data: posts,
            pagination: {
                page: Number(page),
                limit: Number(limit),
                total,
                pages: Math.ceil(total / Number(limit))
            }
        })
    } catch (error) {
        console.error('Blog list error:', error)
        res.status(500).json({ success: false, message: 'Failed to fetch posts' })
    }
})

/**
 * GET /api/blog/categories
 * List unique categories from published posts
 */
router.get('/categories', async (req, res) => {
    try {
        const categories = await BlogPost.distinct('category', { published: true })
        res.json({ success: true, data: categories })
    } catch (error) {
        console.error('Categories error:', error)
        res.status(500).json({ success: false, message: 'Failed to fetch categories' })
    }
})

/**
 * GET /api/blog/:slug
 * Get single post by slug (full content)
 */
router.get('/:slug', async (req, res) => {
    try {
        const post = await BlogPost.findOne({
            slug: req.params.slug,
            published: true
        })

        if (!post) {
            return res.status(404).json({ success: false, message: 'Post not found' })
        }

        res.json({ success: true, data: post })
    } catch (error) {
        console.error('Blog get error:', error)
        res.status(500).json({ success: false, message: 'Failed to fetch post' })
    }
})

// ─── Protected Routes (Admin) ───────────────────────────────────────────

/**
 * GET /api/blog/admin/all
 * List ALL posts (published + drafts) for admin dashboard
 */
router.get('/admin/all', jwtAuth, async (req, res) => {
    try {
        const { page = 1, limit = 20 } = req.query
        const skip = (Number(page) - 1) * Number(limit)

        const [posts, total] = await Promise.all([
            BlogPost.find()
                .sort({ createdAt: -1 })
                .skip(skip)
                .limit(Number(limit))
                .select('-content'),
            BlogPost.countDocuments()
        ])

        res.json({
            success: true,
            data: posts,
            pagination: {
                page: Number(page),
                limit: Number(limit),
                total,
                pages: Math.ceil(total / Number(limit))
            }
        })
    } catch (error) {
        console.error('Admin blog list error:', error)
        res.status(500).json({ success: false, message: 'Failed to fetch posts' })
    }
})

/**
 * GET /api/blog/admin/:id
 * Get single post by ID for editing (includes full content)
 */
router.get('/admin/:id', jwtAuth, async (req, res) => {
    try {
        const post = await BlogPost.findById(req.params.id)

        if (!post) {
            return res.status(404).json({ success: false, message: 'Post not found' })
        }

        res.json({ success: true, data: post })
    } catch (error) {
        console.error('Admin blog get error:', error)
        res.status(500).json({ success: false, message: 'Failed to fetch post' })
    }
})

/**
 * POST /api/blog
 * Create a new blog post
 */
router.post('/', jwtAuth, [
    body('title').trim().notEmpty().withMessage('Title is required'),
    body('excerpt').trim().notEmpty().withMessage('Excerpt is required'),
    body('content').trim().notEmpty().withMessage('Content is required'),
    body('category').trim().notEmpty().withMessage('Category is required')
], async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ success: false, errors: errors.array() })
    }

    try {
        const post = new BlogPost(req.body)
        await post.save()
        res.status(201).json({ success: true, data: post })
    } catch (error) {
        console.error('Blog create error:', error)
        if (error.code === 11000) {
            return res.status(400).json({ success: false, message: 'A post with this title already exists' })
        }
        res.status(500).json({ success: false, message: 'Failed to create post' })
    }
})

/**
 * PUT /api/blog/:id
 * Update an existing blog post
 */
router.put('/:id', jwtAuth, async (req, res) => {
    try {
        const post = await BlogPost.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        )

        if (!post) {
            return res.status(404).json({ success: false, message: 'Post not found' })
        }

        res.json({ success: true, data: post })
    } catch (error) {
        console.error('Blog update error:', error)
        res.status(500).json({ success: false, message: 'Failed to update post' })
    }
})

/**
 * DELETE /api/blog/:id
 * Delete a blog post
 */
router.delete('/:id', jwtAuth, async (req, res) => {
    try {
        const post = await BlogPost.findByIdAndDelete(req.params.id)

        if (!post) {
            return res.status(404).json({ success: false, message: 'Post not found' })
        }

        res.json({ success: true, message: 'Post deleted successfully' })
    } catch (error) {
        console.error('Blog delete error:', error)
        res.status(500).json({ success: false, message: 'Failed to delete post' })
    }
})

export default router
