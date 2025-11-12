/**
 * Site-wide constants and configuration
 */

export const SITE_NAME = 'IncluSens'
export const SITE_DESCRIPTION =
  '12 millions de personnes en France vivent avec un handicap invisible. IncluSens rend visibles ces réalités.'
export const SITE_URL = 'https://victordelamonica.github.io'

export const SOCIAL_LINKS = {
  email: 'contact@inclusens.fr',
  // Add other social links as needed
} as const

export const SEO_DEFAULTS = {
  title: `${SITE_NAME} - Association pour la visibilité du handicap invisible`,
  description: SITE_DESCRIPTION,
  ogImage: '/logo.png',
  twitterCard: 'summary_large_image',
} as const

export const ANIMATION_DURATION = {
  fast: 200,
  normal: 300,
  slow: 500,
} as const

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const

