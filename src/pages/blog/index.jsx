import { Suspense, lazy } from 'react'
import SEO from '../../components/SEO'
import PageTransition from '../../components/ui/PageTransition'
import BlogHero from '../../components/blog/BlogHero'
import BlogGrid from '../../components/blog/BlogGrid'
import SectionSkeleton from '../../components/ui/SectionSkeleton'

// Lazy Load Components
const StrategicEngagement = lazy(() => import('../../components/StrategicPartnerships'))

const Blog = () => {
  return (
    <PageTransition>
      <SEO
        title="Blog - Digital Insights & Web Development Expertise"
        description="Stay updated with the latest web development trends, design insights, and digital strategy tips from our expert team."
        keywords="web development blog, digital insights, react tutorials, design tips, tech trends"
      />
      <BlogHero />
      <BlogGrid />

      <Suspense fallback={<SectionSkeleton />}>
        <StrategicEngagement />
      </Suspense>
    </PageTransition>
  )
}

export default Blog