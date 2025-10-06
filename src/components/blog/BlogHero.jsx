import Section from '../ui/Section'
import ParticleField from '../ui/ParticleField'

const BlogHero = () => {
  return (
    <Section className=" py-20 relative overflow-hidden">
      <ParticleField />
      <div className="absolute inset-0">

      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          App Development Blog
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Learn React, React Native, and modern app development techniques from our experienced developers.
        </p>

      </div>
      </div>
    </Section>
  )
}

export default BlogHero