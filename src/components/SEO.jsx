import { useEffect } from 'react'

const SEO = ({
  title = "NEMVOL - Build Validated Digital Products",
  description = "NEMVOL helps founders, startups, and SMEs turn ideas into validated digital products fast. MVP development, UI/UX design, and digital innovation.",
  keywords = "Nemvol, MVP development, product discovery, UI/UX design, web development, mobile apps, startup validation, digital agency",
  image = "https://nemvol.com/image.png",
  url = typeof window !== 'undefined' ? window.location.href : 'https://nemvol.com',
  type = "website"
}) => {
  useEffect(() => {
    // Update document title
    document.title = title

    // Update or create canonical link
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', url)

    // Update meta tags
    const updateMeta = (name, content) => {
      let meta = document.querySelector(`meta[name="${name}"]`) ||
        document.querySelector(`meta[property="${name}"]`)
      if (!meta) {
        meta = document.createElement('meta')
        meta.setAttribute(name.startsWith('og:') || name.startsWith('twitter:') ? 'property' : 'name', name)
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
    updateMeta('og:type', type)
    updateMeta('og:site_name', 'NEMVOL')
    updateMeta('twitter:card', 'summary_large_image')
    updateMeta('twitter:title', title)
    updateMeta('twitter:description', description)
    updateMeta('twitter:image', image)
  }, [title, description, keywords, image, url, type])

  return null
}

export default SEO