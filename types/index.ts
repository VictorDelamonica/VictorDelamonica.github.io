/**
 * Type definitions for PageTemplate component props
 */
export interface PageTemplateProps {
  /** Main title text to display */
  title: string
  /** Title styling: 'handwritten' (Lazydog with shadow) or 'bold' (Garet Heavy) or 'custom' */
  titleStyle?: 'handwritten' | 'bold' | 'custom'
  /** Subtitle text (optional) */
  subtitle?: string
  /** Subtitle styling: 'handwritten' or 'normal' or 'custom' */
  subtitleStyle?: 'handwritten' | 'normal' | 'custom'
  /** Show back button */
  showBackButton?: boolean
  /** Back button text */
  backText?: string
  /** Back button link */
  backLink?: string
  /** Show CTA button */
  showCTA?: boolean
  /** CTA button text */
  ctaText?: string
  /** CTA button link */
  ctaLink?: string
  /** Optional background image URL */
  bgImage?: string
  /** Background image opacity (0-1) */
  bgImageOpacity?: number
  /** Background image position */
  bgImagePosition?: string
  /** Background image size */
  bgImageSize?: string
}

/**
 * Type definitions for section components
 */
export interface SectionMetadata {
  title: string
  description: string
}

/**
 * Color mode preference type
 */
export type ColorMode = 'light' | 'dark' | 'system'

/**
 * Navigation item type
 */
export interface NavigationItem {
  label: string
  to: string
  external?: boolean
}

