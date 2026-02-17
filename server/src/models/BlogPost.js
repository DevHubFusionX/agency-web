import mongoose from 'mongoose'
import slugify from 'slugify'

const blogPostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        trim: true,
        maxlength: [200, 'Title cannot exceed 200 characters']
    },
    slug: {
        type: String,
        unique: true,
        index: true
    },
    excerpt: {
        type: String,
        required: [true, 'Excerpt is required'],
        maxlength: [500, 'Excerpt cannot exceed 500 characters']
    },
    content: {
        type: String,
        required: [true, 'Content is required']
    },
    author: {
        type: String,
        default: 'Nemvol Team'
    },
    date: {
        type: Date,
        default: Date.now
    },
    readTime: {
        type: String,
        default: '5 min read'
    },
    category: {
        type: String,
        required: [true, 'Category is required'],
        index: true
    },
    tags: [{
        type: String,
        trim: true
    }],
    image: {
        type: String,
        default: ''
    },
    featured: {
        type: Boolean,
        default: false
    },
    published: {
        type: Boolean,
        default: false,
        index: true
    },
    metaDescription: {
        type: String,
        maxlength: [160, 'Meta description cannot exceed 160 characters']
    },
    keywords: {
        type: String
    }
}, {
    timestamps: true
})

// Auto-generate slug from title before saving
blogPostSchema.pre('save', function (next) {
    if (this.isModified('title') || !this.slug) {
        this.slug = slugify(this.title, { lower: true, strict: true })
    }
    next()
})

const BlogPost = mongoose.model('BlogPost', blogPostSchema)

export default BlogPost
