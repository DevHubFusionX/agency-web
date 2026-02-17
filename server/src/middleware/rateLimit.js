import rateLimit from 'express-rate-limit'

// Rate limit for email endpoints: 5 requests per 15 minutes per IP
export const emailLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 5,
    message: {
        error: 'Too many submissions. Please try again in 15 minutes.'
    },
    standardHeaders: true,
    legacyHeaders: false
})

// General API rate limit: 100 requests per 15 minutes
export const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: {
        error: 'Too many requests. Please try again later.'
    },
    standardHeaders: true,
    legacyHeaders: false
})
