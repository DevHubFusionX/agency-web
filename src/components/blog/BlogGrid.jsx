import { useState, useEffect } from 'react'
import { Calendar, Clock, User, Tag } from 'lucide-react'
import Section from '../ui/Section'
import Card from '../ui/Card'
import Button from '../ui/Button'
import LoadingSkeleton from '../ui/LoadingSkeleton'
import { blogPosts } from '../../data/blogPosts'

const BlogGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [loading, setLoading] = useState(true)
  
  const categories = ['All', 'Development', 'Design', 'Strategy']
  
  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory)

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <Section>
      <div className="mb-12">
        <div className="flex flex-wrap gap-4 justify-center">
          {categories.map(category => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category)}
              className="px-6"
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {loading ? (
          Array.from({ length: 6 }).map((_, i) => (
            <LoadingSkeleton.Card key={i} />
          ))
        ) : (
          filteredPosts.map(post => (
          <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
              <div className="text-blue-600 text-6xl font-bold opacity-20">
                {post.category.charAt(0)}
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {new Date(post.date).toLocaleDateString()}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                {post.title}
              </h3>
              
              <p className="text-gray-600 mb-4 line-clamp-3">
                {post.excerpt}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <User className="w-4 h-4" />
                  {post.author}
                </div>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                  {post.category}
                </span>
              </div>
            </div>
          </Card>
          ))
        )}
      </div>
    </Section>
  )
}

export default BlogGrid