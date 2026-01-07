import { useEffect } from 'react'

const SEO = ({
  title = "Digital Agency - Web Development & Design Solutions",
  description = "Professional web development, design, and digital marketing services. Transform your business with our expert team.",
  keywords = "web development, digital agency, web design, react development, digital marketing",
  image = "/og-image.jpg",
  url = window.location.href
}) => {
  useEffect(() => {
    // Update document title
    document.title = title

    // Update meta tags
    const updateMeta = (name, content) => {
      let meta = document.querySelector(`meta[name="${name}"]`) ||
        document.querySelector(`meta[property="${name}"]`)
      if (!meta) {
        meta = document.createElement('meta')
        meta.setAttribute(name.startsWith('og:') ? 'property' : 'name', name)
        document.head.appendChild(meta)
      }
      meta.setAttribute('content', content)
    }

    updateMeta('description', description)
    updateMeta('keywords', keywords)
    updateMeta('og:title', title)
    updateMeta('og:description', description)
    updateMeta('og:image', image)
    updateMeta('og:url', url)
    updateMeta('og:type', 'website')
    updateMeta('twitter:card', 'summary_large_image')
    updateMeta('twitter:title', title)
    updateMeta('twitter:description', description)
    updateMeta('twitter:image', image)
  }, [title, description, keywords, image, url])

  return null
}

export default SEO