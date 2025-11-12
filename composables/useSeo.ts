/**
 * Composable for managing SEO meta tags
 * @param options - SEO configuration options
 */
interface UseSeoOptions {
  title?: string
  description?: string
  image?: string
  url?: string
  type?: string
}

export const useSeo = (options: UseSeoOptions = {}) => {
  const { title, description, image, url, type = 'website' } = options

  const siteConfig = {
    siteName: 'IncluSens',
    defaultTitle: 'IncluSens - Association pour la visibilité du handicap invisible',
    defaultDescription:
      '12 millions de personnes en France vivent avec un handicap invisible. IncluSens rend visibles ces réalités.',
    defaultImage: '/logo.png',
    siteUrl: 'https://victordelamonica.github.io',
  }

  const fullTitle = title ? `${title} - ${siteConfig.siteName}` : siteConfig.defaultTitle
  const metaDescription = description || siteConfig.defaultDescription
  const metaImage = image || siteConfig.defaultImage
  const metaUrl = url || siteConfig.siteUrl

  useHead({
    title: fullTitle,
    meta: [
      { name: 'description', content: metaDescription },
      // Open Graph
      { property: 'og:title', content: fullTitle },
      { property: 'og:description', content: metaDescription },
      { property: 'og:type', content: type },
      { property: 'og:image', content: metaImage },
      { property: 'og:url', content: metaUrl },
      // Twitter Card
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: fullTitle },
      { name: 'twitter:description', content: metaDescription },
      { name: 'twitter:image', content: metaImage },
    ],
    link: [{ rel: 'canonical', href: metaUrl }],
  })

  return {
    title: fullTitle,
    description: metaDescription,
  }
}

